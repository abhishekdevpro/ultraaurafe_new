import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo } from "../../imagepath";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewPassword = () => {

    const [eye,seteye] = useState(true)
    const [eye2,seteye2] = useState(true)

    const onEyeClick = () =>{
      seteye(!eye)
    }

    const onEyeClick2 = () =>{
        seteye2(!eye2)
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
      <div className="main-wrapper">
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
                <div className="img-logo">
                  <img
                    src={logo}
                    className="img-fluid"
                    alt="Logo"
                  />
                  <div className="back-home">
                    <Link to="#">Back to Home</Link>
                  </div>
                </div>
                <h1>Setup New Password</h1>
                <form action="#">
                  <div className="input-block">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group" id="passwordInput">
                    <input className="form-control pass-input" placeholder="Enter your password" type={eye ? "password" : "text"}/>
                    <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/>
                      <span className="pass-checked">
                        <i className="feather-check" />
                      </span>
                    </div>
                    <div className="password-strength" id="passwordStrength">
                      <span id="poor" />
                      <span id="weak" />
                      <span id="strong" />
                      <span id="heavy" />
                    </div>
                    <div id="passwordInfo" />
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">
                      Confirm Password
                    </label>
                    <div className="pass-group" id="passwordInputs">
                    <input className="form-control pass-input" placeholder="Enter your password" type={eye2 ? "password" : "text"}/>
                    <span onClick={onEyeClick2} className={`fa toggle-password feather-eye" ${eye2 ? "fa-eye" : "fa-eye-slash" }`}/>
                      <span className="pass-checked">
                        <i className="feather-check" />
                      </span>
                    </div>
                    <div className="password-strength" id="passwordStrengths">
                      <span id="poors" />
                      <span id="weaks" />
                      <span id="strongs" />
                      <span id="heavys" />
                    </div>
                    <div id="passwordInfos" />
                  </div>
                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                      />{" "}
                      I agree to the <Link to="#">Terms of Service</Link> and{" "}
                      <Link to="#">Privacy Policy.</Link>
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

export default NewPassword;
