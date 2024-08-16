import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Error3, logo } from "../../../imagepath";

const UnderConstruction = () => {

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
            <img src={Error3} alt="" className="img-fluid" />
          </div>
          <h3 className="h2 mb-3"> The Website is Under Construction</h3>
          <p className="h4 font-weight-normal">
            We are working on fixing the problem. We back soon
          </p>
          <Link to="/home" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
