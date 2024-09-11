import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import StudentSettingPageHeader from "./settingPageHeader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const StudentChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    try {
      await axios.post(
        "https://api.novajobs.us/api/students/change-password", // Update this URL if different
        {
          old_password: currentPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`, // Adjust as needed to get the token
          },
        }
      );
      toast.success("Password changed successfully!");
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword("")
    } catch (err) {
      toast.error("Failed to change password. Please try again.");
    }
  };

  return (
    <div className="main-wrapper">
      {/* Header */}
      <StudentHeader activeMenu={"Dashboard"} />
      {/* /Header */}
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Settings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Change Password
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSidebar />
            {/* /Sidebar */}
            {/* Student Settings */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Settings</h3>
                    <p>You have full control to manage your own account settings</p>
                  </div>
                  <StudentSettingPageHeader />
                  <form onSubmit={handleSubmit}>
                    <div className="checkout-form settings-wrap">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Current Password</label>
                            <input
                              type="password"
                              className="form-control"
                              value={currentPassword}
                              onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                          </div>
                          <div className="input-block">
                            <label className="form-label">New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                          </div>
                          <div className="input-block">
                            <label className="form-label">Re-type New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button className="btn btn-primary" type="submit">
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Student Settings */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <ToastContainer />
    </div>
  );
};

export default StudentChangePassword;
