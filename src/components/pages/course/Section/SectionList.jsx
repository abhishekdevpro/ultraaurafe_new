// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import Footer from "../../../footer";
// import CourseHeader from "../header";

// const SectionsList = () => {
//   const { id } = useParams();
//   const [sections, setSections] = useState([]);
//   const [courseTitle, setCourseTitle] = useState("");
//   const [expandedSectionId, setExpandedSectionId] = useState(null);

//   useEffect(() => {
//     fetchSections();
//   }, []);

//   const fetchSections = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.novajobs.us/api/students/course-details/${id}`
//       );
//       setSections(response.data.data.section_response);
//       setCourseTitle(response.data.data.course_title);
//     } catch (error) {
//       console.error("Error fetching sections:", error);
//     }
//   };

//   const toggleSection = (sectionId) => {
//     setExpandedSectionId(expandedSectionId === sectionId ? null : sectionId);
//   };

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"SectionsList"} />

//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-12">
//               <div className="add-course-header">
//                 <h2>{courseTitle}</h2>
//                 <div className="add-course-btns">
//                   <Link to={`/add-section/${id}`} className="btn btn-primary">
//                     Add New Section
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="card-body">
//                   <h4 className="card-title">Course Content</h4>
//                   {sections.map((section) => (
//                     <div key={section.id} className="section-item">
//                       <div
//                         className="section-header"
//                         onClick={() => toggleSection(section.id)}
//                       >
//                         <h5>{section.section_name}</h5>
//                         <button className="btn btn-sm btn-info">
//                           {expandedSectionId === section.id ? 'Close' : 'View'}
//                         </button>
//                       </div>
//                       {expandedSectionId === section.id && (
//                         <div className="section-content">
//                           <h6>Lectures:</h6>
//                           {section.lectures && section.lectures.length > 0 ? (
//                             <ul className="lecture-list">
//                               {section.lectures.map((lecture) => (
//                                 <li key={lecture.id} className="lecture-item">
//                                   <h6 className="lecture-name">{lecture.lecture_name}</h6>
//                                   {/* {lecture.lecture_videos && lecture.lecture_videos.length > 0 && (
//                                     <div className="lecture-video">
//                                       <strong>Video:</strong> {lecture.lecture_videos[0].video_url}
//                                     </div>
//                                   )} */}
//                                   {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.length > 0 && (
//                                     <div className="lecture-pdfs">
//                                       <strong>PDF Resources:</strong>
//                                       <ul>
//                                         {lecture.lecture_resources_pdf.map((pdf, index) => (
//                                           <li key={index}>
//                                             <a href={pdf} target="_blank" rel="noopener noreferrer">
//                                               PDF {index + 1}
//                                             </a>
//                                           </li>
//                                         ))}
//                                       </ul>
//                                     </div>
//                                   )}
//                                   {lecture.lecture_resources_link && lecture.lecture_resources_link.length > 0 && (
//                                     <div className="lecture-links">
//                                       <strong>External Links:</strong>
//                                       <ul>
//                                         {lecture.lecture_resources_link.map((link, index) => (
//                                           <li key={index}>
//                                             <a href={link} target="_blank" rel="noopener noreferrer">
//                                               Link {index + 1}
//                                             </a>
//                                           </li>
//                                         ))}
//                                       </ul>
//                                     </div>
//                                   )}
//                                 </li>
//                               ))}
//                             </ul>
//                           ) : (
//                             <p>No lectures available</p>
//                           )}
//                           <Link
//                             to={`/add-lecture/${id}/${section.id}`}
//                             className="btn btn-sm btn-primary mt-3"
//                           >
//                             Add Lecture
//                           </Link>
//                         </div>
//                       )}
//                     </div>
//                   ))}
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

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import Footer from "../../../footer";
// import CourseHeader from "../header";

// const SectionsList = () => {
//   const { id } = useParams();
//   const [sections, setSections] = useState([]);
//   const [courseTitle, setCourseTitle] = useState("");
//   const [expandedSectionId, setExpandedSectionId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchSections();
//   }, []);

//   const fetchSections = async () => {
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
//   };

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
//               <div className="add-course-header">
//                 <h2>{courseTitle}</h2>
//                 <div className="add-course-btns">
//                   <Link to={`/add-section/${id}`} className="btn btn-primary">
//                     Add New Section
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="card-body">
//                   <h4 className="card-title">Course Content</h4>
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
//                           {/* <div>
//                             <button 
//                               className="btn btn-sm btn-info ml-2"
//                               onClick={() => toggleSection(section.id)}
//                             >
//                               {expandedSectionId === section.id ? 'Close' : 'View'}
//                             </button>
//                             <Link
//                               to={`/edit-section/${id}/${section.id}`}
//                               className="btn btn-sm btn-warning ml-2"
//                             >
//                               Edit Section
//                             </Link>
//                           </div> */}
//                           <div className="button-group">
//                             <button
//                               className="btn btn-sm btn-info view-button"
//                               onClick={() => toggleSection(section.id)}
//                             >
//                               {expandedSectionId === section.id
//                                 ? "Close"
//                                 : "View"}
//                             </button>
//                             <Link
//                               to={`/edit-section/${id}/${section.id}`}
//                               className="btn btn-sm btn-warning edit-button"
//                             >
//                               Edit Section
//                             </Link>
//                           </div>
//                         </div>
//                         {/* {expandedSectionId === section.id && (
//                           <div className="section-content">
//                             <h6>Lectures:</h6>
//                             {section.lectures && section.lectures.length > 0 ? (
//                               <ul className="lecture-list">
//                                 {section.lectures.map((lecture) => (
//                                   <li key={lecture.id} className="lecture-item">
//                                     <h6 className="lecture-name">{lecture.lecture_name}</h6>
//                                     {lecture.lecture_resources_pdf && lecture.lecture_resources_pdf.length > 0 && (
//                                       <div className="lecture-pdfs">
//                                         <strong>PDF Resources:</strong>
//                                         <ul>
//                                           {lecture.lecture_resources_pdf.map((pdf, index) => (
//                                             <li key={index}>
//                                               <a href={pdf} target="_blank" rel="noopener noreferrer">
//                                                 PDF {index + 1}
//                                               </a>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       </div>
//                                     )}
//                                     {lecture.lecture_resources_link && lecture.lecture_resources_link.length > 0 && (
//                                       <div className="lecture-links">
//                                         <strong>External Links:</strong>
//                                         <ul>
//                                           {lecture.lecture_resources_link.map((link, index) => (
//                                             <li key={index}>
//                                               <a href={link} target="_blank" rel="noopener noreferrer">
//                                                 Link {index + 1}
//                                               </a>
//                                             </li>
//                                           ))}
//                                         </ul>
//                                       </div>
//                                     )}
//                                   </li>
//                                 ))}
//                               </ul>
//                             ) : (
//                               <p>No lectures available</p>
//                             )}
//                             <Link 
//                               to={`/add-lecture/${id}/${section.id}`} 
//                               className="btn btn-sm btn-primary mt-3"
//                             >
//                               Add Lecture
//                             </Link>
//                           </div>
//                         )} */}
//                         {expandedSectionId === section.id && (
//                           <div className="section-content">
//                             <h6>Lectures:</h6>
//                             {section.lectures && section.lectures.length > 0 ? (
//                               <ul className="lecture-list">
//                                 {section.lectures.map((lecture) => (
//                                   <li key={lecture.id} className="lecture-item">
//                                     <div className="lecture-header">
//                                       <h6 className="lecture-name">
//                                         {lecture.lecture_name}
//                                       </h6>
//                                       <div className="button-group">
//                                         <Link
//                                           to={`/edit-lecture/${id}/${section.id}/${lecture.id}`}
//                                           className="btn btn-sm btn-warning edit-lecture-button"
//                                         >
//                                           Edit Lecture
//                                         </Link>
//                                       </div>
//                                     </div>

//                                     {lecture.lecture_resources_pdf &&
//                                       lecture.lecture_resources_pdf.length >
//                                         0 && (
//                                         <div className="lecture-pdfs">
//                                           <strong>PDF Resources:</strong>
//                                           <ul>
//                                             {lecture.lecture_resources_pdf.map(
//                                               (pdf, index) => (
//                                                 <li key={index}>
//                                                   <a
//                                                     href={pdf}
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                   >
//                                                     PDF {index + 1}
//                                                   </a>
//                                                 </li>
//                                               )
//                                             )}
//                                           </ul>
//                                         </div>
//                                       )}

//                                     {lecture.lecture_resources_link &&
//                                       lecture.lecture_resources_link.length >
//                                         0 && (
//                                         <div className="lecture-links">
//                                           <strong>External Links:</strong>
//                                           <ul>
//                                             {lecture.lecture_resources_link.map(
//                                               (link, index) => (
//                                                 <li key={index}>
//                                                   <a
//                                                     href={link}
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                   >
//                                                     Link {index + 1}
//                                                   </a>
//                                                 </li>
//                                               )
//                                             )}
//                                           </ul>
//                                         </div>
//                                       )}
//                                   </li>
//                                 ))}
//                               </ul>
//                             ) : (
//                               <p>No lectures available</p>
//                             )}
//                             <Link
//                               to={`/add-lecture/${id}/${section.id}`}
//                               className="btn btn-sm btn-primary mt-3"
//                             >
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


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../../footer";
import CourseHeader from "../header";
import LectureItem from "../Lecture/LectureItem";

const SectionsList = () => {
  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [expandedSectionId, setExpandedSectionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
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
  };

  const toggleSection = (sectionId) => {
    setExpandedSectionId(expandedSectionId === sectionId ? null : sectionId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

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
                      <div key={section.id} className="section-item">
                        <div
                          className="section-header"
                          onClick={() => toggleSection(section.id)}
                        >
                          <h5>{section.section_name}</h5>
                          <div className="button-group">
                            <button
                              className="btn btn-sm btn-info view-button"
                              onClick={() => toggleSection(section.id)}
                            >
                              {expandedSectionId === section.id
                                ? "Close"
                                : "View"}
                            </button>
                            <Link
                              to={`/edit-section/${id}/${section.id}`}
                              className="btn btn-sm btn-warning edit-button"
                            >
                              Edit Section
                            </Link>
                          </div>
                        </div>
                        {expandedSectionId === section.id && (
                          <div className="section-content">
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
                              Add Lecture
                            </Link>
                          </div>
                        )}
                      </div>
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