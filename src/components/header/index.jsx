// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo5 from "./logo5.png";
// import DarkMode from "../common/darkMode";

// const Header = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [dashboardLink, setDashboardLink] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body?.classList?.remove("menu-opened");
//     return () => {
//       document.body.className = "";
//     };
//   }, []);

//   useEffect(() => {
//     // Check if the user is logged in (either as student or trainer)
//     const studentToken = localStorage.getItem("token");
//     const trainerToken = localStorage.getItem("trainerToken");
//     const role = studentToken ? "student" : trainerToken ? "trainer" : null;

//     if (role) {
//       setIsLoggedIn(true);

//       // Set the dashboard link based on the user's role
//       const dashboardUrl =
//         role === "student" ? "/student/student-setting" : "/instructor/instructor-dashboard";
//       setDashboardLink(dashboardUrl);

//       // Set the profile photo if logged in
//       const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
//       setProfilePhoto(profilePhotoUrl);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   // const openMobileMenu = () => {
//   //   document.body?.classList?.add("menu-opened");
//   // };

//   const hideMobileMenu = () => {
//     document.body?.classList?.remove("menu-opened");
//   };

//   const changeHeaderBackground = () => {
//     if (window.scrollY >= 90) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   window.addEventListener("scroll", changeHeaderBackground);

//   const handleLogout = () => {
//     // Clear the token, role, and profile photo from local storage
//     localStorage.removeItem("token");
//     localStorage.removeItem("trainerToken");
//     localStorage.removeItem("profilePhotoUrl");
//     setIsLoggedIn(false);
//     navigate("/login"); // Redirect to login page after logout
//   };

//   return (
//     <header className="header">
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
//               {/* <Link id="mobile_btn" to="/home" onClick={openMobileMenu}>
//                 <span className="bar-icon">
//                   <span />
//                   <span />
//                   <span />
//                 </span>
//               </Link> */}
//               <Link to="/home" className="navbar-brand logo">
//                 <img src={logo5} className="img-fluid" alt="Logo" />
//               </Link>
//             </div>
//             <div className="main-menu-wrapper">
//               <div className="menu-header">
//                 <Link to="/home" className="menu-logo">
//                   <img src={logo5} className="img-fluid" alt="Logo" />
//                 </Link>
//                 <Link
//                   id="menu_close"
//                   className="menu-close"
//                   to="/home"
//                   onClick={hideMobileMenu}
//                 >
//                   <i className="fas fa-times" />
//                 </Link>
//               </div>
//             </div>
//             <ul className="nav header-navbar-rht">
//               <DarkMode />
//               {/* <li className="nav-item">
//                 <Link className="nav-link header-sign" to="/partner-signin">
//                   Partner With us
//                 </Link>
//               </li> */}
//               {isLoggedIn ? (
//                 <>
               
//                   <li className="nav-item">
//                     <Link className="nav-link header-profile  border border-warning rounded-5" to={dashboardLink}>
//                       {profilePhoto ? (
//                         <img
//                           src={profilePhoto}
//                           alt="Profile"
//                           className="profile-photo border"
//                           style={{
//                             width: "30px",
//                             height: "30px",
//                             borderRadius: "50%",
//                             marginRight: "10px"
//                           }}
//                         />
//                       ) : (
//                         <i className="fas fa-user-circle" style={{ marginRight: "10px" }} />
//                       )}
//                       Dashboard
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <button className="nav-link header-sign text-danger border border-warning rounded-5" onClick={handleLogout}>
//                       Logout
//                     </button>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link header-sign" to="/login">
//                       Signin
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link header-login" to="/register">
//                       Signup
//                     </Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import logo5 from "./logo5.png";
// import DarkMode from "../common/darkMode";

// const HeaderContainer = styled.header`
//   .header-fixed {
//     position: fixed;
//     width: 100%;
//     z-index: 999;
//     top: 0;
//   }

//   .navbar {
//     background-color: ${({ navbar }) =>
//       navbar ? "#fff" : "transparent"};
//     transition: background-color 0.3s ease;
//   }

//   .navbar-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .nav.header-navbar-rht {
//     display: flex;
//     align-items: center;
//   }

//   .profile-photo {
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     margin-right: 10px;
//   }

//   @media (max-width: 768px) {
//     .main-menu-wrapper,
//     .menu-header,
//     .header-sign,
//     .header-login {
//       display: none;
//     }

//     .navbar-header {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }

//     .dashboard-menu {
//       position: absolute;
//       right: 10px;
//       top: 60px;
//       background-color: #fff;
//       border-radius: 5px;
//       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//       display: ${({ showMenu }) => (showMenu ? "block" : "none")};
//       z-index: 1000;
//     }

//     .dashboard-menu-item {
//       padding: 10px 20px;
//       cursor: pointer;
//       border-bottom: 1px solid #ddd;
//       &:last-child {
//         border-bottom: none;
//       }
//     }

//     .menu-icon {
//       font-size: 24px;
//       cursor: pointer;
//     }

//     .profile-photo {
//       width: 30px;
//       height: 30px;
//     }
//   }
// `;

// const Header = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [dashboardLink, setDashboardLink] = useState("");
//   const [showMenu, setShowMenu] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body?.classList?.remove("menu-opened");
//     return () => {
//       document.body.className = "";
//     };
//   }, []);

//   useEffect(() => {
//     const studentToken = localStorage.getItem("token");
//     const trainerToken = localStorage.getItem("trainerToken");
//     const role = studentToken ? "student" : trainerToken ? "trainer" : null;

//     if (role) {
//       setIsLoggedIn(true);
//       const dashboardUrl =
//         role === "student" ? "/student/student-setting" : "/instructor/instructor-dashboard";
//       setDashboardLink(dashboardUrl);

//       const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
//       setProfilePhoto(profilePhotoUrl);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const changeHeaderBackground = () => {
//     if (window.scrollY >= 90) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   window.addEventListener("scroll", changeHeaderBackground);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("trainerToken");
//     localStorage.removeItem("profilePhotoUrl");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <HeaderContainer navbar={navbar} showMenu={showMenu}>
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
//               <Link to="/home" className="navbar-brand logo">
//                 <img src={logo5} className="img-fluid" alt="Logo" />
//               </Link>

//               {isLoggedIn ? (
//                 <div className="menu-icon" onClick={toggleMenu}>
//                   {profilePhoto ? (
//                     <img
//                       src={profilePhoto}
//                       alt="Profile"
//                       className="profile-photo"
//                     />
//                   ) : (
//                     <i className="fas fa-user-circle" />
//                   )}
//                 </div>
//               ) : (
//                 <div className="menu-icon" onClick={toggleMenu}>
//                   <i className="fas fa-bars" />
//                 </div>
//               )}
//             </div>

//             <ul className="nav header-navbar-rht dashboard-menu">
//               {isLoggedIn ? (
//                 <>
//                   <li
//                     className="dashboard-menu-item"
//                     onClick={() => navigate(dashboardLink)}
//                   >
//                     Dashboard
//                   </li>
//                   <li className="dashboard-menu-item">
//                     <DarkMode />
//                   </li>
//                   <li
//                     className="dashboard-menu-item text-danger"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li className="dashboard-menu-item">
//                     <Link to="/login">Signin</Link>
//                   </li>
//                   <li className="dashboard-menu-item">
//                     <Link to="/register">Signup</Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </HeaderContainer>
//   );
// };

// export default Header;
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from 'styled-components';
// import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
// import { MdLocationOn, MdAccessTime } from 'react-icons/md';
// import logo5 from "./logo5.png";
// import DarkMode from "../common/darkMode";

// const HeaderWrapper = styled.header`
//   .top-bar {
//     background-color: white;
//     color: #4a5568;
//     padding: 0.5rem 1rem;
//     border-bottom: 2px solid #e2e8f0;

//     @media (min-width: 768px) {
//       padding: 1rem;
//     }
//   }

//   .top-bar-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     max-width: 1200px;
//     margin: 0 auto;
//     font-size: 0.875rem;

//     @media (min-width: 768px) {
//       flex-direction: row;
//       font-size: 1.25rem;
//       font-weight: 400;
//     }
//   }

//   .location, .hours {
//     display: none;
//     align-items: center;
//     margin-bottom: 0.5rem;

//     @media (min-width: 768px) {
//       display: flex;
//       margin-bottom: 0;
//     }
//   }

//   .icon {
//     color: #3182ce;
//     margin-right: 0.5rem;
//   }

//   .social-icons {
//     display: flex;
//     gap: 1rem;
//     margin-top: 0.5rem;
//     font-size: 1.25rem;
//     font-weight: 400;

//     @media (min-width: 768px) {
//       margin-top: 0;
//     }
//   }

//   .social-icon {
//     cursor: pointer;
//   }

//   .main-header {
//     background-color: ${props => props.navbar ? '#ffffff' : 'transparent'};
//     transition: background-color 0.3s ease;
//     box-shadow: ${props => props.navbar ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
//   }

//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 1rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .logo img {
//     height: 40px;
//   }

//   .nav-links {
//     display: flex;
//     align-items: center;
//   }

//   .nav-link {
//     margin-left: 1rem;
//     text-decoration: none;
//     color: #4a5568;
//     font-weight: 500;
//   }

//   .profile-photo {
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     margin-right: 10px;
//   }

//   .header-sign {
//     padding: 0.5rem 1rem;
//     border: 1px solid #ed8936;
//     border-radius: 9999px;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #ed8936;
//       color: white;
//     }
//   }

//   .header-login {
//     padding: 0.5rem 1rem;
//     background-color: #ed8936;
//     color: white;
//     border-radius: 9999px;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #dd6b20;
//     }
//   }
// `;

// const Header = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [dashboardLink, setDashboardLink] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const studentToken = localStorage.getItem("token");
//     const trainerToken = localStorage.getItem("trainerToken");
//     const role = studentToken ? "student" : trainerToken ? "trainer" : null;

//     if (role) {
//       setIsLoggedIn(true);
//       const dashboardUrl = role === "student" ? "/student/student-setting" : "/instructor/instructor-dashboard";
//       setDashboardLink(dashboardUrl);
//       const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
//       setProfilePhoto(profilePhotoUrl);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const changeHeaderBackground = () => {
//     if (window.scrollY >= 90) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeHeaderBackground);
//     return () => window.removeEventListener("scroll", changeHeaderBackground);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("trainerToken");
//     localStorage.removeItem("profilePhotoUrl");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <HeaderWrapper navbar={navbar}>
//       <div className="main-header">
//         <div className="container">
//           <Link to="/home" className="logo">
//             <img src={logo5} alt="Logo" />
//           </Link>
//           <div className="nav-links">
//             <DarkMode />
//             {isLoggedIn ? (
//               <>
//                 <Link className="nav-link header-sign" to={dashboardLink}>
//                   {profilePhoto ? (
//                     <img src={profilePhoto} alt="Profile" className="profile-photo" />
//                   ) : (
//                     <i className="fas fa-user-circle" style={{ marginRight: "10px" }} />
//                   )}
//                   Dashboard
//                 </Link>
//                 <button className="nav-link header-sign" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link className="nav-link header-sign" to="/login">
//                   Signin
//                 </Link>
//                 <Link className="nav-link header-login" to="/register">
//                   Signup
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </HeaderWrapper>
//   );
// };

// export default Header;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from 'styled-components';
// import {  FaBars, FaTimes } from 'react-icons/fa';
// import logo5 from "./logo5.png";
// import DarkMode from "../common/darkMode";

// const HeaderWrapper = styled.header`
//   .top-bar {
//     background-color: white;
//     color: #4a5568;
//     padding: 0.5rem 1rem;
//     border-bottom: 2px solid #e2e8f0;

//     @media (min-width: 768px) {
//       padding: 1rem;
//     }
//   }

//   .top-bar-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     max-width: 1200px;
//     margin: 0 auto;
//     font-size: 0.875rem;

//     @media (min-width: 768px) {
//       flex-direction: row;
//       font-size: 1.25rem;
//       font-weight: 400;
//     }
//   }

//   .location, .hours {
//     display: none;
//     align-items: center;
//     margin-bottom: 0.5rem;

//     @media (min-width: 768px) {
//       display: flex;
//       margin-bottom: 0;
//     }
//   }

//   .icon {
//     color: #3182ce;
//     margin-right: 0.5rem;
//   }

//   .social-icons {
//     display: flex;
//     gap: 1rem;
//     margin-top: 0.5rem;
//     font-size: 1.25rem;
//     font-weight: 400;

//     @media (min-width: 768px) {
//       margin-top: 0;
//     }
//   }

//   .social-icon {
//     cursor: pointer;
//   }

//   .main-header {
//     background-color: ${props => props.navbar ? '#ffffff' : 'transparent'};
//     transition: background-color 0.3s ease;
//     box-shadow: ${props => props.navbar ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
//   }

//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 1rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .logo img {
//     height: 40px;
//   }

//   .nav-links {
//     display: flex;
//     align-items: center;

//     @media (max-width: 767px) {
//       display: none;
//     }
//   }

//   .nav-link {
//     margin-left: 1rem;
//     text-decoration: none;
//     color: #4a5568;
//     font-weight: 500;
//   }

//   .profile-photo {
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     margin-right: 10px;
//   }

//   .header-sign {
//     padding: 0.5rem 1rem;
//     border: 1px solid #ed8936;
//     border-radius: 9999px;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #ed8936;
//       color: white;
//     }
//   }

//   .header-login {
//     padding: 0.5rem 1rem;
//     background-color: #ed8936;
//     color: white;
//     border-radius: 9999px;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #dd6b20;
//     }
//   }

//   .menu-icon {
//     display: none;
//     font-size: 1.5rem;
//     cursor: pointer;

//     @media (max-width: 767px) {
//       display: block;
//     }
//   }

//   .mobile-menu {
//     position: fixed;
//     top: 0;
//     right: ${props => props.isMenuOpen ? '0' : '-100%'};
//     width: 70%;
//     height: 100vh;
//     background-color: white;
//     padding: 2rem;
//     transition: right 0.3s ease-in-out;
//     z-index: 1000;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;

//     .close-icon {
//       align-self: flex-end;
//       font-size: 1.5rem;
//       cursor: pointer;
//       margin-bottom: 2rem;
//     }

//     .nav-link {
//       margin: 1rem 0;
//       font-size: 1.2rem;
//     }
//   }

//   .overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: ${props => props.isMenuOpen ? 'block' : 'none'};
//     z-index: 999;
//   }
// `;

// const Header = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [dashboardLink, setDashboardLink] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const studentToken = localStorage.getItem("token");
//     const trainerToken = localStorage.getItem("trainerToken");
//     const role = studentToken ? "student" : trainerToken ? "trainer" : null;

//     if (role) {
//       setIsLoggedIn(true);
//       const dashboardUrl = role === "student" ? "/student/student-setting" : "/instructor/instructor-dashboard";
//       setDashboardLink(dashboardUrl);
//       const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
//       setProfilePhoto(profilePhotoUrl);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const changeHeaderBackground = () => {
//     if (window.scrollY >= 90) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeHeaderBackground);
//     return () => window.removeEventListener("scroll", changeHeaderBackground);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("trainerToken");
//     localStorage.removeItem("profilePhotoUrl");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const NavLinks = () => (
//     <>
//       <DarkMode />
//       {isLoggedIn ? (
//         <>
//           <Link className="nav-link header-sign" to={dashboardLink}>
//             {profilePhoto ? (
//               <img src={profilePhoto} alt="Profile" className="profile-photo" />
//             ) : (
//               <i className="fas fa-user-circle" style={{ marginRight: "10px" }} />
//             )}
//             Dashboard
//           </Link>
//           <button className="nav-link header-sign" onClick={handleLogout}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <>
//           <Link className="nav-link header-sign" to="/login">
//             Signin
//           </Link>
//           <Link className="nav-link header-login" to="/register">
//             Signup
//           </Link>
//         </>
//       )}
//     </>
//   );

//   return (
//     <HeaderWrapper navbar={navbar} isMenuOpen={isMenuOpen}>
      
//       <div className="main-header">
//         <div className="container">
//           <Link to="/home" className="logo">
//             <img src={logo5} alt="Logo" />
//           </Link>
//           <div className="nav-links">
//             <NavLinks />
//           </div>
//           <div className="menu-icon" onClick={toggleMenu}>
//             <FaBars />
//           </div>
//         </div>
//       </div>
//       <div className="mobile-menu">
//         <div className="close-icon" onClick={toggleMenu}>
//           <FaTimes />
//         </div>
//         <NavLinks />
//       </div>
//       <div className="overlay" onClick={toggleMenu}></div>
//     </HeaderWrapper>
//   );
// };

// export default Header;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from 'styled-components';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo5 from '../../assets/newlogo.jpg'
// // import DarkMode from "../common/darkMode";

// const StyledHeader = styled.header`
//   .header__top-bar {
//     background-color: white;
//     color: #4a5568;
//     padding: 0.5rem 1rem;
//     border-bottom: 2px solid #e2e8f0;

//     @media (min-width: 768px) {
//       padding: 1rem;
//     }
//   }

//   .header__main-header {
//     background-color: ${props => props.navbar ? 'transparent' : 'transparent'};
//     transition: background-color 0.3s ease;
//     box-shadow: ${props => props.navbar ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
//   }

//   .header__container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 1rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .header__logo img {
//     height: 80px;
//     width:200px;
//     object-fit:cover;
//     @media (min-width: 768px) {
//       height: 60px;
//     }
//   }

//   .header__nav-links {
//     display: flex;
//     align-items: center;

//     @media (max-width: 767px) {
//       display: none;
//     }
//   }

//   .header__nav-link {
//     margin-left: 1rem;
//     text-decoration: none;
//     color: #4a5568;
//     font-weight: 500;
//     font-size: 0.9rem;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #2d3748;
//     }

//     @media (min-width: 768px) {
//       font-size: 1rem;
//       margin-left: 1.5rem;
//     }
//   }

//   .header__profile-photo {
//     width: 35px;
//     height: 35px;
//     border-radius: 50%;
//     margin-right: 10px;
//   }

//   .header__sign-button, .header__login-button {
//     padding: 0.5rem 1rem;
//     border-radius: 9999px;
//     font-size: 0.9rem;
//     transition: all 0.3s ease;
//     cursor: pointer;

//     &:hover {
//       opacity: 0.9;
//     }

//     @media (min-width: 768px) {
//       font-size: 1rem;
//     }
//   }

//   .header__sign-button {
//     border: 1px solid #ed8936;
//     color: #ed8936;

//     &:hover {
//       background-color: #ed8936;
//       color: white;
//     }
//   }

//   .header__login-button {
//     background-color: #ed8936;
//     color: white;

//     &:hover {
//       background-color: #dd6b20;
//     }
//   }

//   .header__menu-icon {
//     display: none;
//     font-size: 1.8rem;
//     cursor: pointer;

//     @media (max-width: 767px) {
//       display: block;
//     }
//   }

//   .header__mobile-menu {
//     position: fixed;
//     top: 0;
//     right: ${props => props.isMenuOpen ? '0' : '-100%'};
//     width: 70%;
//     height: 100vh;
//     background-color: white;
//     padding: 2rem;
//     transition: right 0.3s ease-in-out;
//     z-index: 1000;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;

//     .header__close-icon {
//       align-self: flex-end;
//       font-size: 1.8rem;
//       cursor: pointer;
//       margin-bottom: 2rem;
//     }

//     .header__nav-link {
//       margin: 1.5rem 0;
//       font-size: 1.2rem;
//       color: #4a5568;
//     }
//   }

//   .header__overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: ${props => props.isMenuOpen ? 'block' : 'none'};
//     z-index: 999;
//   }
// `;

// const Header = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [dashboardLink, setDashboardLink] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const studentToken = localStorage.getItem("token");
//     const trainerToken = localStorage.getItem("trainerToken");
//     const role = studentToken ? "student" : trainerToken ? "trainer" : null;

//     if (role) {
//       setIsLoggedIn(true);
//       const dashboardUrl = role === "student" ? "/student/student-setting" : "/instructor/instructor-dashboard";
//       setDashboardLink(dashboardUrl);
//       const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
//       setProfilePhoto(profilePhotoUrl);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const changeHeaderBackground = () => {
//     if (window.scrollY >= 90) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeHeaderBackground);
//     return () => window.removeEventListener("scroll", changeHeaderBackground);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("trainerToken");
//     localStorage.removeItem("profilePhotoUrl");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const NavLinks = () => (
//     <>
//       {isLoggedIn ? (
//         <>
//           <Link className="header__nav-link header__sign-button" to={dashboardLink}>
//             {profilePhoto ? (
//               <img src={profilePhoto} alt="Profile" className="header__profile-photo" />
//             ) : (
//               <i className="fas fa-user-circle" style={{ marginRight: "10px" }} />
//             )}
//             Dashboard
//           </Link>
//           <button className="header__nav-link header__sign-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <>
//           <Link className="header__nav-link header__sign-button" to="/login">
//             Signin
//           </Link>
//           <Link className="header__nav-link header__login-button" to="/register">
//             Signup
//           </Link>
//         </>
//       )}
//     </>
//   );

//   return (
//     <StyledHeader navbar={navbar} isMenuOpen={isMenuOpen}>
//       <div className="header__main-header">
//         <div className="header__container">
//           <Link to="/home" className="header__logo">
//             <img src={logo5} alt="Logo" />
//           </Link>
//           <div className="header__nav-links">
//             <NavLinks />
//           </div>
//           <div className="header__menu-icon" onClick={toggleMenu}>
//             <FaBars />
//           </div>
//         </div>
//       </div>
//       <div className="header__mobile-menu">
//         <div className="header__close-icon" onClick={toggleMenu}>
//           <FaTimes />
//         </div>
//         <NavLinks />
//       </div>
//       <div className="header__overlay" onClick={toggleMenu}></div>
//     </StyledHeader>
//   );
// };

// export default Header;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo5 from '../../assets/newlogo.jpg'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  transition: all 0.3s ease-in-out;

  .header__top-bar {
    background-color: rgba(255, 255, 255, 0.9);
    color: #4a5568;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid rgba(226, 232, 240, 0.8);

    @media (min-width: 768px) {
      padding: 1rem;
    }
  }

  .header__main-header {
    background-color: ${props => props.navbar ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
    transition: background-color 0.3s ease;
    box-shadow: ${props => props.navbar ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
  }

  .header__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__logo img {
    height: 80px;
    width: 200px;
    object-fit: cover;
    @media (min-width: 768px) {
      height: 60px;
    }
  }

  .header__nav-links {
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .header__nav-link {
    margin-left: 1rem;
    text-decoration: none;
    color: #4a5568;
    font-weight: 500;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: #2d3748;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
      margin-left: 1.5rem;
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
    border: 1px solid #ed8936;
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
    display: none;
    font-size: 1.8rem;
    cursor: pointer;

    @media (max-width: 767px) {
      display: block;
    }
  }

  .header__mobile-menu {
    position: fixed;
    top: 0;
    right: ${props => props.isMenuOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .header__close-icon {
      align-self: flex-end;
      font-size: 1.8rem;
      cursor: pointer;
      margin-bottom: 2rem;
    }

    .header__nav-link {
      margin: 1.5rem 0;
      font-size: 1.2rem;
      color: #4a5568;
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
          <button className="header__nav-link header__sign-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="header__nav-link header__sign-button" to="/login">
            Signin
          </Link>
          <Link className="header__nav-link header__login-button" to="/register">
            Signup
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