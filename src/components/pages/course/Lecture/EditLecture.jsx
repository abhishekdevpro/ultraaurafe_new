// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams,Link } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import Footer from "../../../footer";
// import CourseHeader from "../header";

// const EditLecture = () => {
//   const { courseid, sectionid, lectureid } = useParams();
//   const [lectureData, setLectureData] = useState({
//     lecture_name: "",
//     files: null,
//     resources: null,
//     links: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve lecture data from session storage
//     const storedLectureData = JSON.parse(sessionStorage.getItem("lectureData"));
//     if (storedLectureData) {
//       setLectureData(storedLectureData);
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setLectureData({ ...lectureData, [name]: files[0] });
//   };

//   const handleSave = async () => {
//     try {
//       const formData = new FormData();
//       for (const key in lectureData) {
//         if (lectureData[key]) {
//           formData.append(key, lectureData[key]);
//         }
//       }
//       const token = localStorage.getItem("trainerToken");
//       const response = await axios.patch(
//         `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `${token}`,
//           },
//         }
//       );

//       console.log("Lecture updated successfully:", response.data);

//       // Show success toast
//       toast.success("Lecture updated successfully!");

//       // Navigate after a short delay to allow the toast to be visible
//       setTimeout(() => {
//         navigate(`/course-details/${courseid}`);
//       }, 2000); // 2 seconds delay
//     } catch (error) {
//       console.error("Error updating lecture:", error);
//       toast.error("Error updating lecture. Please try again.");
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"EditLecture"} />

//       <ToastContainer /> {/* Toast container to display toasts */}

//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-12">
//               <div className="add-course-header">
//                 <h2>Edit Lecture</h2>
//                 <div className="add-course-btns">
//                   <ul className="nav">
//                     <li>
//                       <Link to={`/course-details/${courseid}`} className="btn btn-black">
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
//                             <label className="add-course-label">Lecture Name</label>
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
//                             <label className="add-course-label">Files (MP4 only)</label>
//                             <div className="relative-form">
//                               <span>{lectureData.files ? lectureData.files.name : "No File Selected"}</span>
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
//                             <label className="add-course-label">Resources (PDF only)</label>
//                             <div className="relative-form">
//                               <span>{lectureData.resources ? lectureData.resources.name : "No PDF Selected"}</span>
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
//                         </form>
//                       </div>
//                       <div className="widget-btn">
//                         <button className="btn btn-info-light" onClick={handleSave}>
//                           Save Changes
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
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import Footer from "../../../footer";
// import CourseHeader from "../header";

// const EditLecture = () => {
//   const { courseid, sectionid, lectureid } = useParams();
//   const [lectureData, setLectureData] = useState({
//     lecture_name: "",
//     lecture_content: "",
//     lecture_resources_pdf: [],
//     lecture_resources_link: [],
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLectureData = async () => {
//       try {
//         const token = localStorage.getItem("trainerToken");
//         const response = await axios.get(
//           `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );
//         if (response.data.status === "success") {
//           const { data } = response.data;
//           setLectureData({
//             lecture_name: data.lecture_name,
//             lecture_content: data.lecture_content,
//             lecture_resources_pdf: data.lecture_resources_pdf,
//             lecture_resources_link: data.lecture_resources_link.join(", "), // Join links into a string
//           });
//         } else {
//           toast.error("Failed to fetch lecture data");
//         }
//       } catch (error) {
//         console.error("Error fetching lecture data:", error);
//         toast.error("Error fetching lecture data. Please try again.");
//       }
//     };

//     fetchLectureData();
//   }, [lectureid]);

//   const handleInputChange = (e) => {
//     setLectureData({ ...lectureData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (name === "lecture_resources_pdf") {
//       setLectureData({ ...lectureData, [name]: [...files] });
//     } else {
//       setLectureData({ ...lectureData, [name]: files[0] });
//     }
//   };

//   const handleSave = async () => {
//     try {
//       const formData = new FormData();
//       for (const key in lectureData) {
//         if (key === "lecture_resources_pdf") {
//           lectureData[key].forEach((file, index) => {
//             formData.append(`lecture_resources_pdf[${index}]`, file);
//           });
//         } else if (key === "lecture_resources_link") {
//           formData.append(key, lectureData[key].split(",").map(link => link.trim()));
//         } else if (lectureData[key]) {
//           formData.append(key, lectureData[key]);
//         }
//       }

//       const token = localStorage.getItem("trainerToken");
//       const response = await axios.patch(
//         `https://api.novajobs.us/api/trainers/lectureupdate/${courseid}/${sectionid}/${lectureid}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `${token}`,
//           },
//         }
//       );

//       if (response) {
//         toast.success("Lecture updated successfully!");
//         setTimeout(() => {
//           navigate(`/course-details/${courseid}`);
//         }, 2000);
//       } else {
//         toast.error(response.data.message || "Error updating lecture");
//       }
//     } catch (error) {
//       console.error("Error updating lecture:", error);
//       toast.error("Error updating lecture. Please try again.");
//     }
//   };

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
//                       <Link to={`/course-details/${courseid}`} className="btn btn-black">
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
//                             <label className="add-course-label">Lecture Name</label>
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
//                             <label className="add-course-label">Lecture Content</label>
//                             <textarea
//                               className="form-control"
//                               name="lecture_content"
//                               value={lectureData.lecture_content}
//                               onChange={handleInputChange}
//                               placeholder="Enter lecture content"
//                             ></textarea>
//                           </div>
//                           <div className="input-block">
//                             <label className="add-course-label">Resources (PDF only)</label>
//                             <div className="relative-form">
//                               <span>{lectureData.lecture_resources_pdf.length > 0 ? `${lectureData.lecture_resources_pdf.length} file(s) selected` : "No PDF Selected"}</span>
//                               <label className="relative-file-upload">
//                                 Upload PDF
//                                 <input
//                                   type="file"
//                                   name="lecture_resources_pdf"
//                                   accept=".pdf"
//                                   multiple
//                                   onChange={handleFileChange}
//                                 />
//                               </label>
//                             </div>
//                           </div>
//                           <div className="input-block">
//                             <label className="add-course-label">Resource Links</label>
//                             <textarea
//                               className="form-control"
//                               name="lecture_resources_link"
//                               value={lectureData.lecture_resources_link}
//                               onChange={handleInputChange}
//                               placeholder="Enter resource links (comma-separated)"
//                             ></textarea>
//                           </div>
//                         </form>
//                       </div>
//                       <div className="widget-btn">
//                         <button className="btn btn-info-light" onClick={handleSave}>
//                           Save Changes
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

import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "../../../footer";
import CourseHeader from "../header";

const EditLecture = () => {
  const { courseid, sectionid, lectureid } = useParams();
  const [lectureData, setLectureData] = useState({
    lecture_name: "",
    lecture_content: "",
    lecture_resources_pdf: [],
    lecture_resources_link: [],
    lecture_video: null,
  });
  const [currentVideo, setCurrentVideo] = useState(null);
  const navigate = useNavigate();
  const token =
    localStorage.getItem("trainerToken") ||
    localStorage.getItem("vendorToken") ||
    localStorage.getItem("adminToken");
  console.log(currentVideo);
  useEffect(() => {
    const fetchLectureData = async () => {
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/get-lecture/${lectureid}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        if (response.data.status === "success") {
          const { data } = response.data;
          setLectureData({
            lecture_name: data.lecture_name,
            lecture_content: data.lecture_content,
            lecture_resources_pdf: data.lecture_resources_pdf,
            lecture_resources_link: data.lecture_resources_link.join(", "),
            lecture_video: data.lecture_video,
          });
          setCurrentVideo(data.lecture_video);
        } else {
          toast.error("Failed to fetch lecture data");
        }
      } catch (error) {
        console.error("Error fetching lecture data:", error);
        toast.error("Error fetching lecture data. Please try again.");
      }
    };

    fetchLectureData();
  }, [lectureid]);

  const handleInputChange = (e) => {
    setLectureData({ ...lectureData, [e.target.name]: e.target.value });
  };

  const handleQuillChange = (content) => {
    setLectureData({ ...lectureData, lecture_content: content });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "lecture_resources_pdf") {
      setLectureData({ ...lectureData, [name]: [...files] });
    } else if (name === "lecture_video") {
      setLectureData({ ...lectureData, [name]: files[0] });
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      for (const key in lectureData) {
        if (key === "lecture_resources_pdf") {
          lectureData[key].forEach((file, index) => {
            formData.append(`lecture_resources_pdf[${index}]`, file);
          });
        } else if (key === "lecture_resources_link") {
          formData.append(
            key,
            lectureData[key].split(",").map((link) => link.trim())
          );
        } else if (key === "lecture_video" && lectureData[key]) {
          formData.append(key, lectureData[key]);
        } else if (lectureData[key]) {
          formData.append(key, lectureData[key]);
        }
      }

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

      if (response) {
        toast.success("Lecture updated successfully!");
        setTimeout(() => {
          navigate(`/course-details/${courseid}`);
        }, 2000);
      } else {
        toast.error(response.data.message || "Error updating lecture");
      }
    } catch (error) {
      console.error("Error updating lecture:", error);
      toast.error("Error updating lecture. Please try again.");
    }
  };

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
                        to={`/course-details/${courseid}`}
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
                              Lecture Content
                            </label>
                            <ReactQuill
                              value={lectureData.lecture_content}
                              onChange={handleQuillChange}
                              modules={{
                                toolbar: [
                                  [{ header: [1, 2, false] }],
                                  [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strike",
                                    "blockquote",
                                  ],
                                  [{ list: "ordered" }, { list: "bullet" }],
                                  ["link", "image"],
                                  ["clean"],
                                ],
                              }}
                            />
                          </div>
                          {/* <div className="input-block">
                            <label className="add-course-label">Lecture Video</label>
                            {currentVideo && (
                              <div>
                                <video width="320" height="240" controls>
                                  <source src={currentVideo} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            )} */}
                          {/* <div className="relative-form">
                              <span>{lectureData.lecture_video ? lectureData.lecture_video.name : "No Video Selected"}</span>
                              <label className="relative-file-upload">
                                Upload Video
                                <input
                                  type="file"
                                  name="lecture_video"
                                  accept="video/*"
                                  onChange={handleFileChange}
                                />
                              </label>
                            </div> */}
                          {/* </div> */}
                          {/* <div className="input-block">
                            <label className="add-course-label">
                              Resources (PDF only)
                            </label>
                            <div className="relative-form">
                              <span>
                                {lectureData.lecture_resources_pdf.length > 0
                                  ? `${lectureData.lecture_resources_pdf.length} file(s) selected`
                                  : "No PDF Selected"}
                              </span>
                              <label className="relative-file-upload">
                                Upload PDF
                                <input
                                  type="file"
                                  name="lecture_resources_pdf"
                                  accept=".pdf"
                                  multiple
                                  onChange={handleFileChange}
                                />
                              </label>
                            </div>
                          </div> */}
                          <div className="input-block">
                            <label className="add-course-label">
                              Resources (PDF only)
                            </label>
                            <div className="relative-form">
                              <span>
                                {Array.isArray(
                                  lectureData.lecture_resources_pdf
                                ) &&
                                lectureData.lecture_resources_pdf.length > 0
                                  ? `${lectureData.lecture_resources_pdf.length} file(s) selected`
                                  : "No PDF Selected"}
                              </span>
                              <label className="relative-file-upload">
                                Upload PDF
                                <input
                                  type="file"
                                  name="lecture_resources_pdf"
                                  accept=".pdf"
                                  multiple
                                  onChange={handleFileChange}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="input-block">
                            <label className="add-course-label">
                              Resource Links
                            </label>
                            <textarea
                              className="form-control"
                              name="lecture_resources_link"
                              value={lectureData.lecture_resources_link}
                              onChange={handleInputChange}
                              placeholder="Enter resource links (comma-separated)"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <div className="widget-btn">
                        <button
                          className="btn btn-info-light"
                          onClick={handleSave}
                        >
                          Save Changes
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
