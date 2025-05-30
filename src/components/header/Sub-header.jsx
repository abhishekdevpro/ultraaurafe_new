// import React, { useState } from "react";
// import styled, { keyframes, css } from "styled-components";
// import { X } from "lucide-react";

// const scroll = keyframes`
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-100%); }
// `;

// const SubHeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   background: linear-gradient(to right, #e3f2fd, #fff);
//   border-bottom: 1px solid #ddd;
//   width: 100%;
//   overflow: hidden;
//   padding: 10px 20px;
//   position: relative;

//   @media (max-width: 768px) {
//     padding: 8px 16px;
//   }

//   @media (max-width: 480px) {
//     padding: 6px 12px;
//   }
// `;

// const NewsButton = styled.div`
//   background-color: #00897b;
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
//   padding: 10px 20px;
//   border-radius: 30px; /* Rounded look */
//   margin-right: 30px; /* Added more space between the button and text */
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #004d40;
//   }

//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 16px;
//   }

//   @media (max-width: 480px) {
//     font-size: 12px;
//     padding: 6px 12px;
//   }
// `;

// const ScrollWrapper = styled.div`
//   flex: 1;
//   overflow: hidden; /* Ensures the text stays within the container */
// `;

// const ScrollText = styled.div`
//   white-space: nowrap;
//   display: inline-block;
//   animation: ${scroll} 60s linear infinite;
//   font-size: 18px;
//   color: #333;

//   ${({ isPaused }) =>
//     isPaused &&
//     css`
//       animation-play-state: paused;
//     `}

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }

//   @media (max-width: 480px) {
//     font-size: 14px;
//   }
// `;

// const CloseButton = styled.button`
//   background: #f44336;
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   right: 20px;
//   top: 50%;
//   transform: translateY(-50%);
//   padding: 10px;
//   border-radius: 50%;
//   color: white;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
//   transition: background-color 0.3s ease, transform 0.2s ease;

//   &:hover {
//     background-color: #d32f2f;
//     transform: translateY(-50%) scale(1.1);
//   }

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* Media queries for responsiveness */
//   @media (max-width: 768px) {
//     right: 15px; /* Adjust position on medium screens */
//     padding: 8px; /* Reduce padding on smaller screens */
//     top: 45%; /* Adjust top positioning */
//   }

//   @media (max-width: 480px) {
//     display: none; /* Hide the button on small screens */
//   }
// `;

// const content = `
//   Update : Partners added - SCOPE - Empowering Citizens of South Florida... Innovative education and employment program for a stronger Hallandale Beach community ||
//   AGI Tax Experts - Launch your career with AGI Tax Experts! Comprehensive training and placement opportunities available through our portal.
// `;

// const SubHeader = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   if (!isVisible) return null;

//   return (
//     <SubHeaderContainer>
//       <NewsButton>Updates</NewsButton>
//       <ScrollWrapper>
//         <ScrollText
//           isPaused={isPaused}
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {content}
//         </ScrollText>
//       </ScrollWrapper>
//       <CloseButton onClick={() => setIsVisible(false)}>
//         <X size={20} />
//       </CloseButton>
//     </SubHeaderContainer>
//   );
// };

// export default SubHeader;
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { X, Megaphone } from "lucide-react";

// Scroll animation
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// Container with glassmorphism effect
const SubHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #e3f2fd, #fff);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 24px;
  position: relative;
  overflow: hidden;
  z-index: 10;
`;

// Modern pill-style update tag
const NewsButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #00695c;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-right: 20px;
  white-space: nowrap;

  svg {
    width: 18px;
    height: 18px;
  }
`;

// Wrapper to contain the animated text
const ScrollWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

// The scrolling content
const ScrollText = styled.div`
  display: inline-block;
  white-space: nowrap;
  font-size: 16px;
  color: #333;
  animation: ${scroll} 40s linear infinite;

  ${({ isPaused }) =>
    isPaused &&
    css`
      animation-play-state: paused;
    `}
`;

// Dismiss button
const CloseButton = styled.button`
  background: #ef5350;
  border: none;
  color: white;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #d32f2f;
    transform: translateY(-50%) scale(1.05);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const content = `
🚀 SCOPE: Empowering South Florida citizens with cutting-edge education & employment tools. ||
🧾 AGI Tax Experts: Launch your tax career – training + guaranteed placement now open!
`;

const SubHeader = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <SubHeaderContainer>
      <NewsButton>
        <Megaphone /> Updates
      </NewsButton>
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
        <X size={18} />
      </CloseButton>
    </SubHeaderContainer>
  );
};

export default SubHeader;
