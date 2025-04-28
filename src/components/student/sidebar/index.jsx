import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { User16 } from "../../imagepath";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import fallbackProfile from "../../../assets/default-profile.png";
// import Joyride from 'react-joyride';
// eslint-disable-next-line react/prop-types

// Off-canvas slider container
const SidebarContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 80vw;
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;
    background: white;
    z-index: 10000;
    .theiaStickySidebar {
      width: 100%;
    }
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
  width: 100%;
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
  top: 20px;
  left: 20px;
  z-index: 11000;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;


export default function StudentSidebar() {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  // const [runTour, setRunTour] = useState(true);
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
 
    // const steps = [
    //   {
    //     target: '[data-tour="wishlist-link"]',
    //     content: 'This is where you can manage your wishlist.',
    //   },
    //   {
    //     target: '[data-tour="reviews-link"]',
    //     content: 'Browse your reviews here.',
    //   },
    //   {
    //     target: '[data-tour="quiz-link"]',
    //     content: 'View and take quizzes in this section.',
    //   },
    //   {
    //     target: '[data-tour="order-history-link"]',
    //     content: 'Access your order history here.',
    //   },
    //   {
    //     target: '[data-tour="qa-link"]',
    //     content: 'Ask questions and find answers in this section.',
    //   },
    // ];
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
                    <Link to="/student/student-profile">
                      <img  src={profileData.photo ? `${profileData.photo}` : User16} alt="Img" onError={(e) => {
                  e.target.src = fallbackProfile;
                }}
                    />
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
            {/* {runTour?<Joyride
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
            spotlight: {
              display: 'none', 
            },
            beacon: {
              display: 'none', // Just in case, ensure it never displays
            },
           
        
          }}
        />:""} */}
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
                  <li className={`nav-item ${location.pathname === '' ? 'active' : ''}`}>

                    <Link to="https://novajobs.us/novajobs#tab2" className="nav-link">
                    <i className="bx bxs-file"></i>
                      AI Resume Builder
                    </Link>
                  </li>
                  <li className={`nav-item ${location.pathname === '' ? 'active' : ''}`}>

                    <Link to="https://novajobs.us/user/job/1" className="nav-link">
                    <i className="bx bxs-file"></i>
                     NovaJobs
                    </Link>
                  </li>
               
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
    <Link to="/student/coming-soon" className="nav-link">
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
      My Skill Tests
    </Link>
  </li>
  <li
    className={`nav-item ${location.pathname === '/student/student-order-history' ? 'active' : ''}`}
    data-tour="order-history-link"
  >
    <Link to="/student/coming-soon" className="nav-link">
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
                  <Link to="/student/coming-soon" className="nav-link">
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
                {/* <li className={`nav-item ${location.pathname === '/student/join-live-classes' ? 'active' : ''}`}>
                  <Link to="https://novajobs.us" className="nav-link">
                  <i className="bx bx-link-alt" />
                    NovaJobs
                  </Link>
                </li> */}

                {/* <li className={`nav-item ${location.pathname === '/student/student-ticket' ? 'active' : ''}`}>

                  <Link to="" className="nav-link">
                    <i className="bx bxs-coupon" />c
                    Support Tickets
                  </Link>c
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
      </SidebarContainer>
    </>
  );
}
