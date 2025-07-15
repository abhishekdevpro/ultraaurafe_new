import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 10px;

  /* Webkit browsers (Chrome, Safari, newer versions of Opera) */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  /* Show scrollbar on hover for Firefox */
  &:hover {
    scrollbar-width: thin;
  }
`;

const CourseDescriptionWrapper = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: white !important;
  margin-bottom: 20px;
  max-height: ${({ isExpanded }) => (isExpanded ? "none" : "130px")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  /* Apply white color to all child elements */
  * {
    color: white !important;
  }

  p {
    margin-bottom: 15px;
  }

  ul,
  ol {
    padding-left: 20px;
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 5px;
  }

  strong {
    font-weight: 600;
  }
`;

const ReadMoreButton = styled.span`
  cursor: pointer;
  color: #007bff;
  display: inline-block;
  margin-top: 10px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  background-color: #28a745;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  margin-left: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
    color: white;
    text-decoration: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CourseDescription = ({ description, slug }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <DescriptionContainer>
        <CourseDescriptionWrapper isExpanded={isExpanded}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CourseDescriptionWrapper>
      </DescriptionContainer>
      <ButtonContainer>
        <ReadMoreButton onClick={toggleExpand}>
          {isExpanded ? "Read Less" : "Read More"}
        </ReadMoreButton>
        {slug && (
          <ApplyButton href={slug} target="_blank" rel="noopener noreferrer">
            Apply
          </ApplyButton>
        )}
      </ButtonContainer>
    </>
  );
};

CourseDescription.propTypes = {
  description: PropTypes.string.isRequired,
  slug: PropTypes.string,
};

export default CourseDescription;
