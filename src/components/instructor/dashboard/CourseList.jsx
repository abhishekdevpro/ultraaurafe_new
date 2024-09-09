
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('trainerToken');

    // Fetching data from the API with token in headers
    axios
      .get('https://api.novajobs.us/api/trainers/courses', {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the courses!', error);
        setError('Failed to fetch courses. Please try again.');
      });
  }, []);

  console.log(courses, 'courses hu');

  // Function to handle course edit
  const handleEditCourse = (courseId) => {
    navigate(`/course-details/${courseId}`);
    console.log(`Edit course with ID: ${courseId}`);
  };

  // Function to handle course duplication
  // const handleDuplicateCourse = (courseId) => {
  //   console.log(`Duplicate course with ID: ${courseId}`);
  // };

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
                      <Link to="#" className="course-table-img">
                        <span>
                          <img
                            src={`https://api.novajobs.us${course.course_banner_image}`}
                            alt={course.title}
                          />
                        </span>
                      </Link>
                    </div>
                  </td>
                  <td>{course.course_title}</td> {/* Displaying the course title */}
                  <td>{course.enrolled_student_count || 0}</td>
                  <td>{course.time_spent_on_course}</td>
                  <td>
                    <button
                      className="btn btn-primary action-btn"
                      onClick={() => handleEditCourse(course.id)}
                    >
                              <FeatherIcon icon="edit" className="me-2" />

                      Edit
                    </button>
                    {/* <button
                      className="btn btn-secondary action-btn"
                      onClick={() => handleDuplicateCourse(course.id)}
                    >
                      Duplicate
                    </button> */}
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
