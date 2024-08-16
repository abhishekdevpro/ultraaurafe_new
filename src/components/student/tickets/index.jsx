import React, { useState } from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { TicketClose, TicketOpen, TicketTotal } from "../../imagepath";
import { Link } from "react-router-dom";

export default function StudentTickets() {
  const [tab, setTab] = useState(1);
  const tabToggle = (id) => {
    setTab(id);
  };
  return (
    <div className="main-wrapper">
      <StudentHeader />
      {/* Student Database */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSideBar activeMenu={"Ticket"} />
            {/* sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-top-widget">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="card stat-info ttl-tickets">
                      <div className="card-body">
                        <img src={TicketTotal} alt="Total Tickets" />
                        <h3>50</h3>
                        <p>Total Tickets</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card stat-info open-tickets">
                      <div className="card-body">
                        <img src={TicketOpen} alt="Open Tickets" />
                        <h3>30</h3>
                        <p>Open Tickets</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card stat-info close-tickets">
                      <div className="card-body">
                        <img src={TicketClose} alt="Close Tickets" />
                        <h3>20</h3>
                        <p>Close Tickets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-widget">
                <div className="settings-inner-blk p-0">
                  <div className="comman-space pb-0">
                    <div className="filter-grp ticket-grp d-flex align-items-center justify-content-between">
                      <div>
                        <h3>Support Tickets</h3>
                        <p>You can find all of your order Invoices.</p>
                      </div>
                      <div className="ticket-btn-grp">
                        <Link to="/setting-support-new-tickets">
                          Add New Ticket
                        </Link>
                      </div>
                    </div>
                    {/* Ticket Tab */}
                    <div className="category-tab tickets-tab-blk">
                      <ul className="nav nav-justified ">
                        <li className="nav-item">
                          <Link
                            to="#all"
                            className={
                              tab === 1 ? "nav-link active" : "nav-link"
                            }
                            data-bs-toggle="tab"
                            onClick={(e) => {
                              e.preventDefault();
                              tabToggle(1);
                            }}
                          >
                            All
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#open"
                            className={
                              tab === 2 ? "nav-link active" : "nav-link"
                            }
                            data-bs-toggle="tab"
                            onClick={(e) => {
                              e.preventDefault();
                              tabToggle(2);
                            }}
                          >
                            Open
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#inprogress"
                            className={
                              tab === 3 ? "nav-link active" : "nav-link"
                            }
                            data-bs-toggle="tab"
                            onClick={(e) => {
                              e.preventDefault();
                              tabToggle(3);
                            }}
                          >
                            Inprogress
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#close"
                            className={
                              tab === 4 ? "nav-link active" : "nav-link"
                            }
                            data-bs-toggle="tab"
                            onClick={(e) => {
                              e.preventDefault();
                              tabToggle(4);
                            }}
                          >
                            Closed
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Ticket Tab */}

                    {/* Referred Ticket List */}
                    <div className="tab-content">
                      <div
                        className={
                          tab === 1
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="all"
                      >
                        <div className="settings-tickets-blk table-responsive">
                          {/* Referred Users */}
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#001]
                                  </Link>
                                  <span> need a freelancer software</span>
                                </td>
                                <td>
                                  <span className="badge info-high">High</span>
                                </td>
                                <td>Mailing Issue</td>
                                <td>
                                  <span className="badge info-high">
                                    Closed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#002]
                                  </Link>
                                  <span> I have a problem</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Language Issue</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#003]
                                  </Link>
                                  <span> Enabling SSH service</span>
                                </td>
                                <td>
                                  <span className="badge info-low">High</span>
                                </td>
                                <td>Installation Error</td>
                                <td>
                                  <span className="badge info-low">Closed</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#004]
                                  </Link>
                                  <span> when will start the order</span>
                                </td>
                                <td>
                                  <span className="badge info-medium">
                                    Medium
                                  </span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="badge info-high">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#005]
                                  </Link>
                                  <span>
                                    &nbsp; I need blog comment backlinks from
                                    example.co.uk
                                  </span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Submit Issue</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#006]
                                  </Link>
                                  <span> need a freelancer software</span>
                                </td>
                                <td>
                                  <span className="badge info-high">High</span>
                                </td>
                                <td>Submit Issues</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#007]
                                  </Link>
                                  <span> I have a problem</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#008]
                                  </Link>
                                  <span> Enabling SSH service</span>
                                </td>
                                <td>
                                  <span className="badge info-medium">
                                    Medium
                                  </span>
                                </td>
                                <td>Demo Problems</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#009]
                                  </Link>
                                  <span> when will start the order</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Mailing Issue</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#010]
                                  </Link>
                                  <span>
                                    &nbsp;I need blog comment backlinks from
                                    example.co.uk
                                  </span>
                                </td>
                                <td>
                                  <span className="badge info-medium">
                                    Medium
                                  </span>
                                </td>
                                <td>Installation Error</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Referred Users */}
                        </div>
                      </div>

                      <div
                        className={
                          tab === 2
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="open"
                      >
                        <div className="settings-tickets-blk table-responsive">
                          {/* Referred Users */}
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#006]
                                  </Link>
                                  <span>&nbsp;need a freelancer software</span>
                                </td>
                                <td>
                                  <span className="badge info-high">High</span>
                                </td>
                                <td>Submit Issues</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#007]
                                  </Link>
                                  <span>&nbsp;I have a problem</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#008]
                                  </Link>
                                  <span>&nbsp;Enabling SSH service</span>
                                </td>
                                <td>
                                  <span className="badge info-medium">
                                    Medium
                                  </span>
                                </td>
                                <td>Demo Problems</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#009]
                                  </Link>
                                  <span>&nbsp;when will start the order</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Mailing Issue</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#010]
                                  </Link>
                                  <span>
                                    &nbsp; I need blog comment backlinks from
                                    example.co.uk
                                  </span>
                                </td>
                                <td>
                                  <span className="badge info-medium">
                                    Medium
                                  </span>
                                </td>
                                <td>Installation Error</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Referred Users */}
                        </div>
                      </div>
                      <div
                        className={
                          tab === 3
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="inprogress"
                      >
                        <div className="settings-tickets-blk table-responsive">
                          {/* Referred Users */}
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#001]
                                  </Link>
                                  <span>&nbsp;need a freelancer software</span>
                                </td>
                                <td>
                                  <span className="badge info-high">High</span>
                                </td>
                                <td>Mailing Issue</td>
                                <td>
                                  <span className="badge info-high">
                                    Closed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#002]
                                  </Link>
                                  <span>&nbsp;I have a problem</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Language Issue</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#003]
                                  </Link>
                                  <span>&nbsp;Enabling SSH service</span>
                                </td>
                                <td>
                                  <span className="badge info-low">High</span>
                                </td>
                                <td>Installation Error</td>
                                <td>
                                  <span className="badge info-low">Closed</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#004]
                                  </Link>
                                  <span>&nbsp;when will start the order</span>
                                </td>
                                <td>
                                  <span className="badge info-medium">
                                    Medium
                                  </span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="badge info-high">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#005]
                                  </Link>
                                  <span>
                                    &nbsp; I need blog comment backlinks from
                                    example.co.uk
                                  </span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Submit Issue</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#006]
                                  </Link>
                                  <span>&nbsp;need a freelancer software</span>
                                </td>
                                <td>
                                  <span className="badge info-high">High</span>
                                </td>
                                <td>Submit Issues</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#007]
                                  </Link>
                                  <span>&nbsp;I have a problem</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Referred Users */}
                        </div>
                      </div>

                      <div
                        className={
                          tab === 4
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="close"
                      >
                        <div className="settings-tickets-blk table-responsive">
                          {/* Referred Users */}
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#005]
                                  </Link>
                                  <span>
                                    &nbsp; I need blog comment backlinks from
                                    example.co.uk
                                  </span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Submit Issue</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#006]
                                  </Link>
                                  <span>&nbsp;need a freelancer software</span>
                                </td>
                                <td>
                                  <span className="badge info-high">High</span>
                                </td>
                                <td>Submit Issues</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#007]
                                  </Link>
                                  <span>&nbsp;I have a problem</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="badge info-low">Opened</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#008]
                                  </Link>
                                  <span>&nbsp;Enabling SSH service</span>
                                </td>
                                <td>
                                  <span className="badge info-medium">
                                    Medium
                                  </span>
                                </td>
                                <td>Demo Problems</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#009]
                                  </Link>
                                  <span>&nbsp;when will start the order</span>
                                </td>
                                <td>
                                  <span className="badge info-low">Low</span>
                                </td>
                                <td>Mailing Issue</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    to="#"
                                    className="link linkColor"
                                  >
                                    [Ticket#010]
                                  </Link>
                                  <span>
                                    &nbsp; I need blog comment backlinks from
                                    example.co.uk
                                  </span>
                                </td>
                                <td>
                                  <span className="badge info-medium">
                                    Medium
                                  </span>
                                </td>
                                <td>Installation Error</td>
                                <td>
                                  <span className="badge info-medium">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Referred Users */}
                        </div>
                      </div>
                    </div>
                    {/*Referred Ticket List  */}
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
      {/* Student Database */}
      <Footer />
    </div>
  );
}
