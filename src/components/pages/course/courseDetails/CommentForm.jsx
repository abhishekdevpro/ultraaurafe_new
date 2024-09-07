import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// CommentForm component
const CommentForm = ({ courseId }) => {
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    // Check if the user is logged in
    if (!token) {
      toast.error('You need to log in first.');
      navigate('/login'); // Redirect to the login screen
      return;
    }

    const commentData = {
      comment,
    };

    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/comment/${courseId}`,
        commentData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use Bearer token convention
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        toast.success('Comment posted successfully!');
        // Reset form field
        setComment('');
      } else {
        toast.error('Failed to post comment.');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      toast.error('An error occurred while posting your comment.');
    }
  };

  return (
    <div className="card p-4 shadow-lg rounded-lg bg-white">
      <h5 className="text-xl font-semibold mb-4">Post A Comment</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            rows={4}
            className="w-full p-2 border rounded-md"
            placeholder="Your Comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// PropTypes for validation
CommentForm.propTypes = {
  courseId: PropTypes.string.isRequired, // Ensure courseId is a required string
};

export default CommentForm;
