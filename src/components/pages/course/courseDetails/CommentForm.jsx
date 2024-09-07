import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        toast.success('Comment posted successfully!');
        // Reset form field
        setComment('');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      toast.error('Failed to post comment.');
    }
  };

  return (
    <div className="card comment-sec">
      <div className="card-body">
        <h5 className="subs-title">Post A Comment</h5>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <textarea
              rows={4}
              className="form-control"
              placeholder="Your Comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div className="submit-section">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
