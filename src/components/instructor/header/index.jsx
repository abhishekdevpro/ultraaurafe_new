/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Home, LogOut, Star } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import {
  logo,
  User17,
} from "../../imagepath";
import DarkMode from "../../common/darkMode";
import logo5 from "../../../assets/logo5.png"
import { Button } from "react-bootstrap";
// eslint-disable-next-line react/prop-types
export function InstructorHeader({ activeMenu }) {
  console.log(activeMenu === "Dashboard", "activeMenu");
  const [navbar, setNavbar] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [trainerData, setTrainerData] = useState(null);

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
  const navigate = useNavigate()
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
  useEffect(() => {
    const fetchTrainerData = async () => {
      try {
        const token = localStorage.getItem("trainerToken"); // Function to get the token
        const response = await fetch('https://api.novajobs.us/api/trainers/profile', {
          method: 'GET',
          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
          }
        });
        const result = await response.json();
        if (result.status === 'success') {
          setTrainerData(result.data);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error('Error fetching trainer data:', error);
      }
    };

    fetchTrainerData();
  }, []);

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
  const handleLogout =()=> {
    localStorage.removeItem('trainerToken')
    navigate('/home')
  }
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
              <Link to="/home" className=" ">
                <img src={logo5} className="rounded-3" alt="Logo" style={{ height: "50px", width: "200px" }} />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
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
                    <img src={`https://api.novajobs.us${trainerData?.photo}`} alt="User" />
                    <span className="status online"></span>
                  </span>
                </Link>
                {/* <div
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
                </div> */}
                 <div
                  ref={profile}
                  className={showProfile ? "users dropdown-menu dropdown-menu-right show modalPosition" : "users dropdown-menu dropdown-menu-right"}
                  data-popper-placement="bottom-end"
                >
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={`https://api.novajobs.us${trainerData?.photo}`}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>{trainerData?.first_name} {trainerData?.last_name}</h6>
                      <p className="text-muted text mb-0">{trainerData?.jobtitle}</p>
                    </div>
                  </div>
                  <Link className="dropdown-item" to="/instructor/instructor-dashboard">
                    <Home size={14} color={"#FF875A"} className="feather-home me-1" /> Dashboard
                  </Link>
                  <Link className="dropdown-item text" to="/instructor/instructor-settings">
                    <Star size={14} color={"#FF875A"} className="feather-star me-1" /> Edit Profile
                  </Link>
                  <button 
                  onClick={handleLogout} 
                  className="dropdown-item text">
                    <LogOut size={14} color={"#FF875A"} className="headerIcon me-1"
                    /> Logout
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
