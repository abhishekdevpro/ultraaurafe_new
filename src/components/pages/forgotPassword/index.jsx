
import React, { useState } from "react";
// import { LoginImg } from "../../imagepath";
import logo5 from '../../../assets/logo5.png'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [role, setRole] = useState("student"); // Default role is student
  // const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const url =
      role === "student"
        ? "https://api.novajobs.us/api/students/forget-password"
        : "https://api.novajobs.us/api/trainers/forget-password";

    if (!forgotPasswordEmail) {
      toast.error("Email is required");
      return;
    }

    const formData = new FormData();
    formData.append("email", forgotPasswordEmail);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data && response.data.message) {
        toast.success(response.data.message);
      } else {
        toast.success("Password reset link sent to your email!");
      }
      // setShowForgotPassword(false);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          const errorMessage =
            err.response.data.message || "Invalid request. Please check your input.";
          toast.error(`Error: ${errorMessage}`);
        } else if (err.response.status === 404) {
          toast.error(
            "The forget password service is not available. Please contact support."
          );
        } else {
          toast.error(`Error: ${err.response.data.message || "An unknown error occurred"}`);
        }
      } else if (err.request) {
        toast.error("Please check your internet connection.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const settings = {
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
      <div className="main-wrapper">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <OwlCarousel {...settings} className="owl-carousel login-slide owl-theme">
                <div className="welcome-login">
                  <div className="login-banner">
                    <img src={logo5} className="img-fluid" alt="Logo" />
                  </div>
                  <div className="mentor-course text-center">
                    <h2>
                      Welcome to <br />
                      Ultraaura Courses.
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
                <div className="img-logo">
                  {/* <img src={logo5} className="img-fluid" alt="Logo" /> */}
                  <div className="back-home">
                    <Link to="/home">Back to Home</Link>
                  </div>
                </div>
                <h1>Forgot Password ?</h1>
                <div className="reset-password">
                  <p>Enter your email to reset your password.</p>
                </div>
                <form onSubmit={handleForgotPassword}>
                  <div className="input-block">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      value={forgotPasswordEmail}
                      onChange={(e) => setForgotPasswordEmail(e.target.value)}
                      required
                    />
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
                  <div className="d-grid">
                    <button className="btn btn-start" type="submit">
                      Submit
                    </button>
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

export default ForgotPassword;
