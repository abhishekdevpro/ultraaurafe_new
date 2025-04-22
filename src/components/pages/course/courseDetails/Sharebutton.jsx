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
  // FaTwitter,
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
  background-color: #1c2957;
  color: white;
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
            <SocialButton bgColor="black">
              {/* <FaTwitter /> */}
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>𝕏</span>
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
