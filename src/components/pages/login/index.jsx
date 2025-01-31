import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
// import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import logo5 from "../../../assets/Ultra_Aura.png";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [loading, setLoading] = useState(false);
  // const [passwordType, setPasswordType] = useState("password");
  // const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const [isLoadPage, setIsLoadPage] = useState(false);
  useEffect(() => {
    // Check session storage for a reload flag
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      console.log("Login page is rendering and reloading once!");

      // Set the reload flag in session storage
      sessionStorage.setItem("hasReloaded", "true");

      // Reload the page
      window.location.reload();
    }
  }, []);

  // useEffect(() => {
  //   const hasReloaded = localStorage.getItem('hasReloaded');

  //   if (!hasReloaded) {
  //     console.log("Login page is loading!!!");
  //     const timer = setTimeout(() => {
  //       setIsLoadPage(true);
  //       window.location.reload();
  //       localStorage.setItem('hasReloaded', 'true');
  //     }, 1000);

  //     // Cleanup timer on unmount
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  // const handlePasswordChange = (evt) => {
  //   setPasswordInput(evt.target.value);
  // };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  window.onerror = function (message, source, lineno, colno, error) {
    console.error("Error in login:", message);
    console.log("Source file:", source);
    console.log("Line:", lineno, "Column:", colno);
    console.log("Error object:", error);
  };

  // const togglePassword = () => {
  //   setPasswordType(passwordType === "password" ? "text" : "password");
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const apiUrl = "https://api.novajobs.us/api/students/login";

  //   try {
  //     const response = await axios.post(apiUrl, {
  //       email: email,
  //       // password: passwordInput,
  //     });

  //     if (response.data) {
  //       const tokenKey = "token";
  //       localStorage.setItem(tokenKey, response.data.data.token);

  //       toast.success("Login successful!", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //       });

  //       setTimeout(() => {
  //         navigate("/student/student-dashboard");
  //       }, 3000);
  //     }
  //   } catch (error) {
  //     console.error("Login failed", error);
  //     toast.error("Login failed. Please check your credentials.", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = () => {
    setLoading(true);
    navigate("/emailwithlogin");
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
  const handleGoogleSignin = async () => {
    const url = "https://api.novajobs.us/api/students/auth/google";

    try {
      const response = await axios.get(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Google sign-in token: ", response.data.data);
        window.open(response.data.data);
      } else {
        toast.error("Google sign-in failed.");
      }
    } catch (err) {
      console.log(err);
      toast.error(`${err.response?.data?.message || "Google sign-in failed"}`);
    }
  };

  return (
    <>
      {/* {isLoadPage&& */}
      <div className="main-wrapper log-wrap">
        <div className="row">
          <div className="col-md-6 login-bg">
            <OwlCarousel
              {...settings}
              className="owl-carousel login-slide owl-theme"
            >
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={logo5} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>Welcome to UltraAura.</h2>
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
                  <h1 className="bold">Ready to take the next step?</h1>
                  <h5>Create an account or sign in.</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="d-grid mb-4">
                      <button
                        onClick={handleGoogleSignin}
                        type="button"
                        className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md mt-4 shadow-sm hover:bg-gray-100 focus:outline-none"
                      >
                        <FcGoogle
                          className="h-6 w-6 mr-2"
                          style={{ fontSize: "30px" }}
                        />
                        <span className="ms-4">Continue with Google</span>
                      </button>
                    </div>
                    <div
                      className="gap-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <hr style={{ flex: 1, border: "1px solid black" }} />
                      or
                      <hr style={{ flex: 1, border: "1px solid black" }} />
                    </div>
                    <div className="input-block mt-4">
                      <label className="form-control-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    {/* <div className="input-block">
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
                        <span
                          className="toggle-password feather-eye"
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <FeatherIcon icon="eye" />
                          ) : (
                            <FeatherIcon icon="eye-off" />
                          )}
                        </span>
                      </div>
                    </div> */}
                    {/* <div className="forgot">
                      <span>
                        <Link className="forgot-link" to="/forgot-password">
                          Forgot Password?
                        </Link>
                      </span>
                    </div> */}

                    {/* <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        Remember me
                        <input type="checkbox" name="remember" />
                        <span className="checkmark" />
                      </label>
                    </div> */}
                    <div className="form-check remember-me">
                      <label className="form-check-label mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                        />
                        By creating an account or signing in, you understand and
                        agree to UltraAura&nbsp;
                        <Link to="/term-condition">Terms.</Link> You also
                        consent to our&nbsp;
                        <Link to="/privacy-policy">Cookie</Link> and&nbsp;
                        <Link to="/privacy-policy">Privacy</Link> policies. You
                        will receive marketing messages from Indeed and may opt
                        out at any time by following the unsubscribe link in our
                        messages, or as detailed in our terms.
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
                          "Continue"
                        )}
                      </button>
                    </div>
                    <SignUpText>
                      {/* Do not have an account?{" "} */}
                      {/* <Link to="/register">Create one</Link> */}
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
      {/* } */}
      <ToastContainer />
    </>
  );
};

export default Login;
