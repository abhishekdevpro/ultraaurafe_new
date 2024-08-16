import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo, NetIcon1, NetIcon2 } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  
  const handlePasswordChange =(evnt)=>{
      setPasswordInput(evnt.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }


    var settings = {
        //autoWidth: true,
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

  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <OwlCarousel 
            {...settings}
            className="owl-carousel login-slide owl-theme">
              <div className="welcome-login">
                <div className="login-banner">
                  <img
                    src={LoginImg}
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img
                    src={LoginImg}
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img
                    src={LoginImg}
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
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
                    <img
                      src={logo}
                      className="img-fluid"
                      alt="Logo"
                    />
                    <div className="back-home">
                      <Link to="/home">Back to Home</Link>
                    </div>
                  </div>
                  <h1>Sign into Your Account</h1>
                  <form action="/reactjs/instructor/instructor-dashboard">
                    <div className="input-block">
                      <label className="form-control-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="input-block">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                      <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control" placeholder="Password" />
                     <span className="toggle-password feather-eye" onClick={togglePassword}>
                     { passwordType==="password"? <FeatherIcon icon="eye"/>:<FeatherIcon icon="eye-off"/> }
                     </span>
                      </div>
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
                        <input type="checkbox" name="radio" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="d-grid">
                      <Link

                        to="/instructor/instructor-dashboard"
                        className="btn btn-start"
                        type="submit"
                      >
                        Sign In
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="google-bg text-center">
                <span>
                  <Link to="#">Or sign in with</Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img
                          src={NetIcon1}
                          className="img-fluid"
                          alt="Logo"
                        />{" "}
                        Sign In using Google
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img
                          src={NetIcon2}
                          className="img-fluid"
                          alt="Logo"
                        />
                        Sign In using Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  New User ? <Link to="/register">Create an Account</Link>
                </p>
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
