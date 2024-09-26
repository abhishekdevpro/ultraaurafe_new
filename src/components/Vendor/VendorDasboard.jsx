//import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import VendorSidebar from "./VendorSidebar";
import Footer from "../footer";
import CourseTable from "./../instructor/dashboard/CourseList";
import { useEffect, useState } from "react";
import axios from "axios";
import VendorHeader from "./VendorHeader";


export const VendorDashboard = () => {
  const [profile, setProfileData] = useState("");

  const token = localStorage.getItem("vendorToken");

  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/vendors/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setProfileData(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);
  return (
    <div className="main-wrapper">
      <VendorHeader Profile={profile} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 pt-5">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title"> Vendor Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
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
            <VendorSidebar />
            {/* /Sidebar */}
            {/* Student Dashboard */}
            <div className="col-xl-9 col-lg-9">
              <div className="row justify-content-center">
                {profile ? (
                  <div className="col-lg-12 col-md-10 d-flex">
                    <div className="card dash-info flex-fill">
                      <div className="card-body">
                        <h4>About Institute</h4>
                        <div
                          dangerouslySetInnerHTML={{ __html: profile.about }}
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <CourseTable />

              <div className="dash-pagination">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Page 1 of 2</p>
                  </div>
                  <div className="col-6">
                    <ul className="pagination">
                      <li className="active">
                        <Link to="#">1</Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Student Dashboard */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};
