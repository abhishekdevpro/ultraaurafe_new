import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
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
  const [paragraph1BContent, setParagraph1BContent] = useState(`
    <p>
      <strong>Check our quick Product Video below:</strong>
    </p>
  `);
  const [pdfheading, setPdfHeading] = useState("View Pdf");
  const [videoUrl, setVideoUrl] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(logo1);
  const [loading, setLoading] = useState(false);

  const [showHeading, setShowHeading] = useState(true);
  const [showParagraph1, setShowParagraph1] = useState(true);
  const [showParagraph1A, setShowParagraph1A] = useState(true);
  const [showParagraph1B, setShowParagraph1B] = useState(true);
  const [showpdfheading, setShowPdfHeading] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [showImage, setShowImage] = useState(true);
  const [pdf, setPdf] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);
  const [showPdf, setShowPdf] = useState(true);

  const authToken = localStorage.getItem("adminToken");
  useEffect(() => {
    if (!introductionData) return;

    if (introductionData.pdf && JSON.parse(introductionData.pdf)) {
      const pdfData = JSON.parse(introductionData.pdf);
      setPdfPreview(pdfData[0] ? "https://api.novajobs.us" + pdfData[0] : null);
    }
  }, [introductionData]);
  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdf(file);
      setPdfPreview(URL.createObjectURL(file));
    } else {
      toast.error("Please upload a valid PDF file!");
    }
  };

  useEffect(() => {
    if (!introductionData) {
      return;
    }

    setHeading(introductionData.title || heading);
    setParagraph1Content(introductionData.paragraph1 || paragraph1Content);
    setParagraph1AContent(introductionData.paragraph2 || paragraph1AContent);
    setParagraph1BContent(introductionData.paragraph3 || paragraph1BContent);

    setPdfHeading(introductionData.paragraph4 || pdfheading);
    setShowHeading(introductionData.is_title_display);
    setShowParagraph1(introductionData.is_paragraph1_display);
    setShowParagraph1B(introductionData.is_paragraph3_display);
    setShowParagraph1A(introductionData.is_paragraph2_display);
    setShowPdfHeading(introductionData.is_paragraph4_display);
    setShowVideo(introductionData.is_urls_display);
    // setShowImage(introductionData.is_images_display);
    setShowImage(JSON.parse(introductionData.is_images_display)[0] === "true");
    setShowPdf(introductionData.is_pdf_display);
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
  console.log(videoUrl, "videourl");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
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
    formData.append("paragraph3", paragraph1BContent);
    formData.append("paragraph4", pdfheading);
    formData.append("urls", videoUrl);

    formData.append("is_title_display", showHeading);
    formData.append("is_paragraph1_display", showParagraph1);
    formData.append("is_paragraph2_display", showParagraph1A);
    formData.append("is_paragraph3_display", showParagraph1B);
    formData.append("is_urls_display", showVideo);
    formData.append("is_images_display", showImage);
    formData.append("is_pdf_display", showPdf);
    formData.append("is_paragraph4_display", showpdfheading);
    if (image) {
      formData.append("images", image, "image.jpg");
    }
    if (pdf) {
      formData.append("pdf", pdf, "document.pdf");
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
              <div>
                <div className="d-flex justify-content-start gap-4">
                  {/* <button
                    className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
                    onClick={() => handleDelete("paragraph1")}
                  >
                    Delete Paragraph 1
                  </button> */}

                  <div className="d-flex justify-content-start gap-2">
                    <label className="form-check form-switch mt-4 mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="toggleHeading"
                        checked={showParagraph1}
                        onChange={() => setShowParagraph1(!showParagraph1)}
                      />
                      <span className="form-check-label">
                        {/* {showParagraph1 ? "Hide" : "Show"}  */}
                        Paragraph 1
                      </span>
                    </label>
                  </div>
                </div>
                {showParagraph1 && (
                  <ReactQuill
                    value={paragraph1Content}
                    onChange={setParagraph1Content}
                  />
                )}
              </div>
              <div>
                <div className="d-flex justify-content-start gap-4">
                  {/* <button
                    className="btn btn-danger mt-2 mb-2 btn-primary"
                    onClick={() => handleDelete("paragraph3")}
                  >
                    Delete Paragraph 3
                  </button> */}

                  <div className="d-flex justify-content-start gap-2">
                    <label className="form-check form-switch mt-4 mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="toggleHeading"
                        checked={showParagraph1B}
                        onChange={() => setShowParagraph1B(!showParagraph1B)}
                      />
                      <span className="form-check-label">
                        {/* {showParagraph1B ? "Hide" : "Show"}  */}
                        paragraph3
                      </span>
                    </label>
                  </div>
                </div>
                {showParagraph1B && (
                  <ReactQuill
                    value={paragraph1BContent}
                    onChange={setParagraph1BContent}
                  />
                )}
              </div>

              <div className="d-flex justify-content-start gap-4 mt-4 border-danger">
                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch mt-4 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="toggleHeading"
                      checked={showVideo}
                      onChange={() => setShowVideo(!showVideo)}
                    />
                    <span className="form-check-label">
                      {/* {showVideo ? "Hide" : "Show"} Video */}
                      Video Urls :
                    </span>
                  </label>
                </div>
                <label className="mt-3">
                  {/* Video URL: */}
                  {showVideo && (
                    <input
                      type="text"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="form-control"
                    />
                  )}
                </label>

                {/* <button
                  className="btn btn-danger mt-4 mb-2 px-4 btn btn-primary"
                  onClick={() => handleDelete("videoUrl")}
                >
                  Delete Video URL
                </button> */}
              </div>
              {showVideo && (
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
              )}
              <div className="d-flex justify-content-start gap-4">
                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch mt-4 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="toggleHeading"
                      checked={showpdfheading}
                      onChange={() => setShowPdfHeading(!showpdfheading)}
                    />
                    <span className="form-check-label">
                      {/* {showpdfheading ? "Hide" : "Show"} */}
                      Pdf Heading
                    </span>
                  </label>
                </div>
                {showpdfheading && (
                  <label>
                    {/* Heading (Title Mandatory): */}
                    <input
                      type="text"
                      value={pdfheading}
                      onChange={(e) => setPdfHeading(e.target.value)}
                      className="form-control"
                    />
                  </label>
                )}
              </div>
              <div className="d-flex justify-content-start gap-4">
                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch mt-4 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={showPdf}
                      onChange={() => setShowPdf(!showPdf)}
                    />
                    {/* <span className="form-check-label">
                      {showPdf ? "Hide" : "Show"} PDF
                    </span> */}
                  </label>
                </div>
                <label className="mt-3">
                  Upload PDF:
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfChange}
                    className="form-control mt-2"
                  />
                </label>
              </div>

              {showPdf && pdfPreview && (
                <div className="mt-3">
                  <p>
                    <strong>PDF Preview:</strong>
                  </p>
                  <iframe
                    src={pdfPreview}
                    width="800px"
                    height="500px"
                    style={{
                      border: "2px solid #ccc",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  ></iframe>
                </div>
              )}

              <div className="d-flex justify-content-start gap-4">
                {/* <button
                  className="btn btn-danger mt-2 mb-2 btn-primary"
                  onClick={() => handleDelete("paragraph2")}
                >
                  Delete Paragraph 2
                </button> */}

                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch mt-4 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="toggleHeading"
                      checked={showParagraph1A}
                      onChange={() => setShowParagraph1A(!showParagraph1A)}
                    />
                    <span className="form-check-label">
                      {/* {showParagraph1A ? "Hide" : "Show"}  */}
                      paragraph2
                    </span>
                  </label>
                </div>
              </div>
              {showParagraph1A && (
                <ReactQuill
                  value={paragraph1AContent}
                  onChange={setParagraph1AContent}
                />
              )}

              <div className="d-flex justify-content-start gap-4 ">
                <div className="d-flex justify-content-start gap-2">
                  <label className="form-check form-switch mt-4 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="toggleHeading"
                      checked={showImage}
                      onChange={() => setShowImage(!showImage)}
                    />
                    <span className="form-check-label">
                      {/* {showImage ? "Hide" : "Show"} */}
                      Change Image (400px x 800px):
                    </span>
                  </label>
                </div>
                {showParagraph1A && (
                  <label className="mt-3">
                    {/* Change Image (400px x 800px): */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="form-control mt-2"
                    />
                  </label>
                )}
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
              {showHeading && <h1 className="mb-4">{heading}</h1>}
              {showParagraph1 && (
                <div
                  dangerouslySetInnerHTML={{ __html: paragraph1Content }}
                ></div>
              )}
              {showParagraph1B && (
                <p
                  className="mt-5 text-center"
                  dangerouslySetInnerHTML={{ __html: paragraph1BContent }}
                ></p>
              )}
              {showVideo && (
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
              )}
              <div className="mt-4 ">
                {showpdfheading && <h3 className="mb-4">{pdfheading}</h3>}
              </div>
              {/* {showPdf && pdfPreview && (
                <div className="mt-4 mb-4 text-center">
                  <iframe
                    src={pdfPreview}
                    width="800px"
                    height="500px"
                    style={{
                      border: "2px solid #ccc",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  ></iframe>
                </div>
              )} */}
              {showPdf && pdfPreview && (
                <div className="mt-4 mb-4 text-center px-3">
                  <div
                    style={{
                      maxWidth: "800px",
                      margin: "0 auto",
                    }}
                  >
                    <iframe
                      src={pdfPreview}
                      style={{
                        width: "100%",
                        height: "500px",
                        border: "2px solid #ccc",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    ></iframe>
                  </div>
                </div>
              )}

              {showParagraph1A && (
                <div
                  dangerouslySetInnerHTML={{ __html: paragraph1AContent }}
                ></div>
              )}
              {showImage && (
                <div className="text-center">
                  <img
                    src={imagePreview}
                    alt="Uploaded Image"
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
Introductions.propTypes = {
  introductionData: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    urls: PropTypes.string,
    images: PropTypes.string,
    pdf: PropTypes.string,
    paragraph3: PropTypes.string,
    paragraph4: PropTypes.string,
    is_title_display: PropTypes.bool,
    is_paragraph1_display: PropTypes.bool,
    is_paragraph3_display: PropTypes.bool,
    is_paragraph2_display: PropTypes.bool,
    is_paragraph4_display: PropTypes.bool,
    is_urls_display: PropTypes.bool,
    is_images_display: PropTypes.bool,
    is_pdf_display: PropTypes.bool,
  }),
};

export default Introductions;
