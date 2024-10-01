// import React, { useState, useRef } from "react";
// import { Home, LogOut, Star } from "react-feather";
// import { Link, useNavigate } from "react-router-dom";
// import useOnClickOutside from "../hooks/useOnClickOutside";
// import { User17 } from "../imagepath";
// import DarkMode from "../common/darkMode";
// import logo5 from "../../assets/logo5.png";

// export function AdminHeader() {
//   const [navbar, setNavbar] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const navigate = useNavigate();

//   const openMobileMenu = () => {
//     document.body.classList.add("menu-opened");
//     setMobileMenu(true);
//   };

//   const hideMobileMenu = () => {
//     document.body.classList.remove("menu-opened");
//     setMobileMenu(false);
//   };

//   const profile = useRef();
//   useOnClickOutside(profile, () => setShowProfile(false));

//   const profileClick = (e) => {
//     e.preventDefault();
//     setShowProfile(!showProfile);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/');
//   };

//   const changeHeaderBackground = () => {
//     if (window.scrollY >= 60) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   window.addEventListener("scroll", changeHeaderBackground);

//   return (
//     <header className="header header-page">
//       <div className="header-fixed">
//         <nav
//           className={
//             navbar
//               ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
//               : "navbar navbar-expand-lg header-nav scroll-sticky"
//           }
//         >
//           <div className="container">
//             <div className="navbar-header">
//               <Link id="mobile_btn" to="#" onClick={openMobileMenu}>
//                 <span className="bar-icon">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </span>
//               </Link>
//               <Link to="/admin/dashboard" className="">
//                 <img
//                   src={logo5}
//                   className="rounded-3"
//                   alt="Logo"
//                   style={{ height: "50px", width: "200px" }}
//                 />
//               </Link>
//             </div>
//             <div className="main-menu-wrapper">
//               <div className="menu-header">
//                 <Link to="/admin/dashboard" className="menu-logo">
//                   <img src={logo5} className="img-fluid" alt="Logo" />
//                 </Link>
//                 <Link
//                   id="menu_close"
//                   className="menu-close"
//                   to="#"
//                   onClick={hideMobileMenu}
//                 >
//                   <i className="fas fa-times"></i>
//                 </Link>
//               </div>
//             </div>
//             <ul className="nav header-navbar-rht">
//               <DarkMode />
//               <li className="nav-item user-nav">
//                 <Link
//                   to="#"
//                   className={showProfile ? "dropdown-toggle show" : "dropdown-toggle"}
//                   data-bs-toggle="dropdown"
//                   onClick={profileClick}
//                 >
//                   <span className="user-img">
//                     <img src={User17} alt="User" />
//                     <span className="status online"></span>
//                   </span>
//                 </Link>
//                 <div
//                   ref={profile}
//                   className={showProfile ? "users dropdown-menu dropdown-menu-right show modalPosition" : "users dropdown-menu dropdown-menu-right"}
//                   data-popper-placement="bottom-end"
//                 >
//                   <div className="user-header">
//                     <div className="avatar avatar-sm">
//                       <img
//                         src={User17}
//                         alt="User Image"
//                         className="avatar-img rounded-circle"
//                       />
//                     </div>
//                     <div className="user-text">
//                       <h6>Admin User</h6>
//                       <p className="text-muted text mb-0">Administrator</p>
//                     </div>
//                   </div>
//                   <Link className="dropdown-item" to="/admin/dashboard">
//                     <Home size={14} color={"#FF875A"} className="feather-home me-1" /> Dashboard
//                   </Link>
//                   <Link className="dropdown-item text" to="">
//                     <Star size={14} color={"#FF875A"} className="feather-star me-1" /> Edit Profile
//                   </Link>
//                   <button 
//                     onClick={handleLogout} 
//                     className="dropdown-item text"
//                   >
//                     <LogOut size={14} color={"#FF875A"} className="headerIcon me-1" /> Logout
//                   </button>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <div
//           className={mobileMenu ? "sidebar-overlay opened" : "sidebar-overlay"}
//         ></div>
//       </div>
//     </header>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Home, LogOut, Menu, X, Star } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import logo5 from "../../assets/logo5.png";
import { User17 } from "../imagepath";
// import DarkMode from "../common/darkMode";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.navbar ? '#ffffff' : 'transparent'};
  box-shadow: ${props => props.navbar ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  z-index: 1000;
  @media (max-width: 768px) {
    margin-bottom: 4px;
  }
`;

const Logo = styled.img`
  height: 50px;
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.mobileMenu ? '0' : '-100%'};
    height: 100vh;
    width: 300px;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    padding: 2rem;
    overflow-y: auto;
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #FF875A;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ProfileDropdown = styled.div`
  position: relative;
`;

const ProfileMenu = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem;
  min-width: 220px;
  flex-direction: column;
  z-index: 1001;

  @media (max-width: 768px) {
    position: static;
    display: flex;
    box-shadow: none;
    padding: 0;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  h6 {
    margin: 0.5rem 0 0.25rem 0;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    color: #666;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileImage1 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 0.5rem;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s;
  border-radius: 4px;

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.02);
  }

  svg {
    margin-right: 0.75rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Overlay = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

export function AdminHeader() {
  const [navbar, setNavbar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const profile = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profile.current && !profile.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profile]);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const profileClick = (e) => {
    e.preventDefault();
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBackground);
    return () => {
      window.removeEventListener("scroll", changeHeaderBackground);
    };
  }, []);

  return (
    <HeaderWrapper navbar={navbar}>
      <NavbarContainer>
        <Link to="/admin/dashboard">
          <Logo src={logo5} alt="Logo" />
        </Link>
        <MenuButton onClick={toggleMobileMenu} aria-label="Open menu">
          <Menu size={24} />
        </MenuButton>
        <NavMenu mobileMenu={mobileMenu}>
          <CloseButton onClick={toggleMobileMenu} aria-label="Close menu">
            <X size={24} />
          </CloseButton>
          <ProfileDropdown ref={profile}>
            <ProfileImage
              src={User17}
              alt="User"
              onClick={profileClick}
            />
            <ProfileMenu show={showProfile || mobileMenu}>
              <ProfileInfo>
                <ProfileImage1
                  src={User17}
                  alt="User"
                />
                <div>
                  <h6>Admin User</h6>
                  <p>Administrator</p>
                </div>
              </ProfileInfo>
              <NavItem to="/admin/dashboard">
                <Home size={20} /> Dashboard
              </NavItem>
              <NavItem to="">
                <Star size={20} /> Edit Profile
              </NavItem>
              <NavItem as="button" onClick={handleLogout}>
                <LogOut size={20} /> Logout
              </NavItem>
            </ProfileMenu>
          </ProfileDropdown>
          {/* Uncomment if you want to include DarkMode
          <DarkModeWrapper>
            <DarkMode />
          </DarkModeWrapper>
          */}
        </NavMenu>
        <Overlay show={mobileMenu} onClick={toggleMobileMenu} />
      </NavbarContainer>
    </HeaderWrapper>
  );
}