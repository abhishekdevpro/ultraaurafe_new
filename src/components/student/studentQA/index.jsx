import React from "react";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import { User13, User2, User3, User5, User8 } from "../../imagepath";

const StudentQA = () => {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Question & Answer"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Question &amp; Answer</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Question &amp; Answer
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
            {/* Student Q & A */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Question &amp; Answer</h3>
                  </div>
                  <div className="checkout-form">
                    <div className="table-responsive custom-table">
                      {/* Referred Users*/}
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Question No</th>
                            <th>Question</th>
                            <th>Course</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Posted By</th>
                            <th>No of Replies</th>
                            <th />
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Q1</td>
                            <td>
                              <span className="title-course">
                                AngularJS and Angular refer to the same
                                framework.
                              </span>
                            </td>
                            <td>
                              <span className="title-course">
                                Learn Angular Fundamentals Beginners Guide
                              </span>
                            </td>
                            <td>
                              <i className="bx bxs-adjust" />
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-original-title="True / False"
                              >
                                <i className="bx bxs-info-circle" />
                              </Link>
                            </td>
                            <td>
                              March 24, 2024{" "}
                              <span className="d-block">09:30 AM</span>
                            </td>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User2}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="#">Thompson Hicks</Link>
                              </h2>
                            </td>
                            <td>0</td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-undo" />
                                  Reply
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-show" />
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Q2</td>
                            <td>
                              <span className="title-course">
                                What is the purpose of Angular&apos;s NgIf directive?
                              </span>
                            </td>
                            <td>
                              <span className="title-course">
                                Learn Angular Fundamentals Beginners Guide
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-check-double" />
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-original-title="Multiple Choice"
                              >
                                <i className="bx bxs-info-circle" />
                              </Link>
                            </td>
                            <td>
                              March 24, 2024{" "}
                              <span className="d-block">09:30 AM</span>
                            </td>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User3}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="#">James Schulte</Link>
                              </h2>
                            </td>
                            <td>0</td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-undo" />
                                  Reply
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-show" />
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Q3</td>
                            <td>
                              <span className="title-course">
                                Observables are not part of Angular&apos;s HTTP
                                module.
                              </span>
                            </td>
                            <td>
                              <span className="title-course">
                                Learn Angular Fundamentals Beginners Guide
                              </span>
                            </td>
                            <td>
                              <i className="bx bxs-adjust" />
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-original-title="True / False"
                              >
                                <i className="bx bxs-info-circle" />
                              </Link>
                            </td>
                            <td>
                              March 24, 2024{" "}
                              <span className="d-block">09:30 AM</span>
                            </td>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User5}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="#">Doris Hughes</Link>
                              </h2>
                            </td>
                            <td>0</td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-undo" />
                                  Reply
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-show" />
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Q4</td>
                            <td>
                              <span className="title-course">
                                Which of the following is a valid way to bind
                                data in Angular?
                              </span>
                            </td>
                            <td>
                              <span className="title-course">
                                Learn Angular Fundamentals Beginners Guide
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-check-double" />
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-original-title="Multiple Choice"
                              >
                                <i className="bx bxs-info-circle" />
                              </Link>
                            </td>
                            <td>
                              March 24, 2024{" "}
                              <span className="d-block">09:30 AM</span>
                            </td>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User13}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="#">Arthur Nalley</Link>
                              </h2>
                            </td>
                            <td>0</td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-undo" />
                                  Reply
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-show" />
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Q5</td>
                            <td>
                              <span className="title-course">
                                Angular applications can only be written in
                                TypeScript.
                              </span>
                            </td>
                            <td>
                              <span className="title-course">
                                Learn Angular Fundamentals Beginners Guide
                              </span>
                            </td>
                            <td>
                              <i className="bx bxs-adjust" />
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-original-title="True / False"
                              >
                                <i className="bx bxs-info-circle" />
                              </Link>
                            </td>
                            <td>
                              March 24, 2024{" "}
                              <span className="d-block">09:30 AM</span>
                            </td>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User8}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="#">Shirley Lis</Link>
                              </h2>
                            </td>
                            <td>0</td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-undo" />
                                  Reply
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="table-view">
                                <Link to="#">
                                  <i className="bx bx-show" />
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
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
            {/* /Student Q & A */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default StudentQA;
