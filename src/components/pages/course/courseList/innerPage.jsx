import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Icon01, Icon02 } from "../../../imagepath";
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
// const CourseImage = styled.img`
//   width: 100%;
//   height: 150px;
//   // object-fit: contain;
//   border-radius: 10px;
//   transition: transform 0.3s;

//   ${CourseCard}:hover & {
//     transform: scale(1.05);
//   }
// `;
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

// const CategoryName = styled.p`
//   font-size: 0.9rem;
//   color: #666;
//   margin-bottom: 0.5rem;
// `;

// const FavoriteButton = styled.button`
//   background: none;
//   border: none;
//   color: #666;
//   cursor: pointer;
//   transition: color 0.3s;
//   margin-left: auto;

//   &:hover {
//     color: #ff4081;
//   }

//   &.active {
//     color: #ff4081;
//   }
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 2rem;
// `;

// const PaginationButton = styled.button`
//   background-color: ${(props) => (props.active ? "#ff4081" : "white")};
//   color: ${(props) => (props.active ? "white" : "#333")};
//   padding: 0.5rem 1rem;
//   border-radius: 5px;
//   text-decoration: none;
//   transition: background-color 0.3s;
//   margin: 0 0.5rem;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.active ? "#e63975" : "#e0e0e0")};
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

const InnerPage = ({
  courses = [],
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  const [isClassAdded, setIsClassAdded] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const toggleClass = async (courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[courseId] = !updatedClasses[courseId];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You need to login first");
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
          },
        }
      );
      toast.success("Course added to favorites!");
    } catch (error) {
      console.error("Failed to add course to favorites:", error);
      toast.error("Failed to add course to favorites. Please try again.");
    }
  };

  const handlePageChange = (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <Container>
        <CourseGrid>
          {courses.length > 0 ? (
            courses.map((course) => (
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
                    <Link
                      to={`/instructor/instructor-profile/${course.instructor_id}`}
                    >
                      {/* <InstructorAvatar
                        src={`https://api.novajobs.us${course.trainer_photo}`}
                        alt={course.trainer_first_name}
                      /> */}
                      <InstructorAvatar
                        src={
                          course.trainer_photo
                            ? `https://api.novajobs.us${course.trainer_photo}`
                            : "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                        }
                        alt="Instructor"
                      />
                    </Link>
                    <div>
                      <Link
                        to={`/instructor/instructor-profile/${course.trainer_id}`}
                      >
                        <InstructorName>
                          {course.trainer_display_name ||
                            `${course.trainer_first_name} ${course.trainer_last_name}`}
                        </InstructorName>
                      </Link>
                      <p className="text-muted">
                        {course.trainer_job_title || "Instructor"}
                      </p>
                    </div>
                    {/* <FavoriteButton
                      onClick={() => toggleClass(index, course.id)}
                      className={isClassAdded[index] ? "active" : ""}
                    >
                      <i className="fa-regular fa-heart" />
                    </FavoriteButton> */}
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
                  {/* <CategoryName>{course.course_category_name}</CategoryName> */}
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
                  {/* <CoursePrice>
                    <span className="discounted-price">${course.after_discount_price}</span>
                    {course.discount_percent > 0 && (
                      <span className="original-price">${course.course_price}</span>
                    )}
                  </CoursePrice> */}
                  <CoursePrice>
                    {/* <div>
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
                    )} */}
                  </CoursePrice>
                </CourseContent>
              </CourseCard>
            ))
          ) : (
            <p className="text-center w-100">No courses found.</p>
          )}
        </CourseGrid>

        {/* {totalPages > 1 && (
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
        )} */}
        <div className="card-footer">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {/* Previous Button */}
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
              </li>

              {/* First Page */}
              <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(1)}
                >
                  1
                </button>
              </li>

              {/* Show second page if necessary */}
              {currentPage > 3 && totalPages > 4 && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(2)}
                  >
                    2
                  </button>
                </li>
              )}

              {/* Dots if needed */}
              {currentPage > 4 && totalPages > 5 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}

              {/* Middle Pages */}
              {Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
                .filter((page) => page > 2 && page < totalPages - 1)
                .map((page) => (
                  <li
                    key={page}
                    className={`page-item ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </li>
                ))}

              {/* Dots before last pages if necessary */}
              {currentPage < totalPages - 3 && totalPages > 5 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}

              {/* Show last two pages */}
              {totalPages > 1 && (
                <>
                  {totalPages > 3 && (
                    <li
                      className={`page-item ${
                        currentPage === totalPages - 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(totalPages - 1)}
                      >
                        {totalPages - 1}
                      </button>
                    </li>
                  )}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </button>
                  </li>
                </>
              )}

              {/* Next Button */}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
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
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default InnerPage;
