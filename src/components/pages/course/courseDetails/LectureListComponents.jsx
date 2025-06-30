import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  Play,
  ChevronDown,
  ChevronUp,
  FileText,
  Link as LinkIcon,
} from "lucide-react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";

const LectureList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const LectureItem = styled.li`
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
`;

const LectureHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  background-color: #ffffff;
  border-bottom: 1px solid #e9ecef;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const LectureName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledPlay = styled(Play)`
  margin-right: 0.75rem;
  color: #007bff;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

const PreviewButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
  color: #6c757d;
  transition: all 1s ease;

  &:hover {
    color: #007bff;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const ResourceList = styled.ul`
  list-style-type: none;
  padding: 1rem 1.5rem;
  margin: 0;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const ResourceItem = styled.li`
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const ResourceLink = styled.a`
  color: #28a745;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #e9ecef;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #dde2e6;
    color: #218838;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const LectureContent = styled.div`
  padding: 1.5rem;
  background-color: #ffffff;
  border-top: 1px solid #e9ecef;
  height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ExpandableContent = styled.div`
  max-height: ${(props) => (props.expanded ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 1s cubic-bezier(0.4, 0, 0.2, 1);
`;

const LectureListComponent = ({
  section,
  handlePreviewClick,
  handlePDFClick,
  loadingStates,
  is_active_take_test,
}) => {
  const [expandedLectures, setExpandedLectures] = useState({});
  const timersRef = useRef({});
  const { courseid } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [showTestModal, setShowTestModal] = useState(false);
  const [loadingTest, setLoadingTest] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleLecture = (lectureId) => {
    if (!isLoggedIn) {
      toast.error("Please log in to access lecture content and resources");
      navigate("/login");
      return;
    }
    const isExpandedBefore = !!expandedLectures[lectureId];
    const isNowExpanded = !isExpandedBefore;
    setExpandedLectures((prev) => ({
      ...prev,
      [lectureId]: isNowExpanded,
    }));
    if (isNowExpanded) {
      const token = localStorage.getItem("token");
      timersRef.current[lectureId] = setTimeout(async () => {
        try {
          await axios.put(
            `https://api.novajobs.us/api/students/text-progress/${courseid}/${section.id}/${lectureId}`,
            {},
            { headers: { Authorization: token } }
          );
        } catch (err) {
          console.error("Error updating text-progress:", err);
        } finally {
          delete timersRef.current[lectureId];
        }
      }, 12000);
    } else {
      if (timersRef.current[lectureId]) {
        clearTimeout(timersRef.current[lectureId]);
        delete timersRef.current[lectureId];
      }
    }
  };

  const handleTakeTest = () => {
    if (!isLoggedIn) {
      toast.error("Please log in to take the test");
      navigate("/login");
      return;
    }
    setShowTestModal(false);
    setLoadingTest(true);
    setTimeout(() => {
      setLoadingTest(false);
      window.location.href = `/student/student-skilltest/${courseid}/${section.section_name}?section=${section.id}`;
    }, 2000);
  };

  const renderLectureContent = (content) => {
    return { __html: content };
  };

  return (
    <LectureList>
      {section.lectures && section.lectures.length > 0 ? (
        <>
          {section.lectures.map((lecture) => (
            <LectureItem key={lecture.id}>
              <LectureHeader onClick={() => toggleLecture(lecture.id)}>
                <LectureName>
                  <StyledPlay size={20} />
                  {lecture.lecture_name}
                  {lecture.content_viewed && (
                    <i
                      className="fas fa-check-circle text-success"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  )}
                </LectureName>

                <div>
                  <PreviewButton
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isLoggedIn) {
                        handlePreviewClick(lecture, section.id);
                      } else {
                        toast.error("Please log in to preview this lecture.");
                        navigate("/login");
                      }
                    }}
                    disabled={
                      !lecture.lecture_videos ||
                      loadingStates[lecture.id] ||
                      !isLoggedIn
                    }
                  >
                    {loadingStates[lecture.id] ? "Loading..." : "Preview"}
                  </PreviewButton>
                  <ExpandButton>
                    {expandedLectures[lecture.id] ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </ExpandButton>
                </div>
              </LectureHeader>
              <ExpandableContent expanded={expandedLectures[lecture.id]}>
                {lecture.lecture_content && (
                  <LectureContent
                    dangerouslySetInnerHTML={renderLectureContent(
                      lecture.lecture_content
                    )}
                  />
                )}
                {(lecture.lecture_resources_pdf ||
                  lecture.lecture_resources_link) && (
                  <ResourceList>
                    {lecture.lecture_resources_pdf &&
                      lecture.lecture_resources_pdf.map((pdf, index) => (
                        <ResourceItem key={`pdf-${index}`}>
                          <ResourceLink
                            onClick={() =>
                              handlePDFClick(`https://api.novajobs.us/${pdf}`)
                            }
                          >
                            <FileText size={16} />
                            PDF Resource {index + 1}
                          </ResourceLink>
                        </ResourceItem>
                      ))}
                    {lecture.lecture_resources_link &&
                      lecture.lecture_resources_link.map((link, index) => (
                        <ResourceItem key={`link-${index}`}>
                          <ResourceLink
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkIcon size={16} />
                            External Resource {index + 1}
                          </ResourceLink>
                        </ResourceItem>
                      ))}
                  </ResourceList>
                )}
              </ExpandableContent>
            </LectureItem>
          ))}
          <button
            className="btn-enroll w-100 mt-3"
            onClick={() => {
              if (!is_active_take_test) {
                toast.error("You are not eligible to take the test right now.");
                return;
              }
              setShowTestModal(true);
            }}
          >
            Take Test
          </button>
          <Modal show={showTestModal} onHide={() => setShowTestModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Action</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to take the test for this section?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowTestModal(false)}
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={handleTakeTest}>
                {loadingTest ? (
                  <Spinner as="span" animation="border" size="sm" />
                ) : (
                  "Confirm and Take Test"
                )}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <LectureItem>
          <LectureHeader>No lectures available for this section.</LectureHeader>
        </LectureItem>
      )}
    </LectureList>
  );
};

LectureListComponent.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.number.isRequired,
    section_name: PropTypes.string.isRequired,
    lectures: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        lecture_name: PropTypes.string.isRequired,
        lecture_resources_pdf: PropTypes.arrayOf(PropTypes.string),
        lecture_resources_link: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
  handlePreviewClick: PropTypes.func.isRequired,
  handlePDFClick: PropTypes.func.isRequired,
  loadingStates: PropTypes.objectOf(PropTypes.bool).isRequired,
  is_active_take_test: PropTypes.bool.isRequired, // Added prop type
};

export default LectureListComponent;
