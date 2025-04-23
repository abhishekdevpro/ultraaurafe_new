import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import LectureListComponent from "./LectureListComponents";
import { ChevronDown } from "lucide-react";
import { toast } from "react-toastify";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 95%;
  max-width: 1200px;
  height: 90vh;
  max-height: 800px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 16px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h4`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6c757d;
  &:hover {
    color: #343a40;
  }
`;

const ModalBody = styled.div`
  flex: 1;
  overflow: auto;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  max-height: calc(90vh - 100px);
  object-fit: contain;
`;

const ErrorMessage = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
`;

const PDFModal = styled(ModalContent)`
  width: 80%;
  height: 80vh;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoModal = ({
  isOpen,
  onClose,
  lecture,
  streamingUrl,
  error,
  courseId,
  sectionId,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
  };

  const handleLoadedMetadata = (event) => {
    setDuration(event.target.duration);
  };

  const handleClose = async () => {
    console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);

    const completed = currentTime >= duration;
    const progress = Math.round(currentTime);
    const last_watched_at = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/video-history/${courseId}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`,
        {
          last_watched_at,
          progress,
          completed,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log("Video history updated:", response.data);
    } catch (error) {
      console.error("Error updating video history:", error);
    }

    onClose(currentTime);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{lecture?.lecture_name || "Video Preview"}</ModalTitle>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : streamingUrl ? (
            <VideoPlayer
              src={streamingUrl}
              controls
              autoPlay
              controlsList="nodownload"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onContextMenu={(e) => e.preventDefault()} // disables right-click
              onTouchStart={(e) => e.preventDefault()}
              // eslint-disable-next-line no-undef
              onError={() => setError("Video failed to load.")}
            />
          ) : (
            <p>Loading video...</p>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  lecture: PropTypes.object,
  streamingUrl: PropTypes.string,
  error: PropTypes.string,
  courseId: PropTypes.number.isRequired,
  sectionId: PropTypes.number.isRequired,
};

const PDFViewerModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <PDFModal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>PDF Viewer</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <PDFViewer
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(
              pdfUrl
            )}&embedded=true`}
          />
        </ModalBody>
      </PDFModal>
    </ModalOverlay>,
    document.body
  );
};

PDFViewerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pdfUrl: PropTypes.string.isRequired,
};

// const CourseContent = ({ courseData}) => {
//   console.log(courseData);
//   const [open, setOpen] = useState({});
//   const [selectedLecture, setSelectedLecture] = useState(null);
//   const [streamingUrl, setStreamingUrl] = useState(null);
//   const [loadingStates, setLoadingStates] = useState({});
//   const [showVideoModal, setShowVideoModal] = useState(false);
//   const [showPDFModal, setShowPDFModal] = useState(false);
//   const [selectedPDFUrl, setSelectedPDFUrl] = useState(null);
//   const [error, setError] = useState(null);
//   const [currentSectionId, setCurrentSectionId] = useState(null);

//   useEffect(() => {
//     if (showVideoModal) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [showVideoModal]);

//   const toggleOpen = (sectionId) => {
//     setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
//   };

//   const handlePreviewClick = async (lecture, sectionId) => {
//     console.log(`Lecture: ${lecture.lecture_name}`);
//     setSelectedLecture(lecture);
//     setCurrentSectionId(sectionId);
//     setError(null);

//     if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
//       setError('No videos available for this lecture');
//       setShowVideoModal(true);
//       return;
//     }

//     try {
//       setLoadingStates(prev => ({ ...prev, [lecture.id]: true }));
//       const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;
//       console.log('Fetching Streaming URL:', streamingURL);

//       const response = await axios.get(streamingURL, {
//         responseType: 'blob',
//       });

//       const videoBlob = new Blob([response.data], { type: 'video/mp4' });
//       const videoUrl = URL.createObjectURL(videoBlob);

//       setStreamingUrl(videoUrl);
//       console.log('Video URL:', videoUrl);
//       setShowVideoModal(true);
//     } catch (error) {
//       console.error('Error fetching video:', error);
//       setError('Unable to fetch video. Please try again later.');
//       setShowVideoModal(true);
//     } finally {
//       setLoadingStates(prev => ({ ...prev, [lecture.id]: false }));
//     }
//   };

//   const closePreview = (currentTime) => {
//     setSelectedLecture(null);
//     setStreamingUrl(null);
//     setShowVideoModal(false);
//     setError(null);
//     console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);
//   };

//   const handlePDFClick = (pdfUrl) => {
//     console.log(pdfUrl, 'mmmmm');
//     setSelectedPDFUrl(pdfUrl);
//     setShowPDFModal(true);
//   };

//   const closePDFViewer = () => {
//     setSelectedPDFUrl(null);
//     setShowPDFModal(false);
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
//               <LectureListComponent
//   section={section}
//   handlePreviewClick={handlePreviewClick}
//   handlePDFClick={handlePDFClick}
//   loadingStates={loadingStates}
// />
//             </div>
//           </div>
//         ))}
//       </div>

//       <VideoModal
//         isOpen={showVideoModal}
//         onClose={closePreview}
//         lecture={selectedLecture}
//         streamingUrl={streamingUrl}
//         error={error}
//         courseId={courseData.course_id}
//         sectionId={currentSectionId}
//       />

//       <PDFViewerModal
//         isOpen={showPDFModal}
//         onClose={closePDFViewer}
//         pdfUrl={selectedPDFUrl}
//       />
//     </div>
//   );
// };
const CourseContentWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CourseContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const SectionCount = styled.h6`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const CourseSection = styled.div`
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const SectionHeader = styled.h6`
  margin: 0;
  padding: 15px;
  background-color: #f5f5f5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SectionTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const ChevronIcon = styled(ChevronDown)`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

const SectionContent = styled.div`
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 1s ease-in-out;
`;

const CourseContent = ({ courseData }) => {
  const [open, setOpen] = useState({});
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [streamingUrl, setStreamingUrl] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [selectedPDFUrl, setSelectedPDFUrl] = useState(null);
  const [error, setError] = useState(null);
  const [currentSectionId, setCurrentSectionId] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showVideoModal]);

  const toggleOpen = (sectionId) => {
    setOpen((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handlePreviewClick = async (lecture, sectionId) => {
    setSelectedLecture(lecture);
    setCurrentSectionId(sectionId);
    setError(null);

    if (!lecture.lecture_videos || lecture.lecture_videos.length === 0) {
      setError("No videos available for this lecture");
      setShowVideoModal(true);
      return;
    }

    try {
      setLoadingStates((prev) => ({ ...prev, [lecture.id]: true }));
      const streamingURL = `https://api.novajobs.us/api/trainers/streaming/${courseData.course_id}/${sectionId}/${lecture.id}/${lecture.lecture_videos[0].id}`;

      const response = await axios.get(streamingURL, {
        responseType: "blob",
      });

      const videoBlob = new Blob([response.data], { type: "video/mp4" });
      const videoUrl = URL.createObjectURL(videoBlob);

      setStreamingUrl(videoUrl);
      setShowVideoModal(true);
    } catch (error) {
      console.error("Error fetching video:", error);
      setError("Unable to fetch video. Please try again later.");
      setShowVideoModal(true);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [lecture.id]: false }));
    }
  };

  const closePreview = (currentTime) => {
    setSelectedLecture(null);
    setStreamingUrl(null);
    setShowVideoModal(false);
    setError(null);
    console.log(`Video closed at time: ${currentTime.toFixed(2)} seconds`);
  };

  const handlePDFClick = (pdfUrl) => {
    setSelectedPDFUrl(pdfUrl);
    setShowPDFModal(true);
  };

  const closePDFViewer = () => {
    setSelectedPDFUrl(null);
    setShowPDFModal(false);
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token || !courseData?.course_id) return;

    const checkEnrollmentStatus = async () => {
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/students/pro/course-details/${courseData.course_id}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const data = response.data?.data;
        setIsEnrolled(data?.is_student_enroll || false);
      } catch (error) {
        console.error("Error fetching course details:", error);
        toast.error("Failed to verify course enrollment.");
        setIsEnrolled(false);
      }
    };

    checkEnrollmentStatus();
  }, [courseData?.course_id, token]);

  return (
    <CourseContentWrapper>
      <CourseContentHeader>
        <Title>Course Content</Title>
        <SectionCount>
          {courseData.section_response.length} Sections
        </SectionCount>
      </CourseContentHeader>
     
      {courseData?.section_response?.length > 0 ? (
        courseData.section_response.map((section) => (
          <CourseSection key={section.id}>
            <SectionHeader onClick={() => toggleOpen(section.id)}>
              <SectionTitle>{section.section_name}</SectionTitle>
              <ChevronIcon size={20} isOpen={open[section.id]} />
            </SectionHeader>
            <SectionContent isOpen={open[section.id]}>
              {isEnrolled ? (
                <LectureListComponent
                  section={section}
                  handlePreviewClick={handlePreviewClick}
                  handlePDFClick={handlePDFClick}
                  loadingStates={loadingStates}
                />
              ) : (
                <p className="text-muted text-center m-2">
                  Please enroll to view the Content.
                </p>
              )}
            </SectionContent>
          </CourseSection>
        ))
      ) : (
        <p>No sections found for this course.</p>
      )}

      <VideoModal
        isOpen={showVideoModal}
        onClose={closePreview}
        lecture={selectedLecture}
        streamingUrl={streamingUrl}
        error={error}
        courseId={courseData.course_id}
        sectionId={currentSectionId}
      />

      <PDFViewerModal
        isOpen={showPDFModal}
        onClose={closePDFViewer}
        pdfUrl={selectedPDFUrl}
      />
    </CourseContentWrapper>
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
                id: PropTypes.number.isRequired,
              })
            ),
            lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
            lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
          })
        ),
      })
    ).isRequired,
  }).isRequired,
};

CourseContent.propTypes = {
  courseData: PropTypes.shape({
    is_student_enroll: PropTypes.bool,
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
                id: PropTypes.number.isRequired,
              })
            ),
            lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
            lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
          })
        ),
      })
    ).isRequired,
  }).isRequired,
};

export default CourseContent;
