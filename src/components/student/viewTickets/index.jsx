import React from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import { User11 } from "../../imagepath";
import { Link } from "react-router-dom";

export default function StudentViewTickets() {
  return (
    <div className="main-wrapper">
      <StudentHeader />
      {/* Breadcrumb */}
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
                    <li className="breadcrumb-item" aria-current="page">
                      Pages
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Ticket View{" "}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb */}

      {/* Ticket View */}
      <div className="page-banner instructor-bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="btm-para-blk text-center">
                      <h2> Ticket View</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ticket View */}
      {/* Student Database */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Profile Details */}
            <div className="col-md-12">
              <div className="filter-grp ticket-grp tiket-suport d-flex align-items-center justify-content-between">
                <div>
                  <h3>Support Tickets</h3>
                </div>
                <div className="ticket-btn-grp">
                  <Link to="#">Back to Tickets</Link>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="settings-widget">
                <div className="settings-inner-blk new-ticket-blk p-0">
                  <div className="comman-space-ticket bdr-bottom-line">
                    <div className="bug-software-head ">
                      <h2>Bug in software</h2>
                      <p>[Ticket#002]</p>
                    </div>
                  </div>
                  <div className="comman-space-ticket bdr-bottom-line">
                    <div className="ticket-profile">
                      <div className="course-group-img d-flex align-items-center">
                        <Link to="#">
                          <img src={User11} alt="" className="img-fluid" />
                        </Link>
                        <div className="course-name">
                          <h4>
                            <Link to="#">Rolands R</Link>
                          </h4>
                          <p>25/02/2024 12:42:02</p>
                        </div>
                      </div>
                      <p className="mb-0">laptop microphone not woring </p>
                    </div>
                  </div>
                  <div className="comman-space-ticket bdr-bottom-line">
                    <div className="ticket-profile">
                      <div className="course-group-img d-flex align-items-center">
                        <Link to="#">
                          <img src={User11} alt="" className="img-fluid" />
                        </Link>
                        <div className="course-name">
                          <h4>
                            <Link to="#">Admin</Link>
                          </h4>
                          <p>25/02/2024 12:42:02</p>
                        </div>
                      </div>
                      <p className="mb-0">laptop microphone not woring </p>
                      <p> Hi Kevin Smith,</p>
                      <ul className="admin-msg-list">
                        <li>
                          Thanks for taking the time to speak about Microphone
                          issue.
                        </li>
                        <li>
                          It&apos;s been [NUMBER OF DAYS] days since we&apos;ve heard from
                          you, so I wanted to let you know that we are going to
                          close this ticket.
                        </li>
                        <li>
                          Please feel free to open a new ticket if you need any
                          further assistance.
                        </li>
                        <li>Thanks again for reaching out to us.</li>
                      </ul>
                      <p className="mb-0">Regards,</p>
                      <p>Admin</p>
                      <p className="mb-0">DreamsLMS Courses. Support</p>
                    </div>
                  </div>
                  <div className="comman-space-ticket ">
                    <div className="ticket-profile">
                      <div className="course-group-img d-flex align-items-center">
                        <Link to="#">
                          <img src={User11} alt="" className="img-fluid" />
                        </Link>
                        <div className="course-name">
                          <h4>
                            <Link to="#">Rolands R</Link>
                          </h4>
                          <p>25/02/2024 12:42:02</p>
                        </div>
                      </div>
                      <p className="mb-0">
                        no, that solutions is not working if i restart it, still
                        not able to detect the microphone while on call{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-widget">
                <div className="settings-inner-blk new-ticket-blk p-0">
                  <div className="comman-space-ticket">
                    <div className="your-replay-head ">
                      <h2>
                        Your Reply <span className="text-danger">*</span>
                      </h2>
                      <p>You can find all of your order Invoices.</p>
                    </div>
                    <div className="input-block">
                      <div id="editor"></div>
                    </div>
                    <div className="input-block ">
                      <label className="add-course-label">Attachment</label>
                      <div className="file-drop">
                        <form action="#" className="dropzone">
                          <p>Drag & Drop files </p>
                        </form>
                      </div>
                      <div className="accept-drag-file">
                        <p>
                          Only JPEG, JPG, PNG, BMP, GIF, PDF, CSV, XLS, and XLSX
                          formats are allowed.
                        </p>
                      </div>
                    </div>
                    <div className="submit-ticket">
                      <button type="button" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="settings-widget theiaStickySidebar">
                <div className="settings-inner-blk new-ticket-blk p-0 ">
                  <div className="comman-space ">
                    <div className="ticket-view-blk bdr-bottom-line pt-0">
                      <h5>Requester</h5>
                      <div className="requested-img d-flex align-items-center">
                        <Link to="#">
                          <img src={User11} alt="" className="img-fluid" />
                        </Link>
                        <h4>
                          <Link to="#">Rolands R</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="ticket-view-blk bdr-bottom-line">
                      <h5>Department</h5>
                      <p>Demo Problem</p>
                    </div>
                    <div className="ticket-view-blk bdr-bottom-line">
                      <h5>Status</h5>
                      <Link to="#" className="btn btn-success">
                        Opened
                      </Link>
                    </div>
                    <div className="ticket-view-blk bdr-bottom-line">
                      <h5>Priority</h5>
                      <Link to="#" className="btn btn-danger">
                        High
                      </Link>
                    </div>
                    <div className="ticket-view-blk bdr-bottom-line">
                      <h5>Last Activity</h5>
                      <h3>04/04/2024 00:34:15</h3>
                    </div>
                    <div className="ticket-view-blk bdr-bottom-line">
                      <h5>Created</h5>
                      <h3>30/03/2024 08:46:06</h3>
                    </div>
                    <div className="ticket-close-btn">
                      <Link to="#" className="btn btn-danger">
                        Close Ticket
                      </Link>
                    </div>
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
