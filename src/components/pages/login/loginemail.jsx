import React from "react";
import logo5 from "../../../assets/Ultra_Aura.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginEmail = () => {
  const handleGoogleSignin = async () => {
    const url = "https://api.novajobs.us/api/students/auth/google";

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

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
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div
        className="bg-white p-4 rounded shadow-sm text-center w-100"
        style={{ maxWidth: "400px" }}
      >
        {/* Logo */}
        <div className="d-flex justify-content-center mb-3">
          <img
            src={logo5}
            className="img-fluid"
            alt="Logo"
            style={{ maxWidth: "200px" }}
          />
        </div>

        {/* Welcome Text */}
        <h2 className="fw-semibold">Welcome back</h2>
        <p className="text-muted mt-1">Keep your account safe.</p>

        {/* User Email */}
        <p className="mt-3 text-dark">
          Continue as <strong>abc@gmail.com</strong>{" "}
          <a href="#" className="text-primary text-decoration-none">
            (not you?)
          </a>
        </p>

        {/* Google Sign-In Button */}
        <div className="d-grid gap-2 mt-3">
          <button
            onClick={handleGoogleSignin}
            type="button"
            className="btn btn-light border d-flex align-items-center justify-content-center py-2"
          >
            <FcGoogle className="me-2" style={{ fontSize: "24px" }} />
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Privacy Policy */}
        <p className="text-muted small mt-3">
          UltraAura will only use your information as described in our{" "}
          <Link to="/privacy-policy" className="text-decoration-none">
            Privacy Policy
          </Link>
          . Google may ask for your permission to share details with UltraAura,
          such as your name, profile picture, and email address.
        </p>

        {/* Alternative Sign-In */}
        <p className="mt-3">
          <Link to="/login-code" className="text-primary text-decoration-none">
            Sign in with login code instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginEmail;
