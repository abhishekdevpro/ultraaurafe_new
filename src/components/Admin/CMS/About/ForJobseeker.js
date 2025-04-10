import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styles
import logo2 from "../../../../assests/logo2.jpg";
import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
function ForJobseeker({ forJobseekerData }) {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState("For Job Seekers:");
  const [paragraph1Content, setParagraph1Content] = useState(
    `<p>
      Novajobs.us offers a comprehensive suite of AI-enabled services, such as an AI resume builder, skill tests, and profile listings. 
      Job seekers can apply for positions across the USA, making it a versatile platform for all.
    </p>`
  );
  const [paragraph1AContent, setParagraph1AContent] = useState(
    `<p>
      Whether you’re starting your career or looking to advance, Novajobs.us is your one-stop solution. 
      Embrace the future of job searching and recruitment with our cutting-edge tools.
    </p>`
  );
  const [image, setImage] = useState(null); // Binary image blob
  const [imagePreview, setImagePreview] = useState(logo2); // Preview for the image
  const [showHeading, setShowHeading] = useState(true);
  const [showParagraph1, setShowParagraph1] = useState(true);
  const [showParagraph2, setShowParagraph2] = useState(true);
  const [showImage, setShowImage] = useState(true);

  const authToken = localStorage.getItem("adminToken"); // Retrieve auth token

  useEffect(() => {
    if (!forJobseekerData) {
      return;
    }

    setHeading(forJobseekerData.title || heading);
    setParagraph1Content(forJobseekerData.paragraph1 || paragraph1Content);
    setParagraph1AContent(forJobseekerData.paragraph2 || paragraph1AContent);
    setShowHeading(forJobseekerData.is_title_display);
    setShowParagraph1(forJobseekerData.is_paragraph1_display);
    setShowParagraph2(forJobseekerData.is_paragraph2_display);
    // setShowImage(forJobseekerData.is_images_display);
    setShowImage(JSON.parse(forJobseekerData.is_images_display)[0] === "true");
    if (forJobseekerData.images && JSON.parse(forJobseekerData.images)) {
      const imgData = JSON.parse(forJobseekerData.images);
      setImagePreview(
        imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo2
      );
    }
  }, [forJobseekerData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Directly store the selected file
      setImagePreview(URL.createObjectURL(file)); // Set preview
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    setLoading(true);

    const formData = new FormData();
    formData.append("title", heading);
    formData.append("paragraph1", paragraph1Content);
    formData.append("paragraph2", paragraph1AContent);
    formData.append("is_title_display", showHeading);
    formData.append("is_paragraph1_display", showParagraph1);
    formData.append("is_paragraph2_display", showParagraph2);
    formData.append("is_images_display", showImage);

    if (image) {
      formData.append("images", image, "image.jpg");
    }

    try {
      const response = await axios.patch(
        "https://api.novajobs.us/api/uaadmin/update-aboutus-content/2",
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
      console.error("Error updating content:", error);
    } finally {
      setLoading(false);
    }
  };

  // const handleDelete = (field) => {
  //   switch (field) {
  //     case "heading":
  //       setHeading("");
  //       break;
  //     case "paragraph1":
  //       setParagraph1Content("");
  //       break;
  //     case "paragraph2":
  //       setParagraph1AContent("");
  //       break;
  //     case "image":
  //       setImage(null);
  //       setImagePreview(logo2);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
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
              <div className="d-flex justify-content-start gap-2">
                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={showHeading}
                      onChange={() => setShowHeading(!showHeading)}
                    />
                  </label>
                </div>
                <label>
                  <h5> Heading(Title Mandatory):</h5>
                  {showHeading && (
                    <input
                      type="text"
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
                      className="form-control"
                      style={{ marginBottom: "10px" }}
                    />
                  )}
                </label>
              </div>
              <div className="d-flex justify-content-start gap-4">
                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={showParagraph1}
                      onChange={() => setShowParagraph1(!showParagraph1)}
                    />
                    {/* <span className="form-check-label">
                      {showParagraph1 ? "Hide Paragraph 1" : "Show Paragraph 1"}
                    </span> */}
                  </label>
                </div>
                <div>
                  <h5>Paragraph 1:</h5>
                  {showParagraph1 && (
                    <ReactQuill
                      value={paragraph1Content}
                      onChange={setParagraph1Content}
                    />
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-start gap-4">
                <label className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={showParagraph2}
                    onChange={() => setShowParagraph2(!showParagraph2)}
                  />
                </label>
                <div>
                  <h5>Paragraph 2:</h5>
                  {showParagraph2 && (
                    <ReactQuill
                      value={paragraph1AContent}
                      onChange={setParagraph1AContent}
                    />
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-start gap-2 mt-4">
                <label className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={showImage}
                    onChange={() => setShowImage(!showImage)}
                  />
                  {/* <span className="form-check-label">
                    {showImage ? "Hide Image" : "Show Image"}
                  </span> */}
                </label>
                <label className="mt-3">
                  <h5>Change Image (400px x 800px):</h5>
                  {showImage && (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="form-control"
                    />
                  )}
                </label>
              </div>
              {showImage && imagePreview && (
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
              <div className="mt-4">
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
            </div>
          ) : (
            <div>
              {showHeading && (
                <h1
                  style={{
                    fontSize: "clamp(14px, 5vw, 20px)",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                >
                  {heading}
                </h1>
              )}
              {showParagraph1 && (
                <div
                  dangerouslySetInnerHTML={{ __html: paragraph1Content }}
                  style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                ></div>
              )}
              {showParagraph2 && (
                <div
                  dangerouslySetInnerHTML={{ __html: paragraph1AContent }}
                  style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                ></div>
              )}
              {showImage && (
                <div className="mx-3 mx-lg-5 d-flex justify-content-center">
                  <img
                    src={imagePreview}
                    alt="Uploaded"
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
ForJobseeker.propTypes = {
  forJobseekerData: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    is_title_display: PropTypes.bool, // Add missing prop validation
    is_paragraph1_display: PropTypes.bool, // Add missing prop validation
    is_paragraph2_display: PropTypes.bool, // Add missing prop validation
    is_images_display: PropTypes.bool, // Add missing prop validation
    images: PropTypes.string, // Ensure this matches the expected data type
  }),
};

export default ForJobseeker;
