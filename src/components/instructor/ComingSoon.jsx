import React from "react";

import { Link } from "react-router-dom";
import { InstructorHeader } from "./header";
import InstructorSidebar from "./sidebar";
import Footer from "../footer";
import StudentHeader from "../student/header";
import StudentSidebar from "../student/sidebar";

export const Coming = () => {
  const token = localStorage.getItem("trainerToken")
  return (
    <div className="main-wrapper">
     {token ? <InstructorHeader activeMenu={"Dashboard"} />:<StudentHeader />}

      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Dashboard</h2>
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
            <div className="col-xl-3 col-lg-3">   
            {/* Sidebar */}
            {token?<InstructorSidebar />:<StudentSidebar />}
            {/* /Sidebar */}
            </div>
            {/* Main Content */}
            <div className="col-xl-9 col-lg-9">
              <div className="coming-soon-content text-center">
                <h1>Coming Soon</h1>
                <p>We are working hard to bring you the dashboard experience. Stay tuned!</p>
              </div>
            </div>
            {/* /Main Content */}
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <Footer />
    </div>
  );
};

export default Coming;
