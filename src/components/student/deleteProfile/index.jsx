import React from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { Link } from "react-router-dom";

export default function StudentDeleteProfile() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"DeleteProfile"} />
      {/* Student Dashboard */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <StudentSideBar activeMenu={"DeleteProfile"} />
            {/* Sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Delete your account</h3>
                    <p>Delete or Close your account permanently.</p>
                  </div>
                  <div className="checkout-form personal-address">
                    <div className="personal-info-head">
                      <h4>Warning</h4>
                      <p>
                        If you close your account, you will be unsubscribed from
                        all your 0 courses, and will lose access forever.
                      </p>
                    </div>
                    <div className="un-subscribe p-0">
                      <Link to="#" className="btn btn-danger">
                        Delete My Account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
      {/* Student Dashboard */}
      <Footer />
    </div>
  );
}
