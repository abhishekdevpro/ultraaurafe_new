
// // // // import React, { useState, useEffect } from 'react';
// // // // import ReactDOM from 'react-dom';
// // // // import PropTypes from 'prop-types';
// // // // import { Link } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import styled from 'styled-components';
// // // // import { Play } from '../../../imagepath';

// // // // const ModalOverlay = styled.div`
// // // //   position: fixed;
// // // //   top: 0;
// // // //   left: 0;
// // // //   right: 0;
// // // //   bottom: 0;
// // // //   background-color: rgba(0, 0, 0, 0.7);
// // // //   display: flex;
// // // //   justify-content: center;
// // // //   align-items: center;
// // // //   z-index: 9999;
// // // // `;

// // // // const ModalContent = styled.div`
// // // //   background-color: #fff;
// // // //   border-radius: 8px;
// // // //   width: 95%;
// // // //   max-width: 1200px;
// // // //   height: 90vh;
// // // //   max-height: 800px;
// // // //   overflow: hidden;
// // // //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// // // //   display: flex;
// // // //   flex-direction: column;
// // // // `;

// // // // const ModalHeader = styled.div`
// // // //   padding: 16px;
// // // //   background-color: #f8f9fa;
// // // //   border-bottom: 1px solid #e9ecef;
// // // //   display: flex;
// // // //   justify-content: space-between;
// // // //   align-items: center;
// // // // `;

// // // // const ModalTitle = styled.h4`
// // // //   margin: 0;
// // // //   font-size: 1.25rem;
// // // //   color: #333;
// // // // `;

// // // // const CloseButton = styled.button`
// // // //   background: none;
// // // //   border: none;
// // // //   font-size: 1.5rem;
// // // //   cursor: pointer;
// // // //   color: #6c757d;
// // // //   &:hover {
// // // //     color: #343a40;
// // // //   }
// // // // `;

// // // // const ModalBody = styled.div`
// // // //   flex: 1;
// // // //   overflow: auto;
// // // //   padding: 16px;
// // // //   display: flex;
// // // //   justify-content: center;
// // // //   align-items: center;
// // // // `;

// // // // const VideoPlayer = styled.video`
// // // //   width: 100%;
// // // //   height: 100%;
// // // //   max-height: calc(90vh - 100px);
// // // //   object-fit: contain;
// // // // `;

// // // // const ErrorMessage = styled.div`
// // // //   color: #721c24;
// // // //   background-color: #f8d7da;
// // // //   border: 1px solid #f5c6cb;
// // // //   border-radius: 4px;
// // // //   padding: 12px;
// // // //   margin-bottom: 16px;
// // // // `;

// // // // const PreviewButton = styled.button`
// // // //   background-color: #007bff;
// // // //   color: white;
// // // //   border: none;
// // // //   padding: 8px 16px;
// // // //   border-radius: 4px;
// // // //   cursor: pointer;
// // // //   transition: background-color 0.2s;

// // // //   &:hover {
// // // //     background-color: #0056b3;
// // // //   }

// // // //   &:disabled {
// // // //     background-color: #6c757d;
// // // //     cursor: not-allowed;
// // // //   }
// // // // `;

// // // // const Modal = ({ isOpen, onClose, children }) => {
// // // //   if (!isOpen) return null;

// // // //   return ReactDOM.createPortal(
// // // //     <ModalOverlay onClick={onClose}>
// // // //       <ModalContent onClick={(e) => e.stopPropagation()}>
// // // //         {children}
// // // //       </ModalContent>
// // // //     </ModalOverlay>,
// // // //     document.body
// // // //   );
// // // // };

// // // // Modal.propTypes = {
// // // //   isOpen: PropTypes.bool.isRequired,
// // // //   onClose: PropTypes.func.isRequired,
// // // //   children: PropTypes.node.isRequired,
// // // // };

// // // // const CourseContent = ({ courseData }) => {
// // // //   const [open, setOpen] = useState({});
// // // //   const [selectedLecture, setSelectedLecture] = useState(null);
// // // //   const [streamingUrl, setStreamingUrl] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     if (showModal) {
// // // //       document.body.style.overflow = 'hidden';
// // // //     } else {
// // // //       document.body.style.overflow = 'unset';
// // // //     }
// // // //     return () => {
// // // //       document.body.style.overflow = 'unset';
// // // //     };
// // // //   }, [showModal]);

// // // //   const toggleOpen = (sectionId) => {
// // // //     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
// // // //   };

// // // //   const handlePreviewClick = async (lecture, sectionId) => {
// // // //     console.log(`Lecture: ${lecture.lecture_name}`);
// // // //     setSelectedLecture(lecture);
// // // //     setError(null);

// // // //     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
// // // //       setError('No videos available for this lecture');
// // // //       setShowModal(true);
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setLoading(true);
// // // //       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
// // // //       console.log('Fetching Streaming URL:', streamingURL);

// // // //       const response = await axios.get(streamingURL, {
// // // //         responseType: 'blob',
// // // //       });

// // // //       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
// // // //       const videoUrl = URL.createObjectURL(videoBlob);

// // // //       setStreamingUrl(videoUrl);
// // // //       console.log('Video URL:', videoUrl);
// // // //       setShowModal(true);
// // // //     } catch (error) {
// // // //       console.error('Error fetching video:', error);
// // // //       setError('Unable to fetch video. Please try again later.');
// // // //       setShowModal(true);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const closePreview = () => {
// // // //     setSelectedLecture(null);
// // // //     setStreamingUrl(null);
// // // //     setShowModal(false);
// // // //     setError(null);
// // // //   };

// // // //   return (
// // // //     <div className="card content-sec">
// // // //       <div className="card-body">
// // // //         <div className="row">
// // // //           <div className="col-sm-6">
// // // //             <h5 className="subs-title">Course Content</h5>
// // // //           </div>
// // // //           <div className="col-sm-6 text-sm-end">
// // // //             <h6>{courseData.section_response.length} Sections</h6>
// // // //           </div>
// // // //         </div>
// // // //         {courseData.section_response.map((section) => (
// // // //           <div className="course-card" key={section.id}>
// // // //             <h6 className="cou-title">
// // // //               <Link
// // // //                 className={open[section.id] ? "" : "collapsed"}
// // // //                 onClick={() => toggleOpen(section.id)}
// // // //               >
// // // //                 {section.section_name}
// // // //               </Link>
// // // //             </h6>
// // // //             <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
// // // //               <ul>
// // // //                 {section.lectures && section.lectures.length > 0 ? (
// // // //                   section.lectures.map((lecture) => (
// // // //                     <li key={lecture.id}>
// // // //                       <p>
// // // //                         <img src={Play} alt="" className="me-2" />
// // // //                         {lecture.lecture_name}
// // // //                       </p>
// // // //                       <div>
// // // //                         <PreviewButton onClick={() => handlePreviewClick(lecture, section.id)} disabled={loading}>
// // // //                           {loading ? 'Loading...' : 'Preview'}
// // // //                         </PreviewButton>
// // // //                         <span>02:53</span>
// // // //                       </div>
// // // //                     </li>
// // // //                   ))
// // // //                 ) : (
// // // //                   <li>No lectures available for this section.</li>
// // // //                 )}
// // // //               </ul>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <Modal isOpen={showModal} onClose={closePreview}>
// // // //         <ModalHeader>
// // // //           <ModalTitle>{selectedLecture?.lecture_name || 'Video Preview'}</ModalTitle>
// // // //           <CloseButton onClick={closePreview}>&times;</CloseButton>
// // // //         </ModalHeader>
// // // //         <ModalBody>
// // // //           {error ? (
// // // //             <ErrorMessage>{error}</ErrorMessage>
// // // //           ) : streamingUrl ? (
// // // //             <VideoPlayer
// // // //               src={streamingUrl}
// // // //               controls
// // // //               autoPlay
// // // //               onError={() => setError('Video failed to load.')}
// // // //             />
// // // //           ) : (
// // // //             <p>Loading video...</p>
// // // //           )}
// // // //         </ModalBody>
// // // //       </Modal>
// // // //     </div>
// // // //   );
// // // // };

// // // // CourseContent.propTypes = {
// // // //   courseData: PropTypes.shape({
// // // //     course_id: PropTypes.number.isRequired,
// // // //     section_response: PropTypes.arrayOf(
// // // //       PropTypes.shape({
// // // //         id: PropTypes.number.isRequired,
// // // //         section_name: PropTypes.string.isRequired,
// // // //         lectures: PropTypes.arrayOf(
// // // //           PropTypes.shape({
// // // //             id: PropTypes.number.isRequired,
// // // //             lecture_name: PropTypes.string.isRequired,
// // // //             lecture_videos: PropTypes.arrayOf(
// // // //               PropTypes.shape({
// // // //                 id: PropTypes.number,
// // // //               })
// // // //             ),
// // // //           })
// // // //         ),
// // // //       })
// // // //     ).isRequired,
// // // //   }).isRequired,
// // // // };

// // // // export default CourseContent;
// // // import React, { useState, useEffect } from 'react';
// // // import ReactDOM from 'react-dom';
// // // import PropTypes from 'prop-types';
// // // import { Link } from 'react-router-dom';
// // // import axios from 'axios';
// // // import styled from 'styled-components';
// // // import ReactPlayer from 'react-player';
// // // import { Play } from '../../../imagepath';

// // // const ModalOverlay = styled.div`
// // //   position: fixed;
// // //   top: 0;
// // //   left: 0;
// // //   right: 0;
// // //   bottom: 0;
// // //   background-color: rgba(0, 0, 0, 0.7);
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // //   z-index: 9999;
// // // `;

// // // const ModalContent = styled.div`
// // //   background-color: #fff;
// // //   border-radius: 8px;
// // //   width: 95%;
// // //   max-width: 1200px;
// // //   height: 90vh;
// // //   max-height: 800px;
// // //   overflow: hidden;
// // //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// // //   display: flex;
// // //   flex-direction: column;
// // // `;

// // // const ModalHeader = styled.div`
// // //   padding: 16px;
// // //   background-color: #f8f9fa;
// // //   border-bottom: 1px solid #e9ecef;
// // //   display: flex;
// // //   justify-content: space-between;
// // //   align-items: center;
// // // `;

// // // const ModalTitle = styled.h4`
// // //   margin: 0;
// // //   font-size: 1.25rem;
// // //   color: #333;
// // // `;

// // // const CloseButton = styled.button`
// // //   background: none;
// // //   border: none;
// // //   font-size: 1.5rem;
// // //   cursor: pointer;
// // //   color: #6c757d;
// // //   &:hover {
// // //     color: #343a40;
// // //   }
// // // `;

// // // const ModalBody = styled.div`
// // //   flex: 1;
// // //   overflow: auto;
// // //   padding: 16px;
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // // `;

// // // const ErrorMessage = styled.div`
// // //   color: #721c24;
// // //   background-color: #f8d7da;
// // //   border: 1px solid #f5c6cb;
// // //   border-radius: 4px;
// // //   padding: 12px;
// // //   margin-bottom: 16px;
// // // `;

// // // const PreviewButton = styled.button`
// // //   background-color: #007bff;
// // //   color: white;
// // //   border: none;
// // //   padding: 8px 16px;
// // //   border-radius: 4px;
// // //   cursor: pointer;
// // //   transition: background-color 0.2s;

// // //   &:hover {
// // //     background-color: #0056b3;
// // //   }

// // //   &:disabled {
// // //     background-color: #6c757d;
// // //     cursor: not-allowed;
// // //   }
// // // `;

// // // const Modal = ({ isOpen, onClose, children }) => {
// // //   if (!isOpen) return null;

// // //   return ReactDOM.createPortal(
// // //     <ModalOverlay onClick={onClose}>
// // //       <ModalContent onClick={(e) => e.stopPropagation()}>
// // //         {children}
// // //       </ModalContent>
// // //     </ModalOverlay>,
// // //     document.body
// // //   );
// // // };

// // // Modal.propTypes = {
// // //   isOpen: PropTypes.bool.isRequired,
// // //   onClose: PropTypes.func.isRequired,
// // //   children: PropTypes.node.isRequired,
// // // };

// // // const CourseContent = ({ courseData }) => {
// // //   const [open, setOpen] = useState({});
// // //   const [selectedLecture, setSelectedLecture] = useState(null);
// // //   const [streamingUrl, setStreamingUrl] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [showModal, setShowModal] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     if (showModal) {
// // //       document.body.style.overflow = 'hidden';
// // //     } else {
// // //       document.body.style.overflow = 'unset';
// // //     }
// // //     return () => {
// // //       document.body.style.overflow = 'unset';
// // //     };
// // //   }, [showModal]);

// // //   const toggleOpen = (sectionId) => {
// // //     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
// // //   };

// // //   const handlePreviewClick = async (lecture, sectionId) => {
// // //     console.log(`Lecture: ${lecture.lecture_name}`);
// // //     setSelectedLecture(lecture);
// // //     setError(null);

// // //     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
// // //       setError('No videos available for this lecture');
// // //       setShowModal(true);
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
// // //       console.log('Fetching Streaming URL:', streamingURL);

// // //       const response = await axios.get(streamingURL, {
// // //         responseType: 'blob',
// // //       });

// // //       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
// // //       const videoUrl = URL.createObjectURL(videoBlob);

// // //       setStreamingUrl(videoUrl);
// // //       console.log('Video URL:', videoUrl);
// // //       setShowModal(true);
// // //     } catch (error) {
// // //       console.error('Error fetching video:', error);
// // //       setError('Unable to fetch video. Please try again later.');
// // //       setShowModal(true);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const closePreview = () => {
// // //     setSelectedLecture(null);
// // //     setStreamingUrl(null);
// // //     setShowModal(false);
// // //     setError(null);
// // //   };

// // //   return (
// // //     <div className="card content-sec">
// // //       <div className="card-body">
// // //         <div className="row">
// // //           <div className="col-sm-6">
// // //             <h5 className="subs-title">Course Content</h5>
// // //           </div>
// // //           <div className="col-sm-6 text-sm-end">
// // //             <h6>{courseData.section_response.length} Sections</h6>
// // //           </div>
// // //         </div>
// // //         {courseData.section_response.map((section) => (
// // //           <div className="course-card" key={section.id}>
// // //             <h6 className="cou-title">
// // //               <Link
// // //                 className={open[section.id] ? "" : "collapsed"}
// // //                 onClick={() => toggleOpen(section.id)}
// // //               >
// // //                 {section.section_name}
// // //               </Link>
// // //             </h6>
// // //             <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
// // //               <ul>
// // //                 {section.lectures && section.lectures.length > 0 ? (
// // //                   section.lectures.map((lecture) => (
// // //                     <li key={lecture.id}>
// // //                       <p>
// // //                         <img src={Play} alt="" className="me-2" />
// // //                         {lecture.lecture_name}
// // //                       </p>
// // //                       <div>
// // //                         <PreviewButton onClick={() => handlePreviewClick(lecture, section.id)} disabled={loading}>
// // //                           {loading ? 'Loading...' : 'Preview'}
// // //                         </PreviewButton>
// // //                         <span>02:53</span>
// // //                       </div>
// // //                     </li>
// // //                   ))
// // //                 ) : (
// // //                   <li>No lectures available for this section.</li>
// // //                 )}
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <Modal isOpen={showModal} onClose={closePreview}>
// // //         <ModalHeader>
// // //           <ModalTitle>{selectedLecture?.lecture_name || 'Video Preview'}</ModalTitle>
// // //           <CloseButton onClick={closePreview}>&times;</CloseButton>
// // //         </ModalHeader>
// // //         <ModalBody>
// // //           {error ? (
// // //             <ErrorMessage>{error}</ErrorMessage>
// // //           ) : streamingUrl ? (
// // //             <ReactPlayer
// // //               url={streamingUrl}
// // //               controls
// // //               playing
// // //               width="100%"
// // //               height="100%"
// // //               onError={() => setError('Video failed to load.')}
// // //             />
// // //           ) : (
// // //             <p>Loading video...</p>
// // //           )}
// // //         </ModalBody>
// // //       </Modal>
// // //     </div>
// // //   );
// // // };

// // // CourseContent.propTypes = {
// // //   courseData: PropTypes.shape({
// // //     course_id: PropTypes.number.isRequired,
// // //     section_response: PropTypes.arrayOf(
// // //       PropTypes.shape({
// // //         id: PropTypes.number.isRequired,
// // //         section_name: PropTypes.string.isRequired,
// // //         lectures: PropTypes.arrayOf(
// // //           PropTypes.shape({
// // //             id: PropTypes.number.isRequired,
// // //             lecture_name: PropTypes.string.isRequired,
// // //             lecture_videos: PropTypes.arrayOf(
// // //               PropTypes.shape({
// // //                 id: PropTypes.number,
// // //               })
// // //             ),
// // //           })
// // //         ),
// // //       })
// // //     ).isRequired,
// // //   }).isRequired,
// // // };

// // // export default CourseContent;

// // // import React, { useState, useEffect } from 'react';
// // // import ReactDOM from 'react-dom';
// // // import PropTypes from 'prop-types';
// // // import { Link } from 'react-router-dom';
// // // import axios from 'axios';
// // // import styled from 'styled-components';
// // // import { Play } from '../../../imagepath';

// // // const ModalOverlay = styled.div`
// // //   position: fixed;
// // //   top: 0;
// // //   left: 0;
// // //   right: 0;
// // //   bottom: 0;
// // //   background-color: rgba(0, 0, 0, 0.7);
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // //   z-index: 9999;
// // // `;

// // // const ModalContent = styled.div`
// // //   background-color: #fff;
// // //   border-radius: 8px;
// // //   width: 95%;
// // //   max-width: 1200px;
// // //   height: 90vh;
// // //   max-height: 800px;
// // //   overflow: hidden;
// // //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// // //   display: flex;
// // //   flex-direction: column;
// // // `;

// // // const ModalHeader = styled.div`
// // //   padding: 16px;
// // //   background-color: #f8f9fa;
// // //   border-bottom: 1px solid #e9ecef;
// // //   display: flex;
// // //   justify-content: space-between;
// // //   align-items: center;
// // // `;

// // // const ModalTitle = styled.h4`
// // //   margin: 0;
// // //   font-size: 1.25rem;
// // //   color: #333;
// // // `;

// // // const CloseButton = styled.button`
// // //   background: none;
// // //   border: none;
// // //   font-size: 1.5rem;
// // //   cursor: pointer;
// // //   color: #6c757d;
// // //   &:hover {
// // //     color: #343a40;
// // //   }
// // // `;

// // // const ModalBody = styled.div`
// // //   flex: 1;
// // //   overflow: auto;
// // //   padding: 16px;
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // // `;

// // // const VideoPlayer = styled.video`
// // //   width: 100%;
// // //   height: 100%;
// // //   max-height: calc(90vh - 100px);
// // //   object-fit: contain;
// // // `;

// // // const ErrorMessage = styled.div`
// // //   color: #721c24;
// // //   background-color: #f8d7da;
// // //   border: 1px solid #f5c6cb;
// // //   border-radius: 4px;
// // //   padding: 12px;
// // //   margin-bottom: 16px;
// // // `;

// // // const PreviewButton = styled.button`
// // //   background-color: #007bff;
// // //   color: white;
// // //   border: none;
// // //   padding: 8px 16px;
// // //   border-radius: 4px;
// // //   cursor: pointer;
// // //   transition: background-color 0.2s;

// // //   &:hover {
// // //     background-color: #0056b3;
// // //   }

// // //   &:disabled {
// // //     background-color: #6c757d;
// // //     cursor: not-allowed;
// // //   }
// // // `;

// // // const Modal = ({ isOpen, onClose, children }) => {
// // //   if (!isOpen) return null;

// // //   return ReactDOM.createPortal(
// // //     <ModalOverlay onClick={onClose}>
// // //       <ModalContent onClick={(e) => e.stopPropagation()}>
// // //         {children}
// // //       </ModalContent>
// // //     </ModalOverlay>,
// // //     document.body
// // //   );
// // // };

// // // Modal.propTypes = {
// // //   isOpen: PropTypes.bool.isRequired,
// // //   onClose: PropTypes.func.isRequired,
// // //   children: PropTypes.node.isRequired,
// // // };

// // // // const CourseContent = ({ courseData }) => {
// // // //   const [open, setOpen] = useState({});
// // // //   const [selectedLecture, setSelectedLecture] = useState(null);
// // // //   const [streamingUrl, setStreamingUrl] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [currentTime, setCurrentTime] = useState(0); // State to store the current playback time

// // // //   useEffect(() => {
// // // //     if (showModal) {
// // // //       document.body.style.overflow = 'hidden';
// // // //     } else {
// // // //       document.body.style.overflow = 'unset';
// // // //     }
// // // //     return () => {
// // // //       document.body.style.overflow = 'unset';
// // // //     };
// // // //   }, [showModal]);

// // // //   const toggleOpen = (sectionId) => {
// // // //     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
// // // //   };

// // // //   const handlePreviewClick = async (lecture, sectionId) => {
// // // //     console.log(`Lecture: ${lecture.lecture_name}`);
// // // //     setSelectedLecture(lecture);
// // // //     setError(null);

// // // //     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
// // // //       setError('No videos available for this lecture');
// // // //       setShowModal(true);
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setLoading(true);
// // // //       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
// // // //       console.log('Fetching Streaming URL:', streamingURL);

// // // //       const response = await axios.get(streamingURL, {
// // // //         responseType: 'blob',
// // // //       });

// // // //       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
// // // //       const videoUrl = URL.createObjectURL(videoBlob);

// // // //       setStreamingUrl(videoUrl);
// // // //       console.log('Video URL:', videoUrl);
// // // //       setShowModal(true);
// // // //     } catch (error) {
// // // //       console.error('Error fetching video:', error);
// // // //       setError('Unable to fetch video. Please try again later.');
// // // //       setShowModal(true);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const closePreview = () => {
// // // //     setSelectedLecture(null);
// // // //     setStreamingUrl(null);
// // // //     setShowModal(false);
// // // //     setError(null);
// // // //     setCurrentTime(0); // Reset the time when closing the preview
// // // //   };

// // // //   // Handler to update the current time
// // // //   const handlePause = (event) => {
// // // //     const videoElement = event.target;
// // // //     setCurrentTime(videoElement.currentTime);
// // // //   };
// // // //   console.log(currentTime,"CTTT")
  
// // // //   return (
// // // //     <div className="card content-sec">
// // // //       <div className="card-body">
// // // //         <div className="row">
// // // //           <div className="col-sm-6">
// // // //             <h5 className="subs-title">Course Content</h5>
// // // //           </div>
// // // //           <div className="col-sm-6 text-sm-end">
// // // //             <h6>{courseData.section_response.length} Sections</h6>
// // // //           </div>
// // // //         </div>
// // // //         {courseData.section_response.map((section) => (
// // // //           <div className="course-card" key={section.id}>
// // // //             <h6 className="cou-title">
// // // //               <Link
// // // //                 className={open[section.id] ? "" : "collapsed"}
// // // //                 onClick={() => toggleOpen(section.id)}
// // // //               >
// // // //                 {section.section_name}
// // // //               </Link>
// // // //             </h6>
// // // //             <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
// // // //               <ul>
// // // //                 {section.lectures && section.lectures.length > 0 ? (
// // // //                   section.lectures.map((lecture) => (
// // // //                     <li key={lecture.id}>
// // // //                       <p>
// // // //                         <img src={Play} alt="" className="me-2" />
// // // //                         {lecture.lecture_name}
// // // //                       </p>
// // // //                       <div>
// // // //                         <PreviewButton onClick={() => handlePreviewClick(lecture, section.id)} disabled={loading}>
// // // //                           {loading ? 'Loading...' : 'Preview'}
// // // //                         </PreviewButton>
// // // //                         <span>02:53</span>
// // // //                       </div>
// // // //                     </li>
// // // //                   ))
// // // //                 ) : (
// // // //                   <li>No lectures available for this section.</li>
// // // //                 )}
// // // //               </ul>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <Modal isOpen={showModal} onClose={closePreview}>
// // // //         <ModalHeader>
// // // //           <ModalTitle>{selectedLecture?.lecture_name || 'Video Preview'}</ModalTitle>
// // // //           <CloseButton onClick={closePreview}>&times;</CloseButton>
// // // //         </ModalHeader>
// // // //         <ModalBody>
// // // //           {error ? (
// // // //             <ErrorMessage>{error}</ErrorMessage>
// // // //           ) : streamingUrl ? (
// // // //             <VideoPlayer
// // // //               src={streamingUrl}
// // // //               controls
// // // //               autoPlay
// // // //               onPause={handlePause} // Attach the onPause event
// // // //               onError={() => setError('Video failed to load.')}
// // // //             />
// // // //           ) : (
// // // //             <p>Loading video...</p>
// // // //           )}
// // // //         </ModalBody>
// // // //       </Modal>
// // // //     </div>
// // // //   );
// // // // };
// // // const CourseContent = ({ courseData }) => {
// // //   const [open, setOpen] = useState({});
// // //   const [selectedLecture, setSelectedLecture] = useState(null);
// // //   const [streamingUrl, setStreamingUrl] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [showModal, setShowModal] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [currentTime, setCurrentTime] = useState(0); // State to store the current playback time

// // //   useEffect(() => {
// // //     if (showModal) {
// // //       document.body.style.overflow = 'hidden';
// // //     } else {
// // //       document.body.style.overflow = 'unset';
// // //     }
// // //     return () => {
// // //       document.body.style.overflow = 'unset';
// // //     };
// // //   }, [showModal]);

// // //   const toggleOpen = (sectionId) => {
// // //     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
// // //   };

// // //   const handlePreviewClick = async (lecture, sectionId) => {
// // //     console.log(`Lecture: ${lecture.lecture_name}`);
// // //     setSelectedLecture(lecture);
// // //     setError(null);

// // //     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
// // //       setError('No videos available for this lecture');
// // //       setShowModal(true);
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
// // //       console.log('Fetching Streaming URL:', streamingURL);

// // //       const response = await axios.get(streamingURL, {
// // //         responseType: 'blob',
// // //       });

// // //       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
// // //       const videoUrl = URL.createObjectURL(videoBlob);

// // //       setStreamingUrl(videoUrl);
// // //       console.log('Video URL:', videoUrl);
// // //       setShowModal(true);
// // //     } catch (error) {
// // //       console.error('Error fetching video:', error);
// // //       setError('Unable to fetch video. Please try again later.');
// // //       setShowModal(true);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const closePreview = () => {
// // //     setSelectedLecture(null);
// // //     setStreamingUrl(null);
// // //     setShowModal(false);
// // //     setError(null);
// // //     console.log(currentTime,"ctt");
// // //     console.log(`Video closed at time: ${currentTime} seconds`);
// // //     setCurrentTime(currentTime); // Reset the time when closing the preview
// // //   };
// // // console.log(currentTime,"tgtgt");
// // //   // Handler to update the current time
// // //   const handlePause = (event) => {
// // //     const videoElement = event.target;
// // //     setCurrentTime(videoElement.currentTime);
// // //   };

// // //   return (
// // //     <div className="card content-sec">
// // //       <div className="card-body">
// // //         <div className="row">
// // //           <div className="col-sm-6">
// // //             <h5 className="subs-title">Course Content</h5>
// // //           </div>
// // //           <div className="col-sm-6 text-sm-end">
// // //             <h6>{courseData.section_response.length} Sections</h6>
// // //           </div>
// // //         </div>
// // //         {courseData.section_response.map((section) => (
// // //           <div className="course-card" key={section.id}>
// // //             <h6 className="cou-title">
// // //               <Link
// // //                 className={open[section.id] ? "" : "collapsed"}
// // //                 onClick={() => toggleOpen(section.id)}
// // //               >
// // //                 {section.section_name}
// // //               </Link>
// // //             </h6>
// // //             <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
// // //               <ul>
// // //                 {section.lectures && section.lectures.length > 0 ? (
// // //                   section.lectures.map((lecture) => (
// // //                     <li key={lecture.id}>
// // //                       <p>
// // //                         <img src={Play} alt="" className="me-2" />
// // //                         {lecture.lecture_name}
// // //                       </p>
// // //                       <div>
// // //                         <PreviewButton onClick={() => handlePreviewClick(lecture, section.id)} disabled={loading}>
// // //                           {loading ? 'Loading...' : 'Preview'}
// // //                         </PreviewButton>
// // //                         <span>02:53</span>
// // //                       </div>
// // //                     </li>
// // //                   ))
// // //                 ) : (
// // //                   <li>No lectures available for this section.</li>
// // //                 )}
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <Modal isOpen={showModal} onClose={closePreview}>
// // //         <ModalHeader>
// // //           <ModalTitle>{selectedLecture?.lecture_name || 'Video Preview'}</ModalTitle>
// // //           <CloseButton onClick={closePreview}>&times;</CloseButton>
// // //         </ModalHeader>
// // //         <ModalBody>
// // //           {error ? (
// // //             <ErrorMessage>{error}</ErrorMessage>
// // //           ) : streamingUrl ? (
// // //             <VideoPlayer
// // //               src={streamingUrl}
// // //               controls
// // //               autoPlay
// // //               onPause={handlePause} // Attach the onPause event
// // //               onError={() => setError('Video failed to load.')}
// // //             />
// // //           ) : (
// // //             <p>Loading video...</p>
// // //           )}
// // //         </ModalBody>
// // //       </Modal>
// // //     </div>
// // //   );
// // // };


// // // CourseContent.propTypes = {
// // //   courseData: PropTypes.shape({
// // //     course_id: PropTypes.number.isRequired,
// // //     section_response: PropTypes.arrayOf(
// // //       PropTypes.shape({
// // //         id: PropTypes.number.isRequired,
// // //         section_name: PropTypes.string.isRequired,
// // //         lectures: PropTypes.arrayOf(
// // //           PropTypes.shape({
// // //             id: PropTypes.number.isRequired,
// // //             lecture_name: PropTypes.string.isRequired,
// // //             lecture_videos: PropTypes.arrayOf(
// // //               PropTypes.shape({
// // //                 id: PropTypes.number.isRequired,
// // //               })
// // //             ).isRequired,
// // //           })
// // //         ),
// // //       })
// // //     ).isRequired,
// // //   }).isRequired,
// // // };

// // // export default CourseContent;
// // import React, { useState, useEffect } from 'react';
// // import ReactDOM from 'react-dom';
// // import PropTypes from 'prop-types';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';
// // import styled from 'styled-components';
// // import { Play } from '../../../imagepath';

// // const ModalOverlay = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   right: 0;
// //   bottom: 0;
// //   background-color: rgba(0, 0, 0, 0.7);
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   z-index: 9999;
// // `;

// // const ModalContent = styled.div`
// //   background-color: #fff;
// //   border-radius: 8px;
// //   width: 95%;
// //   max-width: 1200px;
// //   height: 90vh;
// //   max-height: 800px;
// //   overflow: hidden;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   display: flex;
// //   flex-direction: column;
// // `;

// // const ModalHeader = styled.div`
// //   padding: 16px;
// //   background-color: #f8f9fa;
// //   border-bottom: 1px solid #e9ecef;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// // `;

// // const ModalTitle = styled.h4`
// //   margin: 0;
// //   font-size: 1.25rem;
// //   color: #333;
// // `;

// // const CloseButton = styled.button`
// //   background: none;
// //   border: none;
// //   font-size: 1.5rem;
// //   cursor: pointer;
// //   color: #6c757d;
// //   &:hover {
// //     color: #343a40;
// //   }
// // `;

// // const ModalBody = styled.div`
// //   flex: 1;
// //   overflow: auto;
// //   padding: 16px;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // const VideoPlayer = styled.video`
// //   width: 100%;
// //   height: 100%;
// //   max-height: calc(90vh - 100px);
// //   object-fit: contain;
// // `;

// // const ErrorMessage = styled.div`
// //   color: #721c24;
// //   background-color: #f8d7da;
// //   border: 1px solid #f5c6cb;
// //   border-radius: 4px;
// //   padding: 12px;
// //   margin-bottom: 16px;
// // `;

// // const PreviewButton = styled.button`
// //   background-color: #007bff;
// //   color: white;
// //   border: none;
// //   padding: 8px 16px;
// //   border-radius: 4px;
// //   cursor: pointer;
// //   transition: background-color 0.2s;

// //   &:hover {
// //     background-color: #0056b3;
// //   }

// //   &:disabled {
// //     background-color: #6c757d;
// //     cursor: not-allowed;
// //   }
// // `;

// // const VideoModal = ({ isOpen, onClose, lecture, streamingUrl, error }) => {
// //   const [currentTime, setCurrentTime] = useState(0);

// //   const handleTimeUpdate = (event) => {
// //     setCurrentTime(event.target.currentTime);
// //   };

// //   const handleClose = () => {
// //     console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);
// //     onClose(currentTime);
// //   };

// //   if (!isOpen) return null;

// //   return ReactDOM.createPortal(
// //     <ModalOverlay onClick={handleClose}>
// //       <ModalContent onClick={(e) => e.stopPropagation()}>
// //         <ModalHeader>
// //           <ModalTitle>{lecture?.lecture_name || 'Video Preview'}</ModalTitle>
// //           <CloseButton onClick={handleClose}>&times;</CloseButton>
// //         </ModalHeader>
// //         <ModalBody>
// //           {error ? (
// //             <ErrorMessage>{error}</ErrorMessage>
// //           ) : streamingUrl ? (
// //             <VideoPlayer
// //               src={streamingUrl}
// //               controls
// //               autoPlay
// //               onTimeUpdate={handleTimeUpdate}
// //               onError={() => setError('Video failed to load.')}
// //             />
// //           ) : (
// //             <p>Loading video...</p>
// //           )}
// //         </ModalBody>
// //       </ModalContent>
// //     </ModalOverlay>,
// //     document.body
// //   );
// // };

// // VideoModal.propTypes = {
// //   isOpen: PropTypes.bool.isRequired,
// //   onClose: PropTypes.func.isRequired,
// //   lecture: PropTypes.object,
// //   streamingUrl: PropTypes.string,
// //   error: PropTypes.string,
// // };

// // const CourseContent = ({ courseData }) => {
// //   const [open, setOpen] = useState({});
// //   const [selectedLecture, setSelectedLecture] = useState(null);
// //   const [streamingUrl, setStreamingUrl] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [showModal, setShowModal] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     if (showModal) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'unset';
// //     }
// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, [showModal]);

// //   const toggleOpen = (sectionId) => {
// //     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
// //   };

// //   const handlePreviewClick = async (lecture, sectionId) => {
// //     console.log(`Lecture: ${lecture.lecture_name}`);
// //     setSelectedLecture(lecture);
// //     setError(null);

// //     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
// //       setError('No videos available for this lecture');
// //       setShowModal(true);
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
// //       console.log('Fetching Streaming URL:', streamingURL);

// //       const response = await axios.get(streamingURL, {
// //         responseType: 'blob',
// //       });

// //       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
// //       const videoUrl = URL.createObjectURL(videoBlob);

// //       setStreamingUrl(videoUrl);
// //       console.log('Video URL:', videoUrl);
// //       setShowModal(true);
// //     } catch (error) {
// //       console.error('Error fetching video:', error);
// //       setError('Unable to fetch video. Please try again later.');
// //       setShowModal(true);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const closePreview = (currentTime) => {
// //     setSelectedLecture(null);
// //     setStreamingUrl(null);
// //     setShowModal(false);
// //     setError(null);
// //     console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);
// //     // Here you can use the currentTime value as needed, e.g., send it to an API
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
// //                         <PreviewButton onClick={() => handlePreviewClick(lecture, section.id)} disabled={loading}>
// //                           {loading ? 'Loading...' : 'Preview'}
// //                         </PreviewButton>
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

// //       <VideoModal
// //         isOpen={showModal}
// //         onClose={closePreview}
// //         lecture={selectedLecture}
// //         streamingUrl={streamingUrl}
// //         error={error}
// //       />
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
// //                 id: PropTypes.number.isRequired,
// //               })
// //             ).isRequired,
// //           })
// //         ),
// //       })
// //     ).isRequired,
// //   }).isRequired,
// // };

// // export default CourseContent;

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Play } from '../../../imagepath';

// // ... (Keep all the styled components as they were)

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
//   z-index: 9999;
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

// const VideoModal = ({ isOpen, onClose, lecture, streamingUrl, error, courseId, sectionId }) => {
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const handleTimeUpdate = (event) => {
//     setCurrentTime(event.target.currentTime);
//   };

//   const handleLoadedMetadata = (event) => {
//     setDuration(event.target.duration);
//   };

//   const handleClose = async () => {
//     console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);
    
//     const completed = currentTime >= duration;
//     const progress = Math.round(currentTime);
//     const last_watched_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
//     const token  = localStorage.getItem('token')
//     try {
//       const response = await axios.post(
//         `https://api.novajobs.us/api/trainers/video-history/${courseId}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`,
//         {
//           last_watched_at,
//           progress,
//           completed
//         },
//        { headers: {
//           Authorization: `${token}`, // Add the authorization token
//       },}
//       );
//       console.log('Video history updated:', response.data);
//     } catch (error) {
//       console.error('Error updating video history:', error);
//     }

//     onClose(currentTime);
//   };

//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <ModalOverlay onClick={handleClose}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <ModalHeader>
//           <ModalTitle>{lecture?.lecture_name || 'Video Preview'}</ModalTitle>
//           <CloseButton onClick={handleClose}>&times;</CloseButton>
//         </ModalHeader>
//         <ModalBody>
//           {error ? (
//             <ErrorMessage>{error}</ErrorMessage>
//           ) : streamingUrl ? (
//             <VideoPlayer
//               src={streamingUrl}
//               controls
//               autoPlay
//               onTimeUpdate={handleTimeUpdate}
//               onLoadedMetadata={handleLoadedMetadata}
//               onError={() => setError('Video failed to load.')}
//             />
//           ) : (
//             <p>Loading video...</p>
//           )}
//         </ModalBody>
//       </ModalContent>
//     </ModalOverlay>,
//     document.body
//   );
// };

// VideoModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   lecture: PropTypes.object,
//   streamingUrl: PropTypes.string,
//   error: PropTypes.string,
//   courseId: PropTypes.number.isRequired,
//   sectionId: PropTypes.number.isRequired,
// };

// const CourseContent = ({ courseData }) => {
//   const [open, setOpen] = useState({});
//   const [selectedLecture, setSelectedLecture] = useState(null);
//   const [streamingUrl, setStreamingUrl] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentSectionId, setCurrentSectionId] = useState(null);

//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [showModal]);

//   const toggleOpen = (sectionId) => {
//     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
//   };

//   const handlePreviewClick = async (lecture, sectionId) => {
//     console.log(`Lecture: ${lecture.lecture_name}`);
//     setSelectedLecture(lecture);
//     setCurrentSectionId(sectionId);
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

//   const closePreview = (currentTime) => {
//     setSelectedLecture(null);
//     setStreamingUrl(null);
//     setShowModal(false);
//     setError(null);
//     console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);
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

//       <VideoModal
//         isOpen={showModal}
//         onClose={closePreview}
//         lecture={selectedLecture}
//         streamingUrl={streamingUrl}
//         error={error}
//         courseId={courseData.course_id}
//         sectionId={currentSectionId}
//       />
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
//                 id: PropTypes.number.isRequired,
//               })
//             ).isRequired,
//           })
//         ),
//       })
//     ).isRequired,
//   }).isRequired,
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

const ResourceList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`;

const ResourceItem = styled.li`
  margin-bottom: 5px;
`;

const ResourceLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const PDFModal = styled(ModalContent)`
  width: 80%;
  height: 80vh;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoModal = ({ isOpen, onClose, lecture, streamingUrl, error, courseId, sectionId }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
  };

  const handleLoadedMetadata = (event) => {
    setDuration(event.target.duration);
  };

  const handleClose = async () => {
    console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);
    
    const completed = currentTime >= duration;
    const progress = Math.round(currentTime);
    const last_watched_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const token = localStorage.getItem('token')
    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/video-history/${courseId}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`,
        {
          last_watched_at,
          progress,
          completed
        },
        { 
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log('Video history updated:', response.data);
    } catch (error) {
      console.error('Error updating video history:', error);
    }

    onClose(currentTime);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{lecture?.lecture_name || 'Video Preview'}</ModalTitle>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : streamingUrl ? (
            <VideoPlayer
              src={streamingUrl}
              controls
              autoPlay
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              // eslint-disable-next-line no-undef
              onError={() => setError('Video failed to load.')}
            />
          ) : (
            <p>Loading video...</p>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  lecture: PropTypes.object,
  streamingUrl: PropTypes.string,
  error: PropTypes.string,
  courseId: PropTypes.number.isRequired,
  sectionId: PropTypes.number.isRequired,
};

const PDFViewerModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <PDFModal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>PDF Viewer</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <PDFViewer src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`} />
        </ModalBody>
      </PDFModal>
    </ModalOverlay>,
    document.body
  );
};

PDFViewerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pdfUrl: PropTypes.string.isRequired,
};

const CourseContent = ({ courseData }) => {
  const [open, setOpen] = useState({});
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [streamingUrl, setStreamingUrl] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [selectedPDFUrl, setSelectedPDFUrl] = useState(null);
  const [error, setError] = useState(null);
  const [currentSectionId, setCurrentSectionId] = useState(null);

  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal]);

  const toggleOpen = (sectionId) => {
    setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handlePreviewClick = async (lecture, sectionId) => {
    console.log(`Lecture: ${lecture.lecture_name}`);
    setSelectedLecture(lecture);
    setCurrentSectionId(sectionId);
    setError(null);

    if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
      setError('No videos available for this lecture');
      setShowVideoModal(true);
      return;
    }

    try {
      setLoadingStates(prev => ({ ...prev, [lecture.id]: true }));
      const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
      console.log('Fetching Streaming URL:', streamingURL);

      const response = await axios.get(streamingURL, {
        responseType: 'blob',
      });

      const videoBlob = new Blob([response.data], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);

      setStreamingUrl(videoUrl);
      console.log('Video URL:', videoUrl);
      setShowVideoModal(true);
    } catch (error) {
      console.error('Error fetching video:', error);
      setError('Unable to fetch video. Please try again later.');
      setShowVideoModal(true);
    } finally {
      setLoadingStates(prev => ({ ...prev, [lecture.id]: false }));
    }
  };

  const closePreview = (currentTime) => {
    setSelectedLecture(null);
    setStreamingUrl(null);
    setShowVideoModal(false);
    setError(null);
    console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);
  };

  const handlePDFClick = (pdfUrl) => {
    console.log(pdfUrl, 'mmmmm');
    setSelectedPDFUrl(pdfUrl);
    setShowPDFModal(true);
  };

  const closePDFViewer = () => {
    setSelectedPDFUrl(null);
    setShowPDFModal(false);
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
                        <PreviewButton 
                          onClick={() => handlePreviewClick(lecture, section.id)} 
                          disabled={loadingStates[lecture.id]}
                        >
                          {loadingStates[lecture.id] ? 'Loading...' : 'Preview'}
                        </PreviewButton>
                      </div>
                      {(lecture.lecture_resources_pdf || lecture.lecture_resources_link) && (
                        <ResourceList>
                          {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.map((pdf, index) => (
                            <ResourceItem key={`pdf-${index}`}>
                              <ResourceLink onClick={() => handlePDFClick(`https://api.novajobs.us/${pdf}`)}>
                                PDF Resource {index + 1}
                              </ResourceLink>
                            </ResourceItem>
                          ))}
                          {lecture.lecture_resources_link && lecture.lecture_resources_link.map((link, index) => (
                            <ResourceItem key={`link-${index}`}>
                              <ResourceLink href={link} target="_blank" rel="noopener noreferrer">
                                External Resource {index + 1}
                              </ResourceLink>
                            </ResourceItem>
                          ))}
                        </ResourceList>
                      )}
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

      <VideoModal
        isOpen={showVideoModal}
        onClose={closePreview}
        lecture={selectedLecture}
        streamingUrl={streamingUrl}
        error={error}
        courseId={courseData.course_id}
        sectionId={currentSectionId}
      />

      <PDFViewerModal
        isOpen={showPDFModal}
        onClose={closePDFViewer}
        pdfUrl={selectedPDFUrl}
      />
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
                id: PropTypes.number.isRequired,
              })
            ),
            lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
            lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
          })
        ),
      })
    ).isRequired,
  }).isRequired,
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
                id: PropTypes.number.isRequired,
              })
            ),
            lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
            lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
          })
        ),
      })
    ).isRequired,
  }).isRequired,
};

export default CourseContent;