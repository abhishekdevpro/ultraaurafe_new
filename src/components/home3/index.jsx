import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer3 } from "../footer3";
import { Header3 } from "../header3";
import Companies from "../home/slider/companies";
import { useSelector } from "react-redux";
import {
  Award01,
  AwardSvg,
  Blog20,
  Blog21,
  Blog22,
  Blog23,
  Blog24,
  Career,
  Career01,
  Career02,
  Career03,
  Career04,
  Certification,
  CheckRound1,
  CheckRound2,
  CheckRound3,
  Course01Icon,
  Course02Icon,
  Course03Icon,
  Course04Icon,
  Course20,
  Course21,
  Course22,
  Course23,
  Course24,
  Course25,
  Course26,
  Course27,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  HomeMain,
  HomeSlider,
  LearnAnything,
  Pattern01,
  Pattern02,
  Pattern03,
  Pattern04,
  PatternSvg5,
  PatternSvg6,
  Shape01,
  Shape02,
  StudentIcon,
  Time,
  User1,
  User2,
  User3,
  User4,
  User5,
  User6,
  User7,
  User8,
  Winning,
} from "../imagepath";
import { TopCategories2 } from "./slider/topCategories";
import { Trending3 } from "./slider/trendingCourse";
import { Testimonial3 } from "./slider/testimonial";
import Select from "react-select";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const options = [
  { label: "Select category", value: "category" },
  { label: "Angular", value: "Angular" },
  { label: "Node Js", value: "Node Js" },
  { label: "React", value: "React" },
  { label: "Python", value: "Python" },
];

export const Home3 = () => {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [setValue] = useState(null);
  useEffect(() => {
    document.body.className = "home-three";

    return () => {
      document.body.className = "";
    };
  }, []);
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor:mobileSidebar === 'disabled' ? "#f7f7f7f7":"#2b2838",
      width: "100%",
      height: "56px",
      minHeight: "56px",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      // borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      outline: "none",
    }),
    menu: (base) => ({
      ...base,
      marginTop: "0px",
      borderRadius: "0",
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
        backgroundColor:mobileSidebar === 'disabled'? "#FFDEDA":"#2b2838",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 6px",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };

  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
    console.log(id);
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // function Number({ n }) {
  //   const { number } = useSpring({
  //     from: { number: 0 },
  //     number: n,
  //     delay: 200,
  //     config: { mass: 1, tension: 20, friction: 10 },
  //   });
  //   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  // }

  return (
    <>
      <Header3 />
      {/* Home Banner */}
      <section
        className="home-three-slide d-flex align-items-center"
        style={{ backgroundImage: mobileSidebar === 'disabled' && "url(" + HomeMain + ")" }}
      >
        <div className="container">
          <div className="row ">
            <div
              className="col-xl-6 col-lg-8 col-md-12 col-12"
              data-aos="fade-down"
            >
              <div className="home-three-slide-face">
                <div className="home-three-slide-text">
                  <h5>The Leader in Online Learning</h5>
                  <h1>
                    Engaging <span>&</span> Accessible Online Courses For All
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget aenean accumsan bibendum gravida maecenas augue
                    elementum et
                  </p>
                </div>
                <div className="banner-three-content">
                  <form className="form" action="course-list">
                    <div className="form-inner-three">
                      <div
                        className="input-group"
                        // style={{ backgroundImage: `url(${})` }}
                      >
                        {/* <img className="buildingSvg" src={BuildingSvg} alt="" /> */}
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Search School, Online eductional centers, etc"
                        />
                        <span className="drop-detail-three">
                          <Select
                            options={options}
                            value={options.value}
                            defaultValue={options[0]}
                            placeholder="Category"
                            onChange={setValue}
                            styles={style}
                          ></Select>
                        </span>
                        <button
                          className="btn btn-three-primary sub-btn"
                          type="submit"
                        >
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
            >
              <div className="girl-slide-img aos">
                <img className="img-fluid" src={HomeSlider} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Banner */}
      {/* Online Courses */}
      <section className="section student-course home-three-course">
        <div className="container">
          <div className="course-widget-three">
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course01Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-blue">
                          <span className="d-flex">
                            <CountUp
                              start={0}
                              end={10}
                              delay={1}
                              duration={4}
                            />
                            K
                          </span>
                        </h4>
                        <p>Online Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course02Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-yellow">
                          <span className="d-flex">
                            <CountUp start={0} end={200} delay={1} />+
                          </span>
                        </h4>
                        <p>Expert Tutors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course03Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-info">
                          <span className="d-flex">
                            <CountUp start={0} end={6} delay={1} duration={5} />
                            K+
                          </span>
                        </h4>
                        <p>Ceritified Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three mb-0">
                  <div className="align-items-center">
                    <div className="course-count-three">
                      <div className="course-img">
                        <img className="img-fluid" src={Course04Icon} alt="" />
                      </div>
                      <div className="course-content-three course-count ms-0">
                        <h4 className="text-green">
                          <span className="d-flex">
                            <CountUp start={0} end={6} delay={1} duration={2} />
                            K +
                          </span>
                        </h4>
                        <p>Online Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Online Courses */}

      {/* Master Skills Career */}
      <section className="master-skill-three">
        <div className="master-three-vector">
          <img className="ellipse-right img-fluid" src={Pattern01} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-right">
              <div className="master-three-images">
                <div className="master-three-left">
                  <img
                    className="img-fluid"
                    src={Career}
                    alt="image-banner"
                    title="image-banner"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-left">
              <div className="home-three-head" data-aos="fade-up">
                <h2>Master the skills to drive your career</h2>
              </div>
              <div className="home-three-content" data-aos="fade-up">
                <p>
                  Get certified, master modern tech skills, and level up your
                  career whether you’re starting out or a seasoned pro. 95% of
                  eLearning learners report our hands-on content directly helped
                  their careers.
                </p>
              </div>
              <div className="skils-group">
                <div className="row">
                  <div
                    className="col-lg-6 col-xs-12 col-sm-6"
                    data-aos="fade-down"
                  >
                    <div className="skils-icon-item">
                      <div className="skils-icon">
                        <img
                          className="img-fluid"
                          src={Career01}
                          alt="certified"
                        />
                      </div>
                      <div className="skils-content">
                        <p className="mb-0">
                          Get certified with 100+ certification courses
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-xs-12 col-sm-6"
                    data-aos="fade-up"
                  >
                    <div className="skils-icon-item">
                      <div className="skils-icon">
                        <img
                          className="img-fluid"
                          src={Career02}
                          alt="Build skills"
                        />
                      </div>
                      <div className="skils-content">
                        <p className="mb-0">
                          Build skills your way, from labs to courses
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-xs-12 col-sm-6"
                    data-aos="fade-right"
                  >
                    <div className="skils-icon-item">
                      <div className="skils-icon">
                        <img
                          className="img-fluid"
                          src={Career03}
                          alt="Stay Motivated"
                        />
                      </div>
                      <div className="skils-content">
                        <p className="mb-0">
                          Stay motivated with engaging instructors
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-xs-12 col-sm-6"
                    data-aos="fade-left"
                  >
                    <div className="skils-icon-item">
                      <div className="skils-icon">
                        <img
                          className="img-fluid"
                          src={Career04}
                          alt="latest cloud"
                        />
                      </div>
                      <div className="skils-content">
                        <p className="mb-0">Keep up with the latest in cloud</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Master Skills Career */}

      {/* Favorite Course */}
      <section className="home-three-favourite">
        <div className="container">
          <div className="row">
            <div className="container">
              <div
                className="home-three-head section-header-title"
                data-aos="fade-up"
              >
                <div className="row align-items-center d-flex justify-content-between">
                  <div className="col-lg-8 col-sm-12">
                    <h2>Choose favourite Course from top Category</h2>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="see-all">
                      <Link to="/course-details">
                        See all
                        <span className="see-all-icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <TopCategories2 />
            </div>
          </div>
          {/* Favorite Course */}
        </div>
      </section>
      {/* Favorite Course */}

      {/* Courses */}
      <section className="home-three-courses">
        <div className="container">
          <div className="favourite-course-sec">
            <div className="row">
              <div
                className="home-three-head section-header-title"
                data-aos="fade-up"
              >
                <div className="row align-items-center d-flex justify-content-between">
                  <div className="col-lg-6 col-sm-8">
                    <h2>Courses</h2>
                  </div>
                  <div className="col-lg-6 col-sm-4">
                    <div className="see-all">
                      <Link to="#">
                        See all
                        <span className="see-all-icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="all-corses-main">
                <div className="tab-content">
                  <div className="nav tablist-three" role="tablist">
                    <Link
                      className={
                        toggle === 1 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#alltab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(1);
                      }}
                    >
                      All
                    </Link>

                    <Link
                      className={
                        toggle === 2 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#mostpopulartab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(2);
                      }}
                    >
                      Most popular
                    </Link>

                    <Link
                      className={
                        toggle === 3 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#businesstab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(3);
                      }}
                    >
                      Business
                    </Link>

                    <Link
                      className={
                        toggle === 4 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#designtab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(4);
                      }}
                    >
                      Design
                    </Link>

                    <Link
                      className={
                        toggle === 5 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#designtab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(5);
                      }}
                    >
                      Music
                    </Link>

                    <Link
                      className={
                        toggle === 6 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#programmingtab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(6);
                      }}
                    >
                      Programming
                    </Link>

                    <Link
                      className={
                        toggle === 7 ? "nav-tab me-3 active" : "nav-tab me-3"
                      }
                      data-bs-toggle="tab"
                      to="#databasetab"
                      role="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        updateToggle(7);
                      }}
                    >
                      Database
                    </Link>
                  </div>

                  <div className="tab-content">
                    {/* All */}
                    <div
                      className={
                        toggle === 1
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="alltab"
                      role="tabpanel"
                    >
                      <div className="all-course">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* All */}

                    {/* Most Popular */}
                    <div
                      className={
                        toggle === 2
                          ? "tab-pane fade active show"
                          : "tab-pane fade "
                      }
                      id="mostpopulartab"
                    >
                      <div className="all-course">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Most Popular */}

                    {/* Business-> */}
                    <div
                      className={
                        toggle === 3
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="businesstab"
                    >
                      <div className="businesstab">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Business */}

                    {/* Design */}
                    <div
                      className={
                        toggle === 4
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="designtab"
                    >
                      <div className="designtab">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Design */}

                    {/* Music */}
                    <div
                      className={
                        toggle === 5
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="musictab"
                    >
                      <div className="music-label">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Music */}

                    {/* Programming */}
                    <div
                      className={
                        toggle === 6
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="programmingtab"
                    >
                      <div className="programmingtab">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Programming */}

                    {/* Database */}
                    <div
                      className={
                        toggle === 7
                          ? "tab-pane fade active show"
                          : "tab-pane fade"
                      }
                      id="databasetab"
                    >
                      <div className="databasetab">
                        <div className="row">
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course22}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User5}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>$650 </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course27}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User2}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Web Developer PHP Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>500 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course23}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User6}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Pyhton Development</p>
                                      <h3 className="title instructor-text">
                                        The Complete Pyhton Development Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>Free </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course26}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User1}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Personalized Learning</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>450 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course21}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User4}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Creative Arts & media Course
                                        Completed
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>250 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $700 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course20}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User3}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        The Complete Business Management Course
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course24}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User7}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Business Management</p>
                                      <h3 className="title instructor-text">
                                        Build Websites with HTML5 CSS3
                                        Javascript
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $650 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}

                          {/* Col */}
                          <div
                            className="col-xl-3 col-lg-6 col-md-6 col-12"
                            data-aos="fade-up"
                          >
                            <div className="course-box-three">
                              <div className="course-three-item">
                                <div className="course-three-img">
                                  <Link to="/home">
                                    <img
                                      className="img-fluid"
                                      alt=""
                                      src={Course25}
                                    />
                                  </Link>
                                  <div className="heart-three">
                                    <Link to="#">
                                      <i className="fa-regular fa-heart"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="course-three-content">
                                  <div className="course-group-three">
                                    <div className="group-three-img">
                                      <Link to="/instructor/instructor-profile">
                                        <img
                                          src={User8}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="course-three-text">
                                    <Link to="/home">
                                      <p>Creative Arts & media</p>
                                      <h3 className="title instructor-text">
                                        Build Responsive Websites with HTML CSS
                                      </h3>
                                    </Link>
                                  </div>

                                  <div className="student-counts-info d-flex align-items-center">
                                    <div className="students-three-counts d-flex align-items-center">
                                      <img src={StudentIcon} alt="" />
                                      <p>400 Students</p>
                                    </div>
                                  </div>

                                  <div className="price-three-group d-flex align-items-center justify-content-between">
                                    <div className="price-three-view d-flex align-items-center">
                                      <div className="course-price-three">
                                        <h3>
                                          $300 <span>$99.00</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="price-three-time d-inline-flex align-items-center">
                                      <i className="fa-regular fa-clock me-2"></i>
                                      <span>6hr 30min</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Col */}
                        </div>
                      </div>
                    </div>
                    {/* Database */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Courses */}
      {/* CTA */}
      <section className="home-three-transform">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="cta-content">
                <h2>Transform Access To Education</h2>
                <p>
                  Create an account to receive our newsletter, course
                  recommendations and promotions.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="transform-button-three">
                <Link to="/register" className="btn btn-action">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      {/* Achieve your Goals */}
      <section className="home-three-goals">
        <div className="container">
          <div className="row align-items-center">
            {/* Col */}
            <div className="col-xl-3 col-lg-12 col-md-12" data-aos="fade-down">
              <div className="acheive-goals-main">
                <h2>Acheive you Goals with DreamsLMS</h2>
              </div>
            </div>
            {/* Col */}

            {/* Col */}
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-12"
              data-aos="fade-down"
            >
              <div className="acheive-goals">
                <div className="acheive-elips-one">
                  <img src={Ellipse1} alt="" />
                </div>
                <div className="acheive-goals-content text-center course-count ms-0">
                  <h4>
                    <span className="d-flex">
                      <CountUp start={0} end={253085} delay={0} />
                    </span>
                  </h4>
                  <p>Students Enrolled all over World</p>
                </div>
              </div>
            </div>
            {/* Col */}

            {/* Col */}
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-12"
              data-aos="fade-down"
            >
              <div className="acheive-goals">
                <div className="acheive-elips-two">
                  <img src={Ellipse2} alt="" />
                </div>
                <div className="acheive-goals-content text-center course-count ms-0">
                  <h4>
                    <span className="d-flex">
                      <CountUp start={0} end={1205} delay={0.2} duration={2} />
                    </span>
                  </h4>
                  <p>Total Courses on our Platform</p>
                </div>
              </div>
            </div>
            {/* Col */}

            {/* Col */}
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-12"
              data-aos="fade-down"
            >
              <div className="acheive-goals">
                <div className="acheive-elips-three">
                  <img src={Ellipse3} alt="" />
                </div>
                <div className="acheive-goals-content text-center course-count ms-0">
                  <h4>
                    <span className="d-flex">
                      <CountUp start={0} end={60} delay={1} duration={2} />
                    </span>
                  </h4>
                  <p>Countries of Students </p>
                </div>
              </div>
            </div>
            {/* Col */}
          </div>
        </div>
      </section>
      {/* Achieve your Goals */}

      {/* Accelerate Cloud */}
      <section className="accelerate-cloud-three">
        <div className="container">
          <div className="shapes-three-right">
            <img className="accelerate-one" src={Shape01} alt="" />
            <img className="accelerate-two" src={Pattern03} alt="" />
          </div>
          <div className="shapes-three-left">
            <img className="accelerate-three" src={Pattern02} alt="" />
            <img className="accelerate-four" src={Shape02} alt="" />
            <img className="accelerate-five" src={Pattern04} alt="" />
          </div>
          <div
            className="home-three-head section-header-title"
            data-aos="fade-up"
          >
            <div className="row align-items-center d-flex justify-content-between">
              <div className="col-lg-6 col-md-12">
                <div className="home-three-head">
                  <h2 className="text-white">
                    Accelerate cloud success with hands-on learning at scaler
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <p className="accelerate-three-business">
                  96% of eLearning for Business customers see improved results
                  within six months. Whether you’re a team of 10 or 10,000,
                  faster cloud fluency starts here.
                </p>
              </div>
            </div>
          </div>

          {/* Award Winning */}
          <div className="award-one">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-12"
                data-aos="fade-right"
              >
                <div className="award-three-images-one">
                  <img
                    className="img-fluid"
                    src={Award01}
                    alt="image-banner"
                    title="image-banner"
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="award-three-content-one">
                  <div className="award-list-info" data-aos="fade-up">
                    <div className="award-win-icon">
                      <img src={AwardSvg} alt="certified" />
                    </div>
                    <div className="award-list-content">
                      <h2>Award Winning Course Management</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quam dolor fermentum massa viverra congue proin. A
                        volutpat eget ultrices velit nunc orci. Commodo quis
                        integer a felis ac vel mauris a morbi. Scelerisque{" "}
                      </p>
                    </div>
                  </div>

                  <div className="award-list d-flex align-items-center">
                    <span className="award-icon">
                      <img src={CheckRound1} alt="" className="img-fluid" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="award-list d-flex align-items-center">
                    <span className="award-icon">
                      <img src={CheckRound1} alt="" className="img-fluid" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div
                    className="award-list mb-0 d-flex align-items-center"
                    data-aos="fade-up"
                  >
                    <span className="award-icon">
                      <img src={CheckRound1} alt="" className="img-fluid" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Award Winning	 */}

          {/* Learn Anything */}
          <div className="learn-anything">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-12"
                data-aos="fade-up"
              >
                <div className="award-three-content-two">
                  <div className="award-list-info">
                    <div className="award-win-icon">
                      <img className="img-fluid" src={Time} alt="certified" />
                    </div>
                    <div className="award-list-content">
                      <h2>Learn anything from anywhere anytime</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quam dolor fermentum massa viverra congue proin. A
                        volutpat eget ultrices velit nunc orci. Commodo quis
                        integer a felis ac vel mauris a morbi. Scelerisque{" "}
                      </p>
                    </div>
                  </div>

                  <div className="award-list d-flex align-items-center">
                    <span className="award-icon">
                      <img src={CheckRound2} alt="" className="img-fluid" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="award-list d-flex align-items-center">
                    <span className="award-icon">
                      <img src={CheckRound2} alt="" className="img-fluid" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="award-list d-flex align-items-center">
                    <span className="award-icon">
                      <img src={CheckRound2} alt="" className="img-fluid" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-6 col-12"
                data-aos="fade-right"
              >
                <div className="award-three-images-two">
                  <img
                    className="img-fluid"
                    src={LearnAnything}
                    alt="image-banner"
                    title="image-banner"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Learn Anything */}

          {/* Development Career */}
          <div className="development-carrer">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-12"
                data-aos="fade-right"
              >
                <div className="award-three-images-three">
                  <img
                    className="img-fluid"
                    src={Certification}
                    alt="image-banner"
                    title="image-banner"
                  />
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-6 col-12"
                data-aos="fade-up"
              >
                <div className="award-three-content-one">
                  <div className="award-list-info">
                    <div className="award-win-icon">
                      <img
                        className="img-fluid"
                        src={Winning}
                        alt="certified"
                      />
                    </div>
                    <div className="award-list-content">
                      <h2>
                        Certification for solid development of your Carrer
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quam dolor fermentum massa viverra congue proin. A
                        volutpat eget ultrices velit nunc orci. Commodo quis
                        integer a felis ac vel mauris a morbi. Scelerisque{" "}
                      </p>
                    </div>
                  </div>

                  <div className="award-list d-flex align-items-center">
                    <span className="award-icon">
                      <img src={CheckRound3} alt="" className="img-fluid" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="award-list d-flex align-items-center">
                    <span className="award-icon">
                      <img src={CheckRound3} alt="" className="img-fluid" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Development Career */}
        </div>
      </section>
      {/* Accelerate Cloud */}
      {/* Trending Courses Three */}
      <section className="home-three-trending">
        <div className="container">
          <div className="row">
            <div
              className="home-three-head section-header-title"
              data-aos="fade-up"
            >
              <div className="row align-items-center d-flex justify-content-between">
                <div className="col-lg-12">
                  <h2>Most Trending Courses</h2>
                </div>
              </div>
            </div>
            <Trending3 />
          </div>
          {/* Favorite Course */}
        </div>
      </section>
      {/* Trending Courses Three */}
      {/* Feature Course */}
      <section className="gallery-three">
        <div className="container">
          <div
            className="home-three-head section-header-title"
            data-aos="fade-up"
          >
            <div className="row align-items-center d-flex justify-content-between">
              <div className="col-lg-6 col-sm-12">
                <h2>Courses taught by real instructor</h2>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="see-all">
                  <Link to="/instructor/instructor-list">
                    See all
                    <span className="see-all-icon">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-gallery-three">
            <div className="row">
              {/* Col */}
              <div className="col-lg-5 col-md-5">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="gallery-three-img-item">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery1} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <div className="gallery-three-img-item">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery2} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <div className="gallery-three-img-item mb-0">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery3} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <div className="gallery-three-img-item mb-0">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery4} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Col */}

              {/* Col */}
              <div className="col-lg-3 col-md-3">
                <div className="gallery-three-img-item mb-0">
                  <div className="content-three-main">
                    <div className="gallery-img">
                      <img src={Gallery5} alt="Instructor" />
                    </div>
                    <div className="content-three-overlay">
                      <div className="content-three-text">
                        <div>
                          <h6>Patricia</h6>
                          <p>Node Js</p>
                        </div>
                        <div>
                          <Link
                            to="/instructor/instructor-list"
                            className="content-three-arrows"
                          >
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Col */}

              {/* Col */}
              <div className="col-lg-4 col-md-4">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="gallery-three-img-item">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery6} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-three-img-item mb-0">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery7} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-three-img-item mb-0">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery8} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Col */}
            </div>
          </div>
        </div>
      </section>
      {/* Feature Course */}

      {/* Become and Instructor */}
      <section className="home-three-become">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8" data-aos="fade-up">
              <div className="become-content-three">
                <h2>Become An Instructor</h2>
                <p>
                  Top instructors from around the world teach millions of
                  students on DreamsLMS.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-aos="fade-up">
              <div className="become-button-three">
                <Link to="/register" className="btn btn-become">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Become and Instructor */}

      {/* Leading companies */}
      <section className="lead-companies-three">
        <div className="container">
          <div className="home-three-head section-header-title aos-init aos-animate">
            <div className="row align-items-center d-flex justify-content-between">
              <div className="col-lg-12" data-aos="fade-up">
                <h2>500+ Leading Universities And Companies</h2>
              </div>
            </div>
          </div>
          <Companies />
        </div>
      </section>
      {/* Leading companies */}

      {/* Testimonial */}
      <section className="testimonial-three">
        <div className="container">
          <div className="testimonial-pattern">
            <img className="pattern-left img-fluid" alt="" src={PatternSvg5} />
            <img className="pattern-right img-fluid" alt="" src={PatternSvg6} />
          </div>
          <div className="testimonial-three-content">
            <div className="row align-items-center">
              <div
                className="col-xl-4 col-lg-12 col-md-12"
                data-aos="fade-down"
              >
                <div className="become-content">
                  <h2 className="aos-init aos-animate">They Trusted us</h2>
                  <h4 className="aos-init aos-animate">
                    We are a very happy because we have a happy customer
                  </h4>
                </div>

                {/* View all Testimonail */}
                <Link
                  to="/instructor/instructor-profile"
                  className="btn btn-action aos-init aos-animate"
                  data-aos="fade-up"
                >
                  View all Testimonial
                </Link>
                {/* View all Testimonail */}
              </div>
              <div
                className="col-xl-8 col-lg-12 col-md-12"
                data-aos="fade-down"
              >
                {/* Swiper Element */}
                <div
                  className="swiper-testimonial-three"
                  style={{ width: "100%", height: "400px" }}
                >
                  <Testimonial3 />
                </div>
                {/* <Testimonial03 /> */}
                {/* Swiper Element */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}

      {/* Latest Blog */}
      <section className="latest-blog-three">
        <div className="container">
          <div
            className="home-three-head section-header-title"
            data-aos="fade-up"
          >
            <div className="row align-items-center d-flex justify-content-between">
              <div className="col-lg-6 col-md-8">
                <h2>Latest news & Events</h2>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="see-all">
                  <Link to="/blog-list">
                    See all
                    <span className="see-all-icon">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="latest-blog-main">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-one">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog20} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-green">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-two">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog21} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
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
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-three">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog22} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-four">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog23} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-five">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog24} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-yellow">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
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
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blog */}

      {/* Footer */}
      <Footer3 />
      {/* Footer */}
    </>
  );
};
