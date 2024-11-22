import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo5 from '../../../assets/Ultra_Aura.png';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  transition: all 0.3s ease-in-out;

  .header__main-header {
    background-color: ${props => props.navbar ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
    transition: background-color 0.3s ease;
    box-shadow: ${props => props.navbar ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
  }

  .header__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      padding: 1rem;
    }
  }

  .header__logo {
    display: flex;
    align-items: center;
    
    img {
      height: 30px;
      width: auto;
      object-fit: contain;

      @media (min-width: 768px) {
        height: 40px;
      }
    }
  }

  .header__nav-links {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }

  .header__nav-link {
    margin-left: 1rem;
    text-decoration: none;
    color: #4a5568;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ed8936;
    }
  }

  .header__profile-photo {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .header__sign-button, .header__login-button {
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .header__sign-button {
    color: #ed8936;

    &:hover {
      background-color: #ed8936;
      color: white;
    }
  }

  .header__login-button {
    background-color: #ed8936;
    color: white;

    &:hover {
      background-color: #dd6b20;
    }
  }

  .header__menu-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: #4a5568;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .header__mobile-menu {
    position: fixed;
    top: 0;
    right: ${props => props.isMenuOpen ? '0' : '-100%'};
    width: 80%;
    height: 100vh;
    background-color: #ffffff;
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: start;

    .header__close-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: #4a5568;
    }

    .header__nav-link {
      margin: 1rem 0;
      font-size: 1.2rem;
      color: #4a5568;
      text-align: center;
    }
  }

  .header__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${props => props.isMenuOpen ? 'block' : 'none'};
    z-index: 999;
  }
`;

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [dashboardLink, setDashboardLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const studentToken = localStorage.getItem("token");
    const trainerToken = localStorage.getItem("trainerToken");
    const role = studentToken ? "student" : trainerToken ? "trainer" : null;

    if (role) {
      setIsLoggedIn(true);
      const dashboardUrl = role === "student" ? "/student/student-setting" : "/instructor/instructor-dashboard";
      setDashboardLink(dashboardUrl);
      const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
      setProfilePhoto(profilePhotoUrl);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBackground);
    return () => window.removeEventListener("scroll", changeHeaderBackground);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("trainerToken");
    localStorage.removeItem("profilePhotoUrl");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => (
    <>
      {isLoggedIn ? (
        <>
          <Link className="header__nav-link header__sign-button" to={dashboardLink}>
            {profilePhoto ? (
              <img src={profilePhoto} alt="Profile" className="header__profile-photo" />
            ) : (
              <i className="fas fa-user-circle" style={{ marginRight: "10px" }} />
            )}
            Dashboard
          </Link>
          <button className="header__nav-link header__login-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="header__nav-link header__sign-button" to="/about-us">
            About us
          </Link>
          <Link className="header__nav-link header__sign-button" to="/login">
            Sign In
          </Link>
          <Link className="header__nav-link header__login-button" to="/register">
            Sign Up
          </Link>
          <Link className="header__nav-link header__login-button" to="/partner-signin">
            Partner With Us
          </Link>
        </>
      )}
    </>
  );

  return (
    <StyledHeader navbar={navbar} isMenuOpen={isMenuOpen}>
      <div className="header__main-header">
        <div className="header__container">
          <Link to="/home" className="header__logo">
            <img src={logo5} alt="Logo" />
          </Link>
          <div className="header__nav-links">
            <NavLinks />
          </div>
          <div className="header__menu-icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </div>
      <div className="header__mobile-menu">
        <div className="header__close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <NavLinks />
      </div>
      <div className="header__overlay" onClick={toggleMenu}></div>
    </StyledHeader>
  );
};

export default Header;