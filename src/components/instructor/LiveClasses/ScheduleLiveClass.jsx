import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import InstructorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import LiveClassTable from "./LiveClassTable";

const ScheduleLiveClass = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [course, setCourse] = useState("");
  const [zoomId, setZoomId] = useState("");
  const [zoomUrl, setZoomUrl] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      title,
      startDate,
      endDate,
      course,
      zoomId,
      zoomUrl,
    });
    setTitle("");
  setStartDate("");
  setEndDate("");
  setCourse("");
  setZoomId("");
  setZoomUrl("");
    handleClose();
  };

  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Schedule Class"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Schedule Live Class</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Schedule Class
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}

            {/* Main Content */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details mb-0">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Schedule a Live Class</h3>
                  </div>
                  <div className="checkout-form personal-address">
                    <div className="row">
                      <div className="col-sm-12">
                        <StyledButton onClick={handleShow}>
                          Schedule New Class
                        </StyledButton>
                      </div>
                    </div>
                        <LiveClassTable />
                  </div>
                </div>
              </div>
            </div>
            {/* /Main Content */}
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <Footer />

      {/* Modal for Scheduling Class */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Live Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter class title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="" disabled>Select a course</option>
                <option value="Course 1">Course 1</option>
                <option value="Course 2">Course 2</option>
                <option value="Course 3">Course 3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Zoom ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Zoom ID"
                value={zoomId}
                onChange={(e) => setZoomId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Zoom URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Zoom URL"
                value={zoomUrl}
                onChange={(e) => setZoomUrl(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Schedule Class
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ScheduleLiveClass;
