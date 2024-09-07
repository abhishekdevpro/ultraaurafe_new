import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CommentsList = ({ courseId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://api.novajobs.us/api/trainers/comment/${courseId}`);
        if (response.status === 200 && response.data.status === 'success') {
          setComments(response.data.data);
        } else {
          setError('Failed to load comments');
        }
      } catch (error) {
        setError('An error occurred while fetching comments');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [courseId]);

  if (loading) {
    return <Message>Loading comments...</Message>;
  }

  if (error) {
    return <Message>{error}</Message>;
  }

  return (
    <CommentsContainer>
      <Title>Comments</Title>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard key={comment.id}>
            <CommentText>{comment.comment}</CommentText>
            <CommentDate>{new Date(comment.created_at).toLocaleString()}</CommentDate>
          </CommentCard>
        ))
      ) : (
        <Message>No comments available.</Message>
      )}
    </CommentsContainer>
  );
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
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-align: left;
  margin-bottom: 20px;
  letter-spacing: 1.2px;
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

const CommentText = styled.p`
  font-size: 18px;
  color: #34495e;
  margin-bottom: 10px;
`;

const CommentDate = styled.span`
  font-size: 14px;
  color: #7f8c8d;
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
