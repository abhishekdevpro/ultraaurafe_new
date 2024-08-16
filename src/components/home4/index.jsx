import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Footer4 } from "../footer4";
import { Header4 } from "../header4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  AwardNew,
  BannerVector,
  BlogImg1,
  BlogImg2,
  BlogImg3,
  Education,
  FeaturedCourse1,
  FeaturedCourse2,
  FeaturedCourse3,
  FeaturedCourse4,
  FeaturedCourse5,
  FeaturedCourse6,
  InstructorVectorLeft,
  InstructorVectorRight,
  JoingusSkill,
  MasterVectorLeft,
  Profile01,
  Profile02,
  Profile03,
  Profile04,
  Profile05,
  Profile06,
  Profile07,
  Profile08,
  Profile10,
  Profile11,
  Profile12,
  Profile13,
  Profile14,
  Profile15,
  Profile16,
  SkillsSvg1,
  SkillsSvg2,
  SkillsSvg3,
  SkillsSvg4,
  Slider01,
  Slider02,
  User1,
  User3,
  User4,
  User6,
} from "../imagepath";
import Select from "react-select";
import LeadingCompanies4 from "./slider/leadingCompanies";
import CourseCategories4 from "./slider/courseCategories";
import Testimonial4 from "./slider/testimonial";
import CountUp from "react-countup";


export const Home4 = () => {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [setValue] = useState(null);
  const [toggle, setToggle] = useState(1);
  const updateToggle = (id) => {
    setToggle(id);
  };
  const options = [
    { label: "Category", value: "Category" },
    { label: "Angular", value: "Angular" },
    { label: "Node Js", value: "Node Js" },
    { label: "React", value: "React" },
    { label: "Python", value: "Python" },
  ];

  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor:mobileSidebar === 'disabled' ? "#FFD600":"#2b2838",
      width: "100%",
      height: "55px",
      minHeight: "55px",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "50px",
      fontSize: "16px",
      fontWeight: "500",
      color: "black",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      outline: "none",
    }),
    menu: (base) => ({
      ...base,
      marginTop: "0px",
      borderRadius: "50px",
      hyphens: "auto",
      width: "max-content",
      minWidth: "100%",
    }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided) => ({
      ...provided,
      backgroundColor:  mobileSidebar === 'disabled' ? "#fff" : "#000",
      color:mobileSidebar === 'disabled'? '#000':'#fff',
      fontSize: "14px",
      "&:hover": {
        backgroundColor:mobileSidebar === 'disabled'? "#FFD600":"#2b2838",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      // padding: "0 15px",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
      color: "black",
    }),
  };

  useEffect(() => {
    document.body.className = "home-five";

    return () => {
      document.body.className = "";
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  

  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 2,
      },
    },
  };
  return (
    <>
      <Header4 />

      {/* Home Banner */}
      <section className="home-slide-five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="home-slide-five-face" data-aos="fade-down">
                {/* Banner Text */}
                <div className="home-slide-five-text">
                  <h5>The Leader in Online Learning</h5>
                  <h1>Engaging & Accessible Online Courses For All</h1>
                  <p>Trusted by over 15K Users worldwide since 2024</p>
                </div>
                {/* Banner Text */}

                {/* banner Seach Category */}
                <div className="banner-content-five">
                  <form className="form" action="course-list">
                    <div className="form-inner-five">
                      <div className="input-group">
                        {/* Select Category */}
                        <span className="drop-detail-five">
                          <Select
                            options={options}
                            value={options.value}
                            defaultValue={options[0]}
                            placeholder="Category"
                            onChange={setValue}
                            styles={style}
                          ></Select>
                        </span>
                        {/* Select Category */}

                        {/* Search */}
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Search School, Online eductional centers, etc"
                        />
                        {/* Search */}

                        {/* Submit Button */}
                        <button
                          className="btn btn-primary sub-btn"
                          type="submit"
                        >
                          <span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </span>
                        </button>
                        {/* Submit Button */}
                      </div>
                    </div>
                  </form>
                </div>
                {/* banner Seach Category */}

                {/* Review and Experience */}
                <div className="review-five-group">
                  <div className="review-user-five  d-flex align-items-center">
                    <ul className="review-users-list">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="leader 1"
                        >
                          <img src={Avatar1} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="leader 2"
                        >
                          <img src={Avatar2} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="leader 3"
                        >
                          <img src={Avatar3} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="leader 3"
                        >
                          <img src={Avatar4} alt="img" />
                        </Link>
                      </li>
                    </ul>
                    <div className="review-rating-five">
                      <div className="rating-star">
                        <p>5.5</p>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                      </div>
                    </div>
                  </div>
                  {/* Experience */}
                  <div className="rate-head-five d-flex align-items-center course-count">
                    <h2>
                      <span className="counterUp">10</span>+
                    </h2>
                    <p>Years of experience tutors</p>
                  </div>
                </div>
                {/* Review and Experience */}
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="banner-slider-img">
                <div className="row">
                  <div className="col-lg-6 align-self-end">
                    <div className="slider-five-one" data-aos="fade-down">
                      <img src={Slider01} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="slider-five-two aos" data-aos="fade-down">
                      <img src={Slider02} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vector-shapes-five">
            <img src={BannerVector} alt="" />
          </div>
        </div>
      </section>
      {/* Home Banner */}

      {/* Leading Section Five */}
      <section className="leading-section-five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-down">
              <div className="leading-five-content course-count">
                <h2>
                  Trusted By <span className="counterUp">500</span>+
                </h2>
                <p>Leading Universities And Companies</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6" data-aos="fade-down">
              <div className="lead-group-five">
                <LeadingCompanies4 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Leading Section Five */}

      {/* Course Categories five */}
      <section className="course-section-five">
        <div className="container">
          <div className="header-five-title text-center" data-aos="fade-down">
            <h2>Course Categories</h2>
            <p>Pick Your Favourite Course</p>
          </div>
          <CourseCategories4 />
        </div>
      </section>
      {/* Course Categories five */}

      {/* Counter Five */}
      <section className="counter-section-five">
        <div className="container">
          <div className="row align-items-center text-center justify-content-between">
            {/* Col */}
            <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
              <div className="count-five">
                <div className="count-content-five course-count ms-0">
                  <h4>
                    <span className="counterUp">145</span>
                  </h4>
                  <p className="mb-0">Expert Tutors</p>
                </div>
              </div>
            </div>
            {/* Col */}
            {/* Col */}
            <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
              <div className="count-five">
                <div className="count-content-five course-count ms-0">
                  <h4>
                    <span className="counterUp">2,3495</span>
                  </h4>
                  <p className="mb-0">Cetified Courses</p>
                </div>
              </div>
            </div>
            {/* Col */}
            {/* Col */}
            <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
              <div className="count-five">
                <div className="count-content-five course-count ms-0">
                  <h4>
                    <span className="counterUp">20</span>+
                  </h4>
                  <p className="mb-0">Online students</p>
                </div>
              </div>
            </div>
            {/* Col */}

            {/* Col */}
            <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
              <div className="count-five count-five-last count-five-0">
                <div className="count-content-five course-count ms-0">
                  <h4>
                    <span className="counterUp">58,370</span>
                  </h4>
                  <p className="mb-0">Online Courses</p>
                </div>
              </div>
            </div>
            {/* Col */}
          </div>
        </div>
      </section>
      {/* Counter Five */}

      {/* Featured Section 5 */}
      <section className="featured-section-five">
        <div className="container">
          <div className="header-five-title text-center" data-aos="fade-down">
            <h2>Featured Courses</h2>
            <p>Pick Your Favourite Course</p>
          </div>
          <div className="row">
            <div className="featured-courses-five-tab">
              <div className="tab-content">
                <div className="nav tablist-five" role="tablist">
                  <Link
                    className={toggle === 1 ? "nav-tab active" : "nav-tab"}
                    data-bs-toggle="tab"
                    to="#ux-design-tab"
                    role="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      updateToggle(1);
                    }}
                  >
                    UI/UX Design
                  </Link>

                  <Link
                    className={toggle === 2 ? "nav-tab active" : "nav-tab"}
                    data-bs-toggle="tab"
                    to="#development-tab"
                    role="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      updateToggle(2);
                    }}
                  >
                    Development
                  </Link>

                  <Link
                    className={toggle === 3 ? "nav-tab active" : "nav-tab"}
                    data-bs-toggle="tab"
                    to="#marketing-tab"
                    role="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      updateToggle(3);
                    }}
                  >
                    Marketing
                  </Link>

                  <Link
                    className={toggle === 4 ? "nav-tab active" : "nav-tab"}
                    data-bs-toggle="tab"
                    to="#business-tab"
                    role="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      updateToggle(4);
                    }}
                  >
                    Business
                  </Link>

                  <Link
                    className={toggle === 5 ? "nav-tab active" : "nav-tab"}
                    data-bs-toggle="tab"
                    to="#technology-tab"
                    role="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      updateToggle(5);
                    }}
                  >
                    Technology
                  </Link>

                  <Link
                    className={toggle === 6 ? "nav-tab active" : "nav-tab"}
                    data-bs-toggle="tab"
                    to="#all-category-tab"
                    role="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      updateToggle(6);
                    }}
                  >
                    All Category
                  </Link>
                </div>

                <div className="tab-content">
                  {/* UI Design */}
                  <div
                    className={
                      toggle === 1
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                    id="ux-design-tab"
                  >
                    <div className="ux-design-five">
                      <div className="row">
                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse1}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Cristofer Nolen
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse2}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse3}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User3}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Russell T. Johnson
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse4}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User4}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse5}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User6}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Russell T. Johnson
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse6}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}
                      </div>
                    </div>
                  </div>
                  {/* UI Design */}

                  {/* Development */}
                  <div
                    className={
                      toggle === 2
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                    id="development-tab"
                  >
                    <div className="ux-design-five">
                      <div className="row">
                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse6}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse5}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse4}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse3}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse2}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse1}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}
                      </div>
                    </div>
                  </div>
                  {/* Development */}

                  {/* Marketing */}
                  <div
                    className={
                      toggle === 3
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                    id="marketing-tab"
                  >
                    <div className="ux-design-five">
                      <div className="row">
                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse1}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse2}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse3}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse4}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse5}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse6}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}
                      </div>
                    </div>
                  </div>
                  {/* Marketing */}

                  {/* Business */}
                  <div
                    className={
                      toggle === 4
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                    id="business-tab"
                  >
                    <div className="ux-design-five">
                      <div className="row">
                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse6}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse5}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse4}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse3}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse2}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse1}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}
                      </div>
                    </div>
                  </div>
                  {/* Business */}

                  {/* Technology */}
                  <div
                    className={
                      toggle === 5
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                    id="technology-tab"
                  >
                    <div className="ux-design-five">
                      <div className="row">
                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse1}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse2}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse3}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse4}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse5}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse6}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}
                      </div>
                    </div>
                  </div>
                  {/* Technology*/}

                  {/* All Category*/}
                  <div
                    className={
                      toggle === 6
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                    id="all-category-tab"
                  >
                    <div className="ux-design-five">
                      <div className="row">
                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse6}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse5}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse4}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse3}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse2}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}

                        {/* Col */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          <div className="course-box-five">
                            <div className="product-five">
                              {/* Product image*/}
                              <div className="product-img-five">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={FeaturedCourse1}
                                  />
                                </Link>
                                <div className="heart-five">
                                  <Link to="#">
                                    <i className="fa-regular fa-heart"></i>
                                  </Link>
                                </div>
                              </div>
                              {/* Product image*/}

                              {/* Product Content*/}
                              <div className="product-content-five">
                                <div className="course-group-five">
                                  <div className="course-group-img-five">
                                    <Link to="/course-details">
                                      <img
                                        src={User1}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </Link>
                                    <h6>
                                      <Link to="/course-details">
                                        Nicole Brown
                                      </Link>
                                    </h6>
                                  </div>
                                  <div className="course-share-five">
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="product-five-title">
                                  <Link to="/course-details">
                                    The Complete Web Developer PHP framework
                                    Course 2.0
                                  </Link>
                                </h3>
                                <div className="info-five-middle">
                                  <div className="course-view-five">
                                    <span className="me-2">
                                      <Link to="#">
                                        <i className="fa-regular fa-clockss"></i>
                                      </Link>
                                    </span>
                                    <p>8hr 30min</p>
                                  </div>
                                  <div className="rating-img">
                                    <span className="me-2">
                                      <i className="fa-solid fa-book-open"></i>
                                    </span>
                                    <p>10+ Lesson</p>
                                  </div>
                                </div>
                                <div className="price-five-group">
                                  <p>Graphic</p>
                                  <h3>$300.00</h3>
                                </div>
                              </div>
                              {/* Product Content*/}
                            </div>
                            {/* Ovelay button */}
                            <div className="joing-course-ovelay">
                              <Link
                                to="/course-details"
                                className="joing-course-btn"
                              >
                                Join Course
                              </Link>
                            </div>
                            {/* Ovelay button */}
                          </div>
                        </div>
                        {/* Col */}
                      </div>
                    </div>
                  </div>
                  {/* All Category*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Section 5 */}

      {/* Master the skills */}
      <section className="master-section-five">
        <div className="container">
          <div className="master-five-vector">
            <img className="ellipse-right" src={MasterVectorLeft} alt="" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12" data-aos="fade-down">
              <div className="section-five-sub">
                <div className="header-five-title">
                  <h2>Master the skills to drive your career</h2>
                  <p>Pick Your Favourite Course</p>
                </div>
                <div className="career-five-content">
                  <p data-aos="fade-down">
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    .
                  </p>
                  <p className="mb-0" data-aos="fade-down">
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    of eLearning learners report our hands-on content directly
                    helped their careers.
                  </p>
                </div>
                <Link to="/course-list" className="learn-more-five">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-sm-6" data-aos="fade-down">
                  <div className="skill-five-item">
                    <div className="skill-five-icon">
                      <img
                        src={SkillsSvg1}
                        className="bg-warning"
                        alt="Stay motivated"
                      />
                    </div>
                    <div className="skill-five-content">
                      <h3>Stay motivated with engaging instructors</h3>
                      <p>
                        eLearning learners report our hands-on content directly
                        helped their careers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6" data-aos="fade-down">
                  <div className="skill-five-item">
                    <div className="skill-five-icon">
                      <img
                        src={SkillsSvg2}
                        className="bg-info"
                        alt="Stay motivated"
                      />
                    </div>
                    <div className="skill-five-content">
                      <h3>Keep up with in the latest in cloud</h3>
                      <p>
                        eLearning learners report our hands-on content directly
                        helped their careers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6" data-aos="fade-down">
                  <div className="skill-five-item">
                    <div className="skill-five-icon">
                      <img
                        src={SkillsSvg3}
                        className="bg-danger"
                        alt="Stay motivated"
                      />
                    </div>
                    <div className="skill-five-content">
                      <h3>Get certified with 100+ certification courses</h3>
                      <p>
                        eLearning learners report our hands-on content directly
                        helped their careers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6" data-aos="fade-down">
                  <div className="skill-five-item">
                    <div className="skill-five-icon">
                      <img
                        src={SkillsSvg4}
                        className="bg-light-green"
                        alt="Stay motivated"
                      />
                    </div>
                    <div className="skill-five-content">
                      <h3>Build skills your way, from labs to courses</h3>
                      <p>
                        eLearning learners report our hands-on content directly
                        helped their careers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Master the skills */}

      {/* Experience Course Five */}
      <section className="experienced-course-five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-down">
              <div className="experienced-five-group">
                <div className="instructor-vector-left">
                  <img src={InstructorVectorLeft} alt="" />
                </div>
                <div className="developer-five-list">
                  <ul>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile01} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile02} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile03} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile04} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile05} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile06} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile07} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile08} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile03} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile10} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile11} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile12} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile13} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile14} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile15} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <img src={Profile16} alt="Course Instructor" />
                        </div>
                        <div className="profile-five-ovelay">
                          <h5>Daziy Millar</h5>
                          <p>PHP Expert</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="instructor-vector-right">
                  <img src={InstructorVectorRight} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-down">
              <div className="experienced-five-sub">
                <div className="header-five-title header-five-title-inner">
                  <h2 className="ex-five-title">
                    Experienced Course Instructor
                  </h2>
                </div>
                <div className="career-five-content">
                  <p className="ex-five-content">
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    . Get certified, master modern tech skills, and level up
                    your career — whether you’re starting out or a seasoned pro.
                    95% of eLearning learners report our hands-on content
                    directly helped their careers.
                  </p>
                </div>
                <Link to="/instructor/instructor-list" className="learn-more-five">
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Course Five */}

      {/* Share your knowledge */}
      <section className="share-knowledge-five">
        <div className="container">
          <div className="row align-items-center share-knowledge-row">
            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down">
              <div className="section-five-sub">
                <div className="header-five-title">
                  <h2>Want to share your knowledge? Join us a Mentor</h2>
                </div>
                <div className="career-five-content">
                  <p>
                    High-definition video is video of higher resolution and
                    quality than standard-definition. While there is no
                    standardized meaning for high-definition, generally any
                    video.While there is no standardized meaning for
                    high-definition, generally any video.
                  </p>
                </div>
                <div className="knowledge-list-five">
                  <ul>
                    <li>
                      <div className="knowledge-list-group">
                        <img src={AwardNew} alt="" />
                        <p>Best Courses</p>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="knowledge-list-group">
                        <img src={AwardNew} alt="" />
                        <p>Best Courses</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link to="/course-list" className="learn-more-five">
                  Start Teaching Today
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down">
              <div className="joing-count-five text-center">
                <img src={JoingusSkill} alt="" />
                <div className="joing-count-five-one course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">5,5</span>K<span>+</span>
                  </h3>
                  <p className="joing-count-text">Courses</p>
                </div>
                <div className="joing-count-five-two course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">50</span>K
                  </h3>
                  <p className="joing-count-text">Appreciations</p>
                </div>
                <div className="joing-count-five-three course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">100</span>
                  </h3>
                  <p className="joing-count-text">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Share your knowledge */}
      {/* Achieve your goals */}
      <section className="goals-section-five">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-x-4 col-lg-3 col-md-12 col-sm-12"
              data-aos="fade-down"
            >
              <div className="header-five-title mb-0">
                <h2 className="mb-0">Achieve your Goals with DreamsLMS</h2>
              </div>
            </div>
            <div className="col-x-8 col-lg-9 col-md-12 col-sm-12">
              <div className="row text-center align-items-center">
                {/* Col */}
                <div className="col-lg-3 col-sm-3" data-aos="fade-down">
                  <div className="goals-count-five goals-five-one">
                    <div className="goals-content-five course-count ms-0">
                      <h4>
                      <span className="d-flex"> 
                            <CountUp start={0} end={145} delay={1} duration={2}/>
                      </span>
                      </h4>
                      <p className="mb-0">Expert Tutors</p>
                    </div>
                  </div>
                </div>
                {/* Col */}

                {/* Col */}
                <div className="col-lg-3 col-sm-3" data-aos="fade-down">
                  <div className="goals-count-five goals-five-two">
                    <div className="goals-content-five course-count ms-0">
                      <h4>
                        <span className="counterUp">23495</span>
                      </h4>
                      <p className="mb-0">Cetified Courses</p>
                    </div>
                  </div>
                </div>
                {/* Col */}

                {/* Col */}
                <div className="col-lg-3 col-sm-3" data-aos="fade-down">
                  <div className="goals-count-five goals-five-three">
                    <div className="goals-content-five course-count ms-0">
                      <h4>
                     <CountUp start={0} end={20} delay={1} duration={3}/>+
                      </h4>
                      <p className="mb-0">Online students</p>
                    </div>
                  </div>
                </div>
                {/* Col */}

                {/* Col */}
                <div className="col-lg-3 col-sm-3" data-aos="fade-down">
                  <div className="goals-count-five goals-five-four goals-five-last">
                    <div className="goals-content-five course-count ms-0">
                      <h4>
                        <span className="counterUp">58370</span>
                      </h4>
                      <p className="mb-0">Online Courses</p>
                    </div>
                  </div>
                </div>
                {/* Col */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achieve your goals */}

      {/* Transform Section */}
      <section className="transform-section-five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down">
              <div className="joing-count-five">
                <img src={Education} alt="" />
                <div className="transform-count-five-one course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">100</span>
                  </h3>
                  <p className="joing-count-text">Countries</p>
                </div>
                <div className="transform-count-five-two course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">5,5</span>K<span>+</span>
                  </h3>
                  <p className="joing-count-text">Courses</p>
                </div>
                <div className="transform-count-five-three course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">50</span>K<span>+</span>
                  </h3>
                  <p className="joing-count-text">Appreciations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down">
              <div className="transform-access-content">
                <div className="header-five-title">
                  <h2>Transform Access To Education</h2>
                </div>
                <div className="career-five-content">
                  <p className="mb-0">
                    Create an account to receive our newsletter, course
                    recommendations and promotions. Create an account to receive
                    our newsletter, course recommendations and promotions.
                    Create an account to receive our newsletter, course
                    recommendations and promotions.
                  </p>
                </div>
                <div className="knowledge-list-five">
                  <ul>
                    <li>
                      <div className="knowledge-list-group">
                        <img src={AwardNew} alt="" />
                        <p>Award Winning Course Management</p>
                      </div>
                    </li>
                    <li>
                      <div className="knowledge-list-group">
                        <img src={AwardNew} alt="" />
                        <p>Learn anything from anywhere anytime</p>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="knowledge-list-group">
                        <img src={AwardNew} alt="" />
                        <p>
                          Certification for solid development of your Carrer
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link to="/instructor/instructor-course" className="learn-more-five">
                  Start Teaching Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Transform Section */}

      {/* Testimonials */}
      <section className="testimonial-section-five">
        <div className="container">
          <div className="header-five-title text-center" data-aos="fade-down">
            <h2 className="text-warning">Testimonials</h2>
            <p className="text-white">
              We are a very happy because we have a happy customer{" "}
            </p>
          </div>
          <div className="testimonial-slider-five">
            <Testimonial4 />
          </div>
        </div>
      </section>
      {/* Testimonials */}

      {/* Unlimited Access */}
      <section className="leading-section-five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6" data-aos="fade-down">
              <div className="leading-five-content">
                <h2>Unlimited access</h2>
                <p>to 360+ courses and 1,600+ hands-on labs</p>
              </div>
            </div>
            <div className="col-lg-8 col-sm-6" data-aos="fade-down">
              <div className="lead-group-five">
                <LeadingCompanies4 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Unlimited Access */}

      {/* Latest Blogs */}
      <section className="blogs-section-five">
        <div className="container">
          <div className="header-five-title text-center" data-aos="fade-down">
            <h2>Latest Blogs</h2>
            <p>
              Follow the latest and most useful articles on that students blog
            </p>
          </div>

          <OwlCarousel
            {...settings}
            className="owl-carousel mentoring-course owl-theme aos"
            data-aos="fade-up"
            loop
            margin={10}
            nav
          >
            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg1} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}

            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg2} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}

            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg3} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}

            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg1} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}

            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg2} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}

            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg3} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}

            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg1} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <span className="me-2">
                        <i className="fa-solid fa-calendar-days"></i>
                      </span>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}

            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg2} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}

            {/* Carousel Item */}
            {/* Carousel Item */}
            <div className="blog-five-item">
              <div className="product-img-five">
                <Link to="/blog-details">
                  <img className="img-fluid" alt="" src={BlogImg3} />
                </Link>
              </div>
              <div className="blog-box-content">
                <div className="blog-five-header d-flex align-items-center justify-content-between">
                  <div className="blog-five-text">
                    <p>Graphical Design</p>
                  </div>
                  <div className="blog-five-year">
                    <span className="me-2">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Jun 15, 2024</span>
                  </div>
                </div>
                <div className="blog-five-footer">
                  <h3>
                    <Link to="/blog-details">
                      11 Tips to Help You Get New Student & Teachers 2.0
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* Carousel Item */}
          </OwlCarousel>
        </div>
      </section>
      {/* Latest Blogs */}

      {/* footer */}

      <Footer4 />
      {/* footer */}
    </>
  );
};
