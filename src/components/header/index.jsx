import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../imagepath";
import DarkMode from "../common/darkMode";

const Header = () => {
  useEffect(() => {
    document.body?.classList?.remove("menu-opened");
    return () => {
      document.body.className = "";
    };
  }, []);

  // change header background on scroll
  const [navbar, setNavbar] = useState(false);
  // Mobile Menu toggle
  const [mobileSubMenu, setMobileSubMenu] = useState(false);
  const [mobileSubMenu2, setMobileSubMenu2] = useState(false);
  const [mobileSubMenu22, setMobileSubMenu22] = useState(false);
  const [mobileSubMenu3, setMobileSubMenu3] = useState(false);
  const [mobileSubMenu32, setMobileSubMenu32] = useState(false);
  const [mobileSubMenu4, setMobileSubMenu4] = useState(false);
  const [mobileSubMenu42, setMobileSubMenu42] = useState(false);
  const [mobileSubMenu43, setMobileSubMenu43] = useState(false);
  const [mobileSubMenu5, setMobileSubMenu5] = useState(false);

  const openMobileMenu = () => {
    document.body?.classList?.add("menu-opened");
  };
  const hideMobileMenu = () => {
    document.body?.classList?.remove("menu-opened");
  };

  const openMobileSubMenu = (e) => {
    e.preventDefault();
    setMobileSubMenu(!mobileSubMenu);
  };
  const openMobileSubMenu2 = (e) => {
    e.preventDefault();
    setMobileSubMenu2(!mobileSubMenu2);
  };
  const openMobileSubMenu22 = (e) => {
    e.preventDefault();
    setMobileSubMenu22(!mobileSubMenu22);
  };
  const openMobileSubMenu3 = (e) => {
    e.preventDefault();
    setMobileSubMenu3(!mobileSubMenu3);
  };
  const openMobileSubMenu32 = (e) => {
    e.preventDefault();
    setMobileSubMenu32(!mobileSubMenu32);
  };
  const openMobileSubMenu4 = (e) => {
    e.preventDefault();
    setMobileSubMenu4(!mobileSubMenu4);
  };
  const openMobileSubMenu42 = (e) => {
    e.preventDefault();
    setMobileSubMenu42(!mobileSubMenu42);
  };
  const openMobileSubMenu43 = (e) => {
    e.preventDefault();
    setMobileSubMenu43(!mobileSubMenu43);
  };
  const openMobileSubMenu5 = (e) => {
    e.preventDefault();
    setMobileSubMenu5(!mobileSubMenu5);
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);
  return (
    <header className="header">
      <div className="header-fixed">
        <nav
          className={
            navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container">
            <div className="navbar-header">
              <Link id="mobile_btn" to="/home" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="/home"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu active">
                  <Link
                    className={mobileSubMenu ? "submenu" : ""}
                    to="/home"
                    onClick={openMobileSubMenu}
                  >
                    Home <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li className="active">
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/home2">Home Two</Link>
                    </li>
                    <li>
                      <Link to="/home3">Home Three</Link>
                    </li>
                    <li>
                      <Link to="/home4">Home Four</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/home" onClick={openMobileSubMenu2}>
                    Instructor <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu2 ? "submenu submenuShow" : "submenu"
                    }
                  >

                    <li className="has-submenu">
                      <Link to="/instructor/instructor-list">
                        Instructor
                        <i
                          // className=""
                          onClick={openMobileSubMenu22}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu22 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/instructor/instructor-list">List</Link>
                        </li>
                        <li>
                          <Link to="/instructor/instructor-grid">Grid</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-course">My Profile</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-reviews">My Cources</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-earnings">Wishlist</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-orders">Reviews</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-payouts">My Quiz Attempts</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-tickets">Orders</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-edit-profile">
                        Question and Answer
                      </Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-security">Referrals</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-chat">
                        Message
                      </Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-notifications">Support Ticket</Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-profile-privacy">
                        Notification
                      </Link>
                    </li>
                    <li>
                      <Link to="/instructor/instructor-delete-profile">
                        Settings
                      </Link>
                    </li>

                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/student/students-list" onClick={openMobileSubMenu3}>
                    Student <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu3
                        ? "submenu first-submenu submenuShow"
                        : "submenu first-submenu"
                    }
                  >
                    <li className="has-submenu ">
                      <Link to="/student/students-list">
                        Student
                        <i
                          // className=""
                          onClick={openMobileSubMenu32}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu32 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/student/students-list">List</Link>
                        </li>
                        <li>
                          <Link to="/student/students-grid">Grid</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/setting-edit-profile">Student Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-security">My Profile</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-social-profile">
                        Enrolled Cources
                      </Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-notification">
                        Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-privacy">Reviews</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-accounts">My Quiz Attempts</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-referral">Orders</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-subscription">
                        Question and Answer
                      </Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-billing">Refferals</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-student-payment">Message</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-support-tickets">Support Tickets</Link>
                    </li>
                    <li>
                      <Link to="/student/setting-support-tickets">Settings</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/home" onClick={openMobileSubMenu4}>
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu4 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/page-notification">Notification</Link>
                    </li>
                    <li>
                      <Link to="/pricing-plan">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/course-list">
                        Course
                        <i
                          className=""
                          onClick={openMobileSubMenu42}
                        />
                      </Link>
                      <ul
                        className={
                          mobileSubMenu42 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/add-course">Add Course</Link>
                        </li>
                        <li>
                          <Link to="/course-list">Course List</Link>
                        </li>
                        <li>
                          <Link to="/course-grid">Course Grid</Link>
                        </li>
                        <li>
                          <Link to="/course-details">Course Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">
                        Error
                        <i
                          className=""
                          onClick={openMobileSubMenu43}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu43 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/come-soon">Coming soon</Link>
                        </li>
                        <li>
                          <Link to="/error-404">404</Link>
                        </li>
                        <li>
                          <Link to="/error-500">500</Link>
                        </li>
                        <li>
                          <Link to="/under-construction">
                            Under Construction
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/support">Support</Link>
                    </li>
                    <li>
                      <Link to="/job-category">Category</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/forgot-password">Forgot Password</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/blog-list" onClick={openMobileSubMenu5}>
                    Blog <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu5 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/blog-list">Blog List</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                      <Link to="/blog-masonry">Blog Masonry</Link>
                    </li>
                    <li>
                      <Link to="/blog-modern">Blog Modern</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <DarkMode/>
              <li className="nav-item">
                <Link className="nav-link header-sign" to="/login">
                  Signin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="/register">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
