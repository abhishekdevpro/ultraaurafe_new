import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import {
  MessagesText,
  User1,
  User11,
  User12,
  User13,
  User2,
  User3,
  User4,
  User5,
  User6,
} from "../../imagepath";
import { Link } from "react-router-dom";
import InstructorSidebar from "../sidebar";
import FeatherIcon from "feather-icons-react";


export default function InstructorStudentGrid() {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Grid"} />
      {/* Page Wrapper */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar activeMenu={"StudentGrid"} />
            {/* Sidebar */}

            {/* Instructor Dashboard */}
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="tak-instruct-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="settings-widget">
                      <div className="settings-inner-blk p-0">
                        <div className="sell-course-head student-meet-head comman-space border-0">
                          <div className="tak-head d-flex align-items-center">
                            <div>
                              <h3>Students</h3>
                              <p>Meet people taking your course.</p>
                            </div>
                            <div className="view-icons">
                              <Link
                                to="/instructor/instructor-student-grid"
                                className="grid-view active"
                              >
                                {/* <i className="feather-grid"></i> */}
                                <FeatherIcon icon="grid"/>
                              </Link>
                              <Link
                                to="/instructor/instructor-student-list"
                                className="list-view"
                              >
                                {/* <i className="feather-list"></i> */}
                                <FeatherIcon icon="list"/>
                              </Link>
                            </div>
                          </div>
                          <form>
                            <div className="student-search-form d-flex ">
                              <div className="input-block mb-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Twitter Profile Name"
                                />
                              </div>
                              <div className="export-cvv-btn">
                                <button className="btn btn-primary">
                                  Export CSV
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User1}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">Wade Warren</Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>United States</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>3/12/2020</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User3}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">Dianna Smiley</Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>Tunisia</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>15/12/2019</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User2}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">Esther Howard</Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>Spain</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>6/10/2020</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User5}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">Guy Hawkins</Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>United States</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>13/1/2020</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User6}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">Jacob Jones</Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>United Kingdom</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>2/6/2020</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User4}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">
                              Kristin Watson
                            </Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>Iceland</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>22/12/2020</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User11}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">Rivao Luke</Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>Brazil</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>3/12/2020</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User12}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">Nia Sikhone</Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>Italy</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>10/12/2020</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                    <div className="student-box flex-fill">
                      <div className="student-box-blks">
                        <div className="message-text-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={MessagesText}
                            />
                          </Link>
                        </div>
                        <div className="student-img">
                          <Link to="/student/students-profile">
                            <img
                              className="img-fluid"
                              alt="Students Info"
                              src={User13}
                            />
                          </Link>
                        </div>
                        <div className="student-content pb-0">
                          <h5>
                            <Link to="/student/students-profile">Xiaon Merry</Link>
                          </h5>
                          <div className="loc-blk d-flex align-items-center justify-content-center">
                            <i className="feather-map-pin me-2"></i>
                            <p>France</p>
                          </div>
                        </div>
                      </div>
                      <div className="enrol-student-foot">
                        <ul>
                          <li>
                            Enrolled <span>3/12/2020</span>
                          </li>
                          <li>
                            Progress
                            <div className="instruct-stip d-flex align-items-center">
                              <span>20%</span>
                              <div className="course-stip progress-stip">
                                <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* pagination */}
                <div className="row">
                  <div className="col-md-12">
                    <ul className="pagination lms-page mt-0">
                      <li className="page-item prev">
                        <Link
                          className="page-link"
                          to="#"
                       
                        >
                          <i className="fas fa-angle-left"></i>
                        </Link>
                      </li>
                      <li className="page-item first-page active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item next">
                        <Link className="page-link" to="#">
                          <i className="fas fa-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* pagination */}
              </div>
            </div>
            {/* Instructor Dashboard */}
          </div>
        </div>
      </div>
      {/* Page Wrapper */}
      <Footer />
    </div>
  );
}
