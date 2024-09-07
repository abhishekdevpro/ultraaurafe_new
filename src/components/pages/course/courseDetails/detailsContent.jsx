
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {  useParams } from 'react-router-dom';
// import PropTypes from "prop-types";
// // import FeatherIcon from "feather-icons-react";

// import InstructorCard from "./InstructorCard";
// import CourseContent from "./CourseContent";
// import SidebarSection from "./SidebarSection";

// const DetailsContent = ({courseFeatureData}) => {
//   console.log(courseFeatureData,"FDDDD")
//   const [courseData, setCourseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // const [open, setOpen] = useState({});
//   const {courseid} = useParams()

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         const token = localStorage.getItem("trainerToken");
//           const url = token
//             ? `https://api.novajobs.us/api/students/course-details/${courseid}`
//             : `https://api.novajobs.us/api/students/course-details/${courseid}`;
//           const headers = token ? { Authorization: token } : {};
          
//           const response = await axios.get(url, { headers });
//           console.log(response.data.data.trainer_id,"cdd")
//         if (response.data.data) {
//           setCourseData(response.data.data);
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

//   if (!courseData || !courseData.section_response || courseData.section_response.length === null) {
//     return <div className="alert alert-info">No course content available at this time.</div>;
//   }



//   console.log(courseData,"kkkk")
 
//   return (
//     <>
//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8">
           
//               <CourseContent courseData={courseData}/>
//               {/* /Course Content */}

            
//               <InstructorCard trainerID={courseData.trainer_id}/>
             
              // {/* Comment */}
              // <div className="card comment-sec">
              //   <div className="card-body">
              //     <h5 className="subs-title">Post A comment</h5>
              //     <form action='#'>
              //       <div className="row">
              //         <div className="col-md-6">
              //           <div className="input-block">
              //             <input type="text" className="form-control" placeholder="Full Name" />
              //           </div>
              //         </div>
              //         <div className="col-md-6">
              //           <div className="input-block">
              //             <input type="email" className="form-control" placeholder="Email" />
              //           </div>
              //         </div>
              //       </div>
              //       <div className="input-block">
              //         <input type="email" className="form-control" placeholder="Subject" />
              //       </div>
              //       <div className="input-block">
              //         <textarea rows={4} className="form-control" placeholder="Your Comments" defaultValue={""} />
              //       </div>
              //       <div className="submit-section">
              //         <button className=" submit-btn" type="submit">Submit</button>
              //       </div>
              //     </form>
              //   </div>
              // </div>
              // {/* /Comment */}
            // </div>

           
//             {console.log(courseid,'dasd')}
//             <SidebarSection courseId={courseid}  courseData={courseData} courseFeatureData={courseFeatureData} />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// DetailsContent.propTypes = {
//   courseFeatureData: PropTypes.shape({
//     enrolled_student_count: PropTypes.number,
//     time_spent_on_course: PropTypes.number,
//     total_lectures: PropTypes.number,
//     course_level_name: PropTypes.string,
//   }),
// };
// // export default DetailsContent;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';
// import PropTypes from "prop-types";

// import InstructorCard from "./InstructorCard";
// import CourseContent from "./CourseContent";
// import SidebarSection from "./SidebarSection";

// const DetailsContent = ({ courseFeatureData }) => {
//   const [courseData, setCourseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showRatingModal, setShowRatingModal] = useState(false);
//   const [rating, setRating] = useState(0);
//   const { courseid } = useParams();

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         const token = localStorage.getItem("trainerToken");
//         const url = `https://api.novajobs.us/api/students/course-details/${courseid}`;
//         const headers = token ? { Authorization: token } : {};
        
//         const response = await axios.get(url, { headers });
//         if (response.data.data) {
//           setCourseData(response.data.data);
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

//     // Set up interval to show rating modal every 5 seconds
//     const intervalId = setInterval(() => {
//       setShowRatingModal(true);
//     }, 5000);

//     // Clear interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [courseid]);

//   const handleRatingSubmit = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//      const response =  await axios.post(
//         `https://api.novajobs.us/api/students/ratings/${courseid}`,
//         { stars: rating },
//         { headers: { Authorization: token } }
//       );
//        console.log(response,"rating")
//       setShowRatingModal(false);
//       // Optionally, show a success message or update the UI
//     } catch (error) {
//       console.error("Error submitting rating:", error);
//       // Optionally, show an error message to the user
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="alert alert-warning">{error}</div>;
//   }

//   const handleRemindLater = () => {
//     setShowRatingModal(false);
//     // Set a timeout to show the modal again after 1 hour (3600000 ms)
//     setTimeout(() => setShowRatingModal(true), 3600000);
//   };

//   if (!courseData || !courseData.section_response || courseData.section_response.length === 0) {
//     return <div className="alert alert-info">No course content available at this time.</div>;
//   }

//   return (
//     <>
//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8">
//               <CourseContent courseData={courseData} />
//               <InstructorCard trainerID={courseData.trainer_id} />
              
//               {/* Comment section remains unchanged */}
//               <div className="card comment-sec">
//                 {/* ... (comment form code remains the same) ... */}
//               </div>
//             </div>
            
//             <SidebarSection courseId={courseid} courseData={courseData} courseFeatureData={courseFeatureData} />
//           </div>
//         </div>
//       </section>

//       {showRatingModal && (
//         <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Rate this course</h5>
//                 <button type="button" className="close" onClick={() => setShowRatingModal(false)}>
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p>Please take a moment to rate your experience with this course.</p>
//                 <div className="d-flex justify-content-center my-4">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <span
//                       key={star}
//                       style={{fontSize: '32px', cursor: 'pointer', color: star <= rating ? 'gold' : 'gray'}}
//                       onClick={() => setRating(star)}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-primary" onClick={handleRatingSubmit}>Submit Rating</button>
//                 <button type="button" className="btn btn-secondary" onClick={handleRemindLater}>Remind Me Later</button>

//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// DetailsContent.propTypes = {
//   courseFeatureData: PropTypes.shape({
//     enrolled_student_count: PropTypes.number,
//     time_spent_on_course: PropTypes.number,
//     total_lectures: PropTypes.number,
//     course_level_name: PropTypes.string,
//   }),
// };

// export default DetailsContent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';
// import PropTypes from "prop-types";

// import InstructorCard from "./InstructorCard";
// import CourseContent from "./CourseContent";
// import SidebarSection from "./SidebarSection";

// const DetailsContent = ({ courseFeatureData }) => {
//   const [courseData, setCourseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showRatingModal, setShowRatingModal] = useState(false);
//   const [rating, setRating] = useState(0);
//   const { courseid } = useParams();

//   useEffect(() => {
//     const fetchCourseData = async () => {
//       try {
//         const token = localStorage.getItem("trainerToken");
//         const url = `https://api.novajobs.us/api/students/course-details/${courseid}`;
//         const headers = token ? { Authorization: token } : {};
        
//         const response = await axios.get(url, { headers });
//         if (response.data.data) {
//           setCourseData(response.data.data);
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

//     // Check if the rating for this course is already submitted
//     const ratedCourses = JSON.parse(localStorage.getItem("ratedCourses")) || [];
//     console.log(ratedCourses,"rtadcourse")
//     if (!ratedCourses.includes(courseid)) {
//       // Set up interval to show rating modal every 5 seconds
//       const intervalId = setInterval(() => {
//         setShowRatingModal(true);
//       }, 5000);

//       // Clear interval on component unmount
//       return () => clearInterval(intervalId);
//     }
//   }, [courseid]);

//   const handleRatingSubmit = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//       const response = await axios.post(
//         `https://api.novajobs.us/api/students/ratings/${courseid}`,
//         { stars: rating },
//         { headers: { Authorization: token } }
//       );
//       console.log(response, "rating");

//       // Store the rated course in localStorage
//       const ratedCourses = JSON.parse(localStorage.getItem("ratedCourses")) || [];
//       if (!ratedCourses.includes(courseid)) {
//         ratedCourses.push(courseid);
//         localStorage.setItem("ratedCourses", JSON.stringify(ratedCourses));
//       }

//       setShowRatingModal(false);
//       // Optionally, show a success message or update the UI
//     } catch (error) {
//       console.error("Error submitting rating:", error);
//       // Optionally, show an error message to the user
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="alert alert-warning">{error}</div>;
//   }

//   const handleRemindLater = () => {
//     setShowRatingModal(false);
//     // Set a timeout to show the modal again after 1 hour (3600000 ms)
//     setTimeout(() => setShowRatingModal(true), 3600000);
//   };

//   if (!courseData || !courseData.section_response || courseData.section_response.length === 0) {
//     return <div className="alert alert-info">No course content available at this time.</div>;
//   }

//   return (
//     <>
//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8">
//               <CourseContent courseData={courseData} />
//               <InstructorCard trainerID={courseData.trainer_id} />
              
              
//               {/* Comment */}
//               <div className="card comment-sec">
//                 <div className="card-body">
//                   <h5 className="subs-title">Post A comment</h5>
//                   <form action='#'>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="input-block">
//                           <input type="text" className="form-control" placeholder="Full Name" />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="input-block">
//                           <input type="email" className="form-control" placeholder="Email" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="input-block">
//                       <input type="email" className="form-control" placeholder="Subject" />
//                     </div>
//                     <div className="input-block">
//                       <textarea rows={4} className="form-control" placeholder="Your Comments" defaultValue={""} />
//                     </div>
//                     <div className="submit-section">
//                       <button className=" submit-btn" type="submit">Submit</button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               {/* /Comment */}
//             </div>
            
//             <SidebarSection courseId={courseid} courseData={courseData} courseFeatureData={courseFeatureData} />
//           </div>
//         </div>
//       </section>

//       {showRatingModal && courseData.is_student_enroll && (
//         <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Rate this course</h5>
//                 <button type="button" className="close" onClick={() => setShowRatingModal(false)}>
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p>Please take a moment to rate your experience with this course.</p>
//                 <div className="d-flex justify-content-center my-4">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <span
//                       key={star}
//                       style={{fontSize: '32px', cursor: 'pointer', color: star <= rating ? 'gold' : 'gray'}}
//                       onClick={() => setRating(star)}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-primary" onClick={handleRatingSubmit}>Submit Rating</button>
//                 <button type="button" className="btn btn-secondary" onClick={handleRemindLater}>Remind Me Later</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// DetailsContent.propTypes = {
//   courseFeatureData: PropTypes.shape({
//     enrolled_student_count: PropTypes.number,
//     time_spent_on_course: PropTypes.number,
//     total_lectures: PropTypes.number,
//     course_level_name: PropTypes.string,
//   }),
// };

// export default DetailsContent;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InstructorCard from "./InstructorCard";
import CourseContent from "./CourseContent";
import SidebarSection from "./SidebarSection";

const DetailsContent = ({ courseFeatureData }) => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const { courseid } = useParams();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const token = localStorage.getItem("trainerToken");
        const url = `https://api.novajobs.us/api/students/course-details/${courseid}`;
        const headers = token ? { Authorization: token } : {};
        
        const response = await axios.get(url, { headers });
        if (response.data.data) {
          setCourseData(response.data.data);
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

    const checkIfShouldShowModal = () => {
      const ratedCourses = JSON.parse(localStorage.getItem("ratedCourses")) || [];
      const remindMeLaterTimestamp = localStorage.getItem("remindMeLaterTimestamp");
      const currentTime = Date.now();

      if (!ratedCourses.includes(courseid)) {
        // Check if remind me later timestamp exists and if it's been an hour or more
        if (!remindMeLaterTimestamp || currentTime - parseInt(remindMeLaterTimestamp, 10) >= 3600000) {
          setShowRatingModal(true);
        }
      }
    };

    checkIfShouldShowModal();
  }, [courseid]);

  const handleRatingSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

       await axios.post(
        `https://api.novajobs.us/api/students/ratings/${courseid}`,
        { stars: rating },
        { headers: { Authorization: token } }
      );

      // Store the rated course in localStorage
      const ratedCourses = JSON.parse(localStorage.getItem("ratedCourses")) || [];
      if (!ratedCourses.includes(courseid)) {
        ratedCourses.push(courseid);
        localStorage.setItem("ratedCourses", JSON.stringify(ratedCourses));
      }

      setShowRatingModal(false);
      toast.success("Thank you for your rating!");  // Show thank you toast
    } catch (error) {
      console.error("Error submitting rating:", error);
      // Optionally, show an error message to the user
    }
  };

  const handleRemindLater = () => {
    setShowRatingModal(false);
    localStorage.setItem("remindMeLaterTimestamp", Date.now().toString()); // Set the remind me later timestamp
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-warning">{error}</div>;
  }

  if (!courseData || !courseData.section_response || courseData.section_response.length === 0) {
    return <div className="alert alert-info">No course content available at this time.</div>;
  }

  return (
    <>
      <section className="page-content course-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CourseContent courseData={courseData} />
              <InstructorCard trainerID={courseData.trainer_id} />
              
              {/* Comment */}
              <div className="card comment-sec">
                <div className="card-body">
                  <h5 className="subs-title">Post A comment</h5>
                  <form action='#'>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block">
                          <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <input type="email" className="form-control" placeholder="Email" />
                        </div>
                      </div>
                    </div>
                    <div className="input-block">
                      <input type="email" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="input-block">
                      <textarea rows={4} className="form-control" placeholder="Your Comments" defaultValue={""} />
                    </div>
                    <div className="submit-section">
                      <button className=" submit-btn" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /Comment */}
            </div>
            
            <SidebarSection courseId={courseid} courseData={courseData} courseFeatureData={courseFeatureData} />
          </div>
        </div>
      </section>

      {showRatingModal && courseData.is_student_enroll && (
        <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Rate this course</h5>
                <button type="button" className="close" onClick={() => setShowRatingModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Please take a moment to rate your experience with this course.</p>
                <div className="d-flex justify-content-center my-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{fontSize: '32px', cursor: 'pointer', color: star <= rating ? 'gold' : 'gray'}}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleRatingSubmit}>Submit Rating</button>
                <button type="button" className="btn btn-secondary" onClick={handleRemindLater}>Remind Me Later</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ToastContainer />
    </>
  );
};

DetailsContent.propTypes = {
  courseFeatureData: PropTypes.shape({
    enrolled_student_count: PropTypes.number,
    time_spent_on_course: PropTypes.number,
    total_lectures: PropTypes.number,
    course_level_name: PropTypes.string,
  }),
};

export default DetailsContent;
