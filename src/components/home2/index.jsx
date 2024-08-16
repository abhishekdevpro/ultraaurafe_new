import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Footer2 } from "../footer2";
import Header2 from "../header2/index-two";
import { useSelector } from "react-redux";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Blog1,
  Blog2,
  Blog3,
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Category7,
  Category8,
  CountFour,
  CountOne,
  CountThree,
  CountTwo,
  Courses1,
  Courses2,
  Courses3,
  Courses4,
  Courses5,
  Courses6,
  HomeMain,
  HomeRightBottom,
  Instructor01,
  Instructor02,
  Instructor03,
  Instructor04,
  Joing01,
  Joing02,
  Joing03,
  Joing04,
  MapUser,
  Pattern1,
  shape1,
  shape2,
  shape3,
  shape4,
  Skill01,
  Skill02,
  Skill03,
  Skill04,
  Skill1,
  Skills01,
  Skills02,
  Skills03,
  SkillsIcon01,
  SkillsIcon02,
  SkillsIcon03,
} from "../imagepath";
import { LeadingCompanies } from "./slider/leadingCompanies";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const options = [
  { label: "Select Category", value: "Category" },
  { label: "Category One", value: "Category1" },
  { label: "Category Two", value: "Category2" },
];

export const Home2 = () => {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  useEffect(() => {
    document.body.className = "home-two";

    return () => {
      document.body.className = "";
    };
  }, []);

  // Select Option
  const [setValue] = useState(null);
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor:mobileSidebar === 'disabled' ? "white":"#2b2838",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      marginTop:"1px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      // borderRadius: "50px" ,
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "2px" }),
    option: (provided) => ({
      ...provided,
      backgroundColor:  mobileSidebar === 'disabled' ? "#fff" : "#000",
      color:mobileSidebar === 'disabled'? '#000':'#fff',
      fontSize: "14px",
      "&:hover": {
        backgroundColor:mobileSidebar === 'disabled'? "#FFDEDA":"#2b2838",
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

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <Header2 />
        {/* Home banner */}
        <section
          className="home-two-slide d-flex align-items-center"
          style={{ backgroundImage: mobileSidebar === 'disabled' && "url(" + HomeMain + ")" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 col-12" data-aos="fade-up">
                <div className="home-slide-face">
                  <div className="home-slide-text ">
                    <h5>The Leader in Online Learning</h5>
                    <h1>Engaging & Accessible Online Courses For All</h1>
                  </div>
                  <div className="banner-content">
                    <form
                      className="form"
                      name="store"
                      id="store"
                      method="post"
                      action="course-list"
                    >
                      <div className="form-inner">
                        <div className="input-group">
                          <span className="drop-detail">
                            <Select
                              options={options}
                              value={options.value}
                              defaultValue={options[0]}
                              placeholder="Select Category"
                              onChange={setValue}
                              styles={style}
                            ></Select>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Search School, Online eductional centers, etc"
                          />
                          <button
                            className="btn sub-btn"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="trust-user-two">
                    <p>Trusted by over 15K Users worldwide since 2024</p>
                    <div className="rating-two">
                      <span>4.4</span>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Shapes  */}
            <div className="shapes">
              <img className="shapes-one" src={shape1} alt="" />
              <img className="shapes-two" src={shape2} alt="" />
              <img className="shapes-middle" src={shape3} alt="" />
              <img
                className="shapes-four wow animate__animated animate__slideInLeft"
                src={shape4}
                alt=""
              />
            </div>
            {/* Shapes */}
          </div>
        </section>
        {/* Home banner */}

        {/* About */}
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 wow fadeInLeft order-lg-1 order-xs-2 order-sm-2"
                data-aos="fade-up"
              >
                <div className="header-two-title">
                  <p className="tagline">Learn with DreamLMS</p>
                  <h2 className="mb-0">
                    Get Trained By Experts & Professionals around the World
                  </h2>
                </div>
                <div className="header-two-title">
                  <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quam dolor fermentum massa viverra congue proin. A volutpat
                    eget ultrices velit nunc orci. Commodo quis integer a felis
                    ac vel mauris a morbi. Scelerisque nunc accumsan elementum
                    aenean nisl lacinia. Congue enim aliquet ac vitae turpis.
                    Neque, bibendum imperdiet sed ullamcorper morbi amet.
                    Facilisi odio amet, nunc quam ut nulla purus adipiscing
                    pharetra.
                  </p>
                  <div className="about-button more-details">
                    <Link to="/course-list" className="discover-btn">
                      Learn more <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-lg-2 order-xs-1 order-sm-1">
                <div className="stylist-gallery">
                  <div className="row">
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12"
                      data-aos="fade-down"
                    >
                      <div className="about-image count-one d-flex align-items-center justify-content-center flex-fill project-details">
                        <div className="about-count">
                          <div className="course-img">
                            <img src={CountOne} alt="" />
                          </div>
                          <div className="count-content-three course-count ms-0">
                            <h4>
                            <span className="d-flex"> 
                            <CountUp start={0} end={10} delay={1} duration={4}/>K
                         </span>
                            </h4>
                            <p className="mb-0">Online Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12"
                      data-aos="fade-down"
                    >
                      <div className="about-image count-two d-flex align-items-center justify-content-center flex-fill project-details">
                        <div className="about-count">
                          <div className="course-img">
                            <img src={CountTwo} alt="" />
                          </div>
                          <div className="count-content-three course-count ms-0">
                            <h4>
                            <span className="d-flex"> 
                            <CountUp start={0} end={215} delay={1}/>+
+
                         </span>
                            </h4>
                            <p className="mb-0">Expert Tutors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12"
                      data-aos="fade-right"
                      data-wow-delay="1.5"
                    >
                      <div className="about-image count-three d-flex align-items-center justify-content-center flex-fill project-details">
                        <div className="about-count">
                          <div className="course-img">
                            <img src={CountThree} alt="" />
                          </div>
                          <div className="count-content-three course-count ms-0">
                            <h4>
                            <span className="d-flex"> 
                           <CountUp start={0} end={10} delay={1} duration={4}/>K
                         </span>
                            </h4>
                            <p className="mb-0">Ceritified Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12"
                      data-aos="fade-left"
                      data-wow-delay="0.5"
                    >
                      <div className="about-image count-four d-flex align-items-center justify-content-center flex-fill project-details">
                        <div className="about-count">
                          <div className="course-img">
                            <img src={CountFour} alt="" />
                          </div>
                          <div className="count-content-three course-count ms-0">
                            <h4>
                            <span className="d-flex"> 
                            <CountUp start={0} end={10} delay={1} duration={4}/>K
                         </span>
                            </h4>
                            <p className="mb-0">Online Students</p>
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
        {/* About */}

        {/* Favorite Course */}
        <section className="topcategory-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">Favourite Course</p>
              <h2>Top Category</h2>
              <div className="header-two-text">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            <div className="top-category-group">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img src={Category1} alt="Angular Development" />
                    </div>
                    <div className="categories-content">
                      <h3>Angular Development</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img src={Category2} alt="Python Development" />
                    </div>
                    <div className="categories-content">
                      <h3>Python Development</h3>
                      <p>20 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img
                        className="category3"
                        src={Category3}
                        alt="Node Js Development"
                      />
                    </div>
                    <div className="categories-content">
                      <h3>Node Js Development</h3>
                      <p>120 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img src={Category4} alt="PHP Development" />
                    </div>
                    <div className="categories-content">
                      <h3>PHP Development</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item flex-fill">
                    <div className="categories-icon">
                      <img src={Category5} alt="Docker Development" />
                    </div>
                    <div className="categories-content">
                      <h3>Docker Development</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item  flex-fill">
                    <div className="categories-icon">
                      <img src={Category6} alt="Swift Development" />
                    </div>
                    <div className="categories-content">
                      <h3>Swift Development</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="categories-item  flex-fill">
                    <div className="categories-icon">
                      <img src={Category7} alt="Photography" />
                    </div>
                    <div className="categories-content">
                      <h3>Photography</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex">
                  <div
                    className="categories-item  flex-fill"
                    data-aos="fade-up"
                  >
                    <div className="categories-icon">
                      <img src={Category8} alt="Business" />
                    </div>
                    <div className="categories-content">
                      <h3>Business</h3>
                      <p>40 Instructors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* View All */}
            <div className="col-lg-12">
              <div className="more-details text-center" data-aos="fade-down">
                <Link to="/job-category" className="discover-btn">
                  View all Category <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* View All */}
          </div>
        </section>
        {/* Favorite Course */}

        {/* Feature Course */}

        <section className="featured-courses-sec">
          <div className="patter-one-main">
            <img className="patter-one" src={Pattern1} alt="" />
          </div>
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">What’s New</p>
              <h2>Featured Courses</h2>
              <div className="header-two-text m-auto text-center d-block">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            <div className="featured-courses-two">
              <div className="row">
                {/*Featured Courses  */}
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="featured-details-two">
                    <div className="product-item-two">
                      <div className="product-img-two">
                        <Link to="/course-details">
                          <img className="img-fluid" alt="" src={Courses1} />
                        </Link>
                        <div className="price-text">
                          <h4>
                            <span>PHP</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-details-content">
                        <div className="image-info">
                          <img className="img-fluid" alt="" src={Avatar1} />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="ms-3">203 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              The Complete Web Developer PHP framework Course
                              2.0
                            </Link>
                          </h3>
                          <p className="me-3">
                            By
                            <span className="text-danger ms-2">
                              Russell T. Johnson
                            </span>
                          </p>
                        </div>

                        <div className="featured-info-time d-flex align-items-center">
                          <div className="hours-time-two d-flex align-items-center">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <p>6hr 30min</p>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price">
                              <h3>
                                $400 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Featured Courses  */}

                {/*Featured Courses  */}
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="featured-details-two">
                    <div className="product-item-two">
                      <div className="product-img-two">
                        <Link to="/course-details">
                          <img className="img-fluid" alt="" src={Courses2} />
                        </Link>
                        <div className="price-text">
                          <h4>
                            <span>Wordpress</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-details-content">
                        <div className="image-info">
                          <img className="img-fluid" alt="" src={Avatar2} />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              Wordpress for Beginners - Master Wordpress Quickly
                            </Link>
                          </h3>
                          <p className="me-3">
                            By
                            <span className="text-danger ms-2">
                              Cristofer Nolen
                            </span>
                          </p>
                        </div>

                        <div className="featured-info-time d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <span>6hr 30min</span>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price">
                              <h3>
                                $300 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Featured Courses  */}

                {/*Featured Courses  */}
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="featured-details-two">
                    <div className="product-item-two">
                      <div className="product-img-two">
                        <Link to="/course-details">
                          <img className="img-fluid" alt="" src={Courses3} />
                        </Link>
                        <div className="price-text">
                          <h4>
                            <span>Angular</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-details-content">
                        <div className="image-info">
                          <img className="img-fluid" alt="" src={Avatar3} />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              Learn Angular Fundamentals From beginning to
                              advance lavel
                            </Link>
                          </h3>
                          <p className="me-3">
                            By
                            <span className="text-danger ms-2">
                              Cristofer Nolen
                            </span>
                          </p>
                        </div>

                        <div className="featured-info-time d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <span>6hr 30min</span>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price">
                              <h3>
                                $300 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Featured Courses  */}

                {/*Featured Courses  */}
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="featured-details-two">
                    <div className="product-item-two">
                      <div className="product-img-two">
                        <Link to="/course-details">
                          <img className="img-fluid" alt="" src={Courses4} />
                        </Link>
                        <div className="price-text">
                          <h4>
                            <span>HTML5</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-details-content">
                        <div className="image-info">
                          <img className="img-fluid" alt="" src={Avatar4} />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              Build Responsive Real World Websites with HTML5
                              and CSS3
                            </Link>
                          </h3>
                          <p className="me-3">
                            By
                            <span className="text-danger ms-2">
                              Cristofer Nolen
                            </span>
                          </p>
                        </div>

                        <div className="featured-info-time d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <span>6hr 30min</span>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price">
                              <h3>
                                $300 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Featured Courses  */}

                {/*Featured Courses  */}
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="featured-details-two">
                    <div className="product-item-two">
                      <div className="product-img-two">
                        <Link to="/course-details">
                          <img className="img-fluid" alt="" src={Courses5} />
                        </Link>
                        <div className="price-text">
                          <h4>
                            <span>C#</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-details-content">
                        <div className="image-info">
                          <img className="img-fluid" alt="" src={Avatar5} />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              C# Developers Double Your Coding Speed with Visual
                              Studio
                            </Link>
                          </h3>
                          <p className="me-3">
                            By
                            <span className="text-danger ms-2">
                              Cristofer Nolen
                            </span>
                          </p>
                        </div>

                        <div className="featured-info-time d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <span>6hr 30min</span>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price">
                              <h3>
                                $300 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Featured Courses  */}

                {/*Featured Courses  */}

                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="featured-details-two">
                    <div className="product-item-two">
                      <div className="product-img-two">
                        <Link to="/course-details">
                          <img className="img-fluid" alt="" src={Courses6} />
                        </Link>
                        <div className="price-text">
                          <h4>
                            <span>UI/UX</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-details-content">
                        <div className="image-info">
                          <img className="img-fluid" alt="" src={Avatar6} />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              Information About UI/UX Design Degree
                            </Link>
                          </h3>
                          <p className="me-3">
                            By
                            <span className="text-danger ms-2">
                              Cristofer Nolen
                            </span>
                          </p>
                        </div>

                        <div className="featured-info-time d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <span>6hr 30min</span>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price">
                              <h3>
                                $300 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Featured Courses  */}
              </div>
            </div>
            {/* View All Courses */}
            <div className="col-lg-12" data-aos="fade-up">
              <div className="more-details text-center">
                <Link to="/course-details" className="discover-btn">
                  View all Courses <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* View All Courses */}
          </div>
        </section>
        {/* Feature Course */}

        {/* Grow up your skill section */}
        <section className="growup-section">
          <div className="home-two-shapes">
            <img src={HomeRightBottom} alt="" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-5 col-12"
                data-aos="fade-right"
              >
                <div className="growup-images-two">
                  <div className="growup-skills-img">
                    <img
                      className=""
                      src={Skill1}
                      alt="image-banner"
                      title="image-banner"
                    />
                  </div>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-7 col-12 wow fadeInLeft"
                data-aos="fade-left"
              >
                <div className="header-two-title">
                  <p className="tagline">Growup Your Skill</p>
                  <h2 className="text-navy">Learn Anything you want today</h2>
                  <div className="header-two-text">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quam dolor fermentum massa viverra congue proin. A
                      volutpat eget ultrices velit nunc orci. Commodo quis
                      integer a felis ac vel mauris a morbi. Scelerisque nunc
                      accumsan elementum aenean nisl lacinia. Congue enim
                      aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                      ullamcorper morbi amet. Facilisi odio amet, nunc quam ut
                      nulla purus adipiscing pharetra.
                    </p>
                  </div>
                </div>
                <div className="about-button more-details">
                  <Link to="/register" className="discover-btn">
                    Join Today <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Grow up your skill section */}

        {/* Master Skills */}
        <section className="master-skills-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">What’s New</p>
              <h2>Master the skills to drive your career</h2>
              <div className="header-two-text" data-aos="fade-up">
                <p className="mb-0">
                  Get certified, master modern tech skills, and level up your
                  career — whether you’re starting out or a seasoned pro. 95% of
                  eLearning learners report our hands-on content directly helped
                  their careers.
                </p>
              </div>
            </div>
            {/* Course Info */}
            <div className="course-info-two">
              <div className="row align-items-center">
                {/* Master Skills Content */}
                <div
                  className="col-lg-6 col-md-12 order-lg-0 order-md-0 order-0"
                  data-aos="fade-up"
                >
                  <div className="join-title-one">
                    <h2>Award Winning Course Management</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quam dolor fermentum massa viverra congue proin. A
                      volutpat eget ultrices velit nunc orci. Commodo quis
                      integer a felis ac vel mauris a morbi. Scelerisque nunc
                      accumsan elementum aenean nisl lacinia. Congue enim
                      aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                      ullamcorper morbi amet. Facilisi odio amet, nunc quam ut
                      nulla purus adipiscing pharetra.
                    </p>
                  </div>
                </div>
                {/* Master Skills Content */}

                {/* Master Skills Image */}
                <div
                  className="col-lg-6 col-md-12 order-lg-1 order-md-1 order-1"
                  data-aos="fade-up"
                >
                  <div className="join-mentor-img">
                    <div className="winning-two-one">
                      <img src={Skills01} alt="" className="img-fluid" />
                    </div>
                    <div className="joing-icon-award">
                      <img
                        src={SkillsIcon01}
                        alt=""
                        className="joing-icon-one img-fluid"
                      />
                    </div>
                  </div>
                </div>
                {/* Master Skills Image */}

                {/* Master Skills Content */}
                <div
                  className="col-xl-6 col-lg-7 col-md-12 order-lg-2 order-md-3 order-3 joinPos"
                  data-aos="fade-up"
                >
                  <div className="join-mentor-img">
                    <div className="winning-two-two">
                      <img src={Skills02} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="joing-icon-award">
                    <img
                      src={SkillsIcon02}
                      alt=""
                      className="joing-icon-two img-fluid"
                    />
                  </div>
                </div>
                {/* Master Skills Content */}

                {/* Master Skills Image */}
                <div
                  className="col-xl-6 col-lg-5 col-md-12 order-lg-3 order-md-2 order-2"
                  data-aos="fade-up"
                >
                  <div className="join-title-middle">
                    <h2>Award Winning Course Management</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quam dolor fermentum massa viverra congue proin. A
                      volutpat eget ultrices velit nunc orci. Commodo quis
                      integer a felis ac vel mauris a morbi. Scelerisque nunc
                      accumsan elementum aenean nisl lacinia. Congue enim
                      aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                      ullamcorper morbi amet. Facilisi odio amet, nunc quam ut
                      nulla purus adipiscing pharetra.
                    </p>
                  </div>
                </div>
                {/* Master Skills Image */}

                {/* Master Skills Content */}
                <div
                  className="col-xl-6 col-lg-7 col-md-12 order-lg-4 order-md-4 order-4"
                  data-aos="fade-up"
                >
                  <div className="join-title-one">
                    <h2>Certification for solid development of your Carrer</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quam dolor fermentum massa viverra congue proin. A
                      volutpat eget ultrices velit nunc orci. Commodo quis
                      integer a felis ac vel mauris a morbi. Scelerisque nunc
                      accumsan elementum aenean nisl lacinia. Congue enim
                      aliquet ac vitae turpis. Neque, bibendum imperdiet sed
                      ullamcorper morbi amet. Facilisi odio amet, nunc quam ut
                      nulla purus adipiscing pharetra.
                    </p>
                  </div>
                </div>
                {/* Master Skills Content */}

                {/* Master Skills Image */}
                <div
                  className="col-xl-6 col-lg-5 col-md-12 order-lg-5 order-md-5 order-5 joinPos"
                  data-aos="fade-up"
                >
                  <div className="join-mentor-img mb-0">
                    <div className="winning-two-three">
                      <img src={Skills03} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="joing-icon-award">
                    <img
                      src={SkillsIcon03}
                      alt=""
                      className="joing-icon-three img-fluid"
                    />
                  </div>
                </div>
                {/* Master Skills Image */}
              </div>
            </div>
            {/* Course Info */}
          </div>
        </section>
        {/* Master Skills */}

        {/* Testimonials */}
        <section className="testimonial-sec">
          <div className="container">
            <div className="testimonial-two-img">
              <img src={MapUser} alt="" className="img-fluid" />
            </div>
            <div className="testimonial-subhead-two">
              <div
                className="col-xl-8 col-lg-10 col-md-10 mx-auto"
                data-aos="fade-down"
              >
                <div className="testimonial-inner">
                  <div className="header-two-title testimonial-head-two text-center">
                    <h2 data-aos="fade-down">
                      Join over <span>5 Million</span> Students
                    </h2>
                    <div className="header-two-text text-center">
                      <p>
                        Get certified, master modern tech skills, and level up
                        your career — whether you’re starting out or a seasoned
                        pro. 95% of eLearning learners report our hands-on
                        content directly helped their careers.
                      </p>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-md-4 col-sm-12" data-aos="fade-up">
                      <div className="course-count-two course-count">
                        <h4>
                          <span className="counterUp text-orange"><CountUp start={0} end={253085} delay={0}/></span>
                        </h4>
                        <h5>Students Enrolled</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12" data-aos="fade-up">
                      <div className="course-count-two  course-count">
                        <h4>
                          <span className="counterUp text-green"> <CountUp start={0} end={1205} delay={0.2} duration={2}/></span>
                        </h4>
                        <h5>Total Courses</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12" data-aos="fade-up">
                      <div className="course-count-two  course-count">
                        <h4>
                          <span className="counterUp text-blue"><CountUp start={0} end={253085} delay={0}/></span>
                        </h4>
                        <h5>Students Worldwide</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}

        {/* Trending Course */}
        <section className="trending-course-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">New Courses</p>
              <h2>Trending Courses</h2>
              <div className="header-two-text m-auto text-center d-block">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            {/* Trending Course Group */}

            <div className="trending-course-main">
              <div className="row">
                <div
                  className="col-xl-6 col-lg-12 col-md-12"
                  data-aos="fade-down"
                >
                  <div className="trending-courses-group">
                    <div className="trending-courses-two">
                      <div className="product-img course-column-img">
                        <Link to="/instructor/instructor-profile">
                          <img className="img-fluid" alt="" src={Skill01} />
                        </Link>
                        <div className="trending-price">
                          <h4>
                            <span>Node Js</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-content-column">
                        <div className="trending-two-rating align-items-center">
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              Wordpress for Beginners - Master Wordpress Quickly
                            </Link>
                          </h3>
                          <div className="time-hours-two">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <p>6hr 30min</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="rating-price-two d-flex align-items-center">
                            <p>Cristofer Nolen</p>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price-two">
                              <h3>$300</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-6 col-lg-12 col-md-12"
                  data-aos="fade-down"
                >
                  <div className="trending-courses-group">
                    <div className="trending-courses-two">
                      <div className="product-img course-column-img">
                        <Link to="/instructor/instructor-profile">
                          <img className="img-fluid" alt="" src={Skill02} />
                        </Link>
                        <div className="trending-price">
                          <h4>
                            <span>C#</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-content-column">
                        <div className="trending-two-rating align-items-center">
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              C# Developers Double Your Coding Speed with Visual
                              Studio
                            </Link>
                          </h3>
                          <div className="time-hours-two">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <p>6hr 30min</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="rating-price-two d-flex align-items-center">
                            <p>Cristofer Nolen</p>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price-two">
                              <h3>$300</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-6 col-lg-12 col-md-12"
                  data-aos="fade-down"
                >
                  <div className="trending-courses-group">
                    <div className="trending-courses-two">
                      <div className="product-img course-column-img">
                        <Link to="/instructor/instructor-profile">
                          <img className="img-fluid" alt="" src={Skill03} />
                        </Link>
                        <div className="trending-price">
                          <h4>
                            <span>Angular</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-content-column">
                        <div className="trending-two-rating align-items-center">
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              Learn Angular Fundamentals From beginning to
                              advance lavel
                            </Link>
                          </h3>
                          <div className="time-hours-two">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <p>6hr 30min</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="rating-price-two d-flex align-items-center">
                            <p>Cristofer Nolen</p>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price-two">
                              <h3>$300</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-6 col-lg-12 col-md-12"
                  data-aos="fade-down"
                >
                  <div className="trending-courses-group">
                    <div className="trending-courses-two">
                      <div className="product-img course-column-img">
                        <Link to="/instructor/instructor-profile">
                          <img className="img-fluid" alt="" src={Skill04} />
                        </Link>
                        <div className="trending-price">
                          <h4>
                            <span>HTML5</span>
                          </h4>
                        </div>
                      </div>
                      <div className="course-content-column">
                        <div className="trending-two-rating align-items-center">
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <i className="fas fa-star filled me-1"></i>
                          <span className="ms-2">243 reviews</span>
                        </div>

                        <div className="name-text featured-info-two">
                          <h3 className="title instructor-text">
                            <Link to="/course-details">
                              Build Responsive Real World Websites with HTML5
                              and CSS3
                            </Link>
                          </h3>
                          <div className="time-hours-two">
                            <span>
                              <i className="fa-regular fa-clock me-2"></i>
                            </span>
                            <p>6hr 30min</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="rating-price-two d-flex align-items-center">
                            <p>Cristofer Nolen</p>
                          </div>
                          <div className="course-view d-inline-flex align-items-center">
                            <div className="course-price-two">
                              <h3>$300</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Trending Course Group */}

            {/* View all  Courses */}
            <div className="col-lg-12" data-aos="fade-up">
              <div className="more-details text-center">
                <Link to="/course-details" className="discover-btn">
                  View all Courses <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* View all  Courses */}
          </div>
        </section>
        {/* Trending Course */}

        {/* Share Knowledge */}
        <div className="knowledge-sec">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12 ps-0">
                <div
                  className="featured-img-1"
                ></div>
              </div>
              <div className="col-lg-6 col-sm-12" data-aos="fade-up">
                <div className="joing-group">
                  <div className="section-title">
                    <h2>Want to share your knowledge? Join us a Mentor</h2>
                    <div className="joing-section-text">
                      <p className="mb-0">
                        High-definition video is video of higher resolution and
                        quality than standard-definition. While there is no
                        standardized meaning for high-definition, generally any
                        video.
                      </p>
                    </div>
                  </div>
                  <div className="joing-list">
                    <ul>
                      <li data-aos="fade-bottom">
                        <div className="joing-header">
                          <span className="joing-icon bg-blue">
                            <img src={Joing01} alt="" className="img-fluid" />
                          </span>
                          <div className="joing-content">
                            <h5 className="joing-title">
                              Stay motivated with engaging instructors
                            </h5>
                            <div className="joing-para">
                              <p>
                                High-definition video is video of higher
                                resolution and quality than standard-definition.
                              </p>
                              <p>
                                While there is no standardized meaning for
                                high-definition, generally any video.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-bottom">
                        <div className="joing-header">
                          <span className="joing-icon bg-yellow">
                            <img src={Joing02} alt="" className="img-fluid" />
                          </span>
                          <div className="joing-content">
                            <h5 className="joing-title">
                              Keep up with in the latest in cloud
                            </h5>
                            <div className="joing-para">
                              <p>
                                High-definition video is video of higher
                                resolution and quality than standard-definition.
                              </p>
                              <p>
                                While there is no standardized meaning for
                                high-definition, generally any video.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-bottom">
                        <div className="joing-header">
                          <span className="joing-icon bg-green">
                            <img src={Joing03} alt="" className="img-fluid" />
                          </span>
                          <div className="joing-content aos">
                            <h5 className="joing-title">
                              Build skills your way, from labs to courses
                            </h5>
                            <div className="joing-para">
                              <p>
                                High-definition video is video of higher
                                resolution and quality than standard-definition.
                              </p>
                              <p>
                                While there is no standardized meaning for
                                high-definition, generally any video.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-bottom" className="mb-0">
                        <div className="joing-header">
                          <span className="joing-icon bg-orange">
                            <img src={Joing04} alt="" className="img-fluid" />
                          </span>
                          <div className="joing-content aos">
                            <h5 className="joing-title">
                              Get certified with 100+ certification courses
                            </h5>
                            <div className="joing-para">
                              <p>
                                High-definition video is video of higher
                                resolution and quality than standard-definition.
                              </p>
                              <p>
                                While there is no standardized meaning for
                                high-definition, generally any video.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Share Knowledge */}

        {/* Feature Instructors */}
        <div className="feature-instructors-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">New Courses</p>
              <h2>Featured Instructor</h2>
              <div className="header-two-text aos" data-aos="fade-up">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            {/* Featured Instructor */}
            <div className="featured-instructor-two">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="instructors-widget">
                    <div className="instructors-img">
                      <Link to="/instructor/instructor-list">
                        <img className="img-fluid" alt="" src={Instructor01} />
                      </Link>
                      <div className="featured-border">
                        <div className="featured-img ">
                          <img src={Category1} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="course-details-two">
                      <div className="instructors-content text-center">
                        <h5>
                          <Link to="/instructor/instructor-profile">
                            Julian Adrose
                          </Link>
                        </h5>
                        <p>Angular Expert</p>
                      </div>
                      <div className="course-info"></div>
                      <div className="student-count d-flex justify-content-center">
                        <i className="fa-solid fa-user-group"></i>
                        <span>50 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="instructors-widget">
                    <div className="instructors-img">
                      <Link to="/instructor/instructor-list">
                        <img className="img-fluid" alt="" src={Instructor02} />
                      </Link>
                      <div className="featured-border">
                        <div className="featured-img ">
                          <img src={Category2} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="course-details-two">
                      <div className="instructors-content text-center">
                        <h5>
                          <Link to="/instructor/instructor-profile">Gallegos</Link>
                        </h5>
                        <p>Docker</p>
                      </div>
                      <div className="course-info"></div>
                      <div className="student-count d-flex justify-content-center">
                        <i className="fa-solid fa-user-group"></i>
                        <span>70 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="instructors-widget">
                    <div className="instructors-img">
                      <Link to="/instructor/instructor-list">
                        <img className="img-fluid" alt="" src={Instructor03} />
                      </Link>
                      <div className="featured-border">
                        <div className="featured-img ">
                          <img src={Category3} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="course-details-two">
                      <div className="instructors-content text-center">
                        <h5>
                          <Link to="/instructor/instructor-profile">Kristi</Link>
                        </h5>
                        <p>Node Js</p>
                      </div>
                      <div className="course-info"></div>
                      <div className="student-count d-flex justify-content-center">
                        <i className="fa-solid fa-user-group"></i>
                        <span>60 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="instructors-widget">
                    <div className="instructors-img">
                      <Link to="/instructor/instructor-list">
                        <img className="img-fluid" alt="" src={Instructor04} />
                      </Link>
                      <div className="featured-border">
                        <div className="featured-img ">
                          <img src={Category4} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="course-details-two">
                      <div className="instructors-content text-center">
                        <h5>
                          <Link to="/instructor/instructor-profile">Pinero</Link>
                        </h5>
                        <p>Python</p>
                      </div>
                      <div className="course-info"></div>
                      <div className="student-count d-flex justify-content-center">
                        <i className="fa-solid fa-user-group"></i>
                        <span>80 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Featured Instructor */}

            {/* /View all Category */}
            <div className="col-lg-12">
              <div className="more-details text-center" data-aos="fade-up">
                <Link
                  to="/instructor/instructor-list"
                  className="discover-btn discover-btn"
                >
                  View all Instructors{" "}
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* /View all Category */}
          </div>
        </div>
        {/* Feature Instructors */}

        {/* Leading Companies */}
        {/* <section className="real-reviews-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">Check out these real reviews</p>
              <h2>Users-love-us Don't take it from us</h2>
              <div className="header-two-text text-center m-auto">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            <div className="real-reviews-group">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 col-md-12 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="reviews-img">
                    <img src={ReviewsImgTwo} alt="" className="img-fluid" />
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 col-md-12"
                  data-aos="fade-up"
                >
                  <div className="owl-carousel real-reviews owl-theme">
                    <div className="item">
                      <div className="real-reviews-grid">
                        <div className="review-content">
                          <h3>Helps us to improve our productivity</h3>
                          <p>
                            High-definition video is video of higher resolution
                            and quality than standard-definition. While there is
                            no standardized meaning for high-definition,
                            generally any video.High-definition video is video
                            of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any
                            video.High-definition video is video of higher
                            resolution and quality than standard-definition.
                            While there is no standardized meaning for
                            high-definition, generally any video.High-definition
                            video is video of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any video.
                          </p>
                        </div>
                        <div className="review-top">
                          <div className="review-info">
                            <h3 data-aos="fade-up">William George</h3>
                            <h5 data-aos="fade-up">CEO & Chairman</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="real-reviews-grid">
                        <div className="review-content">
                          <h3>Helps us to improve our productivity</h3>
                          <p>
                            High-definition video is video of higher resolution
                            and quality than standard-definition. While there is
                            no standardized meaning for high-definition,
                            generally any video.High-definition video is video
                            of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any
                            video.High-definition video is video of higher
                            resolution and quality than standard-definition.
                            While there is no standardized meaning for
                            high-definition, generally any video.High-definition
                            video is video of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any video.
                          </p>
                        </div>
                        <div className="review-top">
                          <div className="review-info">
                            <h3 data-aos="fade-up">Julian Adrose</h3>
                            <h5 data-aos="fade-up">Manager</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="real-reviews-grid">
                        <div className="review-content">
                          <h3>Helps us to improve our productivity</h3>
                          <p>
                            High-definition video is video of higher resolution
                            and quality than standard-definition. While there is
                            no standardized meaning for high-definition,
                            generally any video.High-definition video is video
                            of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any
                            video.High-definition video is video of higher
                            resolution and quality than standard-definition.
                            While there is no standardized meaning for
                            high-definition, generally any video.High-definition
                            video is video of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any video.
                          </p>
                        </div>
                        <div className="review-top">
                          <div className="review-info">
                            <h3>Gallegos</h3>
                            <h5>CEO & MD</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="real-reviews-grid">
                        <div className="review-content">
                          <h3>Helps us to improve our productivity</h3>
                          <p>
                            High-definition video is video of higher resolution
                            and quality than standard-definition. While there is
                            no standardized meaning for high-definition,
                            generally any video.High-definition video is video
                            of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any
                            video.High-definition video is video of higher
                            resolution and quality than standard-definition.
                            While there is no standardized meaning for
                            high-definition, generally any video.High-definition
                            video is video of higher resolution and quality than
                            standard-definition. While there is no standardized
                            meaning for high-definition, generally any video.
                          </p>
                        </div>
                        <div className="review-top">
                          <div className="review-info">
                            <h3>William George</h3>
                            <h5>CEO & Chairman</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                      <div className="owl-nav slide-nav-8 nav-control"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="client-two-carousel">
              <div className="lead-group-slider owl-carousel owl-theme">
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead1} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead2} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead3} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead4} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead5} />
                  </div>
                </div>
                <div className="item">
                  <div className="lead-img">
                    <img className="img-fluid" alt="" src={Lead6} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <LeadingCompanies />
        {/* Leading Companies */}

        {/* Latest Blog */}
        <section className="latest-blog-sec">
          <div className="container">
            <div className="header-two-title text-center" data-aos="fade-up">
              <p className="tagline">News & Events</p>
              <h2>Our Latest Updates</h2>
              <div
                className="header-two-text text-center aos"
                data-aos="fade-up"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            <div className="award-winning-two">
              <div className="row justify-content-center">
                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-down"
                >
                  <div className="event-blog-main">
                    <div className="latest-blog-img">
                      <Link to="/blog-list">
                        <img className="img-fluid" alt="" src={Blog1} />
                      </Link>
                    </div>
                    <div className="latest-blog-content">
                      <div className="event-content-title">
                        <div className="event-span">
                          <span className="span-name">Marketing</span>
                        </div>
                        <h5>
                          <Link to="/blog-list">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </Link>
                        </h5>
                        <div className="blog-student-count">
                          <i className="fa-solid fa-calendar-days"></i>
                          <span>Jun 15, 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-down"
                >
                  <div className="event-blog-main">
                    <div className="latest-blog-img">
                      <Link to="/blog-list">
                        <img className="img-fluid" alt="" src={Blog2} />
                      </Link>
                    </div>
                    <div className="latest-blog-content">
                      <div className="event-content-title">
                        <div className="event-span">
                          <span className="span-name">Sales</span>
                        </div>
                        <h5>
                          <Link to="/blog-list">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </Link>
                        </h5>
                        <div className="blog-student-count">
                          <i className="fa-solid fa-calendar-days"></i>
                          <span>Jun 15, 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-down"
                >
                  <div className="event-blog-main">
                    <div className="latest-blog-img">
                      <Link to="/blog-list">
                        <img className="img-fluid" alt="" src={Blog3} />
                      </Link>
                    </div>
                    <div className="latest-blog-content">
                      <div className="event-content-title">
                        <div className="event-span">
                          <span className="span-name">Marketing</span>
                        </div>
                        <h5>
                          <Link to="/blog-list">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </Link>
                        </h5>
                        <div className="blog-student-count">
                          <i className="fa-solid fa-calendar-days"></i>
                          <span>Jun 15, 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /View all  Events */}
            <div className="col-lg-12">
              <div className="more-details text-center" data-aos="fade-down">
                <Link to="/blog-grid" className="discover-btn">
                  View all Events<i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            {/* /View all  Events */}
          </div>
        </section>
        {/* Latest Blog */}

        {/* Footer */}
        <Footer2 />
        {/* Footer */}
      </div>
    </>
  );
};
