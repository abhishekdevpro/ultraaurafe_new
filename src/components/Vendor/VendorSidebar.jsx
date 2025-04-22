import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { Link, useLocation} from "react-router-dom";
import vendorLogo from "../../assets/img/profile-pro.png"; // Placeholder logo for vendor
import axios from "axios";

export default function VendorSidebar() {
  const location = useLocation();
  const [profile, setProfileData] = useState("");

  const token = localStorage.getItem("vendorToken");

  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/vendors/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setProfileData(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        if(error.response && error.response.status == 401){
          window.location.href = '/login'
        }
      });
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('vendorToken');
    window.location.href = '/partner-signin'
  };


  return (
    <div className=" theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className="settings-widget dash-profile">
          <div className="settings-menu">
            <div className="profile-bg">
              <div className="profile-img">
                <Link to="/vendor/vendor-profile">
                  <img
                    src={
                      profile.photo
                        ? `https://api.novajobs.us/${profile.photo}`
                        : vendorLogo
                    }
                    alt="Profile"
                    className="img-fluid"
                  />
                </Link>
                <p> Company Logo </p>
              </div>
            </div>
            <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="/vendor/vendor-profile">
                    {profile.first_name} {profile.last_name}
                  </Link>
                </h4>
                <p>Vendor</p>
                <Link
                  to="/vendor/add-course"
                  className="add-course btn-primary"
                >
                  Add New Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-widget account-settings">
          <div className="settings-menu">
            <h3>Dashboard</h3>
            <ul>
              <li
                className={`nav-item ${
                  location.pathname === "/vendor/vendor-dashboard"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/vendor/vendor-dashboard" className="nav-link">
                  <i className="bx bxs-tachometer" />
                  Dashboard
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/vendor-setting" ? "active" : ""
                }`}
              >
                <Link to="/vendor/vendor-profile" className="nav-link">
                  <i className="bx bxs-user" />
                  My Profile
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/vendor/vendor-products"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="" className="nav-link">
                  <i className="bx bxs-box" />
                  My Courses
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/vendor/vendor-orders" ? "active" : ""
                }`}
              >
                <Link to="" className="nav-link">
                  <i className="bx bxs-cart" />
                  Order History
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/vendor/vendor-reviews" ? "active" : ""
                }`}
              >
                <Link to="" className="nav-link">
                  <i className="bx bxs-star" />
                  Reviews
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/vendor/vendor-liveclass" ? "active" : ""
                }`}
              >
                <Link to="/vendor/vendor-liveclass" className="nav-link">
                  <i className="bx bxs-video" />
                  Schedule Live Classes
                </Link>
              </li>
              {/* <li className={`nav-item ${location.pathname === '/vendor/vendor-withdrawals' ? 'active' : ''}`}>
                <Link to="" className="nav-link">
                  <i className="bx bxs-wallet" />
                  Withdrawals
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/vendor/vendor-support' ? 'active' : ''}`}>
                <Link to="" className="nav-link">
                  <i className="bx bxs-help-circle" />
                  Support Tickets
                </Link>
              </li> */}
              <li className="nav-item">
                <a href="mailto:info@ultraaura.education" className="nav-link">
                  <i className="bx bxs-envelope" />
                  Contact Us
                </a>
              </li>
            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li
                className={`nav-item ${
                  location.pathname === "/vendor/vendor-settings"
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/vendor/vendor-setting" className="nav-link">
                  <i className="bx bxs-cog" />
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" onClick={handleLogout}>
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
