import React from "react";
import Footer from "../../footer";
import { InstructorHeader } from "../header";
import { Link } from "react-router-dom";
import InstructorSidebar from "../sidebar";

const InstructorQuiz = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader   activeMenu={"My Quiz Attempts"}/>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">My Quiz Attempts</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      My Quiz Attempts
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
            {/* Instructor Quiz */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>My Quiz Attempts</h3>
                  </div>
                  <div className="checkout-form">
                    <div className="table-responsive custom-table">
                      {/* Referred Users*/}
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Quiz Info</th>
                            <th>Question</th>
                            <th>Total Marks</th>
                            <th>Correct Answers</th>
                            <th>Incorrect Answers</th>
                            <th>Earned Marks</th>
                            <th>Result</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>March 12, 2024 05:40 PM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1(50%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <Link
                                to="/instructor/instructor-quiz-details"
                                className="btn btn-light-danger quiz-view"
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>March 05, 2024 04:15 PM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>2(67%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <Link
                                to="/instructor/instructor-quiz-details"
                                className="btn btn-light-danger quiz-view"
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>February 27, 2024 03:20 PM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>5</td>
                            <td>5</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2(40%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <Link
                                to="/instructor/instructor-quiz-details"
                                className="btn btn-light-danger quiz-view"
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>February 16, 2024 02:40 PM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3(100%)</td>
                            <td>
                              <span className="resut-badge badge-light-success">
                                Pass
                              </span>
                            </td>
                            <td>
                              <Link
                                to="/instructor/instructor-quiz-details"
                                className="btn btn-light-danger quiz-view"
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>January 19, 2024 11:00 AM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                            <td>0(0%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <Link
                                to="/instructor/instructor-quiz-details"
                                className="btn btn-light-danger quiz-view"
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>January 08, 2024 09:30 AM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>1</td>
                            <td>2</td>
                            <td>1(33%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <Link
                                to="/instructor/instructor-quiz-details"
                                className="btn btn-light-danger quiz-view"
                              >
                                Details
                              </Link>
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
            {/* /Instructor Quiz */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default InstructorQuiz;
