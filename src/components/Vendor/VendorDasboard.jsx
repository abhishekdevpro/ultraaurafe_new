//import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import VendorSidebar from "./VendorSidebar";
import { VendorHeader } from "./VendorHeader";
import Footer from "../footer";

// import { Icon1, Icon2, User6, } from "./../../components/imagepath";

//import { useParams, useNavigate } from "react-router-dom";
import CourseTable from "./../instructor/dashboard/CourseList";
import { useEffect, useState } from "react";
import axios from "axios";
//import axios from 'axios';
// import productImg from "../../../assets/Product.png"; // Placeholder image for products

export const VendorDashboard = () => {
  const [profile ,setProfileData] =useState("")

  const token = localStorage.getItem("vendorToken")


  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/vendors/profile",{
        headers: {
          Authorization:token,}
      })
      .then((response) => {
        const data = response.data.data;
        setProfileData(data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

 {/* const { id } = useParams()
  console.log(id, "trainer id")
  const [isClassAdded, setIsClassAdded] = useState([false]);
  const [allCourses, setAllCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toggleClass = (index) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

  };

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/trainers/all-courses",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setAllCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching all courses:", error);
        setError("Error fetching all courses.");
      }
    };
    fetchAllCourses();
  }, []);
  const fetchCourseDetails = async (courseId) => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/trainers/course-details/${courseId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      navigate(`/course-details/${courseId}`, { state: { courseData: response.data.data } });
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };
  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  } */}
  return (
    <div className="main-wrapper">
      <VendorHeader Profile={profile} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title"> Vendor Dashboard</h2>
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
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <VendorSidebar />
            {/* /Sidebar */}
            {/* Student Dashboard */}
            <div className="col-xl-9 col-lg-9">
              {/* Dashboard Grid */}
              {/* <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Enrolled Courses</h5>
                      <h2>13</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Active Courses</h5>
                      <h2>08</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Completed Courses</h5>
                      <h2>06</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Students</h5>
                      <h2>5</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Courses</h5>
                      <h2>11</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Earnings</h5>
                      <h2>$486</h2>
                    </div>
                  </div>
                </div>
              </div> */}

<div className="row justify-content-center">
  {profile ? (
    <div className="col-lg-12 col-md-10 d-flex">
      <div className="card dash-info flex-fill">
        <div className="card-body">
          <h2>About Us</h2>
          <p>{profile.about}</p>
        </div>
      </div>
    </div>
  ) : null}
</div>

              <CourseTable />

              {/* /Dashboard Grid */}
              {/* <div className="instructor-course-table">
                <div className="dashboard-title">
                  <h4>Recently Created Courses</h4>
                </div>
                <div className="table-responsive custom-table">
                  <table className="table table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Courses</th>
                        <th>Enrolled</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel01}
                                  alt="Img"
                                />
                              </span>
                              Complete HTML, CSS and Javascript Course
                            </Link>
                          </div>
                        </td>
                        <td>0</td>
                        <td>Published</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel05}
                                  alt="Img"
                                />
                              </span>
                              Complete Course on Fullstack Web Developer
                            </Link>
                          </div>
                        </td>
                        <td>2</td>
                        <td>Published</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel02}
                                  alt="Img"
                                />
                              </span>
                              Data Science Fundamentals and Advanced Bootcamp
                            </Link>
                          </div>
                        </td>
                        <td>2</td>
                        <td>Published</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel03}
                                  alt="Img"
                                />
                              </span>
                              Master Microservices with Spring Boot and Spring Cloud
                            </Link>
                          </div>
                        </td>
                        <td>1</td>
                        <td>Published</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table-course-detail">
                            <Link to="#" className="course-table-img">
                              <span>
                                <img
                                  src={instructortabel04}
                                  alt="Img"
                                />
                              </span>
                              Information About UI/UX Design Degree
                            </Link>
                          </div>
                        </td>
                        <td>3</td>
                        <td>Published</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> 
            
              <div className="dashboard-title">
                <h4>Recently Enrolled Coursess</h4>
              </div>
              {allCourses.length > 0 ? (
                <div className="row">
                  {allCourses.map((course) => (
                    <div className="col-md-4" key={course.id}>
                      <div className="course-box flex-fill">
                        <div className="product">
                          <div className="product-img">
                            <Link to={`/course-details/${course.id}`} >
                              <img
                                className="img-fluid"
                                src={course.course_banner_image ? `https://api.novajobs.us${course.course_banner_image}` : "couresimg"}
                                alt={course.course_title}
                              />
                            </Link>
                            <div className="price">
                              <h3>
                                ${course.after_discount_price} <span>${course.discount_percent}</span>
                              </h3>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="course-group d-flex">
                              <div className="course-group-img d-flex">
                                <Link to="/instructor/instructor-profile">
                                  <img
                                    src={User6}
                                    alt="Img"
                                    className="img-fluid"
                                  />
                                </Link>
                                <p>{course.trainer_first_name} <span>{course.trainer_last_name}</span></p>
                                <div className="course-name">
                                 
                                </div>
                              </div>
                              <div className="course-share d-flex align-items-center justify-content-center">
                                <Link to="#" onClick={() => toggleClass(5)}>
                                  <i className={`fa-regular fa-heart ${isClassAdded[5] ? 'color-active' : ''}`} />
                                </Link>
                              </div>
                            </div>
                            <h3 className="title instructor-text">
                              <Link to="#" onClick={() => fetchCourseDetails(course.id)}>
                                {course.course_title}
                              </Link>
                            </h3>
                            <div className="course-info d-flex align-items-center">
                              <div className="rating-img d-flex align-items-center">
                                <img src={Icon1} alt="Img" />
                                <p>15+ Lesson</p>
                              </div>
                              <div className="course-view d-flex align-items-center">
                                <img src={Icon2} alt="Img" />
                                <p>70hr 30min</p>
                              </div>
                            </div>
                            <div className="rating mb-0">
                              <i className="fas fa-star filled me-1" />
                              <i className="fas fa-star filled me-1" />
                              <i className="fas fa-star filled me-1" />
                              <i className="fas fa-star filled me-1" />
                              <i className="fas fa-star me-1" />
                              <span className="d-inline-block average-rating">
                                <span>4.6</span> (15)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No courses available</p>
              )} */}
              <div className="dash-pagination">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Page 1 of 2</p>
                  </div>
                  <div className="col-6">
                    <ul className="pagination">
                      <li className="active">
                        <Link to="#">1</Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Student Dashboard */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>

  );
};
