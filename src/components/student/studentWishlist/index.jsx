// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import StudentHeader from "../header";
// import Footer from "../../footer";
// import StudentSidebar from "../sidebar";
// import { Icon01, Icon2 } from "../../imagepath";
// import { toast } from "react-toastify";

// const StudentWishlist = () => {
//   const [wishlistCourses, setWishlistCourses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isClassAdded, setIsClassAdded] = useState([false]);

//    const token = localStorage.getItem('token')
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.novajobs.us/api/students/mycourse-lists?is_course_favorites=1",
//           {
//             headers: {
//               Authorization: ` ${token}`, // Replace with actual token
//             },
//           }
//         );
//         setWishlistCourses(response.data.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch wishlist courses");
//         setIsLoading(false);
//       }
//     };

//     fetchWishlist();
//   }, []);

//   const toggleWishlist = async (index, courseId) => {
//     const updatedClasses = [...isClassAdded];
//     updatedClasses[index] = !updatedClasses[index];
//     setIsClassAdded(updatedClasses);

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
//       // Show success toast
//       toast.success('Course added to favorites!');
//     } catch (error) {
//       console.error('Failed to add course to favorites:', error);
//       // Show error toast
//       toast.error('Failed to add course to favorites. Please try again.');
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="main-wrapper">
//       <StudentHeader activeMenu={"Wishlist"} />
//       {/* Breadcrumb */}
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12">
//               <div className="breadcrumb-list">
//                 <h2 className="breadcrumb-title">Wishlist</h2>
//                 <nav aria-label="breadcrumb" className="page-breadcrumb">
//                   <ol className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <Link to="/home">Home</Link>
//                     </li>
//                     <li className="breadcrumb-item active" aria-current="page">
//                       Wishlist
//                     </li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Breadcrumb */}
//       {/* Page Content */}
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             {/* sidebar */}
//             <StudentSidebar />
//             {/* /Sidebar */}
//             {/* Student Wishlist */}
//             <div className="col-xl-9 col-lg-9">
//               <div className="settings-widget card-info">
//                 <div className="settings-menu p-0">
//                   <div className="profile-heading">
//                     <h3>Wishlist</h3>
//                   </div>
//                   <div className="checkout-form pb-0">
//                     <div className="row">
//                       {wishlistCourses.map((course) => (
//                         <div key={course.id} className="col-xxl-4 col-md-6 d-flex">
//                           <div className="course-box flex-fill">
//                             <div className="product">
//                               <div className="product-img">
//                                 <Link to={`/course-info/${course.id}`}>
//                                   <img
//                                     className="img-fluid"
//                                     alt={course.title}
//                                     src={`https://api.novajobs.us${course.course_banner_image}`}
//                                   />
//                                 </Link>
//                                 <div className="price">
//                                   <h3>
//                                     ${course.discounted_price}{" "}
//                                     <span>${course.original_price}</span>
//                                   </h3>
//                                 </div>
//                               </div>
//                               <div className="product-content">
//                                 <div className="course-group d-flex">
//                                   <div className="course-group-img d-flex">
//                                     <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
//                                       <img
//                                         src={course.instructor_image}
//                                         alt={course.instructor_name}
//                                         className="img-fluid"
//                                       />
//                                     </Link>
//                                     <div className="course-name">
//                                       <h4>
//                                         <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
//                                           {course.instructor_name}
//                                         </Link>
//                                       </h4>
//                                       <p>Instructor</p>
//                                     </div>
//                                   </div>
//                                   <div className="course-share d-flex align-items-center justify-content-center">
//                                     <Link to="#" onClick={() => toggleWishlist(course.id)}>
//                                       <i className="fa-regular fa-heart color-active" />
//                                     </Link>
//                                   </div>
//                                 </div>
//                                 <h3 className="title instructor-text">
//                                   <Link to={`/course-details/${course.id}`}>
//                                     {course.title}
//                                   </Link>
//                                 </h3>
//                                 <div className="course-info d-flex align-items-center">
//                                   <div className="rating-img d-flex align-items-center">
//                                     <img src={Icon01} alt="Lesson" />
//                                     <p>{course.total_lectures} Lesson</p>
//                                   </div>
//                                   <div className="course-view d-flex align-items-center">
//                                     <img src={Icon2} alt="Duration" />
//                                     <p>{course.time_spent_on_course}</p>
//                                   </div>
//                                 </div>
//                                 <div className="rating mb-0">
//                                   {[...Array(5)].map((_, index) => (
//                                     <i
//                                       key={index}
//                                       className={`fas fa-star ${
//                                         index < Math.floor(course.rating) ? "filled" : ""
//                                       } me-1`}
//                                     />
//                                   ))}
//                                   <span className="d-inline-block average-rating">
//                                     <span>{course.rating.toFixed(1)}</span>
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Pagination component can be added here if needed */}
//             </div>
//             {/* /Student Wishlist */}
//           </div>
//         </div>
//       </div>
//       {/* /Page Content */}
//       <Footer />
//     </div>
//   );
// };

// export default StudentWishlist;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StudentHeader from "../header";
import Footer from "../../footer";
import StudentSidebar from "../sidebar";
import { Icon01, Icon2 } from "../../imagepath";
import { toast } from "react-toastify";

const StudentWishlist = () => {
  const [wishlistCourses, setWishlistCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  const fetchWishlist = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/students/mycourse-lists?is_course_favorites=1",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setWishlistCourses(response.data.data || []); // Use empty array if data is null
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch wishlist courses");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const toggleWishlist = async (courseId) => {
    try {
      await axios.post(
        "https://api.novajobs.us/api/students/course-favorite",
        { course_id: courseId },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Course removed from favorites!", {
        // onClose: () => {
        //   // Refresh the page after the toast is closed
        //   window.location.reload();
        // }
      });
      // Refresh the wishlist
      fetchWishlist();
    } catch (error) {
      console.error("Failed to remove course from favorites:", error);
      toast.error("Failed to remove course from favorites. Please try again.");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Wishlist"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Wishlist</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Wishlist
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSidebar />
            {/* /Sidebar */}
            {/* Student Wishlist */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-info">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Wishlist</h3>
                  </div>
                  <div className="checkout-form pb-0">
                    {wishlistCourses.length === 0 ? (
                      <div className="text-center py-5">
                        <h4>No courses in the wishlist</h4>
                      </div>
                    ) : (
                      <div className="row">
                        {wishlistCourses.map((course) => (
                          <div
                            key={course.id}
                            className="col-xxl-4 col-md-6 d-flex"
                          >
                            <div className="course-box flex-fill">
                              <div className="product">
                                <div className="product-img">
                                  <Link to={`/course-info/${course.id}`}>
                                    <img
                                      className="img-fluid"
                                      alt={course.title}
                                      // src={`https://api.novajobs.us${course.course_banner_image}`}
                                      src={
                                        course.course_banner_image.startsWith(
                                          "https"
                                        )
                                          ? course.course_banner_image
                                          : `https://api.novajobs.us${course.course_banner_image}`
                                      }
                                    />
                                  </Link>
                                  <div className="price">
                                    <h3>
                                      ${course.discounted_price}{" "}
                                      <span>${course.original_price}</span>
                                    </h3>
                                  </div>
                                </div>
                                <div className="product-content">
                                  <div className="course-group d-flex">
                                    <div className="course-group-img d-flex">
                                      <Link
                                        to={`/instructor/instructor-profile/${course.instructor_id}`}
                                      >
                                        <img
                                          src={`https://api.novajobs.us${course.trainer_photo}`}
                                          alt={course.trainer_first_name}
                                          className="img-fluid"
                                        />
                                      </Link>
                                      <div className="course-name">
                                        <h4>
                                          <Link
                                            to={`/instructor/instructor-profile/${course.instructor_id}`}
                                          >
                                            {course.trainer_first_name}{" "}
                                            {course.trainer_last_name}
                                          </Link>
                                        </h4>
                                        <p>Instructor</p>
                                      </div>
                                    </div>
                                    <div className="course-share d-flex align-items-center justify-content-center">
                                      <div
                                        onClick={() =>
                                          toggleWishlist(course.id)
                                        }
                                      >
                                        <i className="fa-solid fa-heart " />
                                      </div>
                                    </div>
                                  </div>
                                  <h3 className="title instructor-text">
                                    <Link to={`/course-info/${course.id}`}>
                                      {course.course_title}
                                    </Link>
                                  </h3>
                                  <div className="course-info d-flex align-items-center">
                                    <div className="rating-img d-flex align-items-center">
                                      <img src={Icon01} alt="Lesson" />
                                      <p>{course.total_lectures} Lesson</p>
                                    </div>
                                    <div className="course-view d-flex align-items-center">
                                      <img src={Icon2} alt="Duration" />
                                      <p>{course.time_spent_on_course}</p>
                                    </div>
                                  </div>
                                  <div className="rating mb-0">
                                    {[...Array(5)].map((_, index) => (
                                      <i
                                        key={index}
                                        className={`fas fa-star ${
                                          index < Math.floor(course.rating)
                                            ? "filled"
                                            : ""
                                        } me-1`}
                                      />
                                    ))}
                                    <span className="d-inline-block average-rating">
                                      <span>{course.rating.toFixed(1)}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* /Student Wishlist */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default StudentWishlist;
