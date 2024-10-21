import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import { toast } from "react-toastify";
import ZoomMeetingModal from "./ZoomMeetingModal";

const TrainerLiveClassTable = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [course, setCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isCoursesLoaded, setIsCoursesLoaded] = useState(false);
  const [editingClassId, setEditingClassId] = useState(null);
  const [activeMeetingUrl, setActiveMeetingUrl] = useState("");

  const trainerToken = localStorage.getItem("trainerToken");
 console.log(isCoursesLoaded);
  useEffect(() => {
    fetchClasses();
  }, [trainerToken]);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/live-class",
        {
          headers: {
            Authorization: `${trainerToken}`,
          },
        }
      );

      if (response.data.data) {
        setClasses(response.data.data);
        setError(null);
      } else {
        setError("No scheduled classes available");
      }
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleShow = (classData = null) => {
    if (classData) {
      setEditingClassId(classData.id);
      setTitle(classData.title);
      setStartDate(classData.start_time.slice(0, 16));
      setDuration(classData.duration.toString());
      setCourse({ value: classData.course_id, label: classData.course_name });
    }
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setStartDate("");
    setDuration("");
    setCourse(null);
    setEditingClassId(null);
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/courses",
        {
          headers: {
            Authorization: `${trainerToken}`,
          },
        }
      );
      const options = response.data.data.map((courseItem) => ({
        value: courseItem.id,
        label: courseItem.course_title,
      }));
      setCourses(options);
      setIsCoursesLoaded(true);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        title,
        start_time: startDate,
        duration: parseInt(duration),
        course_id: course.value,
      };
      const response = editingClassId
        ? await axios.put(
            `https://api.novajobs.us/api/trainers/live-class/${editingClassId}`,
            payload,
            {
              headers: {
                Authorization: `${trainerToken}`,
              },
            }
          )
        : await axios.post(
            "https://api.novajobs.us/api/trainers/live-class",
            payload,
            {
              headers: {
                Authorization: `${trainerToken}`,
              },
            }
          );

      if (response.data) {
        toast.success(response.data.message || "Class saved successfully!");
        fetchClasses(); // Refresh the class list
        handleClose();
      } else {
        toast.error("Error while saving the class");
      }
    } catch (error) {
      toast.error("Failed to save class. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://api.novajobs.us/api/trainers/live-class/${id}`,
        {
          headers: {
            Authorization: `${trainerToken}`,
          },
        }
      );
      setClasses((prevClasses) =>
        prevClasses.filter((liveClass) => liveClass.id !== id)
      );
      toast.success("Class deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete class. Please try again.");
    }
  };

  const handleJoin = (liveClass) => {
    console.log(liveClass, "lc");
  
    // Parse meeting information
    const meetingInfoString = liveClass.meeting_info;
    let meetingInfo;
    try {
      meetingInfo = JSON.parse(meetingInfoString);
    } catch (error) {
      console.error("Invalid meeting info format", error);
      alert("Invalid meeting info format. Please try again.");
      return;
    }
  
    const meetingId = liveClass.meeting_id;
    const passcode = meetingInfo.password || "";
  
    if (!meetingId) {
      toast.error("Meeting ID is missing. Please check the meeting details.");
      return;
    }
  
    if (!passcode) {
        toast.error("Invalid user or missing password for the meeting. Please check the credentials.");
      return;
    }
  
    // Construct the Zoom meeting URL
    const zoomUrl = `https://zoom.us/wc/${meetingId}/join?pwd=${encodeURIComponent(passcode)}`;
    setActiveMeetingUrl(zoomUrl);
    setShowMeetingModal(true);
  
  };

  const handleMeetingClose = () => {
    setShowMeetingModal(false);
    setActiveMeetingUrl("");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header text-black">
              <h4 className="mb-0">Scheduled Classes</h4>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover table-striped">
                    <thead className="table-light">
                      <tr>
                        <th>Title</th>
                        <th>Start Time</th>
                        <th>Duration</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((liveClass) => (
                        <tr key={liveClass.id}>
                          <td>{liveClass.title}</td>
                          <td>{new Date(liveClass.start_time).toLocaleString()}</td>
                          <td>{liveClass.duration} minutes</td>
                          <td>
                            <div className="btn-group" role="group">
                              <button
                                className="btn btn-success"
                                onClick={() => handleJoin(liveClass)}
                              >
                                Join Now
                              </button>
                              <button
                                className="btn btn-warning"
                                onClick={() => handleShow(liveClass)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(liveClass.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ZoomMeetingModal
        showMeetingModal={showMeetingModal}
        handleMeetingClose={handleMeetingClose}
        activeMeetingUrl={activeMeetingUrl}
      />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingClassId ? "Edit" : "Create"} Live Class</Modal.Title>
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
              <Form.Label>Duration (minutes)</Form.Label>
              <Form.Select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option>Select duration</option>
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
                <option value="75">75 Minutes</option>
                <option value="90">90 Minutes</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Select
                placeholder="Select Course"
                value={course}
                options={courses}
                onChange={setCourse}
                onMenuOpen={fetchCourses}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TrainerLiveClassTable;
