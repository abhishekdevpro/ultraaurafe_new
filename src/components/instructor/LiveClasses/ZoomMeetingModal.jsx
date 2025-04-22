// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap';
// import { X, Maximize, Minimize } from 'lucide-react';
// import PropTypes from 'prop-types';

// const ZoomMeetingModal = ({ showMeetingModal, handleMeetingClose, activeMeetingUrl,passcode }) => {
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   const toggleFullScreen = () => {
//     if (!document.fullscreenElement) {
//       document.documentElement.requestFullscreen();
//       setIsFullScreen(true);
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//         setIsFullScreen(false);
//       }
//     }
//   };

//   return (
//     <Modal
//       show={showMeetingModal}
//       onHide={handleMeetingClose}
//       size="lg"
//       centered
//       fullscreen={isFullScreen}
//     >
//       <Modal.Header className="border-bottom-0">
//         <div className="d-flex justify-content-between align-items-center w-100">
//           <Modal.Title>Live Class </Modal.Title>
//           <Modal.Title>{`Passcode ${passcode}`} </Modal.Title>
//           <div>
//             <button
//               className="btn btn-link p-0 me-2"
//               onClick={toggleFullScreen}
//               aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
//             >
//               {isFullScreen ? <Minimize size={24} /> : <Maximize size={24} />}
//             </button>
//             <button
//               className="btn btn-link p-0"
//               onClick={handleMeetingClose}
//               aria-label="Close"
//             >
//               <X size={24} />
//             </button>
//           </div>
//         </div>
//       </Modal.Header>
//       <Modal.Body className="p-0">
//         {activeMeetingUrl ? (
//           <div className="position-relative" style={{ height: isFullScreen ? '100vh' : '75vh' }}>
//             <iframe
//               src={activeMeetingUrl}
//               width="100%"
//               height="100%"
//               allow="camera; microphone; fullscreen"
//               frameBorder="0"
//               title="Zoom Meeting"
//               className="position-absolute top-0 start-0 w-100 h-100"
//             ></iframe>
//           </div>
//         ) : (
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
//             <p className="text-center">Loading meeting...</p>
//           </div>
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// };

// ZoomMeetingModal.propTypes = {
//   showMeetingModal: PropTypes.bool.isRequired,
//   passcode: PropTypes.string.isRequired,
//   handleMeetingClose: PropTypes.func.isRequired,
//   activeMeetingUrl: PropTypes.string
// };

// export default ZoomMeetingModal;

import React, { useState, useEffect } from 'react';
import { Modal, Alert, Spinner } from 'react-bootstrap';
import { X, Maximize, Minimize } from 'lucide-react';
import PropTypes from 'prop-types';

const ZoomMeetingModal = ({
  showMeetingModal,
  handleMeetingClose,
  activeMeetingUrl,
  passcode
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [permissionError, setPermissionError] = useState(false);

  // Handle fullscreen toggle
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  // Request permissions when component mounts
  useEffect(() => {
    const requestPermissions = async () => {
      try {
        // Request both camera and microphone permissions
        await Promise.all([
          navigator.mediaDevices.getUserMedia({ video: true }),
          navigator.mediaDevices.getUserMedia({ audio: true })
        ]);
        setPermissionError(false);
      } catch (err) {
        console.error('Permission error:', err);
        setPermissionError(true);
      }
    };

    if (showMeetingModal) {
      requestPermissions();
    }
  }, [showMeetingModal]);

  return (
    <Modal
      show={showMeetingModal}
      onHide={handleMeetingClose}
      size="lg"
      centered
      fullscreen={isFullScreen}
    >
      <Modal.Header className="border-bottom-0">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Modal.Title className="h5 mb-0">Live Class</Modal.Title>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <span className="fw-bold">Passcode:</span> {passcode}
            </div>
            <button
              className="btn btn-link p-1 me-2"
              onClick={toggleFullScreen}
              aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
            >
              {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
            <button
              className="btn btn-link p-1"
              onClick={handleMeetingClose}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </Modal.Header>

      <Modal.Body className="p-0">
        {permissionError && (
          <Alert variant="danger" className="m-3">
            <Alert.Heading className="h6">Permission Error</Alert.Heading>
            Please allow camera and microphone access to join the meeting.
            Check your browser settings if permissions are blocked.
          </Alert>
        )}

        {activeMeetingUrl ? (
          <div 
            className="position-relative" 
            style={{ height: isFullScreen ? '90vh' : '75vh' }}
          >
            <iframe
              src={activeMeetingUrl}
              width="100%"
              height="100%"
              allow="camera *; microphone *; autoplay; display-capture; fullscreen"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              importance="high"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zoom Meeting"
              className="position-absolute top-0 start-0 w-100 h-100"
            ></iframe>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '75vh' }}>
            <div className="text-center">
              <Spinner animation="border" variant="primary" className="mb-2" />
              <p className="text-muted mb-0">Loading meeting...</p>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

ZoomMeetingModal.propTypes = {
  showMeetingModal: PropTypes.bool.isRequired,
  passcode: PropTypes.string.isRequired,
  handleMeetingClose: PropTypes.func.isRequired,
  activeMeetingUrl: PropTypes.string
};

export default ZoomMeetingModal;