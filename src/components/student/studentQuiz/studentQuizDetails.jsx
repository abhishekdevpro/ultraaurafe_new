import React from 'react'
import Footer from '../../footer'
import StudentHeader from '../header'
import InstructorSidebar from '../../instructor/sidebar'
import { Link } from 'react-router-dom'

const StudentQuizDetails = () => {
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Header */}
        <StudentHeader activeMenu={"My Quiz Attempts"} />
        {/* /Header */}
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
              {/* Student Quiz Details */}
              <div className="col-xl-9 col-lg-9">
                <div className="settings-widget card-details mb-0">
                  <div className="settings-menu p-0">
                    <div className="profile-heading">
                      <h3>My Quiz Attempts</h3>
                    </div>
                    <div className="checkout-form">
                      <div className="quiz-details">
                        <Link to="/student/student-quiz" className="back-link">
                          <i className="bx bx-left-arrow-alt" />
                          Back
                        </Link>
                        <p>Course: Learn Angular Fundamentals Beginners Guide</p>
                        <h6>Quiz 1 : What is meant by Angular?</h6>
                        <ul>
                          <li>Quiz Time: 10 Minutes</li>
                          <li>Attempt Time: 7 Seconds</li>
                        </ul>
                      </div>
                      {/* Quiz */}
                      <div className="table-quiz">
                        <div className="table-responsive custom-table">
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Question</th>
                                <th>Total Marks</th>
                                <th>Pass Marks</th>
                                <th>Correct Answers</th>
                                <th>Incorrect Answers</th>
                                <th>Earned Marks</th>
                                <th>Result</th>
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
                                <td>3</td>
                                <td>3.00</td>
                                <td>2.40(80%)</td>
                                <td>2</td>
                                <td>1</td>
                                <td>2.00(67%)</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    Fail
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /Quiz */}
                      {/* Quiz Overview */}
                      <div className="quiz-overview">
                        <h6>Quiz Overview</h6>
                        <div className="table-responsive custom-table">
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Type</th>
                                <th>Questions</th>
                                <th>Given Answers</th>
                                <th>Correct Answers</th>
                                <th>Result</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <i className="bx bxs-adjust me-1" />
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
                                  Has Angular been fully supported by all browsers?
                                </td>
                                <td>True</td>
                                <td>False</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    Incorrect
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>
                                  <i className="bx bxs-adjust me-1" />
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
                                  Has Angular been fully supported by all browsers?
                                </td>
                                <td>True</td>
                                <td>False</td>
                                <td>
                                  <span className="resut-badge badge-light-success">
                                    Correct
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>
                                  <i className="bx bxs-adjust me-1" />
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
                                  Has Angular been fully supported by all browsers?
                                </td>
                                <td>True</td>
                                <td>False</td>
                                <td>
                                  <span className="resut-badge badge-light-success">
                                    Correct
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /Quiz Overview */}
                    </div>
                  </div>
                </div>
              </div>
              {/* /Student Quiz Details */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Footer */}
        <Footer />
        {/* /Footer */}
      </div>
      {/* /Main Wrapper */}
    </>

  )
}

export default StudentQuizDetails
