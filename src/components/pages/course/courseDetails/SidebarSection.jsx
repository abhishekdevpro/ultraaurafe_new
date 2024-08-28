import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Chapter, Chart, Cloud, Key, Mobile, Play, Teacher, Timer2, Users, Video, Video2 } from '../../../imagepath';

const SidebarSection = ({ courseId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setShowPopup(true);
    } else {
      navigate('/login');
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'https://api.novajobs.us/api/students/buy',
        {
          amount: 1,
          course_id: Number(courseId),
          net_amount: 1,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log('Purchase successful:', response.data);
      setShowPopup(false);
      // Optionally, redirect to the course page or show a success message
    } catch (error) {
      console.error('Error during purchase:', error);
      alert('There was an issue with the purchase. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-4">
      <div className="sidebar-sec">
        {/* Video */}
        <div className="video-sec vid-bg">
          <div className="card">
            <div className="card-body">
              <Link to="https://www.youtube.com/embed/1trvO6dqQUI" className="video-thumbnail" data-fancybox="">
                <div className="play-icon">
                  <i className="fa-solid fa-play" />
                </div>
                <img className="" src={Video} alt="" />
              </Link>
              <div className="video-details">
                <div className="course-fee">
                  <h2>FREE</h2>
                  <p><span>$99.00</span> 50% off</p>
                </div>
                <div className="row gx-2">
                  <div className="col-md-6 addHeart">
                    <Link to="/course-wishlist" className="btn btn-wish w-100">
                      <i className="feather icon-heart me-2" />
                      Add to Wishlist
                    </Link>
                  </div>
                  <div className="col-md-6 addHeart">
                    <Link to="#" className="btn btn-wish w-100">
                      <i className="feather icon-share-2 me-2" />
                      Share
                    </Link>
                  </div>
                </div>
                <button onClick={handleEnrollClick} className="btn btn-enroll w-100">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* /Video */}

        {/* Popup */}
        {showPopup && (
          <div className="checkout-popup">
            <div className="popup-content">
              <h3>Confirm Purchase</h3>
              <p>Are you sure you want to enroll in this course?</p>
              <button onClick={handleCheckout} className="btn btn-confirm">
                {loading ? 'Processing...' : 'Confirm and Enroll'}
              </button>
              <button onClick={() => setShowPopup(false)} className="btn btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        )}
        {/* /Popup */}

        {/* Include */}
        <div className="card include-sec">
          <div className="card-body">
            <div className="cat-title">
              <h4>Includes</h4>
            </div>
            <ul>
              <li><img src={Mobile} className="me-2" alt="" /> 11 hours on-demand video</li>
              <li><img src={Play} className="me-2" alt="" /> 69 downloadable resources</li>
              <li><img src={Key} className="me-2" alt="" /> Full lifetime access</li>
              <li><img src={Mobile} className="me-2" alt="" /> Access on mobile and TV</li>
              <li><img src={Cloud} className="me-2" alt="" /> Assignments</li>
              <li><img src={Teacher} className="me-2" alt="" /> Certificate of Completion</li>
            </ul>
          </div>
        </div>
        {/* /Include */}

        {/* Features */}
        <div className="card feature-sec">
          <div className="card-body">
            <div className="cat-title">
              <h4>Features</h4>
            </div>
            <ul>
              <li><img src={Users} className="me-2" alt="" /> Enrolled: <span>32 students</span></li>
              <li><img src={Timer2} className="me-2" alt="" /> Duration: <span>20 hours</span></li>
              <li><img src={Chapter} className="me-2" alt="" /> Chapters: <span>15</span></li>
              <li><img src={Video2} className="me-2" alt="" /> Video:<span> 12 hours</span></li>
              <li><img src={Chart} className="me-2" alt="" /> Level: <span>Beginner</span></li>
            </ul>
          </div>
        </div>
        {/* /Features */}
      </div>
    </div>
  );
};

export default SidebarSection;
