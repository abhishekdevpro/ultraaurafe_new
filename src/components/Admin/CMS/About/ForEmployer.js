import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styles
import axios from "axios";
import logo3 from "../../../../assests/logo3.jpg";
import PropTypes from "prop-types";
function ForEmployer({ forEmployerData }) {
  // State for heading and paragraph content
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState("For Employers:");
  const [paragraph1Content, setParagraph1Content] = useState(`
    <p>
       Discover the ultimate solution for employers with
                        Novajobs.us. Leverage AI-enabled job listings,
                        seamlessly browse applicants, and access our extensive
                        database to hire faster.
    </p>
  `);
  const [paragraph1AContent, setParagraph1AContent] = useState(`
    <p>
       Manage applicants effortlessly with just a few clicks,
                        conduct interviews, share openings, and refresh listings
                        with one click. Simplify your recruitment process and
                        find top talent efficiently.
    </p>
  `);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(logo3); // Preview for new image

  const authToken = localStorage.getItem("authToken"); // Retrieve auth token

  // Fetch data from the GET API
  useEffect(() => {
    if (!forEmployerData) {
      return;
    }

    setHeading(forEmployerData.title || heading);
    setParagraph1Content(forEmployerData.paragraph1 || paragraph1Content);
    setParagraph1AContent(forEmployerData.paragraph2 || paragraph1AContent);

    if (forEmployerData.images && JSON.parse(forEmployerData.images)) {
      const imgData = JSON.parse(forEmployerData.images);

      setImagePreview(
        imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo3
      );
    }
  }, [forEmployerData]);

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

    // Prepare data to send to the API
    const formData = new FormData();
    formData.append("title", heading);
    formData.append("paragraph1", paragraph1Content);
    formData.append("paragraph2", paragraph1AContent);

    if (image) {
      formData.append("images", image, "image.jpg");
    }

    try {
      const response = await axios.patch(
        "https://api.novajobs.us/api/admin/update-aboutus-content/3",
        formData,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error updating content:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-5">
        {/* Conditionally render "Edit" button based on authToken */}
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
                <h5> Heading(Title Mandatory):</h5>
                <input
                  type="text"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className="form-control"
                  style={{ marginBottom: "10px" }}
                />
              </label>
              <h5>Paragraph 1:</h5>
              <ReactQuill
                value={paragraph1Content}
                onChange={setParagraph1Content}
              />
              <h5 className="mt-3">Paragraph 2:</h5>
              <ReactQuill
                value={paragraph1AContent}
                onChange={setParagraph1AContent}
              />
              <label className="mt-3">
                <h5> Change Image (400px x 800px):</h5>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control"
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
                      height: "300px",
                      width: "600px",
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
              <h1
                style={{
                  fontSize: "clamp(14px, 5vw, 20px)",
                  fontWeight: "500",
                  textDecoration: "underline",
                }}
              >
                {heading}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: paragraph1Content,
                }}
                style={{
                  fontSize: "clamp(14px, 3vw, 15px)",
                }}
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: paragraph1AContent,
                }}
                style={{
                  fontSize: "clamp(14px, 3vw, 15px)",
                }}
              ></div>
              <div className="mx-3 mx-lg-5 d-flex justify-content-center">
                <img
                  src={imagePreview}
                  alt="Uploaded"
                  style={{
                    height: "400px",
                    width: "800px",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
ForEmployer.propTypes = {
  forEmployerData: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    urls: PropTypes.string,
    images: PropTypes.string,
  }),
};

export default ForEmployer;
