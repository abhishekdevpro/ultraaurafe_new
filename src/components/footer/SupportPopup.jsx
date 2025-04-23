import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import styled from 'styled-components';

// Styled components for modern look
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
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
  max-width: 600px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
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
  &:hover { color: #333; }
`;
const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.75rem;
  color: #5c3c92;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const LabelStyled = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #444;
`;
const InputStyled = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccd0d5;
  border-radius: 6px;
  font-size: 1rem;
  &:focus { outline: none; border-color: #5c3c92; box-shadow: 0 0 0 2px rgba(92,60,146,0.2); }
`;
const SelectStyled = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccd0d5;
  border-radius: 6px;
  font-size: 1rem;
  &:focus { outline: none; border-color: #5c3c92; box-shadow: 0 0 0 2px rgba(92,60,146,0.2); }
`;
const TextareaStyled = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccd0d5;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  &:focus { outline: none; border-color: #5c3c92; box-shadow: 0 0 0 2px rgba(92,60,146,0.2); }
`;
const SubmitButtonStyled = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  transition: opacity 0.2s;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;
const ErrorText = styled.p`
  color: #e53935;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SupportPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    category: "",
    subject: "",
    description: "",
  });
  const BASIC_AUTH_USERNAME = "admin";
  const BASIC_AUTH_PASSWORD = "+2e64JP2jL9+<ho8L-";
  
  // Encode Basic Auth Credentials
  const basicAuthHeader = `Basic ${btoa(
    `${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`
  )}`;
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await axios.post(
        "https://api.ciblijob.fr/api/user/support-form",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          category: formData.category,
          subject: formData.subject,
          description: formData.description,
          lang: navigator.language || "en",
        },
        {
            headers: {
                Authorization: basicAuthHeader, // Attach Basic Auth header to all requests
              },
        }
      );

      toast.success("Support request submitted successfully!");
      setFormData({ firstName: "", lastName: "", email: "", category: "", subject: "", description: "" });
      onClose();
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Failed to submit the form.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButtonStyled onClick={onClose}>×</CloseButtonStyled>
        <Title>Support Form</Title>
        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <LabelStyled>First Name *</LabelStyled>
            <InputStyled name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <LabelStyled>Last Name *</LabelStyled>
            <InputStyled name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <LabelStyled>Email *</LabelStyled>
            <InputStyled name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@domain.com" />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <LabelStyled>Category *</LabelStyled>
            <SelectStyled name="category" value={formData.category} onChange={handleChange}>
              <option value="">- Select Category -</option>
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Issue</option>
              <option value="billing">Billing</option>
            </SelectStyled>
            {errors.category && <ErrorText>{errors.category}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <LabelStyled>Subject *</LabelStyled>
            <InputStyled name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
            {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <LabelStyled>Description</LabelStyled>
            <TextareaStyled name="description" value={formData.description} onChange={handleChange} placeholder="Describe your issue" />
          </FieldGroup>
          <SubmitButtonStyled type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Form"}
          </SubmitButtonStyled>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};

SupportPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SupportPopup; 