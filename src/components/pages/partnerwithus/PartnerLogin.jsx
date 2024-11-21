import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo5 from "../../../assets/Ultra_Aura.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [passwordType, setPasswordType] = useState("password");
    const navigate = useNavigate();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const togglePassword = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = "https://api.novajobs.us/api/vendors/login";
    
        try {
            const response = await axios.post(apiUrl, formData);
    
            if (response.data) {
                // Assuming the token is returned in response.data.token
                const token = response.data.data.token;
                console.log(token,"token")
                // Store the token in local storage
                localStorage.setItem("vendorToken", token);
    
                toast.success("Login successful!");
                navigate("/vendor/vendor-dashboard"); // Adjust the path as needed
            }
        } catch (error) {
            console.error("Login failed", error);
            toast.error("Login failed. Please check your credentials.");
        }
    };
    

    var settings = {
        items: 1,
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

    return (
        <>
            <div className="main-wrapper log-wrap">
                <div className="row">
                    <div className="col-md-6 login-bg">
                        <OwlCarousel {...settings} className="owl-carousel login-slide owl-theme">
                            <div className="welcome-login">
                                <div className="login-banner">
                                    <img
                                        src={logo5}
                                        className="img-fluid"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="mentor-course text-center">
                                    <h2>
                                        Welcome Back! Login to your account.
                                    </h2>
                                    <p>Access your dashboard and manage your profile.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="col-md-6 login-wrap-bg">
                        <div className="login-wrapper">
                            <div className="loginbox">
                                <div className="w-100">
                                    <div className="img-logo">
                                        <img src={logo5} className="img-fluid" alt="Logo" />
                                        <div className="back-home">
                                            <Link to="/home">Back to Home</Link>
                                        </div>
                                    </div>
                                    <h1>Sign into Your Account</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-block">
                                            <label className="form-control-label">Email ID</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email address"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-block">
                                            <label className="form-control-label">Password</label>
                                            <div className="pass-group">
                                                <input
                                                    type={passwordType}
                                                    name="password"
                                                    onChange={handleChange}
                                                    value={formData.password}
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required
                                                />
                                                <span className="toggle-password feather-eye" onClick={togglePassword}>
                                                    {passwordType === "password" ? <FeatherIcon icon="eye" /> : <FeatherIcon icon="eye-off" />}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="forgot">
                                            <span>
                                                <Link className="forgot-link" to="/vendor-forgot-password">
                                                    Forgot Password?
                                                </Link>
                                            </span>
                                        </div>
                                        <div className="remember-me">
                                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                                                Remember me
                                                <input type="checkbox" name="remember" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-start" type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <div className="signup-link text-center mt-4">
    <p className="mb-0">
        Don’t have an account?{" "}
        <Link to="/partner-signup" className="text-primary fw-bold">
            Sign up
        </Link>
    </p>
</div>

                                </div>
                            </div>
                            <div className="google-bg text-center">
                                {/* Social login options... */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
