import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo } from "../../imagepath";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast for notifications

const NewPasswordVendor = () => {
    const [eye, setEye] = useState(true);
    const [eye2, setEye2] = useState(true);
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmNewPassword: ''
    });
    const { token } = useParams(); // Get token from URL parameters
    const navigate = useNavigate(); // For navigation after password reset

    // Function to toggle password visibility
    const onEyeClick = () => {
        setEye(!eye);
    };

    const onEyeClick2 = () => {
        setEye2(!eye2);
    };

    // Configure Owl Carousel settings
    const settings = {
        items: 2,
        margin: 25,
        dots: true,
        nav: true,
        navText: [
            '<i className="fas fa-arrow-left"></i>',
            '<i className="fas fa-arrow-right"></i>',
        ],
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            },
        },
    };

    // Function to handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.newPassword || !formData.confirmNewPassword) {
            toast.error("Both password fields are required");
            return;
        }

        if (formData.newPassword !== formData.confirmNewPassword) {
            toast.error("Passwords do not match localhost wala chl rha h");
            return;
        }

        try {
            // Create a new FormData object
            const formDataObj = new FormData();
            formDataObj.append("token", token);
            formDataObj.append("new_password", formData.newPassword);
    
            const response = await axios.post(
                "https://api.novajobs.us/api/vendors/reset-password", // Updated URL for vendors
                formDataObj,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Response Data:", response?.data);

            // Display success message and navigate
            toast.success("Password reset successfully!");
            navigate("/login");
    
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message || "Error resetting password.");
        }
    };

    return (
        <> 
            <div className="main-wrapper">
                <div className="row">
                    {/* Login Banner */}
                    <div className="col-md-6 login-bg">
                        <OwlCarousel
                            {...settings}
                            className="owl-carousel login-slide owl-theme"
                        >
                            <div className="welcome-login">
                                <div className="login-banner">
                                    <img src={LoginImg} className="img-fluid" alt="Logo" />
                                </div>
                                <div className="mentor-course text-center">
                                    <h2>Welcome to <br /> Ultraaura Courses.</h2>
                                
                                </div>
                            </div>
                            {/* Repeat other slides as necessary */}
                        </OwlCarousel>
                    </div>
                    {/* /Login Banner */}
                    <div className="col-md-6 login-wrap-bg">
                        {/* Login */}
                        <div className="login-wrapper">
                            <div className="loginbox">
                                <div className="img-logo">
                                    <img src={logo} className="img-fluid" alt="Logo" />
                                    <div className="back-home">
                                        <Link to="#">Back to Home</Link>
                                    </div>
                                </div>
                                <h1>Setup New Password</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-block">
                                        <label className="form-control-label">Password</label>
                                        <div className="pass-group" id="passwordInput">
                                            <input
                                                className="form-control pass-input"
                                                name="newPassword"
                                                placeholder="Enter your password"
                                                type={eye ? "password" : "text"}
                                                value={formData.newPassword}
                                                onChange={handleChange}
                                            />
                                            <span onClick={onEyeClick} className={`fa toggle-password feather-eye ${eye ? "fa-eye" : "fa-eye-slash"}`} />
                                        </div>
                                        <div className="password-strength" id="passwordStrength">
                                            <span id="poor" />
                                            <span id="weak" />
                                            <span id="strong" />
                                            <span id="heavy" />
                                        </div>
                                    </div>
                                    <div className="input-block">
                                        <label className="form-control-label">Confirm Password</label>
                                        <div className="pass-group" id="passwordInputs">
                                            <input
                                                className="form-control pass-input"
                                                name="confirmNewPassword"
                                                placeholder="Confirm your password"
                                                type={eye2 ? "password" : "text"}
                                                value={formData.confirmNewPassword}
                                                onChange={handleChange}
                                            />
                                            <span onClick={onEyeClick2} className={`fa toggle-password feather-eye ${eye2 ? "fa-eye" : "fa-eye-slash"}`} />
                                        </div>
                                        <div className="password-strength" id="passwordStrengths">
                                            <span id="poors" />
                                            <span id="weaks" />
                                            <span id="strongs" />
                                            <span id="heavys" />
                                        </div>
                                    </div>
                                    <div className="form-check remember-me">
                                        <label className="form-check-label mb-0">
                                            <input className="form-check-input" type="checkbox" name="remember" /> I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy.</Link>
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-start" type="submit">
                                            Reset Password
                                        </button>
                                    </div>
                                    <div className="reset-account">
                                        <p className="mb-0">
                                            Already have an account? <Link to="/login">Sign in</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* /Login */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPasswordVendor;
