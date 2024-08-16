import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { User11 } from "../../imagepath";
import StudentHeader from "../../student/header";
import DepositMenu from "../depositMenu";

export default function TransactionStudent() {
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
          <DepositMenu activeMenu={"Transactions"} />
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
                            <td>C83Z7EQ4A1WX</td>
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
