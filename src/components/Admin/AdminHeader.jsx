import React, { useState, useRef } from "react";
import { Home, LogOut, Star } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { User17 } from "../imagepath";
import DarkMode from "../common/darkMode";
import logo5 from "../../assets/logo5.png";

export function AdminHeader() {
  const [navbar, setNavbar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const openMobileMenu = () => {
    document.body.classList.add("menu-opened");
    setMobileMenu(true);
  };

  const hideMobileMenu = () => {
    document.body.classList.remove("menu-opened");
    setMobileMenu(false);
  };

  const profile = useRef();
  useOnClickOutside(profile, () => setShowProfile(false));

  const profileClick = (e) => {
    e.preventDefault();
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
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
          <div className="container">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
              <Link to="/admin/dashboard" className="">
                <img
                  src={logo5}
                  className="rounded-3"
                  alt="Logo"
                  style={{ height: "50px", width: "200px" }}
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/admin/dashboard" className="menu-logo">
                  <img src={logo5} className="img-fluid" alt="Logo" />
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
            </div>
            <ul className="nav header-navbar-rht">
              <DarkMode />
              <li className="nav-item user-nav">
                <Link
                  to="#"
                  className={showProfile ? "dropdown-toggle show" : "dropdown-toggle"}
                  data-bs-toggle="dropdown"
                  onClick={profileClick}
                >
                  <span className="user-img">
                    <img src={User17} alt="User" />
                    <span className="status online"></span>
                  </span>
                </Link>
                <div
                  ref={profile}
                  className={showProfile ? "users dropdown-menu dropdown-menu-right show modalPosition" : "users dropdown-menu dropdown-menu-right"}
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
                      <h6>Admin User</h6>
                      <p className="text-muted text mb-0">Administrator</p>
                    </div>
                  </div>
                  <Link className="dropdown-item" to="/admin/dashboard">
                    <Home size={14} color={"#FF875A"} className="feather-home me-1" /> Dashboard
                  </Link>
                  <Link className="dropdown-item text" to="">
                    <Star size={14} color={"#FF875A"} className="feather-star me-1" /> Edit Profile
                  </Link>
                  <button 
                    onClick={handleLogout} 
                    className="dropdown-item text"
                  >
                    <LogOut size={14} color={"#FF875A"} className="headerIcon me-1" /> Logout
                  </button>
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