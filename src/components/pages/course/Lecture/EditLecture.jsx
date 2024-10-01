
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useNavigate, useParams, Link } from "react-router-dom";
// // // // // import axios from "axios";
// // // // // import { toast, ToastContainer } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";
// // // // // import ReactQuill from "react-quill";
// // // // // import "react-quill/dist/quill.snow.css";
// // // // // import Footer from "../../../footer";
// // // // // import CourseHeader from "../header";
// // // // // import { Spinner } from "react-bootstrap";

// // // // // const EditLecture = () => {
// // // // //   const { courseid, sectionid, lectureid } = useParams();
// // // // //   const [lectureData, setLectureData] = useState({
// // // // //     lecture_name: "",
// // // // //     lecture_content: "",
// // // // //     lecture_resources_pdf: [],
// // // // //     lecture_resources_link: [],
// // // // //     lecture_video: null,
// // // // //   });
// // // // //   const [currentVideo, setCurrentVideo] = useState(null);
// // // // //   console.log(currentVideo);
// // // // //   const token =
// // // // //     localStorage.getItem("trainerToken") ||
// // // // //     localStorage.getItem("vendorToken") ||
// // // // //     localStorage.getItem("adminToken");

// // // // //   useEffect(() => {
// // // // //     const fetchLectureData = async () => {
// // // // //       try {
// // // // //         const response = await axios.get(
// // // // //           `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
// // // // //           {
// // // // //             headers: {
// // // // //               Authorization: `${token}`,
// // // // //             },
// // // // //           }
// // // // //         );
// // // // //         if (response.data.status === "success") {
// // // // //           const { data } = response.data;
// // // // //           console.log(data.lecture_location,"dlddd");
// // // // //           setLectureData({
// // // // //             lecture_name: data.lecture_name,
// // // // //             lecture_content: data.lecture_content,
// // // // //             lecture_resources_pdf: data.lecture_resources_pdf,
// // // // //             lecture_resources_link: data.lecture_resources_link.join(", "),
// // // // //             lecture_video: data.lecture_location,
// // // // //           });
// // // // //           setCurrentVideo(data.lecture_location);
// // // // //         } else {
// // // // //           toast.error("Failed to fetch lecture data");
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching lecture data:", error);
// // // // //         toast.error("Error fetching lecture data. Please try again.");
// // // // //       }
// // // // //     };

// // // // //     fetchLectureData();
// // // // //   }, [lectureid, token]);

// // // // //   const handleInputChange = (e) => {
// // // // //     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleQuillChange = (content) => {
// // // // //     setLectureData({ ...lectureData, lecture_content: content });
// // // // //   };
// // // // //   const getFileName = (path) => {
// // // // //     if (typeof path === 'string') {
// // // // //       // Extract file name from path
// // // // //       const parts = path.split('/');
// // // // //       return parts[parts.length - 1];
// // // // //     } else if (path && path.name) {
// // // // //       // If it's a File object, return its name
// // // // //       return path.name;
// // // // //     }
// // // // //     return "No video selected";
// // // // //   };
// // // // //   const handleFileChange = (e) => {
// // // // //     const { name, files } = e.target;
// // // // //     if (name === "lecture_resources_pdf") {
// // // // //       setLectureData({ ...lectureData, [name]: [...files] });
// // // // //     } else if (name === "lecture_video") {
// // // // //       const file = files[0];
// // // // //       setLectureData({ ...lectureData, [name]: file });

// // // // //     }
// // // // //   };

// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const navigate = useNavigate();

// // // // //   const handleSave = async () => {
// // // // //     setIsLoading(true);
// // // // //     try {
// // // // //       const formData = new FormData();
// // // // //       for (const key in lectureData) {
// // // // //         if (key === "lecture_resources_pdf") {
// // // // //           lectureData[key].forEach((file, index) => {
// // // // //             formData.append(`lecture_resources_pdf[${index}]`, file);
// // // // //           });
// // // // //         } else if (key === "lecture_resources_link") {
// // // // //           formData.append(
// // // // //             key,
// // // // //             lectureData[key].split(",").map((link) => link.trim())
// // // // //           );
// // // // //         } else if (key === "lecture_video" && lectureData[key]) {
// // // // //           formData.append(key, lectureData[key]);
// // // // //         } else if (lectureData[key]) {
// // // // //           formData.append(key, lectureData[key]);
// // // // //         }
// // // // //       }

// // // // //       const response = await axios.patch(
// // // // //         `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
// // // // //         formData,
// // // // //         {
// // // // //           headers: {
// // // // //             "Content-Type": "multipart/form-data",
// // // // //             Authorization: `${token}`,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       if (response) {
// // // // //         toast.success("Lecture updated successfully!");
// // // // //         setTimeout(() => {
// // // // //           navigate(`/course-details/${courseid}`);
// // // // //         }, 2000);
// // // // //       } else {
// // // // //         toast.error(response.data.message || "Error updating lecture");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error updating lecture:", error);
// // // // //       toast.error("Error updating lecture. Please try again.");
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };
// // // // // console.log(lectureData,"ldddd");
// // // // //   return (
// // // // //     <div className="main-wrapper">
// // // // //       <CourseHeader activeMenu={"EditLecture"} />

// // // // //       <ToastContainer />

// // // // //       <section className="page-content course-sec">
// // // // //         <div className="container">
// // // // //           <div className="row align-items-center">
// // // // //             <div className="col-md-12">
// // // // //               <div className="add-course-header">
// // // // //                 <h2>Edit Lecture</h2>
// // // // //                 <div className="add-course-btns">
// // // // //                   <ul className="nav">
// // // // //                     <li>
// // // // //                       <Link
// // // // //                         to={`/course-details/${courseid}`}
// // // // //                         className="btn btn-black"
// // // // //                       >
// // // // //                         Back to Course
// // // // //                       </Link>
// // // // //                     </li>
// // // // //                   </ul>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="row">
// // // // //             <div className="col-md-12">
// // // // //               <div className="card">
// // // // //                 <div className="widget-set">
// // // // //                   <div className="widget-content multistep-form">
// // // // //                     <div className="add-course-info">
// // // // //                       <div className="add-course-inner-header">
// // // // //                         <h4>Lecture Information</h4>
// // // // //                       </div>
// // // // //                       <div className="add-course-form">
// // // // //                         <form>
// // // // //                           <div className="input-block">
// // // // //                             <label className="add-course-label">
// // // // //                               Lecture Name
// // // // //                             </label>
// // // // //                             <input
// // // // //                               type="text"
// // // // //                               className="form-control"
// // // // //                               placeholder="Enter lecture name"
// // // // //                               name="lecture_name"
// // // // //                               value={lectureData.lecture_name}
// // // // //                               onChange={handleInputChange}
// // // // //                             />
// // // // //                           </div>
// // // // //                           <div className="input-block">
// // // // //                             <label className="add-course-label">
// // // // //                               Lecture Content
// // // // //                             </label>
// // // // //                             <ReactQuill
// // // // //                               value={lectureData.lecture_content}
// // // // //                               onChange={handleQuillChange}
// // // // //                               modules={{
// // // // //                                 toolbar: [
// // // // //                                   [{ header: [1, 2, false] }],
// // // // //                                   [
// // // // //                                     "bold",
// // // // //                                     "italic",
// // // // //                                     "underline",
// // // // //                                     "strike",
// // // // //                                     "blockquote",
// // // // //                                   ],
// // // // //                                   [{ list: "ordered" }, { list: "bullet" }],
// // // // //                                   ["link", "image"],
// // // // //                                   ["clean"],
// // // // //                                 ],
// // // // //                               }}
// // // // //                             />
// // // // //                           </div>
// // // // //                           <div className="input-block">
// // // // //                             <label className="add-course-label">
// // // // //                               Resources (PDF only)
// // // // //                             </label>
// // // // //                             <div className="relative-form">
// // // // //                               <span>
// // // // //                                 {Array.isArray(
// // // // //                                   lectureData.lecture_resources_pdf
// // // // //                                 ) &&
// // // // //                                 lectureData.lecture_resources_pdf.length > 0
// // // // //                                   ? `${lectureData.lecture_resources_pdf.length} file(s) selected`
// // // // //                                   : "No PDF Selected"}
// // // // //                               </span>
// // // // //                               <label className="relative-file-upload">
// // // // //                                 Upload PDF
// // // // //                                 <input
// // // // //                                   type="file"
// // // // //                                   name="lecture_resources_pdf"
// // // // //                                   accept=".pdf"
// // // // //                                   multiple
// // // // //                                   onChange={handleFileChange}
// // // // //                                 />
// // // // //                               </label>
// // // // //                             </div>
// // // // //                           </div>
// // // // //                           <div className="input-block">
// // // // //                             <label className="add-course-label">
// // // // //                               Resource Links
// // // // //                             </label>
// // // // //                             <textarea
// // // // //                               className="form-control"
// // // // //                               name="lecture_resources_link"
// // // // //                               value={lectureData.lecture_resources_link}
// // // // //                               onChange={handleInputChange}
// // // // //                               placeholder="Enter resource links (comma-separated)"
// // // // //                             ></textarea>
// // // // //                           </div>
// // // // //                           <div className="input-block">
// // // // //                             <label className="add-course-label">
// // // // //                               Lecture Video
// // // // //                             </label>
// // // // //                             {/* <div className="relative-form">
// // // // //                               <span>
// // // // //                                 {lectureData.lecture_video
// // // // //                                   ? lectureData.lecture_video
// // // // //                                   : "No video selected"}
// // // // //                               </span>
// // // // //                               <label className="relative-file-upload">
// // // // //                                 Upload Video
// // // // //                                 <input
// // // // //                                   type="file"
// // // // //                                   name="lecture_video"
// // // // //                                   accept="video/*"
// // // // //                                   onChange={handleFileChange}
// // // // //                                 />
// // // // //                               </label>
// // // // //                             </div> */}
// // // // //                               <div className="relative-form">
// // // // //                               <span>
// // // // //                               {getFileName(lectureData.lecture_video)}
// // // // //                               </span>
// // // // //                               <label className="relative-file-upload">
// // // // //                                 Upload Video
// // // // //                                 <input
// // // // //                                   type="file"
// // // // //                                   name="lecture_video"
// // // // //                                   accept="video/*"
// // // // //                                   onChange={handleFileChange}
// // // // //                                 />
// // // // //                               </label>
// // // // //                             </div>
                            
// // // // //                           </div>
// // // // //                         </form>
// // // // //                       </div>
// // // // //                       <div className="widget-btn">
// // // // //       <button
// // // // //         className="btn btn-info-light"
// // // // //         onClick={handleSave}
// // // // //         disabled={isLoading}
// // // // //       >
// // // // //         {isLoading ? (
// // // // //           <>
// // // // //             <Spinner
// // // // //               as="span"
// // // // //               animation="border"
// // // // //               size="sm"
// // // // //               role="status"
// // // // //               aria-hidden="true"
// // // // //               className="me-2"
// // // // //             />
// // // // //             Saving...
// // // // //           </>
// // // // //         ) : (
// // // // //           'Save Changes'
// // // // //         )}
// // // // //       </button>
// // // // //     </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default EditLecture;
// // // // import React, { useState, useEffect } from "react";
// // // // import { useNavigate, useParams, Link } from "react-router-dom";
// // // // import axios from "axios";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";
// // // // import ReactQuill from "react-quill";
// // // // import "react-quill/dist/quill.snow.css";
// // // // import Footer from "../../../footer";
// // // // import CourseHeader from "../header";
// // // // import { Spinner } from "react-bootstrap";

// // // // const EditLecture = () => {
// // // //   const { courseid, sectionid, lectureid } = useParams();
// // // //   const [lectureData, setLectureData] = useState({
// // // //     lecture_name: "",
// // // //     lecture_content: "",
// // // //     lecture_resources_link: "",
// // // //   });
// // // //   const [videoFile, setVideoFile] = useState(null);
// // // //   const [pdfFiles, setPdfFiles] = useState([]);
// // // //   const [currentVideoUrl, setCurrentVideoUrl] = useState("");
// // // //   const [currentPdfUrls, setCurrentPdfUrls] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const token =
// // // //     localStorage.getItem("trainerToken") ||
// // // //     localStorage.getItem("vendorToken") ||
// // // //     localStorage.getItem("adminToken");

// // // //   useEffect(() => {
// // // //     const fetchLectureData = async () => {
// // // //       try {
// // // //         const response = await axios.get(
// // // //           `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
// // // //           {
// // // //             headers: {
// // // //               Authorization: `${token}`,
// // // //             },
// // // //           }
// // // //         );
// // // //         if (response.data.status === "success") {
// // // //           const { data } = response.data;
// // // //           setLectureData({
// // // //             lecture_name: data.lecture_name,
// // // //             lecture_content: data.lecture_content,
// // // //             lecture_resources_link: data.lecture_resources_link.join(", "),
// // // //           });
// // // //           setCurrentVideoUrl(data.lecture_location);
// // // //           setCurrentPdfUrls(data.lecture_resources_pdf);
// // // //         } else {
// // // //           toast.error("Failed to fetch lecture data");
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error fetching lecture data:", error);
// // // //         toast.error("Error fetching lecture data. Please try again.");
// // // //       }
// // // //     };

// // // //     fetchLectureData();
// // // //   }, [lectureid, token]);

// // // //   const handleInputChange = (e) => {
// // // //     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleQuillChange = (content) => {
// // // //     setLectureData({ ...lectureData, lecture_content: content });
// // // //   };

// // // //   const handleFileChange = (e) => {
// // // //     const { name, files } = e.target;
// // // //     if (name === "lecture_resources_pdf") {
// // // //       setPdfFiles(Array.from(files));
// // // //     } else if (name === "lecture_video") {
// // // //       setVideoFile(files[0]);
// // // //     }
// // // //   };

// // // //   const handleSave = async () => {
// // // //     setIsLoading(true);
// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append('lecture_name', lectureData.lecture_name);
// // // //       formData.append('lecture_content', lectureData.lecture_content);

// // // //       if (pdfFiles.length > 0) {
// // // //         pdfFiles.forEach((file) => {
// // // //           formData.append(`lecture_resources_pdf`, file);
// // // //         });
// // // //       }

// // // //       const links = lectureData.lecture_resources_link.split(',').map(link => link.trim());
// // // //       formData.append('lecture_resources_link', JSON.stringify(links));

// // // //       if (videoFile) {
// // // //         formData.append('lecture_video', videoFile);
// // // //       }

// // // //       console.log("FormData contents:");
// // // //       for (let [key, value] of formData.entries()) {
// // // //         console.log(key, value);
// // // //       }

// // // //       const response = await axios.patch(
// // // //         `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
// // // //         formData,
// // // //         {
// // // //           headers: {
// // // //             'Content-Type': 'multipart/form-data',
// // // //             Authorization: `${token}`,
// // // //           },
// // // //         }
// // // //       );

// // // //       console.log("Server response:", response.data);

// // // //       if (response.data.status === 'success') {
// // // //         toast.success('Lecture updated successfully!');
// // // //         setTimeout(() => {
// // // //           navigate(`/course-details/${courseid}`);
// // // //         }, 2000);
// // // //       } else {
// // // //         toast.error(response.data.message || 'Error updating lecture');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error updating lecture:', error.response ? error.response.data : error);
// // // //       toast.error('Error updating lecture. Please try again.');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="main-wrapper">
// // // //       <CourseHeader activeMenu={"EditLecture"} />
// // // //       <ToastContainer />

// // // //       <section className="page-content course-sec">
// // // //         <div className="container">
// // // //           <div className="row align-items-center">
// // // //             <div className="col-md-12">
// // // //               <div className="add-course-header">
// // // //                 <h2>Edit Lecture</h2>
// // // //                 <div className="add-course-btns">
// // // //                   <ul className="nav">
// // // //                     <li>
// // // //                       <Link to={`/course-details/${courseid}`} className="btn btn-black">
// // // //                         Back to Course
// // // //                       </Link>
// // // //                     </li>
// // // //                   </ul>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div className="row">
// // // //             <div className="col-md-12">
// // // //               <div className="card">
// // // //                 <div className="widget-set">
// // // //                   <div className="widget-content multistep-form">
// // // //                     <div className="add-course-info">
// // // //                       <div className="add-course-inner-header">
// // // //                         <h4>Lecture Information</h4>
// // // //                       </div>
// // // //                       <div className="add-course-form">
// // // //                         <form>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Lecture Name</label>
// // // //                             <input
// // // //                               type="text"
// // // //                               className="form-control"
// // // //                               placeholder="Enter lecture name"
// // // //                               name="lecture_name"
// // // //                               value={lectureData.lecture_name}
// // // //                               onChange={handleInputChange}
// // // //                             />
// // // //                           </div>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Lecture Content</label>
// // // //                             <ReactQuill
// // // //                               value={lectureData.lecture_content}
// // // //                               onChange={handleQuillChange}
// // // //                               modules={{
// // // //                                 toolbar: [
// // // //                                   [{ header: [1, 2, false] }],
// // // //                                   ["bold", "italic", "underline", "strike", "blockquote"],
// // // //                                   [{ list: "ordered" }, { list: "bullet" }],
// // // //                                   ["link", "image"],
// // // //                                   ["clean"],
// // // //                                 ],
// // // //                               }}
// // // //                             />
// // // //                           </div>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Resources (PDF only)</label>
// // // //                             <div className="relative-form">
// // // //                               <span>
// // // //                                 {pdfFiles.length > 0
// // // //                                   ? `${pdfFiles.length} file(s) selected`
// // // //                                   : currentPdfUrls.length > 0
// // // //                                   ? `${currentPdfUrls.length} current PDF(s)`
// // // //                                   : "No PDF Selected"}
// // // //                               </span>
// // // //                               <label className="relative-file-upload">
// // // //                                 Upload PDF
// // // //                                 <input
// // // //                                   type="file"
// // // //                                   name="lecture_resources_pdf"
// // // //                                   accept=".pdf"
// // // //                                   multiple
// // // //                                   onChange={handleFileChange}
// // // //                                 />
// // // //                               </label>
// // // //                             </div>
// // // //                           </div>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Resource Links</label>
// // // //                             <textarea
// // // //                               className="form-control"
// // // //                               name="lecture_resources_link"
// // // //                               value={lectureData.lecture_resources_link}
// // // //                               onChange={handleInputChange}
// // // //                               placeholder="Enter resource links (comma-separated)"
// // // //                             ></textarea>
// // // //                           </div>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Lecture Video</label>
// // // //                             <div className="relative-form">
// // // //                               <span>
// // // //                                 {videoFile
// // // //                                   ? videoFile.name
// // // //                                   : currentVideoUrl
// // // //                                   ? "Current video: " + currentVideoUrl.split('/').pop()
// // // //                                   : "No video selected"}
// // // //                               </span>
// // // //                               <label className="relative-file-upload">
// // // //                                 Upload Video
// // // //                                 <input
// // // //                                   type="file"
// // // //                                   name="lecture_video"
// // // //                                   accept="video/*"
// // // //                                   onChange={handleFileChange}
// // // //                                 />
// // // //                               </label>
// // // //                             </div>
// // // //                           </div>
// // // //                         </form>
// // // //                       </div>
// // // //                       <div className="widget-btn">
// // // //                         <button
// // // //                           className="btn btn-info-light"
// // // //                           onClick={handleSave}
// // // //                           disabled={isLoading}
// // // //                         >
// // // //                           {isLoading ? (
// // // //                             <>
// // // //                               <Spinner
// // // //                                 as="span"
// // // //                                 animation="border"
// // // //                                 size="sm"
// // // //                                 role="status"
// // // //                                 aria-hidden="true"
// // // //                                 className="me-2"
// // // //                               />
// // // //                               Saving...
// // // //                             </>
// // // //                           ) : (
// // // //                             'Save Changes'
// // // //                           )}
// // // //                         </button>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EditLecture;

// // // // import React, { useState, useEffect } from "react";
// // // // import { useNavigate, useParams, Link } from "react-router-dom";
// // // // import axios from "axios";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";
// // // // import ReactQuill from "react-quill";
// // // // import "react-quill/dist/quill.snow.css";
// // // // import Footer from "../../../footer";
// // // // import CourseHeader from "../header";
// // // // import { Spinner } from "react-bootstrap";

// // // // const EditLecture = () => {
// // // //   const { courseid, sectionid, lectureid } = useParams();
// // // //   const [lectureData, setLectureData] = useState({
// // // //     lecture_name: "",
// // // //     lecture_content: "",
// // // //     lecture_resources_link: [],
// // // //   });
// // // //   const [videoFile, setVideoFile] = useState(null);
// // // //   const [pdfFiles, setPdfFiles] = useState([]);
// // // //   const [currentVideoUrl, setCurrentVideoUrl] = useState("");
// // // //   const [currentPdfUrls, setCurrentPdfUrls] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const token =
// // // //     localStorage.getItem("trainerToken") ||
// // // //     localStorage.getItem("vendorToken") ||
// // // //     localStorage.getItem("adminToken");

// // // //   useEffect(() => {
// // // //     const fetchLectureData = async () => {
// // // //       try {
// // // //         const response = await axios.get(
// // // //           `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
// // // //           {
// // // //             headers: {
// // // //               Authorization: `${token}`,
// // // //             },
// // // //           }
// // // //         );
// // // //         if (response.data.status === "success") {
// // // //           const { data } = response.data;
// // // //           setLectureData({
// // // //             lecture_name: data.lecture_name,
// // // //             lecture_content: data.lecture_content,
// // // //             lecture_resources_link: data.lecture_resources_link,
// // // //           });
// // // //         console.log(data.lecture_videos[0].video_url,"video urlllll");

// // // //           setCurrentVideoUrl(data.lecture_videos[0].video_url);
// // // //           setCurrentPdfUrls(data.lecture_resources_pdf);
// // // //         } else {
// // // //           toast.error("Failed to fetch lecture data");
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error fetching lecture data:", error);
// // // //         toast.error("Error fetching lecture data. Please try again.");
// // // //       }
// // // //     };

// // // //     fetchLectureData();
// // // //   }, [lectureid, token]);

// // // //   const handleInputChange = (e) => {
// // // //     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleQuillChange = (content) => {
// // // //     setLectureData({ ...lectureData, lecture_content: content });
// // // //   };

// // // //   const handleFileChange = (e) => {
// // // //     const { name, files } = e.target;
// // // //     if (name === "lecture_resources_pdf") {
// // // //       setPdfFiles(Array.from(files));
// // // //     } else if (name === "lecture_video") {
// // // //       setVideoFile(files[0]);
// // // //     }
// // // //   };

// // // //   const handleLinkChange = (e) => {
// // // //     const links = e.target.value.split(',').map(link => link.trim());
// // // //     setLectureData({ ...lectureData, lecture_resources_link: links });
// // // //   };

// // // //   const handleSave = async () => {
// // // //     setIsLoading(true);
// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append('lecture_name', lectureData.lecture_name);
// // // //       formData.append('lecture_content', lectureData.lecture_content);

// // // //       // Append PDF files
// // // //       if (pdfFiles.length > 0) {
// // // //         pdfFiles.forEach((file, index) => {
// // // //           formData.append(`lecture_resources_pdf[${index}]`, file);
// // // //         });
// // // //       }

// // // //       // Append resource links
// // // //       lectureData.lecture_resources_link.forEach((link, index) => {
// // // //         formData.append(`lecture_resources_link[${index}]`, link);
// // // //       });

// // // //       // Append video file if a new one is selected
// // // //       if (videoFile) {
// // // //         formData.append('lecture_video', videoFile);
// // // //       }
// // // //     console.log(formData,"mai hu editing vala data");
// // // //       const response = await axios.patch(
// // // //         `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
// // // //         formData,
// // // //         {
// // // //           headers: {
// // // //             'Content-Type': 'multipart/form-data',
// // // //             Authorization: `${token}`,
// // // //           },
// // // //         }
// // // //       );

// // // //       if (response.data.status === 'success') {
// // // //         toast.success('Lecture updated successfully!');
// // // //         setTimeout(() => {
// // // //           navigate(`/course-details/${courseid}`);
// // // //         }, 2000);
// // // //       } else {
// // // //         toast.error(response.data.message || 'Error updating lecture');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error updating lecture:', error.response ? error.response.data : error);
// // // //       toast.error('Error updating lecture. Please try again.');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="main-wrapper">
// // // //       <CourseHeader activeMenu={"EditLecture"} />
// // // //       <ToastContainer />

// // // //       <section className="page-content course-sec">
// // // //         <div className="container">
// // // //           <div className="row align-items-center">
// // // //             <div className="col-md-12">
// // // //               <div className="add-course-header">
// // // //                 <h2>Edit Lecture</h2>
// // // //                 <div className="add-course-btns">
// // // //                   <ul className="nav">
// // // //                     <li>
// // // //                       <Link to={`/course-details/${courseid}`} className="btn btn-black">
// // // //                         Back to Course
// // // //                       </Link>
// // // //                     </li>
// // // //                   </ul>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div className="row">
// // // //             <div className="col-md-12">
// // // //               <div className="card">
// // // //                 <div className="widget-set">
// // // //                   <div className="widget-content multistep-form">
// // // //                     <div className="add-course-info">
// // // //                       <div className="add-course-inner-header">
// // // //                         <h4>Lecture Information</h4>
// // // //                       </div>
// // // //                       <div className="add-course-form">
// // // //                         <form>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Lecture Name</label>
// // // //                             <input
// // // //                               type="text"
// // // //                               className="form-control"
// // // //                               placeholder="Enter lecture name"
// // // //                               name="lecture_name"
// // // //                               value={lectureData.lecture_name}
// // // //                               onChange={handleInputChange}
// // // //                             />
// // // //                           </div>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Lecture Content</label>
// // // //                             <ReactQuill
// // // //                               value={lectureData.lecture_content}
// // // //                               onChange={handleQuillChange}
// // // //                               modules={{
// // // //                                 toolbar: [
// // // //                                   [{ header: [1, 2, false] }],
// // // //                                   ["bold", "italic", "underline", "strike", "blockquote"],
// // // //                                   [{ list: "ordered" }, { list: "bullet" }],
// // // //                                   ["link", "image"],
// // // //                                   ["clean"],
// // // //                                 ],
// // // //                               }}
// // // //                             />
// // // //                           </div>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Resources (PDF only)</label>
// // // //                             <div className="relative-form">
// // // //                               <span>
// // // //                                 {pdfFiles.length > 0
// // // //                                   ? `${pdfFiles.length} new file(s) selected`
// // // //                                   : currentPdfUrls.length > 0
// // // //                                   ? `${currentPdfUrls.length} current PDF(s)`
// // // //                                   : "No PDF Selected"}
// // // //                               </span>
// // // //                               <label className="relative-file-upload">
// // // //                                 Upload PDF
// // // //                                 <input
// // // //                                   type="file"
// // // //                                   name="lecture_resources_pdf"
// // // //                                   accept=".pdf"
// // // //                                   multiple
// // // //                                   onChange={handleFileChange}
// // // //                                 />
// // // //                               </label>
// // // //                             </div>
// // // //                           </div>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Resource Links</label>
// // // //                             <textarea
// // // //                               className="form-control"
// // // //                               name="lecture_resources_link"
// // // //                               value={lectureData.lecture_resources_link.join(", ")}
// // // //                               onChange={handleLinkChange}
// // // //                               placeholder="Enter resource links (comma-separated)"
// // // //                             ></textarea>
// // // //                           </div>
// // // //                           <div className="input-block">
// // // //                             <label className="add-course-label">Lecture Video</label>
// // // //                             <div className="relative-form">
// // // //                               <span>
// // // //                                 {videoFile
// // // //                                   ? videoFile.name
// // // //                                   : currentVideoUrl
// // // //                                   ? "Current video: " + currentVideoUrl.split('/').pop()
// // // //                                   : "No video selected"}
// // // //                               </span>
// // // //                               <label className="relative-file-upload">
// // // //                                 Upload Video
// // // //                                 <input
// // // //                                   type="file"
// // // //                                   name="lecture_video"
// // // //                                   accept="video/*"
// // // //                                   onChange={handleFileChange}
// // // //                                 />
// // // //                               </label>
// // // //                             </div>
// // // //                           </div>
// // // //                         </form>
// // // //                       </div>
// // // //                       <div className="widget-btn">
// // // //                         <button
// // // //                           className="btn btn-info-light"
// // // //                           onClick={handleSave}
// // // //                           disabled={isLoading}
// // // //                         >
// // // //                           {isLoading ? (
// // // //                             <>
// // // //                               <Spinner
// // // //                                 as="span"
// // // //                                 animation="border"
// // // //                                 size="sm"
// // // //                                 role="status"
// // // //                                 aria-hidden="true"
// // // //                                 className="me-2"
// // // //                               />
// // // //                               Saving...
// // // //                             </>
// // // //                           ) : (
// // // //                             'Save Changes'
// // // //                           )}
// // // //                         </button>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EditLecture;

// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate, useParams, Link } from "react-router-dom";
// // // import axios from "axios";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import ReactQuill from "react-quill";
// // // import "react-quill/dist/quill.snow.css";
// // // import Footer from "../../../footer";
// // // import CourseHeader from "../header";
// // // import { Spinner } from "react-bootstrap";

// // // const EditLecture = () => {
// // //   const { courseid, sectionid, lectureid } = useParams();
// // //   const [lectureData, setLectureData] = useState({
// // //     lecture_name: "",
// // //     lecture_content: "",
// // //     lecture_resources_link: [],
// // //   });
// // //   const [videoFile, setVideoFile] = useState(null);
// // //   const [pdfFiles, setPdfFiles] = useState([]);
// // //   const [currentVideoUrl, setCurrentVideoUrl] = useState("");
// // //   const [currentPdfUrls, setCurrentPdfUrls] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   const token =
// // //     localStorage.getItem("trainerToken") ||
// // //     localStorage.getItem("vendorToken") ||
// // //     localStorage.getItem("adminToken");

// // //   useEffect(() => {
// // //     const fetchLectureData = async () => {
// // //       try {
// // //         const response = await axios.get(
// // //           `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
// // //           {
// // //             headers: {
// // //               Authorization: `${token}`,
// // //             },
// // //           }
// // //         );
// // //         if (response.data.status === "success") {
// // //           const { data } = response.data;
// // //           setLectureData({
// // //             lecture_name: data.lecture_name,
// // //             lecture_content: data.lecture_content,
// // //             lecture_resources_link: data.lecture_resources_link,
// // //           });
// // //           if (data.lecture_videos.length > 0) {
// // //             setCurrentVideoUrl(data.lecture_videos[0].video_url);
// // //           }
// // //           setCurrentPdfUrls(data.lecture_resources_pdf);
// // //         } else {
// // //           toast.error("Failed to fetch lecture data");
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching lecture data:", error);
// // //         toast.error("Error fetching lecture data. Please try again.");
// // //       }
// // //     };

// // //     fetchLectureData();
// // //   }, [lectureid, token]);

// // //   const handleInputChange = (e) => {
// // //     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleQuillChange = (content) => {
// // //     setLectureData({ ...lectureData, lecture_content: content });
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     if (name === "lecture_resources_pdf") {
// // //       setPdfFiles(Array.from(files));
// // //     } else if (name === "lecture_videos") {
// // //       setVideoFile(files[0]);
// // //     }
// // //   };

// // //   const handleLinkChange = (e) => {
// // //     const links = e.target.value.split(',').map(link => link.trim());
// // //     setLectureData({ ...lectureData, lecture_resources_link: links });
// // //   };

// // //   const handleSave = async () => {
// // //     setIsLoading(true);
// // //     try {
// // //       const formData = new FormData();
// // //       formData.append('lecture_name', lectureData.lecture_name);
// // //       formData.append('lecture_content', lectureData.lecture_content);

// // //       // Append PDF files
// // //       if (pdfFiles.length > 0) {
// // //         pdfFiles.forEach((file) => {
// // //           formData.append(`lecture_resources_pdf`, file);
// // //         });
// // //       }

// // //       // Append resource links
// // //       lectureData.lecture_resources_link.forEach((link) => {
// // //         formData.append(`lecture_resources_link`, link);
// // //       });

// // //       // Append video file if a new one is selected
// // //       if (videoFile) {
// // //         formData.append('lecture_videos', videoFile);
// // //       }
// // //     console.log(formData,"Edit data");
// // //       const response = await axios.patch(
// // //         `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
// // //         formData,
// // //         {
// // //           headers: {
// // //             'Content-Type': 'multipart/form-data',
// // //             Authorization: `${token}`,
// // //           },
// // //         }
// // //       );

// // //       if (response) {
// // //         toast.success('Lecture updated successfully!');
// // //         setTimeout(() => {
// // //           navigate(`/course-details/${courseid}`);
// // //         }, 2000);
// // //       } else {
// // //         toast.error(response.data.message || 'Error updating lecture');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error updating lecture:', error.response ? error.response.data : error);
// // //       toast.error('Error updating lecture. Please try again.');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="main-wrapper">
// // //       <CourseHeader activeMenu={"EditLecture"} />
// // //       <ToastContainer />

// // //       <section className="page-content course-sec">
// // //         <div className="container">
// // //           <div className="row align-items-center">
// // //             <div className="col-md-12">
// // //               <div className="add-course-header">
// // //                 <h2>Edit Lecture</h2>
// // //                 <div className="add-course-btns">
// // //                   <ul className="nav">
// // //                     <li>
// // //                       <Link to={`/course-details/${courseid}`} className="btn btn-black">
// // //                         Back to Course
// // //                       </Link>
// // //                     </li>
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="row">
// // //             <div className="col-md-12">
// // //               <div className="card">
// // //                 <div className="widget-set">
// // //                   <div className="widget-content multistep-form">
// // //                     <div className="add-course-info">
// // //                       <div className="add-course-inner-header">
// // //                         <h4>Lecture Information</h4>
// // //                       </div>
// // //                       <div className="add-course-form">
// // //                         <form>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">Lecture Name</label>
// // //                             <input
// // //                               type="text"
// // //                               className="form-control"
// // //                               placeholder="Enter lecture name"
// // //                               name="lecture_name"
// // //                               value={lectureData.lecture_name}
// // //                               onChange={handleInputChange}
// // //                             />
// // //                           </div>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">Lecture Content</label>
// // //                             <ReactQuill
// // //                               value={lectureData.lecture_content}
// // //                               onChange={handleQuillChange}
// // //                               modules={{
// // //                                 toolbar: [
// // //                                   [{ header: [1, 2, false] }],
// // //                                   ["bold", "italic", "underline", "strike", "blockquote"],
// // //                                   [{ list: "ordered" }, { list: "bullet" }],
// // //                                   ["link", "image"],
// // //                                   ["clean"],
// // //                                 ],
// // //                               }}
// // //                             />
// // //                           </div>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">Resources (PDF only)</label>
// // //                             <div className="relative-form">
// // //                               <span>
// // //                                 {pdfFiles.length > 0
// // //                                   ? `${pdfFiles.length} new file(s) selected`
// // //                                   : currentPdfUrls.length > 0
// // //                                   ? `${currentPdfUrls.length} current PDF(s)`
// // //                                   : "No PDF Selected"}
// // //                               </span>
// // //                               <label className="relative-file-upload">
// // //                                 Upload PDF
// // //                                 <input
// // //                                   type="file"
// // //                                   name="lecture_resources_pdf"
// // //                                   accept=".pdf"
// // //                                   multiple
// // //                                   onChange={handleFileChange}
// // //                                 />
// // //                               </label>
// // //                             </div>
// // //                           </div>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">Resource Links</label>
// // //                             <textarea
// // //                               className="form-control"
// // //                               name="lecture_resources_link"
// // //                               value={lectureData.lecture_resources_link.join(", ")}
// // //                               onChange={handleLinkChange}
// // //                               placeholder="Enter resource links (comma-separated)"
// // //                             ></textarea>
// // //                           </div>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">Lecture Video</label>
// // //                             <div className="relative-form">
// // //                               <span>
// // //                                 {videoFile
// // //                                   ? videoFile.name
// // //                                   : currentVideoUrl
// // //                                   ? "Current video: " + currentVideoUrl.split('/').pop()
// // //                                   : "No video selected"}
// // //                               </span>
// // //                               <label className="relative-file-upload">
// // //                                 Upload Video
// // //                                 <input
// // //                                   type="file"
// // //                                   name="lecture_video"
// // //                                   accept="video/*"
// // //                                   onChange={handleFileChange}
// // //                                 />
// // //                               </label>
// // //                             </div>
// // //                           </div>
// // //                         </form>
// // //                       </div>
// // //                       <div className="widget-btn">
// // //                         <button
// // //                           className="btn btn-info-light"
// // //                           onClick={handleSave}
// // //                           disabled={isLoading}
// // //                         >
// // //                           {isLoading ? (
// // //                             <>
// // //                               <Spinner
// // //                                 as="span"
// // //                                 animation="border"
// // //                                 size="sm"
// // //                                 role="status"
// // //                                 aria-hidden="true"
// // //                                 className="me-2"
// // //                               />
// // //                               Saving...
// // //                             </>
// // //                           ) : (
// // //                             'Save Changes'
// // //                           )}
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default EditLecture;
// // // import React, { useCallback, useEffect, useState } from "react";
// // // import { Link, useNavigate, useParams } from "react-router-dom";
// // // import axios from "axios";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import Footer from "../../../footer";
// // // import CourseHeader from "../header";
// // // import ReactQuill from "react-quill";
// // // import "react-quill/dist/quill.snow.css";
// // // import { debounce } from "lodash";

// // // const EditLecture = () => {
// // //   const { courseid, sectionid, lectureid } = useParams();
// // //   const token =
// // //     localStorage.getItem("trainerToken") ||
// // //     localStorage.getItem("vendorToken") ||
// // //     localStorage.getItem("adminToken");

// // //   const [lectureData, setLectureData] = useState({
// // //     lecture_name: "",
// // //     files: null,
// // //     resources: null,
// // //     links: "",
// // //     lecture_content: "",
// // //   });
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   // Fetch lecture data to edit
// // //   useEffect(() => {
// // //     const fetchLecture = async () => {
// // //       try {
// // //         const response = await axios.get(
// // //           `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
// // //           {
// // //             headers: {
// // //               Authorization: `${token}`,
// // //             },
// // //           }
// // //         );
// // //         const data = response.data.data;
// // //         setLectureData({
// // //           lecture_name: data.lecture_name,
// // //           files: data.lecture_videos[0]?.video_url || null,
// // //           resources: data.lecture_resources_pdf[0] || null,
// // //           links: JSON.parse(data.lecture_resources_link) || "",
// // //           lecture_content: data.lecture_content,
// // //         });
// // //       } catch (error) {
// // //         console.error("Error fetching lecture data:", error);
// // //         toast.error("Error fetching lecture data.");
// // //       }
// // //     };
// // //     fetchLecture();
// // //   }, [lectureid, token]);

// // //   const handleInputChange = (e) => {
// // //     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setLectureData({ ...lectureData, [name]: files[0] });
// // //   };

// // //   const handleContentChange = (value) => {
// // //     setLectureData({ ...lectureData, lecture_content: value });
// // //   };

// // //   const handleSave = useCallback(
// // //     debounce(async () => {
// // //       if (isLoading) return;

// // //       setIsLoading(true);
// // //       try {
// // //         const formData = new FormData();
// // //         for (const key in lectureData) {
// // //           if (lectureData[key]) {
// // //             formData.append(key, lectureData[key]);
// // //           }
// // //         }

// // //         const response = await axios.patch(
// // //           `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
// // //           formData,
// // //           {
// // //             headers: {
// // //               "Content-Type": "multipart/form-data",
// // //               Authorization: `${token}`,
// // //             },
// // //           }
// // //         );

// // //         console.log("Lecture updated successfully:", response.data);

// // //         toast.success("Lecture updated successfully!");
// // //         setTimeout(() => {
// // //           navigate(`/course-details/${courseid}`);
// // //         }, 2000);
// // //       } catch (error) {
// // //         console.error("Error updating lecture:", error);
// // //         toast.error("Error updating lecture. Please try again.");
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     }, 300),
// // //     [courseid, sectionid, lectureid, token, lectureData, isLoading, navigate]
// // //   );

// // //   return (
// // //     <div className="main-wrapper">
// // //       <CourseHeader activeMenu={"EditLecture"} />
// // //       <ToastContainer />
// // //       <section className="page-content course-sec">
// // //         <div className="container">
// // //           <div className="row align-items-center">
// // //             <div className="col-md-12">
// // //               <div className="add-course-header">
// // //                 <h2>Edit Lecture</h2>
// // //                 <div className="add-course-btns">
// // //                   <ul className="nav">
// // //                     <li>
// // //                       <Link
// // //                         to="/instructor/instructor-dashboard"
// // //                         className="btn btn-black"
// // //                       >
// // //                         Back to Course
// // //                       </Link>
// // //                     </li>
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="row">
// // //             <div className="col-md-12">
// // //               <div className="card">
// // //                 <div className="widget-set">
// // //                   <div className="widget-content multistep-form">
// // //                     <div className="add-course-info">
// // //                       <div className="add-course-inner-header">
// // //                         <h4>Lecture Information</h4>
// // //                       </div>
// // //                       <div className="add-course-form">
// // //                         <form>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">
// // //                               Lecture Name
// // //                             </label>
// // //                             <input
// // //                               type="text"
// // //                               className="form-control"
// // //                               placeholder="Enter lecture name"
// // //                               name="lecture_name"
// // //                               value={lectureData.lecture_name}
// // //                               onChange={handleInputChange}
// // //                             />
// // //                           </div>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">
// // //                               Files (MP4 only)
// // //                             </label>
// // //                             <div className="relative-form">
// // //                               <span>
// // //                                 {lectureData.files
// // //                                   ? "File already uploaded"
// // //                                   : "No File Selected"}
// // //                               </span>
// // //                               <label className="relative-file-upload">
// // //                                 Upload File
// // //                                 <input
// // //                                   type="file"
// // //                                   name="files"
// // //                                   accept=".mp4"
// // //                                   onChange={handleFileChange}
// // //                                 />
// // //                               </label>
// // //                             </div>
// // //                           </div>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">
// // //                               Resources (PDF only)
// // //                             </label>
// // //                             <div className="relative-form">
// // //                               <span>
// // //                                 {lectureData.resources
// // //                                   ? "PDF already uploaded"
// // //                                   : "No PDF Selected"}
// // //                               </span>
// // //                               <label className="relative-file-upload">
// // //                                 Upload PDF
// // //                                 <input
// // //                                   type="file"
// // //                                   name="resources"
// // //                                   accept=".pdf"
// // //                                   onChange={handleFileChange}
// // //                                 />
// // //                               </label>
// // //                             </div>
// // //                           </div>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">Links</label>
// // //                             <textarea
// // //                               className="form-control"
// // //                               name="links"
// // //                               value={lectureData.links}
// // //                               onChange={handleInputChange}
// // //                               placeholder="Enter links"
// // //                             ></textarea>
// // //                           </div>
// // //                           <div className="input-block">
// // //                             <label className="add-course-label">
// // //                               Lecture Content
// // //                             </label>
// // //                             <ReactQuill
// // //                               value={lectureData.lecture_content}
// // //                               onChange={handleContentChange}
// // //                               placeholder="Enter lecture content"
// // //                             />
// // //                           </div>
// // //                         </form>
// // //                       </div>
// // //                       <div className="widget-btn">
// // //                         <button
// // //                           onClick={handleSave}
// // //                           disabled={isLoading}
// // //                           className="btn btn-primary"
// // //                         >
// // //                           {isLoading ? (
// // //                             <>
// // //                               <span
// // //                                 className="spinner-border spinner-border-sm me-2"
// // //                                 role="status"
// // //                                 aria-hidden="true"
// // //                               ></span>
// // //                               Saving Lecture...
// // //                             </>
// // //                           ) : (
// // //                             "Update Lecture"
// // //                           )}
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default EditLecture;
// // import React, { useCallback, useEffect, useState } from "react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import axios from "axios";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import Footer from "../../../footer";
// // import CourseHeader from "../header";
// // import ReactQuill from "react-quill";
// // import "react-quill/dist/quill.snow.css";
// // import { debounce } from "lodash";

// // const EditLecture = () => {
// //   const { courseid, sectionid, lectureid } = useParams();
// //   const token =
// //     localStorage.getItem("trainerToken") ||
// //     localStorage.getItem("vendorToken") ||
// //     localStorage.getItem("adminToken");

// //   const [lectureData, setLectureData] = useState({
// //     lecture_name: "",
// //     files: null,
// //     resources: null,
// //     links: "",
// //     lecture_content: "",
// //   });
// //   const [isLoading, setIsLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Fetch lecture data to edit
// //   useEffect(() => {
// //     const fetchLecture = async () => {
// //       try {
// //         const response = await axios.get(
// //           `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
// //           {
// //             headers: {
// //               Authorization: `${token}`,
// //             },
// //           }
// //         );
// //         const data = response.data.data;

// //         let parsedLinks = "";
// //         try {
// //           parsedLinks = JSON.parse(data.lecture_resources_link);
// //         } catch (jsonError) {
// //           console.error("Invalid JSON in lecture_resources_link:", jsonError);
// //           // toast.warn("Invalid data in links, showing as plain text.");
// //           parsedLinks = data.lecture_resources_link; // Fall back to showing it as plain text
// //         }

// //         setLectureData({
// //           lecture_name: data.lecture_name,
// //           files: data.lecture_videos[0]?.video_url || null,
// //           resources: data.lecture_resources_pdf[0] || null,
// //           links: parsedLinks || "", // Use parsed links or empty string
// //           lecture_content: data.lecture_content,
// //         });
// //       } catch (error) {
// //         console.error("Error fetching lecture data:", error);
// //         toast.error("Error fetching lecture data.");
// //       }
// //     };
// //     fetchLecture();
// //   }, [lectureid, token]);

// //   const handleInputChange = (e) => {
// //     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     const { name, files } = e.target;
// //     setLectureData({ ...lectureData, [name]: files[0] });
// //   };

// //   const handleContentChange = (value) => {
// //     setLectureData({ ...lectureData, lecture_content: value });
// //   };

// //   const handleSave = useCallback(
// //     debounce(async () => {
// //       if (isLoading) return;

// //       setIsLoading(true);
// //       try {
// //         const formData = new FormData();
// //         for (const key in lectureData) {
// //           if (lectureData[key]) {
// //             formData.append(key, lectureData[key]);
// //           }
// //         }

// //         const response = await axios.patch(
// //           `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
// //           formData,
// //           {
// //             headers: {
// //               "Content-Type": "multipart/form-data",
// //               Authorization: `${token}`,
// //             },
// //           }
// //         );

// //         console.log("Lecture updated successfully:", response.data);

// //         toast.success("Lecture updated successfully!");
// //         setTimeout(() => {
// //           navigate(`/course-details/${courseid}`);
// //         }, 2000);
// //       } catch (error) {
// //         console.error("Error updating lecture:", error);
// //         toast.error("Error updating lecture. Please try again.");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }, 300),
// //     [courseid, sectionid, lectureid, token, lectureData, isLoading, navigate]
// //   );

// //   return (
// //     <div className="main-wrapper">
// //       <CourseHeader activeMenu={"EditLecture"} />
// //       <ToastContainer />
// //       <section className="page-content course-sec">
// //         <div className="container">
// //           <div className="row align-items-center">
// //             <div className="col-md-12">
// //               <div className="add-course-header">
// //                 <h2>Edit Lecture</h2>
// //                 <div className="add-course-btns">
// //                   <ul className="nav">
// //                     <li>
// //                       <Link
// //                         to="/instructor/instructor-dashboard"
// //                         className="btn btn-black"
// //                       >
// //                         Back to Course
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
// //                         <h4>Lecture Information</h4>
// //                       </div>
// //                       <div className="add-course-form">
// //                         <form>
// //                           <div className="input-block">
// //                             <label className="add-course-label">
// //                               Lecture Name
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="form-control"
// //                               placeholder="Enter lecture name"
// //                               name="lecture_name"
// //                               value={lectureData.lecture_name}
// //                               onChange={handleInputChange}
// //                             />
// //                           </div>
// //                           <div className="input-block">
// //                             <label className="add-course-label">
// //                               Files (MP4 only)
// //                             </label>
// //                             <div className="relative-form">
// //                               <span>
// //                                 {lectureData.files
// //                                   ? `${lectureData.files}`
// //                                   : "No File Selected"}
// //                               </span>
// //                               <label className="relative-file-upload">
// //                                 Upload File
// //                                 <input
// //                                   type="file"
// //                                   name="files"
// //                                   accept=".mp4"
// //                                   onChange={handleFileChange}
// //                                 />
// //                               </label>
// //                             </div>
// //                           </div>
// //                           <div className="input-block">
// //                             <label className="add-course-label">
// //                               Resources (PDF only)
// //                             </label>
// //                             <div className="relative-form">
// //                               <span>
// //                                 {lectureData.resources
// //                                   ? `${lectureData.resources}`
// //                                   : "No PDF Selected"}
// //                               </span>
// //                               <label className="relative-file-upload">
// //                                 Upload PDF
// //                                 <input
// //                                   type="file"
// //                                   name="resources"
// //                                   accept=".pdf"
// //                                   onChange={handleFileChange}
// //                                 />
// //                               </label>
// //                             </div>
// //                           </div>
// //                           <div className="input-block">
// //                             <label className="add-course-label">Links</label>
// //                             <textarea
// //                               className="form-control"
// //                               name="links"
// //                               value={lectureData.links}
// //                               onChange={handleInputChange}
// //                               placeholder="Enter links"
// //                             ></textarea>
// //                           </div>
// //                           <div className="input-block">
// //                             <label className="add-course-label">
// //                               Lecture Content
// //                             </label>
// //                             <ReactQuill
// //                               value={lectureData.lecture_content}
// //                               onChange={handleContentChange}
// //                               placeholder="Enter lecture content"
// //                             />
// //                           </div>
// //                         </form>
// //                       </div>
// //                       <div className="widget-btn">
// //                         <button
// //                           onClick={handleSave}
// //                           disabled={isLoading}
// //                           className="btn btn-primary"
// //                         >
// //                           {isLoading ? (
// //                             <>
// //                               <span
// //                                 className="spinner-border spinner-border-sm me-2"
// //                                 role="status"
// //                                 aria-hidden="true"
// //                               ></span>
// //                               Saving Lecture...
// //                             </>
// //                           ) : (
// //                             "Update Lecture"
// //                           )}
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

// // export default EditLecture;
// import React, { useCallback, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "../../../footer";
// import CourseHeader from "../header";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { debounce } from "lodash";

// const EditLecture = () => {
//   const { courseid, sectionid, lectureid } = useParams();
//   const token =
//     localStorage.getItem("trainerToken") ||
//     localStorage.getItem("vendorToken") ||
//     localStorage.getItem("adminToken");

//   const [lectureData, setLectureData] = useState({
//     lecture_name: "",
//     files: null,
//     resources: null,
//     links: "",
//     lecture_content: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch lecture data to edit
//   useEffect(() => {
//     const fetchLecture = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );
//         const data = response.data.data;

//         let parsedLinks = "";
//         try {
//           parsedLinks = JSON.parse(data.lecture_resources_link);
//         } catch (jsonError) {
//           console.error("Invalid JSON in lecture_resources_link:", jsonError);
//           parsedLinks = data.lecture_resources_link;
//         }

//         setLectureData({
//           lecture_name: data.lecture_name,
//           files: data.lecture_videos[0]?.video_url || null,
//           resources: data.lecture_resources_pdf[0] || null,
//           links: parsedLinks || "",
//           lecture_content: data.lecture_content,
//         });
//       } catch (error) {
//         console.error("Error fetching lecture data:", error);
//         toast.error("Error fetching lecture data.");
//       }
//     };
//     fetchLecture();
//   }, [lectureid, token]);

//   const handleInputChange = (e) => {
//     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setLectureData({ ...lectureData, [name]: files[0] });
//   };

//   const handleContentChange = (value) => {
//     setLectureData({ ...lectureData, lecture_content: value });
//   };

//   const handleSave = useCallback(
//     debounce(async () => {
//       if (isLoading) return;

//       setIsLoading(true);
//       try {
//         const formData = new FormData();
//         formData.append("lecture_name", lectureData.lecture_name);
//         formData.append("lecture_content", lectureData.lecture_content);

//         if (lectureData.files && typeof lectureData.files !== "string") {
//           formData.append("files", lectureData.files);
//         }
//         if (lectureData.resources && typeof lectureData.resources !== "string") {
//           formData.append("resources", lectureData.resources);
//         }
//         formData.append("links", lectureData.links);

//         const response = await axios.patch(
//           `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `${token}`,
//             },
//           }
//         );

//         console.log("Lecture updated successfully:", response.data);
//         toast.success("Lecture updated successfully!");
//         setTimeout(() => {
//           navigate(`/course-details/${courseid}`);
//         }, 2000);
//       } catch (error) {
//         console.error("Error updating lecture:", error);
//         toast.error("Error updating lecture. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     }, 300),
//     [courseid, sectionid, lectureid, token, lectureData, isLoading, navigate]
//   );

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"EditLecture"} />
//       <ToastContainer />
//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-12">
//               <div className="add-course-header">
//                 <h2>Edit Lecture</h2>
//                 <div className="add-course-btns">
//                   <ul className="nav">
//                     <li>
//                       <Link
//                         to="/instructor/instructor-dashboard"
//                         className="btn btn-black"
//                       >
//                         Back to Course
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
//                         <h4>Lecture Information</h4>
//                       </div>
//                       <div className="add-course-form">
//                         <form>
//                           <div className="input-block">
//                             <label className="add-course-label">
//                               Lecture Name
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Enter lecture name"
//                               name="lecture_name"
//                               value={lectureData.lecture_name}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                           <div className="input-block">
//                             <label className="add-course-label">
//                               Files (MP4 only)
//                             </label>
//                             <div className="relative-form">
//                               <span>
//                                 {lectureData.files
//                                   ? `${lectureData.files}`
//                                   : "No File Selected"}
//                               </span>
//                               <label className="relative-file-upload">
//                                 Upload File
//                                 <input
//                                   type="file"
//                                   name="files"
//                                   accept=".mp4"
//                                   onChange={handleFileChange}
//                                 />
//                               </label>
//                             </div>
//                           </div>
//                           <div className="input-block">
//                             <label className="add-course-label">
//                               Resources (PDF only)
//                             </label>
//                             <div className="relative-form">
//                               <span>
//                                 {lectureData.resources
//                                   ? `${lectureData.resources}`
//                                   : "No PDF Selected"}
//                               </span>
//                               <label className="relative-file-upload">
//                                 Upload PDF
//                                 <input
//                                   type="file"
//                                   name="resources"
//                                   accept=".pdf"
//                                   onChange={handleFileChange}
//                                 />
//                               </label>
//                             </div>
//                           </div>
//                           <div className="input-block">
//                             <label className="add-course-label">Links</label>
//                             <textarea
//                               className="form-control"
//                               name="links"
//                               value={lectureData.links}
//                               onChange={handleInputChange}
//                               placeholder="Enter links"
//                             ></textarea>
//                           </div>
//                           <div className="input-block">
//                             <label className="add-course-label">
//                               Lecture Content
//                             </label>
//                             <ReactQuill
//                               value={lectureData.lecture_content}
//                               onChange={handleContentChange}
//                               placeholder="Enter lecture content"
//                             />
//                           </div>
//                         </form>
//                       </div>
//                       <div className="widget-btn">
//                         <button
//                           onClick={handleSave}
//                           disabled={isLoading}
//                           className="btn btn-primary"
//                         >
//                           {isLoading ? (
//                             <>
//                               <span
//                                 className="spinner-border spinner-border-sm me-2"
//                                 role="status"
//                                 aria-hidden="true"
//                               ></span>
//                               Saving Lecture...
//                             </>
//                           ) : (
//                             "Update Lecture"
//                           )}
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

// export default EditLecture;


import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../../footer";
import CourseHeader from "../header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { debounce } from "lodash";

const EditLecture = () => {
  const { courseid, sectionid, lectureid } = useParams();
  const token =
    localStorage.getItem("trainerToken") ||
    localStorage.getItem("vendorToken") ||
    localStorage.getItem("adminToken");

  const [lectureData, setLectureData] = useState({
    lecture_name: "",
    links: "",
    lecture_content: "",
  });
  const [videoFile, setVideoFile] = useState(null); // Separate state for video
  const [pdfFile, setPdfFile] = useState(null); // Separate state for PDF
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch lecture data to edit
  useEffect(() => {
    const fetchLecture = async () => {
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const data = response.data.data;

        let parsedLinks = "";
        try {
          parsedLinks = JSON.parse(data.lecture_resources_link);
        } catch (jsonError) {
          console.error("Invalid JSON in lecture_resources_link:", jsonError);
          parsedLinks = data.lecture_resources_link;
        }

        setLectureData({
          lecture_name: data.lecture_name,
          links: parsedLinks || "",
          lecture_content: data.lecture_content,
        });

        // Set existing files (if any) separately
        setVideoFile(data.lecture_videos[0]?.video_url || null);
        setPdfFile(data.lecture_resources_pdf[0] || null);
      } catch (error) {
        console.error("Error fetching lecture data:", error);
        toast.error("Error fetching lecture data.");
      }
    };
    fetchLecture();
  }, [lectureid, token]);

  const handleInputChange = (e) => {
    setLectureData({ ...lectureData, [e.target.name]: e.target.value });
  };

  const handleVideoFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handlePdfFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleContentChange = (value) => {
    setLectureData({ ...lectureData, lecture_content: value });
  };

  const handleSave = useCallback(
    debounce(async () => {
      if (isLoading) return;

      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("lecture_name", lectureData.lecture_name);
        formData.append("lecture_content", lectureData.lecture_content);

        // Append video file if it's changed
        if (videoFile && typeof videoFile !== "string") {
          formData.append("video", videoFile);
        }

        // Append PDF file if it's changed
        if (pdfFile && typeof pdfFile !== "string") {
          formData.append("pdf", pdfFile);
        }

        formData.append("links", lectureData.links);

        const response = await axios.patch(
          `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `${token}`,
            },
          }
        );

        console.log("Lecture updated successfully:", response.data);
        toast.success("Lecture updated successfully!");
        setTimeout(() => {
          navigate(`/course-details/${courseid}`);
        }, 2000);
      } catch (error) {
        console.error("Error updating lecture:", error);
        toast.error("Error updating lecture. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [courseid, sectionid, lectureid, token, lectureData, videoFile, pdfFile, isLoading, navigate]
  );

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"EditLecture"} />
      <ToastContainer />
      <section className="page-content course-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="add-course-header">
                <h2>Edit Lecture</h2>
                <div className="add-course-btns">
                  <ul className="nav">
                    <li>
                      <Link
                        to="/instructor/instructor-dashboard"
                        className="btn btn-black"
                      >
                        Back to Course
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
                        <h4>Lecture Information</h4>
                      </div>
                      <div className="add-course-form">
                        <form>
                          <div className="input-block">
                            <label className="add-course-label">
                              Lecture Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter lecture name"
                              name="lecture_name"
                              value={lectureData.lecture_name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="input-block">
                            <label className="add-course-label">
                              Video (MP4 only)
                            </label>
                            <div className="relative-form">
                              <span>
                                {videoFile
                                  ? typeof videoFile === "string"
                                    ? videoFile
                                    : videoFile.name
                                  : "No File Selected"}
                              </span>
                              <label className="relative-file-upload">
                                Upload Video
                                <input
                                  type="file"
                                  name="video"
                                  accept=".mp4"
                                  onChange={handleVideoFileChange}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="input-block">
                            <label className="add-course-label">
                              Resources (PDF only)
                            </label>
                            <div className="relative-form">
                              <span>
                                {pdfFile
                                  ? typeof pdfFile === "string"
                                    ? pdfFile
                                    : pdfFile.name
                                  : "No PDF Selected"}
                              </span>
                              <label className="relative-file-upload">
                                Upload PDF
                                <input
                                  type="file"
                                  name="pdf"
                                  accept=".pdf"
                                  onChange={handlePdfFileChange}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="input-block">
                            <label className="add-course-label">Links</label>
                            <textarea
                              className="form-control"
                              name="links"
                              value={lectureData.links}
                              onChange={handleInputChange}
                              placeholder="Enter links"
                            ></textarea>
                          </div>
                          <div className="input-block">
                            <label className="add-course-label">
                              Lecture Content
                            </label>
                            <ReactQuill
                              value={lectureData.lecture_content}
                              onChange={handleContentChange}
                              placeholder="Enter lecture content"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="widget-btn">
                        <button
                          onClick={handleSave}
                          disabled={isLoading}
                          className="btn btn-primary"
                        >
                          {isLoading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Saving Lecture...
                            </>
                          ) : (
                            "Update Lecture"
                          )}
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

export default EditLecture;
