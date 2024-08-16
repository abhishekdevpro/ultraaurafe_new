import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import {
  Icon1,
  Icon2,
  User,
  User1,
  User11,
  User12,
  User13,
  User2,
  User3,
  User4,
  User5,
} from "../../imagepath";
import { Filter, Grid, List, Search } from "react-feather";
import { Link } from "react-router-dom";

export default function InstructorGrid2() {
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      {/* BreadCrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">Instructors Grid</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BreadCrumb */}
      {/* Page Wrapper */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {/* Filter */}
              <div className="showing-list">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <div className="view-icons">
                        <Link
                          to="/instructor/instructor-grid"
                          className="grid-view active"
                        >
                          <Grid />
                        </Link>
                        <Link to="/instructor/instructor-list" className="list-view">
                          <List />
                        </Link>
                      </div>
                      <div className="show-result">
                        <h4>Showing 1-9 of 50 results</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="show-filter add-course-info">
                      <form action="#">
                        <div className="row gx-2 align-items-center">
                          <div className="col-md-6 col-item">
                            <div className=" search-group">
                              <Search
                                size={16}
                                style={{
                                  position: "absolute",
                                  left: "7px",
                                  color: "#F66962",
                                }}
                              />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search our courses"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-item">
                            <div className="input-block select-form mb-0">
                              <select
                                className="form-select select"
                                id="sel1"
                                name="sellist1"
                              >
                                <option>Newly published </option>
                                <option>Angular</option>
                                <option>React</option>
                                <option>Nodejs</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filter */}

              <div className="row">
                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User11} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">Rolands R</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}

                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">Jenis R.</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}

                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User4} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">Jesse Stevens</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}

                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User2} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">Stevens Jes</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}

                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User3} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">John Smith</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}

                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User5} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">Stella Johnson</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}

                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User12} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">John Michael</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}

                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User1} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">Nicole Brown</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}

                {/* Instructor List */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="instructor-box instruct-grid flex-fill">
                    <div className="instructor-img">
                      <Link to="instructor-profile">
                        <img className="img-fluid" alt="" src={User13} />
                      </Link>
                      <Link to="#rate" className="rating-count">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                    <div className="instructor-content">
                      <h5>
                        <Link to="instructor-profile">Monroe Parker</Link>
                      </h5>
                      <h6>Instructor</h6>
                      <div className="rating-img d-flex align-items-center justify-content-center">
                        <img src={Icon1} className="me-1" alt="" />
                        <p>12+ Lesson</p>
                      </div>
                      <div className="course-view d-flex align-items-center justify-content-center">
                        <img src={Icon2} className="me-1" alt="" />
                        <p>9hr 30min</p>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Instructor List */}
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination lms-page">
                    <li className="page-item prev">
                      <Link
                        className="page-link"
                        to="#"
                  
                      >
                        <i className="fas fa-angle-left"></i>
                      </Link>
                    </li>
                    <li className="page-item first-page active">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        4
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        5
                      </Link>
                    </li>
                    <li className="page-item next">
                      <Link className="page-link" to="#">
                        <i className="fas fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Pagination */}
            </div>

            <div className="col-lg-3">
              <div className="filter-clear">
                <div className="clear-filter d-flex align-items-center">
                  <h4>
                    <Filter />
                    Filters
                  </h4>
                  <div className="clear-text">
                    <p>CLEAR</p>
                  </div>
                </div>

                {/* Search Filter */}
                <div className="card search-filter">
                  <div className="card-body">
                    <div className="filter-widget mb-0">
                      <div className="categories-head d-flex align-items-center">
                        <h4>Course categories</h4>
                        <i className="fas fa-angle-down"></i>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> Backend (3)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> CSS (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> Frontend (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="select_specialist"
                            checked
                          />
                          <span className="checkmark"></span> General (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="select_specialist"
                            checked
                          />
                          <span className="checkmark"></span> IT & Software (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> Photography (2)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> Programming
                          Language (3)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check mb-0">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> Technology (2)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search Filter */}

                {/* Search Filter */}
                <div className="card search-filter">
                  <div className="card-body">
                    <div className="filter-widget mb-0">
                      <div className="categories-head d-flex align-items-center">
                        <h4>Instructors</h4>
                        <i className="fas fa-angle-down"></i>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> Keny White (10)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> Hinata Hyuga (5)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark"></span> John Doe (3)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check mb-0">
                          <input
                            type="checkbox"
                            name="select_specialist"
                            checked
                          />
                          <span className="checkmark"></span> Nicole Brown
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search Filter */}

                {/* Search Filter */}
                <div className="card search-filter ">
                  <div className="card-body">
                    <div className="filter-widget mb-0">
                      <div className="categories-head d-flex align-items-center">
                        <h4>Price</h4>
                        <i className="fas fa-angle-down"></i>
                      </div>
                      <div>
                        <label className="custom_check custom_one">
                          <input type="radio" name="select_specialist" />
                          <span className="checkmark"></span> All (18)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one">
                          <input type="radio" name="select_specialist" />
                          <span className="checkmark"></span> Free (3)
                        </label>
                      </div>
                      <div>
                        <label className="custom_check custom_one mb-0">
                          <input
                            type="radio"
                            name="select_specialist"
                            checked
                          />
                          <span className="checkmark"></span> Paid (15)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search Filter */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Wrapper */}
      <Footer />
    </div>
  );
}
