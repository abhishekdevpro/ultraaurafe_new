import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import FullPageLoader from "../../home/FullPageLoader";

const StudentQuiz = () => {
  const [quizAttempts, setQuizAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchQuizAttempts = async () => {
      try {
        const response = await axios.get("https://api.novajobs.us/api/students/skill-assessment-history", {
          headers: {
            Authorization: `${token}`, // Replace with actual token
          },
        });
        setQuizAttempts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz attempts:", error);
        setLoading(false);
      }
    };

    fetchQuizAttempts();
  }, [token]);



  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"My Quiz Attempts"} />
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
            {/* Sidebar */}
            <div className="col-xl-3 col-lg-3">
              <StudentSidebar />
            </div>
            {/* /Sidebar */}
            {/* Student Quiz */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>My Quiz Attempts</h3>
                  </div>
                 {loading? <FullPageLoader /> :<div className="checkout-form">
                    <div className="table-responsive custom-table">
                      {/* Quiz Attempts Table */}
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Quiz Info</th>
                            <th>Questions</th>
                            <th>Correct Answers</th>
                            <th>Incorrect Answers</th>
                            <th>Earned Marks</th>
                            <th>Result</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {quizAttempts?.map((attempt, index) => (
                            <tr key={index}>
                              <td>
                                <div className="quiz-table">
                                  <p>{new Date(attempt.start_date_time).toLocaleString()}</p>
                                  <p>
                                    <span>Skill</span> : {attempt.skill_name}
                                  </p>
                                </div>
                              </td>
                              <td>{attempt.results.total_question || 0}</td>
                              <td>{attempt.results.right_answer || 0}</td>
                              <td>{attempt.results.wrong_answer || 0}</td>
                              <td>{(Number(attempt.results.Percentage) || 0).toFixed(2)}%</td>

                              <td>
                                <span
                                  className={`resut-badge ${
                                    attempt.results.Percentage >= 50
                                      ? "badge-light-success"
                                      : "badge-light-danger"
                                  }`}
                                >
                                  {attempt.results.Percentage >= 50 ? 'Pass' : 'Fail'}
                                </span>
                              </td>
                              <td>
                                <Link
                                  to={`/course-info/${attempt.skill_id}`}
                                  className="btn btn-light-danger quiz-view"
                                >
                                  Details
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>}
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
            {/* /Student Quiz */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default StudentQuiz;
