
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Icon1, Icon2 } from "../../../imagepath";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #f8f9fa;
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

// const CourseCard = styled.div`
//   background-color: white;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s, box-shadow 0.3s;
//   border: 2px solid #f0f0f0;
//   padding: 0.8rem;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
//     border-color: #ff4081;
//   }
// `;

// const CourseImage = styled.img`
//   width: 100%;
//   height: 180px;
//   object-fit: contain;
//   border-radius: 10px;
//   transition: transform 0.3s;

//   ${CourseCard}:hover & {
//     transform: scale(1.05);
//   }
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
  height: 130px;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.3s;

  ${CourseCard}:hover & {
    transform: scale(1.05);
  }
`;
const CourseContent = styled.div`
  padding: 0.5rem;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: #f9f9f9;
  padding: 0.5rem 0.5rem;
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

const CourseTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;

  &:hover {
    color: #ff4081;
  }
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

// const CoursePrice = styled.div`
//   display: flex;
//   align-items: center;

//   .discounted-price {
//     font-size: 1.5rem;
//     color: #ff4d4f;
//     font-weight: bold;
//     margin-right: 10px;
//   }

//   .original-price {
//     font-size: 1.2rem;
//     color: #999;
//     text-decoration: line-through;
//   }
// `;
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

const CategoryName = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  transition: color 0.3s;
  margin-left: auto;
  
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
`;

const PaginationButton = styled.button`
  background-color: ${props => props.active ? '#ff4081' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  margin: 0 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.active ? '#e63975' : '#e0e0e0'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
    <Wrapper>
      <Container>
        <CourseGrid>
          {currentCourses.length > 0 ? (
            currentCourses.map((course, index) => (
              <CourseCard key={course.id}>
               
                <Link to={`/course-info/${course.id}`}>
                  <CourseImage
                    src={`https://api.novajobs.us${course.course_banner_image}`}
                    alt={course.course_title}
                  />
                </Link>
                <CourseContent>
                  <InstructorInfo>
                    <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
                      <InstructorAvatar
                        src={`https://api.novajobs.us${course.trainer_photo}`}
                        alt={course.trainer_first_name}
                      />
                    </Link>
                    <div>
                      <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                        <InstructorName>
                          {course.trainer_first_name} {course.trainer_last_name}
                        </InstructorName>
                      </Link>
                      <p className="text-muted">Instructor</p>
                    </div>
                    <FavoriteButton
                      onClick={() => toggleClass(index, course.id)}
                      className={isClassAdded[index] ? 'active' : ''}
                    >
                      <i className="fa-regular fa-heart" />
                    </FavoriteButton>
                  </InstructorInfo>
                  
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
                  {/* <CoursePrice>
                    <span className="discounted-price">${course.after_discount_price}</span>
                    {course.discount_percent > 0 && (
                      <span className="original-price">${course.course_price}</span>
                    )}
                  </CoursePrice> */}
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
            >
              Next
            </PaginationButton>
          </PaginationContainer>
        )}
      </Container>
    </Wrapper>
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