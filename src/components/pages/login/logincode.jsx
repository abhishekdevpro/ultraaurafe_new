import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo5 from "../../../assets/Ultra_Aura.png";
import ReCAPTCHA from "react-google-recaptcha";

const LoginCode = () => {
  const [otp, setOtp] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(value ? true : false);
  };

  const handleSignIn = () => {
    if (otp.length === 6) {
      if (captchaVerified) {
        toast.success("OTP Submitted Successfully!");
      } else {
        toast.error("Please verify the CAPTCHA.");
      }
    } else {
      toast.error("Please enter a 6-digit code.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div
        className="bg-white p-4 rounded shadow-sm w-100"
        style={{ maxWidth: "400px" }}
      >
        {/* Back Button */}
        <Link
          to="/emailwithlogin"
          className="text-primary d-flex align-items-center mb-3 text-decoration-none"
        >
          <span className="me-2">←</span> Back
        </Link>

        {/* Illustration (Commented) */}
        <div className="d-flex justify-content-center mb-3">
          <img
            src={logo5}
            className="img-fluid"
            alt="Logo"
            style={{ maxWidth: "200px" }}
          />
        </div>

        {/* Title */}
        <h2 className="text-center fw-semibold">Sign in with login code</h2>
        <p className="text-muted text-center mt-2">
          We have sent your one-time passcode to <br />
          <strong>abc@gmail.com</strong>. This passcode will expire after 10
          minutes.
        </p>

        {/* OTP Input */}
        <div className="mt-3">
          <label className="form-label fw-medium">Enter 6-digit code *</label>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            maxLength={6}
            className="form-control text-center fs-5"
            placeholder="______"
          />
        </div>

        {/* CAPTCHA */}
        <div className="mt-3 w-full">
          <ReCAPTCHA
            sitekey="your-recaptcha-site-key-here" // Replace with your site key
            onChange={handleCaptchaChange}
          />
        </div>

        {/* Success Message */}
        <div className="d-flex align-items-center  bg-opacity-10 border border-success text-success p-2 mt-3 rounded">
          <span className="me-2">✅</span> Success!
        </div>

        {/* Resend Code */}
        <p className="mt-3 text-center small">
          Didn&apos;t receive your code?{" "}
          <button className="text-primary fw-semibold border-0 bg-transparent p-0">
            Send new code
          </button>
        </p>

        {/* Sign In Button */}
        <button
          onClick={handleSignIn}
          className="btn btn-primary w-100 mt-3 d-flex align-items-center justify-content-center"
        >
          Sign in →
        </button>

        {/* Alternative Option */}
        <p className="mt-3 text-center small text-primary fw-semibold">
          Don&apos;t have access to this email?
        </p>
      </div>
    </div>
  );
};

export default LoginCode;
