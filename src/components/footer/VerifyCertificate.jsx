import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Assume these imports match your project structure
// import LoginImg from '../assets/img/login-img.png';
// import logo from '../assets/img/logo.svg';

const VerifyCertificate = () => {
    // Carousel settings
    const settings = {
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            }
        }
    };

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        certificateId: ''
    });
    const [message,setMessages] = useState('')

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your verification logic here
        setMessages("This certificate can not be verified. Please check the correctness of your entry and try again.")
        console.log('Verifying certificate with:', formData);
        setFormData({
             email: '',
        certificateId: ''
        })
    };

    return (
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
                                {/* <img src={LoginImg} className="img-fluid" alt="Logo" /> */}
                            </div>
                            <div className="mentor-course text-center">
                                <h2>Welcome to <br /> Ultraaura Certificates.</h2>
                            </div>
                        </div>
                        <div className="welcome-login">
                            <div className="login-banner">
                                {/* <img src={LoginImg} className="img-fluid" alt="Logo" /> */}
                            </div>
                            <div className="mentor-course text-center">
                                <h2>Verify your <br /> Course Certificates.</h2>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                {/* /Login Banner */}
                <div className="col-md-6 login-wrap-bg">
                    {/* Verify Certificate Form */}
                    <div className="login-wrapper">
                        <div className="loginbox">
                            <div className="img-logo">
                                {/* <img src={logo} className="img-fluid" alt="Logo" /> */}
                                <div className="back-home">
                                    <Link to="/">Back to Home</Link>
                                </div>
                            </div>
                            <h1>Verify Certificate</h1>
                            <p className="account-subtitle">Enter your certificate details below</p>
                            <p className="text-danger fw-bold">{message ? message : " "}</p>

                            <form onSubmit={handleSubmit}>
                                <div className="input-block">
                                    <label className="form-control-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter registered email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-block">
                                    <label className="form-control-label">Certificate ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="certificateId"
                                        placeholder="Enter your certificate ID"
                                        value={formData.certificateId}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-start" type="submit">
                                        Verify Certificate
                                    </button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    {/* /Verify Certificate Form */}
                </div>
            </div>
        </div>
    );
};

export default VerifyCertificate;