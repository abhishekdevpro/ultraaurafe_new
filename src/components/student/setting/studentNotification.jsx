import React from "react";
import { Link } from "react-router-dom";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import StudentSettingPageHeader from "./settingPageHeader";

const StudentNotification = () => {
  return (
    <div className="main-wrapper">
      <>
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        notifications
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
                      <p>
                        You have full control to manage your own account
                        settings
                      </p>
                    </div>
                    <StudentSettingPageHeader />
                    <div className="checkout-form settings-wrap">
                      <h5>Choose when and how to be notified</h5>
                      <ul className="settings-noti-lists">
                        <li>
                          <div className="notification-title">
                            <h6>Subscriptions</h6>
                            <p>
                              Notify me about activity from profile I’m
                              subscribe to
                            </p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user1"
                              className="check"
                              defaultChecked=""
                            />
                            <label htmlFor="user1" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Recommended Courses</h6>
                            <p>Notify me about courses that suits for me</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user2"
                              className="check"
                              defaultChecked=""
                            />
                            <label htmlFor="user2" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Reply to my comments</h6>
                            <p>Notify me about replies for my comments</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user3"
                              className="check"
                              defaultChecked=""
                            />
                            <label htmlFor="user3" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Activity on my comments</h6>
                            <p>Notify me about replies for my comments</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user4"
                              className="check"
                            />
                            <label htmlFor="user4" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                      </ul>
                      <h5>Email Notifications</h5>
                      <ul className="settings-noti-lists email-noti-lists">
                        <li>
                          <div className="notification-title">
                            <h6>Subscriptions</h6>
                            <p>
                              Notify me about activity from profile I’m
                              subscribe to
                            </p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user5"
                              className="check"
                              defaultChecked=""
                            />
                            <label htmlFor="user5" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Recommended Courses</h6>
                            <p>Notify me about courses that suits for me</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user6"
                              className="check"
                              defaultChecked=""
                            />
                            <label htmlFor="user6" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Reply to my comments</h6>
                            <p>Notify me about replies for my comments</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user7"
                              className="check"
                              defaultChecked=""
                            />
                            <label htmlFor="user7" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                      </ul>
                      <Link to="#" className="btn btn-primary">
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Student Settings */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>
    </div>
  );
};

export default StudentNotification;
