// import React, { useState } from 'react';
// import styled from 'styled-components';

// const ShareButtonContainer = styled.div`
//   position: relative;
// `;

// const Button = styled.button`
// display: flex;
// align-items: center;
// justify-content: center;
// padding: 10px;
// background-color: #f0f0f0;
// border: none;
// border-radius: 5px;
// cursor: pointer;
// width: 100%;
// `;

// const Popup = styled.div`
//   position: absolute;
//   z-index: 10;
//   margin-top: 10px;
//   padding: 15px;
//   background-color: white;
//   border-radius: 5px;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// `;

// const SocialButton = styled.button`
//   padding: 10px;
//   margin: 0 5px;
//   border: none;
//   border-radius: 50%;
//   cursor: pointer;
//   background-color: ${props => props.bgColor};
//   color: white;
// `;

// const CopyButton = styled(SocialButton)`
//   background-color: #f0f0f0;
//   color: black;
// `;

// const Alert = styled.div`
//   position: absolute;
//   bottom: -40px;
//   left: 0;
//   right: 0;
//   background-color: #4CAF50;
//   color: white;
//   padding: 10px;
//   border-radius: 5px;
//   text-align: center;
// `;

// const ShareIcon = styled.svg`
//   margin-right: 10px;
// `;

// const ShareButton = ({ courseUrl }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [showCopiedAlert, setShowCopiedAlert] = useState(false);

//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);

//   const shareToSocialMedia = (platform) => {
//     let shareUrl;
//     switch (platform) {
//       case 'facebook':
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(courseUrl)}`;
//         break;
//       case 'twitter':
//         shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(courseUrl)}`;
//         break;
//       case 'linkedin':
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(courseUrl)}`;
//         break;
//       default:
//         return;
//     }
//     window.open(shareUrl, '_blank');
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(courseUrl).then(() => {
//       setShowCopiedAlert(true);
//       setTimeout(() => setShowCopiedAlert(false), 2000);
//     });
//   };

//   return (
//     <ShareButtonContainer>
//       <Button onClick={togglePopup}>
//         <ShareIcon xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="18" cy="5" r="3"></circle>
//           <circle cx="6" cy="12" r="3"></circle>
//           <circle cx="18" cy="19" r="3"></circle>
//           <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
//           <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
//         </ShareIcon>
//         Share
//       </Button>

//       {isPopupOpen && (
//         <Popup>
//           <SocialButton onClick={() => shareToSocialMedia('facebook')} bgColor="#3b5998">
//             f
//           </SocialButton>
//           <SocialButton onClick={() => shareToSocialMedia('twitter')} bgColor="#1da1f2">
//             t
//           </SocialButton>
//           <SocialButton onClick={() => shareToSocialMedia('linkedin')} bgColor="#0077b5">
//             in
//           </SocialButton>
//           <CopyButton onClick={copyLink}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
//               <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
//             </svg>
//           </CopyButton>
//         </Popup>
//       )}

//       {showCopiedAlert && (
//         <Alert>
//           Link copied to clipboard!
//         </Alert>
//       )}
//     </ShareButtonContainer>
//   );
// };

// export default ShareButton;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const ShareButtonContainer = styled.div`
//   position: relative;
//   // display: inline-block;
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   background-color: #f0f0f0;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 100%;

//   &:hover {
//     background-color: grey;
//   }
// `;

// const Popup = styled.div`
//   position: absolute;
//   top: 120%;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 10;
//   display: flex;
//   gap: 10px;
//   padding: 20px;
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//   transition: opacity 0.3s ease;

//   &:before {
//     content: '';
//     position: absolute;
//     top: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     border-width: 10px;
//     border-style: solid;
//     border-color: transparent transparent white transparent;
//   }
// `;

// const SocialButton = styled.button`
//   width: 45px;
//   height: 45px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
//   color: white;
//   background-color: ${props => props.bgColor};
//   border: none;
//   border-radius: 50%;
//   cursor: pointer;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const CopyButton = styled(SocialButton)`
//   background-color: #f0f0f0;
//   color: #333;

//   &:hover {
//     background-color: #e0e0e0;
//   }
// `;

// const Alert = styled.div`
//   position: absolute;
//   bottom: -60px;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #28a745;
//   color: white;
//   padding: 12px;
//   border-radius: 8px;
//   text-align: center;
//   font-size: 14px;
//   animation: fadeInOut 2s ease;

//   @keyframes fadeInOut {
//     0%, 100% {
//       opacity: 0;
//     }
//     50% {
//       opacity: 1;
//     }
//   }
// `;

// const ShareIcon = styled.svg`
//   margin-right: 10px;
//   stroke: white;
// `;

// const ShareButton = ({ courseUrl }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [showCopiedAlert, setShowCopiedAlert] = useState(false);

//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);

//   const shareToSocialMedia = (platform) => {
//     let shareUrl;
//     switch (platform) {
//       case 'facebook':
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(courseUrl)}`;
//         break;
//       case 'twitter':
//         shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(courseUrl)}`;
//         break;
//       case 'linkedin':
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(courseUrl)}`;
//         break;
//       default:
//         return;
//     }
//     window.open(shareUrl, '_blank');
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(courseUrl).then(() => {
//       setShowCopiedAlert(true);
//       setTimeout(() => setShowCopiedAlert(false), 2000);
//     });
//   };

//   return (
//     <ShareButtonContainer>
//       <Button onClick={togglePopup}>
//         <ShareIcon xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="18" cy="5" r="3"></circle>
//           <circle cx="6" cy="12" r="3"></circle>
//           <circle cx="18" cy="19" r="3"></circle>
//           <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
//           <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
//         </ShareIcon>
//         Share
//       </Button>

//       {isPopupOpen && (
//         <Popup>
//           <SocialButton onClick={() => shareToSocialMedia('facebook')} bgColor="#3b5998">
//             f
//           </SocialButton>
//           <SocialButton onClick={() => shareToSocialMedia('twitter')} bgColor="#1da1f2">
//             t
//           </SocialButton>
//           <SocialButton onClick={() => shareToSocialMedia('linkedin')} bgColor="#0077b5">
//             in
//           </SocialButton>
//           <CopyButton onClick={copyLink}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
//               <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
//             </svg>
//           </CopyButton>
//         </Popup>
//       )}

//       {showCopiedAlert && (
//         <Alert>
//           Link copied to clipboard!
//         </Alert>
//       )}
//     </ShareButtonContainer>
//   );
// };

// export default ShareButton;
// import React, { useState } from "react";
// import PropTypes from "prop-types"; // Import prop-types for validation
// import styled from "styled-components";

// const ShareButtonContainer = styled.div`
//   position: relative;
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   background-color: #f0f0f0;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 100%;

//   &:hover {
//     background-color: grey;
//   }
// `;

// const Popup = styled.div`
//   position: absolute;
//   top: 120%;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 10;
//   display: flex;
//   gap: 10px;
//   padding: 20px;
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//   transition: opacity 0.3s ease;

//   &:before {
//     content: "";
//     position: absolute;
//     top: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     border-width: 10px;
//     border-style: solid;
//     border-color: transparent transparent white transparent;
//   }
// `;

// const SocialButton = styled.button`
//   width: 45px;
//   height: 45px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
//   color: white;
//   background-color: ${(props) => props.bgColor};
//   border: none;
//   border-radius: 50%;
//   cursor: pointer;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const CopyButton = styled(SocialButton)`
//   background-color: #f0f0f0;
//   color: #333;

//   &:hover {
//     background-color: #e0e0e0;
//   }
// `;

// const Alert = styled.div`
//   position: absolute;
//   bottom: -60px;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #28a745;
//   color: white;
//   padding: 12px;
//   border-radius: 8px;
//   text-align: center;
//   font-size: 14px;
//   animation: fadeInOut 2s ease;

//   @keyframes fadeInOut {
//     0%,
//     100% {
//       opacity: 0;
//     }
//     50% {
//       opacity: 1;
//     }
//   }
// `;

// const ShareIcon = styled.svg`
//   margin-right: 10px;
//   stroke: white;
// `;

// const ShareButton = ({ courseUrl }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [showCopiedAlert, setShowCopiedAlert] = useState(false);

//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);

//   const shareToSocialMedia = (platform) => {
//     let shareUrl;
//     switch (platform) {
//       case "facebook":
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//           courseUrl
//         )}`;
//         break;
//       case "twitter":
//         shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//           courseUrl
//         )}`;
//         break;
//       case "linkedin":
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//           courseUrl
//         )}`;
//         break;
//       default:
//         return;
//     }
//     window.open(shareUrl, "_blank");
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(courseUrl).then(() => {
//       setShowCopiedAlert(true);
//       setTimeout(() => setShowCopiedAlert(false), 2000);
//     });
//   };

//   return (
//     <ShareButtonContainer>
//       <Button onClick={togglePopup}>
//         <ShareIcon
//           xmlns="http://www.w3.org/2000/svg"
//           width="18"
//           height="18"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <circle cx="18" cy="5" r="3"></circle>
//           <circle cx="6" cy="12" r="3"></circle>
//           <circle cx="18" cy="19" r="3"></circle>
//           <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
//           <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
//         </ShareIcon>
//         Share
//       </Button>

//       {isPopupOpen && (
//         <Popup>
//           <SocialButton
//             onClick={() => shareToSocialMedia("facebook")}
//             bgColor="#3b5998"
//           >
//             f
//           </SocialButton>
//           <SocialButton
//             onClick={() => shareToSocialMedia("twitter")}
//             bgColor="#1da1f2"
//           >
//             t
//           </SocialButton>
//           <SocialButton
//             onClick={() => shareToSocialMedia("linkedin")}
//             bgColor="#0077b5"
//           >
//             in
//           </SocialButton>
//           <CopyButton onClick={copyLink}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
//               <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
//             </svg>
//           </CopyButton>
//         </Popup>
//       )}

//       {showCopiedAlert && <Alert>Link copied to clipboard!</Alert>}
//     </ShareButtonContainer>
//   );
// };

// // Define propTypes to validate the props
// ShareButton.propTypes = {
//   courseUrl: PropTypes.string.isRequired, // courseUrl must be a string and is required
// };

// export default ShareButton;

import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const ShareButtonContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: grey;
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 120%;
  left: 20%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SocialButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ShareButton = ({ courseUrl }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <ShareButtonContainer>
      <Button onClick={togglePopup}>Share</Button>

      {isPopupOpen && (
        <Popup>
          <FacebookShareButton url={courseUrl}>
            <SocialButton bgColor="#3b5998">
              <FaFacebookF />
            </SocialButton>
          </FacebookShareButton>

          <TwitterShareButton url={courseUrl}>
            <SocialButton bgColor="#1da1f2">
              <FaTwitter />
            </SocialButton>
          </TwitterShareButton>

          <WhatsappShareButton url={courseUrl}>
            <SocialButton bgColor="#25d366">
              <FaWhatsapp />
            </SocialButton>
          </WhatsappShareButton>

          <LinkedinShareButton url={courseUrl}>
            <SocialButton bgColor="#0077b5">
              <FaLinkedinIn />
            </SocialButton>
          </LinkedinShareButton>

          <EmailShareButton url={courseUrl}>
            <SocialButton bgColor="#d44638">
              <FaEnvelope />
            </SocialButton>
          </EmailShareButton>
        </Popup>
      )}
    </ShareButtonContainer>
  );
};

ShareButton.propTypes = {
  courseUrl: PropTypes.string.isRequired,
};

export default ShareButton;
