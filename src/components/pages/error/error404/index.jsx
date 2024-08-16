import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Error1, logo } from "../../../imagepath";

const Error404 = () => {

    useEffect(() => {
		document.body.classList.add("error-page");
		return () => document.body.classList.remove("error-page");
		}, []);

  return (
    <>
      <div className="main-wrapper">
        <div className="error-box">
          <div className="error-logo">
            <Link to="/home">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="error-box-img">
            <img src={Error1} alt="" className="img-fluid" />
          </div>
          <h3 className="h2 mb-3"> Oh No! Error 404</h3>
          <p className="h4 font-weight-normal">
            This page you requested counld not found. May the force be with you!
          </p>
          <Link to="/home" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404;
