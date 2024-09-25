
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { X } from 'lucide-react';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const SubHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #e3f2fd, #fff);
  border-bottom: 1px solid #ddd;
  width: 100%;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

const NewsButton = styled.div`
  background-color: #00897b;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 30px; /* Rounded look */
  margin-right: 30px; /* Added more space between the button and text */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d40;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

const ScrollWrapper = styled.div`
  flex: 1;
  overflow: hidden; /* Ensures the text stays within the container */
`;

const ScrollText = styled.div`
  white-space: nowrap;
  display: inline-block;
  animation: ${scroll} 60s linear infinite;
  font-size: 18px;
  color: #333;

  ${({ isPaused }) =>
    isPaused &&
    css`
      animation-play-state: paused;
    `}

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  background: #f44336;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 50%;
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #d32f2f;
    transform: translateY(-50%) scale(1.1);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const content = `
  Update : Partners added - SCOPE - Empowering Citizens of South Florida... Innovative education and employment program for a stronger Hallandale Beach community ||
  AGI Tax Experts - Launch your career with AGI Tax Experts! Comprehensive training and placement opportunities available through our portal.
`;

const SubHeader = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <SubHeaderContainer>
      <NewsButton>Updates</NewsButton>
      <ScrollWrapper>
        <ScrollText
          isPaused={isPaused}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {content}
        </ScrollText>
      </ScrollWrapper>
      <CloseButton onClick={() => setIsVisible(false)}>
        <X size={20} />
      </CloseButton>
    </SubHeaderContainer>
  );
};

export default SubHeader;
