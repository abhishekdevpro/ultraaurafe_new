
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useOnClickOutside from "../../../hooks/useOnClickOutside";
// import { User11, Wish, Notification } from "../../../imagepath";
// import axios from "axios";
// import styled from "styled-components";
// import PropTypes from "prop-types";
// import { toast } from "react-toastify";
// import { ShoppingCart } from "lucide-react";

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
//     &:not(:last-child) {
//       display: none;
//     }
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
//   min-width: 250px;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     width: 280px;
//   }

//   .user-header {
//     display: flex;
//     align-items: center;
//     padding: 15px;
//     border-bottom: 1px solid #ddd;

//     .avatar {
//       margin-right: 15px;

//       img {
//         height: 60px;
//         width: 60px;
//         border-radius: 50%;
//         border: 2px solid #ddd;
//       }
//     }

//     .user-text {
//       h6 {
//         margin: 0;
//         font-size: 18px;
//         font-weight: 600;
//       }
//       p {
//         margin: 5px 0 0;
//         font-size: 14px;
//         color: #666;
//       }
//     }
//   }

//   .dropdown-item {
//     display: flex;
//     align-items: center;
//     padding: 12px 15px;
//     text-decoration: none;
//     color: #333;
//     transition: background-color 0.2s, transform 0.2s;

//     &:last-child {
//       border-bottom: none;
//     }

//     &:hover {
//       background-color: #f5f5f5;
//       transform: translateX(5px);
//     }

//     .me-1 {
//       margin-right: 12px;
//       width: 20px;
//       height: 20px;
//     }
//   }

//   .mobile-only {
//     display: none;
//     @media (max-width: 768px) {
//       display: flex;
//     }
//   }
// `;

// const HeadModule = ({ courseId }) => {
//   const [showProfile, setShowProfile] = useState(false);
//   const [userInfo, setUserInfo] = useState(null);

//   const profile = useRef();
//   const navigate = useNavigate();
  
//   //  console.log("CourseId is " + courseId);
//   useOnClickOutside(profile, () => setShowProfile(false));

//   const trainerToken = localStorage.getItem("trainerToken");
//   const vendorToken = localStorage.getItem("vendorToken");
//   const adminToken = localStorage.getItem("adminToken");
//   const studentToken = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchUserProfile = async () => {
      

//       try {
//         let apiUrl = adminToken ? "https://api.novajobs.us/api/uaadmin/profile":"https://api.novajobs.us/api/students/profile"

//         // if (trainerToken) {
//         //   apiUrl = "https://api.novajobs.us/api/trainers/profile";
//         // } else if (studentToken) {
//         //   apiUrl = "https://api.novajobs.us/api/students/profile";
//         // } else if (adminToken) {
//         //   apiUrl = "https://api.novajobs.us/api/admin/profile";
//         // } else if (vendorToken) {
//         //   apiUrl = "https://api.novajobs.us/api/vendors/profile";
//         // } else {
//         //   throw new Error("No valid token found!");
//         // }
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: adminToken || studentToken,
//           },
//         });
//         setUserInfo(response.data.data);
//         if(response.data.data){
//           console.log("This is userinfo Id: "+response.data.data.id);
//         }
       
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

//   const handleAddCart = async () => {
//     try {
//       const response = await axios.post('https://api.novajobs.us/api/students/cart', 
//         {
//         student_id: userInfo.id, 
//         course_id: Number(courseId), 
//         quantity: 1,
//       }, 
//       {headers: {
//         Authorization: ` ${studentToken}`,
        
//       }},);
//       console.log('Item added to cart:', response.data.message);
//       toast.success(response.data.message || "Course Added To cart Successfully ")
//     } catch (error) {
//       if(!courseId){
//         console.log("courseId: ", courseId)
//       }
//       console.error('Error adding item to cart:', error);
//       toast.error(error.message || "Error to add the course in the cart")
//     }
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     setShowProfile(false);
//   };
// console.log(userInfo.user_details,";;;;");
//   return (
//     <Nav>
//       {/* <NavItem>
//         <Link to="/student/student-messages">
//           <img src={Messages} alt="Messages" />
//         </Link>
//       </NavItem> */}

//       <NavItem>
//         <Link to="/cart">
//         <ShoppingCart size={24} strokeWidth={2} />
//         </Link>
//       </NavItem>

//       <NavItem>
//         <Link to="#" 
//         onClick={handleAddCart}
//         >
//           <img src={Wish} alt="Wishlist" />
//         </Link>
//       </NavItem>

//       <NavItem>
//         <Link to="/page-notification">
//           <img src={Notification} alt="Notifications" />
//         </Link>
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
//             <div className="avatar">
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
//             className="dropdown-item mobile-only"
//             to="/student/student-messages"
//             onClick={() => handleNavigation("/student/student-messages")}
//           >
//             <FeatherIcon icon="message-square" className="me-1" /> Messages
//           </Link>
//           <Link
//             className="dropdown-item mobile-only"
//             to="/cart"
//             onClick={() => handleNavigation("/cart")}
//           >
//             <FeatherIcon icon="shopping-cart" className="me-1" /> Cart
//           </Link>
//           <Link
//             className="dropdown-item mobile-only"
//             to="#"
//             onClick={handleAddCart}
//           >
//             <FeatherIcon icon="heart" className="me-1" /> Wishlist
//           </Link>
//           <Link
//             className="dropdown-item mobile-only"
//             to="/page-notification"
//             onClick={() => handleNavigation("/page-notification")}
//           >
//             <FeatherIcon icon="bell" className="me-1" /> Notifications
//           </Link>
//           <Link
//             className="dropdown-item"
//             to={
//               studentToken
//                 ? "/setting-edit-profile"
//                 : "/instructor/instructor-edit-profile"
//             }
//             onClick={() => handleNavigation(studentToken ? "/setting-edit-profile" : "/instructor/instructor-edit-profile")}
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
//             onClick={() => handleNavigation(studentToken ? "/student/student-dashboard" : "/instructor/instructor-dashboard")}
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

// HeadModule.propTypes = {
//   courseId: PropTypes.number.isRequired,
// };

// export default HeadModule;

import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { User11, Wish, Notification } from "../../../imagepath";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";

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

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4444;
  color: white;
  font-size: 10px;
  font-weight: bold;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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

const HeadModule = ({ courseId }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const profile = useRef();
  const navigate = useNavigate();
  
  useOnClickOutside(profile, () => setShowProfile(false));

  const trainerToken = localStorage.getItem("trainerToken");
  const vendorToken = localStorage.getItem("vendorToken");
  const adminToken = localStorage.getItem("adminToken");
  const studentToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        let apiUrl = adminToken ? "https://api.novajobs.us/api/uaadmin/profile" : "https://api.novajobs.us/api/students/profile";

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: adminToken || studentToken,
          },
        });
        
        setUserInfo(response.data.data);
        
        // Extract cart and favorite counts from user_details
        if (response.data.data && response.data.data.user_details) {
          const { user_details } = response.data.data;
          
          if (user_details.cart_info && user_details.cart_info.cart_count !== undefined) {
            setCartCount(user_details.cart_info.cart_count);
          }
          
          if (user_details.course_info && user_details.course_info.favourite_count !== undefined) {
            setFavoriteCount(user_details.course_info.favourite_count);
          }
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [trainerToken, studentToken, adminToken, vendorToken]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("trainerToken");
    localStorage.removeItem("vendorToken");
    localStorage.removeItem("adminToken");
    navigate("/home");
  };

  const handleAddCart = async () => {
    try {
      if (!userInfo || !userInfo.id) {
        toast.error("User information is not available");
        return;
      }
      
      const response = await axios.post(
        'https://api.novajobs.us/api/students/cart', 
        {
          student_id: userInfo.id, 
          course_id: Number(courseId), 
          quantity: 1,
        }, 
        {
          headers: {
            Authorization: studentToken,
          },
        }
      );
      
      console.log('Item added to cart:', response.data.message);
      toast.success(response.data.message || "Course Added To cart Successfully");
      
      // Update cart count after successful addition
      setCartCount(prevCount => prevCount + 1);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      toast.error(error.response?.data?.message || "Error adding the course to the cart");
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setShowProfile(false);
  };

  if (!userInfo) {
    return <div>Loading...</div>; // Show loading state until user info is fetched
  }

  return (
    <Nav>
      <NavItem>
        <Link to="/cart">
          <IconWrapper>
            <ShoppingCart size={24} strokeWidth={2} />
            {cartCount > 0 && <Badge>{cartCount}</Badge>}
          </IconWrapper>
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/student/student-wishlist">
          <IconWrapper>
            <img src={Wish} alt="Wishlist" />
            {favoriteCount > 0 && <Badge>{favoriteCount}</Badge>}
          </IconWrapper>
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
              src={userInfo.photo ? `https://api.novajobs.us${userInfo.photo}` : User11}
              alt="User"
            />
            <span className="status online" />
          </span>
        </UserImg>
        <DropdownMenu visible={showProfile}>
          <div className="user-header">
            <div className="avatar">
              <img
                src={userInfo.photo ? `https://api.novajobs.us${userInfo.photo}` : User11}
                alt="User Image"
                className="avatar-img rounded-circle"
              />
            </div>
            <div className="user-text">
              <h6>
                {userInfo.first_name} {userInfo.last_name}
              </h6>
              <p className="text-muted mb-0">
                {trainerToken ? "Trainer" : "Student"}
              </p>
            </div>
          </div>
          <Link
            className="dropdown-item mobile-only"
            to="/student/student-messages"
            onClick={() => handleNavigation("/student/student-messages")}
          >
            <FeatherIcon icon="message-square" className="me-1" /> Messages
          </Link>
          <Link
            className="dropdown-item mobile-only"
            to="/cart"
            onClick={() => handleNavigation("/cart")}
          >
            <FeatherIcon icon="shopping-cart" className="me-1" /> Cart
            {cartCount > 0 && <span className="ms-auto bg-primary text-white px-2 py-1 rounded-pill">{cartCount}</span>}
          </Link>
          <Link
            className="dropdown-item mobile-only"
            to="#"
            onClick={handleAddCart}
          >
            <FeatherIcon icon="heart" className="me-1" /> Wishlist
            {favoriteCount > 0 && <span className="ms-auto bg-primary text-white px-2 py-1 rounded-pill">{favoriteCount}</span>}
          </Link>
          <Link
            className="dropdown-item mobile-only"
            to="/page-notification"
            onClick={() => handleNavigation("/page-notification")}
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
            onClick={() => handleNavigation(studentToken ? "/setting-edit-profile" : "/instructor/instructor-edit-profile")}
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
            onClick={() => handleNavigation(studentToken ? "/student/student-dashboard" : "/instructor/instructor-dashboard")}
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

HeadModule.propTypes = {
  courseId: PropTypes.number,
};

export default HeadModule;