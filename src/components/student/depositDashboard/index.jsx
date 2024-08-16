import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { BookSvg, EmptyWalletTick, ReceiptText, User11 } from "../../imagepath";
import StudentHeader from "../../student/header";
import DepositMenu from "../depositMenu";

export default function StudentDepositDashboard() {
  return (
    <div className="main-wrapper">
      <StudentHeader />
      {/* Student Header */}
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
          <DepositMenu activeMenu={"Dashboard"} />
        </div>
      </div>
      {/* Student Header */}
      {/* Dashboard Student */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="settings-top-widget student-deposit-blk">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="card stat-info ttl-tickets">
                      <div className="card-body">
                        <div className="view-all-grp d-flex">
                          <div className="student-ticket-view">
                            <h3>50</h3>
                            <p>Purchased Courses</p>
                            <Link to="/purchase-history">View All</Link>
                          </div>
                          <div className="img-deposit-ticket">
                            <img src={BookSvg} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card stat-info open-tickets">
                      <div className="card-body">
                        <div className="view-all-grp d-flex">
                          <div className="student-ticket-view">
                            <h3>30</h3>
                            <p>Total Transactions</p>
                            <Link to="/deposit-student">View All</Link>
                          </div>
                          <div className="img-deposit-ticket">
                            <img src={ReceiptText} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card stat-info close-tickets">
                      <div className="card-body">
                        <div className="view-all-grp d-flex">
                          <div className="student-ticket-view">
                            <h3>20</h3>
                            <p>Total Deposit</p>
                            <Link to="/transactions-student">View All</Link>
                          </div>
                          <div className="img-deposit-ticket">
                            <img src={EmptyWalletTick} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                              <span className="text-success">+ $45.00</span>
                            </td>
                            <td>$45.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">9RVE1N1TA1H3</Link>
                            </td>
                            <td>Deposit Via Stripe Hosted - USD </td>
                            <td>
                              <span className="text-success">+ $75.00</span>
                            </td>
                            <td>$75.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">C83Z7EQ4A1WX</Link>
                            </td>
                            <td>Deposit Via Stripe Hosted - USD </td>
                            <td>
                              <span className="text-success">+ $100.00</span>
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
                              <span className="text-success">+ $160.00</span>
                            </td>
                            <td>S160.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">K2WX7JJ6R1UA</Link>
                            </td>
                            <td>10 USD Refunded from withdrawal rejection </td>
                            <td>
                              <span className="text-success">+ $150.00</span>
                            </td>
                            <td> $150.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">9RVE1N1TA1H3</Link>
                            </td>
                            <td>Deposit Via Stripe Hosted - USD </td>
                            <td>
                              <span className="text-success">+ $45.00</span>
                            </td>
                            <td>$45.00</td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="#">C83Z7EQ4A1WX</Link>
                            </td>
                            <td>Deposit Via Stripe Hosted - USD </td>
                            <td>
                              <span className="text-success">+ $10.00</span>
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
      {/* Dashboard Student */}
      <Footer />
    </div>
  );
}
