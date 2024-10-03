
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useOnClickOutside from "../../../hooks/useOnClickOutside";
// import { User11 } from "../../../imagepath";
// import DarkMode from "../../../common/darkMode";
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
//     border-bottom: 1px solid #ddd;

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
//       <DarkMode />

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
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { User, LogOut, Home } from "react-feather";
import { User11 } from "../../../imagepath";
import DarkMode from "../../../common/darkMode";

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
  }
`;

const ProfileDropdown = styled.div`
  position: relative;
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

const ProfileMenu = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
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

const ProfileImage1 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 0.5rem;
  }
`;

const NavLink = styled(Link)`
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

const HeadModule = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("trainerToken");
    localStorage.removeItem("vendorToken");
    localStorage.removeItem("adminToken");
    navigate("/");
    window.location.href ='/'
  };

  const profileClick = (e) => {
    e.preventDefault();
    setShowProfile(!showProfile);
  };

  return (
    <Nav>
      <DarkMode />
      <NavItem>
        <ProfileDropdown>
          <ProfileImage
            src={`https://api.novajobs.us${userInfo?.photo}` || User11}
            alt="User"
            onClick={profileClick}
          />
          <ProfileMenu show={showProfile}>
            <ProfileInfo>
              <ProfileImage1
                src={`https://api.novajobs.us${userInfo?.photo}` || User11}
                alt="User"
              />
              <div>
                <h6>
                  {userInfo?.first_name} {userInfo?.last_name}
                </h6>
                <p>
                  {trainerToken
                    ? "Trainer"
                    : studentToken
                    ? "Student"
                    : adminToken
                    ? "Admin"
                    : "Vendor"}
                </p>
              </div>
            </ProfileInfo>
            <NavLink
              to={
                studentToken
                  ? "/student/student-dashboard"
                  : trainerToken
                  ? "/instructor/instructor-dashboard"
                  : adminToken
                  ? "/admin/admin-dashboard"
                  : "/vendor/vendor-dashboard"
              }
            >
              <Home size={20} /> Dashboard
            </NavLink>
            <NavLink
              to={
                studentToken
                  ? "/setting-edit-profile"
                  : trainerToken
                  ? "/instructor/instructor-edit-profile"
                  : adminToken
                  ? "/admin/admin-profile"
                  : "/vendor/vendor-profile"
              }
            >
              <User size={20} /> Profile
            </NavLink>
            <NavLink  onClick={handleLogout}>
              <LogOut size={20} /> Logout
            </NavLink>
          </ProfileMenu>
        </ProfileDropdown>
      </NavItem>
    </Nav>
  );
};

export default HeadModule;