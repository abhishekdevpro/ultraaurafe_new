import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import logo5 from "../../../assets/Ultra_Aura.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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

const roles = [
  { label: "Student", value: "students" },
  { label: "Trainer", value: "trainers" },
  { label: "Vendor", value: "vendors" },
];

const TestLogin = () => {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("students");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/${role}/login`,
        { email, password }
      );
      if (response.status === 200) {
        console.log(response);
        console.log("Token", response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        toast.success(response.data.message || "Login Successsfully!");
        if (role === "students") {
          navigate("/student/student-dashboard");
        } else if (role === "trainers") {
          window.location.href =
            "https://trainers.ultraaura.education/instructor/instructor-dashboard";
        } else if (role === "vendors") {
          navigate("/vendor/vendor-dashboard");
        } else {
          navigate("/dashboard"); // fallback
        }
      } else {
        toast.error("Login Failed ");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to Login. Please try again."
      );
    } finally {
      setLoading(false);
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
                <h5>Sign in.</h5>

                {/* Role Tabs */}
                <div className="mb-4 mt-3 d-flex gap-3">
                  {roles.map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      className={`btn btn-sm ${
                        role === r.value ? "btn-primary" : "btn-outline-primary"
                      }`}
                      onClick={() => setRole(r.value)}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="input-block mt-2">
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

                  <div className="input-block mt-3 ">
                    <label className="form-control-label">Password</label>

                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control pe-5" // Bootstrap class for padding-end
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />

                      <span
                        className="position-absolute"
                        style={{
                          top: "50%",
                          right: "15px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          color: "#6c757d",
                          fontSize: "1.2rem",
                        }}
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  {/* Terms and Conditions Checkbox */}
                  <div className="form-check remember-me mt-3">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        required
                      />
                      By signing in, you agree to UltraAura{" "}
                      <Link to="/term-condition">Terms</Link>,{" "}
                      <Link to="/privacy-policy">Cookie</Link> &{" "}
                      <Link to="/privacy-policy">Privacy</Link> policies.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid mt-3">
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
                        "Login"
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

export default TestLogin;
