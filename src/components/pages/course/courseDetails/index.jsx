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
// import { Trophy } from "lucide-react";

// Styled Components

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { courseid } = useParams();

  // Record first visit progress when user lands on this page
  useEffect(() => {
    const recordFirstVisit = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token && courseid) {
          await axios.put(
            `https://api.novajobs.us/api/students/first-visit-progress/${courseid}`,
            {},
            { headers: { Authorization: token } }
          );
        }
      } catch (err) {
        console.error("Error recording first-visit-progress:", err);
      }
    };
    recordFirstVisit();
  }, [courseid]);

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
    title: courseData.data.course_title,
    description: courseDescription,
  };
  console.log(courseData.data.user_type_id, "courseData.user_type_id");
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="main-wrapper">
        {token && courseid ? (
          <CourseHeader activeMenu={"CourseDetails"} courseId={courseid} />
        ) : (
          <Header />
        )}
      

        <div className="inner-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="instructor-wrap border-bottom-0 m-0">
                  <div className="about-instructor align-items-center">
                    <div className="abt-instructor-img">
                      <Link
                        // to={`/instructor/instructor-profile/${courseData.data.trainer_id}?user_type=${courseData.user_type_id}`}
                        to={`/instructor/instructor-profile/${courseData.data.trainer_id}?user_type=${courseData.data.user_type_id}`}
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
                          to={`/instructor/instructor-profile/${
                            courseData.data.trainer_id
                          }${
                            courseData.data.user_type_id === 4
                              ? `?user_type=${courseData.data.user_type_id}`
                              : ""
                          }`}
                        >
                          {/* {courseData.data.trainer_first_name ||
                          "Instructor Name"}{" "}
                        {courseData.data.trainer_last_name || ""} */}
                          {courseData.data.trainer_display_name
                            ? courseData.data.trainer_display_name
                            : `${courseData.data.trainer_first_name} ${courseData.data.trainer_last_name}`}
                        </Link>
                      </h5>
                      <p>
                        {courseData.data.trainer_job_title ||
                          "Instructor Title"}
                      </p>
                    </div>
                   
                    <div className="rating mb-0">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i
                          key={index}
                          className={`fas fa-star ${
                            index < courseData.data.rating
                              ? "filled"
                              : "unfilled"
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
               <div className="d-flex align-items-center justify-content-between gap-4">
                 <h2>{courseData.data.course_title || "Course Title"}</h2>
                 <p className="web-badge mb-3" style={{backgroundColor:"#e63975"}}>
                      {`${courseData.data.course_plan_type_name} `}
                    </p>
               </div>
               
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
                  {/* <div className="cou-info">
                    <Trophy size={24} color="#e63975" />
                    <p>
                      {`${courseData.data.course_plan_type_name} `}
                    </p>
                  </div> */}
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
