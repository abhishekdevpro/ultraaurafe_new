import React from "react";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import { User17 } from "../../imagepath";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import SettingsPageHeader from "./settingsPageHeader";

const InstructorSettings = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Settings"} />
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
                      Edit Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <InstructorSidebar />
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
                    <div className="course-group profile-upload-group mb-0 d-flex">
                      <div className="course-group-img profile-edit-field d-flex align-items-center">
                        <Link to="/student/student-profile" className="profile-pic">
                          <img src={User17} alt="Img" className="img-fluid" />
                        </Link>
                        <div className="profile-upload-head">
                          <h4>
                            <Link to="/instructor/instructor-profile">Your avatar</Link>
                          </h4>
                          <p>
                            PNG or JPG no bigger than 800px width and height
                          </p>
                          <div className="new-employee-field">
                            <div className="d-flex align-items-center mt-2">
                              <div className="image-upload mb-0">
                                <input type="file" />
                                <div className="image-uploads">
                                  <i className="bx bx-cloud-upload" />
                                </div>
                              </div>
                              <div className="img-delete">
                                <Link to="#" className="delete-icon">
                                  <i className="bx bx-trash" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-form settings-wrap">
                      <div className="edit-profile-info">
                        <h5>Personal Details</h5>
                        <p>Edit your personal information</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Eugene"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Andre"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">User Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="studentdemo"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="90154-91036"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block">
                            <label className="form-label">Designation</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Web Development"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block">
                            <label className="form-label">Bio</label>
                            <textarea
                              rows={4}
                              className="form-control"
                              defaultValue={
                                "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings."
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button className="btn btn-primary" type="submit">
                            Update Profile
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
    </div>
  );
};

export default InstructorSettings;
