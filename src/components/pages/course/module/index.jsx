
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { User11 } from "../../../imagepath";
import DarkMode from "../../../common/darkMode";
import axios from "axios";
import styled from "styled-components";

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
      border: 2px solid #fff; /* Adding a border for better visibility */
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
  min-width: 200px;
  z-index: 1000;

  .user-header {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    .avatar {
      margin-right: 10px;

      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: 2px solid #ddd; /* Optional: to match the dropdown border */
      }
    }

    .user-text {
      h6 {
        margin: 0;
        font-size: 16px;
      }
    }
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #f5f5f5;
    }

    .me-1 {
      margin-right: 10px;
    }
  }
`;

const HeadModule = () => {
  const [, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const cart = useRef();
  const wish = useRef();
  const noti = useRef();
  const profile = useRef();

  const navigate = useNavigate(); // Hook for programmatic navigation

  useOnClickOutside(cart, () => setShowCart(false));
  useOnClickOutside(wish, () => setShowCart(false));
  useOnClickOutside(noti, () => setShowCart(false));
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
  }, [trainerToken, studentToken]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token or any other session data
    localStorage.removeItem("trainerToken"); // Remove trainer token if present
    localStorage.removeItem("vendorToken"); // Remove trainer token if present
    localStorage.removeItem("adminToken"); // Remove trainer token if present
    navigate("/home"); // Redirect to login or home page
  };

  return (
    <Nav>
      <DarkMode />

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
            <div className="avatar avatar-sm">
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
