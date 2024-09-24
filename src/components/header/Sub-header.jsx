// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// // Define keyframes for scrolling effect
// const scroll = keyframes`
//   0% { transform: translateX(100%); }
//   100% { transform: translateX(-100%); }
// `;

// // Styled wrapper for the subheader
// const SubHeaderContainer = styled.div`
//   background-color: #004080; /* Dark blue background */
//   width: 100%;
//   overflow: hidden;
//   border-bottom: 2px solid #003366; /* Darker border */
//   padding: 10px 0;
//   color: white;
  
//   @media (max-width: 768px) {
//     padding: 8px 0;
//   }
//   @media (max-width: 480px) {
//     padding: 6px 0;
//   }
// `;

// // Styled inner div for scrolling text
// const ScrollText = styled.div`
//   display: inline-block;
//   white-space: nowrap;
//   animation: ${scroll} 30s linear infinite; /* Slower speed: 30s */
//   font-size: 18px;
//   font-weight: 500; /* Slightly bolder for better readability */
//   color: #ffffff; /* White text for contrast */
//   padding-left: 100%; /* To start scrolling from outside the viewport */
  
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
//   @media (max-width: 480px) {
//     font-size: 14px;
//   }
// `;

// // Content for the subheader
// const content = `
//   Update: Partners added - SCOPE - Empowering Citizens of South Florida... 
//   Innovative education and employment program for a stronger Hallandale Beach community. 
//   AGI Tax Experts - Launch your career with AGI Tax Experts! Comprehensive training and 
//   placement opportunities available through our portal.
// `;

// const SubHeader = () => {
//   return (
//     <SubHeaderContainer>
//       <ScrollText>{content}</ScrollText>
//     </SubHeaderContainer>
//   );
// };

// export default SubHeader;
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for scrolling effect
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// SubHeader container with a button on the left
const SubHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #e3f2fd, #fff); /* Optional background gradient */
  border-bottom: 1px solid #ddd;
  width: 100%;
  overflow: hidden;
  padding: 10px 0;

  @media (max-width: 768px) {
    padding: 8px 0;
  }

  @media (max-width: 480px) {
    padding: 6px 0;
  }
`;

// Styled button-like element for "News"
const NewsButton = styled.div`
  background-color: #004d40;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 4px 10px;
  }
`;

// Scrolling text style
const ScrollText = styled.div`
  white-space: nowrap;
  display: inline-block;
  animation: ${scroll} 60s linear infinite; /* Slow speed */
  font-size: 18px;
  color: #333;
  padding-left: 100%; /* Start from outside the screen */

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Content for the subheader
const content = `
  Update : Partners added - SCOPE - Empowering Citizens of South Florida... Innovative education and employment program for a stronger Hallandale Beach community.
  AGI Tax Experts - Launch your career with AGI Tax Experts! Comprehensive training and placement opportunities available through our portal.
`;

const SubHeader = () => {
  return (
    <SubHeaderContainer>
      <NewsButton>Updates</NewsButton>
      <ScrollText>{content}</ScrollText>
    </SubHeaderContainer>
  );
};

export default SubHeader;
