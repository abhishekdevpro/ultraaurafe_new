import React from "react";
import StickyBox from "react-sticky-box";
import { User16 } from "../../imagepath";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function StudentSidebar() {
  const location = useLocation();

  return (
    <div className="col-xl-3 col-lg-3 theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className="settings-widget dash-profile">
          <div className="settings-menu">
            <div className="profile-bg">
              <div className="profile-img">
                <Link to="/student/student-profile">
                  <img src={User16} alt="Img" />
                </Link>
              </div>
            </div>
            <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="/student/student-profile">Rolands Richard</Link>
                </h4>
                <p>Student</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="settings-widget account-settings">
          <div className="settings-menu">
            <h3>Dashboard</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/student/student-dashboard' ? 'active' : ''}`}>

                <Link to="/student/student-dashboard" className="nav-link">
                  <i className="bx bxs-tachometer" />
                  Dashboard
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-profile' ? 'active' : ''}`}>

                <Link to="/student/student-profile" className="nav-link">
                  <i className="bx bxs-user" />
                  My Profile
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-courses' ? 'active' : ''}`}>
                <Link
                  to="/student/student-courses"
                  className="nav-link"
                >
                  <i className="bx bxs-graduation" />
                  Enrolled Courses
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-wishlist' || location.pathname === '/student/student-quiz-details' ? 'active' : ''}`}>

                <Link to="/student/student-wishlist" className="nav-link">
                  <i className="bx bxs-heart" />
                  Wishlist
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-reviews' ? 'active' : ''}`}>

                <Link to="/student/student-reviews" className="nav-link">
                  <i className="bx bxs-star" />
                  Reviews
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-quiz' ? 'active' : ''}`}>

                <Link to="/student/student-quiz" className="nav-link">
                  <i className="bx bxs-shapes" />
                  My Quiz Attempts
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-order-history' ? 'active' : ''}`}>
                <Link to="/student/student-order-history" className="nav-link">
                  <i className="bx bxs-cart" />
                  Order History
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-qa' ? 'active' : ''}`}>

                <Link to="/student/student-qa" className="nav-link">
                  <i className="bx bxs-bookmark-alt" />
                  Question &amp; Answer
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-referral' ? 'active' : ''}`}>

                <Link to="/student/student-referral" className="nav-link">
                  <i className="bx bxs-user-plus" />
                  Referrals
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-messages' ? 'active' : ''}`}>
                <Link to="/student/student-messages" className="nav-link">
                  <i className="bx bxs-chat" />
                  Messages
                </Link>
              </li>

              <li className={`nav-item ${location.pathname === '/student/student-ticket' ? 'active' : ''}`}>

                <Link to="/student/student-ticket" className="nav-link">
                  <i className="bx bxs-coupon" />
                  Support Tickets
                </Link>
              </li>
            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/student/student-setting' || location.pathname === '/student/student-change-password' || location.pathname === '/student/student-social-profile' || location.pathname === '/student/student-linked-accounts' || location.pathname === '/student/student-notification' ? 'active' : ''}`}>
                <Link to="/student/student-setting" className="nav-link ">
                  <i className="bx bxs-cog" />
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  <i className="bx bxs-log-out" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </StickyBox>
    </div>
  );
}
