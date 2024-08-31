import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Play } from '../../../imagepath';

const CourseContent = ({ courseData }) => {
  const [open, setOpen] = useState({});
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [streamingUrl, setStreamingUrl] = useState(null);

  const toggleOpen = (sectionId) => {
    setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  // const handlePreviewClick = (lecture, sectionId) => { 
  //   console.log(`Lecture: ${lecture.lecture_name}`);
  //   setSelectedLecture(lecture);
   
  //   if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
  //     console.error('No videos available for this lecture');
  //     return;
  //   }

  //   // Construct streaming URL
  //   const streamingURL = `https://api.novajobs.us/api/students/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
  //   console.log('Streaming URL:', streamingURL);

  //   // Set streaming URL
  //   setStreamingUrl(streamingURL);
  // };
const handlePreviewClick = async (lecture, sectionId) => { 
  console.log(`Lecture: ${lecture.lecture_name}`);
  setSelectedLecture(lecture);
  
  if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
    console.error('No videos available for this lecture');
    return;
  }

  try {
    const streamingURL = `https://api.novajobs.us/api/students/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
    console.log('Streaming URL:', streamingURL);

    // Assuming streamingURL is valid, set it as the video source
    setStreamingUrl(streamingURL);

  } catch (error) {
    console.error('Error fetching streaming URL:', error);
    // Optionally, set an error state to display a message to the user
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
                        <button onClick={() => handlePreviewClick(lecture, section.id)}>Preview</button>
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
