
// import React, { useState, useEffect, useCallback } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import Footer from "../../../footer";
// import CourseHeader from "../header";
// import LectureItem from "../Lecture/LectureItem";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import styled from 'styled-components';

// const CourseTitle = styled.h2`
//   font-size: 28px;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 15px;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 10px;

//   .nav {
//     display: flex;
//     gap: 10px;

//     li {
//       list-style: none;

//       .btn {
//         font-size: 14px;
//         padding: 10px 20px;
//         border-radius: 4px;
//         transition: background-color 0.3s ease;

//         &.btn-secondary {
//           background-color: #6c757d;
//           color: white;
//           &:hover {
//             background-color: #5a6268;
//           }
//         }

//         &.btn-primary {
//           background-color: #007bff;
//           color: white;
//           &:hover {
//             background-color: #0069d9;
//           }
//         }

//         .feather {
//           margin-right: 8px;
//         }
//       }
//     }
//   }
// `;

// const HeaderWrapper = styled.div`
//   background-color: #f5f5f5;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin: 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media (max-width: 768px) {
//     padding: 15px;
//     flex-direction: column;
//     align-items: flex-start;
//   }

//   @media (max-width: 576px) {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;

//     ${CourseTitle} {
//       font-size: 12px;
//       flex: 1;
//     }

//     ${ButtonGroup} {
//       flex: 0 0 auto;
//       display: flex;

//       .nav li .btn {
//         padding: 2px 5px;
//         font-size: 12px;
//         display: flex;
//         align-items: center;

//         .feather {
//           margin-right: 0;
//         }

//         span {
//           display: none;
//         }
//       }
//     }
//   }
// `;

// const SectionsList = () => {
//   const { id } = useParams();
//   const [sections, setSections] = useState([]);
//   const [courseTitle, setCourseTitle] = useState("");
//   const [expandedSectionId, setExpandedSectionId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Debounce function
//   const debounce = (func, wait) => {
//     let timeout;
//     return function executedFunction(...args) {
//       const later = () => {
//         clearTimeout(timeout);
//         func(...args);
//       };
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//     };
//   };

//   // ResizeObserver setup with debounce
//   useEffect(() => {
//     const resizeObserver = new ResizeObserver(
//       debounce(entries => {
//         for (let entry of entries) {
//           // Handle resize here
//           console.log('Element resized:', entry.target);
//         }
//       }, 250)
//     );

//     // Observe the entire document body
//     resizeObserver.observe(document.body);

//     return () => {
//       resizeObserver.disconnect();
//     };
//   }, []);

//   // Error handling for ResizeObserver
//   useEffect(() => {
//     const errorHandler = (event) => {
//       if (event.message === 'ResizeObserver loop completed with undelivered notifications.') {
//         event.stopImmediatePropagation();
//       }
//     };

//     window.addEventListener('error', errorHandler);

//     return () => {
//       window.removeEventListener('error', errorHandler);
//     };
//   }, []);

//   const fetchSections = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://api.novajobs.us/api/students/course-details/${id}`
//       );
//       setSections(response.data.data.section_response || []);
//       setCourseTitle(response.data.data.course_title);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching sections:", error);
//       setError("Failed to fetch course details. Please try again later.");
//       setLoading(false);
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchSections();
//   }, [fetchSections]);

//   const toggleSection = (sectionId) => {
//     setExpandedSectionId(expandedSectionId === sectionId ? null : sectionId);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"SectionsList"} />

//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-12">
//               <HeaderWrapper>
//                 <CourseTitle>{courseTitle || "Course"} </CourseTitle>
//                 <ButtonGroup>
//                   <ul className="nav">
//                     <li>
//                       <Link to={`/edit-course/${id}`} className="btn btn-secondary">
//                         <FeatherIcon icon="edit" className="feather" />
//                         <span>Edit Course</span>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to={`/add-section/${id}`} className="btn btn-primary">
//                         <FeatherIcon icon="plus-circle" className="feather" />
//                         <span>Add New Section</span>
//                       </Link>
//                     </li>
//                     <li>
//   <Link to={`/course-details/${id}`} className="btn btn-black">
//     <FeatherIcon icon="arrow-left" className="feather" /> {/* Example icon (arrow-left) */}
//     <span>Back</span>
//   </Link>
// </li>
//                   </ul>
//                 </ButtonGroup>
//               </HeaderWrapper>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="card-body">
//                   {sections.length === 0 ? (
//                     <div className="no-content">
//                       <p>No sections available for this course.</p>
//                       <Link
//                         to={`/add-section/${id}`}
//                         className="btn btn-primary"
//                       >
//                         Add New Section
//                       </Link>
//                     </div>
//                   ) : (
//                     sections.map((section) => (
//                       <div key={section.id} className="section-item">
//                         <div
//                           className="section-header"
//                           onClick={() => toggleSection(section.id)}
//                         >
//                           <h5>{section.section_name}</h5>
//                           <div className="button-group">
//                             <Link
//                               to={`/edit-section/${id}/${section.id}`}
//                               className="btn btn-sm btn-warning edit-button"
//                             >
//                               <FeatherIcon icon="edit" className="me-2" />
//                               Edit Section
//                             </Link>
//                             <button
//                               className="btn btn-sm btn-info view-button"
//                               onClick={() => toggleSection(section.id)}
//                             >
//                               {expandedSectionId === section.id ? (
//                                 <>
//                                   <FeatherIcon icon="x-circle" className="me-2" />
//                                   Close
//                                 </>
//                               ) : (
//                                 <>
//                                   <FeatherIcon icon="eye" className="me-2" />
//                                   View
//                                 </>
//                               )}
//                             </button>
//                           </div>
//                         </div>
//                         {expandedSectionId === section.id && (
//                           <div className="section-content">
//                             <h6>Lectures:</h6>
//                             {section.lectures && section.lectures.length > 0 ? (
//                               <ul className="lecture-list">
//                                 {section.lectures.map((lecture) => (
//                                   <LectureItem
//                                     key={lecture.id}
//                                     lecture={lecture}
//                                     courseId={id}
//                                     sectionId={section.id}
//                                   />
//                                 ))}
//                               </ul>
//                             ) : (
//                               <p>No lectures available</p>
//                             )}
//                             <Link
//                               to={`/add-lecture/${id}/${section.id}`}
//                               className="btn btn-sm btn-primary mt-3"
//                             >
//                               <FeatherIcon icon="edit" className="me-2" />
//                               Add Lecture
//                             </Link>
//                           </div>
//                         )}
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default SectionsList;
import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../../footer";
import CourseHeader from "../header";
import LectureItem from "../Lecture/LectureItem";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import styled from 'styled-components';

const CourseTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    margin: 0;

    li {
      list-style: none;

      .btn {
        font-size: 14px;
        padding: 8px 12px;
        border-radius: 4px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 100px;

        &.btn-secondary {
          background-color: #6c757d;
          color: white;
          &:hover {
            background-color: #5a6268;
          }
        }

        &.btn-primary {
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0069d9;
          }
        }

        &.btn-black {
          background-color: #333;
          color: white;
          &:hover {
            background-color: #222;
          }
        }

        .feather {
          margin-right: 8px;
        }

        @media (max-width: 576px) {
          padding: 6px 10px;
          min-width: auto;

          .feather {
            margin-right: 0;
          }

          span {
            display: none;
          }
        }
      }
    }
  }
`;

const HeaderWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 576px) {
    padding: 15px;
  }
`;

const SectionItem = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SectionHeader = styled.div`
  background-color: #f8f9fa;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  .button-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

const SectionContent = styled.div`
  padding: 15px;

  h6 {
    margin-bottom: 10px;
    color: #555;
  }

  .lecture-list {
    list-style-type: none;
    padding: 0;
  }

  .btn {
    margin-top: 10px;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #555;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SectionsList = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [expandedSectionId, setExpandedSectionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const trainerToken = localStorage.getItem("trainerToken");
  const vendorToken = localStorage.getItem("vendorToken");
  const adminToken = localStorage.getItem("adminToken");

  let role = trainerToken ? "instructor" : vendorToken ? "vendor" : adminToken ? "admin" : null;

  if (!role) {
    throw new Error("No valid token found for authentication");
  }

  const fetchSections = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.novajobs.us/api/students/course-details/${id}`
      );
      setSections(response.data.data.section_response || []);
      setCourseTitle(response.data.data.course_title);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching sections:", error);
      setError("Failed to fetch course details. Please try again later.");
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSections();
  }, [fetchSections]);

  const toggleSection = (sectionId) => {
    setExpandedSectionId(expandedSectionId === sectionId ? null : sectionId);
  };

  if (loading) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"SectionsList"} />

      <section className="page-content course-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <HeaderWrapper>
                <CourseTitle>{courseTitle || "Course"}</CourseTitle>
                <ButtonGroup>
                  <ul className="nav">
                    <li>
                      <Link to={`/edit-course/${id}`} className="btn btn-secondary">
                        <FeatherIcon icon="edit" className="feather" />
                        <span>Edit Course</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/add-section/${id}`} className="btn btn-primary">
                        <FeatherIcon icon="plus-circle" className="feather" />
                        <span>Add New Section</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${role}/${role}-dashboard`} className="btn btn-black">
                        <FeatherIcon icon="arrow-left" className="feather" />
                        <span>Back</span>
                      </Link>
                    </li>
                  </ul>
                </ButtonGroup>
              </HeaderWrapper>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  {sections.length === 0 ? (
                    <div className="no-content">
                      <p>No sections available for this course.</p>
                      <Link
                        to={`/add-section/${id}`}
                        className="btn btn-primary"
                      >
                        Add New Section
                      </Link>
                    </div>
                  ) : (
                    sections.map((section) => (
                      <SectionItem key={section.id}>
                        <SectionHeader onClick={() => toggleSection(section.id)}>
                          <h5>{section.section_name}</h5>
                          <div className="button-group">
                            <Link
                              to={`/edit-section/${id}/${section.id}`}
                              className="btn btn-sm btn-warning"
                            >
                              <FeatherIcon icon="edit" className="me-2" />
                              <span>Edit</span>
                            </Link>
                            <button
                              className="btn btn-sm btn-info"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSection(section.id);
                              }}
                            >
                              {expandedSectionId === section.id ? (
                                <>
                                  <FeatherIcon icon="x-circle" className="me-2" />
                                  <span>Close</span>
                                </>
                              ) : (
                                <>
                                  <FeatherIcon icon="eye" className="me-2" />
                                  <span>View</span>
                                </>
                              )}
                            </button>
                          </div>
                        </SectionHeader>
                        {expandedSectionId === section.id && (
                          <SectionContent>
                            <h6>Lectures:</h6>
                            {section.lectures && section.lectures.length > 0 ? (
                              <ul className="lecture-list">
                                {section.lectures.map((lecture) => (
                                  <LectureItem
                                    key={lecture.id}
                                    lecture={lecture}
                                    courseId={id}
                                    sectionId={section.id}
                                  />
                                ))}
                              </ul>
                            ) : (
                              <p>No lectures available</p>
                            )}
                            <Link
                              to={`/add-lecture/${id}/${section.id}`}
                              className="btn btn-sm btn-primary mt-3"
                            >
                              <FeatherIcon icon="plus" className="me-2" />
                              <span>Add Lecture</span>
                            </Link>
                          </SectionContent>
                        )}
                      </SectionItem>
                    ))
                  )}
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