import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import {
  Icon25,
  Icon26,
  Icon27,
  ProfileAvatar,
} from "../../imagepath";
import { Eye } from "react-feather";
export default function WithdrawalInstructor() {
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      <div
        className="page-banner instructor-bg-blk"
      >
        <div className="container">
          <div className="row align-items-center student-group">
            <div className="col-lg-6 col-md-12">
              <div className="instructor-profile d-flex align-items-center">
                <div className="instructor-profile-pic">
                  <Link to="/instructor/instructor-profile">
                    <img src={ProfileAvatar} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="instructor-profile-content">
                  <h4>
                    <Link to="/instructor/instructor-profile">
                      Jenny Wilson <span>Beginner</span>
                    </Link>
                  </h4>
                  <p>Instructor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="instructor-profile-menu">
                <ul className="nav">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="instructor-profile-menu-img">
                        <img src={Icon25} alt="" />
                      </div>
                      <div className="instructor-profile-menu-content">
                        <h4>32</h4>
                        <p>Courses</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="instructor-profile-menu-img">
                        <img src={Icon26} alt="" />
                      </div>
                      <div className="instructor-profile-menu-content">
                        <h4>11,604</h4>
                        <p>Total Students</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="instructor-profile-menu-img">
                        <img src={Icon27} alt="" />
                      </div>
                      <div className="instructor-profile-menu-content">
                        <h4>12,230</h4>
                        <p>Reviews</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="my-student-list">
                <ul>
                  <li>
                    <Link to="/deposit-instructor-dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/deposit-instructor-dashboard">Courses</Link>
                  </li>
                  <li>
                    <Link className="active" to="/withdrawal-instructor">
                      Withdrawal
                    </Link>
                  </li>
                  <li>
                    <Link to="/deposit-instructor-dashboard">
                      Purchase history
                    </Link>
                  </li>
                  <li>
                    <Link to="/deposit-instructor">Deposit</Link>
                  </li>
                  <li className="mb-0">
                    <Link className="" to="/transactions-instructor">
                      Transactions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
                          Withdrawal Money
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
