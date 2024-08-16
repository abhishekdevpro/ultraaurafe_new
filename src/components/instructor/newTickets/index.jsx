import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import { Link } from "react-router-dom";

export default function InstructorNewTickets() {
  return (
    <div className="main-wrapper">
      <InstructorHeader />
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
                  <Link to="/instructor/instructor-tickets">Back to Tickets</Link>
                </div>
              </div>
              <div className="settings-widget">
                <div className="settings-inner-blk add-course-info new-ticket-blk p-0">
                  <div className="comman-space">
                    <h4>Create New Support Ticket</h4>
                    <div>
                      <div className="input-block">
                        <label className="form-control-label">
                          Ticket Title
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="input-block">
                        <label className="form-label">Category</label>
                        <select
                          className="form-select select country-select"
                          name="sellist1"
                        >
                          <option>Choose Category</option>
                          <option>Mailing Issue</option>
                          <option>Language Issue</option>
                          <option>Installation Error</option>
                        </select>
                      </div>
                      <div className="input-block">
                        <label className="form-label">Priority</label>
                        <select
                          className="form-select select country-select"
                          name="sellist1"
                        >
                          <option>Choose Priority</option>
                          <option>Mailing Issue</option>
                          <option>Language Issue</option>
                          <option>Installation Error</option>
                        </select>
                      </div>
                      <div className="input-block">
                        <label className="add-course-label">Description</label>
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
                          <p>Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf</p>
                        </div>
                      </div>
                      <div className="submit-ticket">
                        <button type="button" className="btn btn-primary">
                          Submit
                        </button>
                        <button type="button" className="btn btn-dark">
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
