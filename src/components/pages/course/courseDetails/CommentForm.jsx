
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Star } from 'lucide-react';

// Styled components
const Card = styled.div`
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: #ffffff;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  resize: none;
  font-size: 1rem;
  line-height: 1.5;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #1d4ed8;
  color: #ffffff;
  font-weight: 600;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StarIcon = styled(Star)`
  cursor: pointer;
  transition: color 0.2s;
  color: ${(props) => (props.filled ? '#FFD700' : '#ddd')};
`;

// CommentForm component
// const CommentForm = ({ courseId }) => {
//   const [comment, setComment] = useState('');
//   const [rating, setRating] = useState(0);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const token = localStorage.getItem('token');

//     if (!token) {
//       toast.error('You need to log in first.');
//       navigate('/login');
//       return;
//     }

//     const commentData = { comment };
//     const ratingData = { stars: rating, content: comment };

//     try {
//       const commentResponse = await axios.post(
//         `https://api.novajobs.us/api/trainers/comment/${courseId}`,
//         commentData,
//         {
//           headers: {
//             Authorization: `${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const ratingResponse = await axios.post(
//         `https://api.novajobs.us/api/students/ratings/${courseId}`,
//         ratingData,
//         {
//           headers: {
//             Authorization: `${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (commentResponse.status === 200 && ratingResponse.status === 200) {
//         toast.success('Comment and rating posted successfully!');
//         setComment('');
//         setRating(0);
//       } else {
//         toast.error('Failed to post comment and rating.');
//       }
//     } catch (error) {
//       console.error('Error posting comment and rating:', error);
//       toast.error('An error occurred while posting your comment and rating.');
//     }
//   };

//   return (
//     <Card>
//       <Title>Post A Comment and Rating</Title>
//       <form onSubmit={handleSubmit}>
//         <StarRating>
//           {[1, 2, 3, 4, 5].map((star) => (
//             <StarIcon
//               key={star}
//               size={24}
//               filled={star <= rating}
//               onClick={() => setRating(star)}
//             />
//           ))}
//         </StarRating>
//         <div style={{ marginBottom: '1rem' }}>
//           <TextArea
//             rows={4}
//             placeholder="Your Comments"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             required
//           />
//         </div>
//         <SubmitButton type="submit">Submit</SubmitButton>
//       </form>
//     </Card>
//   );
// };
const CommentForm = ({ courseId }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      toast.error('You need to log in first.');
      navigate('/login');
      return;
    }

    // Combine comment and rating data
    const data = {
      stars: rating,
      content: comment,
    };

    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/students/ratings/${courseId}`,
        data,
        {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        toast.success('Comment and rating posted successfully!');
        setComment('');
        setRating(0);
      } else {
        toast.error('Failed to post comment and rating.');
      }
    } catch (error) {
      console.error('Error posting comment and rating:', error);
      toast.error('An error occurred while posting your comment and rating.');
    }
  };

  return (
    <Card>
      <Title>Post A Comment and Rating</Title>
      <form onSubmit={handleSubmit}>
        <StarRating>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              size={24}
              filled={star <= rating}
              onClick={() => setRating(star)}
            />
          ))}
        </StarRating>
        <div style={{ marginBottom: '1rem' }}>
          <TextArea
            rows={4}
            placeholder="Your Comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Card>
  );
};



// PropTypes for validation
CommentForm.propTypes = {
  courseId: PropTypes.string.isRequired,
};

export default CommentForm;