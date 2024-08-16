import React, { useState } from "react";
import StudentHeader from "../header";
import Footer from "../../footer";
import StudentSidebar from "../sidebar";
import { Link } from "react-router-dom";
import {
  Icon01,
  Icon2,
  User1,
  User2,
  User3,
  User4,
  User5,
  User6,
  course02,
  course03,
  course04,
  course05,
  course07,
  course08,
} from "../../imagepath";

const StudentWishlist = () => {
  const [isClassAdded, setIsClassAdded] = useState([false]);

  const toggleClass = (index) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);
  };
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Wishlist"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Wishlist</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Wishlist
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
            {/* Student Wishlist */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-info">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Wishlist</h3>
                  </div>
                  <div className="checkout-form pb-0">
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
                                  src={course02}
                                />
                              </Link>
                              <div className="price">
                                <h3>
                                  $80 <span>$99.00</span>
                                </h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="course-group d-flex">
                                <div className="course-group-img d-flex">
                                  <Link to="/instructor/instructor-profile">
                                    <img
                                      src={User2}
                                      alt="Img"
                                      className="img-fluid"
                                    />
                                  </Link>
                                  <div className="course-name">
                                    <h4>
                                      <Link to="/instructor/instructor-profile">
                                        Cooper
                                      </Link>
                                    </h4>
                                    <p>Instructor</p>
                                  </div>
                                </div>
                                <div className="course-share d-flex align-items-center justify-content-center">
                                  <Link to="#" onClick={() => toggleClass(1)}>
                                    <i
                                      className={`fa-regular fa-heart ${
                                        isClassAdded[1] ? "color-active" : ""
                                      }`}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Wordpress for Beginners - Master Wordpress
                                  Quickly
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img src={Icon01} alt="Img" />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img src={Icon2} alt="Img" />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="rating mb-0">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>5.0</span> (20)
                                </span>
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
                                  src={course03}
                                />
                              </Link>
                              <div className="price combo">
                                <h3>FREE</h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="course-group d-flex">
                                <div className="course-group-img d-flex">
                                  <Link to="/instructor/instructor-profile">
                                    <img
                                      src={User5}
                                      alt="Img"
                                      className="img-fluid"
                                    />
                                  </Link>
                                  <div className="course-name">
                                    <h4>
                                      <Link to="/instructor/instructor-profile">
                                        Jenny
                                      </Link>
                                    </h4>
                                    <p>Instructor</p>
                                  </div>
                                </div>
                                <div className="course-share d-flex align-items-center justify-content-center">
                                  <Link to="#" onClick={() => toggleClass(2)}>
                                    <i
                                      className={`fa-regular fa-heart ${
                                        isClassAdded[2] ? "color-active" : ""
                                      }`}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Sketch from A to Z (2024): Become an app
                                  designer
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img src={Icon01} alt="Img" />
                                  <p>10+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img src={Icon2} alt="Img" />
                                  <p>40hr 10min</p>
                                </div>
                              </div>
                              <div className="rating mb-0">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>3.0</span> (18)
                                </span>
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
                                  src={course04}
                                />
                              </Link>
                              <div className="price">
                                <h3>
                                  $65 <span>$70.00</span>
                                </h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="course-group d-flex">
                                <div className="course-group-img d-flex">
                                  <Link to="/instructor/instructor-profile">
                                    <img
                                      src={User4}
                                      alt="Img"
                                      className="img-fluid"
                                    />
                                  </Link>
                                  <div className="course-name">
                                    <h4>
                                      <Link to="/instructor/instructor-profile">
                                        Nicole Brown
                                      </Link>
                                    </h4>
                                    <p>Instructor</p>
                                  </div>
                                </div>
                                <div className="course-share d-flex align-items-center justify-content-center">
                                  <Link to="#" onClick={() => toggleClass(3)}>
                                    <i
                                      className={`fa-regular fa-heart ${
                                        isClassAdded[3] ? "color-active" : ""
                                      }`}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Learn Angular Fundamentals From beginning to
                                  advance lavel
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img src={Icon01} alt="Img" />
                                  <p>15+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img src={Icon2} alt="Img" />
                                  <p>80hr 40min</p>
                                </div>
                              </div>
                              <div className="rating mb-0">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span> (10)
                                </span>
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
                                  src={course05}
                                />
                              </Link>
                              <div className="price combo">
                                <h3>FREE</h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="course-group d-flex">
                                <div className="course-group-img d-flex">
                                  <Link to="/instructor/instructor-profile">
                                    <img
                                      src={User3}
                                      alt="Img"
                                      className="img-fluid"
                                    />
                                  </Link>
                                  <div className="course-name">
                                    <h4>
                                      <Link to="/instructor/instructor-profile">
                                        John Smith
                                      </Link>
                                    </h4>
                                    <p>Instructor</p>
                                  </div>
                                </div>
                                <div className="course-share d-flex align-items-center justify-content-center">
                                  <Link to="#" onClick={() => toggleClass(4)}>
                                    <i
                                      className={`fa-regular fa-heart ${
                                        isClassAdded[4] ? "color-active" : ""
                                      }`}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Build Responsive Real World Websites with
                                  Crash Course
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img src={Icon01} alt="Img" />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img src={Icon2} alt="Img" />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="rating mb-0">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span> (15)
                                </span>
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
                                  src={course07}
                                />
                              </Link>
                              <div className="price">
                                <h3>
                                  $70 <span>$80.00</span>
                                </h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="course-group d-flex">
                                <div className="course-group-img d-flex">
                                  <Link to="/instructor/instructor-profile">
                                    <img
                                      src={User6}
                                      alt="Img"
                                      className="img-fluid"
                                    />
                                  </Link>
                                  <div className="course-name">
                                    <h4>
                                      <Link to="/instructor/instructor-profile">
                                        Stella Johnson
                                      </Link>
                                    </h4>
                                    <p>Instructor</p>
                                  </div>
                                </div>
                                <div className="course-share d-flex align-items-center justify-content-center">
                                  <Link to="#" onClick={() => toggleClass(5)}>
                                    <i
                                      className={`fa-regular fa-heart ${
                                        isClassAdded[5] ? "color-active" : ""
                                      }`}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Learn JavaScript and Express to become a
                                  Expert
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img src={Icon01} alt="Img" />
                                  <p>15+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img src={Icon2} alt="Img" />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="rating mb-0">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>4.6</span> (15)
                                </span>
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
                                  src={course08}
                                />
                              </Link>
                              <div className="price combo">
                                <h3>FREE</h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="course-group d-flex">
                                <div className="course-group-img d-flex">
                                  <Link to="/instructor/instructor-profile">
                                    <img
                                      src={User1}
                                      alt="Img"
                                      className="img-fluid"
                                    />
                                  </Link>
                                  <div className="course-name">
                                    <h4>
                                      <Link to="/instructor/instructor-profile">
                                        Nicole Brown
                                      </Link>
                                    </h4>
                                    <p>Instructor</p>
                                  </div>
                                </div>
                                <div className="course-share d-flex align-items-center justify-content-center">
                                  <Link to="#" onClick={() => toggleClass(6)}>
                                    <i
                                      className={`fa-regular fa-heart ${
                                        isClassAdded[6] ? "color-active" : ""
                                      }`}
                                    />
                                  </Link>
                                </div>
                              </div>
                              <h3 className="title instructor-text">
                                <Link to="/course-details">
                                  Introduction to Programming- Python &amp; Java
                                </Link>
                              </h3>
                              <div className="course-info d-flex align-items-center">
                                <div className="rating-img d-flex align-items-center">
                                  <img src={Icon01} alt="Img" />
                                  <p>10+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img src={Icon2} alt="Img" />
                                  <p>70hr 30min</p>
                                </div>
                              </div>
                              <div className="rating mb-0">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>5.0</span> (13)
                                </span>
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
            {/* /Student Wishlist */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default StudentWishlist;
