import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon01, Icon02 } from "../imagepath";
import banner from "../../assets/img/bg-banner-02.png";
import { toast } from "react-toastify";
import FullPageLoader from "./FullPageLoader";
// import FullPageLoader from "./FullPageLoader";

// Container styling for center alignment and padding
const Wrapper = styled.div`
  background-image: url(${banner});
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// Header styling with responsive adjustments
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

// Title styling
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

// Styled button for "All Courses" with hover effects
const AllCoursesButton = styled(Link)`
  background-color: #ff4081;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e63975;
    color: white;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

// Filter for course levels with a scrollable style
const LevelFilter = styled.div`
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

const LevelButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) => (props.active ? "#ff4081" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Course grid layout for responsiveness
const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`;

// Course card with improved hover and scale effects
// const CourseCard = styled.div`
//   background-color: white;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s, box-shadow 0.3s;
//   border: 2px solid #f0f0f0;
//   padding: 0.5rem;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
//     border-color: #ff4081;
//   }
// `;

// // Course image with hover zoom effect
// const CourseImage = styled.img`
//   width: 100%;
//   height: 130px;
//   object-fit: contain;
//   border-radius: 10px;
//   transition: transform 0.3s;

//   ${CourseCard}:hover & {
//     transform: scale(1.05);
//   }
// `;
// const ClaimCoupon = styled.div`
//    position: absolute;
//   top: 10px;
//   left: 10px;
//   background-color: rgba(34, 197, 94, 0.9); /* Green background with opacity */
//   color: white;
//   padding: 5px 10px;
//   border-radius: 5px;
//   font-size: 0.875rem;
//   cursor: pointer;

// `;
const CourseCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 2px solid #f0f0f0;
  padding: 0.5rem;
  position: relative; /* Ensure ClaimCoupon positions relative to the CourseCard */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    border-color: #ff4081;
  }
`;

// ClaimCoupon positioned over the image with enhanced styling
// const ClaimCoupon = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   background-color: rgba(34, 197, 94, 0.9); /* Green background with slight opacity */
//   color: white;
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 0.875rem;
//   cursor: pointer;
//   font-weight: bold;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   transition: background-color 0.3s, transform 0.3s;
//   z-index:999;

//   &:hover {
//     background-color: rgba(34, 197, 94, 1); /* Slightly darker green on hover */
//     transform: scale(1.05);
//   }
// `;

// Course image with hover zoom effect
const CourseImage = styled.img`
  width: 100%;
  height: 150px;
  /* object-fit: contain; */
  border-radius: 10px;
  transition: transform 0.3s;

  ${CourseCard}:hover & {
    transform: scale(1.05);
  }
`;
// Course content styling
const CourseContent = styled.div`
  padding: 1rem 1.5rem;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  background: #f9f9f9;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InstructorAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
  border: 2px solid #ddd;
`;

const InstructorName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

// Course title with hover effect
const CourseTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
  padding:0.2rem

  &:hover {
    color: #ff4081;
  }
`;

// Course stats styling
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

// Pricing section with styling
const CoursePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

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

  .course-discount {
    font-size: 1rem;
    color: #007bff;
    background-color: #e6f7ff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      background-color: #bae7ff;
      color: #0056b3;
    }
  }
`;

const NoCoursesMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #ff4081;
  margin-top: 2rem;
`;

// Bottom button styling for better UX
const AllCoursesButtonBottom = styled(AllCoursesButton)`
  display: block;
  width: 100%;
  margin: 2rem auto 0;
  text-align: center;
`;

const DynamicCourseGrid = () => {
  // State and data fetching code remains the same...
  const [courses, setCourses] = useState([]);
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLevel, setActiveLevel] = useState("ALL");
  const [displayCount] = useState(6);
  const [isClassAdded, setIsClassAdded] = useState([]);
  // const [showLoader, setShowLoader] = useState(false)
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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

  const toggleClass = async (courseId) => {
    if (!localStorage.getItem("token")) {
      toast.error("You need to login first.");
      navigate("/login");
      return;
    }

    const token = localStorage.getItem("token");

    const updatedFavorites = { ...isClassAdded };
    const isFavorite = updatedFavorites[courseId];

    updatedFavorites[courseId] = !isFavorite; // Toggle state
    setIsClassAdded(updatedFavorites);

    try {
      if (isFavorite) {
        // Remove from favorites
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
        toast.success("Course removed from favorites!");
      } else {
        // Add to favorites
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
        toast.success("Course added to favorites!");
      }
    } catch (error) {
      console.error("Failed to update course favorites:", error);
      toast.error("Something went wrong. Please try again.");
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
    const selectedLevel = levels.find(
      (level) =>
        level.name.toLowerCase().trim() === activeLevel.toLowerCase().trim()
    );

    const queryParams = new URLSearchParams();

    if (selectedLevel && selectedLevel.id !== "ALL") {
      queryParams.append("course_level_id", selectedLevel.id);
    }

    const queryString = queryParams.toString();
    const url = queryString ? `/course-list?${queryString}` : "/course-list";

    console.log("Navigating to:", url);
    window.location.href = url;
  };

  if (loading) {
    return (
      <Container>
        <FullPageLoader />
      </Container>
    );
  }
  // const handleClick = ()=>{
  //   setShowLoader(true);
  //   setTimeout(() => {
  //     navigate("/course-list"); // Navigate after 3 seconds
  //   }, 3000);
  // }

  return (
    <>
      {/* {showLoader && <FullPageLoader />} */}
      <Wrapper>
        <Container>
          <Header>
            <Title>
              <span className="courses">Our Popular Online Courses</span>
            </Title>
            <div className="d-flex justify-content-end items-center gap-2">
              <AllCoursesButton to={"/course-list"}>
                All Courses
              </AllCoursesButton>
              <AllCoursesButton to={"/partners-course-list"}>
                Partner Courses
              </AllCoursesButton>
            </div>
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
            <NoCoursesMessage>
              No courses available for this level.
            </NoCoursesMessage>
          ) : (
            <>
              <CourseGrid>
                {limitedCourses.map((course) => (
                  <CourseCard key={course.id}>
                    <Link to={`/course-info/${course.id}`}>
                      <CourseImage
                        src={
                          course.course_banner_image.startsWith("https")
                            ? course.course_banner_image
                            : `https://api.novajobs.us${course.course_banner_image}`
                        }
                        alt={course.course_title}
                      />
                    </Link>
                    <CourseContent>
                      <InstructorInfo>
                        <InstructorAvatar
                          src={
                            course.trainer_photo
                              ? `https://api.novajobs.us${course.trainer_photo}`
                              : "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                          }
                          alt="Instructor"
                        />
                        <div>
                          <Link
                            to={`/instructor/instructor-profile/${course.trainer_id}`}
                          >
                            {/* <InstructorName>
                            {course.trainer_first_name}{" "}
                            {course.trainer_last_name}
                          </InstructorName> */}
                            <InstructorName>
                              {course.trainer_display_name ||
                                `${course.trainer_first_name} ${course.trainer_last_name}`}
                            </InstructorName>
                          </Link>
                          <p className="text-muted">
                            {course.trainer_job_title || "Instructor"}
                          </p>
                        </div>
                        <div className="course-share d-flex align-items-center justify-content-center">
                          <Link to="#" onClick={() => toggleClass(course.id)}>
                            <i
                              className={`fa-regular fa-heart ${
                                isClassAdded[course.id] && token
                                  ? "color-active"
                                  : ""
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
                        <div>
                          <span className="discounted-price">
                            ${course.after_discount_price}
                          </span>
                          <span className="original-price">
                            ${course.course_price}
                          </span>
                        </div>
                        {course.discount_percent > 0 && (
                          <span className="course-discount">
                            {course.discount_percent}% OFF
                          </span>
                        )}
                      </CoursePrice>
                    </CourseContent>
                  </CourseCard>
                ))}
              </CourseGrid>
              <AllCoursesButtonBottom onClick={handleAllCoursesClick}>
                {activeLevel === "ALL"
                  ? "All Courses"
                  : `All ${activeLevel} Courses`}
              </AllCoursesButtonBottom>
            </>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default DynamicCourseGrid;
