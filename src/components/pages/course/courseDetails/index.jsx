import React from "react";
import CourseHeader from "../header";
// import InnerBanner from "../../../../assets/img/inner-banner.jpg";
import DetailsContent from "./detailsContent";
import { Icon1, People, Timer, User1 } from "../../../imagepath";
import Footer from "../../../footer";
import { Link } from "react-router-dom";
const CourseDetails = () => {
  return (
    <>
      <div className="main-wrapper">
        <CourseHeader activeMenu={"CourseDetails"}/>

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

        <div
          className="inner-banner"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
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
                    <div className="instructor-detail me-3">
                      <h5>
                        <Link to="/instructor/instructor-profile">Nicole Brown</Link>
                      </h5>
                      <p>UX/UI Designer</p>
                    </div>
                    <div className="rating mb-0">
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star me-1" />
                      <span className="d-inline-block average-rating">
                        <span>4.5</span> (15)
                      </span>
                    </div>
                  </div>
                  <span className="web-badge mb-3">WEB DEVELPMENT</span>
                </div>
                <h2>The Complete Web Developer Course 2.0</h2>
                <p>
                  Learn Web Development by building 25 websites and mobile apps
                  using HTML, CSS, Javascript, PHP, Python, MySQL &amp; more!
                </p>
                <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
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
        </div>

        <DetailsContent/>

        <Footer/>

      </div>
    </>
  );
};

export default CourseDetails;
