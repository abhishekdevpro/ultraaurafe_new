
// import React from "react";
// import { Link } from "react-router-dom";
// import { Icon1, Icon2 } from "../../../imagepath";

// const GridInnerPage = ({ courses }) => {
//   return (
//     <>
//       <div className="row">
//         {courses.map((course) => (
//           <div className="col-lg-4 col-md-6 d-flex" key={course.id}>
//             <div className="course-box course-design d-flex ">
//               <div className="product">
//                 <div className="product-img">
//                   <Link to="/course-details">
//                     <img
//                       className="img-fluid"
//                       alt=""
//                       src={`https://api.novajobs.us${course.course_banner_image}`}
//                     />
//                   </Link>
//                   <div className="price">
//                     <h3>
//                       ${course.course_price} 
//                       {course.discount_percent > 0 && <span>${course.after_discount_price}</span>}
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="product-content">
//                   <div className="course-group d-flex">
//                     <div className="course-group-img d-flex">
//                       <Link to="/instructor/instructor-profile">
//                         <img
//                           src={`https://via.placeholder.com/150x150?text=${course.trainer_first_name.charAt(0)}${course.trainer_last_name.charAt(0)}`}
//                           alt=""
//                           className="img-fluid"
//                         />
//                       </Link>
//                       <div className="course-name">
//                         <h4>
//                           <Link to="/instructor/instructor-profile">
//                             {`${course.trainer_first_name} ${course.trainer_last_name}`}
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
//                   <div className="course-info d-flex align-items-center">
//                     <div className="rating-img d-flex align-items-center">
//                       <img src={Icon1} alt="" />
//                       <p>{course.time_spent_on_course}</p>
//                     </div>
//                     <div className="course-view d-flex align-items-center">
//                       <img src={Icon2} alt="" />
//                       <p>{course.level}</p>
//                     </div>
//                   </div>
//                   <div className="rating">
//                     {/* You might want to add actual rating logic here */}
//                     <i className="fas fa-star filled me-1" />
//                     <i className="fas fa-star filled me-1" />
//                     <i className="fas fa-star filled me-1" />
//                     <i className="fas fa-star filled me-1" />
//                     <i className="fas fa-star me-1" />
//                     <span className="d-inline-block average-rating">
//                       <span>4.0</span> ({course.enrolled_student_count})
//                     </span>
//                   </div>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/checkout" className="btn btn-primary">
//                       BUY NOW
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default GridInnerPage;

import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";
import { Icon1, Icon2 } from "../../../imagepath";

const GridInnerPage = ({ courses }) => {
  return (
    <>
      <div className="row">
        {courses.map((course) => (
          <div className="col-lg-4 col-md-6 d-flex" key={course.id}>
            <div className="course-box course-design d-flex">
              <div className="product">
                <div className="product-img">
                  <Link to="/course-details">
                    <img
                      className="img-fluid"
                      alt=""
                      src={`https://api.novajobs.us${course.course_banner_image}`}
                    />
                  </Link>
                  <div className="price">
                    <h3>
                      ${course.course_price}
                      {course.discount_percent > 0 && (
                        <span>${course.after_discount_price}</span>
                      )}
                    </h3>
                  </div>
                </div>
                <div className="product-content">
                  <div className="course-group d-flex">
                    <div className="course-group-img d-flex">
                     {/* <Link to="/instructor/instructor-profile">
                        <img
                          src={`https://via.placeholder.com/150x150?text=${course.trainer_first_name.charAt(0)}${course.trainer_last_name.charAt(0)}`}
                          alt=""
                          className="img-fluid"
                        />
                      </Link> */}
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
                      <Link to="#">
                        <i className="fa-regular fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <h3 className="title">
                    <Link to={`/course-info/${course.id}`}>
                      {course.course_title}
                    </Link>
                  </h3>
                  <p className="fs-6">
                       
                          {course.course_category_name}
                          
                        
                      </p>
                  <div className="course-info d-flex align-items-center">
                    <div className="rating-img d-flex align-items-center">
                      <img src={Icon1} alt="" />
                      <p>{course.time_spent_on_course}</p>
                    </div>
                    <div className="course-view d-flex align-items-center">
                      <img src={Icon2} alt="" />
                      <p>{course.level}</p>
                    </div>
                  </div>
                  <span className="d-inline-block average-rating fs-6">
                            <span className="fs-8" style={{fontSize:"15px"}}>{course.course_level_name}</span>
                          </span>
                  <div className="all-btn all-category d-flex align-items-center">
                    <Link to="/checkout" className="btn btn-primary">
                    Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Define prop types for validation
GridInnerPage.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      course_banner_image: PropTypes.string.isRequired,
      course_price: PropTypes.number.isRequired,
      discount_percent: PropTypes.number,
      after_discount_price: PropTypes.number,
      trainer_first_name: PropTypes.string.isRequired,
      trainer_last_name: PropTypes.string.isRequired,
      course_title: PropTypes.string.isRequired,
      time_spent_on_course: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      enrolled_student_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GridInnerPage;
