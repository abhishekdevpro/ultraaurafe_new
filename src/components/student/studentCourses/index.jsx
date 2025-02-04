import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Select from "react-select";
import axios from "axios";
import { Icon1, Icon2 } from "../../imagepath";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Footer from "../../footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

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

const NoCourseMessage = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 20px;
`;

const GoToCoursesButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const DynamicCourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState({
    value: "all",
    label: "All",
  });
  const [isClassAdded, setIsClassAdded] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }
        const response = await axios.get(
          "https://api.novajobs.us/api/students/mycourse-lists",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.data && Array.isArray(response.data.data)) {
          setCourses(response.data.data);
          setIsClassAdded(new Array(response.data.data.length).fill(false));
        } else {
          setCourses([]);
          console.log("No course data returned from API");
        }
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "An error occurred while fetching courses"
        );
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "An error occurred while fetching courses"
        );
        if (error.response && error.response.status == 401) {
          window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const options = [
    { value: "all", label: "All" },
    { value: "inprogress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.course_title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterOption.value === "all" ||
        (filterOption.value === "inprogress" && course.progress < 100) ||
        (filterOption.value === "completed" && course.progress === 100))
  );

  const toggleClass = async (index, courseId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found");
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
      const updatedClasses = [...isClassAdded];
      updatedClasses[index] = !updatedClasses[index];
      setIsClassAdded(updatedClasses);
      toast.success("Course added to favorites!");
    } catch (error) {
      console.error("Failed to add course to favorites:", error);
      toast.error("Failed to add course to favorites. Please try again.");
      if (error.response && error.response.status == 401) {
        window.location.href = "/login";
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error}
        <button onClick={() => navigate(0)} className="btn btn-primary ml-3">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Enrolled Courses"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Enrolled Courses</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Enrolled Courses
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
            <StudentSidebar />
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-info">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Enrolled Courses</h3>
                  </div>
                  <div className="checkout-form pb-0">
                    <div className="wishlist-tab">
                      <ul className="nav">
                        <li className="nav-item">
                          <Link
                            to="#"
                            className="active"
                            data-bs-toggle="tab"
                            data-bs-target="#enroll-courses"
                          >
                            Enrolled Courses ({courses.length})
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="enroll-courses"
                      >
                        {courses.length > 0 ? (
                          <>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="show-filter choose-search-blk">
                                  <form action="#">
                                    <div className="mycourse-student align-items-center">
                                      <div className="student-search">
                                        <div className="search-group">
                                          <Search
                                            className="searchFeather"
                                            size={16}
                                          />
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search our courses"
                                            value={searchTerm}
                                            onChange={(e) =>
                                              setSearchTerm(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="student-filter">
                                        <div className="input-block select-form mb-0">
                                          <Select
                                            className="select country-select"
                                            name="sellist1"
                                            options={options}
                                            value={filterOption}
                                            onChange={setFilterOption}
                                            placeholder="Choose"
                                            styles={style}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              {filteredCourses.length > 0 ? (
                                filteredCourses.map((course, index) => (
                                  <div
                                    key={course.id}
                                    className="col-xl-4 col-md-6 d-flex"
                                  >
                                    <div className="course-box flex-fill">
                                      <div className="product">
                                        <div className="product-img">
                                          <Link
                                            to={`/course-info/${course.id}`}
                                          >
                                            <img
                                              className="img-fluid"
                                              alt={course.course_title}
                                              // src={`https://api.novajobs.us${course.course_banner_image}`}
                                              src={
                                                course.course_banner_image.startsWith(
                                                  "https"
                                                )
                                                  ? course.course_banner_image
                                                  : `https://api.novajobs.us${course.course_banner_image}`
                                              }
                                            />
                                          </Link>
                                          <div className="price">
                                            <h3>
                                              ${course.price}{" "}
                                              <span>
                                                ${course.original_price}
                                              </span>
                                            </h3>
                                          </div>
                                        </div>
                                        <div className="product-content">
                                          <div className="course-group d-flex">
                                            <div className="course-group-img d-flex">
                                              <div className="course-name">
                                                <h4>
                                                  <Link
                                                    to={`/instructor/instructor-profile/${course.trainer_id}`}
                                                  >
                                                    {course.trainer_first_name}
                                                  </Link>
                                                </h4>
                                                <p>Instructor</p>
                                              </div>
                                            </div>
                                            <div className="course-share d-flex align-items-center justify-content-center">
                                              <Link
                                                to="#"
                                                onClick={() =>
                                                  toggleClass(index, course.id)
                                                }
                                              >
                                                <i
                                                  className={`fa-regular fa-heart ${
                                                    isClassAdded[index]
                                                      ? "color-active"
                                                      : ""
                                                  }`}
                                                />
                                              </Link>
                                            </div>
                                          </div>
                                          <h3 className="title instructor-text">
                                            <Link
                                              to={`/course-info/${course.id}`}
                                            >
                                              {course.course_title}
                                            </Link>
                                          </h3>
                                          <div className="course-info d-flex align-items-center">
                                            <div className="rating-img d-flex align-items-center">
                                              <img src={Icon1} alt="Icon" />
                                              <p>
                                                {course.total_lectures} Lesson
                                              </p>
                                            </div>
                                            <div className="course-view d-flex align-items-center">
                                              <img src={Icon2} alt="Icon" />
                                              <p>{course.course_level_name}</p>
                                            </div>
                                          </div>
                                          <div className="rating mb-0">
                                            {[...Array(5)].map(
                                              (star, index) => (
                                                <i
                                                  key={index}
                                                  className={`fas fa-star ${
                                                    index < course.rating
                                                      ? "filled"
                                                      : ""
                                                  }`}
                                                />
                                              )
                                            )}
                                            <span className="d-inline-block average-rating">
                                              {course.rating}
                                            </span>
                                          </div>
                                          <div>
                                            <Link
                                              to={`/course-info/${course.id}`}
                                            >
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
                                <div>
                                  No courses found matching your search
                                  criteria.
                                </div>
                              )}
                            </div>
                          </>
                        ) : (
                          <NoCourseMessage>
                            <h3>You are not enrolled in any courses yet.</h3>
                            <p>
                              Explore our course catalog and start your learning
                              journey today!
                            </p>
                            <GoToCoursesButton to="/course-list">
                              Go to All Courses
                            </GoToCoursesButton>
                          </NoCourseMessage>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default DynamicCourseList;
