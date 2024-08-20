import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseHeader from "../header";
import DetailsContent from "./detailsContent";
import Footer from "../../../footer";
import { Link, useParams } from "react-router-dom";
import { Icon1, People, Timer, User1 } from "../../../imagepath";
import ErrorMessage from "./ErrorMessage";

const CourseDetails = () => {
  const { courseId } = useParams(); // Extract courseId from URL params
  const [courseDetails, setCourseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        setIsLoading(true);
        console.log(`Fetching course details for course ID: ${courseId}`);

        // Retrieve the token from local storage
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: token } : {};

        // Fetch course details from API
        const response = await axios.get(`https://api.novajobs.us/api/students/mycourse-details/${courseId}`, { headers });

        // Log the full response for debugging
        console.log("API Response:", response);

        // Extract and validate data from response
        const responseData = response.data;
        console.log("Response Data:", responseData);

        if (responseData && responseData.data && String(responseData.data.id) === String(courseId)) {
          setCourseDetails(responseData.data);
        } else {
          throw new Error(`Course not found or ID mismatch: expected ${courseId}, got ${responseData.data ? responseData.data.id : 'undefined'}`);
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
        setError(`Failed to fetch course details: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"CourseDetails"} />

      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Courses
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      All Courses
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      {courseDetails ? courseDetails.title : "Course Details"}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {courseDetails && (
        <>
          <div className="inner-banner">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="instructor-wrap border-bottom-0 m-0">
                    <div className="about-instructor align-items-center">
                      <div className="abt-instructor-img">
                        <Link to={`/instructor/${courseDetails.instructor.id}`}>
                          <img src={User1} alt="Instructor" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="instructor-detail me-3">
                        <h5>
                          <Link to={`/instructor/${courseDetails.instructor.id}`}>
                            {courseDetails.instructor.name}
                          </Link>
                        </h5>
                        <p>{courseDetails.instructor.title}</p>
                      </div>
                      <div className="rating mb-0">
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star me-1" />
                        <span className="d-inline-block average-rating">
                          <span>{courseDetails.rating}</span> ({courseDetails.reviewsCount})
                        </span>
                      </div>
                    </div>
                    <span className="web-badge mb-3">{courseDetails.category}</span>
                  </div>
                  <h2>{courseDetails.title}</h2>
                  <p>{courseDetails.description}</p>
                  <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                    <div className="cou-info">
                      <img src={Icon1} alt="Lessons Icon" />
                      <p>{courseDetails.lessonsCount} Lessons</p>
                    </div>
                    <div className="cou-info">
                      <img src={Timer} alt="Duration Icon" />
                      <p>{courseDetails.duration}</p>
                    </div>
                    <div className="cou-info">
                      <img src={People} alt="Students Icon" />
                      <p>{courseDetails.studentsEnrolled} students enrolled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DetailsContent courseDetails={courseDetails} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default CourseDetails;
