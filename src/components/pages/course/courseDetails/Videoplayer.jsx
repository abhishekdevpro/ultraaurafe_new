import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  max-height: calc(90vh - 100px);
  object-fit: contain;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #e0e0e0;
  margin-top: 10px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #007bff;
  width: ${props => props.width}%;
`;

const VideoPlayer = ({ src, onTimeUpdate, initialTime }) => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current && initialTime) {
      videoRef.current.currentTime = initialTime;
    }
  }, [initialTime]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      onTimeUpdate(videoRef.current.currentTime);
    }
  };

  return (
    <VideoContainer>
      <StyledVideo
        ref={videoRef}
        src={src}
        controls
        onTimeUpdate={handleTimeUpdate}
      />
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
    </VideoContainer>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  initialTime: PropTypes.number,
};

export default VideoPlayer;