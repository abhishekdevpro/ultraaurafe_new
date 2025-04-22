import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import profilelogo from "../../../assets/img/profile-pro.png"
// eslint-disable-next-line react/prop-types
export default function InstructorSidebar() {
  const location = useLocation();

  const [profile, setProfile] = useState(null); // State to store profile data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Function to fetch profile data
    const token = localStorage.getItem('trainerToken');

    const fetchProfile = async () => {
      try {
        const response = await axios.get("https://api.novajobs.us/api/trainers/profile", {
          headers: {
            Authorization: `${token}`,
          }
        });
        console.log(response, "profile")
        setProfile(response.data.data); // Update state with fetched data
      } catch (error) {
        setError(error); // Handle error if the API request fails
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    };

    fetchProfile();
  }, []); // Empty dependency array means this useEffect runs once on mount

  if (loading) return <p>Loading...</p>; // Display a loading message while fetching
  if (error) return <p>Error: {error.message}</p>; // Display an error message if the fetch fails


  return (
    <div className="col-xl-3 col-lg-3 theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className="settings-widget dash-profile">
          <div className="settings-menu">
            <div className="profile-bg">
              <div className="profile-img">
              {/* /instructor/instructor-profile */}
                <Link to="#">
                  {profile && profile.photo ? (
                    <img src={`https://api.novajobs.us${profile.photo}`} alt="Profile" />
                  ) : (
                    <img src={profilelogo} alt="Default Profile" />
                  )}
                </Link>
              </div>
            </div>
            <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="/instructor/instructor-profile">{profile.first_name}{" "}{profile.last_name}</Link>
                </h4>
                <p>Instructor</p>
                <Link to="/add-course" className="add-course btn-primary">
                  Add New Course
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-widget account-settings">
          <div className="settings-menu">
            <h3>Dashboard</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/instructor/instructor-dashboard' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-dashboard" className="nav-link">
                  <i className="bx bxs-tachometer" />
                  Dashboard
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/instructor/instructor-profiles' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-profiles" className="nav-link">
                  <i className="bx bxs-user" />
                  My Profile
                </Link>
              </li>
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-enrolled-course' ? 'active' : ''}`}>
                <Link
                  to="/instructor/instructor-enrolled-course"
                  className="nav-link"
                >
                  <i className="bx bxs-graduation" />
                  My Courses
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-wishlist' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-wishlist" className="nav-link">
                  <i className="bx bxs-heart" />
                  Wishlist
                </Link>
              </li> */}
              <li className={`nav-item ${location.pathname === '/instructor/instructor-reviews' ? 'active' : ''}`}>

                <Link to="/instructor/coming-soon" className="nav-link">
                  <i className="bx bxs-star" />
                  Reviews
                </Link>
              </li>
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-quiz' || location.pathname === '/instructor/instructor-quiz-details' ? 'active' : ''}`}>
                <Link to="/instructor/instructor-quiz" className="nav-link">
                  <i className="bx bxs-shapes" />
                  My Quiz Attempts
                </Link>
              </li> */}
              <li className={`nav-item ${location.pathname === '/instructor/instructor-orders' ? 'active' : ''}`}>
                <Link to="/instructor/coming-soon" className="nav-link">
                  <i className="bx bxs-cart" />
                  Order History
                </Link>
              </li>
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-qa' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-qa" className="nav-link">
                  <i className="bx bxs-bookmark-alt" />
                  Question &amp; Answer
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-referral' ? 'active' : ''}`}>
                <Link to="/instructor/instructor-referral" className="nav-link">
                  <i className="bx bxs-user-plus" />
                  Referrals
                </Link>
              </li> */}
              <li className={`nav-item ${location.pathname === '/instructor/instructor-chat' ? 'active' : ''}`}>

                <Link to="/instructor/coming-soon" className="nav-link">
                  <i className="bx bxs-chat" />
                  Messages
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/instructor/schedule-live-class' ? 'active' : ''}`}>

                <Link to="/instructor/schedule-live-class" className="nav-link">
                  <i className="bx bxs-video" />
                  Schedule Live Classes
                </Link>
              </li>
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-notifications' ? 'active' : ''}`}>
                <Link to="/instructor/instructor-notifications" className="nav-link">
                  <i className="bx bxs-bell" />
                  Notifications
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-ticket' ? 'active' : ''}`}>
                <Link to="/instructor/instructor-ticket" className="nav-link">
                  <i className="bx bxs-coupon" />
                  Support Tickets
                </Link>
              </li> */}
            </ul>
            {/* <h3>Instructor</h3> */}
            <ul>
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-course' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-course" className="nav-link ">
                  <i className="bx bxs-rocket" />
                  My Courses
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-announcement' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-announcement" className="nav-link">
                  <i className="bx bxs-volume-full" />
                  Announcements
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-withdraw' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-withdraw" className="nav-link ">
                  <i className="bx bxs-wallet" />
                  Withdrawls
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-quiz-attempts' ? 'active' : ''}`}>
                <Link to="/instructor/instructor-quiz-attempts" className="nav-link">
                  <i className="bx bxs-shapes" />
                  Quiz Attempts
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-assignment' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-assignment" className="nav-link ">
                  <i className="bx bxs-file" />
                  Assignments
                </Link>
              </li> */}
              {/* <li className={`nav-item ${location.pathname === '/instructor/instructor-earnings' ? 'active' : ''}`}>
                <Link to="/instructor/instructor-earnings" className="nav-link">
                  <i className="bx bxs-badge-dollar" />
                  Earnings
                </Link>
              </li> */}
            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/instructor/instructor-settings' || location.pathname === '/instructor/instructor-change-password' || location.pathname === '/instructor/instructor-setting-notifications' || location.pathname === '/instructor/instructor-setting-withdraw' || location.pathname === '/instructor/instructor-delete-account' ? 'active' : ''}`}>

                <Link to="/instructor/instructor-settings" className="nav-link ">
                  <i className="bx bxs-cog" />
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/home" className="nav-link">
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
