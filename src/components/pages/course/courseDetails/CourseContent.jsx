// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Play } from '../../../imagepath';

// const CourseContent = ({ courseData }) => {
//   const [open, setOpen] = useState({});
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const toggleOpen = (sectionId) => {
//     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
//   };

//   const handlePreviewClick = (lecture) => {
//     console.log(lecture,"lecture")
//     setSelectedLecture(lecture);
//     console.log(selectedLecture,'selected')
//   };

//   return (
//     <div className="card content-sec">
//       <div className="card-body">
//         <div className="row">
//           <div className="col-sm-6">
//             <h5 className="subs-title">Course Content</h5>
//           </div>
//           <div className="col-sm-6 text-sm-end">
//             <h6>{courseData.section_response.length} Sections</h6>
//           </div>
//         </div>
//         {courseData.section_response.map((section) => (
//           <div className="course-card" key={section.id}>
//             <h6 className="cou-title">
//               <Link
//                 className={open[section.id] ? "" : "collapsed"}
//                 onClick={() => toggleOpen(section.id)}
//               >
//                 {section.section_name}
//               </Link>
//             </h6>
//             <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
//               <ul>
//                 {section.lectures && section.lectures.length > 0 ? (
//                   section.lectures.map((lecture) => (
//                     <li key={lecture.id}>
//                       <p>
//                         <img src={Play} alt="" className="me-2" />
//                         {lecture.lecture_name}
//                       </p>
//                       <div>
//                         <button onClick={() => handlePreviewClick(lecture)}>Preview</button>
//                         <span>02:53</span>
//                       </div>
//                     </li>
//                   ))
//                 ) : (
//                   <li>No lectures available for this section.</li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Conditional rendering of the iframe for preview */}
//       {selectedLecture && (
//         <div className="preview-modal">
//           <iframe
//             src={selectedLecture.content_url}  // Replace with the actual URL for the lecture content
//             title={selectedLecture.lecture_name}
//             width="100%"
//             height="500px"
//           />
//           <button onClick={() => setSelectedLecture(null)}>Close Preview</button>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default CourseContent;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Play } from '../../../imagepath';

// const CourseContent = ({ courseData }) => {
//   const [open, setOpen] = useState({});
//   const [selectedLecture, setSelectedLecture] = useState(null);
//   const [streamingUrl, setStreamingUrl] = useState(null);

//   const toggleOpen = (sectionId) => {
//     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
//   };

//   const handlePreviewClick = async (lecture, sectionId) => {
//     setSelectedLecture(lecture);
//     console.log(lecture,"lecture")
//     console.log(lecture.lecture_videos[0]?.course_id,sectionId,lecture.id,lecture.lecture_videos[0]?.id,"ids")
//     try {
//       const response = await fetch(`https://api.novajobs.us/api/trainers/streaming/${lecture.lecture_videos[0]?.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0]?.id}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch streaming URL');
//       }
//       const data = await response.json();
//       setStreamingUrl(data.streaming_url); // Assuming the API returns an object with a streaming_url property
//     } catch (error) {
//       console.error('Error fetching streaming URL:', error);
//       // Handle error (e.g., show an error message to the user)
//     }
//   };

//   const closePreview = () => {
//     setSelectedLecture(null);
//     setStreamingUrl(null);
//   };

//   return (
//     <div className="card content-sec">
//       <div className="card-body">
//         <div className="row">
//           <div className="col-sm-6">
//             <h5 className="subs-title">Course Content</h5>
//           </div>
//           <div className="col-sm-6 text-sm-end">
//             <h6>{courseData.section_response.length} Sections</h6>
//           </div>
//         </div>
//         {courseData.section_response.map((section) => (
//           <div className="course-card" key={section.id}>
//             <h6 className="cou-title">
//               <Link
//                 className={open[section.id] ? "" : "collapsed"}
//                 onClick={() => toggleOpen(section.id)}
//               >
//                 {section.section_name}
//               </Link>
//             </h6>
//             <div className={`card-collapse collapse ${open[section.id] ? 'show' : ''}`}>
//               <ul>
//                 {section.lectures && section.lectures.length > 0 ? (
//                   section.lectures.map((lecture) => (
//                     <li key={lecture.id}>
//                       <p>
//                         <img src={Play} alt="" className="me-2" />
//                         {lecture.lecture_name}
//                       </p>
//                       <div>
//                         <button onClick={() => handlePreviewClick(lecture, section.id)}>Preview</button>
//                         <span>02:53</span>
//                       </div>
//                     </li>
//                   ))
//                 ) : (
//                   <li>No lectures available for this section.</li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedLecture && streamingUrl && (
//         <div className="preview-modal">
//           <video
//             src={streamingUrl}
//             controls
//             width="100%"
//             height="500px"
//           />
//           <button onClick={closePreview}>Close Preview</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseContent;

import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Play } from '../../../imagepath';

const CourseContent = ({ courseData }) => {
  const [open, setOpen] = useState({});
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [streamingUrl, setStreamingUrl] = useState(null);

  const toggleOpen = (sectionId) => {
    setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handlePreviewClick = async (lecture, sectionId) => {
    setSelectedLecture(lecture);

    try {
      const token = 'your-auth-token'; // Replace with your actual token

      const response = await axios.get(`https://api.novajobs.us/api/trainers/streaming/${lecture.lecture_videos[0]?.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0]?.id}`, {
        headers: {
          Authorization: `${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Failed to fetch streaming URL');
      }

      const data = response.data;
      setStreamingUrl(data.streaming_url);
    } catch (error) {
      console.error('Error fetching streaming URL:', error);
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
          />
          <button onClick={closePreview}>Close Preview</button>
        </div>
      )}
    </div>
  );
};

// Define PropTypes
CourseContent.propTypes = {
  courseData: PropTypes.shape({
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
                course_id: PropTypes.number,
                id: PropTypes.number
              })
            )
          })
        )
      })
    ).isRequired
  }).isRequired
};

export default CourseContent;
