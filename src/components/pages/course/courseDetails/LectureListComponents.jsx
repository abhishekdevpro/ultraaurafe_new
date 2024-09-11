
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Play, ChevronDown, ChevronUp, FileText, Link as LinkIcon } from 'lucide-react';
// import PropTypes from 'prop-type';
// const LectureList = styled.ul`
//   list-style-type: none;
//   padding: 1rem;
//   margin: 0;
// `;

// const LectureItem = styled.li`
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   margin-bottom: 16px;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//   transition: all 0.3s ease;
//   overflow: hidden; /* Hide overflow to keep content neat */
//   display:flex;
//   flex-direction:column;
// `;

// const LectureHeader = styled.div`
//   display: flex;
//   width:100%;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px;
//   cursor: pointer;
//   background-color: #ffffff; /* Background for header */
//   border-bottom: 1px solid #e9ecef; /* Bottom border to separate header and content */
// `;

// const LectureName = styled.p`
//   font-size: 18px;
//   font-weight: 500;
//   margin: 0;
//   display: flex;
//   align-items: center;
// `;

// const StyledPlay = styled(Play)`
//   margin-right: 8px;
//   color: #007bff;
// `;

// const PreviewButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 8px 16px;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }

//   &:disabled {
//     background-color: #6c757d;
//     cursor: not-allowed;
//   }
// `;

// const ExpandButton = styled.button`
//   background: none;
//   border:2px solid red;
//   border: none;
//   cursor: pointer;
//   padding: 0 2rem ;
//   margin-left: 16px;
//   color: #6c757d;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #007bff;
//   }
// `;

// const ResourceList = styled.ul`
//   list-style-type: none;
//   padding: 16px;
//   margin: 0;
//   border-top: 1px solid #e9ecef;
//   background-color: #f8f9fa; /* Background color for resources */
// `;

// const ResourceItem = styled.li`
//   margin-bottom: 8px;
// `;

// const ResourceLink = styled.a`
//   color: #28a745;
//   text-decoration: none;
//   display: inline-flex;
//   align-items: center;

//   &:hover {
//     text-decoration: underline;
//   }

//   svg {
//     margin-right: 4px;
//   }
// `;

// const LectureListComponent = ({ section, handlePreviewClick, handlePDFClick, loadingStates }) => {
//   const [expandedLectures, setExpandedLectures] = useState({});
// console.log(section);
//   const toggleLecture = (lectureId) => {
//     setExpandedLectures(prev => ({
//       ...prev,
//       [lectureId]: !prev[lectureId]
//     }));
//   };

//   return (
//     <LectureList>
//       {section.lectures && section.lectures.length > 0 ? (
//         section.lectures.map((lecture) => (
//           <LectureItem key={lecture.id}>
//             <LectureHeader onClick={() => toggleLecture(lecture.id)}>
//               <LectureName>
//                 <StyledPlay size={20} />
//                 {lecture.lecture_name}
//               </LectureName>
//               <div>
//                 <PreviewButton
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handlePreviewClick(lecture, section.id);
//                   }}
//                   disabled={loadingStates[lecture.id]}
//                 >
//                   {loadingStates[lecture.id] ? 'Loading...' : 'Preview'}
//                 </PreviewButton>
//                 <ExpandButton>
//                   {expandedLectures[lecture.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//                 </ExpandButton>
//               </div>
//             </LectureHeader>
//             {expandedLectures[lecture.id] && (lecture.lecture_resources_pdf || lecture.lecture_resources_link) && (
//               <ResourceList>
//                 {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.map((pdf, index) => (
//                   <ResourceItem key={`pdf-${index}`}>
//                     <ResourceLink onClick={() => handlePDFClick(`https://api.novajobs.us/${pdf}`)}>
//                       <FileText size={16} />
//                       PDF Resource {index + 1}
//                     </ResourceLink>
//                   </ResourceItem>
//                 ))}
//                 {lecture.lecture_resources_link && lecture.lecture_resources_link.map((link, index) => (
//                   <ResourceItem key={`link-${index}`}>
//                     <ResourceLink href={link} target="_blank" rel="noopener noreferrer">
//                       <LinkIcon size={16} />
//                       External Resource {index + 1}
//                     </ResourceLink>
//                   </ResourceItem>
//                 ))}
//               </ResourceList>
//             )}
//           </LectureItem>
//         ))
//       ) : (
//         <LectureItem>
//           <LectureHeader>No lectures available for this section.</LectureHeader>
//         </LectureItem>
//       )}
//     </LectureList>
//   );
// };
// LectureListComponent.propTypes = {
//     section: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       lectures: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         lecture_name: PropTypes.string.isRequired,
//         lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
//         lecture_resources_link: PropTypes.arrayOf(PropTypes.string)
//       }))
//     }).isRequired,
//     handlePreviewClick: PropTypes.func.isRequired,
//     handlePDFClick: PropTypes.func.isRequired,
//     loadingStates: PropTypes.objectOf(PropTypes.bool).isRequired
//   };
// export default LectureListComponent;
import React, { useState } from 'react';
import styled from 'styled-components';
import { Play, ChevronDown, ChevronUp, FileText, Link as LinkIcon } from 'lucide-react';
import PropTypes from 'prop-types';

const LectureList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const LectureItem = styled.li`
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden; 
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const LectureHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: #ffffff;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const LectureName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledPlay = styled(Play)`
  margin-right: 8px;
  color: #007bff;

  @media (max-width: 768px) {
    margin-right: 6px;
  }
`;

const PreviewButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 2rem;
  margin-left: 16px;
  color: #6c757d;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    padding: 0 0.25rem;
    margin-left: 2px;
  }
`;

const ResourceList = styled.ul`
  list-style-type: none;
  padding: 16px;
  margin: 0;
  border-top: 1px solid #e9ecef;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const ResourceItem = styled.li`
  margin-bottom: 8px;

  @media (max-width: 768px) {
    margin-bottom: 6px;
  }
`;

const ResourceLink = styled.a`
  color: #28a745;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 0 2rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 4px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LectureListComponent = ({ section, handlePreviewClick, handlePDFClick, loadingStates }) => {
  const [expandedLectures, setExpandedLectures] = useState({});

  const toggleLecture = (lectureId) => {
    setExpandedLectures((prev) => ({
      ...prev,
      [lectureId]: !prev[lectureId],
    }));
  };

  return (
    <LectureList>
      {section.lectures && section.lectures.length > 0 ? (
        section.lectures.map((lecture) => (
          <LectureItem key={lecture.id}>
            <LectureHeader onClick={() => toggleLecture(lecture.id)}>
              <LectureName>
                <StyledPlay size={20} />
                {lecture.lecture_name}
              </LectureName>
              <div>
                <PreviewButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePreviewClick(lecture, section.id);
                  }}
                  disabled={loadingStates[lecture.id]}
                >
                  {loadingStates[lecture.id] ? 'Loading...' : 'Preview'}
                </PreviewButton>
                <ExpandButton>
                  {expandedLectures[lecture.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </ExpandButton>
              </div>
            </LectureHeader>
            {expandedLectures[lecture.id] && (lecture.lecture_resources_pdf || lecture.lecture_resources_link) && (
              <ResourceList>
                {lecture.lecture_resources_pdf &&
                  lecture.lecture_resources_pdf.map((pdf, index) => (
                    <ResourceItem key={`pdf-${index}`}>
                      <ResourceLink onClick={() => handlePDFClick(`https://api.novajobs.us/${pdf}`)}>
                        <FileText size={16} />
                        PDF Resource {index + 1}
                      </ResourceLink>
                    </ResourceItem>
                  ))}
                {lecture.lecture_resources_link &&
                  lecture.lecture_resources_link.map((link, index) => (
                    <ResourceItem key={`link-${index}`}>
                      <ResourceLink href={link} target="_blank" rel="noopener noreferrer">
                        <LinkIcon size={16} />
                        External Resource {index + 1}
                      </ResourceLink>
                    </ResourceItem>
                  ))}
              </ResourceList>
            )}
          </LectureItem>
        ))
      ) : (
        <LectureItem>
          <LectureHeader>No lectures available for this section.</LectureHeader>
        </LectureItem>
      )}
    </LectureList>
  );
};

LectureListComponent.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lectures: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        lecture_name: PropTypes.string.isRequired,
        lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
        lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
  handlePreviewClick: PropTypes.func.isRequired,
  handlePDFClick: PropTypes.func.isRequired,
  loadingStates: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default LectureListComponent;
