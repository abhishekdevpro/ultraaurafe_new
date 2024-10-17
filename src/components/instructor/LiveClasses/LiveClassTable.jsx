// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const LiveClassTable = () => {
//   const [classes, setClasses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("trainerToken");

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const response = await axios.get('https://api.novajobs.us/api/trainers/live-class', {
//           headers: {
//             Authorization: `${token}`,
//           },
//         });

//         if (response.data.data && response.data.data.length > 0) {
//           setClasses(response.data.data);
//         } else {
//           setError('No scheduled classes available');
//         }
//       } catch (error) {
//         setError('Failed to fetch data. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClasses();
//   }, [token]);

//   const formatDate = (dateTimeString) => {
//     const date = new Date(dateTimeString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     return `${year}-${month}-${day} ${hours}:${minutes}:00`;
//   };

//   const handleEdit = (id) => {
//     console.log(`Edit class with ID: ${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://api.novajobs.us/api/trainers/live-class/${id}`, {
//         headers: {
//           Authorization: `${token}`,
//         },
//       });
//       setClasses((prevClasses) => prevClasses.filter((liveClass) => liveClass.id !== id));
//       toast.success('Class deleted successfully!', {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     } catch (error) {
//       setError('Failed to delete class. Please try again.');
//       toast.error(error.response.data.message ||'Failed to delete class. Please try again.', {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-12">
//           <div className="card shadow-sm">
//             <div className="card-header text-black">
//               <h4 className="mb-0">Scheduled Classes</h4>
//             </div>
//             <div className="card-body">
//               {loading ? (
//                 <div className="text-center">
//                   <div className="spinner-border text-primary" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                   </div>
//                 </div>
//               ) : error ? (
//                 <div className="alert alert-danger" role="alert">
//                   {error}
//                 </div>
//               ) : (
//                 <div className="table-responsive">
//                   <table className="table table-hover table-striped">
//                     <thead className="table-light">
//                       <tr>
//                         <th>Topic</th>
//                         <th>Start Time</th>
//                         <th>Duration</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {classes.map((liveClass) => (
//                         <tr key={liveClass.id}>
//                           <td>{liveClass.title}</td>
//                           <td>{formatDate(liveClass.start_time)}</td>
//                           <td>{liveClass.duration} minutes</td>
//                           <td>
//                             <div className="btn-group" role="group">
//                               <a
//                                 href={liveClass.meeting_join_url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="btn btn-sm btn-success"
//                               >
//                                 Join Now
//                               </a>
//                               <button
//                                 className="btn btn-sm btn-warning"
//                                 onClick={() => handleEdit(liveClass.id)}
//                               >
//                                 Edit
//                               </button>
//                               <button
//                                 className="btn btn-sm btn-danger"
//                                 onClick={() => handleDelete(liveClass.id)}
//                               >
//                                 Delete
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveClassTable;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Modal, Button, Form } from 'react-bootstrap';
// import Select from 'react-select';
// import { toast } from 'react-toastify';

// const LiveClassTable = () => {
//   const [classes, setClasses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [show, setShow] = useState(false);
//   const [title, setTitle] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [duration, setDuration] = useState('');
//   const [course, setCourse] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const [isCoursesLoaded, setIsCoursesLoaded] = useState(false);
//   const [editingClassId, setEditingClassId] = useState(null);

//   const token = localStorage.getItem("trainerToken");

//   useEffect(() => {
//     fetchClasses();
//   }, [token]);

//   const fetchClasses = async () => {
//     try {
//       const response = await axios.get('https://api.novajobs.us/api/trainers/live-class', {
//         headers: {
//           Authorization: `${token}`,
//         },
//       });

//       if (response.data.data && response.data.data.length > 0) {
//         setClasses(response.data.data);
//       } else {
//         setError('No scheduled classes available');
//       }
//     } catch (error) {
//       setError('Failed to fetch data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateTimeString) => {
//     const date = new Date(dateTimeString);
//     return date.toLocaleString();
//   };

//   const handleClose = () => {
//     setShow(false);
//     resetForm();
//   };

//   const handleShow = (classData) => {
//     setEditingClassId(classData.id);
//     setTitle(classData.title);
//     setStartDate(classData.start_time.slice(0, 16)); // Format for datetime-local input
//     setDuration(classData.duration.toString());
//     setCourse({ value: classData.course_id, label: classData.course_name });
//     setShow(true);
//   };

//   const resetForm = () => {
//     setTitle('');
//     setStartDate('');
//     setDuration('');
//     setCourse(null);
//     setEditingClassId(null);
//   };
//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get('https://api.novajobs.us/api/trainers/courses', {
//         headers: {
//           Authorization: `${token}`,
//         },
//       });
//       const options = response.data.data.map((courseItem) => ({
//         value: courseItem.id,
//         label: courseItem.course_title,
//       }));
//       setCourses(options);
//       setIsCoursesLoaded(true);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.put(`https://api.novajobs.us/api/trainers/live-class/${editingClassId}`, {
//         title,
//         start_time: startDate,
//         duration: parseInt(duration),
//         course_id: course.value
//       }, {
//         headers: {
//           Authorization: `${token}`,
//         },
//       });

//       if (response.data) {
//         toast.success(response.data.message || " Class updated Successfully !")
//         fetchClasses(); // Refresh the class list
//         handleClose();
//       } else {
//         toast.error(error.response.data.message || "Error while updating the class")
//         setError('Failed to update class. Please try again.');
//       }
//     } catch (error) {
//       setError('Failed to update class. Please try again.');
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://api.novajobs.us/api/trainers/live-class/${id}`, {
//         headers: {
//           Authorization: `${token}`,
//         },
//       });
//       setClasses((prevClasses) => prevClasses.filter((liveClass) => liveClass.id !== id));
//     } catch (error) {
//       setError('Failed to delete class. Please try again.');
//     }
//   };

//   const handleMenuOpen = () => {
//     if (!isCoursesLoaded) {
//       fetchCourses();
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-12">
//           <div className="card shadow-sm">
//             <div className="card-header text-black">
//               <h4 className="mb-0">Scheduled Classes</h4>
//             </div>
//             <div className="card-body">
//               {loading ? (
//                 <div className="text-center">
//                   <div className="spinner-border text-primary" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                   </div>
//                 </div>
//               ) : error ? (
//                 <div className="alert alert-danger" role="alert">
//                   {error}
//                 </div>
//               ) : (
//                 <div className="table-responsive">
//                   <table className="table table-hover table-striped">
//                     <thead className="table-light">
//                       <tr>
//                         <th>Title</th>
//                         <th>Start Time</th>
//                         <th>Duration</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {classes.map((liveClass) => (
//                         <tr key={liveClass.id}>
//                           <td>{liveClass.title}</td>
//                           <td>{formatDate(liveClass.start_time)}</td>
//                           <td>{liveClass.duration} minutes</td>
//                           <td>
//                             <div className="btn-group" role="group">
//                               <a
//                                 href={liveClass.meeting_join_url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="btn btn-sm btn-success"
//                               >
//                                 Join Now
//                               </a>
//                               <button
//                                 className="btn btn-sm btn-warning"
//                                 onClick={() => handleShow(liveClass)}
//                               >
//                                 Edit
//                               </button>
//                               <button
//                                 className="btn btn-sm btn-danger"
//                                 onClick={() => handleDelete(liveClass.id)}
//                               >
//                                 Delete
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Live Class</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Topic</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter class title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Start Date</Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 name="startdate"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Duration</Form.Label>
//               <Form.Select
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//               >
//                 <option value="">Select Duration</option>
//                 <option value="10">10 minutes</option>
//                 <option value="20">20 minutes</option>
//                 <option value="30">30 minutes</option>
//                 <option value="45">45 minutes</option>
//                 <option value="60">60 minutes</option>
//               </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Course</Form.Label>
//               <Select
//                 value={course}
//                 onChange={(selectedOption) => setCourse(selectedOption)}
//                 options={courses}
//                 onMenuOpen={handleMenuOpen}
//                 placeholder="Select a course"
//                 isLoading={!isCoursesLoaded && courses.length === 0}
//                 classNamePrefix="react-select"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Update Class
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default LiveClassTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import { toast } from "react-toastify";

const LiveClassTable = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [course, setCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isCoursesLoaded, setIsCoursesLoaded] = useState(false);
  const [editingClassId, setEditingClassId] = useState(null);

  const trainerToken = localStorage.getItem("trainerToken");
  const studentToken = localStorage.getItem("token");
  const token = trainerToken || studentToken;

  useEffect(() => {
    fetchClasses();
  }, [token]);

  const fetchClasses = async () => {
    try {
      const endpoint = trainerToken
        ? "https://api.novajobs.us/api/trainers/live-class"
        : "https://api.novajobs.us/api/students/my-live-classes";

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.data.data && response.data.data.length > 0) {
        setClasses(response.data.data);
      } else {
        setError("No scheduled classes available");
      }
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  };

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const handleShow = (classData) => {
    setEditingClassId(classData.id);
    setTitle(classData.title);
    setStartDate(classData.start_time.slice(0, 16)); // Format for datetime-local input
    setDuration(classData.duration.toString());
    setCourse({ value: classData.course_id, label: classData.course_name });
    setShow(true);
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
      const response = await axios.put(
        `https://api.novajobs.us/api/trainers/live-class/${editingClassId}`,
        {
          title,
          start_time: startDate,
          duration: parseInt(duration),
          course_id: course.value,
        },
        {
          headers: {
            Authorization: `${trainerToken}`,
          },
        }
      );

      if (response.data) {
        toast.success(response.data.message || "Class updated successfully!");
        fetchClasses(); // Refresh the class list
        handleClose();
      } else {
        toast.error("Error while updating the class");
        setError("Failed to update class. Please try again.");
      }
    } catch (error) {
      setError("Failed to update class. Please try again.");
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
    } catch (error) {
      setError("Failed to delete class. Please try again.");
    }
  };

  const handleMenuOpen = () => {
    if (!isCoursesLoaded) {
      fetchCourses();
    }
  };

  const handleJoin = (liveClass) => {
    window.open(liveClass.meeting_join_url, "_blank", "noopener,noreferrer");
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
                          <td>{formatDate(liveClass.start_time)}</td>
                          <td>{liveClass.duration} minutes</td>
                          <td>
                            <div className="btn-group" role="group">
                              <a
                                href="#" // Optional: Set to "#" or remove if not needed
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-success"
                                onClick={() => handleJoin(liveClass)} // Call your function on click
                              >
                                Join Now
                              </a>

                              {trainerToken && (
                                <>
                                  <button
                                    className="btn btn-sm btn-warning"
                                    onClick={() => handleShow(liveClass)}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(liveClass.id)}
                                  >
                                    Delete
                                  </button>
                                </>
                              )}
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

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Live Class</Modal.Title>
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
            Update Class
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LiveClassTable;
