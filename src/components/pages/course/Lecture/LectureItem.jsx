// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import FeatherIcon from 'feather-icons-react';

// const LectureItem = ({ lecture, courseId, sectionId }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <li className="lecture-item">
//       <div className="lecture-header">
//         <h6 className="lecture-name">{lecture.lecture_name}</h6>
//         <div className="button-group">
//         <button
//   className="btn btn-sm btn-info preview-button"
//   onClick={toggleExpand}
// >
//   {isExpanded ? (
//     <>
//       <FeatherIcon icon="x-circle" className="me-2" />
//       Close
//     </>
//   ) : (
//     <>
//       <FeatherIcon icon="eye" className="me-2" />
//       Preview
//     </>
//   )}
// </button>

//           <Link
//             to={`/edit-lecture/${courseId}/${sectionId}/${lecture.id}`}
//             className="btn btn-sm btn-warning edit-lecture-button"
//           >
//                     <FeatherIcon icon="edit" className="me-2" />

//             Edit Lecture
//           </Link>
//         </div>
//       </div>
//       {isExpanded && (
//         <div className="lecture-content">
//           {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.length > 0 && (
//             <div className="lecture-pdfs">
//               <strong>PDF Resources:</strong>
//               <ul>
//                 {lecture.lecture_resources_pdf.map((pdf, index) => (
//                   <li key={index}>
//                     <a href={pdf} target="_blank" rel="noopener noreferrer">
//                       PDF {index + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {lecture.lecture_resources_link && lecture.lecture_resources_link.length > 0 && (
//             <div className="lecture-links">
//               <strong>External Links:</strong>
//               <ul>
//                 {lecture.lecture_resources_link.map((link, index) => (
//                   <li key={index}>
//                     <a href={link} target="_blank" rel="noopener noreferrer">
//                       Link {index + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </li>
//   );
// };

// LectureItem.propTypes = {
//   lecture: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     lecture_name: PropTypes.string.isRequired,
//     lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
//     lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
//   courseId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

// export default LectureItem;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import FeatherIcon from 'feather-icons-react';
// import { Button, Modal } from 'react-bootstrap';

// const LectureItem = ({ lecture, courseId, sectionId }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [showPDFModal, setShowPDFModal] = useState(false);
//   const [selectedPDF, setSelectedPDF] = useState(null);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handlePDFClick = (pdf) => {
//     setSelectedPDF(pdf);
//     setShowPDFModal(true);
//   };

//   const handlePDFModalClose = () => {
//     setShowPDFModal(false);
//     setSelectedPDF(null);
//   };

//   return (
//     <li className="lecture-item">
//       <div className="lecture-header">
//         <h6 className="lecture-name">{lecture.lecture_name}</h6>
//         <div className="button-group">
//           <button
//             className="btn btn-sm btn-info preview-button"
//             onClick={toggleExpand}
//           >
//             {isExpanded ? (
//               <>
//                 <FeatherIcon icon="x-circle" className="me-2" />
//                 Close
//               </>
//             ) : (
//               <>
//                 <FeatherIcon icon="eye" className="me-2" />
//                 Preview
//               </>
//             )}
//           </button>
//           <Link
//             to={`/edit-lecture/${courseId}/${sectionId}/${lecture.id}`}
//             className="btn btn-sm btn-warning edit-lecture-button"
//           >
//             <FeatherIcon icon="edit" className="me-2" />
//             Edit Lecture
//           </Link>
//         </div>
//       </div>
//       {isExpanded && (
//         <div className="lecture-content">
//           {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.length > 0 && (
//             <div className="lecture-pdfs">
//               <strong>PDF Resources:</strong>
//               <ul>
//                 {lecture.lecture_resources_pdf.map((pdf, index) => (
//                   <li key={index}>
//                     <Button
//                       variant="link"
//                       onClick={() => handlePDFClick(pdf)}
//                     >
//                       PDF {index + 1}
//                     </Button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {lecture.lecture_resources_link && lecture.lecture_resources_link.length > 0 && (
//             <div className="lecture-links">
//               <strong>External Links:</strong>
//               <ul>
//                 {lecture.lecture_resources_link.map((link, index) => (
//                   <li key={index}>
//                     <a href={link} target="_blank" rel="noopener noreferrer">
//                       Link {index + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}

//       {showPDFModal && (
//         <Modal onClose={handlePDFModalClose}>
//           <ModalContent>
//             <ModalHeader>
//               <h3>PDF Viewer</h3>
//             </ModalHeader>
//             <ModalBody>
//               {selectedPDF && (
//                 <iframe
//                   src={selectedPDF}
//                   title="PDF Viewer"
//                   width="100%"
//                   height="600px"
//                   frameBorder="0"
//                 />
//               )}
//             </ModalBody>
//             <ModalFooter>
//               <Button onClick={handlePDFModalClose}>Close</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       )}
//     </li>
//   );
// };

// LectureItem.propTypes = {
//   lecture: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     lecture_name: PropTypes.string.isRequired,
//     lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
//     lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
//   courseId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

// export default LectureItem;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import FeatherIcon from 'feather-icons-react';
// import { Button, Modal as BootstrapModal, Modal } from 'react-bootstrap';
// import styled from 'styled-components';

// // Styled components
// const StyledModal = styled(BootstrapModal)`
//   .modal-content {
//   width:80vw;
//     border-radius: 10px;
//     overflow: hidden;
//   }
// `;

// const ModalHeader = styled(BootstrapModal.Header)`
//   background-color: #f8f9fa;
//   border-bottom: 1px solid #dee2e6;
// `;

// const ModalBody = styled(BootstrapModal.Body)`
//   padding: 2rem;
// `;

// const ModalFooter = styled(BootstrapModal.Footer)`
//   background-color: #f8f9fa;
//   border-top: 1px solid #dee2e6;
// `;

// const LectureItem = ({ lecture, courseId, sectionId }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [showPDFModal, setShowPDFModal] = useState(false);
//   const [selectedPDF, setSelectedPDF] = useState(null);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handlePDFClick = (pdf) => {
//     console.log(pdf,"pdf");
//     setSelectedPDF(`https://api.novajobs.us${pdf}`);
//     setShowPDFModal(true);
//   };

//   const handlePDFModalClose = () => {
//     setShowPDFModal(false);
//     setSelectedPDF(null);
//   };

//   return (
//     <li className="lecture-item">
//       <div className="lecture-header">
//         <h6 className="lecture-name">{lecture.lecture_name}</h6>
//         <div className="button-group">
//           <button
//             className="btn btn-sm btn-info preview-button"
//             onClick={toggleExpand}
//           >
//             {isExpanded ? (
//               <>
//                 <FeatherIcon icon="x-circle" className="me-2" />
//                 Close
//               </>
//             ) : (
//               <>
//                 <FeatherIcon icon="eye" className="me-2" />
//                 Preview
//               </>
//             )}
//           </button>
//           <Link
//             to={`/edit-lecture/${courseId}/${sectionId}/${lecture.id}`}
//             className="btn btn-sm btn-warning edit-lecture-button"
//           >
//             <FeatherIcon icon="edit" className="me-2" />
//             Edit Lecture
//           </Link>
//         </div>
//       </div>
//       {isExpanded && (
//         <div className="lecture-content">
//           {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.length > 0 && (
//             <div className="lecture-pdfs">
//               <strong>PDF Resources:</strong>
//               <ul>
//                 {lecture.lecture_resources_pdf.map((pdf, index) => (
//                   <li key={index}>
//                     <Button
//                       variant="link"
//                       onClick={() => handlePDFClick(pdf)}
//                     >
//                       PDF {index + 1}
//                     </Button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {lecture.lecture_resources_link && lecture.lecture_resources_link.length > 0 && (
//             <div className="lecture-links">
//               <strong>External Links:</strong>
//               <ul>
//                 {lecture.lecture_resources_link.map((link, index) => (
//                   <li key={index}>
//                     <a href={link} target="_blank" rel="noopener noreferrer">
//                       Link {index + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}

//       {showPDFModal && (
//         <StyledModal show={showPDFModal} onHide={handlePDFModalClose}>
//           <ModalHeader closeButton>
//             <Modal.Title>PDF Viewer</Modal.Title>
//           </ModalHeader>
//           <ModalBody>
//             {selectedPDF && (
//               <iframe
//                 src={selectedPDF}
//                 title="PDF Viewer"
//                 width="100%"
//                 height="600px"
//                 frameBorder="0"
//               />
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="secondary" onClick={handlePDFModalClose}>Close</Button>
//           </ModalFooter>
//         </StyledModal>
//       )}
//     </li>
//   );
// };

// LectureItem.propTypes = {
//   lecture: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     lecture_name: PropTypes.string.isRequired,
//     lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
//     lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
//   courseId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

// export default LectureItem;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import FeatherIcon from 'feather-icons-react';
// import { Button, Modal as BootstrapModal, Modal } from 'react-bootstrap';
// import styled from 'styled-components';

// // Styled components
// const StyledModal = styled(BootstrapModal)`
//   .modal-dialog {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//   }

//   .modal-content {
//     width: 80vw;
//     max-width: 900px;
//     border-radius: 10px;
//     overflow: hidden;
//   }

//   @media (max-width: 768px) {
//     .modal-content {
//       width: 90vw;
//     }
//   }
// `;

// const ModalHeader = styled(BootstrapModal.Header)`
//   background-color: #f8f9fa;
//   border-bottom: 1px solid #dee2e6;
// `;

// const ModalBody = styled(BootstrapModal.Body)`
//   padding: 2rem;
// `;

// const ModalFooter = styled(BootstrapModal.Footer)`
//   background-color: #f8f9fa;
//   border-top: 1px solid #dee2e6;
// `;

// const LectureItem = ({ lecture, courseId, sectionId }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [showPDFModal, setShowPDFModal] = useState(false);
//   const [selectedPDF, setSelectedPDF] = useState(null);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handlePDFClick = (pdf) => {
//     setSelectedPDF(`https://api.novajobs.us${pdf}`);
//     setShowPDFModal(true);
//   };

//   const handlePDFModalClose = () => {
//     setShowPDFModal(false);
//     setSelectedPDF(null);
//   };

//   return (
//     <li className="lecture-item">
//       <div className="lecture-header">
//         <h6 className="lecture-name">{lecture.lecture_name}</h6>
//         <div className="button-group">
//           <button
//             className="btn btn-sm btn-info preview-button"
//             onClick={toggleExpand}
//           >
//             {isExpanded ? (
//               <>
//                 <FeatherIcon icon="x-circle" className="me-2" />
//                 Close
//               </>
//             ) : (
//               <>
//                 <FeatherIcon icon="eye" className="me-2" />
//                 Preview
//               </>
//             )}
//           </button>
//           <Link
//             to={`/edit-lecture/${courseId}/${sectionId}/${lecture.id}`}
//             className="btn btn-sm btn-warning edit-lecture-button"
//           >
//             <FeatherIcon icon="edit" className="me-2" />
//             Edit Lecture
//           </Link>
//         </div>
//       </div>
//       {isExpanded && (
//         <div className="lecture-content">
//           {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.length > 0 && (
//             <div className="lecture-pdfs">
//               <strong>PDF Resources:</strong>
//               <ul>
//                 {lecture.lecture_resources_pdf.map((pdf, index) => (
//                   <li key={index}>
//                     <Button
//                       variant="link"
//                       onClick={() => handlePDFClick(pdf)}
//                     >
//                       PDF {index + 1}
//                     </Button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {lecture.lecture_resources_link && lecture.lecture_resources_link.length > 0 && (
//             <div className="lecture-links">
//               <strong>External Links:</strong>
//               <ul>
//                 {lecture.lecture_resources_link.map((link, index) => (
//                   <li key={index}>
//                     <a href={link} target="_blank" rel="noopener noreferrer">
//                       Link {index + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}

//       {showPDFModal && (
//         <StyledModal show={showPDFModal} onHide={handlePDFModalClose}>
//           <ModalHeader closeButton>
//             <Modal.Title>PDF Viewer</Modal.Title>
//           </ModalHeader>
//           <ModalBody>
//             {selectedPDF && (
//               <iframe
//                 src={selectedPDF}
//                 title="PDF Viewer"
//                 width="100%"
//                 height="600px"
//                 frameBorder="0"
//               />
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="secondary" onClick={handlePDFModalClose}>Close</Button>
//           </ModalFooter>
//         </StyledModal>
//       )}
//     </li>
//   );
// };

// LectureItem.propTypes = {
//   lecture: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     lecture_name: PropTypes.string.isRequired,
//     lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
//     lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
//   courseId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

// export default LectureItem;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import FeatherIcon from 'feather-icons-react';
// import { Button, Modal as BootstrapModal, Modal } from 'react-bootstrap';
// import styled from 'styled-components';
// import ReactPlayer from 'react-player';
// import axios from 'axios';

// // Styled components
// const StyledModal = styled(BootstrapModal)`
//   .modal-dialog {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//     width:80vw;
//   }

//   .modal-content {
//     width: 80vw;
//     max-width: 900px;
//     border-radius: 10px;
//     overflow: hidden;
//   }

//   @media (max-width: 768px) {
//     .modal-content {
//       width: 90vw;
//     }
//   }
// `;

// const ModalHeader = styled(BootstrapModal.Header)`
//   background-color: #f8f9fa;
//   border-bottom: 1px solid #dee2e6;
// `;

// const ModalBody = styled(BootstrapModal.Body)`
//   padding: 2rem;
// `;

// const ModalFooter = styled(BootstrapModal.Footer)`
//   background-color: #f8f9fa;
//   border-top: 1px solid #dee2e6;
// `;

// const LectureItem = ({ lecture, courseId, sectionId }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [showPDFModal, setShowPDFModal] = useState(false);
//   const [selectedPDF, setSelectedPDF] = useState(null);
//   const [showVideoModal, setShowVideoModal] = useState(false);
//   const [streamingUrl, setStreamingUrl] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   // const [selectedLecture, setSelectedLecture] = useState(null);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handlePDFClick = (pdf) => {
//     setSelectedPDF(`https://api.novajobs.us${pdf}`);
//     setShowPDFModal(true);
//   };

//   const handlePreviewClick = async (lecture, sectionId) => {
//     console.log(`Lecture: ${lecture.lecture_name}`);
//     setError(null);

//     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
//       setError('No videos available for this lecture');
//       setShowVideoModal(true);
//       return;
//     }

//     try {
//       setLoading(true);
//       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseId}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
//       console.log('Fetching Streaming URL:', streamingURL);

//       const response = await axios.get(streamingURL, { responseType: 'blob' });

//       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
//       const videoUrl = URL.createObjectURL(videoBlob);

//       setStreamingUrl(videoUrl);
//       console.log('Video URL:', videoUrl);
//       setShowVideoModal(true);
//     } catch (error) {
//       console.error('Error fetching video:', error);
//       setError('Unable to fetch video. Please try again later.');
//       setShowVideoModal(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVideoClick = () => {
//     handlePreviewClick(lecture, sectionId);
//   };

//   const handlePDFModalClose = () => {
//     setShowPDFModal(false);
//     setSelectedPDF(null);
//   };

//   const handleVideoModalClose = () => {
//     setShowVideoModal(false);
//     setStreamingUrl(null);
//     setError(null);
//   };

//   return (
//     <li className="lecture-item">
//       <div className="lecture-header">
//         <h6 className="lecture-name">{lecture.lecture_name}</h6>
//         <div className="button-group">
//           <button
//             className="btn btn-sm btn-info preview-button"
//             onClick={toggleExpand}
//           >
//             {isExpanded ? (
//               <>
//                 <FeatherIcon icon="x-circle" className="me-2" />
//                 Close
//               </>
//             ) : (
//               <>
//                 <FeatherIcon icon="eye" className="me-2" />
//                 Preview
//               </>
//             )}
//           </button>
//           <Link
//             to={`/edit-lecture/${courseId}/${sectionId}/${lecture.id}`}
//             className="btn btn-sm btn-warning edit-lecture-button"
//           >
//             <FeatherIcon icon="edit" className="me-2" />
//             Edit Lecture
//           </Link>
//         </div>
//       </div>
//       {isExpanded && (
//         <div className="lecture-content">
//           {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.length > 0 && (
//             <div className="lecture-pdfs">
//               <strong>PDF Resources:</strong>
//               <ul>
//                 {lecture.lecture_resources_pdf.map((pdf, index) => (
//                   <li key={index}>
//                     <Button
//                       variant="link"
//                       onClick={() => handlePDFClick(pdf)}
//                     >
//                       PDF {index + 1}
//                     </Button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {lecture.lecture_resources_link && lecture.lecture_resources_link.length > 0 && (
//             <div className="lecture-links">
//               <strong>External Links:</strong>
//               <ul>
//                 {lecture.lecture_resources_link.map((link, index) => (
//                   <li key={index}>
//                     <a href={link} target="_blank" rel="noopener noreferrer">
//                       Link {index + 1}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {lecture.lecture_videos && lecture.lecture_videos.length > 0 && (
//             <div className="lecture-videos">
//               <strong>Video Resources:</strong>
//               <ul>
//                 {lecture.lecture_videos.map((video, index) => (
//                   <li key={index}>
//                     <Button
//                       variant="link"
//                       onClick={() => handleVideoClick(video)}
//                     >
//                       Video {index + 1}
//                     </Button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}

//       {showPDFModal && (
//         <StyledModal show={showPDFModal} onHide={handlePDFModalClose}>
//           <ModalHeader closeButton>
//             <Modal.Title>PDF Viewer</Modal.Title>
//           </ModalHeader>
//           <ModalBody>
//             {selectedPDF && (
//               <iframe
//                 src={selectedPDF}
//                 title="PDF Viewer"
//                 width="100%"
//                 height="600px"
//                 frameBorder="0"
//               />
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="secondary" onClick={handlePDFModalClose}>Close</Button>
//           </ModalFooter>
//         </StyledModal>
//       )}

//       {showVideoModal && (
//         <StyledModal show={showVideoModal} onHide={handleVideoModalClose}>
//           <ModalHeader closeButton>
//             <Modal.Title>Video Viewer</Modal.Title>
//           </ModalHeader>
//           <ModalBody>
//             {loading && <p>Loading...</p>}
//             {error && <p className="text-danger">{error}</p>}
//             {streamingUrl && !loading && !error && (
//               <ReactPlayer
//                 url={streamingUrl}
//                 controls
//                 width="100%"
//                 height="600px"
//               />
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="secondary" onClick={handleVideoModalClose}>Close</Button>
//           </ModalFooter>
//         </StyledModal>
//       )}
//     </li>
//   );
// };

// LectureItem.propTypes = {
//   lecture: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     lecture_name: PropTypes.string.isRequired,
//     lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
//     lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
//     lecture_videos: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
//   courseId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

// export default LectureItem;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FeatherIcon from "feather-icons-react";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import styled from "styled-components";
import ReactPlayer from "react-player";
import axios from "axios";

const LectureItemWrapper = styled.li`
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const LectureHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #e9ecef;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LectureName = styled.h6`
  margin: 0;
  font-weight: 600;
  color: #495057;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 576px) {
    margin-top: 0.5rem;
  }
`;

const LectureContent = styled.div`
  padding: 1rem;
`;

const ResourceSection = styled.div`
  margin-bottom: 1rem;

  strong {
    display: block;
    margin-bottom: 0.5rem;
    color: #495057;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  li {
    margin-bottom: 0.25rem;
  }
`;

const StyledModal = styled(BootstrapModal)`
  .modal-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .modal-content {
    width: 90vw;
    max-width: 900px;
    border-radius: 10px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .modal-content {
      width: 95vw;
    }
  }
`;

const ModalHeader = styled(BootstrapModal.Header)`
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const ModalBody = styled(BootstrapModal.Body)`
  padding: 1.5rem;
`;

const ModalFooter = styled(BootstrapModal.Footer)`
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
`;

const LectureItem = ({ lecture, courseId, sectionId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [streamingUrl, setStreamingUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePDFClick = (pdf) => {
    setSelectedPDF(`https://api.novajobs.us${pdf}`);
    setShowPDFModal(true);
  };

  const handlePreviewClick = async (lecture, sectionId) => {
    console.log(`Lecture: ${lecture.lecture_name}`);
    setError(null);

    if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
      setError("No videos available for this lecture");
      setShowVideoModal(true);
      return;
    }

    try {
      setLoading(true);
      const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseId}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
      console.log("Fetching Streaming URL:", streamingURL);

      const response = await axios.get(streamingURL, { responseType: "blob" });

      const videoBlob = new Blob([response.data], { type: "video/mp4" });
      const videoUrl = URL.createObjectURL(videoBlob);

      setStreamingUrl(videoUrl);
      console.log("Video URL:", videoUrl);
      setShowVideoModal(true);
    } catch (error) {
      console.error("Error fetching video:", error);
      setError("Unable to fetch video. Please try again later.");
      setShowVideoModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoClick = () => {
    handlePreviewClick(lecture, sectionId);
  };

  const handlePDFModalClose = () => {
    setShowPDFModal(false);
    setSelectedPDF(null);
  };

  const handleVideoModalClose = () => {
    setShowVideoModal(false);
    setStreamingUrl(null);
    setError(null);
  };

  return (
    <LectureItemWrapper>
      <LectureHeader style={{ cursor: "move" }}>
        <LectureName>{lecture.lecture_name}</LectureName>
        <ButtonGroup>
          <Button variant="outline-info" size="sm" onClick={toggleExpand}>
            {isExpanded ? (
              <>
                <FeatherIcon icon="x-circle" size="14" />
                <span className="d-none d-sm-inline ms-1">Close</span>
              </>
            ) : (
              <>
                <FeatherIcon icon="eye" size="14" />
                <span className="d-none d-sm-inline ms-1">Preview</span>
              </>
            )}
          </Button>
          <Link
            to={`/edit-lecture/${courseId}/${sectionId}/${lecture.id}`}
            className="btn btn-outline-warning btn-sm"
          >
            <FeatherIcon icon="edit" size="14" />
            <span className="d-none d-sm-inline ms-1">Edit</span>
          </Link>
        </ButtonGroup>
      </LectureHeader>
      {isExpanded && (
        <LectureContent>
          {lecture.lecture_resources_pdf &&
            lecture.lecture_resources_pdf.length > 0 && (
              <ResourceSection>
                <strong>PDF Resources:</strong>
                <ul>
                  {lecture.lecture_resources_pdf.map((pdf, index) => (
                    <li key={index}>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => handlePDFClick(pdf)}
                      >
                        PDF {index + 1}
                      </Button>
                    </li>
                  ))}
                </ul>
              </ResourceSection>
            )}
          {lecture.lecture_resources_link &&
            lecture.lecture_resources_link.length > 0 && (
              <ResourceSection>
                <strong>External Links:</strong>
                <ul>
                  {lecture.lecture_resources_link.map((link, index) => (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        Link {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </ResourceSection>
            )}
          {lecture.lecture_videos && lecture.lecture_videos.length > 0 && (
            <ResourceSection>
              <strong>Video Resources:</strong>
              <ul>
                {lecture.lecture_videos.map((video, index) => (
                  <li key={index}>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => handleVideoClick(video)}
                    >
                      Video {index + 1}
                    </Button>
                  </li>
                ))}
              </ul>
            </ResourceSection>
          )}
        </LectureContent>
      )}

      <StyledModal show={showPDFModal} onHide={handlePDFModalClose}>
        <ModalHeader closeButton>
          <BootstrapModal.Title>PDF Viewer</BootstrapModal.Title>
        </ModalHeader>
        <ModalBody>
          {selectedPDF && (
            <iframe
              src={selectedPDF}
              title="PDF Viewer"
              width="100%"
              height="600px"
              frameBorder="0"
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handlePDFModalClose}>
            Close
          </Button>
        </ModalFooter>
      </StyledModal>

      <StyledModal show={showVideoModal} onHide={handleVideoModalClose}>
        <ModalHeader closeButton>
          <BootstrapModal.Title>Video Viewer</BootstrapModal.Title>
        </ModalHeader>
        <ModalBody>
          {loading && <p>Loading...</p>}
          {error && <p className="text-danger">{error}</p>}
          {streamingUrl && !loading && !error && (
            <ReactPlayer
              url={streamingUrl}
              controls
              width="100%"
              height="auto"
              style={{ maxHeight: "70vh" }}
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleVideoModalClose}>
            Close
          </Button>
        </ModalFooter>
      </StyledModal>
    </LectureItemWrapper>
  );
};

LectureItem.propTypes = {
  lecture: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    lecture_name: PropTypes.string.isRequired,
    lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
    lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
    lecture_videos: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  courseId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default LectureItem;
