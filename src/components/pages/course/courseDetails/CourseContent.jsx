// // import React, { useState } from 'react';
// // import PropTypes from 'prop-types';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios'; // Import axios
// // import { Play } from '../../../imagepath';

// // const CourseContent = ({ courseData }) => {
// //   const [open, setOpen] = useState({});
// //   const [selectedLecture, setSelectedLecture] = useState(null);
// //   const [streamingUrl, setStreamingUrl] = useState(null);
// //   const [loading, setLoading] = useState(false); // Loading state for API request

// //   const toggleOpen = (sectionId) => {
// //     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
// //   };

// //   // Handle preview button click and fetch video using API
// //   const handlePreviewClick = async (lecture, sectionId) => {
// //     console.log(`Lecture: ${lecture.lecture_name}`);
// //     setSelectedLecture(lecture);

// //     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
// //       console.error('No videos available for this lecture');
// //       return;
// //     }

// //     try {
// //       setLoading(true); // Set loading state
// //       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
// //       console.log('Fetching Streaming URL:', streamingURL);

// //       // Fetch video data as binary (Blob)
// //       const response = await axios.get(streamingURL, {
// //         responseType: 'blob', // Ensure response is binary
// //       });

// //       // Convert binary data to a Blob URL
// //       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
// //       const videoUrl = URL.createObjectURL(videoBlob);

// //       setStreamingUrl(videoUrl); // Set the Blob URL to play video
// //       console.log('Video URL:', videoUrl);
// //     } catch (error) {
// //       console.error('Error fetching video:', error);
// //       alert('Unable to fetch video. Please try again later.');
// //     } finally {
// //       setLoading(false); // Reset loading state
// //     }
// //   };

// //   const closePreview = () => {
// //     setSelectedLecture(null);
// //     setStreamingUrl(null);
// //   };

// //   return (
// //     <div className="card content-sec">
// //       <div className="card-body">
// //         <div className="row">
// //           <div className="col-sm-6">
// //             <h5 className="subs-title">Course Content</h5>
// //           </div>
// //           <div className="col-sm-6 text-sm-end">
// //             <h6>{courseData.section_response.length} Sections</h6>
// //           </div>
// //         </div>
// //         {courseData.section_response.map((section) => (
// //           <div className="course-card" key={section.id}>
// //             <h6 className="cou-title">
// //               <Link
// //                 className={open[section.id] ? "" : "collapsed"}
// //                 onClick={() => toggleOpen(section.id)}
// //               >
// //                 {section.section_name}
// //               </Link>
// //             </h6>
// //             <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
// //               <ul>
// //                 {section.lectures && section.lectures.length > 0 ? (
// //                   section.lectures.map((lecture) => (
// //                     <li key={lecture.id}>
// //                       <p>
// //                         <img src={Play} alt="" className="me-2" />
// //                         {lecture.lecture_name}
// //                       </p>
// //                       <div>
// //                         <button onClick={() => handlePreviewClick(lecture, section.id)}>
// //                           {loading ? 'Loading...' : 'Preview'}
// //                         </button>
// //                         <span>02:53</span>
// //                       </div>
// //                     </li>
// //                   ))
// //                 ) : (
// //                   <li>No lectures available for this section.</li>
// //                 )}
// //               </ul>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {selectedLecture && streamingUrl && (
// //         <div className="preview-modal">
// //           <video
// //             src={streamingUrl}
// //             controls
// //             width="100%"
// //             height="500px"
// //             onError={() => console.error('Video failed to load.')}
// //           />
// //           <button onClick={closePreview}>Close Preview</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // CourseContent.propTypes = {
// //   courseData: PropTypes.shape({
// //     course_id: PropTypes.number.isRequired,
// //     section_response: PropTypes.arrayOf(
// //       PropTypes.shape({
// //         id: PropTypes.number.isRequired,
// //         section_name: PropTypes.string.isRequired,
// //         lectures: PropTypes.arrayOf(
// //           PropTypes.shape({
// //             id: PropTypes.number.isRequired,
// //             lecture_name: PropTypes.string.isRequired,
// //             lecture_videos: PropTypes.arrayOf(
// //               PropTypes.shape({
// //                 id: PropTypes.number,
// //               })
// //             )
// //           })
// //         )
// //       })
// //     ).isRequired
// //   }).isRequired
// // };

// // export default CourseContent;


// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Play } from '../../../imagepath';

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.7);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalContent = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   width: 95%;
//   max-width: 1200px;
//   height: 90vh;
//   max-height: 800px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
// `;

// const ModalHeader = styled.div`
//   padding: 16px;
//   background-color: #f8f9fa;
//   border-bottom: 1px solid #e9ecef;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const ModalTitle = styled.h4`
//   margin: 0;
//   font-size: 1.25rem;
//   color: #333;
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   color: #6c757d;
//   &:hover {
//     color: #343a40;
//   }
// `;

// const ModalBody = styled.div`
//   flex: 1;
//   overflow: auto;
//   padding: 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const VideoPlayer = styled.video`
//   width: 100%;
//   height: 100%;
//   max-height: calc(90vh - 100px);
//   object-fit: contain;
// `;

// const ErrorMessage = styled.div`
//   color: #721c24;
//   background-color: #f8d7da;
//   border: 1px solid #f5c6cb;
//   border-radius: 4px;
//   padding: 12px;
//   margin-bottom: 16px;
// `;

// const PreviewButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 8px 16px;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: #0056b3;
//   }

//   &:disabled {
//     background-color: #6c757d;
//     cursor: not-allowed;
//   }
// `;

// const CourseContent = ({ courseData }) => {
//   const [open, setOpen] = useState({});
//   const [selectedLecture, setSelectedLecture] = useState(null);
//   const [streamingUrl, setStreamingUrl] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [error, setError] = useState(null);

//   const toggleOpen = (sectionId) => {
//     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
//   };

//   const handlePreviewClick = async (lecture, sectionId) => {
//     console.log(`Lecture: ${lecture.lecture_name}`);
//     setSelectedLecture(lecture);
//     setError(null);

//     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
//       setError('No videos available for this lecture');
//       setShowModal(true);
//       return;
//     }

//     try {
//       setLoading(true);
//       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
//       console.log('Fetching Streaming URL:', streamingURL);

//       const response = await axios.get(streamingURL, {
//         responseType: 'blob',
//       });

//       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
//       const videoUrl = URL.createObjectURL(videoBlob);

//       setStreamingUrl(videoUrl);
//       console.log('Video URL:', videoUrl);
//       setShowModal(true);
//     } catch (error) {
//       console.error('Error fetching video:', error);
//       setError('Unable to fetch video. Please try again later.');
//       setShowModal(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const closePreview = () => {
//     setSelectedLecture(null);
//     setStreamingUrl(null);
//     setShowModal(false);
//     setError(null);
//   };

//   return (
//     <div className="card content-sec">
//       <div className="card-body">
//         <div className="row">
//           <div className="col-sm-6">
//             <h5 className="subs-title">Course Content</h5>
//           </div>
//           <div className="col-sm-6 text-sm-end">
//             <h6>{courseData.section_response.length} Sections</h6>
//           </div>
//         </div>
//         {courseData.section_response.map((section) => (
//           <div className="course-card" key={section.id}>
//             <h6 className="cou-title">
//               <Link
//                 className={open[section.id] ? "" : "collapsed"}
//                 onClick={() => toggleOpen(section.id)}
//               >
//                 {section.section_name}
//               </Link>
//             </h6>
//             <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
//               <ul>
//                 {section.lectures && section.lectures.length > 0 ? (
//                   section.lectures.map((lecture) => (
//                     <li key={lecture.id}>
//                       <p>
//                         <img src={Play} alt="" className="me-2" />
//                         {lecture.lecture_name}
//                       </p>
//                       <div>
//                         <PreviewButton onClick={() => handlePreviewClick(lecture, section.id)} disabled={loading}>
//                           {loading ? 'Loading...' : 'Preview'}
//                         </PreviewButton>
//                         <span>02:53</span>
//                       </div>
//                     </li>
//                   ))
//                 ) : (
//                   <li>No lectures available for this section.</li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* {showModal && (
//         <ModalOverlay onClick={closePreview}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <ModalHeader>
//               <ModalTitle>{selectedLecture?.lecture_name || 'Video Preview'}</ModalTitle>
//               <CloseButton onClick={closePreview}>&times;</CloseButton>
//             </ModalHeader>
//             <ModalBody>
//               {error ? (
//                 <ErrorMessage>{error}</ErrorMessage>
//               ) : streamingUrl ? (
//                 <VideoPlayer
//                   src={streamingUrl}
//                   controls
//                   autoPlay
//                   onError={() => setError('Video failed to load.')}
//                 />
//               ) : (
//                 <p>Loading video...</p>
//               )}
//             </ModalBody>
//           </ModalContent>
//         </ModalOverlay>
//       )} */}
      
//       {showModal && (
//         <ModalOverlay onClick={closePreview}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <ModalHeader>
//               <ModalTitle>{selectedLecture?.lecture_name || 'Video Preview'}</ModalTitle>
//               <CloseButton onClick={closePreview}>&times;</CloseButton>
//             </ModalHeader>
//             <ModalBody>
//               {error ? (
//                 <ErrorMessage>{error}</ErrorMessage>
//               ) : streamingUrl ? (
//                 <VideoPlayer
//                   src={streamingUrl}
//                   controls
//                   autoPlay
//                   onError={() => setError('Video failed to load.')}
//                 />
//               ) : (
//                 <p>Loading video...</p>
//               )}
//             </ModalBody>
//           </ModalContent>
//         </ModalOverlay>
// )}
//     </div>
//   );
// };

// CourseContent.propTypes = {
//   courseData: PropTypes.shape({
//     course_id: PropTypes.number.isRequired,
//     section_response: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         section_name: PropTypes.string.isRequired,
//         lectures: PropTypes.arrayOf(
//           PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             lecture_name: PropTypes.string.isRequired,
//             lecture_videos: PropTypes.arrayOf(
//               PropTypes.shape({
//                 id: PropTypes.number,
//               })
//             )
//           })
//         )
//       })
//     ).isRequired
//   }).isRequired
// };

// export default CourseContent;

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Play } from '../../../imagepath';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 95%;
  max-width: 1200px;
  height: 90vh;
  max-height: 800px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 16px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h4`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6c757d;
  &:hover {
    color: #343a40;
  }
`;

const ModalBody = styled.div`
  flex: 1;
  overflow: auto;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  max-height: calc(90vh - 100px);
  object-fit: contain;
`;

const ErrorMessage = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
`;

const PreviewButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

const CourseContent = ({ courseData }) => {
  const [open, setOpen] = useState({});
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [streamingUrl, setStreamingUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const toggleOpen = (sectionId) => {
    setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handlePreviewClick = async (lecture, sectionId) => {
    console.log(`Lecture: ${lecture.lecture_name}`);
    setSelectedLecture(lecture);
    setError(null);

    if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
      setError('No videos available for this lecture');
      setShowModal(true);
      return;
    }

    try {
      setLoading(true);
      const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
      console.log('Fetching Streaming URL:', streamingURL);

      const response = await axios.get(streamingURL, {
        responseType: 'blob',
      });

      const videoBlob = new Blob([response.data], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);

      setStreamingUrl(videoUrl);
      console.log('Video URL:', videoUrl);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching video:', error);
      setError('Unable to fetch video. Please try again later.');
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const closePreview = () => {
    setSelectedLecture(null);
    setStreamingUrl(null);
    setShowModal(false);
    setError(null);
  };

  return (
    <div className="card content-sec">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <h5 className="subs-title">Course Content</h5>
          </div>
          <div className="col-sm-6 text-sm-end">
            <h6>{courseData.section_response.length} Sections</h6>
          </div>
        </div>
        {courseData.section_response.map((section) => (
          <div className="course-card" key={section.id}>
            <h6 className="cou-title">
              <Link
                className={open[section.id] ? "" : "collapsed"}
                onClick={() => toggleOpen(section.id)}
              >
                {section.section_name}
              </Link>
            </h6>
            <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
              <ul>
                {section.lectures && section.lectures.length > 0 ? (
                  section.lectures.map((lecture) => (
                    <li key={lecture.id}>
                      <p>
                        <img src={Play} alt="" className="me-2" />
                        {lecture.lecture_name}
                      </p>
                      <div>
                        <PreviewButton onClick={() => handlePreviewClick(lecture, section.id)} disabled={loading}>
                          {loading ? 'Loading...' : 'Preview'}
                        </PreviewButton>
                        <span>02:53</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No lectures available for this section.</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={showModal} onClose={closePreview}>
        <ModalHeader>
          <ModalTitle>{selectedLecture?.lecture_name || 'Video Preview'}</ModalTitle>
          <CloseButton onClick={closePreview}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : streamingUrl ? (
            <VideoPlayer
              src={streamingUrl}
              controls
              autoPlay
              onError={() => setError('Video failed to load.')}
            />
          ) : (
            <p>Loading video...</p>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

CourseContent.propTypes = {
  courseData: PropTypes.shape({
    course_id: PropTypes.number.isRequired,
    section_response: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        section_name: PropTypes.string.isRequired,
        lectures: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            lecture_name: PropTypes.string.isRequired,
            lecture_videos: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.number,
              })
            ),
          })
        ),
      })
    ).isRequired,
  }).isRequired,
};

export default CourseContent;
