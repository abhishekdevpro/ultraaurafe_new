import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { Icon1, Icon2 } from "../../imagepath";
import { Icon01, Icon02 } from "../imagepath";
import { toast } from "react-toastify";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClassAdded, setIsClassAdded] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://api.novajobs.us/api/trainers/all-courses");
        console.log(response, "courses");
        setCourses(response.data.data.slice(0, 3)); // Limit to 6 courses
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const toggleClass = async (index, courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://api.novajobs.us/api/students/course-favorite',
        { course_id: courseId },
        {
          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      // Show success toast
      toast.success('Course added to favorites!');
    } catch (error) {
      console.error('Failed to add course to favorites:', error);
      // Show error toast
      navigate('/login')
    }
  };
  return (
    <section className="section new-course">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            {/* <span>What&#39;s New</span>   or use <span>What's New</span> * */}
            <h2>Explore courses as per your needs
            </h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <Link to="/course-list" className="btn btn-primary">
              All Courses
            </Link>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p className="mb-0">
          Gain practical, in-demand skills through online courses taught by industry experts. Enhance your career with real-world knowledge from leaders in the field.
          </p>
        </div>
        <div className="course-feature">
          <div className="row">
            {courses.map((course,index) => (
              <div key={course.id} className="col-lg-4 col-md-6 d-flex">
                <div className="course-box d-flex aos" data-aos="fade-up">
                  <div className="product">
                    <div className="product-img">
                      <Link to={`/course-info/${course.id}`}>
                        <img className="img-fluid" alt="" src={`https://api.novajobs.us${course.course_banner_image}`} />
                      </Link>
                      <div className="price">
                        <h3>
                          ${course.course_price}
                          {course.after_discount_price > 0 && (
                            <span>${course.after_discount_price}</span>
                          )}
                        </h3>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="course-group d-flex">
                        <div className="course-group-img d-flex">
                          <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                            <img src="/path/to/default/trainer/image.jpg" alt="" className="img-fluid" />
                          </Link>
                          <div className="course-name">
                            <h4>
                              <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                                {course.trainer_first_name} {course.trainer_last_name}
                                
                              </Link>
                            </h4>
                            <p>Instructor</p>
                          </div>
                        </div>
                        <div className="course-share d-flex align-items-center justify-content-center">
                        <Link to="#" onClick={() => toggleClass(index, course.id)}>
                                            <i className={`fa-regular fa-heart ${isClassAdded[index] ? 'color-active' : ''}`} />
                                          </Link>
                        </div>
                      </div>
                      <h3 className="title instructor-text">
                        <Link to={`/course-info/${course.id}`}>
                          {course.course_title}
                          
                        </Link>
                      </h3>
                      <p className="fs-6">
                       
                          {course.course_category_name}
                          
                        
                      </p>
                      <div className="course-info d-flex align-items-center">
                        <div className="rating-img d-flex align-items-center">
                          <img src={Icon01} alt="" />
                          <p>{course.students_counts}+ Students</p>
                        </div>
                        <div className="course-view d-flex align-items-center">
                          <img src={Icon02} alt="" />
                          <p>{course.time_spent_on_course}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                      <span className="d-inline-block average-rating fs-6">
                            <span className="fs-8" style={{fontSize:"15px"}}>{course.course_level_name}</span>
                          </span>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Search } from 'lucide-react';
// import Select from 'react-select';
// import axios from 'axios';
// import { Icon01, Icon02 } from "../imagepath";

// const DynamicCourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterOption, setFilterOption] = useState({ value: 'all', label: 'All' });

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('https://api.novajobs.us/api/students/mycourse-lists', {
//           headers: {
//             'Authorization': `${token}`
//           }
//         });
//         console.log(response)
//         setCourses(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.response?.data?.message || 'An error occurred while fetching courses');
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const options = [
//     { value: 'all', label: 'All' },
//     { value: 'inprogress', label: 'In Progress' },
//     { value: 'completed', label: 'Completed' }
//   ];

//   const style = {
//     control: (base) => ({
//       ...base,
//       border: 0,
//       boxShadow: 'none',
//     }),
//   };

//   const filteredCourses = courses.filter(course => 
//     course.course_title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (filterOption.value === 'all' || 
//      (filterOption.value === 'inprogress' && course.progress < 100) ||
//      (filterOption.value === 'completed' && course.progress === 100))
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="alert alert-danger" role="alert">Error: {error}</div>;
//   }

//   return (
//     <section className="section new-course">
//       <div className="container">
//         <div className="section-header aos" data-aos="fade-up">
//           <div className="section-sub-head">
//             <h2>My Courses</h2>
//           </div>
//         </div>
//         <div className="student-widget">
//           <div className="student-widget-group">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="showing-list">
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div className="show-filter choose-search-blk">
//                         <form action="#">
//                           <div className="mycourse-student align-items-center">
//                             <div className="student-search">
//                               <div className="search-group">
//                                 <Search className="searchFeather" size={16} />
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   placeholder="Search our courses"
//                                   value={searchTerm}
//                                   onChange={(e) => setSearchTerm(e.target.value)}
//                                 />
//                               </div>
//                             </div>
//                             <div className="student-filter">
//                               <div className="input-block select-form mb-0">
//                                 <Select
//                                   className="select country-select"
//                                   name="sellist1"
//                                   options={options}
//                                   value={filterOption}
//                                   onChange={setFilterOption}
//                                   placeholder="Choose"
//                                   styles={style}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="course-feature">
//                   <div className="row">
//                     {filteredCourses.map((course) => (
//                       <div key={course.id} className="col-lg-4 col-md-6 d-flex">
//                         <div className="course-box d-flex aos" data-aos="fade-up">
//                           <div className="product">
//                             <div className="product-img">
//                               <Link to={`/course-info/${course.id}`}>
//                                 <img className="img-fluid" alt="" src={`https://api.novajobs.us${course.course_banner_image}`} />
//                               </Link>
//                               <div className="price">
//                                 <h3>
//                                   ${course.course_price}
//                                   {course.after_discount_price > 0 && (
//                                     <span>${course.after_discount_price}</span>
//                                   )}
//                                 </h3>
//                               </div>
//                             </div>
//                             <div className="product-content">
//                               <div className="course-group d-flex">
//                                 <div className="course-group-img d-flex">
//                                   <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
//                                     <img src="/path/to/default/trainer/image.jpg" alt="" className="img-fluid" />
//                                   </Link>
//                                   <div className="course-name">
//                                     <h4>
//                                       <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
//                                         {course.trainer_first_name} {course.trainer_last_name}
//                                       </Link>
//                                     </h4>
//                                     <p>Instructor</p>
//                                   </div>
//                                 </div>
//                                 <div className="course-share d-flex align-items-center justify-content-center">
//                                   <Link to="#">
//                                     <i className="fa-regular fa-heart" />
//                                   </Link>
//                                 </div>
//                               </div>
//                               <h3 className="title instructor-text">
//                                 <Link to={`/course-info/${course.id}`}>
//                                   {course.course_title}
//                                 </Link>
//                               </h3>
//                               <p className="fs-6">
//                                 {course.course_category_name}
//                               </p>
//                               <div className="course-info d-flex align-items-center">
//                                 <div className="rating-img d-flex align-items-center">
//                                   <img src={Icon01} alt="" />
//                                   <p>{course.enrolled_student_count}+ Students</p>
//                                 </div>
//                                 <div className="course-view d-flex align-items-center">
//                                   <img src={Icon02} alt="" />
//                                   <p>{course.time_spent_on_course}</p>
//                                 </div>
//                               </div>
//                               <div className="d-flex align-items-center justify-content-between">
//                                 <span className="d-inline-block average-rating fs-6">
//                                   <span className="fs-8" style={{fontSize:"15px"}}>{course.course_level_name}</span>
//                                 </span>
//                                 <div className="start-leason hoverBlue d-flex align-items-center">
//                                   <Link
//                                     to={`/course-lesson/${course.id}`}
//                                     className="btn btn-primary"
//                                   >
//                                     Start Lesson
//                                   </Link>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                     {filteredCourses.length === 0 && (
//                       <div className="col-12">
//                         <p>No courses found matching your criteria</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DynamicCourseList;