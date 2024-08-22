import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../../footer";
import CourseHeader from "../header";

const SectionsList = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [expandedSectionId, setExpandedSectionId] = useState(null);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/students/course-details/${id}`
      );
      setSections(response.data.data.section_response);
      setCourseTitle(response.data.data.course_title);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSectionId(expandedSectionId === sectionId ? null : sectionId);
  };

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"SectionsList"} />

      <section className="page-content course-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="add-course-header">
                <h2>{courseTitle}</h2>
                <div className="add-course-btns">
                  <Link to={`/add-section/${id}`} className="btn btn-primary">
                    Add New Section
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Course Content</h4>
                  {sections.map((section) => (
                    <div key={section.id} className="section-item">
                      <div 
                        className="section-header" 
                        onClick={() => toggleSection(section.id)}
                      >
                        <h5>{section.section_name}</h5>
                        <button className="btn btn-sm btn-info">
                          {expandedSectionId === section.id ? 'Close' : 'View'}
                        </button>
                      </div>
                      {expandedSectionId === section.id && (
                        <div className="section-content">
                          <h6>Lectures:</h6>
                          {section.lectures && section.lectures.length > 0 ? (
                            <ul className="lecture-list">
                              {section.lectures.map((lecture) => (
                                <li key={lecture.id} className="lecture-item">
                                  <h6 className="lecture-name">{lecture.lecture_name}</h6>
                                  {/* {lecture.lecture_videos && lecture.lecture_videos.length > 0 && (
                                    <div className="lecture-video">
                                      <strong>Video:</strong> {lecture.lecture_videos[0].video_url}
                                    </div>
                                  )} */}
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
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>No lectures available</p>
                          )}
                          <Link 
                            to={`/add-lecture/${id}/${section.id}`} 
                            className="btn btn-sm btn-primary mt-3"
                          >
                            Add Lecture
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SectionsList;