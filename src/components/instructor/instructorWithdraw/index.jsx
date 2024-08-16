import React from "react";
import { Link } from "react-router-dom";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import { pay} from "../../imagepath";
// import FeatherIcon from "feather-icons-react";

const InstructorWithdraw = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Withdrawal</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Withdrawal
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}
            {/* Instructor Quiz */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Withdrawal</h3>
                  </div>
                  <div className="checkout-form">
                    <div className="withdrawel-head">
                      <div className="title-withdrawel">
                        <span className="file-text-icon">
                          <i className="bx bxs-wallet" />
                        </span>
                        <div className="info-withdraw">
                          <h6>Current Balance</h6>
                          <h5>
                            You have <span>$486</span> ready to withdraw now
                          </h5>
                        </div>
                      </div>
                      <div className="add-announcement-btn">
                        <Link
                          to="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#withdraw-request"
                        >
                          Withdrawal Request
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Withdrawal History</h3>
                  </div>
                  <div className="checkout-form">
                    <div className="table-responsive custom-table">
                      {/* Referred Users*/}
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Withdrawal Method</th>
                            <th>Requested On</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              March 20, 2024 <br />
                              10:30 AM
                            </td>
                            <td>$100</td>
                            <td>
                              <span className="status-badge badge-soft-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              March 24, 2024 <br />
                              11:40 AM
                            </td>
                            <td>$120</td>
                            <td>
                              <span className="status-badge badge-soft-danger">
                                Cancelled
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              March 26, 2024 <br />
                              01:15 PM
                            </td>
                            <td>$300</td>
                            <td>
                              <span className="status-badge badge-soft-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              April 02, 2024 <br />
                              09:10 AM
                            </td>
                            <td>$140</td>
                            <td>
                              <span className="status-badge badge-soft-success">
                                Success
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              March 20, 2024 <br />
                              10:30 AM
                            </td>
                            <td>$100</td>
                            <td>
                              <span className="status-badge badge-soft-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              March 24, 2024 <br />
                              11:40 AM
                            </td>
                            <td>$120</td>
                            <td>
                              <span className="status-badge badge-soft-danger">
                                Cancelled
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              March 26, 2024 <br />
                              01:15 PM
                            </td>
                            <td>$300</td>
                            <td>
                              <span className="status-badge badge-soft-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              April 02, 2024 <br />
                              09:10 AM
                            </td>
                            <td>$140</td>
                            <td>
                              <span className="status-badge badge-soft-success">
                                Success
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              May 20, 2024 <br />
                              03:00 PM
                            </td>
                            <td>$460</td>
                            <td>
                              <span className="status-badge badge-soft-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="payment-method-data">
                                <span>
                                  <img
                                    src={pay}
                                    alt="Img"
                                  />
                                </span>
                                <div className="payment-name">
                                  Paypal <br />
                                 te****t@example.com
                                </div>
                              </div>
                            </td>
                            <td>
                              June 22, 2024 <br />
                              06:40 PM
                            </td>
                            <td>$200</td>
                            <td>
                              <span className="status-badge badge-soft-danger">
                                Cancelled
                              </span>
                            </td>
                            <td>
                              <i className="bx bx-info-circle" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dash-pagination">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Page 1 of 2</p>
                  </div>
                  <div className="col-6">
                    <ul className="pagination">
                      <li className="active">
                        <Link to="#">1</Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Instructor Quiz */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <div className="modal fade" id="withdraw-request">
        <div className="modal-dialog modal-dialog-centered withdraw-modal">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Withdrawal Request</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="feather icon-x" />
                  </button>
                </div>
                <div className="modal-body custom-modal-body">
                  <form>
                    <div className="withdraw-request-info">
                      <div className="settings-inner-blk add-course-info p-0">
                        <p>
                          Please check your transaction notification on your connected
                          withdrawal method
                        </p>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="info-request">
                              <span>Withdrawal Balance</span>
                              <h6>$486</h6>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="info-request">
                              <span>Selected </span>
                              <h6>Paypal</h6>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Amount</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="$"
                              />
                            </div>
                          </div>
                          <div className="co-md-12">
                            <p className="info-text-withdraw">
                              <i className="bx bx-info-circle me-2" />
                              Minimum withdraw amount is $80
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button type="submit" className="btn btn-primary">
                        Submit Request
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
     
      </div>
      </div>
  )
}
export default InstructorWithdraw
     
  