
import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import logo5 from "../../../assets/logo5.png";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
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
    setLoading(true);
    const apiUrl = "https://api.novajobs.us/api/students/login";

    try {
      const response = await axios.post(apiUrl, {
        email: email,
        password: passwordInput,
      });

      if (response.data) {
        const tokenKey = "trainerToken";
        localStorage.setItem(tokenKey, response.data.data.token);

        toast.success('Login successful!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setTimeout(() => {
          navigate("/student/student-dashboard");
        }, 3000);
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error('Login failed. Please check your credentials.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
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

  // Styled components
  const SignUpText = styled.div`
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    color: #555;

    a {
      color: #007bff;
      text-decoration: none;
      font-weight: normal;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
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
                    UltraAura.
                  </h2>
                </div>
              </div>
            </OwlCarousel>
          </div>
          <div className="col-md-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="w-100">
                  <div className="img-logo">
                    <div className="back-home">
                      <Link to="/home">Back to Home</Link>
                    </div>
                  </div>
                  <h1>Sign into Your Student Account</h1>
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
                    <div className="forgot">
                      <span>
                        <Link className="forgot-link" to="/forgot-password">
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
                      <button
                        className="btn btn-start"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            {" Loading..."}
                          </>
                        ) : (
                          "Sign in as Student"
                        )}
                      </button>
                    </div>
                    <SignUpText>
                      Do not have an account?{" "}
                      <Link to="/register">Create one</Link>
                    </SignUpText>
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
      <ToastContainer />
    </>
  );
};

export default Login;
