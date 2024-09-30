import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InstructorCard from "./InstructorCard";
import CourseContent from "./CourseContent";
import SidebarSection from "./SidebarSection";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentList";
import CourseProgressBar from "./CourseProgress";

const DetailsContent = ({ courseFeatureData }) => {
  console.log(courseFeatureData,"cfd");
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState(""); // New state for comment
  const { courseid } = useParams();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const token = localStorage.getItem("trainerToken");
        const url = `https://api.novajobs.us/api/students/course-details/${courseid}`;
        const headers = token ? { Authorization: token } : {};
        
        const response = await axios.get(url, { headers });
        if (response.data.data) {
          setCourseData(response.data.data);
        } else {
          setError("No course content available at this time.");
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError("Error loading course data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();

    const checkIfShouldShowModal = () => {
      const ratedCourses = JSON.parse(localStorage.getItem("ratedCourses")) || [];
      const remindMeLaterTimestamp = localStorage.getItem("remindMeLaterTimestamp");
      const currentTime = Date.now();

      if (!ratedCourses.includes(courseid)) {
        // Check if remind me later timestamp exists and if it's been an hour or more
        if (!remindMeLaterTimestamp || currentTime - parseInt(remindMeLaterTimestamp, 10) >= 3600000) {
          setShowRatingModal(true);
        }
      }
    };

    checkIfShouldShowModal();
  }, [courseid]);

  const token = localStorage.getItem("token");
  const handleRatingSubmit = async () => {
    try {
      if (!token) {
        console.error("No token found");
        return;
      }

      await axios.post(
        `https://api.novajobs.us/api/students/ratings/${courseid}`,
        { stars: rating, content }, // Include comment in request
        { headers: { Authorization: token } }
      );

      // Store the rated course in localStorage
      const ratedCourses = JSON.parse(localStorage.getItem("ratedCourses")) || [];
      if (!ratedCourses.includes(courseid)) {
        ratedCourses.push(courseid);
        localStorage.setItem("ratedCourses", JSON.stringify(ratedCourses));
      }

      setShowRatingModal(false);
      setContent(""); // Clear the comment field
      toast.success("Thank you for your rating!");  // Show thank you toast
    } catch (error) {
      console.error("Error submitting rating:", error);
      // Optionally, show an error message to the user
    }
  };

  const handleRemindLater = () => {
    setShowRatingModal(false);
    localStorage.setItem("remindMeLaterTimestamp", Date.now().toString()); // Set the remind me later timestamp
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-warning">{error}</div>;
  }

  if (!courseData || !courseData.section_response || courseData.section_response.length === 0) {
    return <div className="alert alert-info">No course content available at this time.</div>;
  }

  return (
    <>
      <section className="page-content course-sec ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            {token && courseData.is_student_enroll && (
    <CourseProgressBar progress={courseData.course_progress} />
  )}
              <CourseContent courseData={courseData} />
              <InstructorCard trainerID={courseData.trainer_id} />
              
              {/* Comment */}
              <CommentForm courseId={courseid} />
              <CommentsList courseId={courseid} />
              {/* /Comment */}
            </div>
            
            <SidebarSection courseId={courseid} courseData={courseData} courseFeatureData={courseFeatureData} />
          </div>
        </div>
      </section>

      {showRatingModal && courseData.is_student_enroll && (
        <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Rate this course</h5>
                <button type="button" className="close" onClick={() => setShowRatingModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Please take a moment to rate your experience with this course.</p>
                <div className="d-flex justify-content-center my-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{fontSize: '32px', cursor: 'pointer', color: star <= rating ? 'gold' : 'gray'}}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <textarea
                  className="form-control my-4"
                  rows={4}
                  placeholder="Leave a comment"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleRatingSubmit}>Submit Rating</button>
                <button type="button" className="btn btn-secondary" onClick={handleRemindLater}>Remind Me Later</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ToastContainer />
    </>
  );
};

DetailsContent.propTypes = {
  courseFeatureData: PropTypes.shape({
    enrolled_student_count: PropTypes.number,
    time_spent_on_course: PropTypes.number,
    total_lectures: PropTypes.number,
    course_level_name: PropTypes.string,
  }),
};

export default DetailsContent;
