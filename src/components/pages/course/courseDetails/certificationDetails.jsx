import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./certificate.css";
import backgroundImage from "../../../../assests/certificationimg.png";
import certificatelogo from "../../../../assests/certification-logo.png";
const Certificate = () => {
  return (
    <div
      className="certificate-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="certificate-content text-center">
        <h1 className="certificate-title">CERTIFICATE</h1>
        <h3 className="certificate-subtitle">OF ACHIEVEMENT</h3>
        <p className="certificate-text">
          This certificate is proudly presented to
        </p>
        <h2 className="recipient-name">John Doe</h2>

        <p className="certificate-description">
          Thank you for participating in &quot;Mastering Public Speaking for
          Business Success&quot; Seminar on 15 August 2024.
        </p>

        <div className="signatures">
          <div>
            <p className="signature">James Doe</p>
            <p className="title">TRAINER</p>
          </div>
          <div>
            <p className="signature">Amy Dinamic</p>
            <p className="title">HOD, ULTRAAURA</p>
          </div>
        </div>
        <div className="certification-idd">
          <p className="certificate-id">ID : UA123122343</p>
          <p className="certificate-verification">ultraaura.education/verify</p>
        </div>
        <div className="certificate-logo">
          <img
            src={certificatelogo}
            height={200}
            width={300}
            alt="certificate-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
