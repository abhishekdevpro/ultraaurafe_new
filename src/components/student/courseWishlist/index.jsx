import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import {
  Course13,
  Course14,
  Course15,
  Icon1,
  Icon2,
  User1,
  User11,
} from "../../imagepath";
import { useSelector } from "react-redux";
import CourseMenu from "../courseMenu";
import StudentHeader from "../header";
import Select from "react-select";
import { Search } from "react-feather";

export default function CourseWishlist() {
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
          <CourseMenu activeMenu={"Wishlists"} />
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
                                src={Course13}
                              />
                            </Link>
                            <div className="price">
                              <h3 className="free-color">FREE</h3>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="course-group d-flex">
                              <div className="course-group-img d-flex">
                                <Link to="/student/students-profile">
                                  <img
                                    src={User1}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                                <div className="course-name">
                                  <h4>
                                    <Link to="/student/students-profile">Rolands R</Link>
                                  </h4>
                                  <p>Instructor</p>
                                </div>
                              </div>
                              <div className="course-share d-flex align-items-center justify-content-center">
                                <Link to="#rate">
                                  <i className="fa-regular fa-heart"></i>
                                </Link>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="/course-details">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                              <div className="rating-img d-flex align-items-center">
                                <img src={Icon1} alt="" />
                                <p>12+ Lesson</p>
                              </div>
                              <div className="course-view d-flex align-items-center">
                                <img src={Icon2} alt="" />
                                <p>9hr 30min</p>
                              </div>
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
                            <div className="all-btn all-category d-flex align-items-center">
                              <Link
                                to="/checkout"
                                className="btn btn-primary"
                              >
                                BUY NOW
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
                            <div className="price">
                              <h3>
                                $300 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="course-group d-flex">
                              <div className="course-group-img d-flex">
                                <Link to="/student/students-profile">
                                  <img
                                    src={User1}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                                <div className="course-name">
                                  <h4>
                                    <Link to="/student/students-profile">Rolands R</Link>
                                  </h4>
                                  <p>Instructor</p>
                                </div>
                              </div>
                              <div className="course-share d-flex align-items-center justify-content-center">
                                <Link to="#rate">
                                  <i className="fa-regular fa-heart"></i>
                                </Link>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="/course-details">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                              <div className="rating-img d-flex align-items-center">
                                <img src={Icon1} alt="" />
                                <p>12+ Lesson</p>
                              </div>
                              <div className="course-view d-flex align-items-center">
                                <img src={Icon2} alt="" />
                                <p>9hr 30min</p>
                              </div>
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
                            <div className="all-btn all-category d-flex align-items-center">
                              <Link
                                to="/checkout"
                                className="btn btn-primary"
                              >
                                BUY NOW
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
                            <div className="price">
                              <h3>
                                $300 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="course-group d-flex">
                              <div className="course-group-img d-flex">
                                <Link to="/student/students-profile">
                                  <img
                                    src={User1}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                                <div className="course-name">
                                  <h4>
                                    <Link to="/student/students-profile">Rolands R</Link>
                                  </h4>
                                  <p>Instructor</p>
                                </div>
                              </div>
                              <div className="course-share d-flex align-items-center justify-content-center">
                                <Link to="#rate">
                                  <i className="fa-regular fa-heart"></i>
                                </Link>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link to="/course-details">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                              <div className="rating-img d-flex align-items-center">
                                <img src={Icon1} alt="" />
                                <p>12+ Lesson</p>
                              </div>
                              <div className="course-view d-flex align-items-center">
                                <img src={Icon2} alt="" />
                                <p>9hr 30min</p>
                              </div>
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
                            <div className="all-btn all-category d-flex align-items-center">
                              <Link
                                to="/checkout"
                                className="btn btn-primary"
                              >
                                BUY NOW
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
      </section>
      <Footer />
    </div>
  );
}
