import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Chapter,
  Chart,
  Cloud,
  Key,
  Mobile,
  Play,
  Teacher,
  Timer2,
  Users,
  Video2,
} from "../../../imagepath";
import { Modal, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";
import ShareButton from "./Sharebutton";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;

  .btn-enroll {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    background-color: #4caf50; /* Change this to your desired color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049; /* Darken the button on hover */
    }

    &:disabled {
      background-color: #ccc; /* Grey background for disabled button */
      cursor: not-allowed;
    }
  }
`;

const VideoSection = styled.div`
  .video-sec {
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .card {
    border: none;
  }

  .card-body {
    padding: 0;
  }

  .video-thumbnail {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    overflow: hidden;
    cursor: pointer;
    border: none;
    background: none;
  }

  .video-thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .play-icon {
    position: absolute; /* Absolute positioning to center within the container */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    z-index: 10; /* Ensures the play icon is on top of the image */
  }

  .play-icon i {
    font-size: 24px;
    color: #333;
  }

  .video-thumbnail:hover .play-icon {
    background-color: rgba(255, 255, 255, 1);
  }

  video {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
  }

  .video-details {
    padding: 20px;
  }

  .course-fee {
    margin-bottom: 20px;
    text-align: center;

    h2 {
      font-size: 28px;
      color: #4caf50;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: #666;

      span {
        text-decoration: line-through;
        margin-right: 5px;
      }
    }
  }

  .btn-wish,
  .btn-enroll {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .btn-wish {
    background-color: #f0f0f0;
    color: #333;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  .btn-enroll {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    .video-thumbnail {
      padding-top: 75%; /* 4:3 Aspect Ratio for smaller screens */
    }

    .play-icon {
      width: 50px;
      height: 50px;

      i {
        font-size: 20px;
      }
    }

    .course-fee {
      h2 {
        font-size: 24px;
      }

      p {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 576px) {
    .video-details {
      padding: 15px;
    }

    .course-fee {
      h2 {
        font-size: 22px;
      }
    }

    .btn-wish,
    .btn-enroll {
      font-size: 14px;
    }
  }
`;

const SidebarSection = ({ courseId, courseData, courseFeatureData }) => {
  console.log(courseData, "from sidebar");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const navigate = useNavigate();
  const [isClassAdded, setIsClassAdded] = useState([]);
  const token = localStorage.getItem("token");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // The length at which content should be truncated
  const truncateLength = 100; // Adjust this value as needed
  const fullContent = courseFeatureData.learning_objectives || "";
  
  // Check if content needs to be truncated
  const isTruncated = fullContent.length > truncateLength;
  const handleEnrollClick = () => {
    if (token) {
      setShowPopup(true);
    } else {
      navigate("/login");
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/students/certificate/${courseId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
          responseType: "blob", // Important for handling file downloads
        }
      );

      // Create a blob from the response data
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      // Create a link element and trigger the download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `certificate_${courseId}.pdf`); // Assuming it's a PDF, adjust if needed
      document.body.appendChild(link);
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);

      // Show success toast
      toast.success("Certificate downloaded successfully!");
    } catch (error) {
      console.error("Error downloading certificate:", error);
      toast.error("Failed to download certificate. Please try again.");
    }
  };

  const toggleClass = async (courseId, isFavorite) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[courseId] = !isFavorite;
    setIsClassAdded(updatedClasses);

    try {
      if (isFavorite) {
        // Remove from favorites
        await axios.post(
          "https://api.novajobs.us/api/students/course-favorite",
          { course_id: courseId },
          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // Show success toast
        toast.success("Course removed from favorites!");
      } else {
        // Add to favorites
        await axios.post(
          "https://api.novajobs.us/api/students/course-favorite",
          { course_id: courseId },
          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // Show success toast
        toast.success("Course added to favorites!");
      }
    } catch (error) {
      console.error("Failed to update course favorites:", error);
      // Show error toast
      toast.error("FYou need to login first.");
      navigate("/login");
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/students/buy",
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
      toast.success("Purchase Successful ");
      console.log("Purchase successful:", response.data);
      setShowPopup(false);
    } catch (error) {
      console.error("Error during purchase:", error);
      toast.error("There was an issue with the purchase. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVideoPlay = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/students/streaming/${courseId}`,
        {
          responseType: "blob",
        }
      );

      const videoBlob = new Blob([response.data], { type: "video/mp4" });
      const videoUrl = URL.createObjectURL(videoBlob);

      setVideoUrl(videoUrl);
      console.log("Video URL:", videoUrl);
    } catch (error) {
      console.error("Error fetching video:", error);
      alert("Unable to fetch video. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const isFavorite = isClassAdded[courseData.course_id];
  return (
    <div className="col-lg-4">
      <div className="sidebar-sec">
        {/* Video Section */}
        <VideoSection>
          <div className="video-sec vid-bg">
            <div className="card">
              <div className="card-body">
                {videoUrl ? (
                  <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <button
                    onClick={handleVideoPlay}
                    className="video-thumbnail"
                    data-fancybox=""
                  >
                    <div className="play-icon">
                      <i className="fa-solid fa-play" />
                    </div>
                    <img src={Video2} alt="Video Thumbnail" />
                  </button>
                )}

                <div className="video-details">
                  <div className="course-fee">
                    <h2>FREE</h2>
                    <p>
                      <span>$99.00</span> 50% off
                    </p>
                  </div>
                  <div className="row gx-2">
                    <div className="col-md-6 addHeart">
                      {isFavorite && localStorage.getItem("token") ? (
                        <button
                          className="btn btn-danger w-100"
                          onClick={() =>
                            toggleClass(courseData.course_id, isFavorite)
                          }
                        >
                          <i className="feather icon-heart me-2" />
                          Remove
                        </button>
                      ) : (
                        <button
                          className="btn btn-wish w-100"
                          onClick={() =>
                            toggleClass(courseData.course_id, isFavorite)
                          }
                        >
                          <i className="feather icon-heart me-2" />
                          Add to Wishlist
                        </button>
                      )}
                    </div>
                    {/* <div className="col-md-6 addHeart">
                      <Link to="#" className="btn btn-wish w-100">
                        <i className="feather icon-share-2 me-2" />
                        Share
                      </Link>
                    </div> */}
                    <div className="col-md-6 addHeart">
                      <ShareButton courseUrl={`http://localhost:3000/course-info/${courseData.course_id}` }/>
                    </div>
                  </div>
                  <ButtonWrapper>
                    {token && courseData.is_student_enroll ? (
                      <button className="btn-enroll w-100" disabled>
                        Enrolled
                      </button>
                    ) : (
                      <button
                        onClick={handleEnrollClick}
                        className="btn-enroll w-100"
                      >
                        Enroll Now
                      </button>
                    )}

                    {token && (
                      <Link
                        to={`/student/student-skilltest/${courseData.course_id}/${courseData.course_title}`}
                      >
                        <button className="btn-enroll w-100">Take Test</button>
                      </Link>
                    )}

                    {token &&
                      courseData.is_student_enroll &&
                      courseData.is_certificate && (
                        <button
                          onClick={handleDownload}
                          className="btn-enroll w-100"
                        >
                          Download Certificate
                        </button>
                      )}
                  </ButtonWrapper>
                </div>
              </div>
            </div>
          </div>
        </VideoSection>

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
              {loading ? (
                <Spinner as="span" animation="border" size="sm" />
              ) : (
                "Confirm and Enroll"
              )}
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
              <li>
                <img src={Mobile} className="me-2" alt="" /> On-demand video
              </li>
              <li>
                <img src={Play} className="me-2" alt="" />
                Downloadable resources
              </li>
              <li>
                <img src={Key} className="me-2" alt="" /> Full access
              </li>
              <li>
                <img src={Mobile} className="me-2" alt="" /> Access on mobile
                screen
              </li>
              <li>
                <img src={Cloud} className="me-2" alt="" /> Assignments
              </li>
              <li>
                <img src={Teacher} className="me-2" alt="" /> Certificate of
                Completion
              </li>
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
              <li>
                <img src={Users} className="me-2" alt="" /> Enrolled:{" "}
                <span>{courseFeatureData.enrolled_student_count}</span>
              </li>
              <li>
                <img src={Timer2} className="me-2" alt="" /> Duration:{" "}
                <span>{courseFeatureData.time_spent_on_course}</span>
              </li>
              <li>
                <img src={Chapter} className="me-2" alt="" /> Lectures:{" "}
                <span> {courseFeatureData.total_lectures} </span>
              </li>
              {/* <li><img src={Video2} className="me-2" alt="" /> Video:<span> 12 hours</span></li> */}
              <li>
                <img src={Chart} className="me-2" alt="" /> Level:{" "}
                <span>{courseFeatureData.course_level_name}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card feature-sec">
          <div className="card-body">
            <div className="cat-title">
              <h4>Learning Objective</h4>
            </div>
            <div className="content">
        {/* Truncate and conditionally render content */}
        <p
          dangerouslySetInnerHTML={{
            __html: isExpanded || !isTruncated ? fullContent : fullContent.slice(0, truncateLength) + '...',
          }}
        />
      </div>
      {isTruncated && (
        <button onClick={toggleReadMore} className="read-more-btn">
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
      {/* <style jsx>{`
        .course-feature {
          margin: 1rem 0;
        }
        .content {
          font-size: 1rem;
          line-height: 1.5;
        }
        .read-more-btn {
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .read-more-btn:hover {
          background-color: #0056b3;
        }
      `}</style> */}
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarSection.propTypes = {
  courseId: PropTypes.number.isRequired,
  courseFeatureData: PropTypes.shape({
    enrolled_student_count: PropTypes.number.isRequired,
    time_spent_on_course: PropTypes.string.isRequired,
    total_lectures: PropTypes.number.isRequired,
    course_level_name: PropTypes.string.isRequired,
    learning_objectives: PropTypes.string.isRequired,
  }).isRequired,
  courseData: PropTypes.shape({
    course_id: PropTypes.number.isRequired,
    course_title: PropTypes.string.isRequired,
    is_student_enroll: PropTypes.bool.isRequired,
    is_certificate: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SidebarSection;
