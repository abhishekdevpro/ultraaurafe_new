import React from "react";
import OwlCarousel from "react-owl-carousel";
import { logo, RegisterImg } from "../../../imagepath";
import { Link } from "react-router-dom";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RegisterThree = () => {
  const percentage = 75;

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
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="row">
          {/* Login Banner */}
          <div className="col-lg-4 col-md-6 login-bg">
            <OwlCarousel
              {...settings}
              className="owl-carousel login-slide owl-theme"
            >
              <div className="welcome-login register-step">
                <div className="login-banner">
                  <img src={RegisterImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login register-step">
                <div className="login-banner">
                  <img src={RegisterImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login register-step">
                <div className="login-banner">
                  <img src={RegisterImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
          {/* /Login Banner */}
          <div className="col-lg-8 col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox register-box">
                <div className="img-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                  <div className="back-home">
                    <Link to="/login">Back to Home</Link>
                  </div>
                </div>
                <h1>Become An Instructor</h1>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="profile-box">
                      <div className="circle-bar circle-bar1 text-center">
                        <div
                          className="circle-graph1"
                          style={{
                            width: 120,
                            height: 120,
                            backGroungColor: "#159F46",
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                              textColor: "#159F46",
                              pathColor: "#159F46",
                            })}
                          >
                            <div style={{ marginTop: "35px" }}>3 of 4 </div>
                          </CircularProgressbarWithChildren>
                        </div>
                      </div>
                      <h3>Profile Compleation</h3>
                      <div className="personal-detail d-flex align-items-center">
                        <span className="active-color">
                          <i className="fa-solid fa-check" />
                        </span>
                        <div className="personal-text">
                          <h4>Personal Details</h4>
                          <p className="mb-0">Setup Your personal details</p>
                        </div>
                      </div>
                      <div className="personal-detail d-flex align-items-center">
                        <span className="active-color">
                          <i className="fa-solid fa-check" />
                        </span>
                        <div className="personal-text">
                          <h4>Social Profiles</h4>
                          <p className="mb-0">
                            Setup Your Social Profiles links
                          </p>
                        </div>
                      </div>
                      <div className="personal-detail d-flex align-items-center">
                        <span className="active-color active-bar">3</span>
                        <div className="personal-text">
                          <h4>Profile Privacy Settings</h4>
                          <p className="mb-0">
                            Setup Your Profile Privacy Settings
                          </p>
                        </div>
                      </div>
                      <div className="personal-detail d-flex align-items-center">
                        <span>4</span>
                        <div className="personal-text">
                          <h4>Link Accounts</h4>
                          <p className="mb-0">Setup Your Linked Accounts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="personal-form">
                      <h4>Profile Privacy Settings</h4>
                      <form action="/register4">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-block">
                              <label htmlFor="sel1" className="form-label">
                                Privacy levels
                              </label>
                              <select
                                className="form-select"
                                id="sel1"
                                name="sellist1"
                              >
                                <option>Select </option>
                                <option>India</option>
                                <option>America</option>
                                <option>London</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <label>Profile settings</label>
                            <div className="form-check form-switch check-on">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked="true"
                              />
                              <label className="form-check-label">
                                Show your profile on search engines
                              </label>
                            </div>
                            <div className="form-check form-switch check-on">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <label className="form-check-label">
                                Show courses you&apos;re taking on your profile
                                page
                              </label>
                            </div>
                            <div className="form-check form-switch check-on">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <label className="form-check-label">
                                Show your profile on public
                              </label>
                            </div>
                            <div className="form-check form-switch check-on">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <label className="form-check-label">
                                Currently learning
                              </label>
                            </div>
                            <div className="form-check form-switch check-on">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <label className="form-check-label">
                                Completed courses
                              </label>
                            </div>
                            <div className="form-check form-switch check-on">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <label className="form-check-label">
                                Your Interests
                              </label>
                            </div>
                            <div className="btn-group d-flex">
                              <div className="back-btn">
                                <Link to="/register2" className="btn btn-back">
                                  back
                                </Link>
                              </div>
                              <div className="next-btn">
                                <button className="btn btn-primary btn-start">
                                  Next
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterThree;
