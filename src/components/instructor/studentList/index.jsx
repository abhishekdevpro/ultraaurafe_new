import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import {
  ReferImage1,
  ReferImage2,
  ReferImage3,
  ReferImage4,
  ReferImage5,
} from "../../imagepath";
import { Link } from "react-router-dom";
import InstructorSidebar from "../sidebar";
import FeatherIcon from "feather-icons-react";


export default function InstructorStudentList() {
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar activeMenu={"StudentList"} />
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
                                className="grid-view"
                              >
                                {/* <i className="feather-grid"></i> */}
                                <FeatherIcon icon="grid"/>
                              </Link>
                              <Link
                                to="/instructor/instructor-student-list"
                                className="list-view active"
                              >
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
                    <div className="settings-widget">
                      <div className="settings-inner-blk p-0">
                        <div className="comman-space pb-0">
                          <div className="settings-referral-blk table-responsive">
                            {/* Instructor Users */}
                            <table className="table table-nowrap">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </th>
                                  <th>NAME</th>
                                  <th>ENROLLED</th>
                                  <th>PROGRESS</th>
                                  <th>LOCATIONS</th>
                                  <th>&nbsp;</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage1}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Guy Hawkins</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    {/* <i className="feather-map-pin me-1"></i> */}
                                    <FeatherIcon icon="map-pin"/>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage2}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Dianna Smiley</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage3}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Guy Hawkins</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage4}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Jacob Jones</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage5}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Kristin Watson</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage2}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Rivao Luke</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage3}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Nia Sikhone</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage1}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Xiaon Merry</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage4}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Guy Hawkins</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link
                                      to="/student/students-profile"
                                      className="refer-avatar-blk d-flex align-items-center"
                                    >
                                      <img
                                        src={ReferImage5}
                                        className="rounded-circle me-2"
                                        alt="Referred User Info"
                                      />
                                      <p>Dianna Smiley</p>
                                    </Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>0%</td>
                                  <td>
                                    <i className="feather-map-pin me-1"></i>
                                    United States
                                  </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="btn-style"
                                    >
                                      <i className="feather-clipboard"></i>
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            {/* Instructor List */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Instructor Dashboard */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
