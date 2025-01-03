import React , {useState} from "react";
import StickyBox from "react-sticky-box";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import profilelogo from "../../assets/img/profile-pro.png";

export default function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cmsOpen, setCmsOpen] = useState(false); 
  // Placeholder admin data
  const admin = {
    first_name: "Admin",
    last_name: "User",
    photo: null
  };
const handleLogout =()=>{
  localStorage.removeItem('adminToken');
  navigate('/')
}
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
            {/* <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="/admin/profile">{admin.first_name} {admin.last_name}</Link>
                </h4>
                <p>UltraAura Admin</p>
              </div>
            </div> */}
             <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="/vendor/vendor-profile">{admin.first_name}{" "}{admin.last_name}</Link>
                </h4>
                <p>Admin</p>
                <Link to="/admin/add-course" className="add-course btn-primary">
                  Add New Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-widget account-settings">
          <div className="settings-menu">
            <h3>Dashboard</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}>
                <Link to="/admin/admin-dashboard" className="nav-link">
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
              
              <li className={`nav-item ${location.pathname === '/admin/trainers' ? 'active' : ''}`}>
                <Link to="/admin/trainer-list" className="nav-link">
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
                <Link to="/admin/student-list" className="nav-link">
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
              <li className={`nav-item ${location.pathname === '/admin/partner-list' ? 'active' : ''}`}>
                <Link to="/admin/partner-list" className="nav-link">
                  <i className="bx bxs-group" />
                  Partners
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/add-coupon' ? 'active' : ''}`}>
                <Link to="/admin/add-coupon" className="nav-link">
                  <i className="bx bxs-group" />
                  Add Coupon
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/coupon-list' ? 'active' : ''}`}>
                <Link to="/admin/coupon-list" className="nav-link">
                  <i className="bx bxs-group" />
                  Coupon Lists
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/admin/live-classes' ? 'active' : ''}`}>
                <Link to="/admin/live-classes" className="nav-link">
                  <i className="bx bxs-video" />
                     Live Classes
                </Link>
              </li>
              <li className={`nav-item ${location.pathname.startsWith("/admin/cms") ? "active" : ""}`}>
                <Link
                  className="nav-link"
                  onClick={() => setCmsOpen(!cmsOpen)} // Toggle submenu
                  style={{ cursor: "pointer" }}
                >
                  <i className="bx bxs-group" />
                  CMS
                  <i className={`bx ${cmsOpen ? "bx-chevron-up" : "bx-chevron-down"} float-end`} />
                </Link>
                </li>
                {cmsOpen && (
                  <ul className="submenu" style={{ paddingLeft: "1rem" }}>
                    <li className={`nav-item ${location.pathname === "/admin/cms/home" ? "active" : ""}`}>
                      <Link to="/admin/cms/home" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === "/admin/about-us" ? "active" : ""}`}>
                      <Link to="/admin/about-us" className="nav-link">
                        About Us
                      </Link>
                    </li>
                  </ul>
                )}
             
              {/* <li className={`nav-item ${location.pathname === '/admin/add-student' ? 'active' : ''}`}>
                <Link to="/admin/add-student" className="nav-link">
                  <i className="bx bxs-user-plus" />
                  Add Partners
                </Link>
              </li> */}
            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/admin/settings' ? 'active' : ''}`}>
                <Link to="" className="nav-link">
                  <i className="bx bxs-cog" />
                  Settings
                </Link>
              </li>
              
              <li className="nav-item">
                <Link  className="nav-link"
                 onClick={handleLogout}
                >
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


