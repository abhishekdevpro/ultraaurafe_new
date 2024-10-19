import React, { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import Select from "react-select";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import InstructorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import LiveClassTable from "./LiveClassTable";
import axios from "axios";
import { toast } from "react-toastify";
import VendorHeader from "../../Vendor/VendorHeader";
import VendorSidebar from "../../Vendor/VendorSidebar";

const ScheduleLiveClass = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState('');
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);
  const [isCoursesLoaded, setIsCoursesLoaded] = useState(false);
  const token = localStorage.getItem("trainerToken");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://api.novajobs.us/api/trainers/courses', {
        headers: {
          Authorization: `${token}`,
        },
      });
      const options = response.data.data.map((courseItem) => ({
        value: courseItem.id,
        label: courseItem.course_title,
      }));
      setCourses(options);
      setIsCoursesLoaded(true);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleMenuOpen = () => {
    if (!isCoursesLoaded) {
      fetchCourses();
    }
  };

  // Function to format the date and time
  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:00`;
  };

  const handleSubmit = async () => {
    // Format the start date before submitting
    const formattedStartDate = formatDate(startDate);
  
    const classData = {
      course_id: course ? course.value : null,
      start_time: formattedStartDate,
      duration: Number(duration),
      title: title,
    };
  
    try {
      const response = await axios.post(
        'https://api.novajobs.us/api/trainers/live-class',
        classData,
        {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success(response.data.message || "Live Class Created Successfully");
      console.log('Live class scheduled successfully:', response.data);
  
      setTitle("");
      setStartDate("");
      setCourse(null);
      setDuration("");
      handleClose();
  
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error scheduling live class:', error);
      toast.error(error.response?.data?.message || "Error while scheduling the class");
    }
  };
   

  const vendorToken = localStorage.getItem('vendorToken')
  return (
    <div className="main-wrapper">
     {vendorToken? <VendorHeader />  :<InstructorHeader activeMenu={"Schedule Class"} />}
      <div className="breadcrumb-bar breadcrumb-bar-info ">
        <div className="container ">
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

      <div className="page-content">
        <div className="container">
          <div className="row">
           {vendorToken? <VendorSidebar /> :<InstructorSidebar />}
            <div className="col-xl-9 col-lg-8">
              <Card className="shadow-sm">
                <Card.Header className="bg-white">
                  <h3 className="mb-0">Schedule a Live Class</h3>
                </Card.Header>
                <Card.Body>
                  <Button variant="primary" onClick={handleShow} className="mb-4">
                    Schedule New Class
                  </Button>

                  <LiveClassTable />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Live Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Topic</Form.Label>
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
                type="datetime-local"
                name="startdate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>
              <Form.Select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Select Duration</option>
                <option value="10">10 minutes</option>
                <option value="20">20 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Select
                value={course}
                onChange={(selectedOption) => setCourse(selectedOption)}
                options={courses}
                onMenuOpen={handleMenuOpen}
                placeholder="Select a course"
                isLoading={!isCoursesLoaded && courses.length === 0}
                classNamePrefix="react-select"
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

export default ScheduleLiveClass;
