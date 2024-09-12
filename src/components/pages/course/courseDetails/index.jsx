// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useParams } from 'react-router-dom';
// // import CourseHeader from "../header";
// // import DetailsContent from "./detailsContent";
// // import { Icon1, People, Timer, User1 } from "../../../imagepath";
// // import Footer from "../../../footer";
// // import { Link } from "react-router-dom";
// // import Header from "../../../header";

// // const CourseDetails = () => {
// //   const [courseData, setCourseData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const {courseid} = useParams() // Ensure this matches the parameter in your route

// //   useEffect(() => {
// //     const fetchCourseData = async () => {
// //       try {
// //         const url = `https://api.novajobs.us/api/trainers/courses/${courseid}`;
// //         const response = await axios.get(url);
// //         console.log(response.data.data,"ALL data")
// //         if (response.data) {
// //           setCourseData(response.data);
// //           console.log(response.data, "testt")
// //         } else {
// //           setError("No course content available at this time.");
// //         }
// //       } catch (error) {
// //         console.error("Error fetching course data:", error);
// //         setError("Error loading course data. Please try again later.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCourseData();
// //   }, [courseid]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="alert alert-warning">{error}</div>;
// //   }

// //   if (!courseData) {
// //     return <div className="alert alert-info">No course content available at this time.</div>;
// //   }
// //  const token  = localStorage.getItem('token')
// //   return (
// //     <>
// //       <div className="main-wrapper">
// //         {/* <CourseHeader activeMenu={"CourseDetails"} /> */}
// //         {token ? (
// //         <CourseHeader activeMenu={"CourseDetails"} />
// //       ) : (
// //         <Header /> // Replace <Header /> with the header you want to show when not logged in
// //       )}
// //         <div className="breadcrumb-bar">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-md-12 col-12">
// //                 <div className="breadcrumb-list">
// //                   <nav aria-label="breadcrumb" className="page-breadcrumb">
// //                     <ol className="breadcrumb">
// //                       <li className="breadcrumb-item">
// //                         <Link to="/home"></Link>
// //                       </li>
// //                       <li className="breadcrumb-item" aria-current="page">
                        
// //                       </li>
// //                       <li className="breadcrumb-item" aria-current="page">
                        
// //                       </li>
// //                       <li className="breadcrumb-item" aria-current="page">
// //                       </li>
// //                     </ol>
// //                   </nav>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="inner-banner">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-lg-8">
// //                 <div className="instructor-wrap border-bottom-0 m-0">
// //                   <div className="about-instructor align-items-center">
// //                     <div className="abt-instructor-img">
// //                       <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
// //                         <img src={User1} alt="Instructor" className="img-fluid" />
// //                       </Link>
// //                     </div>
// //                     <div className="instructor-detail me-3">
// //                       <h5>
// //                         <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>{courseData.data.trainer_first_name || "Instructor Name"} {courseData.data.trainer_last_name || "dexter"}</Link>
// //                       </h5>
// //                       <p>{courseData.data.trainer_job_title || "Instructor Title"}</p>
// //                     </div>
              //       <div className="rating mb-0">
              //         <i className="fas fa-star filled me-1" />
              //         <i className="fas fa-star filled me-1" />
              //         <i className="fas fa-star filled me-1" />
              //         <i className="fas fa-star filled me-1" />
              //         <i className="fas fa-star me-1" />
              //         <span className="d-inline-block average-rating">
              //           <span>{courseData.rating || "4.5"}</span> 
              //         </span>
              // </div>
// //                   </div>
// //                   <span className="web-badge mb-3">{courseData.data.course_category_name }</span>
// //                 </div>
// //                 <h2>{courseData.data.course_title || "Course Title"}</h2>
// //                 <p>{courseData.data.course_description || "Course Description"}</p>
// //                 <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
// //                   <div className="cou-info">
// //                     <img src={Icon1} alt="Lessons" />
// //                     <p>{courseData.data.total_lectures || "12 Lessons"}+</p>
// //                   </div>
// //                   <div className="cou-info">
// //                     <img src={Timer} alt="Duration" />
// //                     <p>{courseData.data.time_spent_on_course || "9hr 30min"}</p>
// //                   </div>
// //                   <div className="cou-info">
// //                     <img src={People} alt="Enrolled Students" />
// //                     <p>{`${courseData.data.enrolled_student_count} students enrolled` || "32 students enrolled"}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //           {console.log(courseData,"from index")}
// //         <DetailsContent courseFeatureData={courseData.data} />

// //         <Footer />
// //       </div>
// //     </>
// //   );
// // };

// // export default CourseDetails;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';
// import CourseHeader from "../header";
// import DetailsContent from "./detailsContent";
// import { Icon1, People, Timer, User1 } from "../../../imagepath";
// import Footer from "../../../footer";
// import { Link } from "react-router-dom";
// import Header from "../../../header";
// import parse from 'html-react-parser'; // Import html-react-parser

// const CourseDetails = () => {
//   const [courseData, setCourseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { courseid } = useParams(); // Ensure this matches the parameter in your route

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         const url = `https://api.novajobs.us/api/trainers/courses/${courseid}`;
//         const response = await axios.get(url);
//         console.log(response.data.data, "ALL data");
//         if (response.data) {
//           setCourseData(response.data);
//           console.log(response.data, "testt");
//         } else {
//           setError("No course content available at this time.");
//         }
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//         setError("Error loading course data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseData();
//   }, [courseid]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="alert alert-warning">{error}</div>;
//   }

//   if (!courseData) {
//     return <div className="alert alert-info">No course content available at this time.</div>;
//   }

//   const token = localStorage.getItem('token');
//   return (
//     <>
//       <div className="main-wrapper">
//         {token ? (
//           <CourseHeader activeMenu={"CourseDetails"} />
//         ) : (
//           <Header /> // Replace <Header /> with the header you want to show when not logged in
//         )}
//         <div className="breadcrumb-bar">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-12">
//                 <div className="breadcrumb-list">
//                   <nav aria-label="breadcrumb" className="page-breadcrumb">
//                     <ol className="breadcrumb">
//                       <li className="breadcrumb-item">
//                         <Link to="/home"></Link>
//                       </li>
//                       <li className="breadcrumb-item" aria-current="page"></li>
//                       <li className="breadcrumb-item" aria-current="page"></li>
//                       <li className="breadcrumb-item" aria-current="page"></li>
//                     </ol>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="inner-banner">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8">
//                 <div className="instructor-wrap border-bottom-0 m-0">
//                   <div className="about-instructor align-items-center">
//                     <div className="abt-instructor-img">
//                       <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
//                         <img src={User1} alt="Instructor" className="img-fluid" />
//                       </Link>
//                     </div>
//                     <div className="instructor-detail me-3">
//                       <h5>
//                         <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
//                           {courseData.data.trainer_first_name || "Instructor Name"}{" "}
//                           {courseData.data.trainer_last_name || "dexter"}
//                         </Link>
//                       </h5>
//                       <p>{courseData.data.trainer_job_title || "Instructor Title"}</p>
//                     </div>
//                     <div className="rating mb-0">
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star me-1" />
//                       <span className="d-inline-block average-rating">
//                         <span>{courseData.rating || "4.5"}</span>
//                       </span>
//                     </div>
//                   </div>
//                   <span className="web-badge mb-3">
//                     {courseData.data.course_category_name}
//                   </span>
//                 </div>
//                 <h2>{courseData.data.course_title || "Course Title"}</h2>
//                 <div className="course-description">
//                 {parse(courseData.data.course_description || "")}
//               </div>
//                 <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
//                   <div className="cou-info">
//                     <img src={Icon1} alt="Lessons" />
//                     <p>{courseData.data.total_lectures || "12 Lessons"}+</p>
//                   </div>
//                   <div className="cou-info">
//                     <img src={Timer} alt="Duration" />
//                     <p>{courseData.data.time_spent_on_course || "9hr 30min"}</p>
//                   </div>
//                   <div className="cou-info">
//                     <img src={People} alt="Enrolled Students" />
//                     <p>{`${courseData.data.enrolled_student_count} students enrolled` || "32 students enrolled"}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {console.log(courseData, "from index")}
//         <DetailsContent courseFeatureData={courseData.data} />

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default CourseDetails;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, Link } from 'react-router-dom';
// import styled from 'styled-components';
// import CourseHeader from "../header";
// import DetailsContent from "./detailsContent";
// import { Icon1, People, Timer, User1 } from "../../../imagepath";
// import Footer from "../../../footer";
// import Header from "../../../header";

// // Styled Components
// const CourseDescriptionWrapper = styled.div`
//   font-size: 16px;
//   line-height: 1.6;
//   color: white;
//   margin-bottom: 20px;

//   p {
//     margin-bottom: 15px;
//   }

//   ul, ol {
//     padding-left: 20px;
//     margin-bottom: 15px;
//   }

//   li {
//     margin-bottom: 5px;
//   }

//   strong {
//     font-weight: 600;
//   }
// `;

// const CourseDetails = () => {
//   const [courseData, setCourseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { courseid } = useParams();

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         const url = `https://api.novajobs.us/api/trainers/courses/${courseid}`;
//         const response = await axios.get(url);
//         if (response.data) {
//           setCourseData(response.data);
//         } else {
//           setError("No course content available at this time.");
//         }
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//         setError("Error loading course data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseData();
//   }, [courseid]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="alert alert-warning">{error}</div>;
//   if (!courseData) return <div className="alert alert-info">No course content available at this time.</div>;

//   const token = localStorage.getItem('token');

//   return (
//     <div className="main-wrapper">
//       {token ? <CourseHeader activeMenu={"CourseDetails"} /> : <Header />}
      
//       <div className="breadcrumb-bar">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12">
//               <div className="breadcrumb-list">
//                 <nav aria-label="breadcrumb" className="page-breadcrumb">
//                   <ol className="breadcrumb">
//                     <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
//                     <li className="breadcrumb-item">Courses</li>
//                     <li className="breadcrumb-item active" aria-current="page">Course Details</li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="inner-banner">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8">
//               <div className="instructor-wrap border-bottom-0 m-0">
//                 <div className="about-instructor align-items-center">
//                   <div className="abt-instructor-img">
//                     <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
//                       <img src={User1} alt="Instructor" className="img-fluid" />
//                     </Link>
//                   </div>
//                   <div className="instructor-detail me-3">
//                     <h5>
//                       <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
//                         {courseData.data.trainer_first_name || "Instructor Name"}{" "}
//                         {courseData.data.trainer_last_name || ""}
//                       </Link>
//                     </h5>
//                     <p>{courseData.data.trainer_job_title || "Instructor Title"}</p>
//                   </div>
//                   {/* <div className="rating mb-0">
//                     <span className="d-inline-block average-rating">
//                       <span>{courseData.data.rating}</span>
//                     </span>
//                   </div> */}
//                      <div className="rating mb-0">
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star me-1" />
//                       <span className="d-inline-block average-rating">
//                         <span className="rating text-white">({courseData.data.rating})</span> 
//                       </span>
//               </div>
//                 </div>
//                 <span className="web-badge mb-3">
//                   {courseData.data.category}
//                 </span>
//               </div>
//               <h2>{courseData.data.course_title || "Course Title"}</h2>
              
//               {/* Course description with styled-components */}
//               <CourseDescriptionWrapper
//                 dangerouslySetInnerHTML={{ __html: courseData.data.course_description || "" }}
//               />

//               <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
//                 <div className="cou-info">
//                   <img src={Icon1} alt="Lessons" />
//                   <p>{courseData.data.total_lectures || "12 Lessons"}+</p>
//                 </div>
//                 <div className="cou-info">
//                   <img src={Timer} alt="Duration" />
//                   <p>{courseData.data.time_spent_on_course || "9hr 30min"}</p>
//                 </div>
//                 <div className="cou-info">
//                   <img src={People} alt="Enrolled Students" />
//                   <p>{`${courseData.data.enrolled_student_count} students enrolled` || "32 students enrolled"}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DetailsContent courseFeatureData={courseData.data} />
//       <Footer />
//     </div>
//   );
// };

// export default CourseDetails;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, Link } from 'react-router-dom';
// import styled from 'styled-components';
// import CourseHeader from "../header";
// import DetailsContent from "./detailsContent";
// import { Icon1, People, Timer, User1 } from "../../../imagepath";
// import Footer from "../../../footer";
// import Header from "../../../header";

// // Styled Components
// const CourseDescriptionWrapper = styled.div`
//   font-size: 16px;
//   line-height: 1.6;
//   color: white;
//   margin-bottom: 20px;

//   p {
//     margin-bottom: 15px;
//   }

//   ul, ol {
//     padding-left: 20px;
//     margin-bottom: 15px;
//   }

//   li {
//     margin-bottom: 5px;
//   }

//   strong {
//     font-weight: 600;
//   }
// `;

// const CourseDetails = () => {
//   const [courseData, setCourseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false); // State for truncating description
//   const { courseid } = useParams();

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         const url = `https://api.novajobs.us/api/trainers/courses/${courseid}`;
//         const response = await axios.get(url);
//         if (response.data) {
//           setCourseData(response.data);
//         } else {
//           setError("No course content available at this time.");
//         }
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//         setError("Error loading course data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseData();
//   }, [courseid]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="alert alert-warning">{error}</div>;
//   if (!courseData) return <div className="alert alert-info">No course content available at this time.</div>;

//   const token = localStorage.getItem('token');

//   // Function to toggle between showing full description or truncated version
//   const toggleDescription = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Truncate the description to the first 100 words
//   const truncateDescription = (description) => {
//     const words = description.split(" ");
//     return words.length > 100 ? words.slice(0, 100).join(" ") + "..." : description;
//   };

//   const courseDescription = courseData.data.course_description || "";
//   const displayedDescription = isExpanded ? courseDescription : truncateDescription(courseDescription);

//   return (
//     <div className="main-wrapper">
//       {token ? <CourseHeader activeMenu={"CourseDetails"} /> : <Header />}
      
//       <div className="breadcrumb-bar">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12">
//               <div className="breadcrumb-list">
//                 <nav aria-label="breadcrumb" className="page-breadcrumb">
//                   <ol className="breadcrumb">
//                     <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
//                     <li className="breadcrumb-item">Courses</li>
//                     <li className="breadcrumb-item active" aria-current="page">Course Details</li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="inner-banner">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8">
//               <div className="instructor-wrap border-bottom-0 m-0">
//                 <div className="about-instructor align-items-center">
//                   <div className="abt-instructor-img">
//                     <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
//                       <img src={User1} alt="Instructor" className="img-fluid" />
//                     </Link>
//                   </div>
//                   <div className="instructor-detail me-3">
//                     <h5>
//                       <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
//                         {courseData.data.trainer_first_name || "Instructor Name"}{" "}
//                         {courseData.data.trainer_last_name || ""}
//                       </Link>
//                     </h5>
//                     <p>{courseData.data.trainer_job_title || "Instructor Title"}</p>
//                   </div>
//                   <div className="rating mb-0">
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star filled me-1" />
//                       <i className="fas fa-star me-1" />
//                       <span className="d-inline-block average-rating">
//                         <span className="rating text-white">({courseData.data.rating})</span> 
//                       </span>
//               </div>
//                 </div>
//                 <span className="web-badge mb-3">
//                   {courseData.data.category}
//                 </span>
//               </div>
//               <h2>{courseData.data.course_title || "Course Title"}</h2>
              
//               {/* Course description with styled-components */}
//               <CourseDescriptionWrapper>
//                 <div dangerouslySetInnerHTML={{ __html: displayedDescription }} />
//                 {courseDescription.split(" ").length > 100 && (
//                   <span onClick={toggleDescription} style={{ cursor: "pointer", color: "#007bff" }}>
//                     {isExpanded ? "Show Less" : "Read More"}
//                   </span>
//                 )}
//               </CourseDescriptionWrapper>

//               <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
//                 <div className="cou-info">
//                   <img src={Icon1} alt="Lessons" />
//                   <p>{courseData.data.total_lectures || "12 Lessons"}+</p>
//                 </div>
//                 <div className="cou-info">
//                   <img src={Timer} alt="Duration" />
//                   <p>{courseData.data.time_spent_on_course || "9hr 30min"}</p>
//                 </div>
//                 <div className="cou-info">
//                   <img src={People} alt="Enrolled Students" />
//                   <p>{`${courseData.data.enrolled_student_count} students enrolled` || "32 students enrolled"}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DetailsContent courseFeatureData={courseData.data} />
//       <Footer />
//     </div>
//   );
// };

// export default CourseDetails;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import CourseHeader from "../header";
import DetailsContent from "./detailsContent";
import { Icon1, People, Timer, User1 } from "../../../imagepath";
import Footer from "../../../footer";
import Header from "../../../header";

// Styled Components
const CourseDescriptionWrapper = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: white;
  margin-bottom: 20px;

  p {
    margin-bottom: 15px;
  }

  ul, ol {
    padding-left: 20px;
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 5px;
  }

  strong {
    font-weight: 600;
  }
`;

const ReadMoreButton = styled.span`
  cursor: pointer;
  color: #007bff;
  display: inline-block;
  margin-top: 10px;
`;

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { courseid } = useParams();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const url = `https://api.novajobs.us/api/trainers/courses/${courseid}`;
        const response = await axios.get(url);
        if (response.data) {
          setCourseData(response.data);
        } else {
          setError("No course content available at this time.");
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError("Error loading course data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseid]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-warning">{error}</div>;
  if (!courseData) return <div className="alert alert-info">No course content available at this time.</div>;

  const token = localStorage.getItem('token');

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateDescription = (description) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = description;
    const textContent = tempDiv.textContent || tempDiv.innerText;
    const words = textContent.split(/\s+/);
    if (words.length <= 100) return description;
    
    let truncated = '';
    let wordCount = 0;
    let insideTag = false;
    
    for (let i = 0; i < description.length; i++) {
      if (description[i] === '<') insideTag = true;
      if (!insideTag) wordCount++;
      truncated += description[i];
      if (description[i] === '>') insideTag = false;
      if (wordCount >= 100 && !insideTag) break;
    }
    
    return truncated + '...';
  };

  const courseDescription = courseData.data.course_description || "";
  const displayedDescription = isExpanded ? courseDescription : truncateDescription(courseDescription);

  return (
    <div className="main-wrapper">
      {token ? <CourseHeader activeMenu={"CourseDetails"} /> : <Header />}
      {/* <section className="page-content course-sec"> */}
      
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="instructor-wrap border-bottom-0 m-0">
                <div className="about-instructor align-items-center">
                  <div className="abt-instructor-img">
                    <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
                      <img src={User1} alt="Instructor" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="instructor-detail me-3">
                    <h5>
                      <Link to={`/instructor/instructor-profile/${courseData.data.trainer_id}`}>
                        {courseData.data.trainer_first_name || "Instructor Name"}{" "}
                        {courseData.data.trainer_last_name || ""}
                      </Link>
                    </h5>
                    <p>{courseData.data.trainer_job_title || "Instructor Title"}</p>
                  </div>
                  {/* <div className="rating mb-0">
                    <i className="fas fa-star filled me-1" />
                    <i className="fas fa-star filled me-1" />
                    <i className="fas fa-star filled me-1" />
                    <i className="fas fa-star filled me-1" />
                    <i className="fas fa-star me-1" />
                    <span className="d-inline-block average-rating">
                      <span className="rating text-white">({courseData.data.rating})</span> 
                    </span>
                  </div> */}
                  <div className="rating mb-0">
  {Array.from({ length: 5 }).map((_, index) => (
    <i
      key={index}
      className={`fas fa-star ${index < courseData.data.rating ? 'filled' : 'unfilled'} me-1`}
    />
  ))}
  <span className="d-inline-block average-rating">
    <span className="rating text-white">({courseData.data.rating})</span>
  </span>
</div>

                </div>
                <span className="web-badge mb-3">
                  {courseData.data.category}
                </span>
              </div>
              <h2>{courseData.data.course_title || "Course Title"}</h2>
              
              <CourseDescriptionWrapper>
                <div dangerouslySetInnerHTML={{ __html: displayedDescription }} />
                {courseDescription.length > truncateDescription(courseDescription).length && (
                  <ReadMoreButton onClick={toggleDescription}>
                    {isExpanded ? "Show Less" : "Read More"}
                  </ReadMoreButton>
                )}
              </CourseDescriptionWrapper>

              <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                <div className="cou-info">
                  <img src={Icon1} alt="Lessons" />
                  <p>{courseData.data.total_lectures || "12 Lessons"}+</p>
                </div>
                <div className="cou-info">
                  <img src={Timer} alt="Duration" />
                  <p>{courseData.data.time_spent_on_course || "9hr 30min"}</p>
                </div>
                <div className="cou-info">
                  <img src={People} alt="Enrolled Students" />
                  <p>{`${courseData.data.enrolled_student_count} students enrolled` || "32 students enrolled"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  {/* </section> */}
      <DetailsContent courseFeatureData={courseData.data} />
      <Footer />
    </div>
  );
};

export default CourseDetails;