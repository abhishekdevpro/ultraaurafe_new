import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ activeTab }) => {
  return (
    <div className="widget-setcount">
      <ul id="progressbar">
        <li className={activeTab === "basic" ? "progress-active" : "progress-activated"}>
          <p>
            <span></span> Basic Information
          </p>
        </li>
        <li
          className={activeTab === "media" ? "progress-active" : activeTab === "settings" ? "progress-activated" : ""}
        >
          <p>
            <span></span> Courses Media
          </p>
        </li>
        <li className={activeTab === "settings" ? "progress-active" : ""}>
          <p>
            <span></span> Settings
          </p>
        </li>
      </ul>
    </div>
  )
}

// Add PropTypes for validation
ProgressBar.propTypes = {
  activeTab: PropTypes.oneOf(['basic', 'media', 'settings']).isRequired
}

// Add default props
ProgressBar.defaultProps = {
  activeTab: 'basic'
}

export default ProgressBar