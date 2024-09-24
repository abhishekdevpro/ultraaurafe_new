import React from "react";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import profilelogo from "../../assets/img/profile-pro.png";

export default function AdminSidebar() {
  const location = useLocation();

  // Placeholder admin data
  const admin = {
    first_name: "Admin",
    last_name: "User",
    photo: null
  };

  return (
    <div className="col-xl-3 col-lg-3 theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className="settings-widget dash-profile">
          <div className="settings-menu">
            <div className="profile-bg">
              <div className="profile-img">
                <Link to="#">
                  {admin.photo ? (
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
                  <Link to="/admin/profile">{admin.first_name} {admin.last_name}</Link>
                </h4>
                <p>UltraAura Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-widget account-settings">
          <div className="settings-menu">
            <h3>Dashboard</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}>
                <Link to="/admin/dashboard" className="nav-link">
                  <i className="bx bxs-dashboard" />
                  Dashboard
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/course-list' ? 'active' : ''}`}>
                <Link to="/admin/course-list" className="nav-link">
                  <i className="bx bxs-book" />
                  Course List
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/add-course' ? 'active' : ''}`}>
                <Link to="/admin/add-course" className="nav-link">
                  <i className="bx bxs-plus-circle" />
                  Add Course
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/trainers' ? 'active' : ''}`}>
                <Link to="/admin/trainers" className="nav-link">
                  <i className="bx bxs-user-voice" />
                  Trainers
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/add-trainer' ? 'active' : ''}`}>
                <Link to="/admin/add-trainer" className="nav-link">
                  <i className="bx bxs-user-plus" />
                  Add Trainer
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/students' ? 'active' : ''}`}>
                <Link to="/admin/students" className="nav-link">
                  <i className="bx bxs-group" />
                  Students
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/add-student' ? 'active' : ''}`}>
                <Link to="/admin/add-student" className="nav-link">
                  <i className="bx bxs-user-plus" />
                  Add Student
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/students' ? 'active' : ''}`}>
                <Link to="/admin/students" className="nav-link">
                  <i className="bx bxs-group" />
                  Partners
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/add-student' ? 'active' : ''}`}>
                <Link to="/admin/add-student" className="nav-link">
                  <i className="bx bxs-user-plus" />
                  Add Partners
                </Link>
              </li>
            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/admin/settings' ? 'active' : ''}`}>
                <Link to="/admin/settings" className="nav-link">
                  <i className="bx bxs-cog" />
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="bx bxs-log-out" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </StickyBox>
    </div>
  );
}