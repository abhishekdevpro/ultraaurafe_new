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
          {/* Row 1 */}
          <div className="col-12 d-flex flex-column flex-md-row mb-4">
            <div className="col-md-3 mb-4 mb-md-0">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src={logo5} alt="logo" className="img-fluid" />
                </div>
                <div className="footer-about-content">
                  <p>UltraAura.Education - An AI enabled Edtech Company</p>
                </div>
                <div className="footer-contact-info">
                <div className="footer-address d-flex align-items-center mb-2">
                  <img src={Icon20} alt="" className="img-fluid me-2" />
                  <p>1509 Lady St, Columbia, SC 29201,<br /> United States</p>
                </div>
                <p className="mb-2">
                  <img src={Icon19} alt="" className="img-fluid me-2" />
                  info@ultraaura.education
                </p>
                <p className="mb-0">
                  <img src={Icon21} alt="" className="img-fluid me-2" />
                  1803-967-7715
                </p>
              </div>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Introduction</h2>
                <ul className="list-unstyled">
                  <li><Link to="/about-us">About</Link></li>
                  <li><Link to="/privacy-policy">Privacy-Policy</Link></li>
                  <li><Link to="/return-policy">Refund Policy</Link></li>
                  <li><Link to="/document">Documentation</Link></li>
                  <li><Link to="/chat-online">Chat Online</Link></li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Instructor</h2>
                <ul className="list-unstyled">
                  <li><Link to="/instructor/instructor-profile">Profile</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/instructor/instructor-list">Instructor</Link></li>
                  <li><Link to="/deposit-instructor-dashboard">Dashboard</Link></li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-md-3">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Student</h2>
                <ul className="list-unstyled">
                  <li><Link to="/student/students-profile">Profile</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/student/students-list">Student</Link></li>
                  <li><Link to="/deposit-student-dashboard">Dashboard</Link></li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
          </div>
          {/* Row 2 */}
          <div className="col-12">
            <div className="footer-widget footer-contact">
              <h2 className="footer-title">Newsletter</h2>
              <div className="news-letter mb-3">
                <form>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    name="email"
                  />
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Footer Top */}
  
    {/* Footer Bottom */}
    <div className="footer-bottom bg-light py-3">
      <div className="container">
        {/* Copyright */}
        <div className="copyright">
          <div className="row align-items-center">
            <div className="col-md-6 mb-2 mb-md-0">
              <div className="privacy-policy">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"><Link to="/term-condition">Terms</Link></li>
                  <li className="list-inline-item"><Link to="/privacy-policy">Privacy</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="copyright-text">
                <p className="mb-0">© 2024 UltraAura. All rights reserved.</p>
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
