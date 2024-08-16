/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Home, LogOut, Moon, Star } from "react-feather";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import {
  logo,
  ProfileAvatar,
  User15,
  User17,
} from "../../imagepath";
import DarkMode from "../../common/darkMode";
// eslint-disable-next-line react/prop-types
export function InstructorHeader({ activeMenu }) {
  console.log(activeMenu === "Dashboard", "activeMenu");
  const [navbar, setNavbar] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Mobile Menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);
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
    setMobileMenu(true);
  };
  const hideMobileMenu = () => {
    document.body.classList.remove("menu-opened");
    setMobileMenu(false);
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
  // To close the modal, when clicked outside anywhere
  const cart = useRef();
  useOnClickOutside(cart, () => setShowCart(false));

  const wish = useRef();
  useOnClickOutside(wish, () => setShowWish(false));

  const notification = useRef();
  useOnClickOutside(notification, () => setShowNotification(false));

  const profile = useRef();
  useOnClickOutside(profile, () => setShowProfile(false));

  // Cart Click
  const cartClick = (e) => {
    e.preventDefault();
    // if (showWish) {
    //   setShowWish(false);
    // }
    setShowCart(!showCart);
    console.log(showCart);
  };

  const wishClick = (e) => {
    e.preventDefault();
    // if (showCart) {
    //   setShowCart(false);
    // }
    setShowWish(!showWish);
  };

  const notificationClick = (e) => {
    e.preventDefault();
    setShowNotification(!showNotification);
  };
  const profileClick = (e) => {
    e.preventDefault();
    setShowProfile(!showProfile);
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <header className="header header-page">
      <div className="header-fixed">
        <nav
          className={
            navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container ">
            <div className="navbar-header">
              <Link
                id="mobile_btn"
                to="#"
                onClick={openMobileMenu}
              >
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
                <li className="has-submenu">
                  <Link to="/home" className={mobileSubMenu ? "submenu" : ""}>
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
                <li className="has-submenu active">
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
                <li className="has-submenu">
                  <Link to="">
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
                      <Link to="/page-notification" onClick={hideMobileMenu}>
                        Notification
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing-plan" onClick={hideMobileMenu}>
                        Pricing Plan
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist" onClick={hideMobileMenu}>
                        Wishlist
                      </Link>
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
                          <Link to="/add-course" onClick={hideMobileMenu}>
                            Add Course
                          </Link>
                        </li>
                        <li>
                          <Link to="/course-list" onClick={hideMobileMenu}>
                            Course List
                          </Link>
                        </li>
                        <li>
                          <Link to="/course-grid" onClick={hideMobileMenu}>
                            Course Grid
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/course-details"
                            onClick={hideMobileMenu}
                          >
                            Course Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="/come-soon">
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
                          <Link to="/come-soon" onClick={hideMobileMenu}>
                            Coming soon
                          </Link>
                        </li>
                        <li>
                          <Link to="/error-404" onClick={hideMobileMenu}>
                            404
                          </Link>
                        </li>
                        <li>
                          <Link to="/error-500" onClick={hideMobileMenu}>
                            500
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/under-construction"
                            onClick={hideMobileMenu}
                          >
                            Under Construction
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/faq" onClick={hideMobileMenu}>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" onClick={hideMobileMenu}>
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/job-category" onClick={hideMobileMenu}>
                        Category
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" onClick={hideMobileMenu}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/checkout" onClick={hideMobileMenu}>
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" onClick={hideMobileMenu}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" onClick={hideMobileMenu}>
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to="/forgot-password" onClick={hideMobileMenu}>
                        Forgot Password
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
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
                      <Link to="/blog-list" onClick={hideMobileMenu}>
                        Blog List
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-grid" onClick={hideMobileMenu}>
                        Blog Grid
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-masonry" onClick={hideMobileMenu}>
                        Blog Masonry
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-modern" onClick={hideMobileMenu}>
                        Blog Modern
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" onClick={hideMobileMenu}>
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="login-link">
                  <Link to="/login" onClick={hideMobileMenu}>
                    Login / Signup
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
            <DarkMode />
              <li className="nav-item user-nav">
                <Link
                  to="#"
                  className={
                    showProfile ? "dropdown-toggle show" : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                  onClick={profileClick}
                >
                  <span className="user-img">
                    <img src={User17} alt="" />
                    <span className="status online"></span>
                  </span>
                </Link>
                <div
                  ref={profile}
                  className={
                    showProfile
                      ? "users dropdown-menu dropdown-menu-right show modalPosition"
                      : "users dropdown-menu dropdown-menu-right"
                  }
                  data-popper-placement="bottom-end"
                >
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={User17}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Eugene Andre</h6>
                      <p className="text-muted text mb-0">Instructor</p>
                    </div>
                  </div>
                  <Link
                    className="dropdown-item"
                    to="/instructor/instructor-dashboard"
                  >
                    <Home size={14} color={"#FF875A"} className="feather-home me-1" />{" "}
                    Dashboard
                  </Link>
                  <Link
                    className="dropdown-item text"
                    to="/instructor/instructor-settings"
                  >
                    <Star size={14} color={"#FF875A"} className="feather-star me-1" />{" "}
                    Edit Profile
                  </Link>
                  
                  <Link className="dropdown-item text" to="/home">
                    <LogOut
                      size={14}
                      color={"#FF875A"}
                      className="headerIcon me-1"
                    />{" "}
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={mobileMenu ? "sidebar-overlay opened" : "sidebar-overlay"}
        ></div>
      </div>
    </header>
  );
}
