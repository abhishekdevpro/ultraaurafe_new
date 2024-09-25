// import React from "react";
// import { Link } from "react-router-dom";
// import { Course10, Course11, Course12, Course13, Course14, Course15, Course16, Course17, Icon1, Icon2, User1, User2, User3, User4, User5, User6 } from "../../../imagepath";

// const InnerPage = () => {
//   return (
//     <>
//       <div className="row">
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course10}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       Information About UI/UX Design Degree
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User1}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">Rolands R</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course11}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       Sketch from A to Z (2024): Become an app designer
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User2}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">Jesse Stevens</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course12}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       Learn Angular Fundamentals From beginning to advance lavel
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User3}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">Jesse Stevens</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course13}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       Build Responsive Real World Websites with HTML5 and CSS3
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User3}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">John Smith</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course14}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       C# Developers Double Your Coding Speed with Visual Studio
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User4}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">Stella Johnson</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course15}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       Learn JavaScript and Express to become a professional
//                       JavaScript
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User5}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">John Michael</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course16}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       Learn and Understand AngularJS to become a professional
//                       developer
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User6}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">Nicole Brown</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course13}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       Responsive Web Design Essentials HTML5 CSS3 and Bootstrap
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User4}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">Monroe Parker</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-12 col-md-12 d-flex">
//           <div className="course-box course-design list-course d-flex">
//             <div className="product">
//               <div className="product-img">
//                 <Link to="/course-info">
//                   <img
//                     className="img-fluid"
//                     alt=""
//                     src={Course17}
//                   />
//                 </Link>
//                 <div className="price">
//                   <h3>
//                     $300 <span>$99.00</span>
//                   </h3>
//                 </div>
//               </div>
//               <div className="product-content">
//                 <div className="head-course-title">
//                   <h3 className="title">
//                     <Link to="/course-info">
//                       The Complete App Design Course - UX, UI and Design
//                       Thinking
//                     </Link>
//                   </h3>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon1} alt="" />
//                     <p>12+ Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="" />
//                     <p>9hr 30min</p>
//                   </div>
//                 </div>
//                 <div className="rating">
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star filled me-1" />
//                   <i className="fas fa-star me-1" />
//                   <span className="d-inline-block average-rating">
//                     <span>4.0</span> (15)
//                   </span>
//                 </div>
//                 <div className="course-group d-flex mb-0">
//                   <div className="course-group-img d-flex">
//                     <Link to="/instructor/instructor-profile">
//                       <img
//                         src={User6}
//                         alt=""
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to="/instructor/instructor-profile">Lavern M.</Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div className="course-share d-flex align-items-center justify-content-center">
//                     <Link to="#">
//                       <i className="fa-regular fa-heart" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InnerPage;
// import { Link } from "react-router-dom";
// import { Icon1, Icon2 } from "../../../imagepath";
// import PropTypes from 'prop-types';

// const InnerPage = ({ courses = [] }) => { // Default to an empty array
//   return (
//     <div className="row">
//       {courses.length > 0 ? (
//         courses.map(course => (
//           <div className="col-lg-4 col-md-6 d-flex" key={course.id}>
//             <div className="course-box course-design d-flex">
//               <div className="product">
//                 <div className="product-img">
//                   <Link to={`/course-info/${course.id}`}>
//                     <img
//                       className="img-fluid"
//                       alt={`Banner for ${course.course_title}`}
//                       src={`https://api.novajobs.us${course.course_banner_image}`}
//                     />
//                   </Link>
//                   <div className="price">
//                     <h3>
//                       ${course.course_price}
//                       {course.discount_percent > 0 && (
//                         <span>${course.after_discount_price}</span>
//                       )}
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="product-content">
//                   <div className="course-group d-flex">
//                     <div className="course-group-img d-flex">
//                       <div className="course-name">
//                         <h4>
//                           <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
//                             {course.trainer_first_name} {course.trainer_last_name}
//                           </Link>
//                         </h4>
//                         <p>Instructor</p>
//                       </div>
//                     </div>
//                     <div className="course-share d-flex align-items-center justify-content-center">
//                       <Link to="#">
//                         <i className="fa-regular fa-heart" />
//                       </Link>
//                     </div>
//                   </div>
//                   <h3 className="title">
//                     <Link to={`/course-info/${course.id}`}>
//                       {course.course_title}
//                     </Link>
//                   </h3>
//                   <p className="fs-6">{course.course_category_name}</p>
//                   <div className="course-info d-flex align-items-center">
//                     <div className="rating-img d-flex align-items-center">
//                       <img src={Icon1} alt="Course duration icon" />
//                       <p>{course.time_spent_on_course}</p>
//                     </div>
//                     <div className="course-view d-flex align-items-center">
//                       <img src={Icon2} alt="Course level icon" />
//                       <p>{course.course_level_name}</p>
//                     </div>
//                   </div>
//                   {/* <span className="d-inline-block average-rating fs-6">
//                     <span className="fs-8" style={{ fontSize: "15px" }}>
//                       {course.course_level_name}
//                     </span>
//                   </span> */}
                
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No courses found.</p>
//       )}
//     </div>
//   );
// };

// InnerPage.propTypes = {
//   courses: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       course_title: PropTypes.string.isRequired,
//       course_category_name: PropTypes.string.isRequired,
//       course_description: PropTypes.string.isRequired,
//       course_banner_image: PropTypes.string.isRequired,
//       course_price: PropTypes.number.isRequired,
//       discount_percent: PropTypes.number,
//       after_discount_price: PropTypes.number,
//       trainer_id: PropTypes.number.isRequired,
//       trainer_first_name: PropTypes.string.isRequired,
//       trainer_last_name: PropTypes.string.isRequired,
//       time_spent_on_course: PropTypes.string.isRequired,
//       level: PropTypes.string.isRequired,
//       course_level_name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default InnerPage;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import PropTypes from 'prop-types';
// import { Icon01, Icon1, Icon2 } from "../../../imagepath";
// import { toast } from "react-toastify";
// import axios from "axios";

// const CourseGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 2rem;
// `;

// const CourseCard = styled.div`
//   background-color: white;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const CourseImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;

// const CourseContent = styled.div`
//   padding: 1rem;
// `;

// const InstructorInfo = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const InstructorName = styled.span`
//   font-size: 0.9rem;
//   color: #666;
// `;

// const CourseTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   color: #333;
// `;

// const CourseStats = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 0.9rem;
//   color: #666;
//   margin-bottom: 1rem;
//   border-bottom:0.2px solid gray;
// `;

// const StatItem = styled.div`
//   display: flex;
//   align-items: center;

//   img {
//     width: 20px;
//     height: 20px;
//     margin-right: 0.5rem;
//   }
// `;

// const CoursePrice = styled.div`
//   font-size: 1.2rem;
//   font-weight: bold;
//   color: #ff4081;
// `;

// const CategoryName = styled.p`
//   font-size: 0.9rem;
//   color: #666;
//   margin-bottom: 0.5rem;
// `;

// const InnerPage = ({ courses = [] }) => {
//   const [isClassAdded, setIsClassAdded] = useState([]);
//   const navigate = useNavigate(); // Correct placement of useNavigate hook

//   const toggleClass = async (index, courseId) => {
//     const updatedClasses = [...isClassAdded];
//     updatedClasses[index] = !updatedClasses[index];
//     setIsClassAdded(updatedClasses);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         navigate('/login');
//         return;
//       }

//       await axios.post(
//         'https://api.novajobs.us/api/students/course-favorite',
//         { course_id: courseId },
//         {
//           headers: {
//             'Authorization': `${token}`,
//             'Content-Type': 'application/json',
//           }
//         }
//       );
//       toast.success('Course added to favorites!');
//     } catch (error) {
//       console.error('Failed to add course to favorites:', error);
//       toast.error('Failed to add course to favorites. Please try again.');
//     }
//   };

//   return (
//     <CourseGrid>
//       {courses.length > 0 ? (
//         courses.map((course, index) => (
//           <CourseCard key={course.id}>
//             <Link to={`/course-info/${course.id}`}>
//               <CourseImage
//                 src={`https://api.novajobs.us${course.course_banner_image}`}
//                 alt={course.course_title}
//               />
//             </Link>
//             <CourseContent>
//               <div className="product-content">
//                 <div className="course-group d-flex">
//                   <div className="course-group-img d-flex">
//                     <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
//                       <img
//                         src={`https://api.novajobs.us${course.trainer_photo}`}
//                         alt={course.trainer_first_name}
//                         className="img-fluid"
//                       />
//                     </Link>
//                     <div className="course-name">
//                       <h4>
//                         <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
//                           {course.trainer_first_name} {course.trainer_last_name}
//                         </Link>
//                       </h4>
//                       <p>Instructor</p>
//                     </div>
//                   </div>
//                   <div
//                     className="course-share d-flex align-items-center justify-content-center"
//                     onClick={() => toggleClass(index, course.id)}
//                   >
//                     <i className={`fa-solid fa-heart ${isClassAdded[index] ? 'text-danger' : ''}`} />
//                   </div>
//                 </div>
//                 <h3 className="title instructor-text">
//                   <Link to={`/course-info/${course.id}`}>
//                     {course.course_title}
//                   </Link>
//                 </h3>
//                 <div className="course-info d-flex align-items-center">
//                   <div className="rating-img d-flex align-items-center">
//                     <img src={Icon01} alt="Lesson" />
//                     <p>{course.total_lectures} Lesson</p>
//                   </div>
//                   <div className="course-view d-flex align-items-center">
//                     <img src={Icon2} alt="Duration" />
//                     <p>{course.time_spent_on_course}</p>
//                   </div>
//                 </div>
//                 <div className="rating mb-0">
//                   {[...Array(5)].map((_, starIndex) => (
//                     <i
//                       key={starIndex}
//                       className={`fas fa-star ${starIndex < Math.floor(course.rating) ? 'filled' : ''} me-1`}
//                     />
//                   ))}
//                   <span className="d-inline-block average-rating">
//                     <span>{course.rating.toFixed(1)}</span>
//                   </span>
//                 </div>
//               </div>
//               <Link to={`/course-info/${course.id}`}>
//                 <CourseTitle>{course.course_title}</CourseTitle>
//               </Link>
//               <CategoryName>{course.course_category_name}</CategoryName>
//               <CourseStats>
//                 <StatItem>
//                   <img src={Icon1} alt="Duration" />
//                   <span>{course.time_spent_on_course}</span>
//                 </StatItem>
//                 <StatItem>
//                   <img src={Icon2} alt="Level" />
//                   <span>{course.course_level_name}</span>
//                 </StatItem>
//               </CourseStats>
//               <CoursePrice>
//                 ${course.course_price}
//                 {course.discount_percent > 0 && (
//                   <span style={{ textDecoration: 'line-through', marginLeft: '0.5rem', color: '#666' }}>
//                     ${course.after_discount_price}
//                   </span>
//                 )}
//               </CoursePrice>
//             </CourseContent>
//           </CourseCard>
//         ))
//       ) : (
//         <p>No courses found.</p>
//       )}
//     </CourseGrid>
//   );
// };

// InnerPage.propTypes = {
//   courses: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       course_title: PropTypes.string.isRequired,
//       course_category_name: PropTypes.string.isRequired,
//       course_description: PropTypes.string.isRequired,
//       course_banner_image: PropTypes.string.isRequired,
//       course_price: PropTypes.number.isRequired,
//       discount_percent: PropTypes.number,
//       after_discount_price: PropTypes.number,
//       trainer_id: PropTypes.number.isRequired,
//       trainer_first_name: PropTypes.string.isRequired,
//       trainer_last_name: PropTypes.string.isRequired,
//       time_spent_on_course: PropTypes.string.isRequired,
//       level: PropTypes.string.isRequired,
//       course_level_name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default InnerPage;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {Icon1, Icon2 } from "../../../imagepath";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const CourseCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CourseContent = styled.div`
  padding: 1rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const CourseStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  border-bottom: 0.2px solid gray;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;

const CoursePrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff4081;
`;

const CategoryName = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;


const InnerPage = ({ courses = [] }) => {
  const [isClassAdded, setIsClassAdded] = useState([]);

  const navigate = useNavigate();

  // const toggleClass = async (index, courseId) => {
  //   const updatedWishlist = { ...wishlist, [index]: !wishlist[index] };
  //   setWishlist(updatedWishlist);

  //   try {
  //     const token = localStorage.getItem('token');
  
  //     await axios.post(
  //       'https://api.novajobs.us/api/students/course-favorite',
  //       { course_id: courseId },
  //       {
  //         headers: {
  //           'Authorization': `${token}`,
  //           'Content-Type': 'application/json',
  //         }
  //       }
  //     );
  //     // Show success toast
  //     toast.success('Course added to favorites!');
  //   } catch (error) {
  //     console.error('Failed to add course to favorites:', error);
  //     // Show error toast
  //     toast.error('Failed to add course to favorites. Please try again.');
  //   }
  // };
  const toggleClass = async (index, courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
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
      toast.error('Failed to add course to favorites. Please try again.');
    }
  };

  return (
    <CourseGrid>
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <CourseCard key={course.id}>
            <Link to={`/course-info/${course.id}`}>
              <CourseImage
                src={`https://api.novajobs.us${course.course_banner_image}`}
                alt={course.course_title}
              />
            </Link>
            <CourseContent>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
                      <img
                        src={`https://api.novajobs.us${course.trainer_photo}`}
                        alt={course.trainer_first_name}
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                          {course.trainer_first_name}{" "}
                          {course.trainer_last_name}
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
              </div>
              <Link to={`/course-info/${course.id}`}>
                <CourseTitle>{course.course_title}</CourseTitle>
              </Link>
              <CategoryName>{course.course_category_name}</CategoryName>
              <CourseStats>
                <StatItem>
                  <img src={Icon1} alt="Duration" />
                  <span>{course.time_spent_on_course}</span>
                </StatItem>
                <StatItem>
                  <img src={Icon2} alt="Level" />
                  <span>{course.course_level_name}</span>
                </StatItem>
              </CourseStats>
              <CoursePrice>
                ${course.after_discount_price}
                {course.discount_percent > 0 && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "0.5rem",
                      color: "#666",
                    }}
                  >
                    ${course.course_price}
                  </span>
                )}
              </CoursePrice>
            </CourseContent>
          </CourseCard>
        ))
      ) : (
        <p>No courses found.</p>
      )}
    </CourseGrid>
  );
};

InnerPage.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      course_title: PropTypes.string.isRequired,
      course_category_name: PropTypes.string.isRequired,
      course_description: PropTypes.string.isRequired,
      course_banner_image: PropTypes.string.isRequired,
      course_price: PropTypes.number.isRequired,
      discount_percent: PropTypes.number,
      after_discount_price: PropTypes.number,
      trainer_id: PropTypes.number.isRequired,
      trainer_first_name: PropTypes.string.isRequired,
      trainer_last_name: PropTypes.string.isRequired,
      time_spent_on_course: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      course_level_name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InnerPage;
