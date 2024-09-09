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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Button, Modal as BootstrapModal, Modal } from 'react-bootstrap';
import styled from 'styled-components';

// Styled components
const StyledModal = styled(BootstrapModal)`
  .modal-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .modal-content {
    width: 80vw;
    max-width: 900px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    .modal-content {
      width: 90vw;
    }
  }
`;

const ModalHeader = styled(BootstrapModal.Header)`
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const ModalBody = styled(BootstrapModal.Body)`
  padding: 2rem;
`;

const ModalFooter = styled(BootstrapModal.Footer)`
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
`;

const LectureItem = ({ lecture, courseId, sectionId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePDFClick = (pdf) => {
    setSelectedPDF(`https://api.novajobs.us${pdf}`);
    setShowPDFModal(true);
  };

  const handlePDFModalClose = () => {
    setShowPDFModal(false);
    setSelectedPDF(null);
  };

  return (
    <li className="lecture-item">
      <div className="lecture-header">
        <h6 className="lecture-name">{lecture.lecture_name}</h6>
        <div className="button-group">
          <button
            className="btn btn-sm btn-info preview-button"
            onClick={toggleExpand}
          >
            {isExpanded ? (
              <>
                <FeatherIcon icon="x-circle" className="me-2" />
                Close
              </>
            ) : (
              <>
                <FeatherIcon icon="eye" className="me-2" />
                Preview
              </>
            )}
          </button>
          <Link
            to={`/edit-lecture/${courseId}/${sectionId}/${lecture.id}`}
            className="btn btn-sm btn-warning edit-lecture-button"
          >
            <FeatherIcon icon="edit" className="me-2" />
            Edit Lecture
          </Link>
        </div>
      </div>
      {isExpanded && (
        <div className="lecture-content">
          {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.length > 0 && (
            <div className="lecture-pdfs">
              <strong>PDF Resources:</strong>
              <ul>
                {lecture.lecture_resources_pdf.map((pdf, index) => (
                  <li key={index}>
                    <Button
                      variant="link"
                      onClick={() => handlePDFClick(pdf)}
                    >
                      PDF {index + 1}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {lecture.lecture_resources_link && lecture.lecture_resources_link.length > 0 && (
            <div className="lecture-links">
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
            </div>
          )}
        </div>
      )}

      {showPDFModal && (
        <StyledModal show={showPDFModal} onHide={handlePDFModalClose}>
          <ModalHeader closeButton>
            <Modal.Title>PDF Viewer</Modal.Title>
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
            <Button variant="secondary" onClick={handlePDFModalClose}>Close</Button>
          </ModalFooter>
        </StyledModal>
      )}
    </li>
  );
};

LectureItem.propTypes = {
  lecture: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    lecture_name: PropTypes.string.isRequired,
    lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
    lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  courseId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default LectureItem;
