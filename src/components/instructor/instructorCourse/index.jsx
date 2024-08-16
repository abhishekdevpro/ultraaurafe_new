import React from 'react'
import InstructorSidebar from "../sidebar";
import { InstructorHeader } from "../header";
import {Course2, Course3, Icon1, Icon2,Course4,Course5,Course7,Course8} from "../../imagepath"
import { Link } from "react-router-dom";

const InstructorCourse = () => {
  return (
    <div className="main-wrapper">
         <InstructorHeader activeMenu={"My Course"} />
        <>
  {/* Breadcrumb */}
  <div className="breadcrumb-bar breadcrumb-bar-info">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <div className="breadcrumb-list">
            <h2 className="breadcrumb-title">My Courses</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Courses
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
        {/* Instructor Courses */}
        <div className="col-xl-9 col-lg-9">
          <div className="settings-widget card-info">
            <div className="settings-menu p-0">
              <div className="profile-heading">
                <h3>My Courses</h3>
                <p>Manage your courses and its updates</p>
              </div>
              <div className="checkout-form pb-0">
                <div className="wishlist-tab">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="active"
                        data-bs-toggle="tab"
                        data-bs-target="#enroll-courses"
                      >
                        Publish (6)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        data-bs-toggle="tab"
                        data-bs-target="#active-courses"
                      >
                        Pending (2)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        data-bs-toggle="tab"
                        data-bs-target="#complete-courses"
                      >
                        Draft (1)
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="enroll-courses"
                  >
                    <div className="row">
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course2}
                                />
                              </Link>
                              <div className="price">
                                <h3>
                                  $80 <span>$99.00</span>
                                </h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Wordpress for Beginners - Master Wordpress
                                  Quickly
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course3}
                                />
                              </Link>
                              <div className="price combo">
                                <h3>FREE</h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Sketch from A to Z (2024): Become an app
                                  designer
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>10+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>40hr 10min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course4}
                                />
                              </Link>
                              <div className="price">
                                <h3>
                                  $65 <span>$70.00</span>
                                </h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Learn Angular Fundamentals From beginning to
                                  advance lavel
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>15+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>80hr 40min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course5}
                                />
                              </Link>
                              <div className="price combo">
                                <h3>FREE</h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Build Responsive Real World Websites with
                                  Crash Course
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course7}
                                />
                              </Link>
                              <div className="price">
                                <h3>
                                  $70 <span>$80.00</span>
                                </h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Learn JavaScript and Express to become a
                                  Expert
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>15+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course8}
                                />
                              </Link>
                              <div className="price combo">
                                <h3>FREE</h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Introduction to Programming- Python &amp; Java
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>10+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="active-courses">
                    <div className="row">
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course2}
                                />
                              </Link>
                              <div className="price">
                                <h3>
                                  $80 <span>$99.00</span>
                                </h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Wordpress for Beginners - Master Wordpress
                                  Quickly
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course3}
                                />
                              </Link>
                              <div className="price combo">
                                <h3>FREE</h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Sketch from A to Z (2024): Become an app
                                  designer
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>10+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>40hr 10min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="complete-courses">
                    <div className="row">
                      {/* Course Grid */}
                      <div className="col-xxl-4 col-md-6 d-flex">
                        <div className="course-box flex-fill">
                          <div className="product">
                            <div className="product-img">
                              <Link to="/course-details">
                                <img
                                  className="img-fluid"
                                  alt="Img"
                                  src={Course4}
                                />
                              </Link>
                              <div className="price">
                                <h3>
                                  $65 <span>$70.00</span>
                                </h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Learn Angular Fundamentals From beginning to
                                  advance lavel
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt="Img"
                                  />
                                  <p>15+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt="Img"
                                  />
                                  <p>80hr 40min</p>
                                </div>
                              </div>
                              <div className="course-edit-btn d-flex align-items-center justify-content-between">
                                <Link to="#">
                                  <i className="bx bx-edit me-2" />
                                  Edit
                                </Link>
                                <Link to="#">
                                  <i className="bx bx-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Course Grid */}
                    </div>
                  </div>
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
        {/* /Instructor Courses */}
      </div>
    </div>
  </div>
  {/* /Page Content */}
</>

    </div>
  )
}

export default InstructorCourse