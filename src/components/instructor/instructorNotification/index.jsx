import React from 'react'
import { Link } from "react-router-dom";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import { User2, User1, User12 } from "../../imagepath";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { initialSettings } from "../../common/dateRangePicker";

const InstructorNotification = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Notifications"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Notifications</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Notifications
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
                    <h3>Notifications</h3>
                  </div>
                  <div className="checkout-form personal-address">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="d-flex instructor-noti-head align-items-center">
                          <div className="icon-form mb-0">
                            <span className="form-icon">
                              <i className="bx bx-calendar-edit" />
                            </span>

                            <DateRangePicker initialSettings={initialSettings}>
                              <input
                                type="text"
                                className="form-control bookingrange"
                                placeholder="01 Jan 2024 - 01 Feb 2024"
                              />
                            </DateRangePicker>
                          </div>
                          <div className="noti-mark-btns">
                            <ul>
                              <li>
                                <Link to="#" className="btn">
                                  <i className="feather icon-check me-2" /> Mark all as
                                  read
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="btn btn-delete">
                                  <i className="feather icon-trash-2 me-2" /> Delete all
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="notication-list">
                          <div className="notication-item">
                           
                            <div className="notication-list">
                              <div className="notication-item">
                                <div className="row">
                                  <div className="col-md-9">
                                    <div className="notication-content">
                                      <span>
                                        <img
                                          src={User2}
                                          className="img-fluid"
                                          alt="img"
                                        />
                                      </span>
                                      <div className="notication-info">
                                        <p>
                                          <span>Thompson</span> Hicks enroll a new
                                          course on Programming
                                        </p>
                                        <p className="notify-time">10 mins ago</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="notification-btn text-end">
                                      <Link
                                        to="#"
                                        className="btn btn-danger"
                                      >
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="notication-item">
                                <div className="row">
                                  <div className="col-md-9">
                                    <div className="notication-content">
                                      <span>
                                        <img
                                          src={User1}
                                          className="img-fluid"
                                          alt="img"
                                        />
                                      </span>
                                      <div className="notication-info">
                                        <p>
                                          <span>Shirley</span> Lis submitted the
                                          assignent on Complete{" "}
                                          <span> HTML, CSS and Javascript Course </span>
                                        </p>
                                        <p className="notify-time">12 mins ago</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="notification-btn text-end">
                                      <Link
                                        to="#"
                                        className="btn btn-danger"
                                      >
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="notication-item">
                                <div className="row">
                                  <div className="col-md-9">
                                    <div className="notication-content">
                                      <span>
                                        <img
                                          src={User12}
                                          className="img-fluid"
                                          alt="img"
                                        />
                                      </span>
                                      <div className="notication-info">
                                        <p>
                                          <span>James </span> Schulte replied to your
                                          comment{" "}
                                        </p>
                                        <p className="notify-time">15 mins ago</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="notification-btn text-end">
                                      <Link
                                        to="#"
                                        className="btn btn-danger"
                                      >
                                        Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
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


        </div>
      </div>
    </div>
  )
}

export default InstructorNotification