import React from "react";
import { Eye } from "react-feather";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { User11 } from "../../imagepath";
import StudentHeader from "../../student/header";
import DepositMenu from "../depositMenu";

export default function DepositStudent() {
  return (
    <div className="main-wrapper">
      <StudentHeader />

      <div className="course-student-header">
        <div className="container">
          <div className="student-group">
            <div className="course-group ">
              <div className="course-group-img d-flex">
                <Link to="/student/students-profile">
                  <img src={User11} alt="" className="img-fluid" />
                </Link>
                <div className="d-flex align-items-center">
                  <div className="course-name">
                    <h4>
                      <Link to="/student/students-profile">Rolands R</Link>
                      <span>Beginner</span>
                    </h4>
                    <p>Student</p>
                  </div>
                </div>
              </div>
              <div className="course-share ">
                <Link to="#" className="btn btn-primary">
                  Account Settings
                </Link>
              </div>
            </div>
          </div>
          <DepositMenu activeMenu={"Deposit"} />
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="settings-widget">
                <div className="settings-inner-blk p-0">
                  <div className="comman-space pb-0">
                    <div className="filter-grp ticket-grp d-flex align-items-center justify-content-between">
                      <div>
                        <h3>Deposit History</h3>
                      </div>
                      <div className="ticket-btn-grp">
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#depositMethod"
                        >
                          Deposit Money
                        </Link>
                      </div>
                    </div>
                    <div className="settings-tickets-blk table-responsive">
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Referred ID</th>
                            <th>Gateway</th>
                            <th>Amount</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="#">K2WX7JJ6R1UA</Link>
                            </td>
                            <td>Stripe </td>
                            <td>
                              <span className="green">+ $45.00</span>
                            </td>
                            <td>2024-05-18 01:12 AM </td>
                            <td>
                              <span className="badge info-low">Complete</span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Eye />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">9RVE1N1TA1H3</Link>
                            </td>
                            <td>Bank </td>
                            <td>
                              <span className="green">+ $75.00</span>
                            </td>
                            <td>2024-05-08 01:12 AM </td>
                            <td>
                              <span className="badge info-low">Complete</span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Eye />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">C83Z7EQ4A1WX</Link>
                            </td>
                            <td>Stripe </td>
                            <td>
                              <span className="green">+ $100.00</span>
                            </td>
                            <td>2021-06-18 01:12 AM </td>
                            <td>
                              <span className="badge info-low">Complete</span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Eye />
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
