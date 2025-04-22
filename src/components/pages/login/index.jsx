
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import logo5 from "../../../assets/Ultra_Aura.png";

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

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/students/auth/login-otp",
        { email }
      );
  
      if (response.data) {
        toast.success("OTP sent successfully!");
        // Properly format the query parameter
        navigate(`/login-code?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("Login OTP request failed:", error);
      toast.error(
        error.response?.data?.message || "Failed to send OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/students/auth/google"
      );

      if (response.data?.data) {
        window.location.href = response.data.data;
      } else {
        toast.error("Google sign-in failed. Please try again.");
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error(
        error.response?.data?.message || "Failed to connect with Google"
      );
    }
  };

  return (
    <div className="main-wrapper log-wrap">
      <div className="row">
        {/* Left side with logo */}
        <div className="col-md-6 login-bg">
          <div className="welcome-login">
            <div className="login-banner">
              <img src={logo5} className="img-fluid" alt="UltraAura Logo" />
            </div>
            <div className="mentor-course text-center">
              <h2>Welcome to UltraAura.</h2>
            </div>
          </div>
        </div>

        {/* Right side with login form */}
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
                  {/* Google Sign-in Button */}
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

                  {/* Divider */}
                  <div
                    className="gap-2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <hr style={{ flex: 1, border: "1px solid black" }} />
                    <span>or</span>
                    <hr style={{ flex: 1, border: "1px solid black" }} />
                  </div>

                  {/* Email Input */}
                  <div className="input-block mt-4">
                    <label className="form-control-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>

                  {/* Terms and Conditions Checkbox */}
                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        required
                      />
                      By creating an account or signing in, you understand and
                      agree to UltraAura{" "}
                      <Link to="/term-condition">Terms</Link>. You also consent to
                      our <Link to="/privacy-policy">Cookie</Link> and{" "}
                      <Link to="/privacy-policy">Privacy</Link> policies.
                    </label>
                  </div>

                  {/* Submit Button */}
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
                          />
                          {" Loading..."}
                        </>
                      ) : (
                        "Continue"
                      )}
                    </button>
                  </div>

                  <SignUpText />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Login;