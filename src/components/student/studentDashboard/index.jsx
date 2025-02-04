import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import { Icon1, Icon2 } from "../../imagepath";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

// Styled components
const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 2rem;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AlertText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #856404;
  margin-bottom: 1rem;
`;

const ExploreButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
const StartLessonButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid transparent;
  width: 100%;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    border: 2px solid #2e7d32;
    background-color: #45a049;
  }
`;

const StudentDashboard = () => {
  const [isClassAdded, setIsClassAdded] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const response = await axios.get(
  //         "https://api.novajobs.us/api/students/mycourse-lists",
  //         {
  //           headers: {
  //             Authorization: `${token}`,
  //           },
  //         }
  //       );
  //       if (response.data.data && response.data.data.length > 0) {
  //         setCourses(response.data.data);
  //         setIsClassAdded(new Array(response.data.data.length).fill(false));
  //       } else {
  //         setError("You have not enrolled in any courses yet.");
  //         if(error.response && error.response.status == 401){
  //           window.location.href = '/login'
  //         }
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       setError(
  //         "Failed to fetch courses. Please check your connection or try again later."
  //       );
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true); // Set loading to true before making the request

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://api.novajobs.us/api/students/mycourse-lists",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.data.data && response.data.data.length > 0) {
          setCourses(response.data.data);
          setIsClassAdded(new Array(response.data.data.length).fill(false));
        } else {
          setError("You have not enrolled in any courses yet.");
        }
      } catch (error) {
        // Handle specific error responses
        if (error.response) {
          if (error.response.status === 401) {
            window.location.href = "/login"; // Redirect if token is expired or invalid
          } else {
            setError(
              "Failed to fetch courses. Please check your connection or try again later."
            );
          }
        } else {
          setError(
            "Failed to fetch courses. Please check your connection or try again later."
          ); // Handle other errors
        }
      } finally {
        setLoading(false); // Ensure loading is set to false in all cases
      }
    };

    fetchCourses();
  }, []);

  const toggleClass = async (index, courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please log in to add courses to favorites.");
        navigate("/login");
        return;
      }
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
    } catch (error) {
      console.error("Failed to add course to favorites:", error);
      // Show error toast
      toast.error("Failed to add course to favorites. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Dashboard"} />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 pt-5">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <StudentSidebar />
            <div className="col-xl-9 col-lg-9">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Enrolled Courses</h5>
                      <h2>{courses.length}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Active Courses</h5>
                      <h2>
                        {
                          courses.filter((course) => course.status === "active")
                            .length
                        }
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Completed Courses</h5>
                      <h2>
                        {
                          courses.filter(
                            (course) => course.status === "completed"
                          ).length
                        }
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-title">
                <h4>Recently Enrolled Courses</h4>
              </div>

              <div className="row">
                {error ? (
                  <AlertWrapper>
                    <div>
                      <AlertText>
                        You have not enrolled in any courses yet.
                      </AlertText>
                      <Link to={"/course-list"}>
                        <ExploreButton>Explore Courses</ExploreButton>
                      </Link>
                    </div>
                  </AlertWrapper>
                ) : courses.length > 0 ? (
                  courses.map((course, index) => (
                    <div key={course.id} className="col-xl-4 col-md-6 d-flex">
                      <div className="course-box flex-fill">
                        <div className="product">
                          <div className="product-img">
                            <Link to={`/course-info/${course.id}`}>
                              <img
                                className="img-fluid"
                                alt={course.course_title}
                                // src={`https://api.novajobs.us${course.course_banner_image}`}
                                src={
                                  course.course_banner_image.startsWith("https")
                                    ? course.course_banner_image
                                    : `https://api.novajobs.us${course.course_banner_image}`
                                }
                              />
                            </Link>
                            <div className="price">
                              <h3>
                                ${course.price}{" "}
                                <span>${course.original_price}</span>
                              </h3>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="course-group d-flex">
                              <div className="course-group-img d-flex">
                                <Link
                                  to={`/instructor/instructor-profile/${course.trainer_id}`}
                                >
                                  <img
                                    src={`https://api.novajobs.us/${course.trainer_photo}`}
                                    alt="Instructor"
                                    className="img-fluid"
                                  />
                                </Link>
                                <div className="course-name">
                                  <h4>
                                    <Link
                                      to={`/instructor/instructor-profile/${course.trainer_id}`}
                                    >
                                      {course.trainer_first_name}{" "}
                                      {course.trainer_last_name}
                                    </Link>
                                  </h4>
                                  <p>Instructor</p>
                                </div>
                              </div>
                              <div className="course-share d-flex align-items-center justify-content-center">
                                <Link
                                  to="#"
                                  onClick={() => toggleClass(index, course.id)}
                                >
                                  <i
                                    className={`fa-regular fa-heart ${
                                      isClassAdded[index] ? "color-active" : ""
                                    }`}
                                  />
                                </Link>
                              </div>
                            </div>
                            <h3 className="title instructor-text">
                              <Link to={`/course-info/${course.id}`}>
                                {course.course_title}
                              </Link>
                            </h3>
                            <div className="course-info d-flex align-items-center">
                              <div className="rating-img d-flex align-items-center">
                                <img src={Icon1} alt="Icon" />
                                <p>{course.total_lectures} Lesson</p>
                              </div>
                              <div className="course-view d-flex align-items-center">
                                <img src={Icon2} alt="Icon" />
                                <p>{course.course_level_name}</p>
                              </div>
                            </div>
                            <div className="rating mb-0">
                              {[...Array(5)].map((star, index) => (
                                <i
                                  key={index}
                                  className={`fas fa-star ${
                                    index < course.rating ? "filled" : ""
                                  }`}
                                />
                              ))}
                              <span className="d-inline-block average-rating">
                                <span>{course.rating}</span>
                              </span>
                            </div>
                            <div>
                              <Link to={`/course-info/${course.id}`}>
                                <StartLessonButton>
                                  Start the Lesson
                                </StartLessonButton>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <div className="alert alert-info">
                      You have not enrolled in any courses yet.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
