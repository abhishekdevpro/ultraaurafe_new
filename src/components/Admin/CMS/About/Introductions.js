import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPlayer from "react-player";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import logo1 from "../../../../assests/logo1.jpg";
import PropTypes from "prop-types";
function Introductions({ introductionData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState("Introduction");
  const [paragraph1Content, setParagraph1Content] = useState(`
    <p>
      <strong>Introducing Novajobs.us by Hyper V Solutions:</strong>
      A cutting-edge AI-enabled job portal designed to streamline job search and recruitment processes.
      Experience the future of employment with intelligent matching and personalized career opportunities.
    </p>
  `);
  const [paragraph1AContent, setParagraph1AContent] = useState(`
    <p>
      For employers and staffing companies, Novajobs.us offers advanced AI algorithms that
      connect you with top-tier talent, optimizing your hiring process with precision and efficiency.
    </p>
  `);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=DbHXRGdBhqo"
  );
  const [image, setImage] = useState(null); // Binary image
  const [imagePreview, setImagePreview] = useState(logo1); // For preview
  const [loading, setLoading] = useState(false); // State for API request status

  const authToken = localStorage.getItem("adminToken"); // Retrieve auth token

  // Fetch data from the GET API
  useEffect(() => {
    if (!introductionData) {
      return;
    }

    setHeading(introductionData.title || heading);
    setParagraph1Content(introductionData.paragraph1 || paragraph1Content);
    setParagraph1AContent(introductionData.paragraph2 || paragraph1AContent);
    if (introductionData.urls && JSON.parse(introductionData.urls)) {
      const urlData = JSON.parse(introductionData.urls);
      setVideoUrl(urlData[0] || videoUrl);
    }
    if (introductionData.images && JSON.parse(introductionData.images)) {
      const imgData = JSON.parse(introductionData.images);
      setImagePreview(
        imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo1
      );
    }
  }, [introductionData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Directly store the selected file
      setImagePreview(URL.createObjectURL(file)); // Set preview
    }
  };

  const handleSave = async () => {
    if (!heading) {
      toast.error("Title is required!");
      return;
    }

    setIsEditing(false);
    setLoading(true);

    const formData = new FormData();
    formData.append("title", heading);
    formData.append("paragraph1", paragraph1Content);
    formData.append("paragraph2", paragraph1AContent);
    formData.append("urls", videoUrl);

    if (image) {
      formData.append("images", image, "image.jpg");
    }

    try {
      const response = await axios.patch(
        "https://api.novajobs.us/api/uaadmin/update-aboutus-content/1",
        formData,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Content updated successfully!");
      console.log("API Response:", response.data);
    } catch (error) {
      toast.error("Failed to update content!");
      console.error("Error updating content:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mt-5">
        {authToken && (
          <button
            className="btn btn-warning mt-3 float-end"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
          {isEditing ? (
            <div>
              <label>
                Heading(Title Mandatory):
                <input
                  type="text"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className="form-control"
                />
              </label>
              <ReactQuill
                value={paragraph1Content}
                onChange={setParagraph1Content}
              />
              <label className="mt-3">
                Video URL:
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="form-control"
                />
              </label>
              <ReactQuill
                value={paragraph1AContent}
                onChange={setParagraph1AContent}
              />
              <label className="mt-3">
                Change Image (400px x 800px):
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control mt-2"
                />
              </label>
              {imagePreview && (
                <div className="mt-3">
                  <p>
                    <strong>Preview:</strong>
                  </p>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      height: "400px",
                      width: "800px",
                      border: "2px solid #ccc",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              )}
              <button
                className="btn btn-primary mt-3"
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                className="btn btn-secondary mt-3 ms-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <h1 className="mb-4">{heading}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: paragraph1Content }}
              ></div>
              <p className="mt-5 text-center">
                <strong>Check our quick Product Video below:</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ReactPlayer
                  url={videoUrl}
                  width="700px"
                  height="500px"
                  controls={true}
                  style={{
                    margin: "50px",
                    border: "2px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: paragraph1AContent }}
              ></div>
              <div className="text-center">
                <img
                  src={imagePreview}
                  alt="Uploaded Image"
                  style={{ height: "400px", width: "800px" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
Introductions.propTypes = {
  introductionData: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    urls: PropTypes.string,
    images: PropTypes.string,
  }),
};
export default Introductions;
