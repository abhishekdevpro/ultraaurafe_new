// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import axios from "axios";
// // import Footer from "../../../footer";
// // import CourseHeader from "../header";
// // import { CKEditor } from "@ckeditor/ckeditor5-react";
// // import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const EditSection = () => {
// //   const { courseid, sectionid } = useParams();
// //   console.log(courseid, sectionid,"id from Edit section")
// //   const navigate = useNavigate();

// //   const [sectionData, setSectionData] = useState({
// //     section_name: sessionStorage.getItem("section_name") || "",
// //     section_objective: sessionStorage.getItem("section_objective") || "",
// //   });

// //   useEffect(() => {
// //     // Load section data from API or session storage
// //     const loadSectionData = async () => {
// //       if (sessionStorage.getItem("section_name") && sessionStorage.getItem("section_objective")) {
// //         setSectionData({
// //           section_name: sessionStorage.getItem("section_name"),
// //           section_objective: sessionStorage.getItem("section_objective"),
// //         });
// //       } else {
// //         try {
// //           const token = localStorage.getItem("trainerToken");
// //           const response = await axios.get(
// //             `https://api.novajobs.us/api/trainers/${courseid}/${sectionid}/section`,
// //             {
// //               headers: {
// //                 Authorization: token,
// //               },
// //             }
// //           );
// //           const data = response.data.data;
// //           console.log(data,"ggggggg");
// //           setSectionData({
// //             section_name: data.section_name,
// //             section_objective: data.section_objective,
// //           });

// //           // Save the data to session storage
// //           sessionStorage.setItem("section_name", data.section_name);
// //           sessionStorage.setItem("section_objective", data.section_objective);
// //         } catch (error) {
// //           console.error("Error fetching section data:", error);
// //           toast.error('Failed to load section data. Please try again.');
// //         }
// //       }
// //     };

// //     loadSectionData();
// //   }, [courseid, sectionid]);

// //   useEffect(() => {
// //     // Save section data to session storage whenever it changes
// //     sessionStorage.setItem("section_name", sectionData.section_name);
// //     sessionStorage.setItem("section_objective", sectionData.section_objective);
// //   }, [sectionData]);

// //   const handleInputChange = (e) => {
// //     setSectionData({ ...sectionData, [e.target.name]: e.target.value });
// //   };

// //   const handleEditorChange = (event, editor) => {
// //     const data = editor.getData();
// //     setSectionData({ ...sectionData, section_objective: data });
// //   };

// //   const handleSave = async () => {
// //     try {
// //       const token = localStorage.getItem("trainerToken");
// //       const response = await axios.patch(
// //         `https://api.novajobs.us/api/trainers/${courseid}/${sectionid}/section`,
// //         sectionData,
// //         {
// //           headers: {
// //             Authorization: token,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );
// //       console.log("Section updated successfully:", response.data.data);
// //       toast.success('Section updated successfully!');

// //       // Clear session storage after successful save
// //     //   sessionStorage.removeItem("section_name");
// //     //   sessionStorage.removeItem("section_objective");

// //       setTimeout(() => {
// //         navigate(`/course-details/${courseid}`);
// //       }, 2000); // Navigate after 2 seconds
// //     } catch (error) {
// //       console.error("Error updating section:", error);
// //       toast.error('Failed to update section. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="main-wrapper">
// //       <CourseHeader activeMenu={"EditSection"} />
// //       <ToastContainer position="top-right" autoClose={2000} />

// //       <section className="page-content course-sec">
// //         <div className="container">
// //           <div className="row align-items-center">
// //             <div className="col-md-12">
// //               <div className="add-course-header">
// //                 <h2>Edit Section</h2>
// //                 <div className="add-course-btns">
// //                   <ul className="nav">
// //                     <li>
// //                       <Link to={`/course-details/${courseid}`} className="btn btn-primary">
// //                         Section-List
// //                       </Link>
// //                     </li>
// //                     <li>
// //                       <Link to={`/course-details/${courseid}`}  className="btn btn-black">
// //                         Back 
// //                       </Link>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="row">
// //             <div className="col-md-12">
// //               <div className="card">
// //                 <div className="widget-set">
// //                   <div className="widget-content multistep-form">
// //                     <div className="add-course-info">
// //                       <div className="add-course-inner-header">
// //                         <h4>Section Information</h4>
// //                       </div>
// //                       <div className="add-course-form">
// //                         <form action="#">
// //                           <div className="input-block">
// //                             <label className="add-course-label">Section Name</label>
// //                             <input
// //                               type="text"
// //                               className="form-control"
// //                               placeholder="Enter section name"
// //                               name="section_name"
// //                               value={sectionData.section_name}
// //                               onChange={handleInputChange}
// //                             />
// //                           </div>
// //                           <div className="input-block mb-0">
// //                             <label className="add-course-label">Section Objective</label>
// //                             <div id="editor">
// //                               <CKEditor
// //                                 editor={ClassicEditor}
// //                                 onChange={handleEditorChange}
// //                                 data={sectionData.section_objective}
// //                               />
// //                             </div>
// //                           </div>
// //                         </form>
// //                       </div>
// //                       <div className="widget-btn">
// //                         <button className="btn btn-info-light" onClick={handleSave}>
// //                           Save Section
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default EditSection;
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Footer from "../../../footer";
// import CourseHeader from "../header";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const EditSection = () => {
//   const { courseid, sectionid } = useParams();
//   const navigate = useNavigate();

//   const [sectionData, setSectionData] = useState({
//     section_name: "",
//     section_objective: "",
//   });

//   useEffect(() => {
//     const loadSectionData = async () => {
//       try {
//         const token = localStorage.getItem("trainerToken");
//         const response = await axios.get(
//           `https://api.novajobs.us/api/trainers/${courseid}/${sectionid}/section`,
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         const data = response.data.data;
//         setSectionData({
//           section_name: data.section_name,
//           section_objective: data.section_objective,
//         });
//       } catch (error) {
//         console.error("Error fetching section data:", error);
//         toast.error('Failed to load section data. Please try again.');
//       }
//     };

//     loadSectionData();
//   }, [courseid, sectionid]);

//   const handleInputChange = (e) => {
//     setSectionData({ ...sectionData, [e.target.name]: e.target.value });
//   };

//   const handleEditorChange = (event, editor) => {
//     const data = editor.getData();
//     setSectionData({ ...sectionData, section_objective: data });
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("trainerToken");
//       const response = await axios.patch(
//         `https://api.novajobs.us/api/trainers/${courseid}/${sectionid}/section`,
//         sectionData,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Section updated successfully:", response.data.data);
//       toast.success('Section updated successfully!');

//       setTimeout(() => {
//         navigate(`/course-details/${courseid}`);
//       }, 2000); // Navigate after 2 seconds
//     } catch (error) {
//       console.error("Error updating section:", error);
//       toast.error('Failed to update section. Please try again.');
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"EditSection"} />
//       <ToastContainer position="top-right" autoClose={2000} />

//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-12">
//               <div className="add-course-header">
//                 <h2>Edit Section</h2>
//                 <div className="add-course-btns">
//                   <ul className="nav">
//                     <li>
//                       <Link to={`/course-details/${courseid}`} className="btn btn-primary">
//                         Section-List
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to={`/course-details/${courseid}`}  className="btn btn-black">
//                         Back 
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="widget-set">
//                   <div className="widget-content multistep-form">
//                     <div className="add-course-info">
//                       <div className="add-course-inner-header">
//                         <h4>Section Information</h4>
//                       </div>
//                       <div className="add-course-form">
//                         <form action="#">
//                           <div className="input-block">
//                             <label className="add-course-label">Section Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Enter section name"
//                               // name="section_name"
//                               value={sectionData.section_name}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="input-block mb-0">
//                             <label className="add-course-label">Section Objective</label>
//                             <div id="editor">
//                               <CKEditor
//                                 editor={ClassicEditor}
//                                 onChange={handleEditorChange}
//                                 data={sectionData.section_objective}
//                               />
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                       <div className="widget-btn">
//                         <button className="btn btn-info-light" onClick={handleSave}>
//                           Save Section
//                         </button>
//                       </div>
//                     </div>
//                   </div>
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

// export default EditSection;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../../footer";
import CourseHeader from "../header";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditSection = () => {
  const { courseid, sectionid } = useParams();
  const navigate = useNavigate();

  const [sectionData, setSectionData] = useState({
    section_name: "",
    section_objective: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSectionData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("trainerToken");
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/${courseid}/${sectionid}/section`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = response.data.data;
        setSectionData({
          section_name: data.section_name || "",
          section_objective: data.section_objective || "",
        });
      } catch (error) {
        console.error("Error fetching section data:", error);
        toast.error('Failed to load section data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadSectionData();
  }, [courseid, sectionid]);

  const handleInputChange = (e) => {
    setSectionData({ ...sectionData, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setSectionData({ ...sectionData, section_objective: data });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("trainerToken");
      const response = await axios.patch(
        `https://api.novajobs.us/api/trainers/${courseid}/${sectionid}/section`,
        sectionData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Section updated successfully:", response.data.data);
      toast.success('Section updated successfully!');

      setTimeout(() => {
        navigate(`/course-details/${courseid}`);
      }, 2000); // Navigate after 2 seconds
    } catch (error) {
      console.error("Error updating section:", error);
      toast.error('Failed to update section. Please try again.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"EditSection"} />
      <ToastContainer position="top-right" autoClose={2000} />

      <section className="page-content course-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="add-course-header">
                <h2>Edit Section</h2>
                <div className="add-course-btns">
                  <ul className="nav">
                    <li>
                      <Link to={`/course-details/${courseid}`} className="btn btn-primary">
                        Section-List
                      </Link>
                    </li>
                    <li>
                      <Link to={`/course-details/${courseid}`}  className="btn btn-black">
                        Back 
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="widget-set">
                  <div className="widget-content multistep-form">
                    <div className="add-course-info">
                      <div className="add-course-inner-header">
                        <h4>Section Information</h4>
                      </div>
                      <div className="add-course-form">
                        <form action="#">
                          <div className="input-block">
                            <label className="add-course-label">Section Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter section name"
                              name="section_name"
                              value={sectionData.section_name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="input-block mb-0">
                            <label className="add-course-label">Section Objective</label>
                            <div id="editor">
                              <CKEditor
                                editor={ClassicEditor}
                                data={sectionData.section_objective}
                                onChange={handleEditorChange}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="widget-btn">
                        <button className="btn btn-info-light" onClick={handleSave}>
                          Save Section
                        </button>
                      </div>
                    </div>
                  </div>
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

export default EditSection;