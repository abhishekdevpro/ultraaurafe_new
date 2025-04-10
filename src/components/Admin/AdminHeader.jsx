import React, { useEffect, useRef, useState } from "react";
import { Home, LogOut, Menu, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo5 from "../../assets/Ultra_Aura.png";
import { User17 } from "../imagepath";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${(props) => (props.navbar ? "#ffffff" : "transparent")};
  box-shadow: ${(props) =>
    props.navbar ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
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
    right: ${(props) => (props.mobileMenu ? "0" : "-100%")};
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
  color: #ff875a;

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
  display: ${(props) => (props.show ? "block" : "none")};
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
    localStorage.removeItem("adminToken");
    navigate("/");
    window.location.href = "/";
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
        <Link to="/admin/admin-dashboard">
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
            <ProfileImage src={User17} alt="User" onClick={profileClick} />
            <ProfileMenu show={showProfile || mobileMenu}>
              <ProfileInfo>
                <ProfileImage1 src={User17} alt="User" />
                <div>
                  <h6>Admin User</h6>
                  <p>Administrator</p>
                </div>
              </ProfileInfo>
              <NavItem to="/admin/admin-dashboard">
                <Home size={20} /> Dashboard
              </NavItem>
              {/* <NavItem to="">
                <Star size={20} /> Edit Profile
              </NavItem> */}
              <NavItem onClick={handleLogout}>
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
