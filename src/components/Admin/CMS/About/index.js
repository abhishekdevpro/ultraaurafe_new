import React from "react";

import { AdminHeader } from "../../AdminHeader";
import AdminSidebar from "../../AdminSidebar";
import Footer from "../../../footer";
import AdminAboutus from "./AdminAboutus";

function AboutusForm() {
  return (
    <>
      <div className="main-wrapper">
        <AdminHeader />
        <div className="breadcrumb-bar breadcrumb-bar-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12 pt-4">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">Admin Dashboard</h2>
                  <nav
                    aria-label="breadcrumb"
                    className="page-breadcrumb"
                  ></nav>
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
              {/* Sidebar */}
              <AdminSidebar />
              <div className="col-xl-9 col-lg-9">
                <AdminAboutus />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AboutusForm;
