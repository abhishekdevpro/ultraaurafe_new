// ViewNoteModal.jsx
import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const ViewNoteModal = ({ show, handleClose, noteText, imageUrl }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>View Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {noteText ? (
          <div dangerouslySetInnerHTML={{ __html: noteText }} />
        ) : (
          <p>No note found.</p>
        )}

        {imageUrl && (
          <div className="mt-3">
            <strong>Uploaded Image:</strong>
            <br />
            <img
              src={imageUrl}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ViewNoteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  noteText: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default ViewNoteModal;
