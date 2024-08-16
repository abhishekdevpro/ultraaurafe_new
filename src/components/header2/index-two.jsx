import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../imagepath";
import DarkMode from "../common/darkMode";
const Header2 = (activeMenu) => {
  // change header background on scroll
  const [navbar, setNavbar] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Mobile Menu Toggle
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
    document.body.classList.add("menu-opened");
  };
  const hideMobileMenu = () => {
    document.body.classList.remove("menu-opened");
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

  window.addEventListener("scroll", changeHeaderBackground);
  return (
    <header className="header header-two">
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
              <Link id="mobile_btn" to="#" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
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
                  to="#"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu menu-effect active">
                  <Link to="/home">
                    Home{" "}
                    <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu}
                    ></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="active">
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
                <Link to="/instructor/instructor-dashboard">
                  Instructor{" "}
                  <i
                    className="fas fa-chevron-down "
                    onClick={openMobileSubMenu2}
                  ></i>
                </Link>
                <ul
                  className={
                    mobileSubMenu2 ? "submenu submenuShow" : "submenu"
                  }
                >

                  <li
                    className={
                      activeMenu === "List" || activeMenu === "Grid"
                        ? "has-submenu active"
                        : "has-submenu"
                    }
                  >
                    <Link to="/instructor/instructor-list">
                      Instructor
                      <i
                        className=""
                        onClick={openMobileSubMenu22}
                      ></i>
                    </Link>
                    <ul
                      className={
                        mobileSubMenu22 ? "submenu submenuShow" : "submenu"
                      }
                    >
                      <li className={activeMenu === "List" ? "active" : ""}>
                        <Link to="/instructor/instructor-list" onClick={hideMobileMenu}>
                          List
                        </Link>
                      </li>
                      <li className={activeMenu === "Grid" ? "active" : ""}>
                        <Link to="/instructor/instructor-grid" onClick={hideMobileMenu}>
                          Grid
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={activeMenu === "Dashboard" ? "active" : ""}>
                    <Link to="/instructor/instructor-dashboard" onClick={hideMobileMenu}>
                      Dashboard
                    </Link>
                  </li>
                  <li className={activeMenu === "My Profile" ? "active" : ""}>
                    <Link to="/instructor/instructor-profiles" onClick={hideMobileMenu}>
                      My Profile
                    </Link>
                  </li>
                 
                  <li className={activeMenu === "My Course" ? "active" : ""}>
                    <Link to="/instructor/instructor-enrolled-course" onClick={hideMobileMenu}>
                      My Course
                    </Link>
                  </li>
                  <li className={activeMenu === "Wishlist" ? "active" : ""}>
                    <Link to="/instructor/instructor-wishlist" onClick={hideMobileMenu}>
                      Wishlist
                    </Link>
                  </li>
                  <li className={activeMenu === "Reviews" ? "active" : ""}>
                    <Link to="/instructor/instructor-reviews" onClick={hideMobileMenu}>
                      Reviews
                    </Link>
                  </li>
                  <li className={activeMenu === "My Quiz Attempts" ? "active" : ""}>
                    <Link to="/instructor/instructor-quiz" onClick={hideMobileMenu}>
                      My Quiz Attempts
                    </Link>
                  </li>
                  <li className={activeMenu === "Orders" ? "active" : ""}>
                    <Link
                      to="/instructor/instructor-orders"
                      onClick={hideMobileMenu}
                    >
                      Orders
                    </Link>
                  </li>
                  <li className={activeMenu === "Question & Answer" ? "active" : ""}>
                    <Link to="/instructor/instructor-qa" onClick={hideMobileMenu}>
                      Question & Answer
                    </Link>
                  </li>
                  <li
                    className={activeMenu === "Referrals" ? "active" : ""}
                  >
                    <Link
                      to="/instructor/instructor-referral"
                      onClick={hideMobileMenu}
                    >
                      Referrals
                    </Link>
                  </li>
                  <li
                    className={activeMenu === "Message" ? "active" : ""}
                  >
                    <Link
                      to="/instructor/instructor-chat"
                      onClick={hideMobileMenu}
                    >
                      Message
                    </Link>
                  </li>
                  <li
                  className={activeMenu === "Support Ticket" ? "active" : ""}
                >
                    <Link
                      to="/instructor/instructor-ticket"
                      onClick={hideMobileMenu}
                    >
                      Support Ticket
                    </Link>
                  </li>
                  <li className={activeMenu === "Notifications" ? "active" : ""}>
                    <Link
                      to="/instructor/instructor-notifications"
                      onClick={hideMobileMenu}
                    >
                      Notifications
                    </Link>
                  </li>
                  <li
                    className={activeMenu === "Settings" ? "active" : ""}
                  >
                    <Link
                      to="/instructor/instructor-settings"
                      onClick={hideMobileMenu}
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/student/students-list">
                  Student{" "}
                  <i
                    className="fas fa-chevron-down"
                    onClick={openMobileSubMenu3}
                  ></i>
                </Link>
                <ul
                  className={
                    mobileSubMenu3
                      ? "submenu first-submenu submenuShow"
                      : "submenu first-submenu"
                  }
                >
                  <li
                    className={
                      activeMenu === "List" || activeMenu === "Grid1"
                        ? "has-submenu active"
                        : "has-submenu"
                    }
                  >
                    <Link to="/student/students-list">
                      Student
                      <i
                        className=""
                        onClick={openMobileSubMenu32}
                      ></i>
                    </Link>
                    <ul
                      className={
                        mobileSubMenu32 ? "submenu submenuShow" : "submenu"
                      }
                    >
                      <li className={activeMenu === "List" ? "active" : ""}>
                        <Link to="/student/students-list" onClick={hideMobileMenu}>
                          List
                        </Link>
                      </li>
                      <li className={activeMenu === "Grid1" ? "active" : ""}>
                        <Link to="/student/students-grid" onClick={hideMobileMenu}>
                          Grid
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={activeMenu === "Dashboard" ? "active" : ""}>
                    <Link to="/student/student-dashboard" onClick={hideMobileMenu}>
                      Student Dashboard
                    </Link>
                  </li>
                  <li className={activeMenu === "My Profile" ? "active" : ""}>
                    <Link
                      to="/student/student-profile"
                      onClick={hideMobileMenu}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li
                    className={activeMenu === "Enrolled Courses" ? "active" : ""}
                  >
                    <Link
                      to="/student/student-courses"
                      onClick={hideMobileMenu}
                    >
                      Enrolled Courses
                    </Link>
                  </li>
                  <li
                    className={activeMenu === "Wishlist" ? "active" : ""}
                  >
                    <Link
                      to="/student/student-wishlist"
                      onClick={hideMobileMenu}
                    >
                    Wishlist
                    </Link>
                  </li>
                  <li
                    className={activeMenu === "Reviews" ? "active" : ""}
                  >
                    <Link
                      to="/student/student-reviews"
                      onClick={hideMobileMenu}
                    >
                    Reviews
                    </Link>
                  </li>
                  <li className={activeMenu === "My Quiz Attempts" ? "active" : ""}>
                    <Link
                      to="/student/student-quiz"
                      onClick={hideMobileMenu}
                    >
                     My Quiz Attempts
                    </Link>
                  </li>

                  <li className={activeMenu === "Orders" ? "active" : ""}>
                    <Link
                      to="/student/student-order-history"
                      onClick={hideMobileMenu}
                    >
                     Orders
                    </Link>
                  </li>
                  <li className={activeMenu === "Question & Answer" ? "active" : ""}>
                    <Link
                      to="/student/student-qa"
                      onClick={hideMobileMenu}
                    >
                      Question & Answer
                    </Link>
                  </li>
                  <li
                    className={activeMenu === "Referrals" ? "active" : ""}
                  >
                    <Link
                      to="/student/student-referral"
                      onClick={hideMobileMenu}
                    >
                      Referrals
                    </Link>
                  </li>
                  <li className={activeMenu === "Messages" ? "active" : ""}>
                    <Link
                      to="/student/student-messages"
                      onClick={hideMobileMenu}
                    >
                      Messages
                    </Link>
                  </li>
                  <li className={activeMenu === "Support Ticket" ? "active" : ""}>
                    <Link
                      to="/student/student-tickets"
                      onClick={hideMobileMenu}
                    >
                      Support Ticket
                    </Link>
                  </li>
                  <li className={activeMenu === "Settings" ? "active" : ""}>
                    <Link
                      to="/student/student-setting"
                      onClick={hideMobileMenu}
                    >
                      Settings
                    </Link>
                  </li>
                 
                </ul>
              </li>
                <li className="has-submenu menu-effect">
                  <Link to="/home">
                    Pages{" "}
                    <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu4}
                    ></i>
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
                        Course{" "}
                        <i
                          className=""
                          onClick={openMobileSubMenu42}
                        ></i>
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
                        Error{" "}
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
                          <Link to="/come-soon">Comeing soon</Link>
                        </li>
                        <li>
                          <Link to="/error-400">404</Link>
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
                      <Link to="/fsq">FAQ</Link>
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
                <li className="has-submenu menu-effect">
                  <Link to="/blog-list">
                    Blog{" "}
                    <i
                      className="fas fa-chevron-down"
                      onClick={openMobileSubMenu5}
                    ></i>
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
                <Link className="login-head button" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="signin-head" to="/register">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
