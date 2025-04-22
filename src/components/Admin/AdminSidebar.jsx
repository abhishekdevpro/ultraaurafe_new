import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import profilelogo from "../../assets/img/profile-pro.png";
import axios from "axios";
import styled from 'styled-components';

// Off-canvas slider container
const SidebarContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
 
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;
    background: white;
    z-index: 10000;
  }
  @media (min-width: 769px) {
    transform: none;
    
  }
`;
// Backdrop behind the sidebar
const Backdrop = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
 
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  @media (min-width: 769px) {
    display: none;
  }
`;
// Toggle button for mobile
const ToggleButton = styled.button`
  position: fixed;
  top: 190px;
  left: 320px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11000;
  @media (min-width: 769px) {
    display: none;
  }
`;

export default function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [admin, setAdmin] = useState({
    first_name: "",
    last_name: "",
    photo: null
  });
  const token = localStorage.getItem("adminToken");
  const [cmsOpen, setCmsOpen] = useState(false);
  
  // Check if current path is active
  const isPathActive = (path) => {
    return location.pathname === path;
  };
  
  // Check if path starts with a certain prefix
  const isPathStartsWith = (prefix) => {
    return location.pathname.startsWith(prefix);
  };

  const fetchAdmin = async () => {
    try {
      const response = await axios.get("https://api.novajobs.us/api/uaadmin/profile", {
        headers: {
          Authorization: token
        }
      });
      if (response.data.code === 200) {
        setAdmin(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(admin.id,"admoinnnn");
  useEffect(() => {
    // Open CMS submenu if we're on a CMS page
    if (isPathStartsWith("/admin/cms") || isPathActive("/admin/about-us")) {
      setCmsOpen(true);
    }
    
    fetchAdmin();
  }, [token, location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <>
      <ToggleButton onClick={() => setIsSidebarOpen(prev => !prev)}>☰</ToggleButton>
      <Backdrop isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
      <SidebarContainer isOpen={isSidebarOpen}>
        <div className=" theiaStickySidebar">
          <StickyBox offsetTop={20} offsetBottom={20}>
            <div className="settings-widget dash-profile">
              <div className="settings-menu">
                <div className="profile-bg">
                  <div className="profile-img">
                    <Link to="#">
                      {admin && admin.photo ? (
                        <img src={admin.photo} alt="Profile" />
                      ) : (
                        <img src={profilelogo} alt="Default Profile" />
                      )}
                    </Link>
                  </div>
                </div>
                <div className="profile-group">
                  <div className="profile-name text-center">
                    <h4>
                      {admin && admin.first_name} {admin && admin.last_name}
                    </h4>
                    <p>Admin</p>
                    <Link to="/admin/add-course" className="add-course btn-primary">
                      Add New Courses
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {admin.id != 2? 
            <div className="settings-widget account-settings">
              <div className="settings-menu">
                <h3>Dashboard</h3>
                <ul>
                  <li className={`nav-item ${isPathActive('/admin/admin-dashboard') || isPathActive('/admin/dashboard') ? 'active' : ''}`}>
                    <Link to="/admin/admin-dashboard" className="nav-link">
                      <i className="bx bxs-dashboard" />
                      Dashboard
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathActive('/admin/course-list') ? 'active' : ''}`}>
                    <Link to="/admin/course-list" className="nav-link">
                      <i className="bx bxs-book" />
                      Course List
                    </Link>
                  </li>
                  
                  <li className={`nav-item ${isPathActive('/admin/trainers') || isPathActive('/admin/trainer-list') ? 'active' : ''}`}>
                    <Link to="/admin/trainer-list" className="nav-link">
                      <i className="bx bxs-user-voice" />
                      Trainers
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathActive('/admin/add-trainer') ? 'active' : ''}`}>
                    <Link to="/admin/add-trainer" className="nav-link">
                      <i className="bx bxs-user-plus" />
                      Add Trainer
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathActive('/admin/students') || isPathActive('/admin/student-list') ? 'active' : ''}`}>
                    <Link to="/admin/student-list" className="nav-link">
                      <i className="bx bxs-group" />
                      Students
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathActive('/admin/add-student') ? 'active' : ''}`}>
                    <Link to="/admin/add-student" className="nav-link">
                      <i className="bx bxs-user-plus" />
                      Add Student
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathActive('/admin/partner-list') ? 'active' : ''}`}>
                    <Link to="/admin/partner-list" className="nav-link">
                      <i className="bx bxs-group" />
                      Partners
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathActive('/admin/add-coupon') ? 'active' : ''}`}>
                    <Link to="/admin/add-coupon" className="nav-link">
                      <i className="bx bxs-group" />
                      Add Coupon
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathActive('/admin/coupon-list') ? 'active' : ''}`}>
                    <Link to="/admin/coupon-list" className="nav-link">
                      <i className="bx bxs-group" />
                      Coupon Lists
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathActive('/admin/live-classes') ? 'active' : ''}`}>
                    <Link to="/admin/live-classes" className="nav-link">
                      <i className="bx bxs-video" />
                      Live Classes
                    </Link>
                  </li>
                  <li className={`nav-item ${isPathStartsWith('/admin/cms') || isPathActive('/admin/about-us') ? 'active' : ''}`}>
                    <Link
                      className="nav-link"
                      onClick={() => setCmsOpen(!cmsOpen)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bx bxs-group" />
                      CMS
                      <i className={`bx ${cmsOpen ? "bx-chevron-up" : "bx-chevron-down"} float-end`} />
                    </Link>
                  </li>
                  {cmsOpen && (
                    <ul className="submenu" style={{ paddingLeft: "1rem" }}>
                      {/* <li className={`nav-item ${isPathActive('/admin/cms/home') ? 'active' : ''}`}>
                        <Link to="/admin/cms/home" className="nav-link">
                          Home
                        </Link>
                      </li> */}
                      <li className={`nav-item ${isPathActive('/admin/about-us') ? 'active' : ''}`}>
                        <Link to="/admin/about-us" className="nav-link">
                          About Us
                        </Link>
                      </li>
                    </ul>
                  )}
                </ul>
                <h3>Account Settings</h3>
                <ul>
                  <li className="nav-item">
                    <button className="w-100 justify-content-center btn btn-danger d-flex align-items-center gap-2" onClick={handleLogout}>
                      <i className="bx bxs-log-out"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>:
            <div className="settings-widget account-settings">
            <div className="settings-menu">
              <h3>Dashboard</h3>
              <ul>
                <li className={`nav-item ${isPathActive('/admin/admin-dashboard') || isPathActive('/admin/dashboard') ? 'active' : ''}`}>
                  <Link to="/admin/admin-dashboard" className="nav-link">
                    <i className="bx bxs-dashboard" />
                    Dashboard
                  </Link>
                </li>
                <li className={`nav-item ${isPathActive('/admin/course-list') ? 'active' : ''}`}>
                  <Link to="/admin/course-list" className="nav-link">
                    <i className="bx bxs-book" />
                    Course List
                  </Link>
                </li>
                
               
              </ul>
              <h3>Account Settings</h3>
              <ul>
                <li className="nav-item">
                  <button className="w-100 justify-content-center btn btn-danger d-flex align-items-center gap-2" onClick={handleLogout}>
                    <i className="bx bxs-log-out"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>}
          </StickyBox>
        </div>
      </SidebarContainer>
    </>
  );
}