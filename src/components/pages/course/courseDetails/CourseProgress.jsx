import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 15px 0;
`;

const ProgressFill = styled.div`
  height: 20px;
  background-color: #4caf50;
  border-radius: 10px;
  width: ${props => `${props.progress * 100}%`};
  transition: width 0.5s ease-in-out;
`;

const ProgressText = styled.p`
  text-align: center;
  margin-top: 5px;
  font-weight: bold;
`;

const CourseProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const { courseid } = useParams();
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`https://api.novajobs.us/api/trainers/get-progrese-bar/${courseid}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        const { progress_percent = 0 } = res.data?.data || {};
        setProgress(progress_percent / 100);
      })
      .catch((err) => console.error('Error fetching progress:', err))
      .finally(() => setLoading(false));
    }, [courseid]);

  const progressPercentage = Math.round(progress * 100);

  return (
    loading ? <p>Loading progress...</p> : <div>
      <ProgressBarContainer>
        <ProgressFill progress={progress} />
      </ProgressBarContainer>
      <ProgressText>{progressPercentage}% Completed</ProgressText>
    </div>
  );
};

export default CourseProgressBar;