import React from "react";
import { MapPin } from "react-feather";
import { Link } from "react-router-dom";
import { FooterLeft, FooterRight, logoFiveSvg } from "../imagepath";

export const Footer4 = () => {
  return (
    <footer className="footer footer-five">
      {/* Footer Top */}
      <div className="footer-top-five">
        <div className="container">
          <div className="footer-five-left">
            <img src={FooterLeft} alt="" />
          </div>

          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              {/* Footer Widget */}
              <div className="footer-contact footer-menu-five">
                <h2 className="footer-title footer-title-five">Get in touch</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <MapPin size={16} />
                    </span>
                    <p>
                      {" "}
                      3556 Beech Street, San Francisco,
                      <br /> California, CA 94108{" "}
                    </p>
                  </div>
                  <p className="mb-0">
                    <span className="phone-icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    +19 123-456-7890
                  </p>
                </div>
              </div>
              {/* Footer Widget */}
            </div>

            <div className="col-lg-2 col-md-3 col-sm-12">
              {/* Footer Widget */}
              <div className="footer-menu footer-menu-five">
                <h2 className="footer-title footer-title-five">
                  <i className="fa-sharp fa-solid fa-dash"></i>For Instructor
                </h2>
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
              {/* Footer Widget */}
            </div>

            <div className="col-lg-2 col-md-3 col-sm-12">
              {/* Footer Widget */}
              <div className="footer-menu footer-menu-five">
                <h2 className="footer-title footer-title-five">For Student</h2>
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
              {/* Footer Widget */}
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <h2 className="footer-title footer-title-five">
                Get More Updates
              </h2>
              {/* Footer Widget */}
              <div className="footer-widget-five">
                <div className="footer-news-five">
                  <form>
                    <div className="input-block mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email Address"
                      />
                      <button type="submit" className="btn btn-one">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
                <div className="footer-about-five">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    consequat mauris Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut consequat mauris
                  </p>
                </div>
              </div>
              {/* Footer Widget */}
            </div>
          </div>

          <div className="footer-five-right">
            <img src={FooterRight} alt="" />
          </div>
        </div>
      </div>
      {/* Footer Top */}

      {/* Footer Bottom */}
      <div className="footer-bottom footer-bottom-five">
        <div className="container">
          {/* Copyright */}
          <div className="copyright-five">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="footer-logo-five">
                  <Link to="/home">
                    <img
                      src={logoFiveSvg}
                      className="img-fluid"
                      alt="Footer Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="copyright-text">
                  <p>&copy; 2023 DreamsLMS. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="social-icon-five">
                  <ul className="nav">
                    <li>
                      <Link to="/home" target="_blank" className="twitter-icon">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/home" target="_blank" className="linked-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/home" target="_blank" className="facebook-icon">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/home" target="_blank" className="youtube-icon">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
        </div>
      </div>
      {/* Footer Bottom */}
      {/* Footer Bottom */}
    </footer>
  );
};
