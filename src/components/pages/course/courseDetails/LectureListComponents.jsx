// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { Play, ChevronDown, ChevronUp, FileText, Link as LinkIcon } from 'lucide-react';
// import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const LectureList = styled.ul`
//   list-style-type: none;
//   padding: 1rem;
//   margin: 0;

//   @media (max-width: 768px) {
//     padding: 0.5rem;
//   }
// `;

// const LectureItem = styled.li`
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   margin-bottom: 4px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
//   overflow: hidden; 
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 768px) {
//     margin-bottom: 12px;
//   }
// `;

// const LectureHeader = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   padding: 6px;
//   cursor: pointer;
//   background-color: #ffffff;
//   border-bottom: 1px solid #e9ecef;

//   @media (max-width: 768px) {
//     padding: 12px;
//   }
// `;

// const LectureName = styled.p`
//   font-size: 18px;
//   font-weight: 500;
//   margin: 0;
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const StyledPlay = styled(Play)`
//   margin-right: 8px;
//   color: #007bff;

//   @media (max-width: 768px) {
//     margin-right: 6px;
//   }
// `;

// const PreviewButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 3px 6px;
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

//   @media (max-width: 768px) {
//     padding: 6px 12px;
//     font-size: 14px;
//   }
// `;

// const ExpandButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   padding: 0 2rem;
//   margin-left: 16px;
//   color: #6c757d;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #007bff;
//   }

//   @media (max-width: 768px) {
//     padding: 0 0.25rem;
//     margin-left: 2px;
//   }
// `;

// const ResourceList = styled.ul`
//   list-style-type: none;
//   padding: 16px;
//   margin: 0;
//   border-top: 1px solid #e9ecef;
//   background-color: #f8f9fa;

//   @media (max-width: 768px) {
//     padding: 12px;
//   }
// `;

// const ResourceItem = styled.li`
//   margin-bottom: 8px;

//   @media (max-width: 768px) {
//     margin-bottom: 6px;
//   }
// `;

// const ResourceLink = styled.a`
//   color: #28a745;
//   text-decoration: none;
//   display: inline-flex;
//   align-items: center;
//   padding: 0 2rem;

//   &:hover {
//     text-decoration: underline;
//   }

//   svg {
//     margin-right: 4px;
//   }

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;
// const LectureContent = styled.div`
//   padding: 16px;
//   background-color: #ffffff;
//   border-top: 1px solid #e9ecef;
//   height: 300px; // Set a fixed height
//   overflow-y: auto; // Enable vertical scrolling
//   scrollbar-width: thin; // For Firefox
//   scrollbar-color: #888 #f1f1f1; // For Firefox

//   /* Webkit browsers like Chrome/Safari */
//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #f1f1f1;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: #555;
//   }
// `;
// const LectureListComponent = ({ section, handlePreviewClick, handlePDFClick, loadingStates }) => {
//   const [expandedLectures, setExpandedLectures] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   const toggleLecture = (lectureId) => {
//     if (!isLoggedIn) {
//       toast.error("Please log in to access lecture content and resources");
//       navigate('/login');
//       return;
//     }
//     setExpandedLectures((prev) => ({
//       ...prev,
//       [lectureId]: !prev[lectureId],
//     }));
//   };

//   const renderLectureContent = (content) => {
//     return { __html: content };
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
//                     if (isLoggedIn) {
//                       handlePreviewClick(lecture, section.id);
//                     } else {
//                       toast.error("Please log in to preview this lecture.");
//                       navigate('/login');
//                     }
//                   }}
//                   disabled={loadingStates[lecture.id] || !isLoggedIn}
//                 >
//                   {loadingStates[lecture.id] ? 'Loading...' : 'Preview'}
//                 </PreviewButton>
//                 <ExpandButton>
//                   {expandedLectures[lecture.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//                 </ExpandButton>
//               </div>
//             </LectureHeader>
//             {expandedLectures[lecture.id] && (
//               <>
//                 {lecture.lecture_content && (
//                   <LectureContent dangerouslySetInnerHTML={renderLectureContent(lecture.lecture_content)} />
//                 )}
//                 {(lecture.lecture_resources_pdf || lecture.lecture_resources_link) && (
//                   <ResourceList>
//                     {lecture.lecture_resources_pdf &&
//                       lecture.lecture_resources_pdf.map((pdf, index) => (
//                         <ResourceItem key={`pdf-${index}`}>
//                           <ResourceLink onClick={() => handlePDFClick(`https://api.novajobs.us/${pdf}`)}>
//                             <FileText size={16} />
//                             PDF Resource {index + 1}
//                           </ResourceLink>
//                         </ResourceItem>
//                       ))}
//                     {lecture.lecture_resources_link &&
//                       lecture.lecture_resources_link.map((link, index) => (
//                         <ResourceItem key={`link-${index}`}>
//                           <ResourceLink href={link} target="_blank" rel="noopener noreferrer">
//                             <LinkIcon size={16} />
//                             External Resource {index + 1}
//                           </ResourceLink>
//                         </ResourceItem>
//                       ))}
//                   </ResourceList>
//                 )}
//               </>
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
//   section: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     lectures: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         lecture_name: PropTypes.string.isRequired,
//         lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
//         lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
//       })
//     ),
//   }).isRequired,
//   handlePreviewClick: PropTypes.func.isRequired,
//   handlePDFClick: PropTypes.func.isRequired,
//   loadingStates: PropTypes.objectOf(PropTypes.bool).isRequired,
// };

// export default LectureListComponent;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Play, ChevronDown, ChevronUp, FileText, Link as LinkIcon } from 'lucide-react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LectureList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const LectureItem = styled.li`
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
`;

const LectureHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  background-color: #ffffff;
  border-bottom: 1px solid #e9ecef;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const LectureName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledPlay = styled(Play)`
  margin-right: 0.75rem;
  color: #007bff;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

const PreviewButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
  color: #6c757d;
  transition: all 1s ease;

  &:hover {
    color: #007bff;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const ResourceList = styled.ul`
  list-style-type: none;
  padding: 1rem 1.5rem;
  margin: 0;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const ResourceItem = styled.li`
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const ResourceLink = styled.a`
  color: #28a745;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #e9ecef;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #dde2e6;
    color: #218838;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

// const LectureContent = styled.div`
//   padding: 1.5rem;
//   background-color: #ffffff;
//   border-top: 1px solid #e9ecef;
//   height: 300px;
//   overflow-y: auto;
//   scrollbar-width: thin;
//   scrollbar-color: #888 #f1f1f1;

//   &::-webkit-scrollbar {
//     width: 2px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #f1f1f1;
//     border-radius: 3px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 3px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background: #555;
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;
const LectureContent = styled.div`
  padding: 1.5rem;
  background-color: #ffffff;
  border-top: 1px solid #e9ecef;
  height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  &::-webkit-scrollbar {
    width: 1px; /* Decreased width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ExpandableContent = styled.div`
  max-height: ${props => (props.expanded ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 1s cubic-bezier(0.4, 0, 0.2, 1);
`;

const LectureListComponent = ({ section, handlePreviewClick, handlePDFClick, loadingStates }) => {
  const [expandedLectures, setExpandedLectures] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleLecture = (lectureId) => {
    if (!isLoggedIn) {
      toast.error("Please log in to access lecture content and resources");
      navigate('/login');
      return;
    }
    setExpandedLectures((prev) => ({
      ...prev,
      [lectureId]: !prev[lectureId],
    }));
  };

  const renderLectureContent = (content) => {
    return { __html: content };
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
                    if (isLoggedIn) {
                      handlePreviewClick(lecture, section.id);
                    } else {
                      toast.error("Please log in to preview this lecture.");
                      navigate('/login');
                    }
                  }}
                  disabled={!lecture.lecture_videos ||loadingStates[lecture.id] || !isLoggedIn}
                >
                  {loadingStates[lecture.id] ? 'Loading...' : 'Preview'}
                </PreviewButton>
                <ExpandButton>
                  {expandedLectures[lecture.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </ExpandButton>
              </div>
            </LectureHeader>
            <ExpandableContent expanded={expandedLectures[lecture.id]}>
              {lecture.lecture_content && (
                <LectureContent dangerouslySetInnerHTML={renderLectureContent(lecture.lecture_content)} />
              )}
              {(lecture.lecture_resources_pdf || lecture.lecture_resources_link) && (
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
            </ExpandableContent>
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