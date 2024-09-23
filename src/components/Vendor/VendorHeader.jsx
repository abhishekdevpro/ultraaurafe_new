/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Home, LogOut, Package, ShoppingCart } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { logo, User17 } from "../imagepath"; // Assuming you'll replace this with the appropriate vendor image
import DarkMode from "../common/darkMode";
import vendorMenuData from "../header/menu-data"; // Assuming a separate menu data file for vendors
import logo5 from "../../assets/logo5.png";
import axios from "axios";

export function VendorHeader() {
  const [Profile ,setProfileData] =useState("")

  const token = localStorage.getItem("vendorToken")


  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/vendors/profile",{
        headers: {
          Authorization:token,}
      })
      .then((response) => {
        const data = response.data.data;
        setProfileData(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  console.log(Profile, "from navbar header");
  const [navbar, setNavbar] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Mobile Menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(false);

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

  // To close the modal, when clicked outside anywhere
  const cart = useRef();
  useOnClickOutside(cart, () => setShowCart(false));

  const notification = useRef();
  useOnClickOutside(notification, () => setShowNotification(false));

  const profile = useRef();
  useOnClickOutside(profile, () => setShowProfile(false));

  // Cart Click
  const cartClick = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
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
  const navigate = useNavigate();
  window.addEventListener("scroll", changeHeaderBackground);
  const handleLogout = () => {
    localStorage.removeItem("vendorToken");
    navigate("/login");
  };
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
              <Link to="/" className=" ">
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
                <Link to="/" className="menu-logo">
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
                  className={
                    showProfile ? "dropdown-toggle show" : "dropdown-toggle"
                  }
                  data-bs-toggle="dropdown"
                  onClick={profileClick}
                >
                  <span className="user-img">
                    <img
                      src={
                        Profile?.photo
                          ? `https://api.novajobs.us/${Profile.photo}`
                          : User17
                      }
                      alt="Vendor Image"
                    />
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
                        src={
                          Profile?.photo
                            ? `https://api.novajobs.us/${Profile.photo}`
                            : User17
                        }
                        alt="Vendor Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>
                        {Profile.first_name} {Profile.last_name}
                      </h6>{" "}
                      {/* Replace with vendor's name */}
                      <p className="text-muted text mb-0">Vendor</p>
                    </div>
                  </div>
                  <Link className="dropdown-item" to="/vendor/dashboard">
                    <Home
                      size={14}
                      color={"#FF875A"}
                      className="feather-home me-1"
                    />{" "}
                    Dashboard
                  </Link>

                  <Link className="dropdown-item text" to="/vendor/orders">
                    <ShoppingCart
                      size={14}
                      color={"#FF875A"}
                      className="feather-shopping-cart me-1"
                    />{" "}
                    Orders
                  </Link>
                  <Link className="dropdown-item text" to="/home">
                    <LogOut
                      size={14}
                      color={"#FF875A"}
                      className="headerIcon me-1"
                      onClick={handleLogout}
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

// Define prop types for VendorHeader
VendorHeader.propTypes = {
  activeMenu: PropTypes.string, // Adjust the type based on your actual usage
};

export default VendorHeader;
