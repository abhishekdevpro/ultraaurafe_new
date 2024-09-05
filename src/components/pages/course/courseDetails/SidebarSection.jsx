import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Chapter, Chart, Cloud, Key, Mobile, Play, Teacher, Timer2, Users, Video2 } from '../../../imagepath';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const SidebarSection = ({ courseId, courseData,courseFeatureData}) => {
  console.log(courseData,"from sidebar")
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const navigate = useNavigate();
  const [isClassAdded, setIsClassAdded] = useState([]);


  const handleEnrollClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setShowPopup(true);
    } else {
      navigate('/login');
    }
  };

    const handleDownload = async () => {
      const token = localStorage.getItem('token')
      try {
        const response = await axios.get(`https://api.novajobs.us/api/students/certificate/${courseId}`, {
          headers: {
            Authorization: `${token}`,
          },
          responseType: 'blob', // Important for handling file downloads
        });
  
        // Create a blob from the response data
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
  
        // Create a link element and trigger the download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `certificate_${courseId}.pdf`); // Assuming it's a PDF, adjust if needed
        document.body.appendChild(link);
        link.click();
  
        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
  
        // Show success toast
        toast.success('Certificate downloaded successfully!');
      } catch (error) {
        console.error('Error downloading certificate:', error);
        toast.error('Failed to download certificate. Please try again.');
      }
    
  }

  const toggleClass = async (courseId, isFavorite) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[courseId] = !isFavorite;
    setIsClassAdded(updatedClasses);
  
    try {
      const token = localStorage.getItem('token');
      if (isFavorite) {
        // Remove from favorites
        await axios.post(
          'https://api.novajobs.us/api/students/course-favorite',
          { course_id: courseId },
          {
            headers: {
              'Authorization': `${token}`,
              'Content-Type': 'application/json',
            },
            
          }
        );
        // Show success toast
        toast.success('Course removed from favorites!');
      } else {
        // Add to favorites
        await axios.post(
          'https://api.novajobs.us/api/students/course-favorite',
          { course_id: courseId },
          {
            headers: {
              'Authorization': `${token}`,
              'Content-Type': 'application/json',
            }
          }
        );
        // Show success toast
        toast.success('Course added to favorites!');
      }
    } catch (error) {
      console.error('Failed to update course favorites:', error);
      // Show error toast
      toast.error('Failed to update course favorites. Please try again.');
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
            Authorization: token,
          },
        }
      );
      console.log('Purchase successful:', response.data);
      setShowPopup(false);
    } catch (error) {
      console.error('Error during purchase:', error);
      alert('There was an issue with the purchase. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVideoPlay = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.novajobs.us/api/students/streaming/${courseId}`, {
        responseType: 'blob',
      });

      const videoBlob = new Blob([response.data], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);

      setVideoUrl(videoUrl);
      console.log('Video URL:', videoUrl);
    } catch (error) {
      console.error('Error fetching video:', error);
      alert('Unable to fetch video. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  const isFavorite = isClassAdded[courseData.course_id]
  return (
    <div className="col-lg-4">
      <div className="sidebar-sec">
        {/* Video Section */}
        <div className="video-sec vid-bg">
          <div className="card">
            <div className="card-body">
              {videoUrl ? (
                <video width="100%" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <button onClick={handleVideoPlay} className="video-thumbnail btn btn-link" data-fancybox="">
                  <div className="play-icon">
                    <i className="fa-solid fa-play" />
                  </div>
                  <img className="" src={Video2} alt="Video Thumbnail" />
                </button>
              )}

              <div className="video-details">
                <div className="course-fee">
                  <h2>FREE</h2>
                  <p><span>$99.00</span> 50% off</p>
                </div>
                <div className="row gx-2">
                  {/* <div className="col-md-6 addHeart">
                    <Link to="" className="btn btn-wish w-100">
                      <i className="feather icon-heart me-2" />
                      Add to Wishlist
                    </Link>
                  </div> */}
              <div className="col-md-6 addHeart">
      {isFavorite ? (
        <button 
          className="btn btn-danger w-100" 
          onClick={() => toggleClass(courseData.course_id, isFavorite)}>
          <i className="feather icon-heart me-2" />
          Remove
        </button>
      ) : (
        <button 
          className="btn btn-wish w-100" 
          onClick={() => toggleClass(courseData.course_id, isFavorite)}>
          <i className="feather icon-heart me-2" />
          Add to Wishlist
        </button>
      )}
    </div>
                  <div className="col-md-6 addHeart">
                    <Link to="#" className="btn btn-wish w-100">
                      <i className="feather icon-share-2 me-2" />
                      Share
                    </Link>
                  </div>
                </div>
                {/* Conditional Button Rendering */}
                <div>
                {!courseData.is_student_enroll ? (
                  <button onClick={handleEnrollClick} className="btn btn-enroll w-100">
                    Enroll Now
                  </button>
                ) : (
                  <button className="btn btn-enroll w-100" disabled>
                    Enrolled
                  </button>
                )}
                
              </div>
              {!courseData.is_student_enroll ? (
                //  <button className="btn btn-enroll w-100" disabled>
                //   </button>
                " "
                ) : (
                  <Link to={`/student/student-skilltest/${courseData.course_id}/${courseData.course_title}`} className="btn btn-enroll w-100">
                  Take Test
                </Link>
                )}

                {!courseData.is_certificate ? (
                 ""
                ) : (
                 <button onClick={handleDownload} className="btn btn-enroll w-100">
                    Download Certificate
                  </button>
                )}
                </div>
                
            </div>
          </div>
        </div>

        {/* Checkout Popup */}
        <Modal show={showPopup} onHide={() => setShowPopup(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Purchase</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to enroll in this course?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowPopup(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleCheckout}>
              {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Confirm and Enroll'}
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Include Section */}
        <div className="card include-sec">
          <div className="card-body">
            <div className="cat-title">
              <h4>Includes</h4>
            </div>
            <ul>
              <li><img src={Mobile} className="me-2" alt="" /> On-demand video</li>
              <li><img src={Play} className="me-2" alt="" />Downloadable resources</li>
              <li><img src={Key} className="me-2" alt="" /> Full  access</li>
              <li><img src={Mobile} className="me-2" alt="" /> Access on mobile screen</li>
              <li><img src={Cloud} className="me-2" alt="" /> Assignments</li>
              <li><img src={Teacher} className="me-2" alt="" /> Certificate of Completion</li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="card feature-sec">
          <div className="card-body">
            <div className="cat-title">
              <h4>Features</h4>
            </div>
            <ul>
              <li><img src={Users} className="me-2" alt="" /> Enrolled: <span>{courseFeatureData.enrolled_student_count}</span></li>
              <li><img src={Timer2} className="me-2" alt="" /> Duration: <span>{courseFeatureData.time_spent_on_course}</span></li>
              <li><img src={Chapter} className="me-2" alt="" /> Lectures: <span> {courseFeatureData.total_lectures} </span></li>
              {/* <li><img src={Video2} className="me-2" alt="" /> Video:<span> 12 hours</span></li> */}
              <li><img src={Chart} className="me-2" alt="" /> Level: <span>{courseFeatureData.course_level_name}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarSection.propTypes = {
  courseFeatureData: PropTypes.shape({
    enrolled_student_count: PropTypes.number,
    time_spent_on_course: PropTypes.number,
    total_lectures: PropTypes.number,
    course_level_name: PropTypes.string,
  }),
  courseData: PropTypes.shape({
    course_id: PropTypes.string.isRequired,
    course_title: PropTypes.string,
    is_certificate: PropTypes.bool,
  }).isRequired,
};

export default SidebarSection;
