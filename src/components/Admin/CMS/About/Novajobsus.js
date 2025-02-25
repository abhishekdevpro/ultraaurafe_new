import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Carousel from "react-bootstrap/Carousel";
import "./aboutus.css";
import axios from "axios";
import pic1 from "../../../../assests/1 (1).png";
import pic2 from "../../../../assests/1 (2).png";
import pic3 from "../../../../assests/1 (3).png";
import pic4 from "../../../../assests/1 (4).png";
import pic5 from "../../../../assests/1 (5).png";
import pic6 from "../../../../assests/1 (6).png";
import pic7 from "../../../../assests/1 (7).png";
import pic8 from "../../../../assests/1 (8).png";
import pic9 from "../../../../assests/1 (9).png";
import pic10 from "../../../../assests/1 (10).png";
import pic11 from "../../../../assests/1 (11).png";
import pic12 from "../../../../assests/1 (12).png";
import PropTypes from "prop-types";
function Novajobsus({ novaJobsusData }) {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState("NovaJobs.US");
  const [paragraph1Content, setParagraph1Content] = useState(`
    <p>
      Hyper V Solutions, offers NovaJobs.us, which is AI-Enabled
      Job Portal with advanced functionality like Jobs search,
      Profile listing, Skill Test, Resume Building, AI Data
      Parsing & more.
    </p>
  `);

  const initialImages = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
  ].map((pic) => ({ file: null, preview: pic, isVisible: true }));

  const [images, setImages] = useState(initialImages);
  const [showParagraph1, setShowParagraph1] = useState(true); // Toggle visibility of Paragraph 1
  // const [showImages, setShowImages] = useState(true); // Toggle visibility of images section
  const [showHeading, setShowHeading] = useState(true); // Toggle visibility of heading
  useEffect(() => {
    if (!novaJobsusData) return;

    setHeading(novaJobsusData.title || heading);
    setParagraph1Content(novaJobsusData.paragraph1 || paragraph1Content);
    setShowHeading(novaJobsusData.is_title_display);
    setShowParagraph1(novaJobsusData.is_paragraph1_display);
    // setShowImages(novaJobsusData.is_images_display);

    if (novaJobsusData.images) {
      const imgData = JSON.parse(novaJobsusData.images);

      const updatedImages = imgData.map((img, index) => ({
        file: null,
        preview: "https://api.novajobs.us" + img,
        isVisible:
          Array.isArray(novaJobsusData.is_images_display) &&
          novaJobsusData.is_images_display.length > index
            ? novaJobsusData.is_images_display[index]
            : true, // Default to true if no specific visibility info is available
      }));
      setImages(updatedImages);
    }
  }, [novaJobsusData]);

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = {
          ...updatedImages[index],
          file,
          preview: previewUrl,
        };
        return updatedImages;
      });
    }
  };

  const handleAddMoreImages = () => {
    setImages((prevImages) => [...prevImages, { file: null, preview: null }]);
  };

  // const handleDeleteImage = (index) => {
  //   setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  // };
  // const handleToggleImage = (index) => {
  //   setImages((prevImages) => {
  //     const updatedImages = [...prevImages];
  //     updatedImages[index].isVisible = !updatedImages[index].isVisible;
  //     return updatedImages;
  //   });
  // };
  const handleToggleImage = (index) => {
    setImages((prevImages) =>
      prevImages.map((img, i) =>
        i === index ? { ...img, isVisible: !img.isVisible } : img
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setIsEditing(false);
    console.log("Saved content:", heading, paragraph1Content, images);

    const formData = new FormData();
    formData.append("title", heading);
    formData.append("paragraph1", paragraph1Content);

    formData.append("is_title_display", showHeading);
    formData.append("is_paragraph1_display", showParagraph1);
    // formData.append("is_images_display", showImages);
    formData.append(
      "is_images_display",
      JSON.stringify(images.map((img) => img.isVisible))
    );
    images.forEach((image) => {
      if (image.file) {
        formData.append("images", image.file);
      }
    });

    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.patch(
        "https://api.novajobs.us/api/uaadmin/update-aboutus-content/4",
        formData,
        {
          headers: {
            Authorization: token,
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

  const authToken = localStorage.getItem("adminToken");

  // const handleDelete = (field) => {
  //   switch (field) {
  //     case "heading":
  //       setHeading("");
  //       break;
  //     case "paragraph1":
  //       setParagraph1Content("");
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
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
                <label className="form-check form-switch mt-4 mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="toggleParagraph1"
                    checked={showParagraph1}
                    onChange={() => setShowParagraph1(!showParagraph1)}
                  />
                </label>
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
            </div>

            <>
              {images.map((image, index) => (
                <div key={index}>
                  <div className="d-flex justify-content-start gap-2">
                    <label className="form-check form-switch mt-4 mb-2">
                      <label className="form-check form-switch mt-4 mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={image.isVisible}
                          onChange={() => handleToggleImage(index)}
                        />
                        <span className="form-check-label">
                          {/* {image.isVisible ? "Hide" : "Show"}  */}
                          Image {index + 1}
                        </span>
                      </label>
                      {image.isVisible && (
                        <div>
                          <label className="mt-3">
                            Change Image (400px x 800px) {index + 1}:
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(index, e)}
                            className="form-control mt-2"
                          />
                          {image.preview && (
                            <div className="mt-3">
                              <strong>Preview {index + 1}:</strong>
                              <img
                                src={image.preview}
                                alt={`Preview ${index + 1}`}
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
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              ))}

              <button
                className="btn btn-secondary mt-3 "
                onClick={handleAddMoreImages}
              >
                Add More Images
              </button>
            </>

            <div className="mt-4">
              <button
                className="btn btn-primary mt-3 ms-2"
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
                className="mb-4"
                style={{
                  fontSize: "clamp(24px, 5vw, 30px)",
                  fontWeight: "bold",
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

            <div className="mx-3 mx-lg-5 d-flex justify-content-center position-relative">
              <Carousel
                style={{
                  width: "800px",
                  padding: "20px",
                }}
                prevIcon={
                  <span
                    className="carousel-control-prev-icon position-absolute"
                    style={{ backgroundColor: "#000", right: "200px" }}
                    aria-hidden="true"
                  />
                }
                nextIcon={
                  <span
                    className="carousel-control-next-icon position-absolute"
                    style={{ backgroundColor: "#000", left: "200px" }}
                    aria-hidden="true"
                  />
                }
              >
                {images.map((image, index) =>
                  image.isVisible ? (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image.preview}
                        alt={`Slide ${index + 1}`}
                      />
                    </Carousel.Item>
                  ) : null
                )}
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
Novajobsus.propTypes = {
  novaJobsusData: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    paragraph3: PropTypes.string,
    paragraph4: PropTypes.string,
    urls: PropTypes.string,
    images: PropTypes.string,
    is_title_display: PropTypes.bool, // Added missing prop validation
    is_paragraph1_display: PropTypes.bool,
    is_images_display: PropTypes.arrayOf(PropTypes.bool),
  }),
};
export default Novajobsus;
