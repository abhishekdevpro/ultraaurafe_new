import React, { useCallback, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../../footer";
import CourseHeader from "../header";
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { debounce } from "lodash";

const AddLecture = () => {
  const { courseid, sectionid } = useParams();
  const token =
    localStorage.getItem("trainerToken") ||
    localStorage.getItem("vendorToken") ||
    localStorage.getItem("adminToken");

  const [lectureData, setLectureData] = useState({
    lecture_name: "",
    files: null,
    resources: null,
    links: "",
    lecture_content: "", // Add lecture_content to state
  });
  const [youtubeUrl, setYoutubeUrl] = useState(""); // State for YouTube URL
  const [videoOption, setVideoOption] = useState("upload"); // State for video option
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLectureData({ ...lectureData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setLectureData({ ...lectureData, [name]: files[0] });
  };

  const handleContentChange = (value) => {
    setLectureData({ ...lectureData, lecture_content: value }); // Update lecture_content
  };

  const handleSave = useCallback(
    debounce(async () => {
      if (isLoading) return; // Prevent multiple submissions

      setIsLoading(true);
      try {
        const formData = new FormData();
        for (const key in lectureData) {
          if (lectureData[key]) {
            formData.append(key, lectureData[key]);
          }
        }
        // Add YouTube URL to form data
        if (youtubeUrl) {
          formData.append("youtube_url", youtubeUrl);
        }

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
        sessionStorage.setItem("lectureData", JSON.stringify(lectureData));
        toast.success("Lecture saved successfully!");

        setTimeout(() => {
          navigate(`/course-details/${courseid}`);
        }, 2000); // 2 seconds delay
      } catch (error) {
        console.error("Error saving lecture:", error);
        toast.error("Error saving lecture. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 300), // 300ms debounce time
    [courseid, sectionid, token, lectureData, youtubeUrl, navigate]
  );

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"AddLecture"} />
      <section className="page-content course-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="add-course-header">
                <h2>Add New Lecture</h2>
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
                            <label className="add-course-label">Choose Video Type</label>
                            <div className="d-flex gap-3 mb-3">
                              <label>
                                <input
                                  type="radio"
                                  name="videoOption"
                                  value="upload"
                                  checked={videoOption === "upload"}
                                  onChange={() => setVideoOption("upload")}
                                />{" "}
                                Upload Video
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="videoOption"
                                  value="youtube"
                                  checked={videoOption === "youtube"}
                                  onChange={() => setVideoOption("youtube")}
                                />{" "}
                                YouTube URL
                              </label>
                            </div>
                          </div>
                          {videoOption === "upload" ? (
                            <div className="input-block">
                              <label className="add-course-label">
                                Files (MP4 only)
                              </label>
                              <div className="relative-form">
                                <span>
                                  {lectureData.files
                                    ? lectureData.files.name
                                    : "No File Selected"}
                                </span>
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
                          ) : (
                            <div className="input-block">
                              <label className="add-course-label">
                                YouTube URL
                              </label>
                              <input
                                type="url"
                                className="form-control"
                                placeholder="Enter YouTube video URL"
                                value={youtubeUrl}
                                onChange={(e) => setYoutubeUrl(e.target.value)}
                              />
                            </div>
                          )}
                          <div className="input-block">
                            <label className="add-course-label">
                              Resources (PDF only)
                            </label>
                            <div className="relative-form">
                              <span>
                                {lectureData.resources
                                  ? lectureData.resources.name
                                  : "No PDF Selected"}
                              </span>
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
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          ) : null}
                          Save Lecture
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

export default AddLecture;