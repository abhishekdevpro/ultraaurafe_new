// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// // import { Icon1, Icon2 } from "../../imagepath";
// import { Icon01, Icon02 } from "../imagepath";

// import OwlCarousel from "react-owl-carousel";

// import { toast } from "react-toastify";

// const FeaturedCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isClassAdded, setIsClassAdded] = useState([]);
//   const navigate = useNavigate()

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://api.novajobs.us/api/trainers/all-courses");
//         console.log(response, "courses");
//         setCourses(response.data.data.slice(0, 3)); // Limit to 6 courses
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   const toggleClass = async (index, courseId) => {
//     const updatedClasses = [...isClassAdded];
//     updatedClasses[index] = !updatedClasses[index];
//     setIsClassAdded(updatedClasses);

//   // const settings = {
//   //   loop: true, // Enable infinite loop
//   //   margin: 10,
//   //   nav: true, // Navigation arrows
//   //   dots: true, // Pagination dots
//   //   autoplay: true, // Enable automatic sliding
//   //   autoplayTimeout: 3000, // 1-second interval between slides
//   //   smartSpeed: 1000, // Transition speed set to 1 second
//   //   responsive: {
//   //     0: {
//   //       items: 1,
//   //     },
//   //     600: {
//   //       items: 2,
//   //     },
//   //     1000: {
//   //       items: 3,
//   //     },
//   //   },
//   // };

//     try {
//       const token = localStorage.getItem('token');
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
//       navigate('/login')
//     }
//   };

//   return (
//     <section className="section new-course">
//       <div className="container">
//         <div className="section-header aos" data-aos="fade-up">
//           <div className="section-sub-head">
//             {/* <span>What&#39;s New</span>   or use <span>What's New</span> * */}
//             <h2>Explore courses as per your needs
//             </h2>
//           </div>
//           <div className="all-btn all-category d-flex align-items-center">
//             <Link to="/course-list" className="btn btn-primary">
//               All Courses
//             </Link>
//           </div>
//         </div>
//         <div className="ss" data-aos="fade-up">
//           <p className="mb-0">
//           Gain practical, in-demand skills through online courses taught by industry experts. Enhance your career with real-world knowledge from leaders in the field.
//           </p>
//         </div>
//         <div className="course-feature">
        
//     <OwlCarousel {...settings} className="owl-carousel course-carousel owl-theme">
//       {courses.map((course) => (
//         <div key={course.id} className="course-box d-flex aos" data-aos="fade-up"  >
//           <div className="product"  style={{
//           color:"white",
         
//           background: `linear-gradient(135deg, blue, #feb47b)`, // Background gradient
//         }}>
//             <div className="product-img text-white">
//               <Link href={`/course-info/${course.id}`}>
//                 <img
//                   className="img-fluid"
//                   alt={course.course_title}
//                   style={{height:"320px", width:"420px"}}
//                   src={`https://api.novajobs.us${course.course_banner_image}`}
//                 />
//               </Link>
//               <div className="price text-white">
//                 <h3 >
//                   ${course.course_price}
//                   {course.after_discount_price > 0 && (
//                     <span>${course.after_discount_price}</span>
//                   )}
//                 </h3>
//               </div>
//             </div>
//             <div className="product-content">
//               <div className="course-group d-flex">
//                 <div className="course-group-img d-flex">
//                   <Link href={`/instructor/instructor-profile/${course.trainer_id}`}>
//                     <img
//                       src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
//                       alt={`${course.trainer_first_name} ${course.trainer_last_name}`}
//                       className="img-fluid"
//                     />
//                   </Link>
//                   <div className="course-name">
//                     <h4>
//                       <Link href={`/instructor/instructor-profile/${course.trainer_id}`}>
//                         {course.trainer_first_name || "john"} {course.trainer_last_name}
//                       </Link>
//                     </h4>
//                     <p  style={{color:"white",}}>Instructor</p>
//                   </div>
//                 </div>
//                 <div className="course-share d-flex align-items-center justify-content-center">
//                   <Link href="#">
//                     <i className="fa-regular fa-heart" />
//                   </Link>
//                 </div>
//               </div>
//               <h3 className="title instructor-text">
//                 <Link href={`/course-info/${course.id}`}  style={{color:"white",}}>
//                  Course: {course.course_title}
//                 </Link>
//               </h3>
//               <p className="fs-6">Category: {course.course_category_name || "Science & Technology"}</p>
//               <div className="course-info d-flex align-items-center">
//                 <div className="rating-img  align-items-center">
//                   <img src={Icon01} alt="icon" style={{height:"20px"}}/>

//                   <p  style={{color:"white",}} className="d-flex">{course.students_counts} + Students</p>
//                 </div>
//                 <div className="course-view  align-items-center">
//                   <img src={Icon02} alt="icon" style={{height:"20px"}}/>
//                   <p  style={{color:"white",}}>{course.time_spent_on_course}</p>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between">
//                 <span className="d-inline-block average-rating fs-6">
//                   <span className="fs-8" style={{ fontSize: "15px"  ,color:"white"}}>
//                    Level:  {course.course_level_name || "Professionals"}
//                   </span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </OwlCarousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCourses;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Icon01, Icon02 } from "../imagepath";
import OwlCarousel from "react-owl-carousel";
import { toast } from "react-toastify";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClassAdded, setIsClassAdded] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://api.novajobs.us/api/trainers/all-courses");
        console.log(response, "courses");
        setCourses(response.data.data.slice(0, 3)); // Limit to 3 courses
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

  const handleToggleFavorite = async (index, courseId) => {
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
      toast.success('Course added to favorites!');
    } catch (error) {
      console.error('Failed to add course to favorites:', error);
      navigate('/login');
    }
  };

  const settings = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section className="section new-course">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <h2>Explore courses as per your needs</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <Link to="/course-list" className="btn btn-primary">
              All Courses
            </Link>
          </div>
        </div>
        <div className="ss" data-aos="fade-up">
          <p className="mb-0">
            Gain practical, in-demand skills through online courses taught by industry experts. Enhance your career with real-world knowledge from leaders in the field.
          </p>
        </div>
        <div className="course-feature">
          <OwlCarousel {...settings} className="owl-carousel course-carousel owl-theme">
            {courses.map((course, index) => (
              <div key={course.id} className="course-box d-flex aos" data-aos="fade-up">
                <div className="product" style={{
                  color: "white",
                  background: "linear-gradient(135deg, blue, #feb47b)",
                }}>
                  <div className="product-img text-white">
                    <Link to={`/course-info/${course.id}`}>
                      <img
                        className="img-fluid"
                        alt={course.course_title}
                        style={{ height: "320px", width: "420px" }}
                        src={`https://api.novajobs.us${course.course_banner_image}`}
                      />
                    </Link>
                    <div className="price text-white">
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
                          <img
                            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                            alt={`${course.trainer_first_name} ${course.trainer_last_name}`}
                            className="img-fluid"
                          />
                        </Link>
                        <div className="course-name">
                          <h4>
                            <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                              {course.trainer_first_name || "john"} {course.trainer_last_name}
                            </Link>
                          </h4>
                          <p style={{ color: "white" }}>Instructor</p>
                        </div>
                      </div>
                      <div className="course-share d-flex align-items-center justify-content-center">
                        <Link to="#" onClick={() => handleToggleFavorite(index, course.id)}>
                          <i className={`fa-regular fa-heart ${isClassAdded[index] ? 'color-active' : ''}`} />
                        </Link>
                      </div>
                    </div>
                    <h3 className="title instructor-text">
                      <Link to={`/course-info/${course.id}`} style={{ color: "white" }}>
                        Course: {course.course_title}
                      </Link>
                    </h3>
                    <p className="fs-6">Category: {course.course_category_name || "Science & Technology"}</p>
                    <div className="course-info d-flex align-items-center">
                      <div className="rating-img align-items-center">
                        <img src={Icon01} alt="icon" style={{ height: "20px" }} />
                        <p style={{ color: "white" }} className="d-flex">{course.students_counts} + Students</p>
                      </div>
                      <div className="course-view align-items-center">
                        <img src={Icon02} alt="icon" style={{ height: "20px" }} />
                        <p style={{ color: "white" }}>{course.time_spent_on_course}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="d-inline-block average-rating fs-6">
                        <span className="fs-8" style={{ fontSize: "15px", color: "white" }}>
                          Level: {course.course_level_name || "Professionals"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;