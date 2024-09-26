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
// import React, { useEffect, useRef, useState } from "react";
// import { Home, LogOut, Star, Menu, X } from "react-feather";
// import { Link, useNavigate } from "react-router-dom";
// import logo5 from "../../../assets/logo5.png";
// import styled from 'styled-components';

// const HeaderWrapper = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1000;
//   background-color: ${props => props.navbar ? '#ffffff' : 'transparent'};
//   box-shadow: ${props => props.navbar ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
//   transition: all 0.3s ease;
// `;

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
//   width: 100%;
//   z-index: 1000;
//   @media (max-width: 768px) {
//     margin-bottom: 4px;
//   }
// `;

// const Logo = styled.img`
//   height: 50px;
//   @media (max-width: 768px) {
//     height: 40px;
//   }
// `;

// const MenuButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   cursor: pointer;
//   transition: transform 0.2s;
  
//   &:hover {
//     transform: scale(1.1);
//   }

//   @media (max-width: 768px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const NavMenu = styled.div`
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     right: ${props => props.mobileMenu ? '0' : '-100%'};
//     height: 100vh;
//     width: 300px;
//     flex-direction: column;
//     background-color: #ffffff;
//     box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
//     transition: right 0.3s ease-in-out;
//     padding: 2rem;
//     overflow-y: auto;
//   }
// `;

// const CloseButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   cursor: pointer;
//   align-self: flex-end;
//   margin-bottom: 1rem;
//   font-size: 1.5rem;
//   color: #FF875A;

//   @media (max-width: 768px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const ProfileDropdown = styled.div`
//   position: relative;
// `;

// const ProfileMenu = styled.div`
//   display: ${props => props.show ? 'flex' : 'none'};
//   position: absolute;
//   right: 0;
//   top: 100%;
//   background-color: #ffffff;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   border-radius: 4px;
//   padding: 1rem;
//   min-width: 220px;
//   flex-direction: column;
//   z-index: 1001;

//   @media (max-width: 768px) {
//     position: static;
//     display: flex;
//     box-shadow: none;
//     padding: 0;
//   }
// `;

// const ProfileInfo = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   margin-bottom: 1rem;
//   padding: 0.5rem;
//   border-bottom: 1px solid #eee;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     text-align: center;
//   }

//   h6 {
//     margin: 0.5rem 0 0.25rem 0;
//     font-size: 1rem;
//     font-weight: bold;
//     color: #333;
//   }

//   p {
//     margin: 0;
//     font-size: 0.875rem;
//     color: #666;
//   }
// `;

// const ProfileImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const ProfileImage1 = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     width: 70px;
//     height: 70px;
//     margin-bottom: 0.5rem;
//   }
// `;

// const NavItem = styled(Link)`
//   display: flex;
//   align-items: center;
//   padding: 0.75rem;
//   color: #333;
//   text-decoration: none;
//   transition: background-color 0.2s, transform 0.2s;
//   border-radius: 4px;

//   &:hover {
//     background-color: #f5f5f5;
//     transform: scale(1.02);
//   }

//   svg {
//     margin-right: 0.75rem;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const LogoutButton = styled.button`
//   display: flex;
//   align-items: center;
//   padding: 0.75rem;
//   color: #333;
//   background: none;
//   border: none;
//   width: 100%;
//   text-align: left;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.2s, transform 0.2s;
//   border-radius: 4px;

//   &:hover {
//     background-color: #f5f5f5;
//     transform: scale(1.02);
//   }

//   svg {
//     margin-right: 0.75rem;
//   }
// `;

// const Overlay = styled.div`
//   display: ${props => props.show ? 'block' : 'none'};
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 999;
// `;

// export default function InstructorHeader() {
//   const [navbar, setNavbar] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [instructorData, setInstructorData] = useState(null);

//   const profile = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('trainerToken');
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch("https://api.novajobs.us/api/trainers/profile", {
//           headers: {
//             Authorization: `${token}`,
//           },
//         });
//         const result = await response.json();
//         if (result.status === 'success') {
//           setInstructorData(result.data);
//         } else {
//           console.error(result.message);
//         }
//       } catch (error) {
//         console.error("Error fetching profile data", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profile.current && !profile.current.contains(event.target)) {
//         setShowProfile(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [profile]);

//   const toggleMobileMenu = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   const profileClick = (e) => {
//     e.preventDefault();
//     setShowProfile(!showProfile);
//   };

//   const changeHeaderBackground = () => {
//     if (window.scrollY >= 60) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeHeaderBackground);
//     return () => {
//       window.removeEventListener("scroll", changeHeaderBackground);
//     };
//   }, []);

//   if (!instructorData) {
//     return <div>Loading...</div>;
//   }

//   const handleLogout = () => {
//     localStorage.removeItem('trainerToken');
//     navigate('/home');
//   };

//   return (
//     <>
//       <HeaderWrapper navbar={navbar}>
//         <NavbarContainer>
//           <Link to="/home">
//             <Logo src={logo5} alt="Logo" />
//           </Link>
//           <MenuButton onClick={toggleMobileMenu} aria-label="Open menu">
//             <Menu size={24} />
//           </MenuButton>
//           <NavMenu mobileMenu={mobileMenu}>
//             <CloseButton onClick={toggleMobileMenu} aria-label="Close menu">
//               <X size={24} />
//             </CloseButton>
//             <ProfileDropdown ref={profile}>
//               <ProfileImage
//                 src={`https://api.novajobs.us${instructorData.photo}`}
//                 alt="User"
//                 onClick={profileClick}
//               />
//               <ProfileMenu show={showProfile || mobileMenu}>
//                 <ProfileInfo>
//                 <ProfileImage1
//                   src={`https://api.novajobs.us${instructorData.photo}`}
//                   alt="User"
//                   onClick={profileClick}
//                 />
//                   <div>
//                     <h6>{instructorData.first_name} {instructorData.last_name}</h6>
//                     <p>{instructorData.jobtitle}</p>
//                   </div>
//                 </ProfileInfo>
//                 <NavItem to="/instructor/instructor-dashboard">
//                   <Home size={20} /> Dashboard
//                 </NavItem>
//                 <NavItem to="/instructor/instructor-settings">
//                   <Star size={20} /> Edit Profile
//                 </NavItem>
//                 <LogoutButton onClick={handleLogout}>
//                   <LogOut size={20} /> Logout
//                 </LogoutButton>
//               </ProfileMenu>
//             </ProfileDropdown>
//           </NavMenu>
//           <Overlay show={mobileMenu} onClick={toggleMobileMenu} />
//         </NavbarContainer>
//       </HeaderWrapper>
//     </>
//   );
// }