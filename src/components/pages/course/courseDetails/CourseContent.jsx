import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { Play } from '../../../imagepath';

const CourseContent = ({ courseData }) => {
  const [open, setOpen] = useState({});
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [streamingUrl, setStreamingUrl] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for API request

  const toggleOpen = (sectionId) => {
    setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  // Handle preview button click and fetch video using API
  const handlePreviewClick = async (lecture, sectionId) => {
    console.log(`Lecture: ${lecture.lecture_name}`);
    setSelectedLecture(lecture);

    if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
      console.error('No videos available for this lecture');
      return;
    }

    try {
      setLoading(true); // Set loading state
      const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
      console.log('Fetching Streaming URL:', streamingURL);

      // Fetch video data as binary (Blob)
      const response = await axios.get(streamingURL, {
        responseType: 'blob', // Ensure response is binary
      });

      // Convert binary data to a Blob URL
      const videoBlob = new Blob([response.data], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);

      setStreamingUrl(videoUrl); // Set the Blob URL to play video
      console.log('Video URL:', videoUrl);
    } catch (error) {
      console.error('Error fetching video:', error);
      alert('Unable to fetch video. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const closePreview = () => {
    setSelectedLecture(null);
    setStreamingUrl(null);
  };

  return (
    <div className="card content-sec">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <h5 className="subs-title">Course Content</h5>
          </div>
          <div className="col-sm-6 text-sm-end">
            <h6>{courseData.section_response.length} Sections</h6>
          </div>
        </div>
        {courseData.section_response.map((section) => (
          <div className="course-card" key={section.id}>
            <h6 className="cou-title">
              <Link
                className={open[section.id] ? "" : "collapsed"}
                onClick={() => toggleOpen(section.id)}
              >
                {section.section_name}
              </Link>
            </h6>
            <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
              <ul>
                {section.lectures && section.lectures.length > 0 ? (
                  section.lectures.map((lecture) => (
                    <li key={lecture.id}>
                      <p>
                        <img src={Play} alt="" className="me-2" />
                        {lecture.lecture_name}
                      </p>
                      <div>
                        <button onClick={() => handlePreviewClick(lecture, section.id)}>
                          {loading ? 'Loading...' : 'Preview'}
                        </button>
                        <span>02:53</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No lectures available for this section.</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {selectedLecture && streamingUrl && (
        <div className="preview-modal">
          <video
            src={streamingUrl}
            controls
            width="100%"
            height="500px"
            onError={() => console.error('Video failed to load.')}
          />
          <button onClick={closePreview}>Close Preview</button>
        </div>
      )}
    </div>
  );
};

CourseContent.propTypes = {
  courseData: PropTypes.shape({
    course_id: PropTypes.number.isRequired,
    section_response: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        section_name: PropTypes.string.isRequired,
        lectures: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            lecture_name: PropTypes.string.isRequired,
            lecture_videos: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.number,
              })
            )
          })
        )
      })
    ).isRequired
  }).isRequired
};

export default CourseContent;
