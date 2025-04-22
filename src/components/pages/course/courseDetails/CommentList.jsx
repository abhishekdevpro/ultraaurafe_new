import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

const CommentsList = ({ courseId, refreshTrigger }) => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRatings = async () => {
      setLoading(true);
      setError(null);

      if (!courseId) {
        setError('Invalid course ID');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://api.novajobs.us/api/students/ratings/${courseId}`);
        
        // Debugging: Log the API response
        console.log('API Response:', response);

        if (response.data.code === 200) {
          setRatings(response?.data?.data || []); // assuming response.data is the array of ratings
        } else {
          setError('Failed to load ratings');
        }
      } catch (error) {
        console.error('Error fetching ratings:', error);
        setError('An error occurred while fetching ratings');
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, [courseId, refreshTrigger]);

  if (loading) {
    return <Message>Loading ratings...</Message>;
  }

  if (error) {
    return <Message>{error}</Message>;
  }
console.log(ratings,"ratings");
  return (
    <CommentsContainer>
      <Title>Student Ratings</Title>
      <ScrollableContainer>
        {ratings?.length > 0 ? (
          ratings?.map((rating) => (
            <CommentCard key={rating.id}>
              <CommentHeader>
                <StudentName>{rating.student_first_name} {rating.student_last_name}</StudentName>
                <Stars>{'★'.repeat(rating.stars)}</Stars>
              </CommentHeader>
                <CommentDate>{new Date(rating.created_at).toLocaleDateString()}</CommentDate>
              <CommentText>{rating.content}</CommentText>
            </CommentCard>
          ))
        ) : (
          <Message>No ratings available.</Message>
        )}
      </ScrollableContainer>
    </CommentsContainer>
  );
};

// PropTypes for validation
CommentsList.propTypes = {
  courseId: PropTypes.string.isRequired,
  refreshTrigger: PropTypes.number,
};

export default CommentsList;

// Styled Components
const CommentsContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: #2c3e50;
  text-align: left;
  margin-bottom: 15px;
`;

const ScrollableContainer = styled.div`
  max-height: 400px;  /* Set a max height for the scroll area */
  overflow-y: auto;   /* Enable vertical scrolling */
  padding-right: 10px;
  scrollbar-width: thin;
  scrollbar-color: #888 #f0f0f0; /* Custom scrollbar color */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;

const CommentCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: start;
  gap:1rem;
  align-items: center;
  margin-bottom: 10px;
`;

const StudentName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
`;

const Stars = styled.span`
  color: #f39c12;
  font-size: 16px;
`;

const CommentDate = styled.span`
  font-size: 14px;
  color: #7f8c8d;
`;

const CommentText = styled.p`
  font-size: 16px;
  color: #34495e;
  margin-top: 5px;
`;

const Message = styled.div`
  font-size: 18px;
  color: #555;
  padding: 10px;
  text-align: center;
  background-color: #ecf0f1;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
