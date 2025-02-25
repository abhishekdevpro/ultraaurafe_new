import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import logo5 from "../../../../assests/logo5.jpg";
import PropTypes from "prop-types";
function MoreServices({ moreServicesData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  // State for content
  const [heading, setHeading] = useState(
    "More Services from Hyper V Solutions"
  );
  const [paragraph1, setParagraph1] = useState([
    `Discover the wide range of innovative services offered by Hyper V Solutions. Whether you're navigating a job search or looking to elevate your career, our EdTech platform, UltraAura.education, is here to support you.`,
  ]);
  const [paragraph2, setParagraph2] = useState([
    `We offer expertly curated content, live online classes led by industry professionals, and robust placement assistance through Novajobs.us. Take the next step towards your future with our cutting-edge educational solutions.`,
  ]);
  const [paragraph3, setParagraph3] = useState([
    `For more information, visit our parent website: https://hypervsolutions.net/`,
  ]);
  const [subHeading, setSubHeading] = useState(
    `Experience the difference of innovation and inclusivity at Novajobs.us. Explore our website today and unlock your path to success.`
  );
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(logo5);

  // Show/Hide toggles
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isSubHeadingVisible, setIsSubHeadingVisible] = useState(true);
  const [showParagraph1, setShowParagraph1] = useState(true);
  const [showParagraph2, setShowParagraph2] = useState(true);
  const [showParagraph3, setShowParagraph3] = useState(true);

  const authToken = localStorage.getItem("adminToken"); // Retrieve auth token

  // Fetch data from the GET API
  useEffect(() => {
    if (!moreServicesData) {
      return;
    }

    setHeading(moreServicesData.title || heading);
    setParagraph1(moreServicesData.paragraph1 || paragraph1);
    setParagraph2(moreServicesData.paragraph2 || paragraph2);
    setParagraph3(moreServicesData.paragraph3 || paragraph3);
    setSubHeading(moreServicesData.paragraph4 || subHeading);
    setIsHeadingVisible(moreServicesData.is_title_display);
    setShowParagraph1(moreServicesData.is_paragraph1_display);
    setShowParagraph2(moreServicesData.is_paragraph2_display);
    setShowParagraph3(moreServicesData.is_paragraph3_display);

    setIsSubHeadingVisible(moreServicesData.is_paragraph4_display);
    setIsImageVisible(moreServicesData.is_images_display);
    if (moreServicesData.images && JSON.parse(moreServicesData.images)) {
      const imgData = JSON.parse(moreServicesData.images);
      setImagePreview(
        imgData[0] ? "https://api.novajobs.us" + imgData[0] : logo5
      );
    }
  }, [moreServicesData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Directly store the selected file
      setImagePreview(URL.createObjectURL(file)); // Set preview
    }
  };

  // const handleDeleteImage = () => {
  //   setImage(null);
  //   setImagePreview(logo5);
  // };

  const handleSave = async () => {
    setIsEditing(false);
    setLoading(true);

    // Prepare data to send to the API
    const formData = new FormData();
    formData.append("title", heading);
    formData.append("paragraph1", paragraph1 || "");
    formData.append("paragraph2", paragraph2 || "");
    formData.append("paragraph3", paragraph3 || "");
    formData.append("paragraph4", subHeading);
    formData.append("is_title_display", isHeadingVisible);
    formData.append("is_images_display", isImageVisible);
    formData.append("is_paragraph1_display", showParagraph1);
    formData.append("is_paragraph2_display", showParagraph2);
    formData.append("is_paragraph3_display", showParagraph3);
    formData.append("is_paragraph4_display", isSubHeadingVisible);
    if (image) {
      formData.append("images", image, "image.jpg");
    }

    try {
      const response = await axios.patch(
        "https://api.novajobs.us/api/uaadmin/update-aboutus-content/5",
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

  // const handleDelete = (field) => {
  //   switch (field) {
  //     case "heading":
  //       setHeading("");
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
        {isEditing ? (
          <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
            <div className="d-flex justify-content-start gap-4">
              <div className="d-flex justify-content-start gap-2 ms-2">
                <label className="form-check form-switch mt-4 mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="toggleHeading"
                    checked={isHeadingVisible}
                    onChange={() => setIsHeadingVisible(!isHeadingVisible)}
                  />
                  {/* <span className="form-check-label">
                    {isHeadingVisible ? "Hide Heading" : "Show Heading"}
                  </span> */}
                </label>
              </div>
              <label>
                <h5> Heading (Title Mandatory):</h5>
                {isHeadingVisible && (
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

            <div className="d-flex justify-content-start gap-2 mt-4">
              <label className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={showParagraph1}
                  onChange={() => setShowParagraph1(!showParagraph1)}
                />
                <span className="form-check-label">
                  {/* {showParagraph1 ? "Hide Paragraph 1" : "Show Paragraph 1"} */}
                  Paragraph 1
                </span>
              </label>
            </div>

            {showParagraph1 && (
              <ReactQuill value={paragraph1} onChange={setParagraph1} />
            )}

            <div className="d-flex justify-content-start gap-2 mt-4">
              <label className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={showParagraph2}
                  onChange={() => setShowParagraph2(!showParagraph2)}
                />
                <span className="form-check-label">
                  {/* {showParagraph2 ? "Hide Paragraph 2" : "Show Paragraph 2"} */}
                  Paragraph 2
                </span>
              </label>
            </div>

            {showParagraph2 && (
              <ReactQuill value={paragraph2} onChange={setParagraph2} />
            )}
            <div className="d-flex justify-content-start gap-2 mt-4">
              <label className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={showParagraph3}
                  onChange={() => setShowParagraph3(!showParagraph3)}
                />
                <span className="form-check-label">
                  {/* {showParagraph3 ? "Hide Paragraph 1" : "Show Paragraph 1"} */}
                  Paragraph 3
                </span>
              </label>
            </div>

            {showParagraph3 && (
              <ReactQuill value={paragraph3} onChange={setParagraph3} />
            )}

            <div className="mt-4 d-flex justify-content-start gap-2 ">
              <label className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isSubHeadingVisible}
                  onChange={() => setIsSubHeadingVisible(!isSubHeadingVisible)}
                />
              </label>
              <div>
                <h5>Subheading:</h5>
                {isSubHeadingVisible && (
                  <ReactQuill value={subHeading} onChange={setSubHeading} />
                )}
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-start gap-2 ">
              <div className="d-flex justify-content-start gap-2 ms-2">
                <label className="form-check form-switch mt-4 mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="toggleHeading"
                    checked={isImageVisible}
                    onChange={() => setIsImageVisible(!isImageVisible)}
                  />
                </label>
              </div>
              <label className="mt-4">
                Change Image (400px x 800px):
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control mt-2"
                />
              </label>
            </div>
            <div className="mt-3">
              <p>
                <strong>Preview:</strong>
              </p>
              {isImageVisible && imagePreview && (
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
              )}
            </div>

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
            <div className="d-flex flex-column flex-lg-row justify-content-around">
              <div
                className="mx-3 mx-lg-5 mb-4 mb-lg-0"
                style={{ maxWidth: "420px" }}
              >
                {isHeadingVisible && (
                  <>
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
                  </>
                )}
                {showParagraph1 && (
                  <div
                    dangerouslySetInnerHTML={{ __html: paragraph1 }}
                    style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                  ></div>
                )}
                {showParagraph2 && (
                  <div
                    dangerouslySetInnerHTML={{ __html: paragraph2 }}
                    style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                  ></div>
                )}
                {showParagraph3 && (
                  <div
                    dangerouslySetInnerHTML={{ __html: paragraph3 }}
                    style={{ fontSize: "clamp(14px, 3vw, 15px)" }}
                  ></div>
                )}
              </div>
              <div className="mx-3 mx-lg-5">
                {isImageVisible && (
                  <img
                    src={imagePreview}
                    alt="Service Logo"
                    style={{ height: "350px", width: "350px" }}
                  />
                )}
              </div>
            </div>
            <br />
            <br />
            {isSubHeadingVisible && (
              <div className="candidate-title mx-3 mx-sm-5 px-3 px-sm-5 text-center">
                <h1
                  className="m-b5"
                  style={{
                    fontSize: "clamp(14px, 5vw, 20px)",
                    fontWeight: "semibold",
                  }}
                  dangerouslySetInnerHTML={{ __html: subHeading }}
                ></h1>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
MoreServices.propTypes = {
  moreServicesData: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    paragraph3: PropTypes.string,
    paragraph4: PropTypes.string,
    is_title_display: PropTypes.bool,
    is_paragraph1_display: PropTypes.bool,
    is_paragraph2_display: PropTypes.bool,
    is_paragraph3_display: PropTypes.bool,
    is_paragraph4_display: PropTypes.bool,
    is_images_display: PropTypes.bool,
    images: PropTypes.string, // Ensure it's correctly validated
  }),
};

export default MoreServices;
