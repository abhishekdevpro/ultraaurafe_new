import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import CourseHeader from "../header";
import DetailsContent from "./detailsContent";
import { Icon1, People, Timer } from "../../../imagepath";
import Footer from "../../../footer";
import Header from "../../../header";
import { Target } from "react-feather";
import CourseDescription from "./CourseDescription";
import MetaComponent from "../../../../Common/MetaComponent";

// Styled Components

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { courseid } = useParams();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const url = `https://api.novajobs.us/api/trainers/courses/${courseid}`;
        const response = await axios.get(url);
        if (response.data) {
          setCourseData(response.data);
        } else {
          setError("No course content available at this time.");
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError("Error loading course data. Please try again later.");
        console.log(error.response);
        if (error.response && error.response.status == 401) {
          window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseid]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-warning">{error}</div>;
  if (!courseData)
    return (
      <div className="alert alert-info">
        No course content available at this time.
      </div>
    );

  const token = localStorage.getItem("token");

  const courseDescription = courseData.data.course_description || "";

  const metadata = {
    title: courseData.data.course_title ,
    description: courseDescription,
  };
  return (
    <> 
    <MetaComponent meta={metadata}/>
      <div className="main-wrapper">
      {token && courseid ? (
        <CourseHeader activeMenu={"CourseDetails"} courseId={courseid} />
      ) : (
        <Header />
      )}
      {/* <section className="page-content course-sec"> */}
      {/* 
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb"></ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="instructor-wrap border-bottom-0 m-0">
                <div className="about-instructor align-items-center">
                  <div className="abt-instructor-img">
                    <Link
                      to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}
                    >
                      <img
                        src={`https://api.novajobs.us${courseData.data.trainer_photo}`}
                        alt="Instructor"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="instructor-detail me-3">
                    <h5>
                      <Link
                        to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}
                      >
                        {courseData.data.trainer_first_name ||
                          "Instructor Name"}{" "}
                        {courseData.data.trainer_last_name || ""}
                      </Link>
                    </h5>
                    <p>
                      {courseData.data.trainer_job_title || "Instructor Title"}
                    </p>
                  </div>
                  {/* <div className="rating mb-0">
                    <i className="fas fa-star filled me-1" />
                    <i className="fas fa-star filled me-1" />
                    <i className="fas fa-star filled me-1" />
                    <i className="fas fa-star filled me-1" />
                    <i className="fas fa-star me-1" />
                    <span className="d-inline-block average-rating">
                      <span className="rating text-white">({courseData.data.rating})</span> 
                    </span>
                  </div> */}
                  <div className="rating mb-0">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i
                        key={index}
                        className={`fas fa-star ${
                          index < courseData.data.rating ? "filled" : "unfilled"
                        } me-1`}
                      />
                    ))}
                    <span className="d-inline-block average-rating">
                      <span className="rating text-white">
                        ({courseData.data.rating})
                      </span>
                    </span>
                  </div>
                </div>
                <span className="web-badge mb-3">
                  {courseData.course_category_name
                    ? courseData.data.course_category_name
                    : "Under Graduates"}
                </span>
              </div>
              <h2>{courseData.data.course_title || "Course Title"}</h2>

              {/* <CourseDescriptionWrapper>
                <div
                  dangerouslySetInnerHTML={{ __html: displayedDescription }}
                />
                {courseDescription.length >
                  truncateDescription(courseDescription).length && (
                  <ReadMoreButton onClick={toggleDescription}>
                    {isExpanded ? "Show Less" : "Read More"}
                  </ReadMoreButton>
                )}
              </CourseDescriptionWrapper> */}
              <CourseDescription description={courseDescription} />

              <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                <div className="cou-info">
                  <img src={Icon1} alt="Lessons" />
                  <p>{courseData.data.total_lectures || " No Lessons"}</p>
                </div>
                <div className="cou-info">
                  <img src={Timer} alt="Duration" />
                  <p>{courseData.data.time_spent_on_course || "9hr 30min"}</p>
                </div>
                <div className="cou-info">
                  <img src={People} alt="Enrolled Students" />
                  <p>
                    {`${courseData.data.enrolled_student_count} students enrolled` ||
                      "32 students enrolled"}
                  </p>
                </div>
                <div className="cou-info">
                  <Target size={24} color="#000" />{" "}
                  {/* Adjust size and color */}
                  <p>{`${courseData.data.target_audience}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
      <DetailsContent courseFeatureData={courseData.data} />
      <Footer />
    </div>
    </>
  );
};

export default CourseDetails;
