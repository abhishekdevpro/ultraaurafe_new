
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import logo from "./logo5.png"

const VerifyCertificate = () => {
  // Carousel settings
  const settings = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  // Form state
  const [formData, setFormData] = useState({
    certificateId: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setCertificateDetails(null);
    setApiResponse(null);

    try {
      // Make API call to verify certificate
      const response = await axios.get(
        `https://api.novajobs.us/api/trainers/certificate-details`,
        {
          params: { certificate_id: formData.certificateId },
        }
      );

      // Log the response for debugging
      console.log("API Response:", response.data);

      // Store the full API response
      setApiResponse(response.data);

      // Check if the response is successful
      if (response.data && response.data.status === "success") {
        setCertificateDetails(response.data.data);
        setMessage(
          response.data.message || "Certificate verified successfully!"
        );
      } else {
        setMessage(
          response.data.message ||
            "Certificate verification failed. Please check the ID and try again."
        );
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      setMessage(
        "This certificate cannot be verified. Please check the correctness of your entry and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="main-wrapper">
      <div className="row">
        {/* Login Banner */}
        <div className="col-md-6 login-bg">
          <OwlCarousel
            {...settings}
            className="owl-carousel login-slide owl-theme"
          >
            <div className="welcome-login">
              <div className="login-banner">
                <img src={logo} className="img-fluid" alt="Logo" />
              </div>
              <div className="mentor-course text-center">
                <h2>
                  Welcome to <br /> Ultraaura Certificates.
                </h2>
              </div>
            </div>
            <div className="welcome-login">
              <div className="login-banner">
                <img src={logo} className="img-fluid" alt="Logo" />
              </div>
              <div className="mentor-course text-center">
                <h2>
                  Verify your <br /> Course Certificates.
                </h2>
              </div>
            </div>
          </OwlCarousel>
        </div>
        {/* /Login Banner */}
        <div className="col-md-6 login-wrap-bg">
          {/* Verify Certificate Form */}
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="img-logo">
                {/* <img src={logo} className="img-fluid" alt="Logo" /> */}
                <div className="back-home">
                  <Link to="/">Back to Home</Link>
                </div>
              </div>
              <h1>Verify Certificate</h1>
              <p className="account-subtitle">
                Enter your certificate details below
              </p>

              {message && (
                <div
                  className={
                    certificateDetails
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="input-block mb-3">
                  <label className="form-label">Certificate ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="certificateId"
                    placeholder="Enter your certificate ID"
                    value={formData.certificateId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Verifying...
                      </>
                    ) : (
                      "Verify Certificate"
                    )}
                  </button>
                </div>
              </form>

              {/* Display Certificate Details */}
              {certificateDetails && (
                <div className="certificate-details mt-4">
                  <div className="card border-0 shadow-sm">
                    <div className="card-header bg-primary text-white">
                      <h4 className="mb-0">Certificate Details</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <h5 className="text-primary">
                            Certificate Information
                          </h5>
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <th style={{ width: "40%" }}>
                                    Certificate ID
                                  </th>
                                  <td>{certificateDetails.certificate_id}</td>
                                </tr>
                                <tr>
                                  <th>Course ID</th>
                                  <td>{certificateDetails.course_id}</td>
                                </tr>
                                {certificateDetails.course_title && (
                                  <tr>
                                    <th>Course Title</th>
                                    <td>{certificateDetails.course_title}</td>
                                  </tr>
                                )}
                                <tr>
                                  <th>Issue Date</th>
                                  <td>
                                    {formatDate(certificateDetails.created_at)}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <h5 className="text-primary">Student Information</h5>
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <th style={{ width: "40%" }}>Student ID</th>
                                  <td>{certificateDetails.student_id}</td>
                                </tr>
                                <tr>
                                  <th>Name</th>
                                  <td>
                                    {certificateDetails.student_first_name}{" "}
                                    {certificateDetails.student_last_name}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Email</th>
                                  <td>{certificateDetails.student_email}</td>
                                </tr>
                                <tr>
                                  <th>Phone</th>
                                  <td>{certificateDetails.student_phone}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-center text-muted">
                      {apiResponse && apiResponse.all_rights}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* /Verify Certificate Form */}
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
