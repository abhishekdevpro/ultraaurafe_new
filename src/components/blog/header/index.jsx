import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../imagepath";

// eslint-disable-next-line react/prop-types
const BlogHeader = ({ activeMenu }) => {
  // change header background on scroll
  const [navbar, setNavbar] = useState(false);
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
    <>
      <div className="main-wrapper">
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
                  <Link id="mobile_btn" to="#" onClick={openMobileMenu}>
                    <span className="bar-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </Link>
                  <Link to="#" className="navbar-brand logo">
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
                      <Link to="#" className={mobileSubMenu ? "submenu" : ""}>
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
                        <li>
                          <Link
                            to="/instructor/instructor-dashboard"
                            onClick={hideMobileMenu}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li className="has-submenu ">
                          <Link to="/instructor/instructor-list">
                            Instructor
                            <i
                              className=""
                              onClick={openMobileSubMenu22}
                            ></i>
                          </Link>
                          <ul
                            className={
                              mobileSubMenu22
                                ? "submenu submenuShow"
                                : "submenu"
                            }
                          >
                            <li>
                              <Link
                                to="/instructor/instructor-list"
                                onClick={hideMobileMenu}
                              >
                                List
                              </Link>
                            </li>
                            <li
                              className={activeMenu === "Grid" ? "active" : ""}
                            >
                              <Link
                                to="/instructor/instructor-grid"
                                onClick={hideMobileMenu}
                              >
                                Grid
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={activeMenu === "Courses" ? "active" : ""}
                        >
                          <Link
                            to="/instructor/instructor-course"
                            onClick={hideMobileMenu}
                          >
                            My Course
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Reviews" ? "active" : ""}
                        >
                          <Link
                            to="/instructor/instructor-reviews"
                            onClick={hideMobileMenu}
                          >
                            Reviews
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Earnings" ? "active" : ""}
                        >
                          <Link
                            to="/instructor/instructor-earnings"
                            onClick={hideMobileMenu}
                          >
                            Earnings
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
                        <li
                          className={activeMenu === "Payouts" ? "active" : ""}
                        >
                          <Link
                            to="/instructor/instructor-payouts"
                            onClick={hideMobileMenu}
                          >
                            Payouts
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Tickets" ? "active" : ""}
                        >
                          <Link
                            to="/instructor/instructor-tickets"
                            onClick={hideMobileMenu}
                          >
                            Support Ticket
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Profile" ? "active" : ""}
                        >
                          <Link
                            to="/instructor/instructor-profile"
                            onClick={hideMobileMenu}
                          >
                            Instructor Profile
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Security" ? "active" : ""}
                        >
                          <Link
                            to="/instructor/instructor-security"
                            onClick={hideMobileMenu}
                          >
                            Security
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === "SocialProfile" ? "active" : ""
                          }
                        >
                          <Link
                            to="/instructor/instructor-social-profile"
                            onClick={hideMobileMenu}
                          >
                            Social Profiles
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === "Notification" ? "active" : ""
                          }
                        >
                          <Link
                            to="/instructor/instructor-notifications"
                            onClick={hideMobileMenu}
                          >
                            Notifications
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/instructor/instructor-profile-privacy"
                            onClick={hideMobileMenu}
                          >
                            Profile Privacy
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/instructor/instructor-delete-profile"
                            onClick={hideMobileMenu}
                          >
                            Delete Profile
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === "LinkedAccount" ? "active" : ""
                          }
                        >
                          <Link
                            to="/instructor/instructor-linked-account"
                            onClick={hideMobileMenu}
                          >
                            Linked Accounts
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
                        <li className="has-submenu ">
                          <Link to="/student/students-list">
                            Student
                            <i
                              className=""
                              onClick={openMobileSubMenu32}
                            ></i>
                          </Link>
                          <ul
                            className={
                              mobileSubMenu32
                                ? "submenu submenuShow"
                                : "submenu"
                            }
                          >
                            <li>
                              <Link
                                to="/student/students-list"
                                onClick={hideMobileMenu}
                              >
                                List
                              </Link>
                            </li>
                            <li
                              className={activeMenu === "Grid1" ? "active" : ""}
                            >
                              <Link
                                to="/student/students-grid"
                                onClick={hideMobileMenu}
                              >
                                Grid
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={
                            activeMenu === "EditProfile" ? "active" : ""
                          }
                        >
                          <Link
                            to="/setting-edit-profile"
                            onClick={hideMobileMenu}
                          >
                            Student Profile
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Security" ? "active" : ""}
                        >
                          <Link
                            to="/student/setting-student-security"
                            onClick={hideMobileMenu}
                          >
                            Security
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === "SocialProfile" ? "active" : ""
                          }
                        >
                          <Link
                            to="/student/setting-student-social-profile"
                            onClick={hideMobileMenu}
                          >
                            Social profile
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === "Notification" ? "active" : ""
                          }
                        >
                          <Link
                            to="/student/setting-student-notification"
                            onClick={hideMobileMenu}
                          >
                            Notification
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Privacy" ? "active" : ""}
                        >
                          <Link
                            to="/student/setting-student-privacy"
                            onClick={hideMobileMenu}
                          >
                            Profile Privacy
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Accounts" ? "active" : ""}
                        >
                          <Link
                            to="/student/setting-student-accounts"
                            onClick={hideMobileMenu}
                          >
                            Link Accounts
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Referral" ? "active" : ""}
                        >
                          <Link
                            to="/student/setting-student-referral"
                            onClick={hideMobileMenu}
                          >
                            Referal
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === "Subscription" ? "active" : ""
                          }
                        >
                          <Link
                            to="/student/setting-student-subscription"
                            onClick={hideMobileMenu}
                          >
                            Subscription
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Billing" ? "active" : ""}
                        >
                          <Link
                            to="/student/setting-student-billing"
                            onClick={hideMobileMenu}
                          >
                            Billing
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Payment" ? "active" : ""}
                        >
                          <Link
                            to="/student/setting-student-payment"
                            onClick={hideMobileMenu}
                          >
                            Payment
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Invoice" ? "active" : ""}
                        >
                          <Link
                            to="/student/setting-student-invoice"
                            onClick={hideMobileMenu}
                          >
                            Invoice
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/student/setting-support-tickets"
                            onClick={hideMobileMenu}
                          >
                            Support Tickets
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">
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
                        <li
                          className={
                            activeMenu === "PageNotification" ? "active" : ""
                          }
                        >
                          <Link
                            to="/page-notification"
                            onClick={hideMobileMenu}
                          >
                            Notification
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === "PricingPlan" ? "active" : ""
                          }
                        >
                          <Link to="/pricing-plan" onClick={hideMobileMenu}>
                            Pricing Plan
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "WishList" ? "active" : ""}
                        >
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
                              mobileSubMenu42
                                ? "submenu submenuShow"
                                : "submenu"
                            }
                          >
                            <li
                              className={
                                activeMenu === "AddCourse" ? "active" : ""
                              }
                            >
                              <Link to="/add-course" onClick={hideMobileMenu}>
                                Add Course
                              </Link>
                            </li>
                            <li
                              className={
                                activeMenu === "CourseList" ? "active" : ""
                              }
                            >
                              <Link to="/course-list" onClick={hideMobileMenu}>
                                Course List
                              </Link>
                            </li>
                            <li
                              className={
                                activeMenu === "CourseGrid" ? "active" : ""
                              }
                            >
                              <Link to="/course-grid" onClick={hideMobileMenu}>
                                Course Grid
                              </Link>
                            </li>
                            <li
                              className={
                                activeMenu === "CourseDetails" ? "active" : ""
                              }
                            >
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
                              mobileSubMenu43
                                ? "submenu submenuShow"
                                : "submenu"
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
                        <li className={activeMenu === "Faq" ? "active" : ""}>
                          <Link to="/faq" onClick={hideMobileMenu}>
                            FAQ
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Support" ? "active" : ""}
                        >
                          <Link to="/support" onClick={hideMobileMenu}>
                            Support
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === "JobCategory" ? "active" : ""
                          }
                        >
                          <Link to="/job-category" onClick={hideMobileMenu}>
                            Category
                          </Link>
                        </li>
                        <li className={activeMenu === "Cart" ? "active" : ""}>
                          <Link to="/cart" onClick={hideMobileMenu}>
                            Cart
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Checkout" ? "active" : ""}
                        >
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
                    <li className="has-submenu active">
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
                        <li className={activeMenu === "List" ? "active" : ""}>
                          <Link to="/blog-list" onClick={hideMobileMenu}>
                            Blog List
                          </Link>
                        </li>
                        <li className={activeMenu === "Grid" ? "active" : ""}>
                          <Link to="/blog-grid" onClick={hideMobileMenu}>
                            Blog Grid
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Masonry" ? "active" : ""}
                        >
                          <Link to="/blog-masonry" onClick={hideMobileMenu}>
                            Blog Masonry
                          </Link>
                        </li>
                        <li className={activeMenu === "Modern" ? "active" : ""}>
                          <Link to="/blog-modern" onClick={hideMobileMenu}>
                            Blog Modern
                          </Link>
                        </li>
                        <li
                          className={activeMenu === "Details" ? "active" : ""}
                        >
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
      </div>
    </>
  );
};

export default BlogHeader;
