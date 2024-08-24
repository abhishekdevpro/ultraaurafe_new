import React from "react";
import { Link } from "react-router-dom";
import { Icon19, Icon20, Icon21 } from "../imagepath";
import logo5 from './logo5.png'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src={logo5} alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                  UltraAura.Education - An AI enabled Edtech Company
                  </p>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Instructor</h2>
                <ul>
                  <li>
                    <Link to="/instructor/instructor-profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/instructor/instructor-list">Instructor</Link>
                  </li>
                  <li>
                    <Link to="/deposit-instructor-dashboard"> Dashboard</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Student</h2>
                <ul>
                  <li>
                    <Link to="/student/students-profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/student/students-list">Student</Link>
                  </li>
                  <li>
                    <Link to="/deposit-student-dashboard"> Dashboard</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">News letter</h2>
                <div className="news-letter">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address"
                      name="email"
                    />
                  </form>
                </div>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <img src={Icon20} alt="" className="img-fluid" />
                    <p>
                      {" "}
                      1509 Lady St, Columbia, SC 29201, 
                      <br />United States,{" "}
                    </p>
                  </div>
                  <p>
                    <img src={Icon19} alt="" className="img-fluid" />
                    info@ultraaura.education
                  </p>
                  <p className="mb-0">
                    <img src={Icon21} alt="" className="img-fluid" />
                    1803-967-7715
                  </p>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright">
            <div className="row">
              <div className="col-md-6">
                <div className="privacy-policy">
                  <ul>
                    <li>
                      <Link to="/term-condition">Terms</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright-text">
                  <p className="mb-0">© 2024 Ultraaura. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
  );
};

export default Footer;
