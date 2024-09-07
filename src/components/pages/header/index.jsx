import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../header/logo5.png"
import DarkMode from "../../common/darkMode";
// eslint-disable-next-line react/prop-types
const PageHeader = () => {

  const openMobileMenu = () => {
    document.body.classList.add("menu-opened");
  };
  const hideMobileMenu = () => {
    document.body.classList.remove("menu-opened");
  };

  const [navbar, setNavbar] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
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
                  <Link to="/" className="navbar-brand logo">
                    <img src={logo} className="img-fluid" alt="Logo" />
                  </Link>
                </div>
                <div className="main-menu-wrapper">
                  <div className="menu-header">
                    <Link to="/" className="menu-logo">
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
      </div>
    </>
  );
};

export default PageHeader;
