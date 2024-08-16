import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import InstructorSidebar from "../sidebar";
import { Link } from "react-router-dom";


const DashboardProfile = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"My Profile"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">My Profile</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      My Profile
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
            {/* Instructor profile */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details mb-0">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>My Profile</h3>
                  </div>
                  <div className="checkout-form personal-address">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>First Name</h6>
                          <p>Eugene</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>Last Name</h6>
                          <p>Andre</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>Registerion Date</h6>
                          <p>January 16, 2024, 11:15 AM</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>User Name</h6>
                          <p>instructordemo</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>Email</h6>
                          <p>instructordemo@example.com</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>Phone Number</h6>
                          <p>89104-71829</p>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="contact-info mb-0">
                          <h6>Bio</h6>
                          <p>
                            {" "}
                            Very well thought out and articulate communication.
                            Clear milestones, deadlines and fast work. Patience.
                            Infinite patience. No shortcuts. Even if the client is
                            being careless. Some quick example text to build on the
                            card title and bulk the card&apos;s content Moltin gives you
                            platform. As a highly skilled and successfull product
                            development and design specialist with more than 4 Years
                            of My experience lies in successfully conceptualizing,
                            designing, and modifying consumer products specific to
                            interior design and home furnishings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Instructor profile */}
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <Footer />
    </div>
  );
}

export default DashboardProfile