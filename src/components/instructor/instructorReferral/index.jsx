import React from "react";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import Footer from "../../footer";
import {
  User1,
  User13,
  User14,
  User2,
  User3,
  User4,
  User5,
  User6,
  User8,
} from "../../imagepath";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { initialSettings } from "../../common/dateRangePicker";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const InstructorReferral = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Referrals"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Referrals</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Referrals
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Wrapper */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}
            {/* Instructor Referral */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Referrals</h3>
                  </div>
                  <div className="checkout-form pb-0">
                    <div className="row">
                      <div className="col-xl-3 col-sm-6">
                        <div className="card refer-card">
                          <div className="card-body">
                            <h6>Net Earnings</h6>
                            <h3>$12,000</h3>
                            <p>Earning this month</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6">
                        <div className="card refer-card">
                          <div className="card-body">
                            <h6>Balance</h6>
                            <h3>$15,000</h3>
                            <p>In the Wallet</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6">
                        <div className="card refer-card">
                          <div className="card-body">
                            <h6>Avg Deal Size</h6>
                            <h3>$2,000</h3>
                            <p>Earning this month</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6">
                        <div className="card refer-card">
                          <div className="card-body">
                            <h6>No of Referrals</h6>
                            <h3>10</h3>
                            <p>In this month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 d-flex">
                        <div className="card link-box flex-fill">
                          <div className="card-body">
                            <h5>Your Referral Link</h5>
                            <p>
                              You can earn easily money by copy and share the
                              below link to your friends
                            </p>
                            <div className="input-block">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="https://dreamslmscourse.com/reffer/?refid=345re667877k9"
                              />
                            </div>
                            <Link to="#">Copy link</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 d-flex">
                        <div className="card link-box flex-fill">
                          <div className="card-body">
                            <h5>Withdraw Money</h5>
                            <ul>
                              <li>
                                Withdraw money securily to your bank account.{" "}
                              </li>
                              <li>
                                Commision is $25 per transaction under $10,000
                              </li>
                            </ul>
                            <Link to="#">Withdraw Money</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading d-flex align-items-center justify-content-between">
                    <h3>Referred Users</h3>
                    <div className="icon-form mb-0">
                      <span className="form-icon">
                        <i className="bx bx-calendar-edit" />
                      </span>
                      <DateRangePicker initialSettings={initialSettings}>
                        <input
                          className="form-control bookingrange"
                          type="text"
                        />
                      </DateRangePicker>
                    </div>
                  </div>
                  <div className="checkout-form">
                    <div className="table-responsive custom-table">
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Referred ID</th>
                            <th>Referrals</th>
                            <th>URL</th>
                            <th />
                            <th>Visits</th>
                            <th>Total Earned</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                            <Link to="#" class="tab-title">09341</Link></td>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User2}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">
                                  Thompson Hicks
                                </Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>10</td>
                            <td>$45.00</td>

                          </tr>
                          <tr>
                            <Link to="#" class="tab-title">09342</Link>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User4}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">
                                  Jennifer Tovar
                                </Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>15</td>
                            <td>$75.00</td>
                          </tr>
                          <tr>
                            
                            <Link to="#" class="tab-title">09343</Link>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User3}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">James Schulte</Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>20</td>
                            <td>$100.00</td>
                          </tr>
                          <tr>
                            
                            <Link to="#" class="tab-title">09344</Link>                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User1}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">
                                  Kristy Cardona
                                </Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>1</td>
                            <td>$44.00</td>
                          </tr>
                          <tr>
                            
                            <Link to="#" class="tab-title">09345</Link>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User14}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">
                                  William Aragon
                                </Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>5</td>
                            <td>$25.00</td>
                          </tr>
                          <tr>
                            
                            <Link to="#" class="tab-title">09346</Link>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User8}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">Shirley Lis</Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>500</td>
                            <td>$160.00</td>
                          </tr>
                          <tr>
                            
                            <Link to="#" class="tab-title">09347</Link>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User2}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">John Brewer</Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>187</td>
                            <td>$150.00</td>
                          </tr>
                          <tr>
                            
                            <Link to="#" class="tab-title">09348</Link>

                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User5}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">Doris Hughes</Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>10</td>
                            <td>$45.00</td>
                          </tr>
                          <tr>
                            
                            <Link to="#" class="tab-title">09349</Link>

                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User13}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">Arthur Nalley</Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>15</td>
                            <td>$10.00</td>
                          </tr>
                          <tr>
                            <td>09350</td>
                            <td>
                              <h2 className="table-avatar d-flex align-items-center">
                                <Link
                                  to="/student/student-profile"
                                  className="avatar"
                                >
                                  <img
                                    className="avatar-img"
                                    src={User6}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="/student/student-profile">
                                  Sarah Martinez
                                </Link>
                              </h2>
                            </td>
                            <td>
                              <span className="text-wrap">
                                https://dreamslmscourse.com/reffer/?refid=345re667877k9
                              </span>
                            </td>
                            <td>
                            <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="copy-tooltip">Copy</Tooltip>}
                          >
                            <Link to="#" className="action-icon">
                              <i className="bx bx-paste" />
                            </Link>
                          </OverlayTrigger>
                            </td>
                            <td>98</td>
                            <td>$10.00</td>
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
            {/* /Instructor Referral */}
          </div>
        </div>
      </div>
      <Footer />
      {/* /Page Wrapper */}
    </div>
  );
};

export default InstructorReferral;
