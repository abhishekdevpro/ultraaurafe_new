// CreateNoteModal.jsx
import React, { useState, useEffect, useRef } from "react";
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
  existingNote,
}) => {
  const [noteText, setNoteText] = useState("");
  const [photos, setPhotos] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (show) {
      setNoteText(existingNote || ""); // fallback to empty if undefined
    }
  }, [existingNote, show]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);

    // Create preview URLs
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    const newUrls = previewUrls.filter((_, i) => i !== index);
    setPhotos(newPhotos);
    setPreviewUrls(newUrls);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append all photos
    photos.forEach((photo) => {
      formData.append("photo_upload", photo);
    });

    formData.append("text", noteText);
    formData.append("course_id", courseId);
    formData.append("section_id", sectionId);
    formData.append("lecture_id", lectureId || 0);

    await onSubmit(formData);
    handleModalClose();
  };

  const handleModalClose = () => {
    setNoteText("");
    setPhotos([]);
    setPreviewUrls([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleModalClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Create Note</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleFormSubmit} className="p-4">
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold mb-2">Note Description</Form.Label>
          <div style={{ minHeight: "300px" }}>
            <ReactQuill
              theme="snow"
              value={noteText}
              onChange={setNoteText}
              style={{ height: "250px" }}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold mb-2">
            Upload Photos (optional)
          </Form.Label>
          <Form.Control
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="form-control-lg"
          />
          <Form.Text className="text-muted">
            You can select multiple images. Supported formats: JPG, PNG, GIF
          </Form.Text>
        </Form.Group>

        {previewUrls.length > 0 && (
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold mb-2">Preview Images:</Form.Label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "15px",
                padding: "15px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #dee2e6",
              }}
            >
              {previewUrls.map((url, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </Form.Group>
        )}
        <div className="d-flex justify-content-end gap-3 pt-3 border-top">
          <Button
            variant="outline-secondary"
            onClick={handleModalClose}
            size="lg"
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="lg">
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
  lectureId: PropTypes.number,
  existingNote: PropTypes.string, // <-- ADD THIS
};

export default CreateNoteModal;
