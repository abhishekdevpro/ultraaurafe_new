import React from "react";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import Footer from "../../footer";
import SettingsPageHeader from "./settingsPageHeader";
import { Link } from "react-router-dom";

const InstructorChangePassword = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Settings"} />
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
            <InstructorSidebar />
            {/* /Sidebar */}
            {/* Instructor Settings */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Settings</h3>
                    <p>
                      You have full control to manage your own account settings
                    </p>
                  </div>
                  <SettingsPageHeader/>
                  <form>
                    <div className="checkout-form settings-wrap">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">
                              Current Password
                            </label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="input-block">
                            <label className="form-label">New Password</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="input-block">
                            <label className="form-label">
                              Re-type New Password
                            </label>
                            <input type="password" className="form-control" />
                          </div>
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
            {/* /Instructor Settings */}
          </div>
        </div>
      </div>
      <Footer />
      {/* /Page Content */}
    </div>
  );
};

export default InstructorChangePassword;
