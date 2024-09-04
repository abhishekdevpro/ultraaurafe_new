// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // import { logo } from "../imagepath";
// import logo5 from "./logo5.png"

// import DarkMode from "../common/darkMode";
// import menu_data from "./menu-data";

// const Header = () => {
//   useEffect(() => {
//     document.body?.classList?.remove("menu-opened");
//     return () => {
//       document.body.className = "";
//     };
//   }, []);

//   // change header background on scroll
//   const [navbar, setNavbar] = useState(false);
//   // Mobile Menu toggle
//   const openMobileMenu = () => {
//     document.body?.classList?.add("menu-opened");
//   };
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
//               <Link id="mobile_btn" to="/home" onClick={openMobileMenu}>
//                 <span className="bar-icon">
//                   <span />
//                   <span />
//                   <span />
//                 </span>
//               </Link>
//               <Link to="/home" className="navbar-brand logo">
//                  <img src={logo5} className="img-fluid" alt="Logo" />


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
//              {/* <ul className="main-nav">
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
// </ul> */}
// <ul className="main-nav">
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

//             </div>
//             <ul className="nav header-navbar-rht">
//               <DarkMode/>
//               <li className="nav-item">
//                 <Link className="nav-link header-sign" to="/login">
//                   Signin
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link header-login" to="/register">
//                   Signup
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo5 from "./logo5.png";
import DarkMode from "../common/darkMode";
import menu_data from "./menu-data";
import menu_btn from "./menu-btn";

const Header = () => {
  useEffect(() => {
    document.body?.classList?.remove("menu-opened");
    return () => {
      document.body.className = "";
    };
  }, []);

  const [navbar, setNavbar] = useState(false);

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
              <ul className="main-nav">
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
                
                {menu_btn.map((items) => (
                
                  <li  key={items.id} className="has-submenu nav-item ">
                    <Link className="nav-link header-sign header-sign btn rounded fw-bold" to={items.link}>{items.title}</Link>
                  </li>
                ))}
                
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <DarkMode />
              {/* Uncomment and adjust if needed */}
              {/* <li className="nav-item">
                <Link className="nav-link header-sign" to="/partner-signin">
                  Partner With us
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link header-sign " to="/login">
                  Signin
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link header-login" to="/register">
                  Signup
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

