// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import logo5 from "../../../assets/Ultra_Aura.png";
// import ReCAPTCHA from "react-google-recaptcha";

// const LoginCode = () => {
//   const [otp, setOtp] = useState("");
//   const [captchaVerified, setCaptchaVerified] = useState(false);

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleCaptchaChange = (value) => {
//     setCaptchaVerified(value ? true : false);
//   };

//   const handleSignIn = () => {
//     if (otp.length === 6) {
//       if (captchaVerified) {
//         toast.success("OTP Submitted Successfully!");
//       } else {
//         toast.error("Please verify the CAPTCHA.");
//       }
//     } else {
//       toast.error("Please enter a 6-digit code.");
//     }
//   };

//   return (
//     <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
//       <div
//         className="bg-white p-4 rounded shadow-sm w-100"
//         style={{ maxWidth: "400px" }}
//       >
//         {/* Back Button */}
//         <Link
//           to="/emailwithlogin"
//           className="text-primary d-flex align-items-center mb-3 text-decoration-none"
//         >
//           <span className="me-2">←</span> Back
//         </Link>

//         {/* Illustration (Commented) */}
//         <div className="d-flex justify-content-center mb-3">
//           <img
//             src={logo5}
//             className="img-fluid"
//             alt="Logo"
//             style={{ maxWidth: "200px" }}
//           />
//         </div>

//         {/* Title */}
//         <h2 className="text-center fw-semibold">Sign in with login code</h2>
//         <p className="text-muted text-center mt-2">
//           We have sent your one-time passcode to <br />
//           <strong>abc@gmail.com</strong>. This passcode will expire after 10
//           minutes.
//         </p>

//         {/* OTP Input */}
//         <div className="mt-3">
//           <label className="form-label fw-medium">Enter 6-digit code *</label>
//           <input
//             type="text"
//             value={otp}
//             onChange={handleOtpChange}
//             maxLength={6}
//             className="form-control text-center fs-5"
//             placeholder="______"
//           />
//         </div>

//         {/* CAPTCHA */}
//         <div className="mt-3 w-full">
//           <ReCAPTCHA
//             sitekey="your-recaptcha-site-key-here" // Replace with your site key
//             onChange={handleCaptchaChange}
//           />
//         </div>

//         {/* Success Message */}
//         <div className="d-flex align-items-center  bg-opacity-10 border border-success text-success p-2 mt-3 rounded">
//           <span className="me-2">✅</span> Success!
//         </div>

//         {/* Resend Code */}
//         <p className="mt-3 text-center small">
//           Didn&apos;t receive your code?{" "}
//           <button className="text-primary fw-semibold border-0 bg-transparent p-0">
//             Send new code
//           </button>
//         </p>

//         {/* Sign In Button */}
//         <button
//           onClick={handleSignIn}
//           className="btn btn-primary w-100 mt-3 d-flex align-items-center justify-content-center"
//         >
//           Sign in →
//         </button>

//         {/* Alternative Option */}
//         <p className="mt-3 text-center small text-primary fw-semibold">
//           Don&apos;t have access to this email?
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginCode;
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";
import logo5 from "../../../assets/Ultra_Aura.png";

const LoginCode = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // const [captchaVerified, setCaptchaVerified] = useState(false);
  // const [showSuccess, setShowSuccess] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setEmail(emailParam);
    } else {
      toast.error("Email not found. Please try logging in again.");
      navigate("/login");
    }
  }, [location, navigate]);

  const handleOtpChange = (e) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, "");
    setOtp(value);
  };

  // const handleCaptchaChange = (value) => {
  //   setCaptchaVerified(value ? true : false);
  // };

  const handleSignIn = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a 6-digit code.");
      return;
    }

    // if (!captchaVerified) {
    //   toast.error("Please verify the CAPTCHA.");
    //   return;
    // }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/students/auth/login-verify-otp",
        {
          email: email,
          otp: otp
        }
      );

      if (response.data) {
        // setShowSuccess(true);
        toast.success("OTP verified successfully!");
        console.log(response.data,"authopt");
        const token = response.data.data.token;

          // Save the token in localStorage
          localStorage.setItem("token", token);
          localStorage.removeItem("trainerToken")
          localStorage.removeItem("vendorToken")
          localStorage.removeItem("adminToken")
        // Add navigation logic here after successful verification
        // For example: navigate("/dashboard");
        navigate("/student/student-dashboard");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      toast.error(
        error.response?.data?.message || "Invalid OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      await axios.post("https://api.novajobs.us/api/students/auth/login-otp", {
        email: email
      });
      toast.success("New code sent successfully!");
    } catch (error) {
      toast.error("Failed to send new code. Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div
        className="bg-white p-4 rounded shadow-sm w-100"
        style={{ maxWidth: "400px" }}
      >
        <Link
          to="/emailwithlogin"
          className="text-primary d-flex align-items-center mb-3 text-decoration-none"
        >
          <span className="me-2">←</span> Back
        </Link>

        <div className="d-flex justify-content-center mb-3">
          <img
            src={logo5}
            className="img-fluid"
            alt="Logo"
            style={{ maxWidth: "200px" }}
          />
        </div>

        <h2 className="text-center fw-semibold">Sign in with login code</h2>
        <p className="text-muted text-center mt-2">
          We have sent your one-time passcode to <br />
          <strong>{email}</strong>. This passcode will expire after 10 minutes.
        </p>

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

        {/* <div className="mt-3 w-full">
          <ReCAPTCHA
            sitekey="your-recaptcha-site-key-here" // Replace with your actual site key
            onChange={handleCaptchaChange}
          />
        </div>

        {showSuccess && (
          <div className="d-flex align-items-center bg-opacity-10 border border-success text-success p-2 mt-3 rounded">
            <span className="me-2">✅</span> Success!
          </div>
        )} */}

        <p className="mt-3 text-center small">
          Didn&apos;t receive your code?{" "}
          <button 
            onClick={handleResendCode}
            className="text-primary fw-semibold border-0 bg-transparent p-0"
          >
            Send new code
          </button>
        </p>

        <button
          onClick={handleSignIn}
          disabled={loading}
          className="btn btn-primary w-100 mt-3 d-flex align-items-center justify-content-center"
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              />
              Verifying...
            </>
          ) : (
            "Sign in →"
          )}
        </button>

        <p className="mt-3 text-center small text-primary fw-semibold">
          Don&apos;t have access to this email?
        </p>
      </div>
    </div>
  );
};

export default LoginCode;