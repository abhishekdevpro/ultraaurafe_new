import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import logo5 from "../../../assests/logo5.jpg";

function MoreServices() {
  const [isEditing, setIsEditing] = useState(false);

  // State for content
  const [heading, setHeading] = useState(
    "More Services from Hyper V Solutions"
  );
  const [paragraph1Content, setParagraph1Content] = useState(
    `Discover the wide range of innovative services offered by Hyper V Solutions. Whether you're navigating a job search or looking to elevate your career, our EdTech platform, UltraAura.education, is here to support you.`
  );
  const [paragraph2Content, setParagraph2Content] = useState(
    `We offer expertly curated content, live online classes led by industry professionals, and robust placement assistance through Novajobs.us. Take the next step towards your future with our cutting-edge educational solutions.`
  );
  const [paragraph3Content, setParagraph3Content] = useState(
    `For more information, visit our parent website: https://hypervsolutions.net/`
  );
  const [subHeading, setSubHeading] = useState(
    `Experience the difference of innovation and inclusivity at Novajobs.us. Explore our website today and unlock your path to success.`
  );
  const [image, setImage] = useState(logo5);
  const [imagePreview, setImagePreview] = useState(logo5);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setUploading(true);

      setTimeout(() => {
        setImage(previewUrl);
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
      paragraph2Content,
      paragraph3Content,
      subHeading,
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
        {isEditing ? (
          <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
            <label>
              Heading:
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="form-control"
              />
            </label>
            <h5>Paragraph 1:</h5>
            <ReactQuill
              value={paragraph1Content}
              onChange={setParagraph1Content}
            />
            <h5>Paragraph 2:</h5>
            <ReactQuill
              value={paragraph2Content}
              onChange={setParagraph2Content}
            />
            <h5>Paragraph 3:</h5>
            <ReactQuill
              value={paragraph3Content}
              onChange={setParagraph3Content}
            />
            <h5>Subheading:</h5>
            <input
              type="text"
              value={subHeading}
              onChange={(e) => setSubHeading(e.target.value)}
              className="form-control"
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
                    height: "auto",
                    maxWidth: "350px",
                    border: "2px solid #ccc",
                    borderRadius: "10px",
                  }}
                />
              </div>
            )}
            {uploading && <p className="text-black mt-2">Uploading image...</p>}
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
            <div className="d-flex flex-column flex-lg-row justify-content-around">
              <div
                className="mx-3 mx-lg-5 mb-4 mb-lg-0"
                style={{ maxWidth: "420px" }}
              >
                <h1
                  className="mb-4"
                  style={{
                    fontSize: "clamp(14px, 5vw, 20px)",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                >
                  {heading}
                </h1>
                <p
                  style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                  dangerouslySetInnerHTML={{ __html: paragraph1Content }}
                ></p>
                <p
                  style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                  dangerouslySetInnerHTML={{ __html: paragraph2Content }}
                ></p>

                <p
                  dangerouslySetInnerHTML={{ __html: paragraph3Content }}
                  style={{
                    fontSize: "clamp(14px, 3vw, 15px)",
                    fontWeight: "500",
                  }}
                ></p>
              </div>
              <div className="mx-3 mx-lg-5">
                <img
                  src={image}
                  alt="Service Logo"
                  style={{ height: "auto", maxWidth: "350px" }}
                />
              </div>
            </div>
            <br />
            <br />
            <div className="candidate-title mx-3 mx-sm-5 px-3 px-sm-5 text-center">
              <h1
                className="m-b5"
                style={{
                  fontSize: "clamp(14px, 5vw, 20px)",
                  fontWeight: "semibold",
                }}
              >
                {subHeading}
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MoreServices;
