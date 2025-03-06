// import React , {useEffect, useState} from "react";
// import StickyBox from "react-sticky-box";
// import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import profilelogo from "../../assets/img/profile-pro.png";
// import axios from "axios";

// export default function AdminSidebar() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [admin,setAdmin] = useState(null)
//  const token = localStorage.getItem("adminToken")
//   const [cmsOpen, setCmsOpen] = useState(false); 
//    const fetchAdmin = async()=>{
//      try {
//        const response = await axios.get("https://api.novajobs.us/api/uaadmin/profile",{
//         headers:{
//           Authorization:token
//         }
//        })
//        if(response.data.code == 200){
//         setAdmin(response.data.data)
//        }
//      } catch (error) {
//        console.log(error);
//      }
//    }
//    useEffect(()=>{
// fetchAdmin()
//    },[token])
// //  console.log(Admin,"admin");

//   // // Placeholder admin data
//   // const admin = {
//   //   first_name: "Admin",
//   //   last_name: "User",
//   //   photo: null
//   // };
// const handleLogout =()=>{
//   localStorage.removeItem('adminToken');
//   navigate('/')
// }
//   return (
//     <div className="col-xl-3 col-lg-3 theiaStickySidebar">
//       <StickyBox offsetTop={20} offsetBottom={20}>
//         <div className="settings-widget dash-profile">
//           <div className="settings-menu">
//             <div className="profile-bg">
//               <div className="profile-img">
//                 <Link to="#">
//                   {admin.photo ? (
//                     <img src={admin.photo} alt="Profile" />
//                   ) : (
//                     <img src={profilelogo} alt="Default Profile" />
//                   )}
//                 </Link>
//               </div>
//             </div>
//             {/* <div className="profile-group">
//               <div className="profile-name text-center">
//                 <h4>
//                   <Link to="/admin/profile">{admin.first_name} {admin.last_name}</Link>
//                 </h4>
//                 <p>UltraAura Admin</p>
//               </div>
//             </div> */}
//              <div className="profile-group">
//               <div className="profile-name text-center">
//                 <h4>
//                   {admin.first_name}{" "}{admin.last_name}
//                 </h4>
//                 <p>Admin</p>
//                 <Link to="/admin/add-course" className="add-course btn-primary">
//                   Add New Courses
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="settings-widget account-settings">
//           <div className="settings-menu">
//             <h3>Dashboard</h3>
//             <ul>
//               <li className={`nav-item ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}>
//                 <Link to="/admin/admin-dashboard" className="nav-link">
//                   <i className="bx bxs-dashboard" />
//                   Dashboard
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname === '/admin/course-list' ? 'active' : ''}`}>
//                 <Link to="/admin/course-list" className="nav-link">
//                   <i className="bx bxs-book" />
//                   Course List
//                 </Link>
//               </li>
              
//               <li className={`nav-item ${location.pathname === '/admin/trainers' ? 'active' : ''}`}>
//                 <Link to="/admin/trainer-list" className="nav-link">
//                   <i className="bx bxs-user-voice" />
//                   Trainers
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname === '/admin/add-trainer' ? 'active' : ''}`}>
//                 <Link to="/admin/add-trainer" className="nav-link">
//                   <i className="bx bxs-user-plus" />
//                   Add Trainer
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname === '/admin/students' ? 'active' : ''}`}>
//                 <Link to="/admin/student-list" className="nav-link">
//                   <i className="bx bxs-group" />
//                   Students
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname === '/admin/add-student' ? 'active' : ''}`}>
//                 <Link to="/admin/add-student" className="nav-link">
//                   <i className="bx bxs-user-plus" />
//                   Add Student
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname === '/admin/partner-list' ? 'active' : ''}`}>
//                 <Link to="/admin/partner-list" className="nav-link">
//                   <i className="bx bxs-group" />
//                   Partners
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname === '/admin/add-coupon' ? 'active' : ''}`}>
//                 <Link to="/admin/add-coupon" className="nav-link">
//                   <i className="bx bxs-group" />
//                   Add Coupon
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname === '/admin/coupon-list' ? 'active' : ''}`}>
//                 <Link to="/admin/coupon-list" className="nav-link">
//                   <i className="bx bxs-group" />
//                   Coupon Lists
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname === '/admin/live-classes' ? 'active' : ''}`}>
//                 <Link to="/admin/live-classes" className="nav-link">
//                   <i className="bx bxs-video" />
//                      Live Classes
//                 </Link>
//               </li>
//               <li className={`nav-item ${location.pathname.startsWith("/admin/cms") ? "active" : ""}`}>
//                 <Link
//                   className="nav-link"
//                   onClick={() => setCmsOpen(!cmsOpen)} // Toggle submenu
//                   style={{ cursor: "pointer" }}
//                 >
//                   <i className="bx bxs-group" />
//                   CMS
//                   <i className={`bx ${cmsOpen ? "bx-chevron-up" : "bx-chevron-down"} float-end`} />
//                 </Link>
//                 </li>
//                 {cmsOpen && (
//                   <ul className="submenu" style={{ paddingLeft: "1rem" }}>
//                     <li className={`nav-item ${location.pathname === "/admin/cms/home" ? "active" : ""}`}>
//                       <Link to="/admin/cms/home" className="nav-link">
//                         Home
//                       </Link>
//                     </li>
//                     <li className={`nav-item ${location.pathname === "/admin/about-us" ? "active" : ""}`}>
//                       <Link to="/admin/about-us" className="nav-link">
//                         About Us
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
             
//               {/* <li className={`nav-item ${location.pathname === '/admin/add-student' ? 'active' : ''}`}>
//                 <Link to="/admin/add-student" className="nav-link">
//                   <i className="bx bxs-user-plus" />
//                   Add Partners
//                 </Link>
//               </li> */}
//             </ul>
//             <h3>Account Settings</h3>
//             <ul>
//               {/* <li className={`nav-item ${location.pathname === '/admin/settings' ? 'active' : ''}`}>
//                 <Link to="" className="nav-link">
//                   <i className="bx bxs-cog" />
//                   Settings
//                 </Link>
//               </li> */}
              
//               <li className="nav-item">
//                 {/* <button  className="nav-link"
//                  onClick={handleLogout}
//                 >
//                   <i className="bx bxs-log-out" />
//                   Logout
//                 </button> */}
//                 <button className="w-100 justify-content-center btn btn-danger d-flex align-items-center gap-2" onClick={handleLogout}>
//   <i className="bx bxs-log-out"></i>
//   Logout
// </button>

//               </li>
            
            
            
              
//             </ul>
//           </div>
//         </div>
//       </StickyBox>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import profilelogo from "../../assets/img/profile-pro.png";
import axios from "axios";

export default function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
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
    <div className="col-xl-3 col-lg-3 theiaStickySidebar">
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
  );
}