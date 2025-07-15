import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CourseHeader from "../header";
import { Icon1, People, Timer } from "../../../imagepath";
import Footer from "../../../footer";
import Header from "../../../header";
import { Target } from "react-feather";
import CourseDescription from "../courseDetails/CourseDescription";
import MetaComponent from "../../../../Common/MetaComponent";

const PartnerCourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { courseid } = useParams();

  useEffect(() => {
    const fetchPartnerCourseData = async () => {
      try {
        const url = `https://api.novajobs.us/api/students/course-partner/${courseid}`;
        const response = await axios.get(url);
        if (response.data.data) {
          setCourseData(response.data.data);
        } else {
          setError("No partner course content available at this time.");
        }
      } catch (error) {
        console.error("Error fetching partner course data:", error);
        setError("Error loading partner course data. Please try again later.");
        console.log(error.response);
        if (error.response && error.response.status == 401) {
          window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPartnerCourseData();
  }, [courseid]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-warning">{error}</div>;
  if (!courseData)
    return (
      <div className="alert alert-info">
        No partner course content available at this time.
      </div>
    );

  const token = localStorage.getItem("token");

  const courseDescription = courseData.description || "";

  const metadata = {
    title: courseData.name || "Partner Course",
    description: courseDescription,
  };

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
                      <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                        alt="Partner Course"
                        className="img-fluid"
                      />
                    </div>
                    <div className="instructor-detail me-3">
                      <h5>Industry Expert</h5>
                      <p>External Platform</p>
                    </div>
                    <div className="rating mb-0">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i
                          key={index}
                          className={`fas fa-star ${
                            index < (courseData.rating || 0)
                              ? "filled"
                              : "unfilled"
                          } me-1`}
                        />
                      ))}
                      <span className="d-inline-block average-rating">
                        <span className="rating text-white">
                          ({courseData.rating || 0})
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* <span className="web-badge mb-3">Partner Course</span> */}
                </div>
                <h2>{courseData.name || "Partner Course"}</h2>

                <CourseDescription
                  description={courseDescription}
                  slug={courseData.slug}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="page-content course-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="partner-course-content">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">About This Partner Course</h3>
                      <p className="card-text">
                        {courseData.description ||
                          "This is a partner course from an external platform."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="sidebar-sec">
                  <div className="card">
                    <div className="card-body">
                      <h4>Partner Course Information</h4>
                      <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                        <div className="cou-info">
                          <img src={Icon1} alt="Platform" />
                          <p>External Platform</p>
                        </div>
                        <div className="cou-info">
                          <img src={Timer} alt="Duration" />
                          <p>Self-paced</p>
                        </div>
                        <div className="cou-info">
                          <img src={People} alt="Students" />
                          <p>Partner Course</p>
                        </div>
                        <div className="cou-info">
                          <Target size={24} color="#000" />
                          <p>Industry Expert</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PartnerCourseDetails;
