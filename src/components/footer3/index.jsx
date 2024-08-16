import React from "react";
import { Facebook, Linkedin, Twitter, Youtube } from "react-feather";
import { Link } from "react-router-dom";
import { logoPng } from "../imagepath";

export const Footer3 = () => {
  return (
    <footer className="footer footer-three">
      {/* Footer Top */}
      <div className="footer-three-top" data-aos="fade-up">
        <div className="container">
          <div className="footer-three-top-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                {/* Footer Widget */}
                <div className="footer-widget-three footer-about">
                  <div className="footer-three-logo">
                    <img className="img-fluid" src={logoPng} alt="logo" />
                  </div>
                  <div className="footer-three-about">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit nulla gravida ut elit arcu egestas felis. Scelerisque
                      at in magna dolor massa ipsum arcu lacus. Lobortis posuere
                      justo nunc diam ac massa. Maecenas tellus adipiscing ac
                      fames ut ac posuere. Aliquam, integer proin hendrerit
                      euismod et.{" "}
                    </p>
                  </div>
                  <div className="newsletter-title">
                    <h6>Get Updates</h6>
                  </div>
                  <div className="box-form-newsletter">
                    <form className="form-newsletter">
                      {/* <img className="emailSvg" src={EmailSvg} alt="" /> */}
                      <input
                        className="input-newsletter"
                        type="text"
                        placeholder="Enter your email here"
                      />
                      <button className="btn btn-default font-heading icon-send-letter">
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
                {/* Footer Widget */}
              </div>

              <div className="col-lg-3 col-md-3 col-12">
                {/* Footer Widget */}
                <div className="footer-widget-three footer-menu-three footer-three-right">
                  <h6 className="footer-three-title">For Instructor</h6>
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

              <div className="col-lg-3 col-md-3 col-12">
                {/* Footer Widget */}
                <div className="footer-widget-three footer-menu-three">
                  <h6 className="footer-three-title">For Student</h6>
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
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top */}

      {/* Footer Bottom */}
      <div className="footer-three-bottom" data-aos="fade-up">
        <div className="container">
          {/* Copyright */}
          <div className="copyright-three">
            <div className="row">
              <div className="col-md-12">
                <div className="social-icon-three">
                  <h6>Connect Socially</h6>
                  <ul>
                    <li>
                      <Link
                        to="/home"
                        target="_blank"
                        className="feather-facebook-icon"
                      >
                        <Facebook size={14} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/home"
                        target="_blank"
                        className="feather-twitter-icon"
                      >
                        <Twitter size={14} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/home"
                        target="_blank"
                        className="feather-linkedin-icon"
                      >
                        <Linkedin size={14} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/home"
                        target="_blank"
                        className="feather-youtube-icon"
                      >
                        <Youtube size={14} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="privacy-policy-three">
                  <ul>
                    <li>
                      <Link to="/term-condition">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/support">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text-three">
                  <p className="mb-0">
                    &copy; 2023 DreamsLMS. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
        </div>
      </div>
      {/* Footer Bottom */}
    </footer>
  );
};
