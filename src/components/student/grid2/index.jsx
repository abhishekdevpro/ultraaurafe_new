import React from "react";
import { Grid, List } from "react-feather";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import {
  LocIcon,
  User1,
  User11,
  User12,
  User13,
  User14,
  User2,
  User3,
  User4,
  User5,
  User6,
} from "../../imagepath";
import StudentHeader from "../header";

export default function StudentsGrid2() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Grid2"} />
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
                    <li className="breadcrumb-item">Students Grid</li>
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
                        <Link
                          to="students-grid"
                          className="grid-view active"
                        >
                          <Grid size={16} />
                        </Link>
                        <Link to="students-list" className="list-view">
                          <List size={16} />
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
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User1}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">Charles Dickens</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Louisiana</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User2}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">Gabriel Palmer</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Tunisia</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User3}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">James Lemire</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Louisiana</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User4}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">Olivia Murphy</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Spain</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User5}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">Rebecca Swartz</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Tunisia</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User6}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">Betty Richards</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User11}
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
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Louisiana</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User12}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">Brooke Hayes</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Louisiana</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User13}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">
                          Gertrude D. Shorter
                        </Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Brazil</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User14}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">David L. Garza</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Italy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User3}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">Vivian E. Winders</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>France</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="student-box student-grid flex-fill">
                    <div className="student-img">
                      <Link to="/student/students-profile">
                        <img
                          className="img-fluid"
                          alt="Students Info"
                          src={User5}
                        />
                      </Link>
                    </div>
                    <div className="student-content">
                      <h5>
                        <Link to="/student/students-profile">Sean K. Leon</Link>
                      </h5>
                      <h6>Student</h6>
                      <div className="loc-blk d-flex align-items-center justify-content-center">
                        <img src={LocIcon} className="me-1" alt="" />
                        <p>Iceland</p>
                      </div>
                    </div>
                  </div>
                </div>
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
