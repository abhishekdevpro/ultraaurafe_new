// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Search } from 'lucide-react';
// import Select from 'react-select';
// import axios from 'axios';
// import { Icon1, Icon2 } from '../../imagepath';

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
//     <section className="course-content">
//       <div className="container">
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

//                 <div className="row">
//                   {filteredCourses.length > 0 ? (
//                     filteredCourses.map((course) => (
//                       <div key={course.id} className="col-xl-3 col-lg-4 col-md-6 d-flex">
//                         <div className="course-box flex-fill">
//                           <div className="product">
//                             <div className="product-img">
//                               <Link to={`/course-details/${course.id}`}>
//                                 <img
//                                   className="img-fluid"
//                                   alt={course.course_title}
//                                   src={`https://api.novajobs.us${course.course_banner_image}`}
//                                 />
//                               </Link>
//                               <div className="price">
//                                 <h3>
//                                   ${course.price} <span>${course.original_price}</span>
//                                 </h3>
//                               </div>
//                             </div>
//                             <div className="product-content">
//                               <div className="course-group d-flex">
//                                 <div className="course-group-img d-flex">
//                                   {/* <Link to="/instructor/instructor-profile">
//                                     <img
//                                       src={course.instructor_image}
//                                       alt="Instructor"
//                                       className="img-fluid"
//                                     />
//                                   </Link> */}
//                                   <div className="course-name">
//                                     <h4>
//                                       <Link to="/instructor/instructor-profile">
//                                         {course.trainer_first_name}
//                                       </Link>
//                                     </h4>
//                                     <p>Instructor</p>
//                                   </div>
//                                 </div>
//                                 {/* <div className="course-share d-flex align-items-center justify-content-center">
//                                   <Link to="#">
//                                     <i className="fa-regular fa-heart" />
//                                   </Link>
//                                 </div> */}
//                               </div>
//                               <h3 className="title instructor-text">
//                                 <Link to={`/course-details/${course.id}`}>
//                                   {course.course_title}
//                                 </Link>
//                               </h3>
//                               <div className="course-info d-flex align-items-center">
//                                 <div className="rating-img d-flex align-items-center">
//                                   <img src={Icon1} alt="Icon" />
//                                   <p>{course.total_lectures} Lesson</p>
//                                 </div>
//                                 <div className="course-view d-flex align-items-center">
//                                   <img src={Icon2} alt="Icon" />
//                                   <p>{course.time_spent_on_course}</p>
//                                 </div>
//                               </div>
//                               <div className="rating mb-0">
//                                 {[...Array(5)].map((star, index) => (
//                                   <i
//                                     key={index}
//                                     className={`fas fa-star ${index < course.rating ? 'filled' : ''} me-1`}
//                                   />
//                                 ))}
//                                 <span className="d-inline-block average-rating">
//                                   <span>{course.rating}</span> ({course.reviews})
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <div className="col-12">
//                       <p>No courses found matching your criteria</p>
//                     </div>
//                   )}
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
