import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import CourseHeader from "../header";
import DetailsContent from "./detailsContent";
import { Icon1, People, Timer, User1 } from "../../../imagepath";
import Footer from "../../../footer";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {courseid} = useParams() // Ensure this matches the parameter in your route

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const url = `https://api.novajobs.us/api/trainers/courses/${courseid}`;
        const response = await axios.get(url);
        if (response.data) {
          setCourseData(response.data);
          console.log(response.data, "testt")
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
  }, [courseid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-warning">{error}</div>;
  }

  if (!courseData) {
    return <div className="alert alert-info">No course content available at this time.</div>;
  }

  return (
    <>
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
                        {courseData.title || "Course Title"}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="instructor-wrap border-bottom-0 m-0">
                  <div className="about-instructor align-items-center">
                    <div className="abt-instructor-img">
                      <Link to="/instructor/instructor-profile">
                        <img src={User1} alt="Instructor" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="instructor-detail me-3">
                      <h5>
                        <Link to="/instructor/instructor-profile">{courseData.data.trainer_first_name || "Instructor Name"} {courseData.data.trainer_last_name || "dexter"}</Link>
                      </h5>
                      <p>{courseData.data.trainer_job_title || "Instructor Title"}</p>
                    </div>
                    <div className="rating mb-0">
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star me-1" />
                      <span className="d-inline-block average-rating">
                        <span>{courseData.rating || "4.5"}</span> ({courseData.reviews || "15"})
                      </span>
                    </div>
                  </div>
                  <span className="web-badge mb-3">{courseData.data.course_category_name }</span>
                </div>
                <h2>{courseData.data.course_title || "Course Title"}</h2>
                <p>{courseData.data.course_description || "Course Description"}</p>
                <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                  <div className="cou-info">
                    <img src={Icon1} alt="Lessons" />
                    <p>{courseData.data.total_lectures || "12 Lessons"}+</p>
                  </div>
                  <div className="cou-info">
                    <img src={Timer} alt="Duration" />
                    <p>{courseData.data.time_spent_on_course || "9hr 30min"}</p>
                  </div>
                  <div className="cou-info">
                    <img src={People} alt="Enrolled Students" />
                    <p>{`${courseData.data.enrolled_student_count} students enrolled` || "32 students enrolled"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DetailsContent courseData={courseData} />

        <Footer />
      </div>
    </>
  );
};

export default CourseDetails;
