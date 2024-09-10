import React from 'react';
import styled from 'styled-components';

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

const CourseProgressBar = ({ progress }) => {
  const progressPercentage = Math.round(progress * 100);

  return (
    <div>
      <ProgressBarContainer>
        <ProgressFill progress={progress} />
      </ProgressBarContainer>
      <ProgressText>{progressPercentage}% Completed</ProgressText>
    </div>
  );
};

export default CourseProgressBar;