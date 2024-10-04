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
          formData.append("files", videoFile);
        }

        // Append PDF file if it's changed
        if (pdfFile && typeof pdfFile !== "string") {
          formData.append("resources", pdfFile);
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
