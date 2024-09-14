
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { Icon01, Icon02 } from "../imagepath";
// // // import OwlCarousel from "react-owl-carousel";
// // // import { toast } from "react-toastify";

// // // const FeaturedCourses = () => {
// // //   const [courses, setCourses] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isClassAdded, setIsClassAdded] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchCourses = async () => {
// // //       try {
// // //         const response = await axios.get("https://api.novajobs.us/api/trainers/all-courses");
// // //         console.log(response, "courses");
// // //         setCourses(response.data.data.slice(0, 3)); // Limit to 3 courses
// // //       } catch (error) {
// // //         console.error("Error fetching courses:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchCourses();
// // //   }, []);

// // //   if (loading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   const handleToggleFavorite = async (index, courseId) => {
// // //     const updatedClasses = [...isClassAdded];
// // //     updatedClasses[index] = !updatedClasses[index];
// // //     setIsClassAdded(updatedClasses);

// // //     try {
// // //       const token = localStorage.getItem('token');
// // //       await axios.post(
// // //         'https://api.novajobs.us/api/students/course-favorite',
// // //         { course_id: courseId },
// // //         {
// // //           headers: {
// // //             'Authorization': `${token}`,
// // //             'Content-Type': 'application/json',
// // //           }
// // //         }
// // //       );
// // //       toast.success('Course added to favorites!');
// // //     } catch (error) {
// // //       console.error('Failed to add course to favorites:', error);
// // //       navigate('/login');
// // //     }
// // //   };

// // //   const settings = {
// // //     loop: true,
// // //     margin: 10,
// // //     nav: true,
// // //     dots: true,
// // //     autoplay: true,
// // //     autoplayTimeout: 3000,
// // //     smartSpeed: 1000,
// // //     responsive: {
// // //       0: {
// // //         items: 1,
// // //       },
// // //       600: {
// // //         items: 2,
// // //       },
// // //       1000: {
// // //         items: 3,
// // //       },
// // //     },
// // //   };

// // //   return (
// // //     <section className="section new-course">
// // //       <div className="container">
// // //         <div className="section-header aos" data-aos="fade-up">
// // //           <div className="section-sub-head">
// // //             <h2>Explore courses as per your needs</h2>
// // //           </div>
// // //           <div className="all-btn all-category d-flex align-items-center">
// // //             <Link to="/course-list" className="btn btn-primary">
// // //               All Courses
// // //             </Link>
// // //           </div>
// // //         </div>
// // //         <div className="ss" data-aos="fade-up">
// // //           <p className="mb-0">
// // //             Gain practical, in-demand skills through online courses taught by industry experts. Enhance your career with real-world knowledge from leaders in the field.
// // //           </p>
// // //         </div>
// // //         <div className="course-feature">
// // //           <OwlCarousel {...settings} className="owl-carousel course-carousel owl-theme">
// // //             {courses.map((course, index) => (
// // //               <div key={course.id} className="course-box d-flex aos" data-aos="fade-up">
// // //                 <div className="product" style={{
// // //                   color: "white",
// // //                   background: "linear-gradient(135deg, blue, #feb47b)",
// // //                 }}>
// // //                   <div className="product-img text-white">
// // //                     <Link to={`/course-info/${course.id}`}>
// // //                       <img
// // //                         className="img-fluid"
// // //                         alt={course.course_title}
// // //                         style={{ height: "320px", width: "420px" }}
// // //                         src={`https://api.novajobs.us${course.course_banner_image}`}
// // //                       />
// // //                     </Link>
// // //                     <div className="price text-white">
// // //                       <h3>
// // //                         ${course.course_price}
// // //                         {course.after_discount_price > 0 && (
// // //                           <span>${course.after_discount_price}</span>
// // //                         )}
// // //                       </h3>
// // //                     </div>
// // //                   </div>
// // //                   <div className="product-content">
// // //                     <div className="course-group d-flex">
// // //                       <div className="course-group-img d-flex">
// // //                         <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
// // //                           <img
// // //                             src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
// // //                             alt={`${course.trainer_first_name} ${course.trainer_last_name}`}
// // //                             className="img-fluid"
// // //                           />
// // //                         </Link>
// // //                         <div className="course-name">
// // //                           <h4>
// // //                             <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
// // //                               {course.trainer_first_name || "john"} {course.trainer_last_name}
// // //                             </Link>
// // //                           </h4>
// // //                           <p style={{ color: "white" }}>Instructor</p>
// // //                         </div>
// // //                       </div>
// // //                       <div className="course-share d-flex align-items-center justify-content-center">
// // //                         <Link to="#" onClick={() => handleToggleFavorite(index, course.id)}>
// // //                           <i className={`fa-regular fa-heart ${isClassAdded[index] ? 'color-active' : ''}`} />
// // //                         </Link>
// // //                       </div>
// // //                     </div>
// // //                     <h3 className="title instructor-text">
// // //                       <Link to={`/course-info/${course.id}`} style={{ color: "white" }}>
// // //                         Course: {course.course_title}
// // //                       </Link>
// // //                     </h3>
// // //                     <p className="fs-6">Category: {course.course_category_name || "Science & Technology"}</p>
// // //                     <div className="course-info d-flex align-items-center">
// // //                       <div className="rating-img align-items-center">
// // //                         <img src={Icon01} alt="icon" style={{ height: "20px" }} />
// // //                         <p style={{ color: "white" }} className="d-flex">{course.students_counts} + Students</p>
// // //                       </div>
// // //                       <div className="course-view align-items-center">
// // //                         <img src={Icon02} alt="icon" style={{ height: "20px" }} />
// // //                         <p style={{ color: "white" }}>{course.time_spent_on_course}</p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="d-flex align-items-center justify-content-between">
// // //                       <span className="d-inline-block average-rating fs-6">
// // //                         <span className="fs-8" style={{ fontSize: "15px", color: "white" }}>
// // //                           Level: {course.course_level_name || "Professionals"}
// // //                         </span>
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </OwlCarousel>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default FeaturedCourses;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { Icon01, Icon02 } from "../imagepath"; // Assuming these icons are available

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 40px 20px;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 2rem;
//   flex-wrap: wrap;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   color: #333;
// `;

// const AllCoursesButton = styled(Link)`
//   background-color: #ff4081;
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 5px;
//   text-decoration: none;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #e63975;
//   }

//   @media (max-width: 768px) {
//     margin-top: 1rem;
//   }
// `;

// const CategoryFilter = styled.div`
//   display: flex;
//   overflow-x: auto;
//   margin-bottom: 2rem;
//   gap: 1rem;
//   padding-bottom: 0.5rem;

//   &::-webkit-scrollbar {
//     height: 4px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #ccc;
//     border-radius: 2px;
//   }
// `;

// const CategoryButton = styled.button`
//   padding: 0.5rem 1rem;
//   border: none;
//   background-color: ${props => props.active ? "#f0f0f0" : "transparent"};
//   border-radius: 5px;
//   cursor: pointer;
//   white-space: nowrap;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #e0e0e0;
//   }
// `;

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

// const InstructorAvatar = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-right: 1rem;
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

// const LevelFilter = styled(CategoryFilter)`
//   margin-top: 1rem;
// `;

// const LevelButton = styled(CategoryButton)``;

// const NoCoursesMessage = styled.div`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #ff4081;
//   margin-top: 2rem;
// `;

// const DynamicCourseGrid = () => {
//   const [courses, setCourses] = useState([]);
//   const [levels, setLevels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeLevel, setActiveLevel] = useState("ALL");
//   const [displayCount,] = useState(6); // State for limiting the number of displayed courses

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [coursesResponse, levelsResponse] = await Promise.all([
//           axios.get("https://api.novajobs.us/api/trainers/all-courses"),
//           axios.get("https://api.novajobs.us/api/trainers/course-level")
//         ]);
//         setCourses(coursesResponse.data.data);
//         setLevels(["ALL", ...levelsResponse.data.data.map(level => level.name)]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const normalizedActiveLevel = activeLevel.toLowerCase();

//   const filteredCourses = courses.filter(course => 
//     normalizedActiveLevel === "all" || course.course_level_name.toLowerCase() === normalizedActiveLevel
//   );

//   const limitedCourses = filteredCourses.slice(0, displayCount); // Slice the filtered courses array

//   if (loading) {
//     return <Container>Loading...</Container>;
//   }

//   return (
//     <>
//     <Container>
//       <Header>
//         <Title>Our Popular Online Courses</Title>
//         <AllCoursesButton to="/course-list">All Courses</AllCoursesButton>
//       </Header>

//       <LevelFilter>
//         {levels.map((course_level_name) => (
//           <LevelButton
//             key={course_level_name}
//             onClick={() => setActiveLevel(course_level_name)}
//             active={activeLevel === course_level_name}
//           >
//             {course_level_name}
//           </LevelButton>
//         ))}
//       </LevelFilter>

//       {limitedCourses.length === 0 ? (
//         <NoCoursesMessage>No courses available for this level.</NoCoursesMessage>
//       ) : (
//         <>
//           <CourseGrid>
//             {limitedCourses.map((course) => (
//               <CourseCard key={course.id}>
//                 <Link to={`/course-info/${course.id}`}>
//                 <CourseImage
//                   src={`https://api.novajobs.us${course.course_banner_image}`}
//                   alt={course.course_title}
//                 />
//                 </Link>
//                 <CourseContent>
//                   <InstructorInfo>
//                     <InstructorAvatar
//                       src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
//                       alt="Instructor"
//                     />
//                     <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
//                     <InstructorName>
//                       {course.trainer_first_name} {course.trainer_last_name}
//                     </InstructorName>
//                     </Link>
//                   </InstructorInfo>
//                   <Link to={`/course-info/${course.id}`}>
//                   <CourseTitle>{course.course_title}</CourseTitle>
//                   </Link>
//                   <CourseStats>
//                     <StatItem>
//                       <img src={Icon01} alt="Students" />
//                       <span>{course.students_counts} students</span>
//                     </StatItem>
//                     <StatItem>
//                       <img src={Icon02} alt="Duration" />
//                       <span>{course.time_spent_on_course}</span>
//                     </StatItem>
//                   </CourseStats>
//                   <CoursePrice>${course.course_price}</CoursePrice>
//                 </CourseContent>
//               </CourseCard>
//             ))}
//           </CourseGrid>
         
//         </>
//       )}
//     </Container>
   
//     </>
//   );
// };

// export default DynamicCourseGrid;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Icon01, Icon02 } from "../imagepath"; // Assuming these icons are available

// // Styled components remain unchanged

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 40px 20px;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 2rem;
//   flex-wrap: wrap;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   color: #333;
// `;

// const AllCoursesButton = styled(Link)`
//   background-color: #ff4081;
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 5px;
//   text-decoration: none;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #e63975;
//   }

//   @media (max-width: 768px) {
//     margin-top: 1rem;
//   }
// `;

// const CategoryFilter = styled.div`
//   display: flex;
//   overflow-x: auto;
//   margin-bottom: 2rem;
//   gap: 1rem;
//   padding-bottom: 0.5rem;

//   &::-webkit-scrollbar {
//     height: 4px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #ccc;
//     border-radius: 2px;
//   }
// `;

// const CategoryButton = styled.button`
//   padding: 0.5rem 1rem;
//   border: none;
//   background-color: ${props => props.active ? "#f0f0f0" : "transparent"};
//   border-radius: 5px;
//   cursor: pointer;
//   white-space: nowrap;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #e0e0e0;
//   }
// `;

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

// const InstructorAvatar = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-right: 1rem;
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

// const LevelFilter = styled(CategoryFilter)`
//   margin-top: 1rem;
// `;

// const LevelButton = styled(CategoryButton)``;

// const NoCoursesMessage = styled.div`
//   text-align: center;
//   font-size: 1.2rem;
//   color: #ff4081;
//   margin-top: 2rem;
// `;
// const AllCoursesButtonBottom = styled(AllCoursesButton)`
//   display: block;
//   margin: 2rem auto 0;
//   text-align: center;
// `;



// const DynamicCourseGrid = () => {
//   const [courses, setCourses] = useState([]);
//   const [levels, setLevels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeLevel, setActiveLevel] = useState("ALL");
//   const [displayCount,] = useState(6);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [coursesResponse, levelsResponse] = await Promise.all([
//           axios.get("https://api.novajobs.us/api/trainers/all-courses"),
//           axios.get("https://api.novajobs.us/api/trainers/course-level")
//         ]);
//         setCourses(coursesResponse.data.data);
//         setLevels([{ id: "ALL", name: "ALL" }, ...levelsResponse.data.data]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const normalizedActiveLevel = activeLevel.toLowerCase();

//   const filteredCourses = courses.filter(course => 
//     normalizedActiveLevel === "all" || course.course_level_name.toLowerCase() === normalizedActiveLevel
//   );

//   const limitedCourses = filteredCourses.slice(0, displayCount);

//   const handleAllCoursesClick = () => {
//     const selectedLevel = levels.find(level => level.name === activeLevel);
//     console.log(selectedLevel,selectedLevel.id,"levl");
//     if (selectedLevel && selectedLevel.id) {
//       navigate(`/course-list?course_level_id=${selectedLevel.id}`);
//     } else {
//       navigate("/course-list");
//     }
//   };

//   if (loading) {
//     return <Container>Loading...</Container>;
//   }

//   return (
//     <Container>
//       <Header>
//         <Title>Our Popular Online Courses</Title>
//         <AllCoursesButton onClick={handleAllCoursesClick}>All Courses</AllCoursesButton>
//       </Header>

//       <LevelFilter>
//         {levels.map((level) => (
//           <LevelButton
//             key={level.id}
//             onClick={() => setActiveLevel(level.name)}
//             active={activeLevel === level.name}
//           >
//             {level.name}
//           </LevelButton>
//         ))}
//       </LevelFilter>

//       {limitedCourses.length === 0 ? (
//         <NoCoursesMessage>No courses available for this level.</NoCoursesMessage>
//       ) : (
//         <>
//           <CourseGrid>
//             {limitedCourses.map((course) => (
//               <CourseCard key={course.id}>
//                 <Link to={`/course-info/${course.id}`}>
//                   <CourseImage
//                     src={`https://api.novajobs.us${course.course_banner_image}`}
//                     alt={course.course_title}
//                   />
//                 </Link>
//                 <CourseContent>
//                   <InstructorInfo>
//                     <InstructorAvatar
//                       src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
//                       alt="Instructor"
//                     />
//                     <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
//                       <InstructorName>
//                         {course.trainer_first_name} {course.trainer_last_name}
//                       </InstructorName>
//                     </Link>
//                   </InstructorInfo>
//                   <Link to={`/course-info/${course.id}`}>
//                     <CourseTitle>{course.course_title}</CourseTitle>
//                   </Link>
//                   <CourseStats>
//                     <StatItem>
//                       <img src={Icon01} alt="Students" />
//                       <span>{course.students_counts} students</span>
//                     </StatItem>
//                     <StatItem>
//                       <img src={Icon02} alt="Duration" />
//                       <span>{course.time_spent_on_course}</span>
//                     </StatItem>
//                   </CourseStats>
//                   <CoursePrice>${course.course_price}</CoursePrice>
//                 </CourseContent>
//               </CourseCard>
//             ))}
//           </CourseGrid>
//           <AllCoursesButtonBottom onClick={handleAllCoursesClick}>
//             All {activeLevel} Courses
//           </AllCoursesButtonBottom>
//         </>
//       )}
//     </Container>
//   );
// };

// export default DynamicCourseGrid;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Icon01, Icon02 } from "../imagepath"; // Assuming these icons are available

// // Styled components remain unchanged

// // Your existing styled components code...

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const AllCoursesButton = styled(Link)`
  background-color: #ff4081;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e63975;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const CategoryFilter = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 2rem;
  gap: 1rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 2px;
  }
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${props => props.active ? "#f0f0f0" : "transparent"};
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

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

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const InstructorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const InstructorName = styled.span`
  font-size: 0.9rem;
  color: #666;
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

const LevelFilter = styled(CategoryFilter)`
  margin-top: 1rem;
`;

const LevelButton = styled(CategoryButton)``;

const NoCoursesMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #ff4081;
  margin-top: 2rem;
`;
const AllCoursesButtonBottom = styled(AllCoursesButton)`
  display: block;
  width:100%;
  margin: 2rem auto 0;
  text-align: center;
`;

// const DynamicCourseGrid = () => {
//   const [courses, setCourses] = useState([]);
//   const [levels, setLevels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeLevel, setActiveLevel] = useState("ALL");
//   const [displayCount,] = useState(6);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [coursesResponse, levelsResponse] = await Promise.all([
//           axios.get("https://api.novajobs.us/api/trainers/all-courses"),
//           axios.get("https://api.novajobs.us/api/trainers/course-level")
//         ]);
//         setCourses(coursesResponse.data.data);
//         setLevels([{ id: "ALL", name: "ALL" }, ...levelsResponse.data.data]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const normalizedActiveLevel = activeLevel.toLowerCase();

//   const filteredCourses = courses.filter(course => 
//     normalizedActiveLevel === "all" || course.course_level_name.toLowerCase() === normalizedActiveLevel
//   );

//   const limitedCourses = filteredCourses.slice(0, displayCount);

//   // const handleAllCoursesClick = () => {
//   //   const selectedLevel = levels.find(level => level.name === activeLevel);
//   //   if (selectedLevel && selectedLevel.id !== "ALL") {
//   //     navigate(`/course-list?course_level_id=${selectedLevel.id}`);
//   //   } else {
//   //     navigate("/course-list");
//   //   }
//   // };
//   const handleAllCoursesClick = () => {
//     const selectedLevel = levels.find(level => level.name.trim() === activeLevel.trim());
//     console.log(selectedLevel,"lvl",selectedLevel.id);
//     if (selectedLevel ) {
//       console.log(selectedLevel && selectedLevel.id !== "ALL");
//       navigate(`/course-list?course_level_id=${selectedLevel.id}`);
//     } else {
//       navigate("/course-list");
//     }
//   };
  

//   if (loading) {
//     return <Container>Loading...</Container>;
//   }

//   return (
//     <Container>
//       <Header>
//         <Title>Our Popular Online Courses</Title>
//         <AllCoursesButton onClick={handleAllCoursesClick}>All Courses</AllCoursesButton>
//       </Header>

//       <LevelFilter>
//         {levels.map((level) => (
//           <LevelButton
//             key={level.id}
//             onClick={() => setActiveLevel(level.name)}
//             active={activeLevel === level.name}
//           >
//             {level.name}
//           </LevelButton>
//         ))}
//       </LevelFilter>

//       {limitedCourses.length === 0 ? (
//         <NoCoursesMessage>No courses available for this level.</NoCoursesMessage>
//       ) : (
//         <>
//           <CourseGrid>
//             {limitedCourses.map((course) => (
//               <CourseCard key={course.id}>
//                 <Link to={`/course-info/${course.id}`}>
//                   <CourseImage
//                     src={`https://api.novajobs.us${course.course_banner_image}`}
//                     alt={course.course_title}
//                   />
//                 </Link>
//                 <CourseContent>
//                   <InstructorInfo>
//                     <InstructorAvatar
//                       src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
//                       alt="Instructor"
//                     />
//                     <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
//                       <InstructorName>
//                         {course.trainer_first_name} {course.trainer_last_name}
//                       </InstructorName>
//                     </Link>
//                   </InstructorInfo>
//                   <Link to={`/course-info/${course.id}`}>
//                     <CourseTitle>{course.course_title}</CourseTitle>
//                   </Link>
//                   <CourseStats>
//                     <StatItem>
//                       <img src={Icon01} alt="Students" />
//                       <span>{course.students_counts} students</span>
//                     </StatItem>
//                     <StatItem>
//                       <img src={Icon02} alt="Duration" />
//                       <span>{course.time_spent_on_course}</span>
//                     </StatItem>
//                   </CourseStats>
//                   <CoursePrice>${course.course_price}</CoursePrice>
//                 </CourseContent>
//               </CourseCard>
//             ))}
//           </CourseGrid>
//           <AllCoursesButtonBottom 
//           onClick={handleAllCoursesClick}>
//             All {activeLevel} Courses
//           </AllCoursesButtonBottom>
//         </>
//       )}
//     </Container>
//   );
// };

// export default DynamicCourseGrid;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon01, Icon02 } from "../imagepath"; // Assuming these icons are available
import { toast } from "react-toastify";

// Styled components remain unchanged
// ... (all your styled components here)

const DynamicCourseGrid = () => {
  const [courses, setCourses] = useState([]);
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLevel, setActiveLevel] = useState("ALL");
  const [displayCount,] = useState(6);
  const [isClassAdded, setIsClassAdded] = useState([]);
  const {navigate} = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, levelsResponse] = await Promise.all([
          axios.get("https://api.novajobs.us/api/trainers/all-courses"),
          axios.get("https://api.novajobs.us/api/trainers/course-level")
        ]);
        setCourses(coursesResponse.data.data);
        setLevels([{ id: "ALL", name: "ALL" }, ...levelsResponse.data.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const normalizedActiveLevel = activeLevel.toLowerCase();

  const filteredCourses = courses.filter(course => 
    normalizedActiveLevel === "all" || course.course_level_name.toLowerCase() === normalizedActiveLevel
  );

  const limitedCourses = filteredCourses.slice(0, displayCount);

  // const handleAllCoursesClick = () => {
  //   console.log(levels)
  //   const selectedLevel = levels.find(level => level.name.toLowerCase().trim() === activeLevel.toLowerCase().trim());
  //   console.log(selectedLevel);
  //   if (selectedLevel && selectedLevel.id !== "ALL") {
  //     navigate(`/course-list?course_level_id=${selectedLevel.id}`);
  //     console.log(`localhost:3000/course-list?course_level_id=${selectedLevel.id}`)
  //   } else {
  //     navigate("/course-list");
  //   }
  // };
  // const handleAllCoursesClick = () => {
  //   console.log("Active Level:", activeLevel);
  //   console.log("Levels:", levels);

  //   const selectedLevel = levels.find(level => 
  //     level.name.toLowerCase().trim() === activeLevel.toLowerCase().trim()
  //   );

  //   console.log("Selected Level:", selectedLevel);

  //   if (selectedLevel) {
  //     if (selectedLevel.id !== "ALL") {
  //       const url = `/course-list?course_level_id=${selectedLevel.id}`;
  //       console.log("Navigating to:", url);
  //       navigate(url);
        // window.location.href = `/course-list?course_level_id=${selectedLevel.id}`;
  //     } else {
  //       console.log("Navigating to: /course-list");
  //       navigate("/course-list");
  //     }
  //   } else {
  //     console.log("No matching level found, navigating to: /course-list");
  //     navigate("/course-list");
  //   }
  // };
  const toggleClass = async (index, courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Please log in to add courses to favorites.")
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

const handleAllCoursesClick = () => {
  navigate('/course-list')
  const selectedLevel = levels.find(level =>
    level.name.toLowerCase().trim() === activeLevel.toLowerCase().trim()
  );
  console.log(selectedLevel);
  if (selectedLevel) {
    const url =
      selectedLevel.id !== "ALL"
        ? `/course-list?course_level_id=${selectedLevel.id}`
        : "/course-list";
    console.log(selectedLevel);
    console.log("Navigating to:", url);
    // navigate(url); // This should navigate correctly
    window.location.href = url;
    
  } else {
    console.log("No matching level found, navigating to: /course-list");
    navigate("/course-list");
  }
};

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Header>
        <Title>Our Popular Online Courses</Title>
        <AllCoursesButton to={'/course-list'}>All Courses</AllCoursesButton>
      </Header>

      <LevelFilter>
        {levels.map((level) => (
          <LevelButton
            key={level.id}
            onClick={() => setActiveLevel(level.name)}
            active={activeLevel === level.name}
          >
            {level.name}
          </LevelButton>
        ))}
      </LevelFilter>

      {limitedCourses.length === 0 ? (
        <NoCoursesMessage>No courses available for this level.</NoCoursesMessage>
      ) : (
        <>
          <CourseGrid>
            {limitedCourses.map((course) => (
              <CourseCard key={course.id}>
                <Link to={`/course-info/${course.id}`}>
                  <CourseImage
                    src={`https://api.novajobs.us${course.course_banner_image}`}
                    alt={course.course_title}
                  />
                </Link>
                <CourseContent>
                  <InstructorInfo>
                    <InstructorAvatar
                      src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                      alt="Instructor"
                    />
                    <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                      <InstructorName>
                        {course.trainer_first_name} {course.trainer_last_name}
                      </InstructorName>
                    </Link>
                    <div className="course-share d-flex align-items-center justify-content-center">
                                          <Link to="#" onClick={() => toggleClass(course.id)}>
                                            <i className={`fa-regular fa-heart ${isClassAdded[course.id] ? 'color-active' : ''}`} />
                                          </Link>
                                        </div>
                  </InstructorInfo>
                  <Link to={`/course-info/${course.id}`}>
                    <CourseTitle>{course.course_title}</CourseTitle>
                  </Link>
                  <CourseStats>
                    <StatItem>
                      <img src={Icon01} alt="Students" />
                      <span>{course.students_counts} students</span>
                    </StatItem>
                    <StatItem>
                      <img src={Icon02} alt="Duration" />
                      <span>{course.time_spent_on_course}</span>
                    </StatItem>
                  </CourseStats>
                  <CoursePrice>${course.course_price}</CoursePrice>
                </CourseContent>
              </CourseCard>
            ))}
          </CourseGrid>
          <AllCoursesButtonBottom onClick={handleAllCoursesClick}>
            {activeLevel=='ALL'? "All Courses" : `All ${activeLevel} Courses`}
          </AllCoursesButtonBottom>
        </>
      )}
    </Container>
  );
};

export default DynamicCourseGrid;