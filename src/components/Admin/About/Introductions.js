import React, { useState } from "react";
import ReactPlayer from "react-player";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styles

import logo1 from "../../../assests/logo1.jpg";

function Introductions() {
  // State for heading and paragraph 1 content
  const [isEditing, setIsEditing] = useState(false);
  const [heading, setHeading] = useState("Welcome to UltraAura 🎓");

  const [paragraph1Content, setParagraph1Content] = useState(`
    <p>
     Welcome to UltraAura, your go-to platform for high-quality, comprehensive education across a variety of trades and professional skills. As a proud product of Hyper V Solutions—an AI-driven business incubator at the University of South Carolina—we are dedicated to providing accessible, cutting-edge online learning experiences for students at every stage of their careers.
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

  const [image, setImage] = useState(logo1);
  const [imagePreview, setImagePreview] = useState(logo1); // Preview for new image
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl); // Show the preview
      setUploading(true);

      // Simulate an upload process (replace with actual upload logic)
      setTimeout(() => {
        // Example: Replace this with the actual URL after upload
        setImage(previewUrl);
        setUploading(false);
      }, 2000);
    }
  };
  // Save function for heading and paragraph 1
  const handleSave = () => {
    setIsEditing(false);
    // Save changes to a backend server here if needed
    console.log(
      "Saved content:",
      heading,
      paragraph1Content,
      "Video URL:",
      videoUrl,
      paragraph1AContent,
      image
    );
  };

  return (
    <>
      <div className="mt-5 paragraph-1">
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
                Heading:
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
            // Non-editing view
            <div>
              <h1
                className="mb-4"
                style={{
                  fontSize: "clamp(24px, 5vw, 30px)",
                  fontWeight: "bold",
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
              <p
                style={{
                  fontSize: "clamp(14px, 3vw, 15px)",
                }}
                className="mt-5 justify-content-center text-center"
              >
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
                  alt="Uploaded Image"
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

export default Introductions;

// import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Quill editor styles
// import axios from "axios"; // If using axios

// import logo1 from "../../../assests/logo1.jpg";

// function Introductions() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [heading, setHeading] = useState("Introduction");
//   const [paragraph1Content, setParagraph1Content] = useState("");
//   const [paragraph1AContent, setParagraph1AContent] = useState("");
//   const [videoUrl, setVideoUrl] = useState("");
//   const [image, setImage] = useState(logo1);
//   const [imagePreview, setImagePreview] = useState(logo1); // Preview for new image
//   const [uploading, setUploading] = useState(false);

//   // Fetching the About Us data
//   useEffect(() => {
//     axios
//       .get("https://api.novajobs.us/api/admin/get-aboutus")
//       .then((response) => {
//         // Assuming the response contains the relevant data
//         const {
//           heading,
//           paragraph1Content,
//           paragraph1AContent,
//           videoUrl,
//           imageUrl,
//         } = response.data;
//         setHeading(heading || "Introduction");
//         setParagraph1Content(paragraph1Content || "");
//         setParagraph1AContent(paragraph1AContent || "");
//         setVideoUrl(videoUrl || "");
//         setImage(imageUrl || logo1); // Default to logo1 if no image provided
//       })
//       .catch((error) => {
//         console.error("Error fetching About Us data:", error);
//       });
//   }, []); // Empty dependency array ensures this runs once on component mount

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const previewUrl = URL.createObjectURL(file);
//       setImagePreview(previewUrl); // Show the preview
//       setUploading(true);

//       // Simulate an upload process (replace with actual upload logic)
//       setTimeout(() => {
//         // Example: Replace this with the actual URL after upload
//         setImage(previewUrl);
//         setUploading(false);
//       }, 2000);
//     }
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     console.log(
//       "Saved content:",
//       heading,
//       paragraph1Content,
//       "Video URL:",
//       videoUrl,
//       paragraph1AContent,
//       image
//     );
//   };

//   return (
//     <>
//       <div className="mt-5 paragraph-1">
//         <button
//           className="btn btn-warning mt-3 float-end"
//           onClick={() => setIsEditing(true)}
//         >
//           Edit
//         </button>
//         <div className="mx-3 mx-lg-5 mb-4 mb-lg-0">
//           {isEditing ? (
//             <div>
//               <label>
//                 Heading:
//                 <input
//                   type="text"
//                   value={heading}
//                   onChange={(e) => setHeading(e.target.value)}
//                   className="form-control"
//                 />
//               </label>
//               <ReactQuill
//                 value={paragraph1Content}
//                 onChange={setParagraph1Content}
//               />
//               <label className="mt-3">
//                 Video URL:
//                 <input
//                   type="text"
//                   value={videoUrl}
//                   onChange={(e) => setVideoUrl(e.target.value)}
//                   className="form-control"
//                 />
//               </label>
//               <ReactQuill
//                 value={paragraph1AContent}
//                 onChange={setParagraph1AContent}
//               />
//               <label className="mt-3">
//                 Change Image:
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="form-control mt-2"
//                 />
//               </label>
//               {imagePreview && (
//                 <div className="mt-3">
//                   <p>
//                     <strong>Preview:</strong>
//                   </p>
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     style={{
//                       height: "300px",
//                       width: "600px",
//                       border: "2px solid #ccc",
//                       borderRadius: "10px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </div>
//               )}
//               {uploading && (
//                 <p className="text-black mt-2">Uploading image...</p>
//               )}
//               <button className="btn btn-primary mt-3" onClick={handleSave}>
//                 Save
//               </button>
//               <button
//                 className="btn btn-secondary mt-3 ms-2"
//                 onClick={() => setIsEditing(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <div>
//               <h1
//                 className="mb-4"
//                 style={{
//                   fontSize: "clamp(24px, 5vw, 30px)",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {heading}
//               </h1>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: paragraph1Content,
//                 }}
//                 style={{
//                   fontSize: "clamp(14px, 3vw, 15px)",
//                 }}
//               ></div>
//               <p
//                 style={{
//                   fontSize: "clamp(14px, 3vw, 15px)",
//                 }}
//                 className="mt-5 justify-content-center text-center"
//               >
//                 <strong>Check our quick Product Video below:</strong>
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ReactPlayer
//                   url={videoUrl}
//                   width="700px"
//                   height="500px"
//                   controls={true}
//                   style={{
//                     margin: "50px",
//                     border: "2px solid #ccc",
//                     borderRadius: "10px",
//                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                   }}
//                 />
//               </div>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: paragraph1AContent,
//                 }}
//                 style={{
//                   fontSize: "clamp(14px, 3vw, 15px)",
//                 }}
//               ></div>
//               <div className="mx-3 mx-lg-5 d-flex justify-content-center">
//                 <img
//                   src={image}
//                   alt="Uploaded Image"
//                   style={{
//                     height: "400px",
//                     width: "800px",
//                     padding: "20px",
//                   }}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Introductions;
