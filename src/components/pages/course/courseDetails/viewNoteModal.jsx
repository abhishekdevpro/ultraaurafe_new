// ViewNoteModal.jsx
import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Card, Badge } from "react-bootstrap";
import styled from "styled-components";

const NoteCard = styled(Card)`
  margin-bottom: 1rem;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NoteHeader = styled(Card.Header)`
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoteDate = styled.small`
  color: #6c757d;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const NoteImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #dee2e6;
`;

const ViewNoteModal = ({ show, handleClose, notes }) => {
  const getImageUrl = (url) => {
    // If the URL is already absolute, return as is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    // If it's a relative URL, prefix with the API base URL
    return `https://api.novajobs.us/${url}`;
  };
  if (!notes || notes.length === 0) {
    return (
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>View Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>No notes found.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>View Notes ({notes.length})</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
        {notes.map((note, index) => (
          <NoteCard key={note.id || index}>
            <NoteHeader>
              <div>
                <Badge bg="primary">Note #{index + 1}</Badge>
                <NoteDate>
                  Created: {new Date(note.created_at).toLocaleDateString()}
                  {note.updated_at !== note.created_at &&
                    ` | Updated: ${new Date(
                      note.updated_at
                    ).toLocaleDateString()}`}
                </NoteDate>
              </div>
            </NoteHeader>
            <Card.Body>
              <div dangerouslySetInnerHTML={{ __html: note.text }} />

              {note.photos && note.photos.length > 0 && (
                <div>
                  <strong>Images:</strong>
                  <ImageGrid>
                    {note.photos.map((photo, photoIndex) => (
                      <NoteImage
                        key={photoIndex}
                        src={getImageUrl(photo)}
                        alt={`Note image ${photoIndex + 1}`}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ))}
                  </ImageGrid>
                </div>
              )}

              {/* Handle photo_upload field if photos array is empty */}
              {(!note.photos || note.photos.length === 0) &&
                note.photo_upload && (
                  <div>
                    <strong>Image:</strong>
                    <div style={{ marginTop: "1rem" }}>
                      <NoteImage
                        src={getImageUrl(note.photo_upload)}
                        alt="Note image"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                )}
            </Card.Body>
          </NoteCard>
        ))}
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
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      photos: PropTypes.arrayOf(PropTypes.string),
      photo_upload: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
    })
  ),
};

export default ViewNoteModal;
