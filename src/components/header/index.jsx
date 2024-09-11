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

//   const openMobileMenu = () => {
//     document.body?.classList?.add("menu-opened");
//   };

//   // const hideMobileMenu = () => {
//   //   document.body?.classList?.remove("menu-opened");
//   // };

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
            
//               <Link to="/home" className="navbar-brand logo">
//                 <img src={logo5} className="img-fluid" alt="Logo" />
//               </Link>
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
//     background-color: ${({ navbar }) => (navbar ? "#fff" : "transparent")};
//     transition: background-color 0.3s ease, box-shadow 0.3s ease;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem 2rem;
//     box-shadow: ${({ navbar }) => (navbar ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none")};
//   }

//   .nav.header-navbar-rht {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     position: fixed;
//     top: 0;
//     right: ${({ showMenu }) => (showMenu ? "0" : "-300px")};
//     height: 100vh;
//     width: 300px;
//     background-color: #fff;
//     transition: right 0.3s ease-in-out;
//     box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
//     padding-top: 60px;
//   }

//   .nav-item {
//     padding: 15px 20px;
//     cursor: pointer;
//     border-bottom: 1px solid #eee;
//     width: 100%;
//     text-align: center;
//     transition: background-color 0.2s ease;

//     &:hover {
//       background-color: #f8f9fa;
//     }

//     &:last-child {
//       border-bottom: none;
//     }
//   }

//   .menu-icon {
//     font-size: 24px;
//     cursor: pointer;
//     z-index: 1001;
//     position: relative;
//   }

//   .profile-photo {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     object-fit: cover;
//     border: 2px solid #fff;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//   }

//   .logo img {
//     height: 40px;
//     transition: transform 0.3s ease;

//     &:hover {
//       transform: scale(1.05);
//     }
//   }

//   @media (min-width: 769px) {
//     .nav.header-navbar-rht {
//       flex-direction: row;
//       position: static;
//       height: auto;
//       width: auto;
//       background-color: transparent;
//       box-shadow: none;
//       padding-top: 0;
//     }

//     .nav-item {
//       border-bottom: none;
//       width: auto;
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
//     setShowMenu(!showMenu);
//   };

//   return (
//     <HeaderContainer navbar={navbar} showMenu={showMenu}>
//       <div className="header-fixed">
//         <nav className="navbar">
//           <div className="container">
//             <Link to="/home" className="navbar-brand logo">
//               <img src={logo5} className="img-fluid" alt="Logo" />
//             </Link>

//             <div className="menu-icon" onClick={toggleMenu}>
//               {isLoggedIn ? (
//                 profilePhoto ? (
//                   <img
//                     src={profilePhoto}
//                     alt="Profile"
//                     className="profile-photo"
//                   />
//                 ) : (
//                   <i className="fas fa-user-circle" />
//                 )
//               ) : (
//                 <i className="fas fa-bars" />
//               )}
//             </div>

//             <ul className="nav header-navbar-rht">
//               {isLoggedIn ? (
//                 <>
//                   <li
//                     className="nav-item"
//                     onClick={() => {
//                       setShowMenu(false);
//                       navigate(dashboardLink);
//                     }}
//                   >
//                     Dashboard
//                   </li>
//                   <li className="nav-item">
//                     <DarkMode />
//                   </li>
//                   <li
//                     className="nav-item text-danger"
//                     onClick={() => {
//                       setShowMenu(false);
//                       handleLogout();
//                     }}
//                   >
//                     Logout
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li className="nav-item" onClick={() => setShowMenu(false)}>
//                     <Link to="/login">Signin</Link>
//                   </li>
//                   <li className="nav-item" onClick={() => setShowMenu(false)}>
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

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo5 from "./logo5.png";
import DarkMode from "../common/darkMode";

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
    const studentToken = localStorage.getItem("token");
    const trainerToken = localStorage.getItem("trainerToken");
    const role = studentToken ? "student" : trainerToken ? "trainer" : null;

    if (role) {
      setIsLoggedIn(true);
      const dashboardUrl =
        role === "student" ? "/student/student-setting" : "/instructor/instructor-dashboard";
      setDashboardLink(dashboardUrl);
      const profilePhotoUrl = localStorage.getItem("profilePhotoUrl");
      setProfilePhoto(profilePhotoUrl);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const openMobileMenu = () => {
    document.body?.classList?.add("menu-opened");
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
    localStorage.removeItem("token");
    localStorage.removeItem("trainerToken");
    localStorage.removeItem("profilePhotoUrl");
    setIsLoggedIn(false);
    navigate("/login");
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
              <Link to="/home" className="navbar-brand logo">
                <img src={logo5} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <ul className="nav header-navbar-rht">
              <DarkMode />
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link header-profile border border-warning rounded-5"
                      to={dashboardLink}
                    >
                      {profilePhoto ? (
                        <img
                          src={profilePhoto}
                          alt="Profile"
                          className="profile-photo border"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                      ) : (
                        <i className="fas fa-user-circle" style={{ marginRight: "10px" }} />
                      )}
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link header-sign text-danger border border-warning rounded-5"
                      onClick={handleLogout}
                    >
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
