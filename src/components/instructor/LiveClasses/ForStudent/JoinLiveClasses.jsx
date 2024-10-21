import React from "react";
// import { InstructorHeader } from "../../instructor/header";
import Footer from "../../../footer";
// import InstructorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import StudentSidebar from "../../../student/sidebar";
import StudentHeader from "../../../student/header";
import StudentLiveClassTable from "./StudentLiveClassTable";
import { AdminHeader } from "../../../Admin/AdminHeader";
import AdminSidebar from "../../../Admin/AdminSidebar";

const JoinLiveClass = () => {

const AdminToken = localStorage.getItem("adminToken")  
  return (
    <div className="main-wrapper">
    { AdminToken? <AdminHeader /> :<StudentHeader activeMenu={"Schedule Class"} />}
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 p-6">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Schedule Live Class</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Schedule Class
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
            {/* Sidebar */}
          {AdminToken? <AdminSidebar /> :<StudentSidebar />}
            {/* /Sidebar */}

            {/* Main Content */}
            <div className="col-xl-9 col-lg-9 ">
              <div className="settings-widget card-details mb-0">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Scheduled Live Class</h3>
                  </div>
                  <div className="checkout-form personal-address">
                    <div className="row">
                       <StudentLiveClassTable/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Main Content */}
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <Footer />

      {/* Modal for Scheduling Class */}
    
    </div>
  );
};



export default JoinLiveClass;
