import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { PaymentFailedIcon, logo } from "../../../imagepath";
import logo from '../../../assets/Ultra_Aura.png'
import { Error3 } from "../../imagepath";

const PaymentFailedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
`;

const ErrorImage = styled.img`
  width: 300px;
  max-width: 100%;
  margin-bottom: 20px;
`;

const PaymentFailed = () => {
  useEffect(() => {
    document.body.classList.add("error-page");
    return () => document.body.classList.remove("error-page");
  }, []);

  return (
    <PaymentFailedWrapper>
      <div className="main-wrapper">
        <div className="error-box">
          <div className="error-logo mb-4">
            <Link to="/home">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="error-box-img mb-4">
            <ErrorImage src={Error3} alt="Payment Failed" />
          </div>
          <h3 className="h2 mb-3">Oops! Payment Failed</h3>
          <p className="h4 font-weight-normal">
            We encountered an issue processing your payment. Please try again or contact support.
          </p>
          <Link to="/home" className="btn btn-primary mt-4">
            Back to Home
          </Link>
          
        </div>
      </div>
    </PaymentFailedWrapper>
  );
};

export default PaymentFailed;
