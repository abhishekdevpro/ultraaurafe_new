import React from "react";
import StickyBox from "react-sticky-box";
import { User16 } from "../../imagepath";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import Joyride from 'react-joyride';
// eslint-disable-next-line react/prop-types
export default function StudentSidebar() {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const [runTour, setRunTour] = useState(true);
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  
    website: "",
    email: "",
   
    photo: "",
    headline: "",
    twitter_profile: "",
    facebook_profile: "",
    linkedin_profile: "",
    youtube_profile: "",

  });

  useEffect(() => {
    if(!token){
      window.location.href = '/login';
    }
    axios
      .get("https://api.novajobs.us/api/students/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setProfileData({
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          phone: data.phone,
         
          website: data.website,
          email: data.email,
         
          photo: data.photo ? `https://api.novajobs.us${data.photo}` : "", // Properly setting the photo URL
          headline: data.headline,
          twitter_profile: data.twitter_profile,
          facebook_profile: data.facebook_profile,
          linkedin_profile: data.linkedin_profile,
          youtube_profile: data.youtube_profile,
        });
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        if(error.response && error.response.status == 401){
          window.location.href = '/login'
        }
      });
  }, [token]);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('https://ultraaura.education/login');
    window.location.href= 'https://ultraaura.education/login';
  };
 
    const steps = [
      {
        target: '[data-tour="wishlist-link"]',
        content: 'This is where you can manage your wishlist.',
      },
      {
        target: '[data-tour="reviews-link"]',
        content: 'Browse your reviews here.',
      },
      {
        target: '[data-tour="quiz-link"]',
        content: 'View and take quizzes in this section.',
      },
      {
        target: '[data-tour="order-history-link"]',
        content: 'Access your order history here.',
      },
      {
        target: '[data-tour="qa-link"]',
        content: 'Ask questions and find answers in this section.',
      },
    ];
  return (
    <div className="col-xl-3 col-lg-3 theiaStickySidebar">
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className="settings-widget dash-profile">
          <div className="settings-menu">
            <div className="profile-bg">
              <div className="profile-img">
                <Link to="/student/student-profile">
                  <img  src={profileData.photo ? `${profileData.photo}` : User16} alt="Img" />
                </Link>
              </div>
            </div>
            <div className="profile-group">
              <div className="profile-name text-center">
                <h4>
                  <Link to="/student/student-profile">{profileData.first_name}{" "} {profileData.last_name}</Link>
                </h4>
                <p>Student</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="settings-widget account-settings">
        <Joyride
      steps={steps}
      run={runTour}
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      spotlightClicks={false}
      hideBeacon={true}
      callback={({ status }) => {
        if (['finished', 'skipped'].includes(status)) {
          setRunTour(false); // Stop the tour when completed or skipped
        }
      }}
      styles={{
        options: {
          zIndex: 1000, // Ensure tooltips are above all other content
          overlayColor: 'rgba(0, 0, 0, 0.4)', // Dim background during the tour
        },
        tooltip: {
          backgroundColor: 'rgba(240, 235, 235, 0.8)', // Tooltip background opacity (adjust opacity here)
          color: '#0e0d0d', // Tooltip text color
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Optional shadow for better contrast
        },
        // spotlight: {
        //   backgroundColor: 'rgba(14, 14, 14, 0.5)', // Overlay behind the highlighted element
        // },
        // spotlight: {
        //   display: 'none', // Hides the spotlight effect entirely
        // },
        beacon: {
          display: 'none', // Just in case, ensure it never displays
        },
       
    
      }}
    />
          <div className="settings-menu">
            <h3>Dashboard</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/student/student-dashboard' ? 'active' : ''}`}>

                <Link to="/student/student-dashboard" className="nav-link">
                  <i className="bx bxs-tachometer" />
                  Dashboard
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/student-profile' ? 'active' : ''}`}>

                <Link to="/student/student-profile" className="nav-link">
                  <i className="bx bxs-user" />
                  My Profile
                </Link>
              </li>
              {/* <li className={`nav-item ${location.pathname === '/student/student-courses' ? 'active' : ''}`}>
                <Link
                  to="/student/student-courses"
                  className="nav-link"
                >
                  <i className="bx bxs-graduation" />
                  Enrolled Courses
                </Link>
              </li> */}
              <li
  className={`nav-item ${location.pathname === '/student/student-courses' ? 'active' : ''}`}
  data-tour="enrolled-courses" // Unique identifier for Joyride
>
  <Link to="/student/student-courses" className="nav-link">
    <i className="bx bxs-graduation" />
    Enrolled Courses
  </Link>
</li>

<li
  className={`nav-item ${location.pathname === '/student/student-wishlist' || location.pathname === '/student/student-quiz-details' ? 'active' : ''}`}
  data-tour="wishlist-link"
>
  <Link to="/student/student-wishlist" className="nav-link">
    <i className="bx bxs-heart" />
    Wishlist
  </Link>
</li>
<li
  className={`nav-item ${location.pathname === '/student/student-reviews' ? 'active' : ''}`}
  data-tour="reviews-link"
>
  <Link to="/student/student-reviews" className="nav-link">
    <i className="bx bxs-star" />
    Reviews
  </Link>
</li>
<li
  className={`nav-item ${location.pathname === '/student/student-quiz' ? 'active' : ''}`}
  data-tour="quiz-link"
>
  <Link to="/student/student-quiz" className="nav-link">
    <i className="bx bxs-shapes" />
    My Quiz Attempts
  </Link>
</li>
<li
  className={`nav-item ${location.pathname === '/student/student-order-history' ? 'active' : ''}`}
  data-tour="order-history-link"
>
  <Link to="" className="nav-link">
    <i className="bx bxs-cart" />
    Order History
  </Link>
</li>
<li
  className={`nav-item ${location.pathname === '/student/student-qa' ? 'active' : ''}`}
  data-tour="qa-link"
>
  <Link to="/student/coming-soon" className="nav-link">
    <i className="bx bxs-bookmark-alt" />
    Question &amp; Answer
  </Link>
</li>

              {/* <li className={`nav-item ${location.pathname === '/student/student-referral' ? 'active' : ''}`}>

                <Link to="" className="nav-link">
                  <i className="bx bxs-user-plus" />
                  Referrals
                </Link>
              </li> */}
              <li className={`nav-item ${location.pathname === '/student/student-messages' ? 'active' : ''}`}>
                <Link to="" className="nav-link">
                  <i className="bx bxs-chat" />
                  Messages
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/student/join-live-classes' ? 'active' : ''}`}>
                <Link to="/student/join-live-classes" className="nav-link">
                <i className="bx bxs-video" />
                  Join Live Classes
                </Link>
              </li>

              {/* <li className={`nav-item ${location.pathname === '/student/student-ticket' ? 'active' : ''}`}>

                <Link to="" className="nav-link">
                  <i className="bx bxs-coupon" />
                  Support Tickets
                </Link>
              </li> */}
            </ul>
            <h3>Account Settings</h3>
            <ul>
              <li className={`nav-item ${location.pathname === '/student/student-setting' || location.pathname === '/student/student-change-password' || location.pathname === '/student/student-social-profile' || location.pathname === '/student/student-linked-accounts' || location.pathname === '/student/student-notification' ? 'active' : ''}`}>
                <Link to="/student/student-setting" className="nav-link ">
                  <i className="bx bxs-cog" />
                  Settings
                </Link>
              </li>
             
              <li className="nav-item">
                <Link to="/home" className="nav-link"
                onClick={handleLogout}>
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
