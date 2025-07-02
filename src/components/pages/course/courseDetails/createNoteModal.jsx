// CreateNoteModal.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal, Button, Form } from "react-bootstrap";

const CreateNoteModal = ({
  show,
  handleClose,
  onSubmit,
  courseId,
  sectionId,
  lectureId,
  existingNote, // <-- ADD THIS
}) => {
  const [noteText, setNoteText] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (show) {
      setNoteText(existingNote || ""); // fallback to empty if undefined
    }
  }, [existingNote, show]);

  const handleFileChange = (e) => setPhoto(e.target.files[0]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo_upload", photo);
    formData.append("text", noteText);
    formData.append("course_id", courseId);
    formData.append("section_id", sectionId);
    formData.append("lecture_id", lectureId);

    await onSubmit(formData);
    handleClose();
    setNoteText("");
    setPhoto(null);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Create Note</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleFormSubmit} className="p-3">
        <Form.Group>
          <Form.Label>Note Text</Form.Label>
          <ReactQuill theme="snow" value={noteText} onChange={setNoteText} />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Upload Photo (optional)</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <div className="mt-4 d-flex justify-content-end">
          <Button variant="secondary" onClick={handleClose} className="me-2">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Submit Note
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

CreateNoteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  courseId: PropTypes.number.isRequired,
  sectionId: PropTypes.number.isRequired,
  lectureId: PropTypes.number.isRequired,
  existingNote: PropTypes.string, // <-- ADD THIS
};

export default CreateNoteModal;
