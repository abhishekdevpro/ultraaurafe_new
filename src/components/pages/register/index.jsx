import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo, NetIcon1, NetIcon2 } from "../../imagepath";
import { useState } from "react";

const hasNumber = (value) => {
  return new RegExp(/[0-9]/).test(value);
};
const hasMixed = (value) => {
  return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
};
const hasSpecial = (value) => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
};

const strengthColor = (count) => {
  if (count < 1) return "poor";
  if (count < 2) return "weak";
  if (count < 3) return "strong";
  if (count < 4) return "heavy";
};

const Register = () => {
  const [eye, seteye] = useState(true);
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [strength, setStrength] = useState("");
  // const [pwdError, setPwdError] = useState("Use 8 or more characters with a mix of letters, numbers & symbols.")

  const onEyeClick = () => {
    seteye(!eye);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (value) => {
    if (!value) {
      setValidationError(1);
    } else if (value.length < 8) {
      setValidationError(2);
    } else if (!/[0-9]/.test(value)) {
      setValidationError(3);
    } else if (!/[!@#$%^&*()]/.test(value)) {
      setValidationError(4);
    } else {
      setValidationError(5);
    }
  };

  const messages = () => {
    if (validationError == 1) {
      return "";
    } else if (validationError == 2) {
      return (
        <span
          id="poor"
          className="active"
          style={{ fontSize: 12, color: "#DC3545" }}
        >
          😠 Weak. Must contain at least 8 characters
        </span>
      );
    } else if (validationError == 3) {
      return (
        <span
          id="weak"
          className="active"
          style={{ fontSize: 12, color: "#FFC107" }}
        >
          😲 Average. Must contain at least 1 letter or number
        </span>
      );
    } else if (validationError == 4) {
      return (
        <span
          id="strong"
          className="active"
          style={{ fontSize: 12, color: "#0D6EFD" }}
        >
          🙂 Almost. Must contain special symbol
        </span>
      );
    } else if (validationError == 5) {
      return (
        <span
          id="heavy"
          className="active"
          style={{ fontSize: 12, color: "#4BB543" }}
        >
          😊 Awesome! You have a secure password.
        </span>
      );
    }
  };

  const strengthIndicator = (value) => {
    let strengths = 0;

    if (value.length >= 8) strengths = 1;
    if (hasNumber(value) && value.length >= 8) strengths = 2;
    if (hasSpecial(value) && value.length >= 8 && hasNumber(value))
      strengths = 3;
    if (
      hasMixed(value) &&
      hasSpecial(value) &&
      value.length >= 8 &&
      hasNumber(value)
    )
      strengths = 3;
    return strengths;
  };

  var settings = {
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

  useEffect(() => {
    if (password) {
      if (password !== "") {
        let strength = strengthIndicator(password);
        let color = strengthColor(strength);
        setStrength(color);
      } else {
        setStrength("");
      }
    }
  }, [password]);

  return (
    <>
      <div className="main-wrapper log-wrap">
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
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
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
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
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
                  <img src={logo} className="img-fluid" alt="Logo" />
                  <div className="back-home">
                    <Link to="/home">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign up</h1>
                <form action="/reactjs/login">
                  <div className="input-block">
                    <label className="form-control-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Full Name"
                    />
                  </div>
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
                    <div className="pass-group" id="passwordInput">
                      <input
                        className="form-control pass-input"
                        placeholder="Enter your password"
                        type={eye ? "password" : "text"}
                        onChange={handlePasswordChange}
                      />
                      {/* <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/> */}
                      <span
                        onClick={onEyeClick}
                        className={`fa toggle-password feather-eye" ${
                          eye ? "fa-eye" : "fa-eye-slash"
                        }`}
                      />
                      <span className="toggle-password feather-eye"></span>
                      <span className="pass-checked">
                        <i className="feather-check"></i>
                      </span>
                    </div>
                    <div
                      id="passwordStrength"
                      style={{ display: "flex" }}
                      className={`password-strength ${
                        strength === "poor"
                          ? "poor-active"
                          : strength === "weak"
                          ? "avg-active"
                          : strength === "strong"
                          ? "strong-active"
                          : strength === "heavy"
                          ? "heavy-active"
                          : ""
                      }`}
                    >
                      <span id="poor" className="active"></span>
                      <span id="weak" className="active"></span>
                      <span id="strong" className="active"></span>
                      <span id="heavy" className="active"></span>
                    </div>
                    <div id="passwordInfo">{messages()}</div>
                  </div>

                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                      />
                      I agree to the&nbsp;
                      <Link to="/term-condition">Terms of Service</Link>{" "}
                      and&nbsp;
                      <Link to="/privacy-policy">Privacy Policy.</Link>
                    </label>
                  </div>
                  <div className="d-grid">
                    <Link
                      to="/login"
                      className="btn btn-primary btn-start"
                      type="submit"
                      // onClick={() => navigate("/reactjs/login")}
                    >
                      Create Account
                    </Link>
                  </div>
                </form>
              </div>
              <div className="google-bg text-center">
                <span>
                  <Link to="#">Or sign in with</Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={NetIcon1} className="img-fluid" alt="Logo" />
                        Sign In using Google
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={NetIcon2} className="img-fluid" alt="Logo" />
                        Sign In using Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  Already have an account? <Link to="/login">Sign in</Link>
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

export default Register;
