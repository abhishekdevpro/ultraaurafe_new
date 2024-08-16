import React from "react";
import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";
import Footer from "../../../footer";
import { Lock, Play, Video1 } from "../../../imagepath";
import PageHeader from "../../header";

const CourseLesson = () => {

    const [drop, setDrop] = useState(false);
    const [drop2, setDrop2] = useState(false);
    const [drop3, setDrop3] = useState(false);
    const [drop4, setDrop4] = useState(false);
    const [drop5, setDrop5] = useState(false);
    
  return (
    <>
      <div className="main-wrapper">
        <PageHeader />

        <section className="page-content course-sec course-lesson">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* Course Lesson */}
                <div className="lesson-group">
                  <div className="course-card">
                    <h6 className="cou-title">
                      <Link 
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#collapseOne"
                        onClick={() => setDrop(!drop)}
                        aria-controls="example-collapse-text"
                        aria-expanded={drop}
                      >
                        Chapter 1 <span>5 Lessons</span>{" "}
                      </Link>
                    </h6>
                    <Collapse in={drop}>
                    <div
                      id="collapseOne"
                      className="card-collapse collapse"
                      style={{}}
                    >
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip" />
                      </div>
                      <div className="student-percent lesson-percent">
                        <p>
                          10hrs<span>50%</span>
                        </p>
                      </div>
                      <ul>
                        <li>
                          <p className="play-intro">Introduction</p>
                          <div>
                            <img src={Play} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Course Introduction </p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Exam</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Course</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Building Our Scenario</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Learnings</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    </Collapse>
                  </div>
                  <div className="course-card">
                    <h6 className="cou-title">
                      <Link 
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#course2"
                        onClick={() => setDrop2(!drop2)}
                        aria-controls="example-collapse-text"
                        aria-expanded={drop2}
                      >
                        Chapter 2 <span>8 Lessons</span>{" "}
                      </Link>
                    </h6>
                    <Collapse in={drop2}>
                    <div
                      id="course2"
                      className="card-collapse collapse"
                      style={{}}
                    >
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip" />
                      </div>
                      <div className="student-percent lesson-percent">
                        <p>
                          10hrs<span>50%</span>
                        </p>
                      </div>
                      <ul>
                        <li>
                          <p className="play-intro">Introduction</p>
                          <div>
                            <img src={Play} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Course Introduction </p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Exam</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Course</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Building Our Scenario</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Learnings</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    </Collapse>
                  </div>
                  <div className="course-card">
                    <h6 className="cou-title">
                      <Link 
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#course3"
                        onClick={() => setDrop3(!drop3)}
                        aria-controls="example-collapse-text"
                        aria-expanded={drop3}
                      >
                        Chapter 3 <span>7 Lessons</span>{" "}
                      </Link>
                    </h6>
                    <Collapse in={drop3}>
                    <div
                      id="course3"
                      className="card-collapse collapse"
                      style={{}}
                    >
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip" />
                      </div>
                      <div className="student-percent lesson-percent">
                        <p>
                          12hrs<span>50%</span>
                        </p>
                      </div>
                      <ul>
                        <li>
                          <p className="play-intro">Introduction</p>
                          <div>
                            <img src={Play} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Course Introduction </p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Exam</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Course</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Building Our Scenario</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Learnings</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    </Collapse>
                  </div>
                  <div className="course-card">
                    <h6 className="cou-title">
                      <Link 
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#coursefour"
                        onClick={() => setDrop4(!drop4)}
                        aria-controls="example-collapse-text"
                        aria-expanded={drop4}
                      >
                        Chapter 4 <span>5 Lessons</span>{" "}
                      </Link>
                    </h6>
                    <Collapse in={drop4}>
                    <div id="coursefour" className="card-collapse collapse">
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip" />
                      </div>
                      <div className="student-percent lesson-percent">
                        <p>
                          8hrs<span>50%</span>
                        </p>
                      </div>
                      <ul>
                        <li>
                          <p className="play-intro">Introduction</p>
                          <div>
                            <img src={Play} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Course Introduction </p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Exam</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Course</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Building Our Scenario</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Learnings</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    </Collapse>
                  </div>
                  <div className="course-card">
                    <h6 className="cou-title">
                      <Link 
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#coursefive"
                        onClick={() => setDrop5(!drop5)}
                        aria-controls="example-collapse-text"
                        aria-expanded={drop5}
                      >
                        Chapter 5 <span>8 Lessons</span>{" "}
                      </Link>
                    </h6>
                    <Collapse in={drop5}>
                    <div id="coursefive" className="card-collapse collapse">
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip" />
                      </div>
                      <div className="student-percent lesson-percent">
                        <p>
                          15hrs<span>40%</span>
                        </p>
                      </div>
                      <ul>
                        <li>
                          <p className="play-intro">Introduction</p>
                          <div>
                            <img src={Play} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Course Introduction </p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Exam</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>About the Course</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Building Our Scenario</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                        <li>
                          <p>Learnings</p>
                          <div>
                            <img src={Lock} alt="" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    </Collapse>
                  </div>
                </div>
                {/* /Course Lesson */}
              </div>
              <div className="col-lg-8">
                {/* Introduction */}
                <div className="student-widget lesson-introduction">
                  <div className="lesson-widget-group">
                    <h4 className="tittle">Introduction</h4>
                    <div className="introduct-video">
                      <Link 
                        to="https://www.youtube.com/embed/1trvO6dqQUI"
                        className="video-thumbnail"
                        data-fancybox=""
                      >
                        <div className="play-icon">
                          <i className="fa-solid fa-play" />
                        </div>
                        <img
                          className=""
                          src={Video1}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Introduction */}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default CourseLesson;
