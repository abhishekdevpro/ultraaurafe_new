import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
import { toast } from "react-toastify";
// import dummy from '../../../assets/Online Course.png'

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the vendor token or trainer token from local storage
    const token =
      localStorage.getItem("vendorToken") ||
      localStorage.getItem("trainerToken") ||
      localStorage.getItem("adminToken");

    // Fetching data from the API with token in headers
    axios
      .get("https://api.novajobs.us/api/trainers/courses", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
        setError("Failed to fetch courses. Please try again.");
      });
  }, []);

  // console.log(courses, "courses hu");

  // Function to handle course edit
  const handleEditCourse = (courseId, isActive) => {
    console.log(courseId,isActive,"sjbv bz");
    if (localStorage.getItem("adminToken")) {
      navigate(`/course-details/${courseId}`);
      // console.log(`Edit course with ID: ${courseId}`);
    } else {
      console.log(
        `Course with ID: ${courseId} is not active and cannot be edited.`
      );
      // Optionally show an alert or message to the user
      toast.error("This course is not active and cannot be edited.");
    }
  };

  return (
    <div className="instructor-course-table">
      <div className="dashboard-title">
        <h4>Recently Created Courses</h4>
      </div>
      <div className="table-responsive custom-table">
        <table className="table table-nowrap mb-0">
          <thead>
            <tr>
              <th>Course Image</th>
              <th>Title</th> {/* New column for Course Title */}
              <th>Enrolled</th>
              <th>Duration</th>
              {localStorage.getItem("adminToken") ? " " : <th>Status</th>}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="5">{error}</td>
              </tr>
            ) : courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id}>
                  <td>
                    <div className="table-course-detail">
                      {/* {console.log(`https://api.novajobs.us${course.course_banner_image}`)} */}
                      <Link to="#" className="course-table-img">
                        <span>
                          <img
                            // src={
                            //   course.course_banner_image
                            //     ? `https://api.novajobs.us${course.course_banner_image}`
                            //     : dummy
                            // }
                            src={
                              course.course_banner_image.startsWith("https")
                                ? course.course_banner_image
                                : `https://api.novajobs.us${course.course_banner_image}`
                            }
                            alt={course.title}
                          />
                        </span>
                      </Link>
                    </div>
                  </td>
                  <td>{course.course_title}</td>{" "}
                  {/* Displaying the course title */}
                  <td>{course.enrolled_student_count || 0}</td>
                  <td>{course.time_spent_on_course}</td>
                  {localStorage.getItem("adminToken") ? (
                    " "
                  ) : (
                    <td>{course.is_active == 1 ? "Active" : "InActive"}</td>
                  )}
                  <td>
                    <button
                    disabled={!course.is_active}
                      className="btn btn-primary action-btn"
                      style={{ background: "linear-gradient(135deg, #ffe6f0, #e6f0ff)",color: "#007bff"  }}
                      onClick={() =>
                        handleEditCourse(course.id, course.is_active)
                      }
                    >
                      <FeatherIcon icon="edit" className="me-2" />
                      Edit
                    </button>
                    {localStorage.getItem("adminToken") ? (
                      ""
                    ) : (
                      <button 
                      className="btn btn-secondary danger-btn">
                        Request Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No courses available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
