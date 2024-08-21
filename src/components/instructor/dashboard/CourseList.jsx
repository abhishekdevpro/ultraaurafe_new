// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const CourseTable = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetching data from the API
//     const token = localStorage.getItem("trainerToken")
//     console.log(token,"token")
//     axios.get('https://api.novajobs.us/api/trainers/courses'), {
//         headers: {
//           Authorization: `${token}`,
//         }
//     }
//       .then(response => {
//         setCourses(response.data.courses);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the courses!', error);
//       });
//   }, []);
//   console.log(courses)

//   return (
//     <div className="instructor-course-table">
//       <div className="dashboard-title">
//         <h4>Recently Created Courses</h4>
//       </div>
//       <div className="table-responsive custom-table">
//         <table className="table table-nowrap mb-0">
//           <thead>
//             <tr>
//               <th>Courses</th>
//               <th>Enrolled</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.length > 0 ? (
//               courses.map((course) => (
//                 <tr key={course.id}>
//                   <td>
//                     <div className="table-course-detail">
//                       <Link to="#" className="course-table-img">
//                         <span>
//                           <img
//                             src={course.imageUrl} // Use the appropriate image URL from your API data
//                             alt={course.title}
//                           />
//                         </span>
//                         {course.title}
//                       </Link>
//                     </div>
//                   </td>
//                   <td>{course.enrolledStudents || 0}</td>
//                   <td>{course.status}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No courses available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CourseTable;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('trainerToken');

    // Fetching data from the API with token in headers
    axios.get('https://api.novajobs.us/api/trainers/courses', {
      headers: {
        Authorization: `${token}`, 
      }
    })
      .then(response => {
        console.log(response.data.data)
        setCourses(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
        setError('Failed to fetch courses. Please try again.');
      });
  }, []);
  console.log(courses,"courses hu")

  return (
    <div className="instructor-course-table">
      <div className="dashboard-title">
        <h4>Recently Created Courses</h4>
      </div>
      <div className="table-responsive custom-table">
        <table className="table table-nowrap mb-0">
          <thead>
            <tr>
              <th>Courses</th>
              <th>Enrolled</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="3">{error}</td>
              </tr>
            ) : courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id}>
                  <td>
                    <div className="table-course-detail">
                      <Link to="#" className="course-table-img">
                        <span>
                          <img
                            src={`https://api.novajobs.us${course.course_banner_image}`} // Use the appropriate image URL from your API data
                            alt={course.title}
                          />
                        </span>
                        {course.title}
                      </Link>
                    </div>
                  </td>
                  <td>{course.enrolled_student_count || 0}</td>
                  <td>{course.time_spent_on_course}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No courses available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
