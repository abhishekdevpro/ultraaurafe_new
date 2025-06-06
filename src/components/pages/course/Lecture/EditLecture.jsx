import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../../footer";
import CourseHeader from "../header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { debounce } from "lodash";

const EditLecture = () => {
  const { courseid, sectionid, lectureid } = useParams();
  const token = localStorage.getItem("adminToken");

  // Changed to add loading state instead of empty initial values
  const [lectureData, setLectureData] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [existingVideoUrl, setExistingVideoUrl] = useState("");
  const [existingPdfUrl, setExistingPdfUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [isSaving, setIsSaving] = useState(false); // Separate loading state for save operation
  const navigate = useNavigate();
  const [videoOption, setVideoOption] = useState("upload");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  
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

        // Set lecture data
        setLectureData({
          lecture_name: data.lecture_name || "",
          lecture_content: data.lecture_content || "",
          links: data.lecture_resources_link || "",
        });

        // Set existing video URL if available
        if (data.lecture_videos && data.lecture_videos.length > 0) {
          setExistingVideoUrl(data.lecture_videos[0]?.video_url || "");
        }

        // Set existing PDF URL if available
        if (data?.lecture_resources_pdf && data.lecture_resources_pdf.length > 0) {
          setExistingPdfUrl(data.lecture_resources_pdf[0] || "");
        }

        // Set YouTube URL if available
        if (data.youtube_url) {
          setYoutubeUrl(data.youtube_url);
        }

      } catch (error) {
        console.error("Error fetching lecture data:", error);
        toast.error("Error fetching lecture data.");
      } finally {
        setIsLoading(false); // End loading regardless of success or failure
      }
    };
    fetchLecture();
  }, [lectureid, token]);

  // Only render form after data is loaded
  const handleInputChange = (e) => {
    if (!lectureData) return;
    setLectureData({ ...lectureData, [e.target.name]: e.target.value });
  };

  const handleVideoFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handlePdfFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleContentChange = (value) => {
    if (!lectureData) return;
    setLectureData({ ...lectureData, lecture_content: value });
  };

  const handleSave = useCallback(
    debounce(async () => {
      if (isSaving || !lectureData) return;

      setIsSaving(true);
      try {
        const formData = new FormData();
        formData.append("lecture_name", lectureData.lecture_name);
        formData.append("lecture_content", lectureData.lecture_content);
        formData.append("links", lectureData.links);

        // Handle video upload based on selected option
        if (videoOption === "upload" && videoFile instanceof File) {
          formData.append("files", videoFile);
          formData.append("content_type", "video");
        } else if (videoOption === "youtube" && youtubeUrl) {
          // For YouTube URL, send it as a text field
          formData.append("youtube_url", youtubeUrl);
          formData.append("content_type", "youtube");
          // Send empty string for files to indicate no file upload
          formData.append("files", "");
        }

        // Append PDF file only if a new one is selected
        if (pdfFile && pdfFile instanceof File) {
          formData.append("resources", pdfFile);
        }

        // Log form data entries
        for (let pair of formData.entries()) {
          console.log(pair[0], pair[1]);
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

        console.log("Lecture updated successfully:", response.data);
        toast.success("Lecture updated successfully!");
        setTimeout(() => {
          navigate(`/course-details/${courseid}`);
        }, 2000);
      } catch (error) {
        console.error("Error updating lecture:", error);
        toast.error(error.response?.data?.message || "Error updating lecture. Please try again.");
      } finally {
        setIsSaving(false);
      }
    }, 300),
    [courseid, sectionid, lectureid, token, lectureData, videoFile, pdfFile, isSaving, navigate, videoOption, youtubeUrl]
  );

  // Get file name from URL
  const getFileNameFromUrl = (url) => {
    if (!url) return "";
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  // Show loading indicator while data is being fetched
  if (isLoading) {
    return (
      <div className="main-wrapper">
        <CourseHeader activeMenu={"EditLecture"} />
        <section className="page-content course-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading lecture data...</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Render form only if data is available
  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"EditLecture"} />
     
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
                        to="/admin/admin-dashboard"
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
                              value={lectureData?.lecture_name || ""}
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

  {videoOption === "upload" ? (
    <div className="relative-form">
      <span>
        {videoFile
          ? videoFile.name
          : existingVideoUrl
          ? getFileNameFromUrl(existingVideoUrl)
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
  ) : (
    <div>
      <input
        type="url"
        className="form-control"
        placeholder="Enter YouTube video URL"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
      />
    </div>
  )}
</div>

                          <div className="input-block">
                            <label className="add-course-label">
                              Resources (PDF only)
                            </label>
                            <div className="relative-form">
                              <span>
                                {pdfFile 
                                  ? pdfFile.name 
                                  : existingPdfUrl 
                                    ? getFileNameFromUrl(existingPdfUrl)
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
                              value={lectureData?.links || ""}
                              onChange={handleInputChange}
                              placeholder="Enter links"
                            ></textarea>
                          </div>
                          <div className="input-block">
                            <label className="add-course-label">
                              Lecture Content
                            </label>
                            <ReactQuill
                              value={lectureData?.lecture_content || ""}
                              onChange={handleContentChange}
                              placeholder="Enter lecture content"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="widget-btn">
                        <button
                          onClick={handleSave}
                          disabled={isSaving}
                          className="btn btn-primary"
                        >
                          {isSaving ? (
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