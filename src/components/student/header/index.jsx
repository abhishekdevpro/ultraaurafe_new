// /* eslint-disable no-unused-vars */
// import React, { useEffect, useRef, useState } from "react";
// import { Home, LogOut, Moon, Star, User } from "react-feather";
// import { Link } from "react-router-dom";
// import logo5 from "../../../assets/logo5.png"

// import useOnClickOutside from "../../../hooks/useOnClickOutside";
// import {
  
//   Course14,
//   Course15,
//   Course4,
//   logo,
  
//   User11,
//   User16,
  
// } from "../../imagepath";
// import DarkMode from "../../common/darkMode";
// import menu_data from "../../header/menu-data";
// import axios from "axios";
// // eslint-disable-next-line react/prop-types
// export default function StudentHeader({ activeMenu }) {
//   const [navbar, setNavbar] = useState(false);

//   const [showCart, setShowCart] = useState(false);
//   const [showWish, setShowWish] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   // Mobile Menu toggle
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [mobileSubMenu, setMobileSubMenu] = useState(false);
//   const [mobileSubMenu2, setMobileSubMenu2] = useState(false);
//   const [mobileSubMenu22, setMobileSubMenu22] = useState(false);
//   const [mobileSubMenu3, setMobileSubMenu3] = useState(false);
//   const [mobileSubMenu32, setMobileSubMenu32] = useState(false);
//   const [mobileSubMenu4, setMobileSubMenu4] = useState(false);
//   const [mobileSubMenu42, setMobileSubMenu42] = useState(false);
//   const [mobileSubMenu43, setMobileSubMenu43] = useState(false);
//   const [mobileSubMenu5, setMobileSubMenu5] = useState(false);
//   const [profileData, setProfileData] = useState(null);
//   const Profile = useRef(null);

//   useEffect(() => {
//     // Fetch profile data
//     const token = localStorage.getItem('token')
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("https://api.novajobs.us/api/students/profile", {
//           headers: {
//             Authorization: `${token}`, // Replace with your actual token
//           },
//         });
//         setProfileData(response.data.data);
//       } catch (error) {
//         console.error("Error fetching profile data", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const ProfileClick = () => {
//     setShowProfile(!showProfile);
//   };

//   if (!profileData) {
//     return <div>Loading...</div>; // You can add a loading spinner here if needed
//   }

//   const openMobileMenu = () => {
//     document.body.classList.add("menu-opened");
//     setMobileMenu(true);
//   };
//   const hideMobileMenu = () => {
//     document.body.classList.remove("menu-opened");
//     setMobileMenu(false);
//   };

//   const openMobileSubMenu = (e) => {
//     e.preventDefault();
//     setMobileSubMenu(!mobileSubMenu);
//   };
//   const openMobileSubMenu2 = (e) => {
//     e.preventDefault();
//     setMobileSubMenu2(!mobileSubMenu2);
//   };
//   const openMobileSubMenu22 = (e) => {
//     e.preventDefault();
//     setMobileSubMenu22(!mobileSubMenu22);
//   };
//   const openMobileSubMenu3 = (e) => {
//     e.preventDefault();
//     setMobileSubMenu3(!mobileSubMenu3);
//   };
//   const openMobileSubMenu32 = (e) => {
//     e.preventDefault();
//     setMobileSubMenu32(!mobileSubMenu32);
//   };
//   const openMobileSubMenu4 = (e) => {
//     e.preventDefault();
//     setMobileSubMenu4(!mobileSubMenu4);
//   };
//   const openMobileSubMenu42 = (e) => {
//     e.preventDefault();
//     setMobileSubMenu42(!mobileSubMenu42);
//   };
//   const openMobileSubMenu43 = (e) => {
//     e.preventDefault();
//     setMobileSubMenu43(!mobileSubMenu43);
//   };
//   const openMobileSubMenu5 = (e) => {
//     e.preventDefault();
//     setMobileSubMenu5(!mobileSubMenu5);
//   };
//   // To close the modal, when clicked outside anywhere
//   const cart = useRef();
//   useOnClickOutside(cart, () => setShowCart(false));

//   const wish = useRef();
//   useOnClickOutside(wish, () => setShowWish(false));

//   const notification = useRef();
//   useOnClickOutside(notification, () => setShowNotification(false));

//   const profile = useRef();
//   useOnClickOutside(profile, () => setShowProfile(false));

//   // Cart Click
//   const cartClick = (e) => {
//     e.preventDefault();
//     // if (showWish) {
//     //   setShowWish(false);
//     // }
//     setShowCart(!showCart);
//     console.log(showCart);
//   };

//   const wishClick = (e) => {
//     e.preventDefault();
//     // if (showCart) {
//     //   setShowCart(false);
//     // }
//     setShowWish(!showWish);
//   };

//   const notificationClick = (e) => {
//     e.preventDefault();
//     setShowNotification(!showNotification);
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
//           <div className="container ">
//             <div className="navbar-header">
//               <Link id="mobile_btn" to="#" onClick={openMobileMenu}>
//                 <span className="bar-icon">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </span>
//               </Link>
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
//                   to="#"
//                   onClick={hideMobileMenu}
//                 >
//                   <i className="fas fa-times"></i>
//                 </Link>
//               </div>
//             </div>
//             <ul className="main-nav">
//   {menu_data.map((item) => (
//     <li key={item.id} className="has-submenu">
//       <Link to={item.link}>{item.title}</Link>
//       {item.sub_menus.length > 0 && (
//         <ul className="submenu">
//           {item.sub_menus.map((sub, i) => (
//             <li key={i}>
//               <Link to={sub.link}>{sub.title}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   ))}
// </ul>
//             <ul className="nav header-navbar-rht">
//             <DarkMode/>
//               <li className="nav-item cart-nav">
                
//                 <div
//                   ref={cart}
//                   className={
//                     showCart
//                       ? "wishes-list dropdown-menu dropdown-menu-right show modalPosition"
//                       : "wishes-list dropdown-menu dropdown-menu-right"
//                   }
//                   // data-bs-popper={cart && "none"}
//                 >
//                   <div className="wish-header">
//                     <Link to="#">View Cart</Link>
//                     <Link to="#" className="float-end">
//                       Checkout
//                     </Link>
//                   </div>
//                   <div className="wish-content">
//                     <ul>
//                       <li>
//                         <div className="media">
//                           <div className="d-flex media-wide">
//                             <div className="avatar">
//                               <Link to="/course-details">
//                                 <img alt="" src={Course4} />
//                               </Link>
//                             </div>
//                             <div className="media-body">
//                               <h6>
//                                 <Link to="/course-details">
//                                   Learn Angular...
//                                 </Link>
//                               </h6>
//                               <p>By Dave Franco</p>
//                               <h5>
//                                 $200 <span>$99.00</span>
//                               </h5>
//                             </div>
//                           </div>
//                           <div className="remove-btn">
//                             <Link to="#" className="btn">
//                               Remove
//                             </Link>
//                           </div>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="media">
//                           <div className="d-flex media-wide">
//                             <div className="avatar">
//                               <Link to="/course-details">
//                                 <img alt="" src={Course14} />
//                               </Link>
//                             </div>
//                             <div className="media-body">
//                               <h6>
//                                 <Link to="/course-details">
//                                   Build Responsive Real...
//                                 </Link>
//                               </h6>
//                               <p>Jenis R.</p>
//                               <h5>
//                                 $200 <span>$99.00</span>
//                               </h5>
//                             </div>
//                           </div>
//                           <div className="remove-btn">
//                             <Link to="#" className="btn">
//                               Remove
//                             </Link>
//                           </div>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="media">
//                           <div className="d-flex media-wide">
//                             <div className="avatar">
//                               <Link to="/course-details">
//                                 <img alt="" src={Course15} />
//                               </Link>
//                             </div>
//                             <div className="media-body">
//                               <h6>
//                                 <Link to="/course-details">
//                                   C# Developers Double ...
//                                 </Link>
//                               </h6>
//                               <p>Jesse Stevens</p>
//                               <h5>
//                                 $200 <span>$99.00</span>
//                               </h5>
//                             </div>
//                           </div>
//                           <div className="remove-btn">
//                             <Link to="#" className="btn">
//                               Remove
//                             </Link>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                     <div className="total-item">
//                       <h6>Subtotal : $ 600</h6>
//                       <h5>Total : $ 600</h5>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Wish Content shows on Click */}
//               </li>
             
//               {/* <li className="nav-item user-nav">
//                 <Link
//                   to="#"
//                   className={
//                     showProfile ? "dropdown-toggle show" : "dropdown-toggle"
//                   }
//                   data-bs-toggle="dropdown"
//                   onClick={profileClick}
//                 >
//                   <span className="user-img">
//                     <img src={User16} alt="" />
//                     <span className="status online"></span>
//                   </span>
//                 </Link>
//                 <div
//                   ref={profile}
//                   className={
//                     showProfile
//                       ? "users dropdown-menu dropdown-menu-right show modalPosition"
//                       : "users dropdown-menu dropdown-menu-right"
//                   }
//                   data-popper-placement="bottom-end"
//                 >
//                   <div className="user-header">
//                     <div className="avatar avatar-sm">
//                       <img
//                         src={User16}
//                         alt="User Image"
//                         className="avatar-img rounded-circle"
//                       />
//                     </div>
//                     <div className="user-text">
//                       <h6>Rolands R</h6>
//                       <p className="text-muted text mb-0">Student</p>
//                     </div>
//                   </div>
//                   <Link
//                     className="dropdown-item text"
//                     to="/student/student-dashboard"
//                   >
//                     <Home size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
//                     Dashboard
//                   </Link>
//                   <Link
//                     className="dropdown-item text"
//                     to="/student/student-setting"
//                   >
//                     <User size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
//                     Profile
//                   </Link>
//                   <Link
//                     className="dropdown-item text"
//                     to="/student/setting-student-subscription"
//                   >
//                     <Star size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
//                     Subscription
//                   </Link>
//                   <div className="dropdown-item text night-mode">
//                     <span>
//                       <Moon size={14} className="headerIcon" /> Night Mode{" "}
//                     </span>
//                     <div className="form-check form-switch check-on m-0">
//                       <input
//                         className="form-check-input focusShadow"
//                         type="checkbox"
//                         id="night-mode"
//                       />
//                     </div>
//                   </div>
//                   <Link className="dropdown-item text" to="/home">
//                     <LogOut
//                       size={14}
//                       color={"#FF875A"}
//                       className="headerIcon me-1"
//                     />{" "}
//                     Logout
//                   </Link>
//                 </div>
//               </li> */}
//                <li className="nav-item user-nav">
//       <Link
//         to="#"
//         className={showProfile ? "dropdown-toggle show" : "dropdown-toggle"}
//         data-bs-toggle="dropdown"
//         onClick={profileClick}
//       >
//         <span className="user-img">
//           <img src={profileData.photo} alt="User" />
//           <span className="status online"></span>
//         </span>
//       </Link>
//       <div
//         ref={profile}
//         className={
//           showProfile
//             ? "users dropdown-menu dropdown-menu-right show modalPosition"
//             : "users dropdown-menu dropdown-menu-right"
//         }
//         data-popper-placement="bottom-end"
//       >
//         <div className="user-header">
//           <div className="avatar avatar-sm">
//             <img
//               src={profileData.photo}
//               alt="User Image"
//               className="avatar-img rounded-circle"
//             />
//           </div>
//           <div className="user-text">
//             <h6>{profileData.first_name} {profileData.last_name}</h6>
//             <p className="text-muted text mb-0">Student</p>
//           </div>
//         </div>
//         <Link className="dropdown-item text" to="/student/student-dashboard">
//           <Home size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
//           Dashboard
//         </Link>
//         <Link className="dropdown-item text" to="/student/student-setting">
//           <User size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
//           Profile
//         </Link>
//         <Link className="dropdown-item text" to="/student/setting-student-subscription">
//           <Star size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
//           Subscription
//         </Link>
//         <div className="dropdown-item text night-mode">
//           <span>
//             <Moon size={14} className="headerIcon" /> Night Mode{" "}
//           </span>
//           <div className="form-check form-switch check-on m-0">
//             <input
//               className="form-check-input focusShadow"
//               type="checkbox"
//               id="night-mode"
//             />
//           </div>
//         </div>
//         <Link className="dropdown-item text" to="/home">
//           <LogOut
//             size={14}
//             color={"#FF875A"}
//             className="headerIcon me-1"
//           />{" "}
//           Logout
//         </Link>
//       </div>
//     </li>
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
import { Home, LogOut, Moon, User } from "react-feather";
import { Link } from "react-router-dom";
import logo5 from "../../../assets/logo5.png";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import PropTypes from "prop-types"; 
import {
  Course14,
  Course15,
  Course4,
} from "../../imagepath";
import DarkMode from "../../common/darkMode";
import menu_data from "../../header/menu-data";
import axios from "axios";

export default function StudentHeader( ) {
  const [navbar, setNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const cart = useRef();
  const wish = useRef();
  const notification = useRef();
  const profile = useRef();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchProfile = async () => {
      try {
        const response = await axios.get("https://api.novajobs.us/api/students/profile", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setProfileData(response.data.data);
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    fetchProfile();
  }, []);

  useOnClickOutside(cart, () => setShowCart(false));
  useOnClickOutside(wish, () => setShowWish(false));
  useOnClickOutside(notification, () => setShowNotification(false));
  useOnClickOutside(profile, () => setShowProfile(false));

  const openMobileMenu = () => {
    document.body.classList.add("menu-opened");
    setMobileMenu(true);
  };

  const hideMobileMenu = () => {
    document.body.classList.remove("menu-opened");
    setMobileMenu(false);
  };

  const cartClick = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  const wishClick = (e) => {
    e.preventDefault();
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

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderBackground);
    return () => {
      window.removeEventListener("scroll", changeHeaderBackground);
    };
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

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
              <Link id="mobile_btn" to="#" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
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
                  to="#"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>
            </div>
            <ul className="main-nav">
              {menu_data.map((item) => (
                <li key={item.id} className={item.sub_menus.length > 0 ? "has-submenu" : ""}>
                  <Link to={item.link}>{item.title}</Link>
                  {item.sub_menus.length > 0 && (
                    <ul className="submenu">
                      {item.sub_menus.map((sub, i) => (
                        <li key={i}>
                          <Link to={sub.link}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <ul className="nav header-navbar-rht">
              <DarkMode />
              <li className="nav-item cart-nav">
                <Link to="#" className="dropdown-toggle" onClick={cartClick}>
                  <i className="fas fa-shopping-cart"></i>
                </Link>
                <div
                  ref={cart}
                  className={
                    showCart
                      ? "wishes-list dropdown-menu dropdown-menu-right show modalPosition"
                      : "wishes-list dropdown-menu dropdown-menu-right"
                  }
                >
                  <div className="wish-header">
                    <Link to="#">View Cart</Link>
                    <Link to="#" className="float-end">
                      Checkout
                    </Link>
                  </div>
                  <div className="wish-content">
                    <ul>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course4} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  Learn Angular...
                                </Link>
                              </h6>
                              <p>By Dave Franco</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                            </div>
                          </div>
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course14} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  Build Responsive Real...
                                </Link>
                              </h6>
                              <p>Jenis R.</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                            </div>
                          </div>
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="d-flex media-wide">
                            <div className="avatar">
                              <Link to="/course-details">
                                <img alt="" src={Course15} />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/course-details">
                                  C# Developers Double ...
                                </Link>
                              </h6>
                              <p>Jesse Stevens</p>
                              <h5>
                                $200 <span>$99.00</span>
                              </h5>
                            </div>
                          </div>
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="total-item">
                      <h6>Subtotal : $ 600</h6>
                      <h5>Total : $ 600</h5>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item wish-nav">
                <Link to="#" className="dropdown-toggle" onClick={wishClick}>
                  <i className="far fa-heart"></i>
                </Link>
              </li>
              <li className="nav-item noti-nav">
                <Link to="#" className="dropdown-toggle" onClick={notificationClick}>
                  <i className="far fa-bell"></i>
                </Link>
              </li>
              <li className="nav-item user-nav">
                <Link
                  to="#"
                  className={showProfile ? "dropdown-toggle show" : "dropdown-toggle"}
                  data-bs-toggle="dropdown"
                  onClick={profileClick}
                >
                  <span className="user-img">
                    <img src={`https://api.novajobs.us${profileData.photo}`} alt="User" />
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
                        src={`https://api.novajobs.us${profileData.photo}`}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>{profileData.first_name} {profileData.last_name}</h6>
                      <p className="text-muted text mb-0">Student</p>
                    </div>
                  </div>
                  <Link
                    className="dropdown-item text"
                    to="/student/student-dashboard"
                  >
                    <Home size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
                    Dashboard
                  </Link>
                  <Link
                    className="dropdown-item text"
                    to="/student/student-setting"
                  >
                    <User size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
                    Profile
                  </Link>
                  {/* <Link
                    className="dropdown-item text"
                    to="/student/setting-student-subscription"
                  >
                    <Star size={14} color={"#FF875A"} className="headerIcon me-1" />{" "}
                    Subscription
                  </Link> */}
                  <div className="dropdown-item text night-mode">
                    <span>
                      <Moon size={14} className="headerIcon" /> Night Mode{" "}
                    </span>
                    <div className="form-check form-switch check-on m-0">
                      <input
                        className="form-check-input focusShadow"
                        type="checkbox"
                        id="night-mode"
                      />
                    </div>
                  </div>
                  <Link className="dropdown-item text" to="/home">
                    <LogOut
                      size={14}
                      color={"#FF875A"}
                      className="headerIcon me-1"
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

StudentHeader.propTypes = {
  activeMenu: PropTypes.string.isRequired, // Adjust the type according to your actual usage
};