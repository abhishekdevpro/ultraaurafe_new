import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { X, Maximize, Minimize } from 'lucide-react';
import PropTypes from 'prop-types';

const ZoomMeetingModal = ({ showMeetingModal, handleMeetingClose, activeMeetingUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

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
          <Modal.Title>Live Class </Modal.Title>
          <div>
            <button
              className="btn btn-link p-0 me-2"
              onClick={toggleFullScreen}
              aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
            >
              {isFullScreen ? <Minimize size={24} /> : <Maximize size={24} />}
            </button>
            <button
              className="btn btn-link p-0"
              onClick={handleMeetingClose}
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className="p-0">
        {activeMeetingUrl ? (
          <div className="position-relative" style={{ height: isFullScreen ? '100vh' : '75vh' }}>
            <iframe
              src={activeMeetingUrl}
              width="100%"
              height="100%"
              allow="camera; microphone; fullscreen"
              frameBorder="0"
              title="Zoom Meeting"
              className="position-absolute top-0 start-0 w-100 h-100"
            ></iframe>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
            <p className="text-center">Loading meeting...</p>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

ZoomMeetingModal.propTypes = {
  showMeetingModal: PropTypes.bool.isRequired,
  handleMeetingClose: PropTypes.func.isRequired,
  activeMeetingUrl: PropTypes.string
};

export default ZoomMeetingModal;