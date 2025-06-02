
import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import styled from "styled-components";

// Styled components
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;
`;
const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
`;
const CloseButtonStyled = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #333;
  }
`;
const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #1C2957;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
// const LabelStyled = styled.label`
//   font-weight: 600;
//   margin-bottom: 0.5rem;
//   color: #444;
// `;
const SelectStyled = styled.select`
  padding: 0.75rem;
  width :100%;
  border: 1px solid #ccd0d5;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #5c3c92;
    box-shadow: 0 0 0 2px rgba(92, 60, 146, 0.2);
  }
`;
const SubmitButtonStyled = styled.button`
  padding: 0.75rem 1.5rem;
  width :100%;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  transition: opacity 0.2s;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ConsultancyPopup = ({ isOpen, onClose }) => {
  const [duration, setDuration] = useState("30");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(`https://api.novajobs.us/api/jobseeker/calendly-link?meeting-time=${duration}`);
      if(response.data.data){
        window.location.href = response.data.data.calendly_link
      }
      toast.success("Meeting created successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to create meeting.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButtonStyled onClick={onClose}>×</CloseButtonStyled>
        <Title>Book a Consultancy Meeting</Title>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex gap-2 justify-content-center align-items-center">
            {/* <LabelStyled>Duration (in minutes)</LabelStyled> */}
            <SelectStyled value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </SelectStyled>
          </div>
          <SubmitButtonStyled className="site-button" type="submit" disabled={loading}>
            {loading ? "Booking..." : "Create Meeting"}
          </SubmitButtonStyled>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};

ConsultancyPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ConsultancyPopup;

