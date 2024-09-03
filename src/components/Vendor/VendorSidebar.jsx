import React from "react";
import StickyBox from "react-sticky-box";
import { Link, useLocation } from "react-router-dom";
import vendorLogo from "../../assets/img/profile-pro.png"; // Placeholder logo for vendor

export default function VendorSidebar() {
  const location = useLocation();

  return (
    <div className="col-xl-3 col-lg-3 theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className="settings-widget dash-profile">
          <div className="settings-menu">
            <div className="profile-bg">
              <div className="profile-img">
                <Link to="/vendor/vendor-profile">
                  <img src={vendorLogo} alt="Vendor Profile" />
                </Link>
              </div>
            </div>
            <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="/vendor/vendor-profile">Vendor Name</Link>
                </h4>
                <p>Vendor</p>
                <Link to="/add-course" className="add-course btn-primary">
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
              <li className={`nav-item ${location.pathname === '/vendor/vendor-dashboard' ? 'active' : ''}`}>
                <Link to="/vendor/vendor-dashboard" className="nav-link">
                  <i className="bx bxs-tachometer" />
                  Dashboard
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/vendor/vendor-profile' ? 'active' : ''}`}>
                <Link to="/vendor/vendor-profile" className="nav-link">
                  <i className="bx bxs-user" />
                  My Profile
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/vendor/vendor-products' ? 'active' : ''}`}>
                <Link to="/vendor/vendor-products" className="nav-link">
                  <i className="bx bxs-box" />
                  My Products
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/vendor/vendor-orders' ? 'active' : ''}`}>
                <Link to="/vendor/vendor-orders" className="nav-link">
                  <i className="bx bxs-cart" />
                  Order History
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/vendor/vendor-reviews' ? 'active' : ''}`}>
                <Link to="/vendor/vendor-reviews" className="nav-link">
                  <i className="bx bxs-star" />
                  Reviews
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/vendor/vendor-withdrawals' ? 'active' : ''}`}>
                <Link to="/vendor/vendor-withdrawals" className="nav-link">
                  <i className="bx bxs-wallet" />
                  Withdrawals
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/vendor/vendor-support' ? 'active' : ''}`}>
                <Link to="/vendor/vendor-support" className="nav-link">
                  <i className="bx bxs-help-circle" />
                  Support Tickets
                </Link>
              </li>
            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/vendor/vendor-settings' ? 'active' : ''}`}>
                <Link to="/vendor/vendor-settings" className="nav-link">
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