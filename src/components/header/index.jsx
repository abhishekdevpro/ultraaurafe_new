import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Joyride from "react-joyride";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logo5 from "../../assets/Ultra_Aura.png";
import { jwtDecode } from "jwt-decode";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  transition: all 0.3s ease-in-out;

  .header__main-header {
    background-color: ${(props) =>
      props.navbar ? "rgba(255, 255, 255, 0.95)" : "transparent"};
    transition: background-color 0.3s ease;
    box-shadow: ${(props) =>
      props.navbar ? "0 2px 4px rgba(0,0,0,0.1)" : "none"};
  }

  .header__container {
    // max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      padding: 1rem;
    }
  }

  .header__logo {
    display: flex;
    align-items: center;

    img {
      height: 60px;
      width: auto;
      object-fit: contain;

      @media (min-width: 768px) {
        height: 60px;
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

  .header__sign-button,
  .header__login-button {
    padding: 0.5rem 1rem;
    border: 0px solid #ed8936;
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
      color: white;
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
    right: ${(props) => (props.isMenuOpen ? "0" : "-100%")};
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background-color: #f8f9fa;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    padding: 2rem 1.5rem;
    transition: right 0.3s ease-in-out;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: "Arial", sans-serif;

    .header__close-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: #343a40;
      transition: color 0.2s ease;

      &:hover {
        color: #007bff;
      }
    }

    .header__nav-link {
      margin: 1rem 0;
      font-size: 1.1rem;
      color: #343a40;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.2s ease, color 0.2s ease;

      &:hover {
        background-color: #e9ecef;
        color: #007bff;
      }
    }
  }

  .header__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.isMenuOpen ? "block" : "none")};
    z-index: 999;
    backdrop-filter: blur(3px);
  }
`;

const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #f0f0f0;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fallback-icon {
    position: absolute;
    font-size: 30px;
    color: #666;
    display: none;
  }
`;


const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [dashboardLink, setDashboardLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [runTour, setRunTour] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenAndSetUser = () => {
      const studentToken = localStorage.getItem("token");
      const trainerToken = localStorage.getItem("trainerToken");
      const token = studentToken || trainerToken;

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            // Token has expired
            handleLogout();
          } else {
            // Token is valid
            const role = studentToken ? "student" : "trainer";
            setIsLoggedIn(true);
            const dashboardUrl =
              role === "student"
                ? "/student/student-setting"
                : "/instructor/instructor-dashboard";
            setDashboardLink(dashboardUrl);
            const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
            setProfilePhoto(profilePhotoUrl);
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          handleLogout();
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    checkTokenAndSetUser();

    // Set up an interval to check the token every minute
    const intervalId = setInterval(checkTokenAndSetUser, 60000);

    return () => clearInterval(intervalId);
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
          {/* <div className="d-flex gap-2 justify-content-center items-align-center">

            <Link
            className="header__nav-link header__sign-button"
            to={dashboardLink}
          >
            <ProfileImage>
              {profilePhoto ? (
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.fallback-icon').style.display = 'block';
                  }}
                />
              ) : (
                <FaUserCircle className="fallback-icon" />
              )}
            </ProfileImage>
            Dashboard
          </Link>
          </div> */}
          <div className="d-flex gap-2 justify-content-center align-items-center">
            <Link
              className="header__nav-link header__sign-button d-flex align-items-center"
              to={dashboardLink}
            >
              <ProfileImage>
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    onError={(e) => {
                      e.target.style.display = "none";
                      const fallback =
                        e.target.parentElement.querySelector(".fallback-icon");
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                ) : null}
                <FaUserCircle
                  className="fallback-icon"
                  style={{ display: profilePhoto ? "none" : "block" }}
                />
              </ProfileImage>
              Dashboard
            </Link>
          </div>

          <button
            className="header__nav-link header__login-button"
            onClick={handleLogout}
          >
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

          {/* <Link className="header__nav-link header__login-button relative" to="/register" 
          // data-tour="signup-button"
          
          >
          <span className="nav-sign-up">
            Sign Up
            </span>
          </Link> */}
          <Link
            className="header__nav-link header__login-button"
            to="https://trainers.ultraaura.education/"
          >
            Join Us as a Trainer
          </Link>
          <Link
            className="header__nav-link header__login-button"
            to="https://vendors.ultraaura.education/"
          >
            Partner With Us
          </Link>
        </>
      )}
    </>
  );
  // const steps = [
  //   {
  //     target: '[data-tour="signup-button"]', // "Sign Up" button
  //     content: 'Click here to sign up for an account and start your journey!',
  //     placement: 'bottom',
  //     disableBeacon: true, // Prevents the initial "beacon" effect
  //   },
  //   {
  //     target: '.header__login-button[href="https://trainers.ultraaura.education/"]',
  //     content: 'Sign in here if you are a trainer!',
  //     placement: 'bottom',
  //   },
  //   {
  //     target: '.header__login-button[href="https://vendors.ultraaura.education/"]',
  //     content: 'Partner with us to grow your business!',
  //     placement: 'bottom',
  //   },
  // ];

  return (
    <>
      <StyledHeader navbar={navbar} isMenuOpen={isMenuOpen}>
        {/* <Joyride
        steps={steps}
        run={runTour} // The tour will run automatically on page load
        continuous
        scrollToFirstStep
        showSkipButton
        showProgress
        styles={{
          options: {
            zIndex: 1000,
            arrowColor: "#fff",
            backgroundColor: "whitesmoke",
            textColor: "#ff875a",
            // overlayColor: "rgba(227, 147, 116, 0.5)",
          },
        }}
        callback={({ status }) => {
          if (status === 'finished' || status === 'skipped') {
            setRunTour(false); // Stop the tour once it's finished or skipped
          }
        }}
      /> */}
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
    </>
  );
};

export default Header;
