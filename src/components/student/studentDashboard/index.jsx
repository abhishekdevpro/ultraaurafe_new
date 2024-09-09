// import React, { useEffect, useState } from 'react'
// import StudentHeader from '../header'
// import StudentSidebar from '../sidebar'
// import { Icon1, Icon2, User1, User2, User3, User4, User5, User6, course02, course03, course04, course05, course07, course08 } from '../../imagepath'
// import { Link } from 'react-router-dom'

// const StudentDashboard = () => {

//     // const [isClassAdded, setIsClassAdded] = useState([false]);
//     const [filterOption, setFilterOption] = useState({ value: 'all', label: 'All' });
//   const [isClassAdded, setIsClassAdded] = useState([]);

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
//         setIsClassAdded(new Array(response.data.data.length).fill(false));
//         setLoading(false);
//       } catch (error) {
//         setError(error.response?.data?.message || 'An error occurred while fetching courses');
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);
//     const toggleClass = (index) => {
//       const updatedClasses = [...isClassAdded];
//       updatedClasses[index] = !updatedClasses[index];
//       setIsClassAdded(updatedClasses);
//     };
//     return (
//         <>
//             {/* Main Wrapper */}
//             <div className="main-wrapper">
//                 {/* Header */}
//                 <StudentHeader activeMenu={"Dashboard"} />
//                 {/* /Header */}
//                 {/* Breadcrumb */}
//                 <div className="breadcrumb-bar breadcrumb-bar-info">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-12 col-12">
//                                 <div className="breadcrumb-list">
//                                     <h2 className="breadcrumb-title">Dashboard</h2>
//                                     <nav aria-label="breadcrumb" className="page-breadcrumb">
//                                         <ol className="breadcrumb">
//                                             <li className="breadcrumb-item">
//                                                 <Link to="/home">Home</Link>
//                                             </li>
//                                             <li className="breadcrumb-item active" aria-current="page">
//                                                 Dashboard
//                                             </li>
//                                         </ol>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* /Breadcrumb */}
//                 {/* Page Content */}
//                 <div className="page-content">
//                     <div className="container">
//                         <div className="row">
//                             {/* sidebar */}
//                             <StudentSidebar />
//                             {/* /Sidebar */}
//                             {/* Student Dashboard */}
//                             <div className="col-xl-9 col-lg-9">
//                                 {/* Dashboard Grid */}
//                                 <div className="row justify-content-center">
//                                     <div className="col-lg-4 col-md-6 d-flex">
//                                         <div className="card dash-info flex-fill">
//                                             <div className="card-body">
//                                                 <h5>Enrolled Courses</h5>
//                                                 <h2>12</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-6 d-flex">
//                                         <div className="card dash-info flex-fill">
//                                             <div className="card-body">
//                                                 <h5>Active Courses</h5>
//                                                 <h2>03</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-6 d-flex">
//                                         <div className="card dash-info flex-fill">
//                                             <div className="card-body">
//                                                 <h5>Completed Courses</h5>
//                                                 <h2>13</h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* /Dashboard Grid */}
//                                 <div className="dashboard-title">
//                                     <h4>Recently Enrolled Courses</h4>
//                                 </div>
//                                 {/* <div className="row">
//                                     <div className="col-xxl-4 col-md-6 d-flex">
//                                         <div className="course-box flex-fill">
//                                             <div className="product">
//                                                 <div className="product-img">
//                                                     <Link to="/course-details">
//                                                         <img
//                                                             className="img-fluid"
//                                                             alt="Img"
//                                                             src={course02}
//                                                         />
//                                                     </Link>
//                                                     <div className="price">
//                                                         <h3>
//                                                             $80 <span>$99.00</span>
//                                                         </h3>
//                                                     </div>
//                                                 </div>
//                                                 <div className="product-content">
//                                                     <div className="course-group d-flex">
//                                                         <div className="course-group-img d-flex">
//                                                             <Link to="/instructor/instructor-profile">
//                                                                 <img
//                                                                     src={User2}
//                                                                     alt="Img"
//                                                                     className="img-fluid"
//                                                                 />
//                                                             </Link>
//                                                             <div className="course-name">
//                                                                 <h4>
//                                                                     <Link to="/instructor/instructor-profile">Cooper</Link>
//                                                                 </h4>
//                                                                 <p>Instructor</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="course-share d-flex align-items-center justify-content-center">
//                                                         <Link to="#" onClick={() => toggleClass(1)}>
//                                                         <i className={`fa-regular fa-heart ${isClassAdded[1] ? 'color-active' : ''}`} />
//                                                       </Link>
//                                                         </div>
//                                                     </div>
//                                                     <h3 className="title instructor-text">
//                                                         <Link to="/course-details">
//                                                             Wordpress for Beginners - Master Wordpress Quickly
//                                                         </Link>
//                                                     </h3>
//                                                     <div className="course-info d-flex align-items-center">
//                                                         <div className="rating-img d-flex align-items-center">
//                                                             <img src={Icon1} alt="Img" />
//                                                             <p>12+ Lesson</p>
//                                                         </div>
//                                                         <div className="course-view d-flex align-items-center">
//                                                             <img src={Icon2} alt="Img" />
//                                                             <p>70hr 30min</p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="rating mb-0">
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <span className="d-inline-block average-rating">
//                                                             <span>5.0</span> (20)
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
                                 
//                                     <div className="col-xxl-4 col-md-6 d-flex">
//                                         <div className="course-box flex-fill">
//                                             <div className="product">
//                                                 <div className="product-img">
//                                                     <Link to="/course-details">
//                                                         <img
//                                                             className="img-fluid"
//                                                             alt="Img"
//                                                             src={course03}
//                                                         />
//                                                     </Link>
//                                                     <div className="price combo">
//                                                         <h3>FREE</h3>
//                                                     </div>
//                                                 </div>
//                                                 <div className="product-content">
//                                                     <div className="course-group d-flex">
//                                                         <div className="course-group-img d-flex">
//                                                             <Link to="/instructor/instructor-profile">
//                                                                 <img
//                                                                     src={User5}
//                                                                     alt="Img"
//                                                                     className="img-fluid"
//                                                                 />
//                                                             </Link>
//                                                             <div className="course-name">
//                                                                 <h4>
//                                                                     <Link to="/instructor/instructor-profile">Jenny</Link>
//                                                                 </h4>
//                                                                 <p>Instructor</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="course-share d-flex align-items-center justify-content-center">
//                                                         <Link to="#" onClick={() => toggleClass(2)}>
//                                                         <i className={`fa-regular fa-heart ${isClassAdded[2] ? 'color-active' : ''}`} />
//                                                       </Link>
//                                                         </div>
//                                                     </div>
//                                                     <h3 className="title instructor-text">
//                                                         <Link to="/course-details">
//                                                             Sketch from A to Z (2024): Become an app designer
//                                                         </Link>
//                                                     </h3>
//                                                     <div className="course-info d-flex align-items-center">
//                                                         <div className="rating-img d-flex align-items-center">
//                                                             <img src={Icon1} alt="Img" />
//                                                             <p>10+ Lesson</p>
//                                                         </div>
//                                                         <div className="course-view d-flex align-items-center">
//                                                             <img src={Icon2} alt="Img" />
//                                                             <p>40hr 10min</p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="rating mb-0">
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star me-1" />
//                                                         <i className="fas fa-star me-1" />
//                                                         <span className="d-inline-block average-rating">
//                                                             <span>3.0</span> (18)
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
                                  
//                                     <div className="col-xxl-4 col-md-6 d-flex">
//                                         <div className="course-box flex-fill">
//                                             <div className="product">
//                                                 <div className="product-img">
//                                                     <Link to="/course-details">
//                                                         <img
//                                                             className="img-fluid"
//                                                             alt="Img"
//                                                             src={course04}
//                                                         />
//                                                     </Link>
//                                                     <div className="price">
//                                                         <h3>
//                                                             $65 <span>$70.00</span>
//                                                         </h3>
//                                                     </div>
//                                                 </div>
//                                                 <div className="product-content">
//                                                     <div className="course-group d-flex">
//                                                         <div className="course-group-img d-flex">
//                                                             <Link to="/instructor/instructor-profile">
//                                                                 <img
//                                                                     src={User4}
//                                                                     alt="Img"
//                                                                     className="img-fluid"
//                                                                 />
//                                                             </Link>
//                                                             <div className="course-name">
//                                                                 <h4>
//                                                                     <Link to="/instructor/instructor-profile">Nicole Brown</Link>
//                                                                 </h4>
//                                                                 <p>Instructor</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="course-share d-flex align-items-center justify-content-center">
//                                                         <Link to="#" onClick={() => toggleClass(3)}>
//                                                         <i className={`fa-regular fa-heart ${isClassAdded[3] ? 'color-active' : ''}`} />
//                                                       </Link>
//                                                         </div>
//                                                     </div>
//                                                     <h3 className="title instructor-text">
//                                                         <Link to="/course-details">
//                                                             Learn Angular Fundamentals From beginning to advance
//                                                             lavel
//                                                         </Link>
//                                                     </h3>
//                                                     <div className="course-info d-flex align-items-center">
//                                                         <div className="rating-img d-flex align-items-center">
//                                                             <img src={Icon1} alt="Img" />
//                                                             <p>15+ Lesson</p>
//                                                         </div>
//                                                         <div className="course-view d-flex align-items-center">
//                                                             <img src={Icon2} alt="Img" />
//                                                             <p>80hr 40min</p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="rating mb-0">
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star me-1" />
//                                                         <span className="d-inline-block average-rating">
//                                                             <span>4.0</span> (10)
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
                                    
//                                     <div className="col-xxl-4 col-md-6 d-flex">
//                                         <div className="course-box flex-fill">
//                                             <div className="product">
//                                                 <div className="product-img">
//                                                     <Link to="/course-details">
//                                                         <img
//                                                             className="img-fluid"
//                                                             alt="Img"
//                                                             src={course05}
//                                                         />
//                                                     </Link>
//                                                     <div className="price combo">
//                                                         <h3>FREE</h3>
//                                                     </div>
//                                                 </div>
//                                                 <div className="product-content">
//                                                     <div className="course-group d-flex">
//                                                         <div className="course-group-img d-flex">
//                                                             <Link to="/instructor/instructor-profile">
//                                                                 <img
//                                                                     src={User3}
//                                                                     alt="Img"
//                                                                     className="img-fluid"
//                                                                 />
//                                                             </Link>
//                                                             <div className="course-name">
//                                                                 <h4>
//                                                                     <Link to="/instructor/instructor-profile">John Smith</Link>
//                                                                 </h4>
//                                                                 <p>Instructor</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="course-share d-flex align-items-center justify-content-center">
//                                                         <Link to="#" onClick={() => toggleClass(4)}>
//                                                         <i className={`fa-regular fa-heart ${isClassAdded[4] ? 'color-active' : ''}`} />
//                                                       </Link>
//                                                         </div>
//                                                     </div>
//                                                     <h3 className="title instructor-text">
//                                                         <Link to="/course-details">
//                                                             Build Responsive Real World Websites with Crash Course
//                                                         </Link>
//                                                     </h3>
//                                                     <div className="course-info d-flex align-items-center">
//                                                         <div className="rating-img d-flex align-items-center">
//                                                             <img src={Icon1} alt="Img" />
//                                                             <p>12+ Lesson</p>
//                                                         </div>
//                                                         <div className="course-view d-flex align-items-center">
//                                                             <img src={Icon2} alt="Img" />
//                                                             <p>70hr 30min</p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="rating mb-0">
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star me-1" />
//                                                         <span className="d-inline-block average-rating">
//                                                             <span>4.0</span> (15)
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
                                    
//                                     <div className="col-xxl-4 col-md-6 d-flex">
//                                         <div className="course-box flex-fill">
//                                             <div className="product">
//                                                 <div className="product-img">
//                                                     <Link to="/course-details">
//                                                         <img
//                                                             className="img-fluid"
//                                                             alt="Img"
//                                                             src={course07}
//                                                         />
//                                                     </Link>
//                                                     <div className="price">
//                                                         <h3>
//                                                             $70 <span>$80.00</span>
//                                                         </h3>
//                                                     </div>
//                                                 </div>
//                                                 <div className="product-content">
//                                                     <div className="course-group d-flex">
//                                                         <div className="course-group-img d-flex">
//                                                             <Link to="/instructor/instructor-profile">
//                                                                 <img
//                                                                     src={User6}
//                                                                     alt="Img"
//                                                                     className="img-fluid"
//                                                                 />
//                                                             </Link>
//                                                             <div className="course-name">
//                                                                 <h4>
//                                                                     <Link to="/instructor/instructor-profile">
//                                                                         Stella Johnson
//                                                                     </Link>
//                                                                 </h4>
//                                                                 <p>Instructor</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="course-share d-flex align-items-center justify-content-center">
//                                                         <Link to="#" onClick={() => toggleClass(5)}>
//                                                         <i className={`fa-regular fa-heart ${isClassAdded[5] ? 'color-active' : ''}`} />
//                                                       </Link>
//                                                         </div>
//                                                     </div>
//                                                     <h3 className="title instructor-text">
//                                                         <Link to="/course-details">
//                                                             Learn JavaScript and Express to become a Expert
//                                                         </Link>
//                                                     </h3>
//                                                     <div className="course-info d-flex align-items-center">
//                                                         <div className="rating-img d-flex align-items-center">
//                                                             <img src={Icon1} alt="Img" />
//                                                             <p>15+ Lesson</p>
//                                                         </div>
//                                                         <div className="course-view d-flex align-items-center">
//                                                             <img src={Icon2} alt="Img" />
//                                                             <p>70hr 30min</p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="rating mb-0">
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star me-1" />
//                                                         <span className="d-inline-block average-rating">
//                                                             <span>4.6</span> (15)
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
                                    
//                                     <div className="col-xxl-4 col-md-6 d-flex">
//                                         <div className="course-box flex-fill">
//                                             <div className="product">
//                                                 <div className="product-img">
//                                                     <Link to="/course-details">
//                                                         <img
//                                                             className="img-fluid"
//                                                             alt="Img"
//                                                             src={course08}
//                                                         />
//                                                     </Link>
//                                                     <div className="price combo">
//                                                         <h3>FREE</h3>
//                                                     </div>
//                                                 </div>
//                                                 <div className="product-content">
//                                                     <div className="course-group d-flex">
//                                                         <div className="course-group-img d-flex">
//                                                             <Link to="/instructor/instructor-profile">
//                                                                 <img
//                                                                     src={User1}
//                                                                     alt="Img"
//                                                                     className="img-fluid"
//                                                                 />
//                                                             </Link>
//                                                             <div className="course-name">
//                                                                 <h4>
//                                                                     <Link to="/instructor/instructor-profile">Nicole Brown</Link>
//                                                                 </h4>
//                                                                 <p>Instructor</p>
//                                                             </div>
//                                                         </div>
//                                                         <div className="course-share d-flex align-items-center justify-content-center">
//                                                         <Link to="#" onClick={() => toggleClass(6)}>
//                                                         <i className={`fa-regular fa-heart ${isClassAdded[6] ? 'color-active' : ''}`} />
//                                                       </Link>
//                                                         </div>
//                                                     </div>
//                                                     <h3 className="title instructor-text">
//                                                         <Link to="/course-details">
//                                                             Introduction to Programming- Python &amp; Java
//                                                         </Link>
//                                                     </h3>
//                                                     <div className="course-info d-flex align-items-center">
//                                                         <div className="rating-img d-flex align-items-center">
//                                                             <img src={Icon1} alt="Img" />
//                                                             <p>10+ Lesson</p>
//                                                         </div>
//                                                         <div className="course-view d-flex align-items-center">
//                                                             <img src={Icon2} alt="Img" />
//                                                             <p>70hr 30min</p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="rating mb-0">
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <i className="fas fa-star filled me-1" />
//                                                         <span className="d-inline-block average-rating">
//                                                             <span>5.0</span> (13)
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div> */}
//                                  <div className="row">
//                           {filteredCourses.length > 0 ? (
//                             filteredCourses.map((course, index) => (
//                               <div key={course.id} className="col-xl-4 col-md-6 d-flex">
//                                 <div className="course-box flex-fill">
//                                   <div className="product">
//                                     <div className="product-img">
//                                       <Link to={`/course-info/${course.id}`}>
//                                         <img
//                                           className="img-fluid"
//                                           alt={course.course_title}
//                                           src={`https://api.novajobs.us${course.course_banner_image}`}
//                                         />
//                                       </Link>
//                                       <div className="price">
//                                         <h3>
//                                           ${course.price} <span>${course.original_price}</span>
//                                         </h3>
//                                       </div>
//                                     </div>
//                                     <div className="product-content">
//                                       <div className="course-group d-flex">
//                                         <div className="course-group-img d-flex">
//                                           <div className="course-name">
//                                             <h4>
//                                               <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
//                                                 {course.trainer_first_name}
//                                               </Link>
//                                             </h4>
//                                             <p>Instructor</p>
//                                           </div>
//                                         </div>
//                                         <div className="course-share d-flex align-items-center justify-content-center">
//                                           <Link to="#" onClick={() => toggleClass(index, course.id)}>
//                                             <i className={`fa-regular fa-heart ${isClassAdded[index] ? 'color-active' : ''}`} />
//                                           </Link>
//                                         </div>
//                                       </div>
//                                       <h3 className="title instructor-text">
//                                         <Link to={`/course-info/${course.id}`}>
//                                           {course.course_title}
//                                         </Link>
//                                       </h3>
//                                       <div className="course-info d-flex align-items-center">
//                                         <div className="rating-img d-flex align-items-center">
//                                           <img src={Icon1} alt="Icon" />
//                                           <p>{course.total_lectures} Lesson</p>
//                                         </div>
//                                         <div className="course-view d-flex align-items-center">
//                                           <img src={Icon2} alt="Icon" />
//                                           <p>{course.course_level_name}</p>
//                                         </div>
                                  
//                                       </div>
//                                       <div className="rating mb-0">
//                                         {[...Array(5)].map((star, index) => (
//                                           <i
//                                             key={index}
//                                             className={`fas fa-star ${index < course.rating ? 'filled' : ''}`}
//                                           />
//                                         ))}
//                                         <span className="d-inline-block average-rating">
//                                           {course.rating}
//                                         </span>

//                                       </div>
//                                       <div>
//                                         <Link to={`/course-info/${course.id}`}>
//                                         <StartLessonButton>
//                                           Start the Lesson
//                                         </StartLessonButton>
//                                         </Link>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             ))
//                           ) : (
//                             <div>No courses found.</div>
//                           )}
//                         </div>

//                                 <div className="dash-pagination">
//                                     <div className="row align-items-center">
//                                         <div className="col-6">
//                                             <p>Page 1 of 2</p>
//                                         </div>
//                                         <div className="col-6">
//                                             <ul className="pagination">
//                                                 <li className="active">
//                                                     <Link to="#">1</Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link to="#">2</Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link to="#">
//                                                         <i className="bx bx-chevron-right" />
//                                                     </Link>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* Student Dashboard */}
//                         </div>
//                     </div>
//                 </div>
//                 {/* /Page Content */}
//                 {/* Footer */}

//                 {/* /Footer */}
//             </div>
//             {/* /Main Wrapper */}
//         </>

//     )
// }

// export default StudentDashboard
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StudentHeader from '../header'
import StudentSidebar from '../sidebar'
import { Icon1, Icon2, User1} from '../../imagepath'
import { Link } from 'react-router-dom'

const StudentDashboard = () => {
    const [isClassAdded, setIsClassAdded] = useState([]);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://api.novajobs.us/api/students/mycourse-lists', {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                setCourses(response.data.data);
                setIsClassAdded(new Array(response.data.data.length).fill(false));
                setLoading(false);
            } catch (error) {
                setError(error.response?.data?.message || 'An error occurred while fetching courses');
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const toggleClass = (index) => {
        const updatedClasses = [...isClassAdded];
        updatedClasses[index] = !updatedClasses[index];
        setIsClassAdded(updatedClasses);
        // TODO: Implement logic to add/remove course from favorites
    };

    // TODO: Implement filtering logic
    const filteredCourses = courses;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="main-wrapper">
            <StudentHeader activeMenu={"Dashboard"} />
            <div className="breadcrumb-bar breadcrumb-bar-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
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
                                            <h2>{courses.filter(course => course.status === 'active').length}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex">
                                    <div className="card dash-info flex-fill">
                                        <div className="card-body">
                                            <h5>Completed Courses</h5>
                                            <h2>{courses.filter(course => course.status === 'completed').length}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-title">
                                <h4>Recently Enrolled Courses</h4>
                            </div>
                            <div className="row">
                                {filteredCourses.length > 0 ? (
                                    filteredCourses.map((course, index) => (
                                        <div key={course.id} className="col-xl-4 col-md-6 d-flex">
                                            <div className="course-box flex-fill">
                                                <div className="product">
                                                    <div className="product-img">
                                                        <Link to={`/course-info/${course.id}`}>
                                                            <img
                                                                className="img-fluid"
                                                                alt={course.course_title}
                                                                src={`https://api.novajobs.us${course.course_banner_image}`}
                                                            />
                                                        </Link>
                                                        <div className="price">
                                                            <h3>
                                                                ${course.price} <span>${course.original_price}</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="course-group d-flex">
                                                            <div className="course-group-img d-flex">
                                                                <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                                                                    <img src={User1} alt="Instructor" className="img-fluid" />
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
                                                                    className={`fas fa-star ${index < course.rating ? 'filled' : ''}`}
                                                                />
                                                            ))}
                                                            <span className="d-inline-block average-rating">
                                                                <span>{course.rating}</span>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link to={`/course-info/${course.id}`}>
                                                                <button className="btn btn-primary w-full">
                                                                    Start the Lesson
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No courses found.</div>
                                )}
                            </div>
                            <div className="dash-pagination">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <p>Page 1 of 1</p>
                                    </div>
                                    <div className="col-6">
                                        <ul className="pagination">
                                            <li className="active">
                                                <Link to="#">1</Link>
                                            </li>
                                            {/* Add more pagination items if needed */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard