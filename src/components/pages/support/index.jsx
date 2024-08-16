import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import PageHeader from "../header";

const Support = () => {
  return (
    <>
      <div className="main-wrapper">

        <PageHeader activeMenu="Support"/>

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
                        placeholder="Enter your first Name"
                      />
                    </div>
                    <div className="input-block">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="input-block">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Subject"
                      />
                    </div>
                    <div className="input-block">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Write down here"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <button className="btn-submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  );
};

export default Support;
