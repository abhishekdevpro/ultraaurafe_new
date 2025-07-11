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

const CourseImage = styled.img`
  width: 100%;
  height: 250px;
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

const DescriptionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-size: 1.5rem;
`;

const ModalDescription = styled.div`
  line-height: 1.6;
  color: #666;
  font-size: 1rem;
`;

const InnerPage = ({
  courses = [],
  currentPage = 1,
  totalRecords = 0,
  pageSize = 8,
  onPageChange,
}) => {
  const [isClassAdded, setIsClassAdded] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const totalPages = Math.ceil(totalRecords / pageSize);

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
    onPageChange(pageNumber);
    window.scrollTo(0, 0);
  };

  const openDescriptionModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeDescriptionModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
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
                      course.photo_url ||
                      "https://via.placeholder.com/300x150?text=No+Image"
                    }
                    alt={course.name || "Course"}
                  />
                </Link>
                <CourseContent>
                  <InstructorInfo>
                    <InstructorAvatar
                      src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                      alt="Partner Course"
                    />
                    <div>
                      <InstructorName>by Industry Expert</InstructorName>
                      <p className="text-muted">External Platform</p>
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

                  <Link
                    to={course.slug || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CourseTitle>
                      {course.name || "Untitled Course"}
                    </CourseTitle>
                  </Link>
                  {/* <CategoryName>{course.course_category_name}</CategoryName> */}
                  <CourseStats>
                    <StatItem>
                      <img src={Icon01} alt="Level" />
                      <span>{course.level || "N/A"}</span>
                    </StatItem>
                    <StatItem>
                      <img src={Icon02} alt="Duration" />
                      <span>{course.workload || "N/A"}</span>
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
                      <span className="discounted-price">Free Course</span>
                    </div>
                    {/* <span className="course-discount">Partner Course</span> */}
                  </CoursePrice>

                  <DescriptionButton
                    onClick={() => openDescriptionModal(course)}
                  >
                    View Description
                  </DescriptionButton>
                </CourseContent>
              </CourseCard>
            ))
          ) : (
            <p className="text-center w-100">No courses found.</p>
          )}
        </CourseGrid>

        {/* Description Modal */}
        {isModalOpen && selectedCourse && (
          <Modal onClick={closeDescriptionModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeDescriptionModal}>&times;</CloseButton>
              <ModalTitle>
                {selectedCourse.name || "Course Description"}
              </ModalTitle>
              <ModalDescription>
                {selectedCourse.description ||
                  selectedCourse.course_description ||
                  "No description available for this course."}
              </ModalDescription>
            </ModalContent>
          </Modal>
        )}

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
  totalRecords: PropTypes.number,
  pageSize: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default InnerPage;
