import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import { Link } from "react-router-dom";
import { logo } from "../imagepath";

export const Footer2 = () => {
  return (
    <footer className="footer footer-two" data-aos="fade-up">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    consequat mauris Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut consequat mauris
                  </p>
                </div>
                <div className="social-icon">
                  <ul>
                    <li>
                      <Link to="#" target="_blank">
                        <Facebook size={14} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <Twitter size={14} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <Instagram size={14} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <Linkedin size={14} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu footer-menu-two">
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
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu footer-menu-two">
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
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-contact footer-contact-two">
                <h2 className="footer-title">Address</h2>
                <div className="footer-contact-widget">
                  <div className="footer-address">
                    <h6>Location</h6>
                    <p>
                      {" "}
                      3556 Beech Street, San Francisco,
                      <br /> California, CA 94108{" "}
                    </p>
                  </div>

                  <h6>Email Address</h6>
                  <p>
                    <Link to="mailto:dreamslms@example.com">
                      dreamslms@example.com
                    </Link>
                  </p>

                  <h6>Phone number</h6>
                  <p className="mb-0">
                    <Link to="tel:+191234567890">+19 123-456-7890</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="copyright-text">
                  <p className="mb-0">
                    &copy; 2023 DreamsLMS. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="privacy-policy">
                  <ul>
                    <li>
                      <Link to="term-condition">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link to="privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="support">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
