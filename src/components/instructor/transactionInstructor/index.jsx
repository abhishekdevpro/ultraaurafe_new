import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import {
  Icon25,
  Icon26,
  Icon27,
  ProfileAvatar,
} from "../../imagepath";
import { Link } from "react-router-dom";

export default function TransactionInstructor() {
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
                    <Link to="/withdrawal-instructor">Withdrawal</Link>
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
                    <Link className="active" to="/transactions-instructor">
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
                      <h3>Latest Transactions</h3>
                    </div>
                    <div className="settings-tickets-blk table-responsive">
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Referred ID</th>
                            <th>Details</th>
                            <th>Amount</th>
                            <th>Post Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="#">K2WX7JJ6R1UA</Link>
                            </td>
                            <td>10 USD Refunded from withdrawal rejection </td>
                            <td>
                              <span className="green">+ $45.00</span>
                            </td>
                            <td>$45.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">9RVE1N1TA1H3</Link>
                            </td>
                            <td>Deposit Via Stripe Hosted - USD </td>
                            <td>
                              <span className="green">+ $75.00</span>
                            </td>
                            <td>$75.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">C83Z7EQ4A1WX</Link>
                            </td>
                            <td>Deposit Via Stripe Hosted - USD </td>
                            <td>
                              <span className="green">+ $100.00</span>
                            </td>
                            <td>$100.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">1C6A5M4YPV39</Link>
                            </td>
                            <td>Withdraw Via Bank withdrawal </td>
                            <td>
                              <span className="text-danger">- $5.00</span>
                            </td>
                            <td>$5.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">K2WX7JJ6R1UA</Link>
                            </td>
                            <td>10 USD Refunded from withdrawal rejection </td>
                            <td>
                              <span className="text-danger">- $25.00</span>
                            </td>
                            <td>$25.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">KSM5CW4EOEGQ</Link>
                            </td>
                            <td>Added Balance Via Admin </td>
                            <td>
                              <span className="green">+ $160.00</span>
                            </td>
                            <td>S160.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">K2WX7JJ6R1UA</Link>
                            </td>
                            <td>10 USD Refunded from withdrawal rejection </td>
                            <td>
                              <span className="green">+ $150.00</span>
                            </td>
                            <td> $150.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">9RVE1N1TA1H3</Link>
                            </td>
                            <td>Deposit Via Stripe Hosted - USD </td>
                            <td>
                              <span className="green">+ $45.00</span>
                            </td>
                            <td>$45.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">C83Z7EQ4A1WX</Link>
                            </td>
                            <td>Deposit Via Stripe Hosted - USD </td>
                            <td>
                              <span className="green">+ $10.00</span>
                            </td>
                            <td>$10.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">1C6A5M4YPV39</Link>
                            </td>
                            <td>Withdraw Via Bank withdrawal </td>
                            <td>
                              <span className="text-danger">- $10.00</span>
                            </td>
                            <td>$10.00</td>
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
