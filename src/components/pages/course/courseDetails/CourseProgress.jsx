import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 15px 0;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 20px;
  background-color: #4caf50;
  border-radius: 10px;
  width: ${props => `${props.progress * 100}%`};
  transition: width 0.5s ease-in-out;
  position: relative;
`;

const Div = styled.div`
  position: relative;
`;

const FlagContainer = styled.div`
  position: absolute;
  right: 200px;
  top: -25px;
  cursor: pointer;

  .flag-icon {
    color:rgb(46, 96, 197);
    font-size: 20px;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  position: absolute;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  width: 200px;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
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
  const isEligibleForCertification = progressPercentage >= 70;

  return (
    loading ? <p>Loading progress...</p> :
      <Div className='relative'>
        <FlagContainer>
          <i className="fas fa-flag flag-icon"></i>
          <Tooltip className="tooltip">
            {isEligibleForCertification 
              ? "Congratulations! You've unlocked eligibility for the UltraAura Certification.Click the 'Take Final Test' button on the right to claim your achievement!"
              : "Carry on! Once you reach 70%, you'll be eligible for the UltraAura Certification."}
          </Tooltip>
        </FlagContainer>
        <ProgressBarContainer>
          <ProgressFill progress={progress} />
        </ProgressBarContainer>
        <ProgressText>{progressPercentage}% Completed</ProgressText>
      </Div>
  );
};

export default CourseProgressBar;