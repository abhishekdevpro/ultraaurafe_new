import React from "react";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Footer from "../../footer";
import { Link } from "react-router-dom";

const StudentOrderHistory = () => {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Orders"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Order History</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Order History
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
            {/* Student Order History */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Order History</h3>
                  </div>
                  <div className="checkout-form">
                    {/* Order Tabs */}
                    <div className="wishlist-tab order-tab">
                      <ul className="nav">
                        <li className="nav-item">
                          <Link
                            to="#"
                            className="active"
                            data-bs-toggle="tab"
                            data-bs-target="#today"
                          >
                            Today
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            data-bs-toggle="tab"
                            data-bs-target="#month"
                          >
                            Monthly
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            data-bs-toggle="tab"
                            data-bs-target="#year"
                          >
                            Yearly
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Order Tabs */}
                    {/* Tab Content */}
                    <div className="tab-content">
                      {/* Today */}
                      <div className="tab-pane show active" id="today">
                        <div className="table-responsive custom-table">
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Order ID</th>
                                <th>Course Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#2643</td>
                                <td>
                                  <span className="title-course">
                                    Build Responsive Real World Websites with
                                    HTML5 and CSS3
                                  </span>
                                </td>
                                <td>March 24, 2024</td>
                                <td>$34</td>
                                <td>On Hold</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>#2644</td>
                                <td>
                                  <span className="title-course">
                                    Sketch from A to Z (2024): Become an app
                                    designer
                                  </span>
                                </td>
                                <td>March 26, 2024</td>
                                <td>$40</td>
                                <td>On Hold</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>#2645</td>
                                <td>
                                  <span className="title-course">
                                    Learn Angular Fundamentals Beginners Guide
                                  </span>
                                </td>
                                <td>April 12, 2024</td>
                                <td>$25</td>
                                <td>Completed</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>#2646</td>
                                <td>
                                  <span className="title-course">
                                    Build Responsive Real World Websites with
                                    HTML5 and CSS3
                                  </span>
                                </td>
                                <td>April 16, 2024</td>
                                <td>$35</td>
                                <td>On Hold</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /Today */}
                      {/* Month */}
                      <div className="tab-pane fade" id="month">
                        <div className="table-responsive custom-table">
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Order ID</th>
                                <th>Course Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#2643</td>
                                <td>
                                  <span className="title-course">
                                    Build Responsive Real World Websites with
                                    HTML5 and CSS3
                                  </span>
                                </td>
                                <td>March 24, 2024</td>
                                <td>$34</td>
                                <td>On Hold</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>#2644</td>
                                <td>
                                  <span className="title-course">
                                    Sketch from A to Z (2024): Become an app
                                    designer
                                  </span>
                                </td>
                                <td>March 26, 2024</td>
                                <td>$40</td>
                                <td>On Hold</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /Month */}
                      {/* Yearly */}
                      <div className="tab-pane fade" id="year">
                        <div className="table-responsive custom-table">
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Order ID</th>
                                <th>Course Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#2643</td>
                                <td>
                                  <span className="title-course">
                                    Build Responsive Real World Websites with
                                    HTML5 and CSS3
                                  </span>
                                </td>
                                <td>March 24, 2024</td>
                                <td>$34</td>
                                <td>On Hold</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>#2644</td>
                                <td>
                                  <span className="title-course">
                                    Sketch from A to Z (2024): Become an app
                                    designer
                                  </span>
                                </td>
                                <td>March 26, 2024</td>
                                <td>$40</td>
                                <td>On Hold</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>#2645</td>
                                <td>
                                  <span className="title-course">
                                    Learn Angular Fundamentals Beginners Guide
                                  </span>
                                </td>
                                <td>April 12, 2024</td>
                                <td>$25</td>
                                <td>Completed</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>#2646</td>
                                <td>
                                  <span className="title-course">
                                    Build Responsive Real World Websites with
                                    HTML5 and CSS3
                                  </span>
                                </td>
                                <td>April 16, 2024</td>
                                <td>$35</td>
                                <td>On Hold</td>
                                <td>
                                  <Link
                                    to="#"
                                    className="action-icon"
                                  >
                                    <i className="bx bxs-download" />
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /Yearly */}
                    </div>
                    {/* /Tab Content */}
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
            {/* /Student Order History */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default StudentOrderHistory;
