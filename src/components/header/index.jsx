import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo5 from "./logo5.png";
import DarkMode from "../common/darkMode";
import menu_data from "./menu-data";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [dashboardLink, setDashboardLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body?.classList?.remove("menu-opened");
    return () => {
      document.body.className = "";
    };
  }, []);

  useEffect(() => {
    // Check if the user is logged in (either as student or trainer)
    const studentToken = localStorage.getItem("token");
    const trainerToken = localStorage.getItem("trainerToken");
    const role = studentToken ? "student" : trainerToken ? "trainer" : null;

    if (role) {
      setIsLoggedIn(true);

      // Set the dashboard link based on the user's role
      const dashboardUrl =
        role === "student" ? "/student/student-setting" : "/instructor/instructor-dashboard";
      setDashboardLink(dashboardUrl);

      // Set the profile photo if logged in
      const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
      setProfilePhoto(profilePhotoUrl);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const openMobileMenu = () => {
    document.body?.classList?.add("menu-opened");
  };

  const hideMobileMenu = () => {
    document.body?.classList?.remove("menu-opened");
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);

  const handleLogout = () => {
    // Clear the token, role, and profile photo from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("trainerToken");
    localStorage.removeItem("profilePhotoUrl");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <header className="header">
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
              <Link id="mobile_btn" to="/home" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo5} className="img-fluid" alt="Logo" />
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
                  to="/home"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              {/* <ul className="main-nav">
                {menu_data.map((item) => (
                  <li key={item.id} className="has-submenu">
                    <Link to={item.link}>{item.title}</Link>
                    {item.sub_menus.length > 0 && (
                      <ul className="submenu">
                        {item.sub_menus.map((sub, i) => (
                          <li key={i} className="submenu-item">
                            <Link to={sub.link} className="submenu-link">
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul> */}
            </div>
            <ul className="nav header-navbar-rht">
              <DarkMode />
              {/* <li className="nav-item">
                <Link className="nav-link header-sign" to="/partner-signin">
                  Partner With us
                </Link>
              </li> */}
              {isLoggedIn ? (
                <>
               
                  <li className="nav-item">
                    <Link className="nav-link header-profile  border border-warning rounded-5" to={dashboardLink}>
                      {profilePhoto ? (
                        <img
                          src={profilePhoto}
                          alt="Profile"
                          className="profile-photo border"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "10px"
                          }}
                        />
                      ) : (
                        <i className="fas fa-user-circle" style={{ marginRight: "10px" }} />
                      )}
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link header-sign text-danger border border-warning rounded-5" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
