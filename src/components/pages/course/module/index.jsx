
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useOnClickOutside from "../../../hooks/useOnClickOutside";
// import { User11 } from "../../../imagepath";
// // import DarkMode from "../../../common/darkMode";
// import axios from "axios";
// import styled from "styled-components";

// const Nav = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavItem = styled.li`
//   position: relative;
//   margin-left: 20px;

//   @media (max-width: 768px) {
//     margin-left: 10px;
//   }
// `;

// const UserImg = styled.span`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   position: relative;

//   .user-img {
//     display: flex;
//     align-items: center;

//     img {
//       height: 40px;
//       width: 40px;
//       border-radius: 50%;
//       border: 2px solid #fff; /* Adding a border for better visibility */
//     }

//     .status {
//       height: 12px;
//       width: 12px;
//       border-radius: 50%;
//       background-color: green;
//       position: absolute;
//       bottom: 0;
//       right: 0;
//       border: 2px solid #fff;
//     }
//   }
// `;

// const DropdownMenu = styled.div`
//   display: ${(props) => (props.visible ? "block" : "none")};
//   position: absolute;
//   top: 100%;
//   right: 0;
//   background-color: #fff;
//   border-radius: 4px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   min-width: 200px;
//   z-index: 1000;

//   .user-header {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     border-bottom: 1px solid #ddd;

//     .avatar {
//       margin-right: 10px;

//       img {
//         height: 50px;
//         width: 50px;
//         border-radius: 50%;
//         border: 2px solid #ddd; /* Optional: to match the dropdown border */
//       }
//     }

//     .user-text {
//       h6 {
//         margin: 0;
//         font-size: 16px;
//       }
//     }
//   }

//   .dropdown-item {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     text-decoration: none;
//     color: #333;
//      transition: background-color 0.2s, transform 0.2s;
//     // border-bottom: 1px solid #ddd;

//     &:last-child {
//       border-bottom: none;
//     }

//     &:hover {
//       background-color: #f5f5f5;
//     }

//     .me-1 {
//       margin-right: 10px;
//     }
// `;

// const HeadModule = () => {
//   const [, setShowCart] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [userInfo, setUserInfo] = useState(null);

//   const cart = useRef();
//   const wish = useRef();
//   const noti = useRef();
//   const profile = useRef();

//   const navigate = useNavigate(); // Hook for programmatic navigation

//   useOnClickOutside(cart, () => setShowCart(false));
//   useOnClickOutside(wish, () => setShowCart(false));
//   useOnClickOutside(noti, () => setShowCart(false));
//   useOnClickOutside(profile, () => setShowProfile(false));

//   const trainerToken = localStorage.getItem("trainerToken");
//   const vendorToken = localStorage.getItem("vendorToken");
//   const adminToken = localStorage.getItem("adminToken");
//   const studentToken = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = trainerToken || studentToken || adminToken || vendorToken;

//       try {
//         let apiUrl = "";

//         if (trainerToken) {
//           apiUrl = "https://api.novajobs.us/api/trainers/profile";
//         } else if (studentToken) {
//           apiUrl = "https://api.novajobs.us/api/students/profile";
//         } else if (adminToken) {
//           apiUrl = "https://api.novajobs.us/api/admin/profile";
//         } else if (vendorToken) {
//           apiUrl = "https://api.novajobs.us/api/vendors/profile";
//         } else {
//           throw new Error("No valid token found!");
//         }
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: `${token}`,
//           },
//         });
//         setUserInfo(response.data.data);
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       }
//     };

//     fetchUserProfile();
//   }, [trainerToken, studentToken]);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token or any other session data
//     localStorage.removeItem("trainerToken"); // Remove trainer token if present
//     localStorage.removeItem("vendorToken"); // Remove trainer token if present
//     localStorage.removeItem("adminToken"); // Remove trainer token if present
//     navigate("/home"); // Redirect to login or home page
//   };

//   return (
//     <Nav>
//       {/* <DarkMode /> */}

//       <NavItem ref={profile} onClick={() => setShowProfile(!showProfile)}>
//         <UserImg>
//           <span className="user-img">
//             <img
//               src={`https://api.novajobs.us${userInfo?.photo}` || User11}
//               alt="User"
//             />
//             <span className="status online" />
//           </span>
//         </UserImg>
//         <DropdownMenu visible={showProfile}>
//           <div className="user-header">
//             <div className="avatar avatar-sm">
//               <img
//                 src={`https://api.novajobs.us${userInfo?.photo}` || User11}
//                 alt="User Image"
//                 className="avatar-img rounded-circle"
//               />
//             </div>
//             <div className="user-text">
//               <h6>
//                 {userInfo?.first_name} {userInfo?.last_name}
//               </h6>
//               <p className="text-muted mb-0">
//                 {trainerToken ? "Trainer" : "Student"}
//               </p>
//             </div>
//           </div>
//           <Link
//             className="dropdown-item"
//             to={
//               studentToken
//                 ? "/setting-edit-profile"
//                 : "/instructor/instructor-edit-profile"
//             }
//           >
//             <FeatherIcon icon="user" className="me-1" /> Profile
//           </Link>
//           <Link
//             className="dropdown-item"
//             to={
//               studentToken
//                 ? "/student/student-dashboard"
//                 : "/instructor/instructor-dashboard"
//             }
//           >
//             <FeatherIcon icon="star" className="me-1" /> Dashboard
//           </Link>
//           <button className="dropdown-item" onClick={handleLogout}>
//             <FeatherIcon icon="log-out" className="me-1" /> Logout
//           </button>
//         </DropdownMenu>
//       </NavItem>
//     </Nav>
//   );
// };

// export default HeadModule;
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useOnClickOutside from "../../../hooks/useOnClickOutside";
// import { User11, Messages, Cart, Wish, Notification,  } from "../../../imagepath";
// import axios from "axios";
// import styled from "styled-components";

// const Nav = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavItem = styled.li`
//   position: relative;
//   margin-left: 20px;

//   @media (max-width: 768px) {
//     margin-left: 10px;
//   }
// `;

// const UserImg = styled.span`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   position: relative;

//   .user-img {
//     display: flex;
//     align-items: center;

//     img {
//       height: 40px;
//       width: 40px;
//       border-radius: 50%;
//       border: 2px solid #fff;
//     }

//     .status {
//       height: 12px;
//       width: 12px;
//       border-radius: 50%;
//       background-color: green;
//       position: absolute;
//       bottom: 0;
//       right: 0;
//       border: 2px solid #fff;
//     }
//   }
// `;

// const DropdownMenu = styled.div`
//   display: ${(props) => (props.visible ? "block" : "none")};
//   position: absolute;
//   top: 100%;
//   right: 0;
//   background-color: #fff;
//   border-radius: 4px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   min-width: 200px;
//   z-index: 1000;

//   .user-header {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     border-bottom: 1px solid #ddd;

//     .avatar {
//       margin-right: 10px;

//       img {
//         height: 50px;
//         width: 50px;
//         border-radius: 50%;
//         border: 2px solid #ddd;
//       }
//     }

//     .user-text {
//       h6 {
//         margin: 0;
//         font-size: 16px;
//       }
//     }
//   }

//   .dropdown-item {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     text-decoration: none;
//     color: #333;
//     transition: background-color 0.2s, transform 0.2s;

//     &:last-child {
//       border-bottom: none;
//     }

//     &:hover {
//       background-color: #f5f5f5;
//     }

//     .me-1 {
//       margin-right: 10px;
//     }
//   }
// `;

// const HeadModule = () => {
//   const [showCart, setShowCart] = useState(false);
//   const [showWish, setShowWish] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [userInfo, setUserInfo] = useState(null);

//   const cart = useRef();
//   const wish = useRef();
//   const noti = useRef();
//   const profile = useRef();

//   const navigate = useNavigate();

//   useOnClickOutside(cart, () => setShowCart(false));
//   useOnClickOutside(wish, () => setShowWish(false));
//   useOnClickOutside(noti, () => setShowNotification(false));
//   useOnClickOutside(profile, () => setShowProfile(false));

//   const trainerToken = localStorage.getItem("trainerToken");
//   const vendorToken = localStorage.getItem("vendorToken");
//   const adminToken = localStorage.getItem("adminToken");
//   const studentToken = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = trainerToken || studentToken || adminToken || vendorToken;

//       try {
//         let apiUrl = "";

//         if (trainerToken) {
//           apiUrl = "https://api.novajobs.us/api/trainers/profile";
//         } else if (studentToken) {
//           apiUrl = "https://api.novajobs.us/api/students/profile";
//         } else if (adminToken) {
//           apiUrl = "https://api.novajobs.us/api/admin/profile";
//         } else if (vendorToken) {
//           apiUrl = "https://api.novajobs.us/api/vendors/profile";
//         } else {
//           throw new Error("No valid token found!");
//         }
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: `${token}`,
//           },
//         });
//         setUserInfo(response.data.data);
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//       }
//     };

//     fetchUserProfile();
//   }, [trainerToken, studentToken, adminToken, vendorToken]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("trainerToken");
//     localStorage.removeItem("vendorToken");
//     localStorage.removeItem("adminToken");
//     navigate("/home");
//   };

//   return (
//     <Nav>
//       <NavItem>
//         <Link to="/course-message">
//           <img src={Messages} alt="Messages" />
//         </Link>
//       </NavItem>

//       <NavItem ref={cart} onClick={() => setShowCart(!showCart)}>
//         <Link to="#" className="dropdown-toggle">
//           <img src={Cart} alt="Cart" />
//         </Link>
//         {/* Add cart dropdown content here */}
//       </NavItem>

//       <NavItem ref={wish} onClick={() => setShowWish(!showWish)}>
//         <Link to="#" className="dropdown-toggle">
//           <img src={Wish} alt="Wishlist" />
//         </Link>
//         {/* Add wishlist dropdown content here */}
//       </NavItem>

//       <NavItem ref={noti} onClick={() => setShowNotification(!showNotification)}>
//         <Link to="#" className="dropdown-toggle">
//           <img src={Notification} alt="Notifications" />
//         </Link>
//         {/* Add notification dropdown content here */}
//       </NavItem>

//       <NavItem ref={profile} onClick={() => setShowProfile(!showProfile)}>
//         <UserImg>
//           <span className="user-img">
//             <img
//               src={`https://api.novajobs.us${userInfo?.photo}` || User11}
//               alt="User"
//             />
//             <span className="status online" />
//           </span>
//         </UserImg>
//         <DropdownMenu visible={showProfile}>
//           <div className="user-header">
//             <div className="avatar avatar-sm">
//               <img
//                 src={`https://api.novajobs.us${userInfo?.photo}` || User11}
//                 alt="User Image"
//                 className="avatar-img rounded-circle"
//               />
//             </div>
//             <div className="user-text">
//               <h6>
//                 {userInfo?.first_name} {userInfo?.last_name}
//               </h6>
//               <p className="text-muted mb-0">
//                 {trainerToken ? "Trainer" : "Student"}
//               </p>
//             </div>
//           </div>
//           <Link
//             className="dropdown-item"
//             to={
//               studentToken
//                 ? "/setting-edit-profile"
//                 : "/instructor/instructor-edit-profile"
//             }
//           >
//             <FeatherIcon icon="user" className="me-1" /> Profile
//           </Link>
//           <Link
//             className="dropdown-item"
//             to={
//               studentToken
//                 ? "/student/student-dashboard"
//                 : "/instructor/instructor-dashboard"
//             }
//           >
//             <FeatherIcon icon="star" className="me-1" /> Dashboard
//           </Link>
//           <button className="dropdown-item" onClick={handleLogout}>
//             <FeatherIcon icon="log-out" className="me-1" /> Logout
//           </button>
//         </DropdownMenu>
//       </NavItem>
//     </Nav>
//   );
// };

// export default HeadModule;

import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { User11, Messages, Cart, Wish, Notification } from "../../../imagepath";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
    &:not(:last-child) {
      display: none;
    }
  }
`;

const UserImg = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  .user-img {
    display: flex;
    align-items: center;

    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      border: 2px solid #fff;
    }

    .status {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: green;
      position: absolute;
      bottom: 0;
      right: 0;
      border: 2px solid #fff;
    }
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 250px;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 280px;
  }

  .user-header {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ddd;

    .avatar {
      margin-right: 15px;

      img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: 2px solid #ddd;
      }
    }

    .user-text {
      h6 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
      }
      p {
        margin: 5px 0 0;
        font-size: 14px;
        color: #666;
      }
    }
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.2s, transform 0.2s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #f5f5f5;
      transform: translateX(5px);
    }

    .me-1 {
      margin-right: 12px;
      width: 20px;
      height: 20px;
    }
  }

  .mobile-only {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const HeadModule = ({courseId}) => {
  console.log(typeof(courseId));
  const [showProfile, setShowProfile] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const profile = useRef();
  const navigate = useNavigate();

  useOnClickOutside(profile, () => setShowProfile(false));

  const trainerToken = localStorage.getItem("trainerToken");
  const vendorToken = localStorage.getItem("vendorToken");
  const adminToken = localStorage.getItem("adminToken");
  const studentToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = trainerToken || studentToken || adminToken || vendorToken;

      try {
        let apiUrl = "";

        if (trainerToken) {
          apiUrl = "https://api.novajobs.us/api/trainers/profile";
        } else if (studentToken) {
          apiUrl = "https://api.novajobs.us/api/students/profile";
        } else if (adminToken) {
          apiUrl = "https://api.novajobs.us/api/admin/profile";
        } else if (vendorToken) {
          apiUrl = "https://api.novajobs.us/api/vendors/profile";
        } else {
          throw new Error("No valid token found!");
        }
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserInfo(response.data.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [trainerToken, studentToken, adminToken, vendorToken]);
 console.log(userInfo,"ui");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("trainerToken");
    localStorage.removeItem("vendorToken");
    localStorage.removeItem("adminToken");
    navigate("/home");
  };

  const handleAddCart = async () => {
    // const token = localStorage.getItem("token")
    try {
      const response = await axios.post('https://api.novajobs.us/api/students/cart', {
        student_id: userInfo.id, 
        course_id: Number(courseId), 
        quantity: 1,
      }, {headers: {
        Authorization: `${studentToken}`,
      }},);
      console.log('Item added to cart:', response.data.message);
      toast.success(response.data.message ||"Course Added To cart Successfully ")
    } catch (error) {
      console.error('Error adding item to cart:', error);
      toast.error(error.message||"Error to add the course in the cart")
    }
  };

  return (
    <Nav>
      <NavItem>
        <Link to="/student/student-messages">
          <img src={Messages} alt="Messages" />
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/cart">
          <img src={Cart} alt="Cart" />
        </Link>
      </NavItem>

      <NavItem>
        <Link to="#" onClick={handleAddCart}>
          <img src={Wish} alt="Wishlist" />
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/page-notification">
          <img src={Notification} alt="Notifications" />
        </Link>
      </NavItem>

      <NavItem ref={profile} onClick={() => setShowProfile(!showProfile)}>
        <UserImg>
          <span className="user-img">
            <img
              src={`https://api.novajobs.us${userInfo?.photo}` || User11}
              alt="User"
            />
            <span className="status online" />
          </span>
        </UserImg>
        <DropdownMenu visible={showProfile}>
          <div className="user-header">
            <div className="avatar">
              <img
                src={`https://api.novajobs.us${userInfo?.photo}` || User11}
                alt="User Image"
                className="avatar-img rounded-circle"
              />
            </div>
            <div className="user-text">
              <h6>
                {userInfo?.first_name} {userInfo?.last_name}
              </h6>
              <p className="text-muted mb-0">
                {trainerToken ? "Trainer" : "Student"}
              </p>
            </div>
          </div>
          <Link
            className="dropdown-item mobile-only"
            to="/course-message"
          >
            <FeatherIcon icon="message-square" className="me-1" /> Messages
          </Link>
          <Link
            className="dropdown-item mobile-only"
            to="#"
          >
            <FeatherIcon icon="shopping-cart" className="me-1" /> Cart
          </Link>
          <Link
            className="dropdown-item mobile-only"
            to="#"
          >
            <FeatherIcon icon="heart" className="me-1" /> Wishlist
          </Link>
          <Link
            className="dropdown-item mobile-only"
            to="#"
          >
            <FeatherIcon icon="bell" className="me-1" /> Notifications
          </Link>
          <Link
            className="dropdown-item"
            to={
              studentToken
                ? "/setting-edit-profile"
                : "/instructor/instructor-edit-profile"
            }
          >
            <FeatherIcon icon="user" className="me-1" /> Profile
          </Link>
          <Link
            className="dropdown-item"
            to={
              studentToken
                ? "/student/student-dashboard"
                : "/instructor/instructor-dashboard"
            }
          >
            <FeatherIcon icon="star" className="me-1" /> Dashboard
          </Link>
          <button className="dropdown-item" onClick={handleLogout}>
            <FeatherIcon icon="log-out" className="me-1" /> Logout
          </button>
        </DropdownMenu>
      </NavItem>
    </Nav>
  );
};

export default HeadModule;

HeadModule.propTypes = {
  courseId:PropTypes.number.isRequired,
};
