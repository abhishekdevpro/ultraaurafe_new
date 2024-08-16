import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Select from "react-select";
import TextEditor from "../../pages/course/addCourse/editor";
import { useSelector } from "react-redux";

const StudentTicket = () => {
  const [setPrivacy] = useState(null);
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const options = [
    { label: "Choose Category", value: "Choose Category" },
    { label: "Mailing Issue ", value: "Mailing Issue" },
    { label: "Language Issue", value: "Language Issue" },
    { label: "Installation Error", value: "Installation Error" },
  ];
  const options1 = [
    { label: "Choose Priority", value: "Choose Priority" },
    { label: "High ", value: "High" },
    { label: "Medium", value: "Medium" },
    { label: "Lowr", value: "Low" },
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: mobileSidebar === 'disabled' ? "white":"#131022",
      border: "none",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided) => ({
      ...provided,
      backgroundColor:  mobileSidebar === 'disabled' ? "#fff" : "#000",
      color:mobileSidebar === 'disabled'? '#000':'#fff',
      fontSize: "14px",
      "&:hover": {
        backgroundColor:mobileSidebar === 'disabled'? "#FFDEDA":"#2b2838",
        // #dddddd
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
      display: "none"
    }),

  };
  return (
    <div className="main-wrapper">

      {/* Header */}
      <StudentHeader activeMenu={"Support Ticket"} />
      {/* /Header */}
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Support Tickets</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Support Tickets
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
            <StudentSidebar />
            {/* /Sidebar */}
            {/* Student Tickets */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Support Tickets</h3>
                  </div>
                  <div className="checkout-form">
                    {/* Support Information */}
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="card support-box">
                          <div className="card-body">
                            <h3>50</h3>
                            <p>Total Tickets</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="card support-box">
                          <div className="card-body">
                            <h3>30</h3>
                            <p>Opened Tickets</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="card support-box">
                          <div className="card-body">
                            <h3>20</h3>
                            <p>Closed Tickets</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Support Information */}
                    <div className="filter-grp ticket-grp d-flex align-items-center justify-content-between">
                      <div>
                        <h3>Support Tickets</h3>
                        <p>You can find all of your order Invoices.</p>
                      </div>
                      <div className="ticket-btn-grp">
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add-tickets"
                        >
                          Add New Ticket
                        </Link>
                      </div>
                    </div>
                    <div className="wishlist-tab">
                      <ul className="nav">
                        <li className="nav-item">
                          <Link
                            to="#"
                            className="active"
                            data-bs-toggle="tab"
                            data-bs-target="#all"
                          >
                            All(30)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            data-bs-toggle="tab"
                            data-bs-target="#open"
                          >
                            Open(10)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            data-bs-toggle="tab"
                            data-bs-target="#inprogress"
                          >
                            Inprogress(10)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            data-bs-toggle="tab"
                            data-bs-target="#closed"
                          >
                            Closed(10)
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Tab Contant */}
                    <div className="tab-content">
                      {/* All */}
                      <div className="tab-pane show active" id="all">
                        <div className="table-responsive custom-table">
                          {/* Referred Users*/}
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Ticket ID</th>
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Ticket#001</td>
                                <td>March 12, 2024</td>
                                <td>Need a freelancer software</td>
                                <td>
                                  <span className="resut-badge badge-light-success">
                                    Low
                                  </span>
                                </td>
                                <td>Mailing Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#002</td>
                                <td>March 18, 2024</td>
                                <td>I have a problem</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Language Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-warning">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#003</td>
                                <td>March 27, 2024</td>
                                <td>Account Activation mail not received</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Mailing Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-danger">
                                    Closed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#004</td>
                                <td>April 04, 2024</td>
                                <td>Enabling SSH service</td>
                                <td>
                                  <span className="resut-badge badge-light-warning">
                                    Medium
                                  </span>
                                </td>
                                <td>Installation Error</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#005</td>
                                <td>April 24, 2024</td>
                                <td>Payment Processed but not showed</td>
                                <td>
                                  <span className="resut-badge badge-light-success">
                                    Low
                                  </span>
                                </td>
                                <td>Payment Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-danger">
                                    Closed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#006</td>
                                <td>April 28, 2024</td>
                                <td>When will start the order</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="status-badge badge-soft-warning">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#007</td>
                                <td>June 03, 2024</td>
                                <td>Slow speed while Course Download</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Server Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#008</td>
                                <td>June 13, 2024</td>
                                <td>Unable to access the course </td>
                                <td>
                                  <span className="resut-badge badge-light-warning">
                                    Medium
                                  </span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#009</td>
                                <td>July 15, 2024</td>
                                <td>Assignment Upload Error files</td>
                                <td>
                                  <span className="resut-badge badge-light-success">
                                    Low
                                  </span>
                                </td>
                                <td>File Error</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#0010</td>
                                <td>July 23, 2024</td>
                                <td>Account Recovery Assistance Need</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Recovery Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /All */}
                      {/* Open */}
                      <div className="tab-pane fade" id="open">
                        <div className="table-responsive custom-table">
                          {/* Referred Users*/}
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Ticket ID</th>
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Ticket#001</td>
                                <td>March 12, 2024</td>
                                <td>Need a freelancer software</td>
                                <td>
                                  <span className="resut-badge badge-light-success">
                                    Low
                                  </span>
                                </td>
                                <td>Mailing Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#003</td>
                                <td>March 27, 2024</td>
                                <td>Account Activation mail not received</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Mailing Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-danger">
                                    Closed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#004</td>
                                <td>April 04, 2024</td>
                                <td>Enabling SSH service</td>
                                <td>
                                  <span className="resut-badge badge-light-warning">
                                    Medium
                                  </span>
                                </td>
                                <td>Installation Error</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#007</td>
                                <td>June 03, 2024</td>
                                <td>Slow speed while Course Download</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Server Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#008</td>
                                <td>June 13, 2024</td>
                                <td>Unable to access the course </td>
                                <td>
                                  <span className="resut-badge badge-light-warning">
                                    Medium
                                  </span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#009</td>
                                <td>July 15, 2024</td>
                                <td>Assignment Upload Error files</td>
                                <td>
                                  <span className="resut-badge badge-light-success">
                                    Low
                                  </span>
                                </td>
                                <td>File Error</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#0010</td>
                                <td>July 23, 2024</td>
                                <td>Account Recovery Assistance Need</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Recovery Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-success">
                                    Opened
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /Open */}
                      {/* Inprogress */}
                      <div className="tab-pane fade" id="inprogress">
                        <div className="table-responsive custom-table">
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Ticket ID</th>
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Ticket#002</td>
                                <td>March 18, 2024</td>
                                <td>I have a problem</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Language Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-warning">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#006</td>
                                <td>April 28, 2024</td>
                                <td>When will start the order</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Demo Problem</td>
                                <td>
                                  <span className="status-badge badge-soft-warning">
                                    Inprogress
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /Inprogress */}
                      {/* Close */}
                      <div className="tab-pane fade" id="closed">
                        <div className="table-responsive custom-table">
                          <table className="table table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th>Ticket ID</th>
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Category</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Ticket#003</td>
                                <td>March 27, 2024</td>
                                <td>Account Activation mail not received</td>
                                <td>
                                  <span className="resut-badge badge-light-danger">
                                    High
                                  </span>
                                </td>
                                <td>Mailing Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-danger">
                                    Closed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ticket#005</td>
                                <td>April 24, 2024</td>
                                <td>Payment Processed but not showed</td>
                                <td>
                                  <span className="resut-badge badge-light-success">
                                    Low
                                  </span>
                                </td>
                                <td>Payment Issues</td>
                                <td>
                                  <span className="status-badge badge-soft-danger">
                                    Closed
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /Close */}
                    </div>
                    {/* Tab Contant */}
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
            {/* Student Tickets */}
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <div className="modal fade" id="add-tickets">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Add New Ticket</h4>
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
                    <div className="tickets-add-list">
                      <div className="settings-inner-blk add-course-info p-0">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Ticket Title</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block customticket">
                              <label className="form-label">Category</label>

                              <Select
                                className="form-select select country-select ticket-select "

                                name="sellist1"
                                options={options}
                                defaultValue={options[0]}
                                placeholder="Choose Category"
                                onChange={setPrivacy}
                                styles={style}
                              ></Select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block customticket">
                              <label className="form-label">Priority</label>

                              <Select
                                className="form-select select country-select ticket-select"

                                name="sellist1"
                                options={options1}
                                defaultValue={options1[0]}
                                placeholder="Choose Priority"
                                onChange={setPrivacy}
                                styles={style}
                              ></Select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Description</label>
                              <div id="editor" />
                              <TextEditor />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block ">
                              <label className="form-label">Attachment</label>
                              <div className="file-drop">
                                <div action="#" className="dropzone">
                                  <p>Drag &amp; Drop files </p>
                                </div>
                              </div>
                              <div className="accept-drag-file">
                                <p>Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button type="submit" className="btn btn-primary">
                        Submit
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
      </div>

    </div>
  );
};

export default StudentTicket;
