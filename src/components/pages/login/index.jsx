
import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo5 from "../../header/logo5.png"

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handlePasswordChange = (evt) => {
    setPasswordInput(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = role === "student"
      ? "https://api.novajobs.us/api/students/login"
      : "https://api.novajobs.us/api/trainers/login";

    try {
        const response = await axios.post(apiUrl, {
            email: email,
            password: passwordInput
        });
        console.log(response.data.data.id,"response ");

        if (response.data) {
            const tokenKey = role === "student" ? "token" : "trainerToken";
            localStorage.setItem(tokenKey, response.data.data.token);

            console.log("Login successful", response.data);
            navigate(role === "student" ? "/student/student-setting" : `/instructor/instructor-dashboard`);
        }
    } catch (error) {
        console.error("Login failed", error);
        // Handle login error (e.g., show error message)
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
          {/* Login Banner */}
          {/* <div className="col-md-6 login-bg">
            <OwlCarousel {...settings} className="owl-carousel login-slide owl-theme">
              {/* Carousel items... */}
            {/* </OwlCarousel> */}
          {/* </div>  */}
          <div className="col-md-6 login-bg">
             <OwlCarousel 
            {...settings}
            className="owl-carousel login-slide owl-theme">
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
                    Welcome to 
                    UltraAura .
                  </h2>
                 
                </div>
              </div>
             
              
            </OwlCarousel>
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
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
                      <label className="form-control-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <div className="input-block">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                        <input
                          type={passwordType}
                          onChange={handlePasswordChange}
                          value={passwordInput}
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
                      <label className="form-control-label">Role</label>
                      <select
                        className="form-control"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="student">Student</option>
                        <option value="trainer">Trainer</option>
                      </select>
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
                        {" "}
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
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;