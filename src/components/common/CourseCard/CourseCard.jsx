import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Icon01, Icon02 } from "../../imagepath";
// import { Icon01, Icon02 } from "../../../imagepath";

// Styled components
const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 1px solid #eef0f2;
  padding: 0.75rem;
  position: relative;
  margin: 10px;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
    border-color: #ff4081;
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.4s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  ${Card}:hover & {
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
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
  line-height: 1.4;
  transition: color 0.3s ease;

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

const StartButtonWrapper = styled.div`
  margin-top: 1rem;
  padding: 0 0.5rem;
`;

const StartButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: linear-gradient(135deg, #ff4081 0%, #e63975 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(230, 57, 117, 0.4);
    background: linear-gradient(135deg, #e63975 0%, #ff4081 100%);
  }
  
  i {
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: translateX(5px);
  }
`;

const CoursePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .discounted-price {
    font-size: 1.5rem;
    color: #ff4d4f;
    font-weight: bold;
    margin-right: 10px;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
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
const CourseType = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background: #e63975;
  padding: 2px 8px;
  border-radius: 6px;
  //   margin-bottom: 10px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const CourseCard = ({
  course,
  onFavoriteToggle,
  isFavorite,
  token,
  isStartButton = false,
}) => {
  const navigate = useNavigate();
  return (
    <Card>
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
          <Link to={`/instructor/instructor-profile/${course.instructor_id}`}>
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
            <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
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
            <Link to="#" onClick={() => onFavoriteToggle(course.id)}>
              <i
                className={`fa-regular fa-heart ${
                  isFavorite && token ? "color-active" : ""
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
            <span className="original-price">${course.course_price}</span>
          </div>
          {course.discount_percent > 0 && (
            <span className="course-discount">
              {course.discount_percent}% OFF
            </span>
          )}
          {course.course_plan_type_name && (
            <CourseType>{course.course_plan_type_name}</CourseType>
          )}
        </CoursePrice>
        
      </CourseContent>
      {isStartButton && (
        <StartButtonWrapper>
          <StartButton
            onClick={() => navigate(`/course-info/${course.id}`)}
          >
            <span>Start Lesson</span>
            <i className="fas fa-arrow-right"></i>
          </StartButton>
        </StartButtonWrapper>
      )}
    </Card>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    course_banner_image: PropTypes.string.isRequired,
    course_title: PropTypes.string.isRequired,
    instructor_id: PropTypes.number,
    trainer_id: PropTypes.number,
    trainer_photo: PropTypes.string,
    trainer_display_name: PropTypes.string,
    trainer_first_name: PropTypes.string,
    trainer_last_name: PropTypes.string,
    trainer_job_title: PropTypes.string,
    students_counts: PropTypes.number,
    time_spent_on_course: PropTypes.string,
    after_discount_price: PropTypes.number,
    course_price: PropTypes.number,
    discount_percent: PropTypes.number,
    course_plan_type_name: PropTypes.string,
    
  }).isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  token: PropTypes.string,
  isStartButton: PropTypes.bool,
};

export default CourseCard;
