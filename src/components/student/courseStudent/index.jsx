import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import {
  Course10,
  Course11,
  Course12,
  Course13,
  Course14,
  Course15,
  Course16,
  Course17,
  User11,
} from "../../imagepath";
import StudentHeader from "../header";
import CourseMenu from "../courseMenu";
import { Search } from "react-feather";
import Select from "react-select";
import { useSelector } from "react-redux";
export default function CourseStudent() {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [setValue] = useState(null);
  const options = [
    { label: "Newly Published", value: "new" },
    { label: "Angular", value: "1" },
    { label: "React", value: "2" },
    { label: "Node", value: "3" },
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: mobileSidebar === 'disabled' ? "white":"#131022",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      border: "1px solid #e9ecef",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided) => ({
      ...provided,
      backgroundColor:  mobileSidebar === 'disabled' ? "#fff" : "#000",
      color:mobileSidebar === 'disabled'? '#000':'#fff',
      fontSize: "14px",
      "&:hover": {
        backgroundColor:mobileSidebar === 'disabled'? "#FFDEDA":"#2b2838",
        // #dddddd
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };
  return (
    <div className="main-wrapper">
      <StudentHeader />
      <div className="course-student-header">
        <div className="container">
          <div className="student-group">
            <div className="course-group ">
              <div className="course-group-img d-flex">
                <Link to="/student/students-profile">
                  <img src={User11} alt="" className="img-fluid" />
                </Link>
                <div className="d-flex align-items-center">
                  <div className="course-name">
                    <h4>
                      <Link to="/student/students-profile">Rolands R</Link>
                      <span>Beginner</span>
                    </h4>
                    <p>Student</p>
                  </div>
                </div>
              </div>
              <div className="course-share ">
                <Link to="#" className="btn btn-primary">
                  Account Settings
                </Link>
              </div>
            </div>
          </div>
          <CourseMenu activeMenu={"Courses"} />
        </div>
      </div>

      <section className="course-content">
        <div className="container">
          <div className="student-widget">
            <div className="student-widget-group">
              <div className="row">
                <div className="col-lg-12">
                  <div className="showing-list">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="show-filter choose-search-blk">
                          <form action="#">
                            <div className="mycourse-student align-items-center">
                              <div className="student-search">
                                <div className=" search-group">
                                  <Search className="searchFeather" size={16} />
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search our courses"
                                  />
                                </div>
                              </div>
                              <div className="student-filter">
                                <div className="input-block select-form mb-0">
                                  <Select
                                    className=" select country-select"
                                    name="sellist1"
                                    options={options}
                                    defaultValue={options[0]}
                                    placeholder="Choose"
                                    onChange={setValue}
                                    styles={style}
                                  ></Select>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="/course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course10}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <Link to="/course-details">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <div className="rating-student">
                              <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span>
                                </span>
                              </div>
                              <div className="edit-rate">
                                <Link to="#">Edit rating</Link>
                              </div>
                            </div>
                            <div className="progress-stip">
                              <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                            </div>
                            <div className="student-percent">
                              <p>35% Completed</p>
                            </div>
                            <div className="start-leason hoverBlue d-flex align-items-center">
                              <Link
                                to="/course-lesson"
                                className="btn btn-primary"
                              >
                                Start Lesson
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="/course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course11}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <Link to="/course-details">
                                Wordpress for Beginners - Master Wordpress
                                Quickly
                              </Link>
                            </h3>
                            <div className="rating-student">
                              <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span>{" "}
                                </span>
                              </div>
                              <div className="edit-rate">
                                <Link to="#">Edit rating</Link>
                              </div>
                            </div>
                            <div className="progress-stip">
                              <div className="progress-bar bg-success progress-bar-striped "></div>
                            </div>
                            <div className="student-percent">
                              <p>0% Completed</p>
                            </div>
                            <div className="start-leason hoverBlue d-flex align-items-center">
                              <Link
                                to="/course-lesson"
                                className="btn btn-primary"
                              >
                                Start Lesson
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="/course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course12}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <Link to="/course-details">
                                Sketch from A to Z (2024): Become an app
                                designer
                              </Link>
                            </h3>
                            <div className="rating-student">
                              <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span>
                                </span>
                              </div>
                              <div className="edit-rate">
                                <Link to="#">Edit rating</Link>
                              </div>
                            </div>
                            <div className="progress-stip">
                              <div className="progress-bar bg-success progress-bar-striped"></div>
                            </div>
                            <div className="student-percent">
                              <p>0% Completed</p>
                            </div>
                            <div className="start-leason hoverBlue d-flex align-items-center">
                              <Link
                                to="/course-lesson"
                                className="btn btn-primary"
                              >
                                Start Lesson
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="/course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course13}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <Link to="/course-details">
                                Learn Angular Fundamentals From ...
                              </Link>
                            </h3>
                            <div className="rating-student">
                              <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span>
                                </span>
                              </div>
                              <div className="edit-rate">
                                <Link to="#">Edit rating</Link>
                              </div>
                            </div>
                            <div className="progress-stip">
                              <div className="progress-bar bg-success progress-bar-striped "></div>
                            </div>
                            <div className="student-percent">
                              <p>0% Completed</p>
                            </div>
                            <div className="start-leason hoverBlue d-flex align-items-center">
                              <Link
                                to="/course-lesson"
                                className="btn btn-primary"
                              >
                                Start Lesson
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="/course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course14}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <Link to="/course-details">
                                Build Responsive Real World Websites with...
                              </Link>
                            </h3>
                            <div className="rating-student">
                              <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span>
                                </span>
                              </div>
                              <div className="edit-rate">
                                <Link to="#">Edit rating</Link>
                              </div>
                            </div>
                            <div className="progress-stip">
                              <div className="progress-bar bg-success progress-bar-striped "></div>
                            </div>
                            <div className="student-percent">
                              <p>0% Completed</p>
                            </div>
                            <div className="start-leason hoverBlue d-flex align-items-center">
                              <Link
                                to="/course-lesson"
                                className="btn btn-primary"
                              >
                                Start Lesson
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="/course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course15}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <Link to="/course-details">
                                C# Developers Double Your Coding Speed with ...
                              </Link>
                            </h3>
                            <div className="rating-student">
                              <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span>
                                </span>
                              </div>
                              <div className="edit-rate">
                                <Link to="#">Edit rating</Link>
                              </div>
                            </div>
                            <div className="progress-stip">
                              <div className="progress-bar bg-success progress-bar-striped "></div>
                            </div>
                            <div className="student-percent">
                              <p>0% Completed</p>
                            </div>
                            <div className="start-leason hoverBlue d-flex align-items-center">
                              <Link
                                to="/course-lesson"
                                className="btn btn-primary"
                              >
                                Start Lesson
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="/course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course16}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <Link to="/course-details">
                                Learn JavaScript and Express to become a ...
                              </Link>
                            </h3>
                            <div className="rating-student">
                              <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span>
                                </span>
                              </div>
                              <div className="edit-rate">
                                <Link to="#">Edit rating</Link>
                              </div>
                            </div>
                            <div className="progress-stip">
                              <div className="progress-bar bg-success progress-bar-striped "></div>
                            </div>
                            <div className="student-percent">
                              <p>0% Completed</p>
                            </div>
                            <div className="start-leason hoverBlue d-flex align-items-center">
                              <Link
                                to="/course-lesson"
                                className="btn btn-primary"
                              >
                                Start Lesson
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="/course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course17}
                              />
                            </Link>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <Link to="/course-details">
                                Responsive Web Design Essentials HTML5 CSS3 ...
                              </Link>
                            </h3>
                            <div className="rating-student">
                              <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star"></i>
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span>
                                </span>
                              </div>
                              <div className="edit-rate">
                                <Link id="edit-rating">Edit rating</Link>
                              </div>
                            </div>
                            <div className="publish-rate">
                              <form action="#">
                                <select className="form-select" name="sellist1">
                                  <option>4 Out of 5</option>
                                  <option>3 Out of 5</option>
                                  <option>2 Out of 5</option>
                                  <option>1 Out of 5</option>
                                </select>
                                <div className="input-block mt-3">
                                  <textarea
                                    className="form-control"
                                    rows="4"
                                    name="text"
                                  ></textarea>
                                </div>
                                <div className="group-btn mb-3">
                                  <button
                                    type="submit"
                                    className="btn btn-primary publish-btn mb-3"
                                  >
                                    Publish Rating
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-primary cancel-btn"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </form>
                            </div>
                            <div className="stip-grp">
                              <div className="progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped "></div>
                              </div>
                              <div className="student-percent">
                                <p>0% Completed</p>
                              </div>
                              <div className="start-leason hoverBlue d-flex align-items-center">
                                <Link
                                  to="/course-lesson"
                                  className="btn btn-primary"
                                >
                                  Start Lesson
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
        </div>
      </section>
      <Footer />
    </div>
  );
}
