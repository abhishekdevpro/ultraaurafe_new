import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo5 from "../../header/logo5.png"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Partnerwithus = () => {
    const [formData, setFormData] = useState({
        institute_name: "",
        website: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        designation: "",
        phone: "",
        location: "",
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
      const apiUrl = "https://api.novajobs.us/api/vendors/register";
      try {
          const response = await axios.post(apiUrl, formData);
          console.log(response.data);

          if (response.data) {
              toast.success("Registration successful!")
              navigate("/partner-signin"); // Adjust the path as needed
          }
      } catch (error) {
          console.error("Registration failed", error);
          toast.error("Registration failed. Please try again.");
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
                                        Join Us as a partner and Grow with us with AI enabled online platform.
                                    </h2>
                                    <ul className="">
                                        <li>Signup</li>
                                        <li>Add courses</li>
                                        <li>You are Live Globally</li>
                                    </ul>
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
                                            <label className="form-control-label">Your Company / Institute Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your institute name"
                                                name="institute_name"
                                                value={formData.institute_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-block">
                                            <label className="form-control-label">Website or Online link if any</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your website"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
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
                                        <div className="input-block">
                                            <label className="form-control-label">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your first name"
                                                name="first_name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-block">
                                            <label className="form-control-label">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your last name"
                                                name="last_name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-block">
                                            <label className="form-control-label">Designation</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your designation"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-block">
                                            <label className="form-control-label">Contact Number</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter your contact number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-block">
                                            <label className="form-control-label">Location</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="forgot">
                                            <span>
                                                <Link className="forgot-link" to="/forgot-password">
                                                    Forgot Password ?
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
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
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

export default Partnerwithus;