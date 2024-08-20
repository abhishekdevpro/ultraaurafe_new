// src/components/pages/course/courseDetails/ErrorMessage.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => (
  <div className="error-message">
    <p>{error}</p>
  </div>
);

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
