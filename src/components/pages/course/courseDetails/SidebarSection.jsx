import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Chapter,
  Chart,
  Cloud,
  Key,
  Mobile,
  Play,
  Teacher,
  Timer2,
  Users,
  // Video2,
} from "../../../imagepath";
import { Modal, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import styled from "styled-components";
import ShareButton from "./Sharebutton";
import { Loader } from "lucide-react";
import ReactPlayer from "react-player";
// import Joyride from "react-joyride";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;

  .btn-enroll {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    background-color: #4caf50; /* Change this to your desired color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049; /* Darken the button on hover */
    }

    &:disabled {
      background-color: #ccc; /* Grey background for disabled button */
      cursor: not-allowed;
    }
  }
`;

const VideoSection = styled.div`
  .video-sec {
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .card {
    border: none;
  }

  .card-body {
    padding: 0;
  }

  .video-thumbnail {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    overflow: hidden;
    cursor: pointer;
    border: none;
    background: none;
  }

  .video-thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .play-icon {
    position: absolute; /* Absolute positioning to center within the container */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    z-index: 10; /* Ensures the play icon is on top of the image */
  }

  .play-icon i {
    font-size: 24px;
    color: #333;
  }

  .video-thumbnail:hover .play-icon {
    background-color: rgba(255, 255, 255, 1);
  }

  video {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
  }

  .video-details {
    padding: 20px;
  }

  .course-fee {
    margin-bottom: 20px;
    text-align: center;

    h2 {
      font-size: 28px;
      color: #4caf50;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: #666;

      span {
        text-decoration: line-through;
        margin-right: 5px;
      }
    }
  }

  .btn-wish,
  .btn-enroll {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .btn-wish {
    background-color: #f0f0f0;
    color: #333;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  .btn-enroll {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    .video-thumbnail {
      padding-top: 75%; /* 4:3 Aspect Ratio for smaller screens */
    }

    .play-icon {
      width: 50px;
      height: 50px;

      i {
        font-size: 20px;
      }
    }

    .course-fee {
      h2 {
        font-size: 24px;
      }

      p {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 576px) {
    .video-details {
      padding: 15px;
    }

    .course-fee {
      h2 {
        font-size: 22px;
      }
    }

    .btn-wish,
    .btn-enroll {
      font-size: 14px;
    }
  }
`;

// const SidebarSection = ({ courseId, courseData, courseFeatureData }) => {
//   // console.log(courseFeatureData, "from sidebar");
//   const [showPopup, setShowPopup] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [videoUrl, setVideoUrl] = useState(null);
//   const navigate = useNavigate();
//   const [isClassAdded, setIsClassAdded] = useState([]);
//   const token = localStorage.getItem("token");
//   const [isExpanded, setIsExpanded] = useState(false);

//   const [showTestModal, setShowTestModal] = useState(false);
//   const [userInfo, setUserInfo] = useState("");
//   const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);

//   useEffect(() => {
//     // Check if the videoUrl is a YouTube URL
//     if (videoUrl) {
//       // const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)/;
//       setIsYoutubeVideo(courseData.youtube_url);
//       console.log(courseData.youtube_url,"uutube")
//     }
//   }, [videoUrl]);

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleTakeTest = () => {
//     setShowTestModal(false);
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       window.location.href = `/student/student-skilltest/${courseData.course_id}/${courseData.course_title}`;
//     }, 2000);
//   };

//   // The length at which content should be truncated
//   const truncateLength = 100; // Adjust this value as needed
//   const fullContent = courseFeatureData.learning_objectives || "";

//   // Check if content needs to be truncated
//   const isTruncated = fullContent.length > truncateLength;
//   const handleEnrollClick = () => {
//     if (token) {
//       setShowPopup(true);
//     } else {
//       navigate("/login");
//     }
//   };

//   const handleDownload = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.novajobs.us/api/students/certificate/${courseId}`,
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//           responseType: "blob", // Important for handling file downloads
//         }
//       );

//       // Create a blob from the response data
//       const blob = new Blob([response.data], {
//         type: response.headers["content-type"],
//       });

//       // Create a link element and trigger the download
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", `certificate_${courseId}.pdf`); // Assuming it's a PDF, adjust if needed
//       document.body.appendChild(link);
//       link.click();

//       // Clean up
//       window.URL.revokeObjectURL(url);
//       document.body.removeChild(link);

//       // Show success toast
//       toast.success("Certificate downloaded successfully!");
//     } catch (error) {
//       console.error("Error downloading certificate:", error);
//       toast.error("Failed to download certificate. Please try again.");
//     }
//   };

//   const fetchProfile = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/students/profile",
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//         }
//       );
//       setUserInfo(response.data.data);
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//     }
//   };
//   useEffect(() => {
//     fetchProfile();
//   }, [userInfo.id]);
//   const handleBuyNow = async () => {
//     if (token) {
//       try {
//         const response = await axios.post(
//           "https://api.novajobs.us/api/students/cart",
//           {
//             student_id: userInfo.id,
//             course_id: Number(courseId),
//             quantity: 1,
//           },
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );
//         // console.log("Item added to cart:", response.data.message);
//         toast.success(
//           response.data.message || "Course Added To cart Successfully "
//         );
//         window.location.href = "/cart";
//       } catch (error) {
//         console.error("Error adding item to cart:", error);
//         toast.error(error.message || "Error to add the course in the cart");
//       }
//     } else {
//       navigate("/login");
//     }
//   };

//   const toggleClass = async (courseId, isFavorite) => {
//     const updatedClasses = [...isClassAdded];
//     updatedClasses[courseId] = !isFavorite;
//     setIsClassAdded(updatedClasses);

//     try {
//       if (isFavorite) {
//         // Remove from favorites
//         await axios.post(
//           "https://api.novajobs.us/api/students/course-favorite",
//           { course_id: courseId },
//           {
//             headers: {
//               Authorization: `${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         // Show success toast
//         toast.success("Course removed from favorites!");
//       } else {
//         // Add to favorites
//         await axios.post(
//           "https://api.novajobs.us/api/students/course-favorite",
//           { course_id: courseId },
//           {
//             headers: {
//               Authorization: `${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         // Show success toast
//         toast.success("Course added to favorites!");
//       }
//     } catch (error) {
//       console.error("Failed to update course favorites:", error);
//       // Show error toast
//       toast.error("You need to login first.");
//       navigate("/login");
//     }
//   };

//   const handleCheckout = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://api.novajobs.us/api/students/buy",
//         {
//           amount: 1,
//           course_id: Number(courseId),
//           net_amount: 1,
//         },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );

//      if(response.status==200){
//       toast.success(response.data.message ||"Purchase Successful ");
//      }
//       // console.log("Purchase successful:", response.data);

//       setShowPopup(false);
//       setTimeout(function () {
//         window.location.reload();
//       }, 3000);
//     } catch (error) {
//       console.error("Error during purchase:", error);
//       toast.error("There was an issue with the purchase. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVideoPlay = async () => {
//     setLoading(true);
//     // setShowBanner(true);
//     try {
//       const response = await axios.get(
//         `https://api.novajobs.us/api/students/streaming/${courseId}`,
//         {
//           responseType: "blob",
//         }
//       );

//       const videoBlob = new Blob([response.data], { type: "video/mp4" });
//       const videoUrl = URL.createObjectURL(videoBlob);

//       setVideoUrl(videoUrl);
//       // console.log("Video URL:", videoUrl);
//     } catch (error) {
//       console.error("Error fetching video:", error?.response?.data.message);

//       toast.error(error.response?.data?.message || "No video found");
//     } finally {
//       setLoading(false);
//     }
//     setTimeout(() => {
//       setLoading(false);
//       // setVideoPlaying(true); // Set videoPlaying to true when play button is clicked
//     }, 2000);
//   };
//   const isFavorite = isClassAdded[courseData.course_id];

//   return (
//     <>
//       <div className="col-lg-4">

//         <div className="sidebar-sec">
//           {/* Video Section */}
//           <VideoSection>
//             <div className="video-sec vid-bg">
//               <div className="card">
//                 <div className="card-body">
//                   {/* {videoPlaying ? ( */}
//                   {videoUrl ?
//                      isYoutubeVideo ? (
//                       // YouTube Player
//                       <div className="youtube-player-container">
//                         <ReactPlayer
//                           url={videoUrl}
//                           controls={true}
//                           width="100%"
//                           height="100%"
//                           onReady={() => setLoading(false)}
//                           onStart={() => setLoading(false)}
//                           onBuffer={() => setLoading(true)}
//                           onBufferEnd={() => setLoading(false)}
//                           onError={() => setLoading(false)}
//                           config={{
//                             youtube: {
//                               playerVars: {
//                                 showinfo: 1,
//                                 controls: 1,
//                                 rel: 0
//                               }
//                             }
//                           }}
//                         />
//                         {loading && (
//                           <div className="video-loader">
//                             <img src={Loader} alt="Loading..." className="loader" />
//                           </div>
//                         )}
//                       </div>
//                     ) :
//                   (
//                     <video
//                       controls
//                       onLoadStart={() => setLoading(true)}
//                       onLoadedData={() => setLoading(false)}
//                     >
//                       <source src={videoUrl} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : (

//                     <div className="video-thumbnail-container">
//                       <button
//                         onClick={handleVideoPlay}
//                         className="video-thumbnail"
//                       >
//                         {loading ? (
//                           <img
//                             src={Loader}
//                             alt="Loading..."
//                             className="loader"
//                           />
//                         ) : (
//                           <div className="default-thumbnail">
//                             <img
//                               src={
//                                 courseFeatureData?.course_banner_image?.startsWith("http")
//                                   ? courseFeatureData.course_banner_image
//                                   : `https://api.novajobs.us${courseFeatureData?.course_banner_image || ""}`
//                               }
//                               alt="Course Banner"
//                               className="default-image"
//                             />
//                             <div className="play-icon">
//                               <i className="fa-solid fa-play" />
//                             </div>
//                           </div>
//                         )}
//                       </button>
//                     </div>
//                   )}
//                   {/* <Joyride
//         steps={steps}
//         run={runTour} // Automatically start the tour
//         continuous
//         showProgress
//         showSkipButton
//         spotlightClicks={false}
//         // hideBeacon={true}
//         // disableBeacon={true}
//         callback={({ status }) => {
//           if (['finished', 'skipped'].includes(status)) {
//             setRunTour(false); // Stop the tour when completed or skipped
//           }
//         }}
//         styles={{
//           options: {
//             zIndex: 1000, // Ensure tooltips are above all other content
//             overlayColor: 'rgba(0, 0, 0, 0.4)', // Dim background during the tour
//           },
//           tooltip: {
//             backgroundColor: 'rgba(240, 235, 235, 0.8)', // Tooltip background opacity (adjust opacity here)
//             color: '#0e0d0d', // Tooltip text color
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Optional shadow for better contrast
//           },
//           spotlight: {
//             backgroundColor: 'rgba(14, 14, 14, 0.5)', // Overlay behind the highlighted element
//           },
//           // spotlight: {
//           //   display: 'none', // Hides the spotlight effect entirely
//           // },
//           // beacon: {
//           //   display: 'none', // Just in case, ensure it never displays
//           // },

//         }}
//       /> */}
//                   <div className="video-details">
//                     {courseFeatureData.course_price == 0 ? (
//                       <div className="course-fee">
//                         <h2>FREE</h2>
//                         <p>
//                           <span>$99.00</span> 50% off
//                         </p>
//                       </div>
//                     ) : (
//                       " "
//                     )}
//                     <div className="row gx-2">
//                       <div className="col-md-6 addHeart">
//                         {isFavorite && localStorage.getItem("token") ? (
//                           <button
//                             className="btn btn-danger w-100"
//                             onClick={() =>
//                               toggleClass(courseData.course_id, isFavorite)
//                             }
//                           >
//                             <i className="feather icon-heart me-2" />
//                             Remove
//                           </button>
//                         ) : (
//                           <button
//                             className="btn btn-wish w-100"
//                             onClick={() =>
//                               toggleClass(courseData.course_id, isFavorite)
//                             }
//                           >
//                             <i className="feather icon-heart me-2" />
//                             Add to Wishlist
//                           </button>
//                         )}
//                       </div>
//                       {/* <div className="col-md-6 addHeart">
//                       <Link to="#" className="btn btn-wish w-100">
//                         <i className="feather icon-share-2 me-2" />
//                         Share
//                       </Link>
//                     </div> */}
//                       <div className="col-md-6 addHeart">
//                         <ShareButton
//                           courseUrl={`https://ultraaura.education/course-info/${courseData.course_id}`}
//                         />
//                       </div>
//                     </div>
//                     <ButtonWrapper>
//                       {token && courseData.is_student_enroll ? (
//                         <button className="btn-enroll w-100" disabled>
//                           Enrolled
//                         </button>
//                       ) : (
//                         <button
//                           onClick={handleEnrollClick}
//                           className="btn-enroll w-100"
//                         >
//                           Enroll Now
//                         </button>
//                       )}

//                       {
//                         <button
//                           className="btn-enroll w-100 buynow"
//                           onClick={handleBuyNow}
//                         >
//                           Buy now
//                         </button>
//                       }

//                       {token &&
//                         courseData.is_student_enroll &&
//                         courseData.is_certificate && (
//                           <button
//                             onClick={handleDownload}
//                             className="btn-enroll w-100"
//                           >
//                             Download Certificate
//                           </button>
//                         )}
//                       {token && (
//                         <button
//                           className="btn-enroll w-100"
//                           onClick={() => setShowTestModal(true)}
//                         >
//                           Take Test
//                         </button>
//                       )}
//                     </ButtonWrapper>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </VideoSection>

//           {/* Checkout Popup */}
//           <Modal show={showPopup} onHide={() => setShowPopup(false)}>
//             <Modal.Header closeButton>
//               <Modal.Title>Confirm Purchase</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <p>Are you sure you want to enroll in this course?</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={() => setShowPopup(false)}>
//                 Cancel
//               </Button>
//               <Button variant="primary" onClick={handleCheckout}>
//                 {loading ? (
//                   <Spinner as="span" animation="border" size="sm" />
//                 ) : (
//                   "Confirm and Enroll"
//                 )}
//               </Button>
//             </Modal.Footer>
//           </Modal>

//           <Modal show={showTestModal} onHide={() => setShowTestModal(false)}>
//             <Modal.Header closeButton>
//               <Modal.Title>Confirm Action</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <p>Are you sure you want to take the test for this course?</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button
//                 variant="secondary"
//                 onClick={() => setShowTestModal(false)}
//               >
//                 Cancel
//               </Button>
//               <Button variant="primary" onClick={handleTakeTest}>
//                 {loading ? (
//                   <Spinner as="span" animation="border" size="sm" />
//                 ) : (
//                   "Confirm and Take Test"
//                 )}
//               </Button>
//             </Modal.Footer>
//           </Modal>

//           {/* Include Section */}
//           <div className="card include-sec">
//             <div className="card-body">
//               <div className="cat-title includes">
//                 <h4>Includes</h4>
//               </div>
//               <ul>
//                 <li>
//                   <img src={Mobile} className="me-2" alt="" /> On-demand video
//                 </li>
//                 <li>
//                   <img src={Play} className="me-2" alt="" />
//                   Downloadable resources
//                 </li>
//                 <li>
//                   <img src={Key} className="me-2" alt="" /> Full access
//                 </li>
//                 <li>
//                   <img src={Mobile} className="me-2" alt="" /> Access on mobile
//                   screen
//                 </li>
//                 <li>
//                   <img src={Cloud} className="me-2" alt="" /> Assignments
//                 </li>
//                 <li>
//                   <img src={Teacher} className="me-2" alt="" /> Certificate of
//                   Completion
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="card feature-sec">
//             <div className="card-body">
//               <div className="cat-title">
//                 <h4>Features</h4>
//               </div>
//               <ul>
//                 <li>
//                   <img src={Users} className="me-2" alt="" /> Enrolled:{" "}
//                   <span>{courseFeatureData.enrolled_student_count}</span>
//                 </li>
//                 <li>
//                   <img src={Timer2} className="me-2" alt="" /> Duration:{" "}
//                   <span>{courseFeatureData.time_spent_on_course}</span>
//                 </li>
//                 <li>
//                   <img src={Chapter} className="me-2" alt="" /> Lectures:{" "}
//                   <span> {courseFeatureData.total_lectures} </span>
//                 </li>
//                 {/* <li><img src={Video2} className="me-2" alt="" /> Video:<span> 12 hours</span></li> */}
//                 <li>
//                   <img src={Chart} className="me-2" alt="" /> Level:{" "}
//                   <span>{courseFeatureData.course_level_name}</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="card feature-sec">
//             <div className="card-body">
//               <div className="cat-title">
//                 <h4>Learning Objective</h4>
//               </div>
//               <div className="content">
//                 {/* Truncate and conditionally render content */}
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html:
//                       isExpanded || !isTruncated
//                         ? fullContent
//                         : fullContent.slice(0, truncateLength) + "...",
//                   }}
//                 />
//               </div>
//               {isTruncated && (
//                 <button onClick={toggleReadMore} className="read-more-btn">
//                   {isExpanded ? "Show Less" : "Read More"}
//                 </button>
//               )}
//               {/* <style jsx>{`
//         .course-feature {
//           margin: 1rem 0;
//         }
//         .content {
//           font-size: 1rem;
//           line-height: 1.5;
//         }
//         .read-more-btn {
//           margin-top: 0.5rem;
//           padding: 0.5rem 1rem;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 0.25rem;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }
//         .read-more-btn:hover {
//           background-color: #0056b3;
//         }
//       `}</style> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
const SidebarSection = ({ courseId, courseData, courseFeatureData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const navigate = useNavigate();
  const [isClassAdded, setIsClassAdded] = useState([]);
  const token = localStorage.getItem("token");
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  useEffect(() => {
    // When videoUrl changes, check if we should use YouTube or regular video
    if (videoUrl) {
      if (courseFeatureData.youtube_url) {
        setIsYoutubeVideo(true);
      } else {
        setIsYoutubeVideo(false);
      }
    }
  }, [videoUrl, courseFeatureData.youtube_url]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTakeTest = () => {
    setShowTestModal(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = `/student/student-skilltest/${courseData.course_id}/${courseData.course_title}`;
    }, 2000);
  };

  // The length at which content should be truncated
  const truncateLength = 100; // Adjust this value as needed
  const fullContent = courseFeatureData.learning_objectives || "";

  // Check if content needs to be truncated
  const isTruncated = fullContent.length > truncateLength;

  // const handleEnrollClick = () => {
  //   if (token) {
  //     setShowPopup(true);
  //   } else {
  //     navigate("/login");
  //   }
  // };

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/students/certificate/${courseId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
          responseType: "blob", // Important for handling file downloads
        }
      );

      // Create a blob from the response data
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      // Create a link element and trigger the download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `certificate_${courseId}.pdf`); // Assuming it's a PDF, adjust if needed
      document.body.appendChild(link);
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);

      // Show success toast
      toast.success("Certificate downloaded successfully!");
    } catch (error) {
      console.error("Error downloading certificate:", error);
      toast.error("Failed to download certificate. Please try again.");
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/students/profile",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setUserInfo(response.data.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [userInfo.id]);

  const handleBuyNow = async () => {
    if (token) {
      try {
        const response = await axios.post(
          "https://api.novajobs.us/api/students/cart",
          {
            student_id: userInfo.id,
            course_id: Number(courseId),
            quantity: 1,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        toast.success(
          response.data.message || "Course Added To cart Successfully "
        );

        console.log("isEnrolled updated:", isEnrolled);
        setIsEnrolled(true);
        window.location.href = "/cart";
      } catch (error) {
        console.error("Error adding item to cart:", error);
        toast.error(error.message || "Error to add the course in the cart");
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/students/pro/course-details/${courseId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const courseData = response.data.data;
        setIsEnrolled(courseData.is_student_enroll); // Ensure this updates correctly
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [courseId, token]);

  const toggleClass = async (courseId, isFavorite) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[courseId] = !isFavorite;
    setIsClassAdded(updatedClasses);

    try {
      if (isFavorite) {
        // Remove from favorites
        await axios.post(
          "https://api.novajobs.us/api/students/course-favorite",
          { course_id: courseId },
          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // Show success toast
        toast.success("Course removed from favorites!");
      } else {
        // Add to favorites
        await axios.post(
          "https://api.novajobs.us/api/students/course-favorite",
          { course_id: courseId },
          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // Show success toast
        toast.success("Course added to favorites!");
      }
    } catch (error) {
      console.error("Failed to update course favorites:", error);
      // Show error toast
      toast.error("You need to login first.");
      navigate("/login");
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/students/buy",
        {
          amount: 1,
          course_id: Number(courseId),
          net_amount: 1,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status == 200) {
        toast.success(response.data.message || "Purchase Successful ");
      }

      setShowPopup(false);
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Error during purchase:", error);
      toast.error("There was an issue with the purchase. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVideoPlay = async () => {
    setLoading(true);

    // First check if there's a YouTube URL
    if (courseFeatureData.youtube_url) {
      setIsYoutubeVideo(true);
      setVideoUrl(courseFeatureData.youtube_url);
      setLoading(false);
    } else {
      // Otherwise, try to get the streaming video
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/students/streaming/${courseId}`,
          {
            responseType: "blob",
          }
        );

        const videoBlob = new Blob([response.data], { type: "video/mp4" });
        const url = URL.createObjectURL(videoBlob);

        setIsYoutubeVideo(false);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video:", error?.response?.data.message);
        toast.error(error.response?.data?.message || "No video found");
      } finally {
        setLoading(false);
      }
    }
  };

  const isFavorite = isClassAdded[courseData.course_id];
  console.log(courseFeatureData.youtube_url, "jjjj");
  return (
    <>
      <div className="col-lg-4">
        <div className="sidebar-sec">
          {/* Video Section */}
          <VideoSection>
            <div className="video-sec vid-bg">
              <div className="card">
                <div className="card-body">
                  {videoUrl ? (
                    isYoutubeVideo ? (
                      // YouTube Player
                      <div className="video-thumbnail-container">
                        <ReactPlayer
                          url={videoUrl}
                          controls={true}
                          width="100%"
                          height="100%"
                          onReady={() => setLoading(false)}
                          onStart={() => setLoading(false)}
                          onBuffer={() => setLoading(true)}
                          onBufferEnd={() => setLoading(false)}
                          onError={() => setLoading(false)}
                          config={{
                            youtube: {
                              playerVars: {
                                showinfo: 1,
                                controls: 1,
                                rel: 0,
                              },
                            },
                          }}
                        />
                        {loading && (
                          <div className="d-flex justify-content-center align-items-center">
                            <div
                              className="spinner-border text-primary"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Regular video player for streamed content
                      <video
                        controls
                        onLoadStart={() => setLoading(true)}
                        onLoadedData={() => setLoading(false)}
                      >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )
                  ) : (
                    // Video thumbnail with play button
                    <div className="video-thumbnail-container">
                      <button
                        onClick={handleVideoPlay}
                        className="video-thumbnail"
                      >
                        {loading ? (
                          <img
                            src={Loader}
                            alt="Loading..."
                            className="loader"
                          />
                        ) : (
                          <div className="default-thumbnail">
                            <img
                              src={
                                courseFeatureData?.course_banner_image?.startsWith(
                                  "http"
                                )
                                  ? courseFeatureData.course_banner_image
                                  : `https://api.novajobs.us${
                                      courseFeatureData?.course_banner_image ||
                                      ""
                                    }`
                              }
                              alt="Course Banner"
                              className="default-image"
                            />
                            <div className="play-icon">
                              <i className="fa-solid fa-play" />
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  )}

                  <div className="video-details">
                    {courseFeatureData.course_price == 0 ? (
                      <div className="course-fee">
                        <h2>FREE</h2>
                        <p>
                          <span>$99.00</span> 50% off
                        </p>
                      </div>
                    ) : (
                      " "
                    )}
                    <div className="row gx-2">
                      <div className="col-md-6 addHeart">
                        {isFavorite && localStorage.getItem("token") ? (
                          <button
                            className="btn btn-danger w-100"
                            onClick={() =>
                              toggleClass(courseData.course_id, isFavorite)
                            }
                          >
                            <i className="feather icon-heart me-2" />
                            Remove
                          </button>
                        ) : (
                          <button
                            className="btn btn-wish w-100"
                            onClick={() =>
                              toggleClass(courseData.course_id, isFavorite)
                            }
                          >
                            <i className="feather icon-heart me-2" />
                            Add to Wishlist
                          </button>
                        )}
                      </div>
                      <div className="col-md-6 addHeart">
                        <ShareButton
                          courseUrl={`https://ultraaura.education/course-info/${courseData.course_id}`}
                        />
                      </div>
                    </div>
                    <ButtonWrapper>
                      {/* {token && courseData.is_student_enroll ? (
                        <button className="btn-enroll w-100" disabled>
                          Enrolled
                        </button>
                      ) : (
                        <button
                          onClick={handleEnrollClick}
                          className="btn-enroll w-100"
                        >
                          Enroll Now
                        </button>
                      )} */}

                      {
                        <button
                          className="btn-enroll w-100 buynow"
                          onClick={handleBuyNow}
                          disabled={isEnrolled} // Disable button after enrollment
                        >
                          {isEnrolled ? "Enrolled" : "Buy Now"}
                        </button>
                      }

                      {token &&
                        courseData.is_student_enroll &&
                        courseData.is_certificate && (
                          <button
                            onClick={handleDownload}
                            className="btn-enroll w-100"
                          >
                            Download Certificate
                          </button>
                        )}
                      {token && courseData.is_student_enroll && (
                        <button
                          className="btn-enroll w-100"
                          onClick={() => setShowTestModal(true)}
                        >
                          Take Test
                        </button>
                      )}
                    </ButtonWrapper>
                  </div>
                </div>
              </div>
            </div>
          </VideoSection>

          {/* Checkout Popup */}
          <Modal show={showPopup} onHide={() => setShowPopup(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Purchase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to enroll in this course?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPopup(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleCheckout}>
                {loading ? (
                  <Spinner as="span" animation="border" size="sm" />
                ) : (
                  "Confirm and Enroll"
                )}
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showTestModal} onHide={() => setShowTestModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Action</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to take the test for this course?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowTestModal(false)}
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={handleTakeTest}>
                {loading ? (
                  <Spinner as="span" animation="border" size="sm" />
                ) : (
                  "Confirm and Take Test"
                )}
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Include Section */}
          <div className="card include-sec">
            <div className="card-body">
              <div className="cat-title includes">
                <h4>Includes</h4>
              </div>
              <ul>
                <li>
                  <img src={Mobile} className="me-2" alt="" /> On-demand video
                </li>
                <li>
                  <img src={Play} className="me-2" alt="" />
                  Downloadable resources
                </li>
                <li>
                  <img src={Key} className="me-2" alt="" /> Full access
                </li>
                <li>
                  <img src={Mobile} className="me-2" alt="" /> Access on mobile
                  screen
                </li>
                <li>
                  <img src={Cloud} className="me-2" alt="" /> Assignments
                </li>
                <li>
                  <img src={Teacher} className="me-2" alt="" /> Certificate of
                  Completion
                </li>
              </ul>
            </div>
          </div>

          {/* Features Section */}
          <div className="card feature-sec">
            <div className="card-body">
              <div className="cat-title">
                <h4>Features</h4>
              </div>
              <ul>
                <li>
                  <img src={Users} className="me-2" alt="" /> Enrolled:{" "}
                  <span>{courseFeatureData.enrolled_student_count}</span>
                </li>
                <li>
                  <img src={Timer2} className="me-2" alt="" /> Duration:{" "}
                  <span>{courseFeatureData.time_spent_on_course}</span>
                </li>
                <li>
                  <img src={Chapter} className="me-2" alt="" /> Lectures:{" "}
                  <span> {courseFeatureData.total_lectures} </span>
                </li>
                <li>
                  <img src={Chart} className="me-2" alt="" /> Level:{" "}
                  <span>{courseFeatureData.course_level_name}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card feature-sec">
            <div className="card-body">
              <div className="cat-title">
                <h4>Learning Objective</h4>
              </div>
              <div className="content">
                {/* Truncate and conditionally render content */}
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      isExpanded || !isTruncated
                        ? fullContent
                        : fullContent.slice(0, truncateLength) + "...",
                  }}
                />
              </div>
              {isTruncated && (
                <button onClick={toggleReadMore} className="read-more-btn">
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SidebarSection.propTypes = {
  courseId: PropTypes.number.isRequired,
  courseFeatureData: PropTypes.shape({
    enrolled_student_count: PropTypes.number.isRequired,
    course_price: PropTypes.number.isRequired,
    time_spent_on_course: PropTypes.string.isRequired,
    total_lectures: PropTypes.number.isRequired,
    course_level_name: PropTypes.string.isRequired,
    learning_objectives: PropTypes.string.isRequired,
    course_banner_image: PropTypes.string.isRequired,
    youtube_url: PropTypes.string.isRequired,
  }).isRequired,
  courseData: PropTypes.shape({
    course_id: PropTypes.number.isRequired,
    course_title: PropTypes.string.isRequired,
    is_student_enroll: PropTypes.bool.isRequired,
    is_certificate: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SidebarSection;
