import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LectureItem = ({ lecture, courseId, sectionId }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
            {isExpanded ? 'Close' : 'Preview'}
          </button>
          <Link
            to={`/edit-lecture/${courseId}/${sectionId}/${lecture.id}`}
            className="btn btn-sm btn-warning edit-lecture-button"
          >
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
                    <a href={pdf} target="_blank" rel="noopener noreferrer">
                      PDF {index + 1}
                    </a>
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