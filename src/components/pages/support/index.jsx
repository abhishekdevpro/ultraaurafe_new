import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import PageHeader from "../header";

const Support = () => {
  return (
    <>
      <div className="main-wrapper">
        <PageHeader activeMenu="Support" />

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
                      <li className="breadcrumb-item">Pages</li>
                      <li className="breadcrumb-item">Support</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <h1 className="mb-0">Support</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <div className="support-wrap">
                  <h5>Submit a Request</h5>
                  <form action="#">
                    <div className="input-block">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="input-block">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="input-block">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="you@domain.com"
                      />
                    </div>
                    <div className="input-block position-relative">
                      <label htmlFor="category">Category</label>
                      <select id="category" className="form-select pe-5">
                        <option value="">- Select a category -</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing</option>
                        <option value="account">Account Issues</option>
                        <option value="feedback">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                      {/*  */}
                    </div>

                    <div className="input-block">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="input-block">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Describe your issue"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <button className="btn-submit">Submit Form</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Support;
