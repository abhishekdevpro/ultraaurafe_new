import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer";
import { Chapter,Chart,Cloud,Icon1,Import,Key,Mobile,People,Play,Teacher,Timer,Timer2,User1,Users,Video2,VideoBg,
} from "../../../imagepath";
import CourseHeader from "../header";
import Instructor from "./instructor";
import Overview from "./overview";

const CourseDetails2 = () => {
  return (
    <>
      <div className="main-wrapper">
        <CourseHeader />

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
                      <li className="breadcrumb-item" aria-current="page">
                        Courses
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        All Courses
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        The Complete Web Developer Course 2.0
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content course-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-4">
                      <Link
                        to="https://www.youtube.com/embed/1trvO6dqQUI"
                        className="video-thumbnail"
                        data-fancybox=""
                      >
                        <div className="play-icon">
                          <i className="fa-solid fa-play" />
                        </div>
                        <img className="img-fluid" src={VideoBg} alt="" />
                      </Link>
                    </div>

                    <div className="card com-course">
                      <div className="row g-0">
                        <div className="col-lg-8 br-1 bb-1">
                          <div className="complete-sec">
                            <div className="card-body">
                              <h2>The Complete Web Developer Course 2.0</h2>
                              <p>
                                Learn Web Development by building 25 websites
                                and mobile apps using HTML, CSS, Javascript,
                                PHP, Python, MySQL &amp; more!
                              </p>
                              <div className="instructor-wrap border-bottom-0 m-0">
                                <div className="about-instructor align-items-center">
                                  <div className="abt-instructor-img">
                                    <Link to="/instructor/instructor-profile">
                                      <img
                                        src={User1}
                                        alt="img"
                                        className="img-fluid"
                                      />
                                    </Link>
                                  </div>
                                  <div className="instructor-detail">
                                    <h5>
                                      <Link to="/instructor/instructor-profile">
                                        Nicole Brown
                                      </Link>
                                    </h5>
                                    <p>UX/UI Designer</p>
                                  </div>
                                  <div className="rating mb-0 ms-3">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    <span className="d-inline-block average-rating">
                                      <span>4.5</span> (15)
                                    </span>
                                  </div>
                                </div>
                                <span className="web-badge text-dark">
                                  WEB DEVELPMENT
                                </span>
                              </div>
                              <div className="course-info d-flex align-items-center border-bottom-0 p-0 m-0">
                                <div className="cou-info">
                                  <img src={Icon1} alt="" />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="cou-info">
                                  <img src={Timer} alt="" />
                                  <p>9hr 30min</p>
                                </div>
                                <div className="cou-info">
                                  <img src={People} alt="" />
                                  <p>32 students enrolled</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 bb-1">
                          <div className="no-video">
                            <div className="card-body video-details">
                              <div className="course-fee">
                                <h2>$200</h2>
                                <p>
                                  <span>$99.00</span> 50% off
                                </p>
                              </div>
                              <div className="row gx-1">
                                <div className="col-sm-6">
                                  <Link
                                    to="/course-wishlist"
                                    className="btn btn-wish w-100"
                                  >
                                    {/* <i className="feather-heart" /> */}
                                    <FeatherIcon icon="heart" />
                                    Add to Wishlist
                                  </Link>
                                </div>
                                <div className="col-sm-6">
                                  <Link to="#" className="btn btn-wish w-100">
                                    {/* <i className="feather-share-2" />  */}
                                    <FeatherIcon icon="share-2" />
                                    Share
                                  </Link>
                                </div>
                                <div className="col-sm-6">
                                  <Link
                                    to="/cart"
                                    className="btn btn-cart w-100"
                                  >
                                    Add To Cart
                                  </Link>
                                </div>
                                <div className="col-sm-6">
                                  <Link
                                    to="/checkout"
                                    className="btn btn-enroll w-100"
                                  >
                                    Buy Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 br-1">
                          <div className="card-body include-sec">
                            <h5 className="subs-title text-black">Includes</h5>
                            <div className="row">
                              <div className="col-lg-6">
                                <ul>
                                  <li>
                                    <img src={Import} className="me-2" alt="" />
                                    11 hours on-demand video
                                  </li>
                                  <li>
                                    <img src={Play} className="me-2" alt="" />
                                    69 downloadable resources
                                  </li>
                                  <li>
                                    <img src={Key} className="me-2" alt="" />
                                    Full lifetime access
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-6">
                                <ul>
                                  <li>
                                    <img src={Mobile} className="me-2" alt="" />
                                    Access on mobile and TV
                                  </li>
                                  <li>
                                    <img src={Cloud} className="me-2" alt="" />
                                    Assignments
                                  </li>
                                  <li>
                                    <img
                                      src={Teacher}
                                      className="me-2"
                                      alt=""
                                    />
                                    Certificate of Completion
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="card-body feature-sec">
                            <h5 className="subs-title text-black">
                              Course Features
                            </h5>
                            <div className="row">
                              <div className="col-lg-6">
                                <ul>
                                  <li>
                                    <img src={Users} className="me-2" alt="" />
                                    Enrolled: <span>32 students</span>
                                  </li>
                                  <li>
                                    <img src={Timer2} className="me-2" alt="" />
                                    Duration: <span>20 hours</span>
                                  </li>
                                  <li>
                                    <img
                                      src={Chapter}
                                      className="me-2"
                                      alt=""
                                    />
                                    Chapters: <span>15</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-6">
                                <ul>
                                  <li>
                                    <img src={Video2} className="me-2" alt="" />
                                    Video:<span> 12 hours</span>
                                  </li>
                                  <li>
                                    <img src={Chart} className="me-2" alt="" />
                                    Level: <span>Beginner</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="overflow-links">
                      <li>
                        <Link to="#Overview" className="active">
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link to="#Course_Content">Course Content</Link>
                      </li>
                      <li>
                        <Link to="#Instructor">Instructor</Link>
                      </li>
                      <li>
                        <Link to="#Reviews">Review</Link>
                      </li>
                    </ul>

                    <Overview />

                    <Instructor />

                    <div className="card comment-sec m-0">
                      <div className="card-body">
                        <h5 className="subs-title">Post A comment</h5>
                        <form>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="input-block">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Subject"
                            />
                          </div>
                          <div className="input-block">
                            <textarea
                              rows={4}
                              className="form-control"
                              placeholder="Your Comments"
                              defaultValue={""}
                            />
                          </div>
                          <div className="submit-section">
                            <button className="submit-btn" type="submit">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default CourseDetails2;
