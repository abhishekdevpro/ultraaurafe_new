// // import React from "react";
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import Footer from "../../../footer";
// import { useState } from "react";
// // import Basic from "./basic";
// // import CourseMedia from "./courseMedia";
// // import Curriculum from "./curriculum";
// // import Settings from "./settings";
// // import Success from "./success";

// // const AddCourse = () => {
// //   const [TabChange, setTabChange] = useState(false);
// //   const [TabChange1, setTabChange1] = useState(false);
// //   const [TabChange2, setTabChange2] = useState(false);
// //   const [TabChange3, setTabChange3] = useState(false);
// //   const [PageChange, setPageChange] = useState("basic");

// //   const nextTab = () => {
// //     setTabChange(true);
// //     setPageChange("courseMedia");
// //   };

// //   const prevTab1 = () => {
// //     setTabChange(false);
// //     setPageChange("basic");
// //   };

// //   const nextTab2 = () => {
// //     setTabChange1(true);
// //     setTabChange(true);
// //     setPageChange("curriculum");
// //   };

// //   const prevTab2 = () => {
// //     setTabChange1(false);
// //     setPageChange("courseMedia");
// //   };

// //   const nextTab3 = () => {
// //     setTabChange2(true);
// //     setTabChange(true);
// //     setPageChange("settings");
// //   };

// //   const prevTab3 = () => {
// //     setTabChange2(false);
// //     setPageChange("curriculum");
// //   };

// //   const nextTab4 = () => {
// //     setTabChange3(true);
// //     setTabChange(true);
// //     setPageChange("success");
// //   };


// //   return (
// //     <>
// //       <div className="main-wrapper">
// //         <CourseHeader activeMenu={"AddCourse"} />

// //         <section className="page-content course-sec">
// //           <div className="container">
// //             <div className="row align-items-center">
// //               <div className="col-md-12">
// //                 <div className="add-course-header">
// //                   <h2>Add New Course</h2>
// //                   <div className="add-course-btns">
// //                     <ul className="nav">
// //                       <li>
// //                         <Link
// //                           to="/instructor/instructor-dashboard"
// //                           className="btn btn-black"
// //                         >
// //                           Back to Course
// //                         </Link>
// //                       </li>
// //                       <li>
// //                         <Link to="#" className="btn btn-success-dark">
// //                           Save
// //                         </Link>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="row">
// //               <div className="col-md-12">
// //                 <div className="card">
// //                   <div className="widget-set">
// //                     <div className="widget-setcount">
// //                       <ul id="progressbar">
// //                         <li
// //                           className={
// //                             TabChange ? "progress-activated" : "progress-active"
// //                           }
// //                         >
// //                           <p>
// //                             <span></span> Basic Information
// //                           </p>
// //                         </li>
// //                         <li
// //                           className={
// //                             TabChange1
// //                               ? "progress-activated"
// //                               : "" || TabChange
// //                               ? "progress-active"
// //                               : ""
// //                           }
// //                         >
// //                           <p>
// //                             <span></span> Courses Media
// //                           </p>
// //                         </li>
// //                         <li
// //                           className={
// //                             TabChange2
// //                               ? "progress-activated"
// //                               : "" || TabChange1
// //                               ? "progress-active"
// //                               : ""
// //                           }
// //                         >
// //                           <p>
// //                             <span></span> Curriculum
// //                           </p>
// //                         </li>
// //                         <li
// //                           className={
// //                             TabChange3
// //                               ? "progress-activated"
// //                               : "" || TabChange2
// //                               ? "progress-active"
// //                               : ""
// //                           }
// //                         >
// //                           <p>
// //                             <span /> Settings
// //                           </p>
// //                         </li>
// //                       </ul>
// //                     </div>

// //                     <div className="widget-content multistep-form">
// //                       {PageChange === "basic" ? (
// //                         <Basic nextTab={nextTab} />
// //                       ) : (
// //                         ""
// //                       )}
// //                       {PageChange === "courseMedia" ? (
// //                         <CourseMedia nextTab2={nextTab2} prevTab1={prevTab1} />
// //                       ) : (
// //                         ""
// //                       )}
// //                       {PageChange === "curriculum" ? (
// //                         <Curriculum nextTab3={nextTab3} prevTab2={prevTab2} />
// //                       ) : (
// //                         ""
// //                       )}
// //                       {PageChange === "settings" ? (
// //                         <Settings nextTab4={nextTab4} prevTab3={prevTab3}/>
// //                       ) : (
// //                         ""
// //                       )}
// //                       {PageChange === "success" ? (
// //                         <Success />
// //                       ) : (
// //                         ""
// //                       )}

// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         <Footer />
// //       </div>
// //     </>
// //   );
// // };

// // export default AddCourse;

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const AddCourse = () => {
// //   const [formData, setFormData] = useState({
// //     CourseTitle: '',
// //     CourseLanguage: '',
// //     Level: '',
// //     Category: '',
// //     TimeSpentOnCourse: '',
// //     LearningObjectives: '',
// //     Requirements: '',
// //     TargetAudience: '',
// //     CourseDescription: '',
// //     CoursePrice: '',
// //     CouponCode: '',
// //     course_banner_image: null,
// //     introduction_video: null,
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.files[0] });
// //   };
// //  console.log(formData,"AddCourse data")
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('https://api.novajobs.us/api/trainers/create-course', formData);
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label htmlFor="CourseTitle">Course Title</label>
// //         <input type="text" id="CourseTitle" name="CourseTitle" value={formData.CourseTitle} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="CourseLanguage">Course Language</label>
// //         <input type="text" id="CourseLanguage" name="CourseLanguage" value={formData.CourseLanguage} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="Level">Level</label>
// //         <input type="text" id="Level" name="Level" value={formData.Level} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="Category">Category</label>
// //         <input type="text" id="Category" name="Category" value={formData.Category} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="TimeSpentOnCourse">Time Spent On Course</label>
// //         <input type="text" id="TimeSpentOnCourse" name="TimeSpentOnCourse" value={formData.TimeSpentOnCourse} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="LearningObjectives">Learning Objectives</label>
// //         <textarea id="LearningObjectives" name="LearningObjectives" value={formData.LearningObjectives} onChange={handleChange}></textarea>
// //       </div>
// //       <div>
// //         <label htmlFor="Requirements">Requirements</label>
// //         <textarea id="Requirements" name="Requirements" value={formData.Requirements} onChange={handleChange}></textarea>
// //       </div>
// //       <div>
// //         <label htmlFor="TargetAudience">Target Audience</label>
// //         <input type="text" id="TargetAudience" name="TargetAudience" value={formData.TargetAudience} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="CourseDescription">Course Description</label>
// //         <textarea id="CourseDescription" name="CourseDescription" value={formData.CourseDescription} onChange={handleChange}></textarea>
// //       </div>
// //       <div>
// //         <label htmlFor="CoursePrice">Course Price</label>
// //         <input type="number" id="CoursePrice" name="CoursePrice" value={formData.CoursePrice} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="CouponCode">Coupon Code</label>
// //         <input type="text" id="CouponCode" name="CouponCode" value={formData.CouponCode} onChange={handleChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="course_banner_image">Course Banner Image</label>
// //         <input type="file" id="course_banner_image" name="course_banner_image" onChange={handleFileChange} />
// //       </div>
// //       <div>
// //         <label htmlFor="introduction_video">Introduction Video</label>
// //         <input type="file" id="introduction_video" name="introduction_video" onChange={handleFileChange} />
// //       </div>
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // };

// // export default AddCourse;import React, { useState } from 'react';
// import axios from 'axios';

// const AddCourse = () => {
//   const [formData, setFormData] = useState({
//     course_title: '',
//     course_language: '',
//     level: '',
//     category: '',
//     time_spent_on_course: '',
//     learning_objectives: '',
//     requirements: '',
//     target_audience: '',
//     course_description: '',
//     course_price: '',
//     coupon_code: '',
//     course_banner_image: null,
//     introduction_video: null,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.files[0] });
//   };

//   console.log(formData, "addCourse data");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }
//     const token = localStorage.getItem("trainerToken");

//     try {
//       const response = await axios.post('https://api.novajobs.us/api/trainers/create-course', formDataToSend, {
//         headers: {
//           Authorization: `${token}`, // Added Bearer keyword for token
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"AddCourse"} />
//       <div className="container my-5">
//         <div className="card">
//           <div className="card-header">
//             <h4>Add New Course</h4>
//           </div>
//           <div className="add-course-form">
//             <form onSubmit={handleSubmit}>
//               {/* Course Title */}
//               <div className="input-block mb-3">
//                 <label htmlFor="course_title" className="form-label">Course Title</label>
//                 <input
//                   type="text"
//                   id="course_title"
//                   name="course_title"
//                   value={formData.course_title}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course title"
//                 />
//               </div>

//               {/* Course Language */}
//               <div className="input-block mb-3">
//                 <label htmlFor="course_language" className="form-label">Course Language</label>
//                 <input
//                   type="text"
//                   id="course_language"
//                   name="course_language"
//                   value={formData.course_language}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course language"
//                 />
//               </div>

//               {/* Level */}
//               <div className="input-block mb-3">
//                 <label htmlFor="level" className="form-label">Level</label>
//                 <input
//                   type="text"
//                   id="level"
//                   name="level"
//                   value={formData.level}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course level"
//                 />
//               </div>

//               {/* Category */}
//               <div className="input-block mb-3">
//                 <label htmlFor="category" className="form-label">Category</label>
//                 <input
//                   type="text"
//                   id="category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course category"
//                 />
//               </div>

//               {/* Time Spent On Course */}
//               <div className="input-block mb-3">
//                 <label htmlFor="time_spent_on_course" className="form-label">Time Spent On Course</label>
//                 <input
//                   type="text"
//                   id="time_spent_on_course"
//                   name="time_spent_on_course"
//                   value={formData.time_spent_on_course}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter time spent on course"
//                 />
//               </div>

//               {/* Learning Objectives */}
//               <div className="input-block mb-3">
//                 <label htmlFor="learning_objectives" className="form-label">Learning Objectives</label>
//                 <textarea
//                   id="learning_objectives"
//                   name="learning_objectives"
//                   value={formData.learning_objectives}
//                   onChange={handleChange}
//                   className="form-control"
//                   rows="3"
//                   placeholder="Enter learning objectives"
//                 ></textarea>
//               </div>

//               {/* Requirements */}
//               <div className="input-block mb-3">
//                 <label htmlFor="requirements" className="form-label">Requirements</label>
//                 <textarea
//                   id="requirements"
//                   name="requirements"
//                   value={formData.requirements}
//                   onChange={handleChange}
//                   className="form-control"
//                   rows="3"
//                   placeholder="Enter requirements"
//                 ></textarea>
//               </div>

//               {/* Target Audience */}
//               <div className="input-block mb-3">
//                 <label htmlFor="target_audience" className="form-label">Target Audience</label>
//                 <input
//                   type="text"
//                   id="target_audience"
//                   name="target_audience"
//                   value={formData.target_audience}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter target audience"
//                 />
//               </div>

//               {/* Course Description */}
//               <div className="input-block mb-3">
//                 <label htmlFor="course_description" className="form-label">Course Description</label>
//                 <textarea
//                   id="course_description"
//                   name="course_description"
//                   value={formData.course_description}
//                   onChange={handleChange}
//                   className="form-control"
//                   rows="3"
//                   placeholder="Enter course description"
//                 ></textarea>
//               </div>

//               {/* Course Price */}
//               <div className="input-block mb-3">
//                 <label htmlFor="course_price" className="form-label">Course Price</label>
//                 <input
//                   type="number"
//                   id="course_price"
//                   name="course_price"
//                   value={formData.course_price}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course price"
//                 />
//               </div>

//               {/* Coupon Code */}
//               <div className="input-block mb-3">
//                 <label htmlFor="coupon_code" className="form-label">Coupon Code</label>
//                 <input
//                   type="text"
//                   id="coupon_code"
//                   name="coupon_code"
//                   value={formData.coupon_code}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter coupon code"
//                 />
//               </div>

//               {/* Course Banner Image */}
//               <div className="input-block mb-3">
//                 <label htmlFor="course_banner_image" className="form-label">Course Banner Image</label>
//                 <input
//                   type="file"
//                   id="course_banner_image"
//                   name="course_banner_image"
//                   onChange={handleFileChange}
//                   className="form-control"
//                 />
//               </div>

//               {/* Introduction Video */}
//               <div className="input-block mb-3">
//                 <label htmlFor="introduction_video" className="form-label">Introduction Video</label>
//                 <input
//                   type="file"
//                   id="introduction_video"
//                   name="introduction_video"
//                   onChange={handleFileChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="d-flex justify-content-between mt-4">
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCourse;

// import React, { useState } from 'react';
// import axios from 'axios';
// import CourseHeader from "../header";
// import { toast } from 'react-toastify';


// const AddCourse = () => {
//   const [formData, setFormData] = useState({
//     course_title: '',
//     course_language: '',
//     level: '',
//     category: '',
//     time_spent_on_course: '',
//     learning_objectives: '',
//     requirements: '',
//     target_audience: '',
//     course_description: '',
//     course_price: '',
//     coupon_code: '',
//     course_banner_image: null,
//     introduction_video: null,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.files[0] });
//   };

//   console.log(formData, "addCourse data");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }
//     const token = localStorage.getItem("trainerToken");

//     try {
//       const response = await axios.post('https://api.novajobs.us/api/trainers/create-course', formDataToSend, {
//         headers: {
//           Authorization: `${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//       toast.success('Course added successfully!');
//     } catch (error) {
//       console.error(error);
//       toast.error('Error adding course. Please try again.');
//     }
//   };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const formDataToSend = new FormData();
//   //   for (const key in formData) {
//   //     formDataToSend.append(key, formData[key]);
//   //   }
//   //   const token = localStorage.getItem("trainerToken");

//   //   try {
//   //     const response = await axios.post('https://api.novajobs.us/api/trainers/create-course', formDataToSend, {
//   //       headers: {
//   //         Authorization: `${token}`,
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });
//   //     console.log(response.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"AddCourse"} />
//       <div className="container my-5">
//         <div className="card">
//           <div className="card-header">
//             <h4>Add New Course</h4>
//           </div>
//           <div className="add-course-form">
//             <form onSubmit={handleSubmit}>
//               <div className="input-block mb-3">
//                 <label htmlFor="course_title" className="add-course-label">Course Title</label>
//                 <input
//                   type="text"
//                   id="course_title"
//                   name="course_title"
//                   value={formData.course_title}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course title"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="course_language" className="add-course-label">Course Language</label>
//                 <input
//                   type="text"
//                   id="course_language"
//                   name="course_language"
//                   value={formData.course_language}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course language"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="level" className="add-course-label">Level</label>
//                 <input
//                   type="text"
//                   id="level"
//                   name="level"
//                   value={formData.level}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course level"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="category" className="add-course-label">Category</label>
//                 <input
//                   type="text"
//                   id="category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course category"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="time_spent_on_course" className="add-course-label">Time Spent On Course</label>
//                 <input
//                   type="text"
//                   id="time_spent_on_course"
//                   name="time_spent_on_course"
//                   value={formData.time_spent_on_course}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter time spent on course"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="learning_objectives" className="add-course-label">Learning Objectives</label>
//                 <textarea
//                   id="learning_objectives"
//                   name="learning_objectives"
//                   value={formData.learning_objectives}
//                   onChange={handleChange}
//                   className="form-control"
//                   rows="3"
//                   placeholder="Enter learning objectives"
//                 ></textarea>
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="requirements" className="add-course-label">Requirements</label>
//                 <textarea
//                   id="requirements"
//                   name="requirements"
//                   value={formData.requirements}
//                   onChange={handleChange}
//                   className="form-control"
//                   rows="3"
//                   placeholder="Enter requirements"
//                 ></textarea>
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="target_audience" className="add-course-label">Target Audience</label>
//                 <input
//                   type="text"
//                   id="target_audience"
//                   name="target_audience"
//                   value={formData.target_audience}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter target audience"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="course_description" className="add-course-label">Course Description</label>
//                 <textarea
//                   id="course_description"
//                   name="course_description"
//                   value={formData.course_description}
//                   onChange={handleChange}
//                   className="form-control"
//                   rows="3"
//                   placeholder="Enter course description"
//                 ></textarea>
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="course_price" className="add-course-label">Course Price</label>
//                 <input
//                   type="number"
//                   id="course_price"
//                   name="course_price"
//                   value={formData.course_price}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course price"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="coupon_code" className="add-course-label">Coupon Code</label>
//                 <input
//                   type="text"
//                   id="coupon_code"
//                   name="coupon_code"
//                   value={formData.coupon_code}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter coupon code"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="course_banner_image" className="add-course-label">Course Banner Image</label>
//                 <input
//                   type="file"
//                   id="course_banner_image"
//                   name="course_banner_image"
//                   onChange={handleFileChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="input-block mb-3">
//                 <label htmlFor="introduction_video" className="add-course-label">Introduction Video</label>
//                 <input
//                   type="file"
//                   id="introduction_video"
//                   name="introduction_video"
//                   onChange={handleFileChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="d-flex justify-content-between mt-4">
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCourse;
import React, { useState } from 'react';
import axios from 'axios';
import CourseHeader from "../header";
import { toast } from 'react-toastify';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    course_title: '',
    course_language: '',
    level: '',
    category: '',
    time_spent_on_course: '',
    learning_objectives: '',
    requirements: '',
    target_audience: '',
    course_description: '',
    course_price: '',
    coupon_code: '',
    course_banner_image: null,
    introduction_video: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.course_title ||
      !formData.course_language ||
      !formData.level ||
      !formData.category ||
      !formData.time_spent_on_course ||
      !formData.learning_objectives ||
      !formData.requirements ||
      !formData.target_audience ||
      !formData.course_description ||
      !formData.course_price ||
      !formData.course_banner_image ||
      !formData.introduction_video
    ) {
      toast.error('Please fill in all the required fields.');
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    const token = localStorage.getItem("trainerToken");

    try {
      const response = await axios.post('https://api.novajobs.us/api/trainers/create-course', formDataToSend, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      toast.success('Course added successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Error adding course. Please try again.');
    }
  };

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"AddCourse"} />
      <div className="container my-5">
        <div className="card">
          <div className="card-header">
            <h4>Add New Course</h4>
          </div>
          <div className="add-course-form">
            <form onSubmit={handleSubmit}>
              <div className="input-block mb-3">
                <label htmlFor="course_title" className="add-course-label">Course Title</label>
                <input
                  type="text"
                  id="course_title"
                  name="course_title"
                  value={formData.course_title}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter course title"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="course_language" className="add-course-label">Course Language</label>
                <input
                  type="text"
                  id="course_language"
                  name="course_language"
                  value={formData.course_language}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter course language"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="level" className="add-course-label">Level</label>
                <input
                  type="text"
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter course level"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="category" className="add-course-label">Category</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter course category"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="time_spent_on_course" className="add-course-label">Time Spent On Course</label>
                <input
                  type="text"
                  id="time_spent_on_course"
                  name="time_spent_on_course"
                  value={formData.time_spent_on_course}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter time spent on course"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="learning_objectives" className="add-course-label">Learning Objectives</label>
                <textarea
                  id="learning_objectives"
                  name="learning_objectives"
                  value={formData.learning_objectives}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                  placeholder="Enter learning objectives"
                ></textarea>
              </div>

              <div className="input-block mb-3">
                <label htmlFor="requirements" className="add-course-label">Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                  placeholder="Enter requirements"
                ></textarea>
              </div>

              <div className="input-block mb-3">
                <label htmlFor="target_audience" className="add-course-label">Target Audience</label>
                <input
                  type="text"
                  id="target_audience"
                  name="target_audience"
                  value={formData.target_audience}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter target audience"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="course_description" className="add-course-label">Course Description</label>
                <textarea
                  id="course_description"
                  name="course_description"
                  value={formData.course_description}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                  placeholder="Enter course description"
                ></textarea>
              </div>

              <div className="input-block mb-3">
                <label htmlFor="course_price" className="add-course-label">Course Price</label>
                <input
                  type="number"
                  id="course_price"
                  name="course_price"
                  value={formData.course_price}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter course price"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="coupon_code" className="add-course-label">Coupon Code</label>
                <input
                  type="text"
                  id="coupon_code"
                  name="coupon_code"
                  value={formData.coupon_code}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter coupon code"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="course_banner_image" className="add-course-label">Course Banner Image</label>
                <input
                  type="file"
                  id="course_banner_image"
                  name="course_banner_image"
                  onChange={handleFileChange}
                  className="form-control"
                />
              </div>

              <div className="input-block mb-3">
                <label htmlFor="introduction_video" className="add-course-label">Introduction Video</label>
                <input
                  type="file"
                  id="introduction_video"
                  name="introduction_video"
                  onChange={handleFileChange}
                  className="form-control"
                />
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;                                                     