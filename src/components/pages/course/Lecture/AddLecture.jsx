import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../../footer";
import CourseHeader from "../header";

const AddLecture = () => {
  const { courseid, sectionid } = useParams();
  console.log(courseid, sectionid, "id hu bhai");

  const [lectureData, setLectureData] = useState({
    lecture_name: "",
    files: null,
    resources: null,
    links: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLectureData({ ...lectureData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setLectureData({ ...lectureData, [name]: files[0] });
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      for (const key in lectureData) {
        if (lectureData[key]) {
          formData.append(key, lectureData[key]);
        }
      }
      const token = localStorage.getItem("trainerToken");
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${courseid}/${sectionid}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        }
      );

      console.log("Lecture saved successfully:", response.data);

      // Show success toast
      toast.success("Lecture saved successfully!");

      // Navigate after a short delay to allow the toast to be visible
      setTimeout(() => {
        navigate(`/course-details/${courseid}`);
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error("Error saving lecture:", error);
      toast.error("Error saving lecture. Please try again.");
    }
  };

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"AddLecture"} />

      <ToastContainer /> {/* Toast container to display toasts */}

      <section className="page-content course-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="add-course-header">
                <h2>Add New Lecture</h2>
                <div className="add-course-btns">
                  <ul className="nav">
                    <li>
                      <Link to="/instructor/instructor-dashboard" className="btn btn-black">
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
                            <label className="add-course-label">Lecture Name</label>
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
                            <label className="add-course-label">Files (MP4 only)</label>
                            <div className="relative-form">
                              <span>{lectureData.files ? lectureData.files.name : "No File Selected"}</span>
                              <label className="relative-file-upload">
                                Upload File
                                <input
                                  type="file"
                                  name="files"
                                  accept=".mp4"
                                  onChange={handleFileChange}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="input-block">
                            <label className="add-course-label">Resources (PDF only)</label>
                            <div className="relative-form">
                              <span>{lectureData.resources ? lectureData.resources.name : "No PDF Selected"}</span>
                              <label className="relative-file-upload">
                                Upload PDF
                                <input
                                  type="file"
                                  name="resources"
                                  accept=".pdf"
                                  onChange={handleFileChange}
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
                        </form>
                      </div>
                      <div className="widget-btn">
                        <Link to="#" className="btn btn-info-light" onClick={handleSave}>
                          Save Lecture
                        </Link>
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

export default AddLecture;
