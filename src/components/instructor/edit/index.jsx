import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import {
  AddressIcon,
  Course10,
  Course11,
  CoursesIcon,
  EmailIcon,
  Icon1,
  Icon2,
  PhoneIcon,
  ProfileAvatar,
  ReviewIcon,
  TtlStudIcon,
  User1,
  User2,
} from "../../imagepath";
import { Link } from "react-router-dom";

export default function InstructorEdit() {
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      {/* Breadcrumb */}
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
                    <li className="breadcrumb-item" aria-current="page">
                      The Complete Web Developer Course 2.0
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb */}
      {/* Breadcrumb */}
      <div className="page-banner instructor-bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="profile-info-blk">
                <Link to="instructor-dashboard" className="profile-info-img">
                  <img src={ProfileAvatar} alt="" className="img-fluid" />
                </Link>
                <h4>
                  <Link to="instructor-dashboard">Jenny Wilson</Link>
                  <span>Beginner</span>
                </h4>
                <p>Instructor</p>
                <ul className="list-unstyled inline-inline profile-info-social">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb */}
      {/* Course Lesson */}
      <section className="page-content course-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Overview */}
              <div className="card overview-sec">
                <div className="card-body">
                  <div className="edit-blk">
                    <h5 className="subs-title">About Me</h5>
                    <Link to="#">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                  </div>
                  <p>
                    Very well thought out and articulate communication. Clear
                    milestones, deadlines and fast work. Patience. Infinite
                    patience. No shortcuts. Even if the client is being
                    careless. Some quick example text to build on the card title
                    and bulk the cards content Moltin gives you platform.
                  </p>
                  <p className="mb-0">
                    As a highly skilled and successfull product development and
                    design specialist with more than 4 Years of My experience
                    lies in successfully conceptualizing, designing, and
                    modifying consumer products specific to interior design and
                    home furnishings.
                  </p>
                </div>
              </div>
              {/* Overview */}

              {/* Education Content */}
              <div className="card education-sec">
                <div className="card-body">
                  <div className="edit-blk">
                    <h5 className="subs-title">Education</h5>
                    <Link to="#">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                  </div>
                  <div className="edu-wrap">
                    <div className="edu-name">
                      <span>B</span>
                    </div>
                    <div className="edu-detail">
                      <h6>BCA - Bachelor of Computer Applications</h6>
                      <p className="edu-duration">
                        International University - (2004 - 2010)
                      </p>
                      <p>
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                  <div className="edu-wrap">
                    <div className="edu-name">
                      <span>M</span>
                    </div>
                    <div className="edu-detail">
                      <h6>MCA - Master of Computer Application</h6>
                      <p className="edu-duration">
                        International University - (2010 - 2012)
                      </p>
                      <p>
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                  <div className="edu-wrap">
                    <div className="edu-name">
                      <span>D</span>
                    </div>
                    <div className="edu-detail">
                      <h6>Design Communication Visual</h6>
                      <p className="edu-duration">
                        International University - (2012-2015)
                      </p>
                      <p>
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Education Content */}

              {/* Experience Content */}
              <div className="card education-sec">
                <div className="card-body">
                  <div className="edit-blk">
                    <h5 className="subs-title">Experience</h5>
                    <Link to="#">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                  </div>
                  <div className="edu-wrap">
                    <div className="edu-name">
                      <span>B</span>
                    </div>
                    <div className="edu-detail">
                      <h6>Web Design & Development Team Leader</h6>
                      <p className="edu-duration">
                        Creative Agency - (2013 - 2016)
                      </p>
                      <p>
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                  <div className="edu-wrap">
                    <div className="edu-name">
                      <span>M</span>
                    </div>
                    <div className="edu-detail">
                      <h6>Project Manager</h6>
                      <p className="edu-duration">
                        Jobcy Technology Pvt.Ltd - (Pressent)
                      </p>
                      <p>
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Content */}

              {/* Course Content */}
              <div className="card education-sec">
                <div className="card-body pb-0">
                  <h5 className="subs-title">Courses</h5>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course10}
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
                                <Link to="instructor-profile">
                                  <img
                                    src={User1}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                                <div className="course-name">
                                  <h4>
                                    <Link to="instructor-profile">
                                      Rolands R
                                    </Link>
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
                            <h3 className="title instructor-text">
                              <Link to="course-details">
                                Information About UI/UX Design Degree
                              </Link>
                            </h3>
                            <div className="course-info d-flex align-items-center border-0 m-0">
                              <div className="rating-img d-flex align-items-center">
                                <img src="assets/img/icon/icon-01.svg" alt="" />
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
                              <Link to="/checkout" className="btn btn-primary">
                                BUY NOW
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="course-box course-design d-flex ">
                        <div className="product">
                          <div className="product-img">
                            <Link to="course-details">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Course11}
                              />
                            </Link>
                            <div className="price">
                              <h3>
                                $200 <span>$99.00</span>
                              </h3>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="course-group d-flex">
                              <div className="course-group-img d-flex">
                                <Link to="instructor-profile">
                                  <img
                                    src={User2}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                                <div className="course-name">
                                  <h4>
                                    <Link to="instructor-profile">
                                      Jenis R.
                                    </Link>
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
                            <h3 className="title instructor-text">
                              <Link to="course-details">
                                Wordpress for Beginners - Master Wordpress
                                Quickly
                              </Link>
                            </h3>
                            <div className="course-info d-flex align-items-center border-0 m-0">
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
                              <Link to="/checkout" className="btn btn-primary">
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
              {/*Course Content  */}

              {/* Reviews */}
              <div className="card review-sec">
                <div className="card-body">
                  <h5 className="subs-title">Reviews</h5>
                  <div className="review-item">
                    <div className="instructor-wrap border-0 m-0">
                      <div className="about-instructor">
                        <div className="abt-instructor-img">
                          <img src={User1} alt="img" className="img-fluid" />
                        </div>
                        <div className="instructor-detail">
                          <h5>Nicole Brown</h5>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="rev-info">
                      “ This is the second Photoshop course I have completed
                      with Cristian. Worth every penny and recommend it highly.
                      To get the most out of this course, its best to to take
                      the Beginner to Advanced course first. The sound and video
                      quality is of a good standards. Thank you Cristian. “
                    </p>
                    <Link to="#" className="btn btn-reply">
                      <i className="feather-corner-up-left"></i> Reply
                    </Link>
                  </div>
                  <div className="review-item">
                    <div className="instructor-wrap border-0 m-0">
                      <div className="about-instructor">
                        <div className="abt-instructor-img">
                          <img
                            src="assets/img/user/user1.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="instructor-detail">
                          <h5>Nicole Brown</h5>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="rev-info">
                      “ This is the second Photoshop course I have completed
                      with Cristian. Worth every penny and recommend it highly.
                      To get the most out of this course, its best to to take
                      the Beginner to Advanced course first. The sound and video
                      quality is of a good standard. Thank you Cristian. “
                    </p>
                    <Link to="#" className="btn btn-reply">
                      <i className="feather-corner-up-left"></i> Reply
                    </Link>
                  </div>
                  <div className="review-item">
                    <div className="instructor-wrap border-0 m-0">
                      <div className="about-instructor">
                        <div className="abt-instructor-img">
                          <img
                            src="assets/img/user/user1.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="instructor-detail">
                          <h5>Nicole Brown</h5>
                          <p>UX/UI Designer</p>
                        </div>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="rev-info">
                      “ This is the second Photoshop course I have completed
                      with Cristian. Worth every penny and recommend it highly.
                      To get the most out of this course, its best to to take
                      the Beginner to Advanced course first. The sound and video
                      quality is of a good standard. Thank you Cristian. “
                    </p>
                    <Link to="#" className="btn btn-reply">
                      <i className="feather-corner-up-left"></i> Reply
                    </Link>
                  </div>
                </div>
              </div>
              {/* Reviews */}

              {/* Comment */}
              <div className="card comment-sec">
                <div className="card-body">
                  <h5 className="subs-title">Add a review</h5>
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
                        rows="4"
                        className="form-control"
                        placeholder="Your Comments"
                      ></textarea>
                    </div>
                    <div className="submit-section">
                      <button className="btn submit-btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* comment */}
            </div>

            <div className="col-lg-4">
              {/* Right Sidebar Tags Label */}
              <div className="card overview-sec">
                <div className="card-body">
                  <div className="edit-blk">
                    <h5 className="subs-title">Professional Skills</h5>
                    <Link to="#">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                  </div>
                  <div className="sidebar-tag-labels">
                    <ul className="list-unstyled">
                      <li>
                        <Link to="#" className="">
                          User Interface Design
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Web Development</Link>
                      </li>
                      <li>
                        <Link to="#">Web Design</Link>
                      </li>
                      <li>
                        <Link to="#">UI Design</Link>
                      </li>
                      <li>
                        <Link to="#">Mobile App Design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Right Sidebar Tags Label */}

              {/* Right Sidebar Profile Overview */}
              <div className="card overview-sec">
                <div className="card-body">
                  <h5 className="subs-title">Profile Overview</h5>
                  <div className="rating-grp">
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
                    <div className="course-share d-flex align-items-center justify-content-center">
                      <Link to="#rate">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="profile-overview-list">
                    <div className="list-grp-blk d-flex">
                      <div className="flex-shrink-0">
                        <img src={CoursesIcon} alt="Courses" />
                      </div>
                      <div className="list-content-blk flex-grow-1 ms-3">
                        <h5>32</h5>
                        <p>Courses</p>
                      </div>
                    </div>
                    <div className="list-grp-blk d-flex">
                      <div className="flex-shrink-0">
                        <img src={TtlStudIcon} alt="Total Students" />
                      </div>
                      <div className="list-content-blk flex-grow-1 ms-3">
                        <h5>11,604</h5>
                        <p>Total Students</p>
                      </div>
                    </div>
                    <div className="list-grp-blk d-flex">
                      <div className="flex-shrink-0">
                        <img src={ReviewIcon} alt="Reviews" />
                      </div>
                      <div className="list-content-blk flex-grow-1 ms-3">
                        <h5>12,230</h5>
                        <p>Reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Sidebar Profile Overview */}

              {/* Right Contact Details */}
              <div className="card overview-sec">
                <div className="card-body">
                  <h5 className="subs-title">Contact Details</h5>
                  <div className="contact-info-list">
                    <div className="edu-wrap">
                      <div className="edu-name">
                        <span>
                          <img src={EmailIcon} alt="Address" />
                        </span>
                      </div>
                      <div className="edu-detail">
                        <h6>Email</h6>
                        <p>
                          <Link to="#">jennywilson@example.com</Link>
                        </p>
                      </div>
                    </div>
                    <div className="edu-wrap">
                      <div className="edu-name">
                        <span>
                          <img src={AddressIcon} alt="Address" />
                        </span>
                      </div>
                      <div className="edu-detail">
                        <h6>Address</h6>
                        <p>877 Ferry Street, Huntsville, Alabama</p>
                      </div>
                    </div>
                    <div className="edu-wrap">
                      <div className="edu-name">
                        <span>
                          <img src={PhoneIcon} alt="Address" />
                        </span>
                      </div>
                      <div className="edu-detail">
                        <h6>Phone</h6>
                        <p>
                          {" "}
                          <Link to="#">+1(452) 125-6789</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Contact Details */}
            </div>
          </div>
        </div>
      </section>
      {/* Course Lesson */}
      <Footer />
    </div>
  );
}
