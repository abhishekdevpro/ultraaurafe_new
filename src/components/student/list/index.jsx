import React from "react";
import { Grid, List } from "react-feather";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import {
  LocIcon,
  Student01,
  Student02,
  Student03,
  Student04,
  Student05,
  Student06,
  Student07,
  Student08,
  Student09,
  Student10,
  Student11,
  Student12,
} from "../../imagepath";
import StudentHeader from "../header";

export default function StudentsList() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"List"} />
      {/* BreadCrumb */}
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
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item">Students List</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BreadCrumb */}

      {/* Page Wrapper */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Filter */}
              <div className="showing-list">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <div className="view-icons">
                        <Link to="/student/students-grid" className="list-view">
                          <Grid size={19} />
                        </Link>
                        <Link to="/student/students-list" className="list-view active">
                          <List size={19} />
                        </Link>
                      </div>
                      <div className="show-result">
                        <h4>Showing 1-9 of 50 results</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filter */}

              <div className="row">
                {/* Instructor List */}
                <div className="col-lg-12">
                  <div className="student-grid-blk">
                    {/* Row alignment */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student01}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">Charles Dickens</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Brazil</p>
                              </div>
                              <ul className="list-unstyled inline-inline profile-info-social">
                                <li className="list-inline-item iconMar">
                                  <Link to="#">
                                    <i className="fa-brands fa-facebook"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item iconMar">
                                  <Link to="#">
                                    <i className="fa-brands fa-twitter"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item iconMar">
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
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student02}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">Gabriel Palmer</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Italy</p>
                              </div>
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
                    {/* Row alignment */}

                    {/* Row alignment */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student03}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">James Lemire</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Louisiana</p>
                              </div>
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
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student04}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">Olivia Murphy</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>France</p>
                              </div>
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
                    {/* Row alignment */}

                    {/* Row alignment */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student05}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">Rebecca Swartz</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Iceland</p>
                              </div>
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
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student06}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">Betty Richards</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Louisiana</p>
                              </div>
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
                    {/* Row alignment */}

                    {/* Row alignment */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student07}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">
                                Jeffrey Montgomery
                              </Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Brazil</p>
                              </div>
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
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student08}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">Brooke Hayes</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>United States</p>
                              </div>
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
                    {/* Row alignment */}

                    {/* Row alignment */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student09}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">
                                Gertrude Shorter
                              </Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Louisiana</p>
                              </div>
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
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student10}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">David Garza</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Tunisia</p>
                              </div>
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
                    {/* Row alignment */}

                    {/* Row alignment */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student11}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">Vivian Winders</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Louisiana</p>
                              </div>
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
                      <div className="col-md-6">
                        <div className="student-list flex-fill">
                          <div className="student-img">
                            <Link to="/student/students-profile">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Student12}
                              />
                            </Link>
                          </div>
                          <div className="student-content">
                            <h5>
                              <Link to="/student/students-profile">Sean Leon</Link>
                            </h5>
                            <h6>Student</h6>
                            <div className="student-info">
                              <div className="loc-blk d-flex justify-content-center">
                                <img src={LocIcon} className="me-1" alt="" />
                                <p>Spain</p>
                              </div>
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
                    {/* Row alignment */}
                  </div>
                </div>
                {/* Instructor List */}
              </div>

              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination lms-page">
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
        </div>
      </div>
      {/* Page Wrapper */}
      <Footer />
    </div>
  );
}
