import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ConnectTrainer = () => {
  const [trainerConnectivity, setTrainerConnectivity] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTrainers, setAllTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [allottedTrainers, setAllottedTrainers] = useState([]);
  const [currentRequestId, setCurrentRequestId] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");

  // Function to validate the token
  const validateToken = () => {
    if (!token) {
      toast.error("Session expired. Please log in again.");
      navigate("/admin/login"); // Redirect to login page
      return false;
    }
    return true;
  };

  const fetchTrainerConnectivity = async () => {
    if (!validateToken()) return;

    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/uaadmin/trainer-connectivity",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setTrainerConnectivity(response.data.data || []);
    } catch (error) {
      console.error("Error fetching trainer connectivity:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        navigate("/admin/login");
      } else {
        toast.error("Error fetching trainer connectivity data. Please try again.");
      }
    }
  };

  const fetchTrainers = async () => {
    if (!validateToken()) return;

    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/uaadmin/trainers",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setAllTrainers(response.data.data || []);
    } catch (error) {
      console.error("Error fetching trainers:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        navigate("/admin/login");
      } else {
        toast.error("Error fetching trainers. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (requestId) => {
    setCurrentRequestId(requestId);
    fetchTrainers();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTrainer("");
    setAllottedTrainers([]);
  };

  const handleSave = async () => {
    if (!validateToken()) return;

    if (!selectedTrainer) {
      toast.error("Please select a trainer.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `https://api.novajobs.us/api/uaadmin/allocate-trainer/${currentRequestId}`,
        { trainer_id: selectedTrainer },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      toast.success("Trainer allocated successfully.");
      closeModal();
      fetchTrainerConnectivity();
    } catch (error) {
      console.error("Error allocating trainer:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        navigate("/admin/login");
      } else {
        toast.error("Error allocating trainer. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTrainer = async (trainerId) => {
    if (!validateToken()) return;

    setLoading(true);
    try {
      await axios.delete(
        `https://api.novajobs.us/api/uaadmin/remove-trainer/${trainerId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      toast.success("Trainer removed successfully.");
      setAllottedTrainers((prev) =>
        prev.filter((trainer) => trainer.id !== trainerId)
      );
    } catch (error) {
      console.error("Error removing trainer:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        navigate("/admin/login");
      } else {
        toast.error("Error removing trainer. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainerConnectivity();
  }, [token]);

  return (
    <div className="main-wrapper">
      <AdminHeader />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Admin Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <AdminSidebar />
            </div>
            <div className="col-xl-9 col-lg-9">
              {/* Trainer Connectivity Table */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Trainer Connectivity Requests</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Course Title</th>
                          <th>Preferred Days</th>
                          <th>Time Slot</th>
                          <th>Phone</th>
                          <th>Details</th>
                          <th>Status</th>
                          <th>Allocate</th>
                          <th>Permission</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trainerConnectivity.map((request) => (
                          <tr key={request.id}>
                            <td>{request.course_name}</td>
                            <td>{request.day}</td>
                            <td>{request.time}</td>
                            <td>{request.phone}</td>
                            <td>{request.details}</td>
                            <td>
                              {request.status_name === "Allocated" ? (
                                <span className="badge bg-success">Allocated</span>
                              ) : (
                                <span className="badge bg-warning">Pending</span>
                              )}
                            </td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => handleOpenModal(request.id)}
                              >
                                Locate to Trainer
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-success btn-sm me-2"
                                onClick={async () => {
                                  if (!validateToken()) return;
                                  try {
                                    await axios.get(
                                      `https://api.novajobs.us/api/admin/approve-course/${request.course_id}/${request.id}`,
                                      {
                                        headers: {
                                          Authorization: `${token}`,
                                        },
                                      }
                                    );
                                    toast.success("Course approved successfully.");
                                    fetchTrainerConnectivity();
                                  } catch (error) {
                                    console.error("Error approving course:", error);
                                    if (error.response?.status === 401) {
                                      toast.error("Session expired. Please log in again.");
                                      navigate("/admin/login");
                                    } else {
                                      toast.error("Error approving course. Please try again.");
                                    }
                                  }
                                }}
                              >
                                Approve
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={async () => {
                                  if (!validateToken()) return;
                                  try {
                                    await axios.get(
                                      `https://api.novajobs.us/api/admin/disapprove-course/${request.course_id}/${request.id}`,
                                      {
                                        headers: {
                                          Authorization: `${token}`,
                                        },
                                      }
                                    );
                                    toast.success("Course disapproved successfully.");
                                    fetchTrainerConnectivity();
                                  } catch (error) {
                                    console.error("Error disapproving course:", error);
                                    if (error.response?.status === 401) {
                                      toast.error("Session expired. Please log in again.");
                                      navigate("/admin/login");
                                    } else {
                                      toast.error("Error disapproving course. Please try again.");
                                    }
                                  }
                                }}
                              >
                                Disapprove
                              </button>
                            </td>
                          </tr>
                        ))}
                        {trainerConnectivity.length === 0 && (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No connectivity requests found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal for Allocating Trainer */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select a Trainer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <p>Loading trainers...</p>
          ) : (
            <select
              value={selectedTrainer}
              onChange={(e) => setSelectedTrainer(e.target.value)}
              className="form-select"
            >
              <option value="">-- Select Trainer --</option>
              {allTrainers.map((trainer) => (
                <option key={trainer.id} value={trainer.trainer.id}>
                  Name: {`${trainer.trainer.first_name} ${trainer.trainer.last_name}`} &nbsp; Email:{" "}
                  {trainer.trainer.email}
                </option>
              ))}
            </select>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleSave} disabled={loading}>
            Submit
          </button>
        </Modal.Footer>
        <div className="p-3">
          <h6>Allotted Trainers:</h6>
          {allottedTrainers.length === 0 ? (
            <p className="text-muted">No trainers allotted yet.</p>
          ) : (
            <ul className="list-group">
              {allottedTrainers.map((trainer) => (
                <li key={trainer.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {`${trainer.first_name} ${trainer.last_name} (${trainer.email})`}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteTrainer(trainer.id)}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ConnectTrainer;
