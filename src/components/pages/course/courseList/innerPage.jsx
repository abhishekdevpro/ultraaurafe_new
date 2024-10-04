
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
//   border-bottom: 0.2px solid gray;
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


// // const InnerPage = ({ courses = [] }) => {
// //   const [isClassAdded, setIsClassAdded] = useState([]);

// //   const navigate = useNavigate();

// //   // const toggleClass = async (index, courseId) => {
// //   //   const updatedWishlist = { ...wishlist, [index]: !wishlist[index] };
// //   //   setWishlist(updatedWishlist);

// //   //   try {
// //   //     const token = localStorage.getItem('token');
  
// //   //     await axios.post(
// //   //       'https://api.novajobs.us/api/students/course-favorite',
// //   //       { course_id: courseId },
// //   //       {
// //   //         headers: {
// //   //           'Authorization': `${token}`,
// //   //           'Content-Type': 'application/json',
// //   //         }
// //   //       }
// //   //     );
// //   //     // Show success toast
// //   //     toast.success('Course added to favorites!');
// //   //   } catch (error) {
// //   //     console.error('Failed to add course to favorites:', error);
// //   //     // Show error toast
// //   //     toast.error('Failed to add course to favorites. Please try again.');
// //   //   }
// //   // };
//   // const toggleClass = async (index, courseId) => {
//   //   const updatedClasses = [...isClassAdded];
//   //   updatedClasses[index] = !updatedClasses[index];
//   //   setIsClassAdded(updatedClasses);

//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     if (!token) {
//   //       navigate('/login');
//   //       return;
//   //     }
//   //     await axios.post(
//   //       'https://api.novajobs.us/api/students/course-favorite',
//   //       { course_id: courseId },
//   //       {
//   //         headers: {
//   //           'Authorization': `${token}`,
//   //           'Content-Type': 'application/json',
//   //         }
//   //       }
//   //     );
//   //     // Show success toast
//   //     toast.success('Course added to favorites!');
//   //   } catch (error) {
//   //     console.error('Failed to add course to favorites:', error);
//   //     // Show error toast
//   //     toast.error('Failed to add course to favorites. Please try again.');
//   //   }
//   // };

// //   return (
// //     <CourseGrid>
// //       {courses.length > 0 ? (
// //         courses.map((course, index) => (
// //           <CourseCard key={course.id}>
// //             <Link to={`/course-info/${course.id}`}>
// //               <CourseImage
// //                 src={`https://api.novajobs.us${course.course_banner_image}`}
// //                 alt={course.course_title}
// //               />
// //             </Link>
// //             <CourseContent>
// //               <div className="product-content">
// //                 <div className="course-group d-flex">
// //                   <div className="course-group-img d-flex">
// //                     <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
// //                       <img
// //                         src={`https://api.novajobs.us${course.trainer_photo}`}
// //                         alt={course.trainer_first_name}
// //                         className="img-fluid"
// //                       />
// //                     </Link>
// //                     <div className="course-name">
// //                       <h4>
// //                         <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
// //                           {course.trainer_first_name}{" "}
// //                           {course.trainer_last_name}
// //                         </Link>
// //                       </h4>
// //                       <p>Instructor</p>
// //                     </div>
// //                   </div>
// //                   <div className="course-share d-flex align-items-center justify-content-center">
// //                                           <Link to="#" onClick={() => toggleClass(index, course.id)}>
// //                                             <i className={`fa-regular fa-heart ${isClassAdded[index] ? 'color-active' : ''}`} />
// //                                           </Link>
// //                                         </div>
// //                 </div>
// //               </div>
// //               <Link to={`/course-info/${course.id}`}>
// //                 <CourseTitle>{course.course_title}</CourseTitle>
// //               </Link>
// //               <CategoryName>{course.course_category_name}</CategoryName>
// //               <CourseStats>
// //                 <StatItem>
// //                   <img src={Icon1} alt="Duration" />
// //                   <span>{course.time_spent_on_course}</span>
// //                 </StatItem>
// //                 <StatItem>
// //                   <img src={Icon2} alt="Level" />
// //                   <span>{course.course_level_name}</span>
// //                 </StatItem>
// //               </CourseStats>
// //               <CoursePrice>
// //                 ${course.after_discount_price}
// //                 {course.discount_percent > 0 && (
// //                   <span
// //                     style={{
// //                       textDecoration: "line-through",
// //                       marginLeft: "0.5rem",
// //                       color: "#666",
// //                     }}
// //                   >
// //                     ${course.course_price}
// //                   </span>
// //                 )}
// //               </CoursePrice>
// //             </CourseContent>
// //           </CourseCard>
// //         ))
// //       ) : (
// //         <p>No courses found.</p>
// //       )}
// //     </CourseGrid>
// //   );
// // };

// // InnerPage.propTypes = {
// //   courses: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.number.isRequired,
// //       course_title: PropTypes.string.isRequired,
// //       course_category_name: PropTypes.string.isRequired,
// //       course_description: PropTypes.string.isRequired,
// //       course_banner_image: PropTypes.string.isRequired,
// //       course_price: PropTypes.number.isRequired,
// //       discount_percent: PropTypes.number,
// //       after_discount_price: PropTypes.number,
// //       trainer_id: PropTypes.number.isRequired,
// //       trainer_first_name: PropTypes.string.isRequired,
// //       trainer_last_name: PropTypes.string.isRequired,
// //       time_spent_on_course: PropTypes.string.isRequired,
// //       level: PropTypes.string.isRequired,
// //       course_level_name: PropTypes.string.isRequired,
// //     })
// //   ).isRequired,
// // };

// // export default InnerPage;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import PropTypes from 'prop-types';
// import {Icon1, Icon2 } from "../../../imagepath";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CourseGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 2rem;
// `;

// // ... (keep all your existing styled components)

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 2rem;
// `;

// const PaginationButton = styled.button`
//   padding: 0.5rem 1rem;
//   margin: 0 0.25rem;
//   border: 1px solid #ddd;
//   background-color: ${props => props.active ? '#ff4081' : 'white'};
//   color: ${props => props.active ? 'white' : '#333'};
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.3s;

//   &:hover {
//     background-color: ${props => props.active ? '#ff4081' : '#f0f0f0'};
//   }

//   &:disabled {
//     cursor: not-allowed;
//     opacity: 0.5;
//   }
// `;

// const InnerPage = ({ courses = [] }) => {
//   const [isClassAdded, setIsClassAdded] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const coursesPerPage = 9;
  
//   const navigate = useNavigate();

//   // Calculate pagination values
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
//   const totalPages = Math.ceil(courses.length / coursesPerPage);

//   const toggleClass = async (index, courseId) => {
//     const updatedClasses = [...isClassAdded];
//     updatedClasses[index] = !updatedClasses[index];
//     setIsClassAdded(updatedClasses);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error("You need to login first")
//         navigate('/login');
//         window.location.href = '/login';
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

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     // Optionally scroll to top when page changes
//     window.scrollTo(0, 0);
//   };

//   return (
//     <>
//       <CourseGrid>
//         {currentCourses.length > 0 ? (
//           currentCourses.map((course, index) => (
//             <CourseCard key={course.id}>
//               <Link to={`/course-info/${course.id}`}>
//                 <CourseImage
//                   src={`https://api.novajobs.us${course.course_banner_image}`}
//                   alt={course.course_title}
//                 />
//               </Link>
//               <CourseContent>
//                 <div className="product-content">
//                   <div className="course-group d-flex">
//                     <div className="course-group-img d-flex">
//                       <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
//                         <img
//                           src={`https://api.novajobs.us${course.trainer_photo}`}
//                           alt={course.trainer_first_name}
//                           className="img-fluid"
//                         />
//                       </Link>
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
//                       <Link to="#" onClick={() => toggleClass(index, course.id)}>
//                         <i className={`fa-regular fa-heart ${isClassAdded[index] ? 'color-active' : ''}`} />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 <Link to={`/course-info/${course.id}`}>
//                   <CourseTitle>{course.course_title}</CourseTitle>
//                 </Link>
//                 <CategoryName>{course.course_category_name}</CategoryName>
//                 <CourseStats>
//                   <StatItem>
//                     <img src={Icon1} alt="Duration" />
//                     <span>{course.time_spent_on_course}</span>
//                   </StatItem>
//                   <StatItem>
//                     <img src={Icon2} alt="Level" />
//                     <span>{course.course_level_name}</span>
//                   </StatItem>
//                 </CourseStats>
//                 <CoursePrice>
//                   ${course.after_discount_price}
//                   {course.discount_percent > 0 && (
//                     <span
//                       style={{
//                         textDecoration: "line-through",
//                         marginLeft: "0.5rem",
//                         color: "#666",
//                       }}
//                     >
//                       ${course.course_price}
//                     </span>
//                   )}
//                 </CoursePrice>
//               </CourseContent>
//             </CourseCard>
//           ))
//         ) : (
//           <p>No courses found.</p>
//         )}
//       </CourseGrid>
      
//       {totalPages > 1 && (
//         <PaginationContainer>
//           <PaginationButton 
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </PaginationButton>
          
//           {[...Array(totalPages)].map((_, index) => (
//             <PaginationButton
//               key={index + 1}
//               onClick={() => handlePageChange(index + 1)}
//               active={currentPage === index + 1}
//             >
//               {index + 1}
//             </PaginationButton>
//           ))}
          
//           <PaginationButton 
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </PaginationButton>
//         </PaginationContainer>
//       )}
//     </>
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
import { Icon1, Icon2 } from "../../../imagepath";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const CourseCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;

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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.h3`
  font-size: 1.1rem;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const CourseStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
  
  color: #666;
  margin-bottom: 1rem;
  border-bottom: 0.2px solid gray;
  padding-bottom: 0.5rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
    
    @media (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
    
    margin-right: 0.5rem;
  }
`;

const CoursePrice = styled.div`
  font-size: 1.1rem;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  
  font-weight: bold;
  color: #ff4081;
  margin-top: auto;
`;

const CategoryName = styled.p`
  font-size: 0.8rem;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
  
  color: #666;
  margin-bottom: 0.5rem;
`;

const InstructorSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const InstructorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const InstructorInfo = styled.div`
  h4 {
    font-size: 0.9rem;
    margin: 0;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
  
  p {
    font-size: 0.8rem;
    margin: 0;
    color: #666;
  }
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: #ff4081;
  }
  
  &.active {
    color: #ff4081;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: 1px solid #ddd;
  background-color: ${props => props.active ? '#ff4081' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.active ? '#ff4081' : '#f0f0f0'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const InnerPage = ({ courses = [] }) => {
  const [isClassAdded, setIsClassAdded] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;
  
  const navigate = useNavigate();

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const toggleClass = async (index, courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("You need to login first");
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
      toast.success('Course added to favorites!');
    } catch (error) {
      console.error('Failed to add course to favorites:', error);
      toast.error('Failed to add course to favorites. Please try again.');
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <CourseGrid>
        {currentCourses.length > 0 ? (
          currentCourses.map((course, index) => (
            <CourseCard key={course.id} className="mb-4">
              <Link to={`/course-info/${course.id}`}>
                <CourseImage
                  src={`https://api.novajobs.us${course.course_banner_image}`}
                  alt={course.course_title}
                  className="img-fluid"
                />
              </Link>
              <CourseContent>
                <InstructorSection>
                  <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
                    <InstructorImage
                      src={`https://api.novajobs.us${course.trainer_photo}`}
                      alt={course.trainer_first_name}
                      className="img-fluid"
                    />
                  </Link>
                  <InstructorInfo>
                    <h4>
                      <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                        {course.trainer_first_name} {course.trainer_last_name}
                      </Link>
                    </h4>
                    <p>Instructor</p>
                  </InstructorInfo>
                  <FavoriteButton
                    onClick={() => toggleClass(index, course.id)}
                    className={isClassAdded[index] ? 'active' : ''}
                  >
                    <i className="fa-regular fa-heart" />
                  </FavoriteButton>
                </InstructorSection>
                
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
                        fontSize: "0.9rem"
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
          <p className="text-center w-100">No courses found.</p>
        )}
      </CourseGrid>
      
      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationButton 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="d-none d-sm-block"
          >
            Previous
          </PaginationButton>
          
          {[...Array(totalPages)].map((_, index) => (
            <PaginationButton
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              active={currentPage === index + 1}
            >
              {index + 1}
            </PaginationButton>
          ))}
          
          <PaginationButton 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="d-none d-sm-block"
          >
            Next
          </PaginationButton>
        </PaginationContainer>
      )}
    </div>
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