import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styles

import logo3 from "../../../assests/logo3.jpg";

function ForEmployer() {
  // State for heading and paragraph content
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
  const [image, setImage] = useState(logo3);
  const [imagePreview, setImagePreview] = useState(logo3); // Preview for new image
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl); // Show the preview
      setUploading(true);

      // Simulate an upload process (replace with actual upload logic)
      setTimeout(() => {
        setImage(previewUrl); // Set the selected image
        setUploading(false);
      }, 2000);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log(
      "Saved content:",
      heading,
      paragraph1Content,
      paragraph1AContent,
      image
    );
  };

  return (
    <>
      <div className="mt-5">
        <button
          className="btn btn-warning mt-3 float-end"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
          {isEditing ? (
            <div>
              <label>
                <h5>Heading:</h5>
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
              {uploading && (
                <p className="text-black mt-2">Uploading image...</p>
              )}
              <button className="btn btn-primary mt-3" onClick={handleSave}>
                Save
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
                  src={image}
                  alt="Uploaded"
                  style={{
                    height: "400px",
                    width: "800px",
                    padding: "20px",
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

export default ForEmployer;
