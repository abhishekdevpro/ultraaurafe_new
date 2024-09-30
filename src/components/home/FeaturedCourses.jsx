
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
  .discounted-price {
    font-size: 1.5rem;
    color: #ff4d4f;
    font-weight: bold;
    margin-right: 10px;
  }
  
  .original-price {
    font-size: 1.2rem;
    color: #999;
    text-decoration: line-through;
  }
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Icon01, Icon02 } from "../imagepath";
// import { toast } from "react-toastify";


// const DynamicCourseGrid = () => {
//   const [courses, setCourses] = useState([]);
//   const [levels, setLevels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeLevel, setActiveLevel] = useState("ALL");
//   const [displayCount,] = useState(6);
//   const [isClassAdded, setIsClassAdded] = useState([]);
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

//   const toggleClass = async (index, courseId) => {
//     const updatedClasses = [...isClassAdded];
//     updatedClasses[index] = !updatedClasses[index];
//     setIsClassAdded(updatedClasses);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error("Please log in to add courses to favorites.")
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

//   const handleAllCoursesClick = () => {
//     const selectedLevel = levels.find(level =>
//       level.name.toLowerCase().trim() === activeLevel.toLowerCase().trim()
//     );

//     console.log("Selected level:", selectedLevel);

//     let url = "/course-list";
//     if (selectedLevel && selectedLevel.id !== "ALL") {
//       url += `?course_level_id=${selectedLevel.id}`;
//     }

//     console.log("Navigating to:", url);
//     navigate(url);
//   };

//   if (loading) {
//     return <Container>Loading...</Container>;
//   }

//   return (
//     <Container>
//       <Header>
//         <Title>Our Popular Online Courses</Title>
//         <AllCoursesButton to={'/course-list'}>All Courses</AllCoursesButton>
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
//                     <div className="course-share d-flex align-items-center justify-content-center">
//                       <Link to="#" onClick={() => toggleClass(course.id)}>
//                         <i className={`fa-regular fa-heart ${isClassAdded[course.id] ? 'color-active' : ''}`} />
//                       </Link>
//                     </div>
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
//                   <CoursePrice>
//     <span className="discounted-price">${course.after_discount_price}</span>
//     <span className="original-price">${course.course_price}</span>
//   </CoursePrice>
//                 </CourseContent>
//               </CourseCard>
//             ))}
//           </CourseGrid>
//           <AllCoursesButtonBottom onClick={handleAllCoursesClick}>
//             {activeLevel === 'ALL' ? "All Courses" : `All ${activeLevel} Courses`}
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
import { Icon01, Icon02 } from "../imagepath";
import { toast } from "react-toastify";

const DynamicCourseGrid = () => {
  const [courses, setCourses] = useState([]);
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLevel, setActiveLevel] = useState("ALL");
  const [displayCount] = useState(6);
  const [isClassAdded, setIsClassAdded] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, levelsResponse] = await Promise.all([
          axios.get("https://api.novajobs.us/api/trainers/all-courses"),
          axios.get("https://api.novajobs.us/api/trainers/course-level"),
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

  const filteredCourses = courses.filter(
    (course) =>
      normalizedActiveLevel === "all" ||
      course.course_level_name.toLowerCase() === normalizedActiveLevel
  );

  const limitedCourses = filteredCourses.slice(0, displayCount);

  const toggleClass = async (index, courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please log in to add courses to favorites.");
        navigate("/login");
        return;
      }
      await axios.post(
        "https://api.novajobs.us/api/students/course-favorite",
        { course_id: courseId },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          }
        }
      );
      toast.success("Course added to favorites!");
    } catch (error) {
      console.error("Failed to add course to favorites:", error);
      toast.error("Failed to add course to favorites. Please try again.");
    }
  };

  // const handleAllCoursesClick = () => {
  //   const selectedLevel = levels.find(
  //     (level) => level.name.toLowerCase().trim() === activeLevel.toLowerCase().trim()
  //   );

  //   let url = "/course-list";
  //   if (selectedLevel && selectedLevel.id !== "ALL") {
  //     url += `?course_level_id=${selectedLevel.id}`;
  //   }

  //   navigate(url); // Navigate to the course-list page with parameters
  // };
  const handleAllCoursesClick = () => {
    const selectedLevel = levels.find(level =>
      level.name.toLowerCase().trim() === activeLevel.toLowerCase().trim()
    );
  
    const queryParams = new URLSearchParams();
    
    if (selectedLevel && selectedLevel.id !== "ALL") {
      queryParams.append("course_level_id", selectedLevel.id);
    }
  
    const queryString = queryParams.toString();
    const url = queryString ? `/course-list?${queryString}` : "/course-list";
  
    console.log("Navigating to:", url);
    navigate(url);
  };
  

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Header>
        <Title>Our Popular Online Courses</Title>
        <AllCoursesButton to={"/course-list"}>All Courses</AllCoursesButton>
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
                        <i
                          className={`fa-regular fa-heart ${
                            isClassAdded[course.id] ? "color-active" : ""
                          }`}
                        />
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
                  <CoursePrice>
                    <span className="discounted-price">
                      ${course.after_discount_price}
                    </span>
                    <span className="original-price">
                      ${course.course_price}
                    </span>
                  </CoursePrice>
                </CourseContent>
              </CourseCard>
            ))}
          </CourseGrid>
          <AllCoursesButtonBottom onClick={handleAllCoursesClick}>
            {activeLevel === "ALL" ? "All Courses" : `All ${activeLevel} Courses`}
          </AllCoursesButtonBottom>
        </>
      )}
    </Container>
  );
};

export default DynamicCourseGrid;
