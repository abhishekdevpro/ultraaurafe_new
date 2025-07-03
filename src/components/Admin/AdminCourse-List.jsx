import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";
import FullPageLoader from "../home/FullPageLoader";

import {
  Trash,
  Eye,
  Edit,
  Trash2,
  Copy,
  Users,
  ToggleLeft,
  ToggleRight,
} from "react-feather";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
  rel="stylesheet"
/>;

const AdminCourseList = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc"); // Default sort order
  const [statusFilter, setStatusFilter] = useState("all"); // Add this line for status filter
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);
  const [loadingCourseDetails, setLoadingCourseDetails] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null); // Stores the target (section or lecture) to delete
  const [showCourseNotesModal, setShowCourseNotesModal] = useState(false);
  const [courseNotes, setCourseNotes] = useState(null);
  const [loadingCourseNotes, setLoadingCourseNotes] = useState(false);
  const token = localStorage.getItem("adminToken");
  const coursesPerPage = 15;
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses(sortOrder);
  }, [token, sortOrder, statusFilter]);

  const fetchCourses = async (order) => {
    setLoading(true);
    try {
      let url = `https://api.novajobs.us/api/trainers/courses-info?order_by=${order}`;

      // Add status filter parameter if not "all"
      if (statusFilter !== "all") {
        url += `&is_active=${statusFilter === "active" ? 1 : 0}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setAllCourses(response.data.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Error fetching courses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCourseDetails = async (courseId) => {
    setLoadingCourseDetails(true);
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/students/pro/course-details/${courseId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setSelectedCourseDetails(response.data.data); // Set course details including sections
      setShowCourseModal(true);
    } catch (error) {
      console.error("Error fetching course details:", error);
      toast.error("Error fetching course details. Please try again.");
    } finally {
      setLoadingCourseDetails(false);
    }
  };

  const fetchCourseNotes = async (courseId) => {
    setLoadingCourseNotes(true);
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/uaadmin/course-note/${courseId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setCourseNotes(response.data);
      setShowCourseNotesModal(true);
    } catch (error) {
      console.error("Error fetching course notes:", error);
      toast.error("Error fetching course notes. Please try again.");
    } finally {
      setLoadingCourseNotes(false);
    }
  };

  const deleteSection = async (courseId, sectionId) => {
    try {
      await axios.delete(
        `https://api.novajobs.us/api/trainers/section/${courseId}/${sectionId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      toast.success("Section deleted successfully.");
      // Refresh course details after deletion
      fetchCourseDetails(courseId);
    } catch (error) {
      console.error("Error deleting section:", error);
      toast.error("Failed to delete section. Please try again.");
    }
  };

  const deleteLecture = async (courseId, sectionId, lectureId) => {
    try {
      await axios.delete(
        `https://api.novajobs.us/api/trainers/lecture/${courseId}/${sectionId}/${lectureId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      toast.success("Lecture deleted successfully.");
      // Refresh course details after deletion
      fetchCourseDetails(courseId);
    } catch (error) {
      console.error("Error deleting lecture:", error);
      toast.error("Failed to delete lecture. Please try again.");
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;

    const { type, courseId, sectionId, lectureId } = deleteTarget;

    try {
      if (type === "section") {
        await deleteSection(courseId, sectionId); // Use deleteSection here
      } else if (type === "lecture") {
        await deleteLecture(courseId, sectionId, lectureId); // Use deleteLecture here
      }

      // Refresh course details after deletion
      fetchCourseDetails(courseId);
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Failed to delete item. Please try again.");
    } finally {
      setShowDeleteConfirmModal(false);
      setDeleteTarget(null);
    }
  };

  const closeCourseModal = () => {
    setShowCourseModal(false);
    setSelectedCourseDetails(null);
  };

  const closeCourseNotesModal = () => {
    setShowCourseNotesModal(false);
    setCourseNotes(null);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleActivateDeactivate = (course) => {
    setSelectedCourse(course);
    setShowConfirmModal(true);
  };

  const confirmActivateDeactivate = async () => {
    if (!selectedCourse) return;

    const url = selectedCourse.is_active
      ? `https://api.novajobs.us/api/uaadmin/course-deactive/${selectedCourse.id}`
      : `https://api.novajobs.us/api/uaadmin/course-active/${selectedCourse.id}`;

    try {
      await axios.get(url, {
        headers: {
          Authorization: `${token}`,
        },
      });
      toast.success(
        `Course ${
          selectedCourse.is_active ? "deactivated" : "activated"
        } successfully!`
      );

      setAllCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === selectedCourse.id
            ? { ...course, is_active: !course.is_active }
            : course
        )
      );
    } catch (error) {
      console.error("Error activating/deactivating course:", error);
      toast.error("Error activating/deactivating course. Please try again.");
    }
    setShowConfirmModal(false);
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = allCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(allCourses.length / coursesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleEditClick = (courseId) => {
    navigate(`/edit-course/${courseId}`);
  };

  const handleDuplicate = async (courseId) => {
    try {
      if (!courseId) {
        return;
      }
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/duplicate-course/${courseId}`,
        {
          id: courseId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response) {
        toast.success(
          response.data.message || "Course Duplicated Successfully"
        );
        fetchCourses(sortOrder);
      } else {
        toast.error(response.error || "Error while duplicating the course");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      const response = await axios.delete(
        `https://api.novajobs.us/api/uaadmin/delete-course/${courseId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.code === 200) {
        toast.success(response.data.message || "Course Deleted Succesfully!");
        fetchCourses(sortOrder);
      } else {
        toast.error(response.data.message || "course Deletion unsuccessfull!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [allTrainers, setAllTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [allottedTrainers, setAllottedTrainers] = useState([]);

  const openModal = async (courseId) => {
    setSelectedCourseId(courseId);
    setShowModal(true);
    await fetchTrainers();
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTrainer("");
  };

  const fetchTrainers = async () => {
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
      setAllTrainers(response.data.data);
    } catch (error) {
      console.error("Error fetching trainers:", error);
      toast.error("Error fetching trainers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedTrainer) {
      toast.error("Please select a trainer.");
      return;
    }

    try {
      await axios.post(
        "https://api.novajobs.us/api/uaadmin/allot-trainer",
        {
          course_id: selectedCourseId,
          trainer_id: Number(selectedTrainer), // 👈 Convert string to number
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      toast.success("Trainer allotted successfully.");
      closeModal();
    } catch (error) {
      console.error("Error allotting trainer:", error);
      toast.error("Failed to allot trainer. Try again.");
    }
  };
  const fetchAllottedTrainers = async () => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/uaadmin/allot-trainer/${selectedCourseId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setAllottedTrainers(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching allotted trainers:", error);
    }
  };
  useEffect(() => {
    if (showModal) {
      fetchAllottedTrainers();
    }
  }, [showModal]);
  const handleDeleteTrainer = async (trainerId) => {
    try {
      await axios.delete(
        "https://api.novajobs.us/api/uaadmin/alloted-trainer",
        {
          headers: {
            Authorization: `${token}`,
          },
          data: JSON.stringify({
            course_id: selectedCourseId,
            trainer_id: trainerId,
          }),
        }
      );

      toast.success("Trainer removed successfully.");
      fetchAllottedTrainers(); // Refresh the list
    } catch (error) {
      console.error("Error removing trainer:", error);
      toast.error("Failed to remove trainer.");
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const openDeleteConfirmModal = (
    type,
    courseId,
    sectionId,
    lectureId = null
  ) => {
    setDeleteTarget({ type, courseId, sectionId, lectureId });
    setShowDeleteConfirmModal(true);
  };

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
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Course List</h5>
                  <div className="sort-filter d-flex gap-2">
                    <div className="form-group mb-0">
                      <select
                        id="statusFilter"
                        className="form-select form-select-sm"
                        value={statusFilter}
                        onChange={handleStatusFilterChange}
                      >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="form-group mb-0">
                      <select
                        id="sortOrder"
                        className="form-select form-select-sm"
                        value={sortOrder}
                        onChange={handleSortChange}
                      >
                        <option value="desc">Newest First</option>
                        <option value="asc">Oldest First</option>
                      </select>
                    </div>
                  </div>
                </div>
                {loading ? (
                  <FullPageLoader />
                ) : (
                  <div className="card-body">
                    <div
                      className="table-responsive"
                      style={{ position: "relative", overflowX: "auto" }}
                    >
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th
                              style={{
                                position: "sticky",
                                left: 0,
                                background: "#fff",
                                zIndex: 100,
                              }}
                            >
                              Course Title
                            </th>
                            <th>Trainer Name</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentCourses.map((course) => (
                            <tr key={course.id}>
                              <td
                                className="border"
                                style={{
                                  position: "sticky",
                                  left: 0,
                                  background: "#fff",
                                  zIndex: 99,
                                }}
                              >
                                <div className="d-flex align-items-center justify-content-between">
                                  <Link to={`/course-info/${course.id}`}>
                                    {course.course_title}
                                  </Link>
                                  <button
                                    className="btn btn-sm btn-info ms-2"
                                    onClick={() =>
                                      fetchCourseDetails(course.id)
                                    }
                                  >
                                    View
                                  </button>
                                </div>
                              </td>
                              <td>
                                <Link
                                  to={`/instructor/instructor-profile/${course.trainer_id}`}
                                >
                                  {`${course.trainer_first_name} ${course.trainer_last_name}`}
                                </Link>
                              </td>
                              <td>${course.course_price}</td>
                              <td>
                                {new Date(
                                  course.created_at
                                ).toLocaleDateString()}
                              </td>
                              <td>
                                {course.is_active ? "Active" : "Inactive"}
                              </td>
                              <td>
                                <div className="actions d-flex gap-1">
                                  <button
                                    className={`btn btn-sm ${
                                      course.is_active
                                        ? "btn-danger"
                                        : "btn-success"
                                    }`}
                                    style={{ minWidth: "85px" }}
                                    onClick={() =>
                                      handleActivateDeactivate(course)
                                    }
                                  >
                                    {course.is_active ? (
                                      <ToggleLeft size={16} />
                                    ) : (
                                      <ToggleRight size={16} />
                                    )}
                                  </button>
                                  <button
                                    className="btn btn-sm btn-secondary"
                                    style={{ minWidth: "60px" }}
                                    onClick={() => handleEditClick(course.id)}
                                  >
                                    <Edit size={16} />
                                  </button>
                                  <button
                                    disabled={course.is_active}
                                    className="btn btn-sm btn-danger"
                                    style={{ minWidth: "70px" }}
                                    onClick={() => handleDelete(course.id)}
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                  <button
                                    onClick={() => handleDuplicate(course.id)}
                                    className="btn btn-sm btn-dark"
                                    style={{ minWidth: "85px" }}
                                  >
                                    <Copy size={16} />
                                  </button>
                                  <button
                                    className="btn btn-sm btn-secondary"
                                    style={{
                                      minWidth: "60px",
                                      cursor: course.is_active
                                        ? "pointer"
                                        : "not-allowed",
                                      opacity: course.is_active ? 1 : 0.6,
                                    }}
                                    onClick={() =>
                                      course.is_active && openModal(course.id)
                                    }
                                    disabled={!course.is_active}
                                  >
                                    <Users size={16} />
                                  </button>
                                  <button
                                    className="btn btn-sm btn-info"
                                    style={{ minWidth: "60px" }}
                                    onClick={() => fetchCourseNotes(course.id)}
                                    title="View Course Notes"
                                  >
                                    <Eye size={16} />
                                  </button>

                                  {/* Modal */}
                                  <Modal
                                    show={showModal}
                                    onHide={closeModal}
                                    centered
                                  >
                                    <Modal.Header closeButton>
                                      <Modal.Title>
                                        Select a Trainer
                                      </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      {loading ? (
                                        <p>Loading trainers...</p>
                                      ) : (
                                        <select
                                          value={selectedTrainer}
                                          onChange={(e) =>
                                            setSelectedTrainer(e.target.value)
                                          }
                                          className="form-select"
                                        >
                                          <option value="">
                                            -- Select Trainer --
                                          </option>
                                          {allTrainers.map((trainer) => (
                                            <option
                                              key={trainer.id}
                                              value={trainer.trainer.id}
                                            >
                                              Name:{" "}
                                              {`${trainer.trainer.first_name} ${trainer.trainer.last_name}`}{" "}
                                              &nbsp; Email:{" "}
                                              {trainer.trainer.email}
                                            </option>
                                          ))}
                                        </select>
                                      )}
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <button
                                        className="btn btn-secondary"
                                        onClick={closeModal}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="btn btn-success"
                                        onClick={handleSave}
                                        disabled={loading}
                                      >
                                        Save
                                      </button>
                                    </Modal.Footer>
                                    <div className="p-3">
                                      <h6>Allotted Trainers:</h6>
                                      {allottedTrainers.length === 0 ? (
                                        <p className="text-muted">
                                          No trainers allotted yet.
                                        </p>
                                      ) : (
                                        <ul className="list-group">
                                          {allottedTrainers.map((trainer) => (
                                            <li
                                              key={trainer.id}
                                              className="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                              {`${trainer.first_name} ${trainer.last_name} (${trainer.email})`}
                                              <button
                                                className="btn btn-sm btn-white"
                                                onClick={() =>
                                                  handleDeleteTrainer(
                                                    trainer.id
                                                  )
                                                }
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
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                <div className="card-footer">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      {/* Previous Button */}
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          Previous
                        </button>
                      </li>

                      {/* First Page */}
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(1)}
                        >
                          1
                        </button>
                      </li>

                      {/* Show second page if necessary */}
                      {currentPage > 3 && totalPages > 4 && (
                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(2)}
                          >
                            2
                          </button>
                        </li>
                      )}

                      {/* Dots if needed */}
                      {currentPage > 4 && totalPages > 5 && (
                        <li className="page-item disabled">
                          <span className="page-link">...</span>
                        </li>
                      )}

                      {/* Middle Pages */}
                      {Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
                        .filter((page) => page > 2 && page < totalPages - 1)
                        .map((page) => (
                          <li
                            key={page}
                            className={`page-item ${
                              currentPage === page ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </button>
                          </li>
                        ))}

                      {/* Dots before last pages if necessary */}
                      {currentPage < totalPages - 3 && totalPages > 5 && (
                        <li className="page-item disabled">
                          <span className="page-link">...</span>
                        </li>
                      )}

                      {/* Show last two pages */}
                      {totalPages > 1 && (
                        <>
                          {totalPages > 3 && (
                            <li
                              className={`page-item ${
                                currentPage === totalPages - 1 ? "active" : ""
                              }`}
                            >
                              <button
                                className="page-link"
                                onClick={() => handlePageChange(totalPages - 1)}
                              >
                                {totalPages - 1}
                              </button>
                            </li>
                          )}
                          <li
                            className={`page-item ${
                              currentPage === totalPages ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(totalPages)}
                            >
                              {totalPages}
                            </button>
                          </li>
                        </>
                      )}

                      {/* Next Button */}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to{" "}
          {selectedCourse?.is_active ? "deactivate" : "activate"} this course?
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={confirmActivateDeactivate}
          >
            Confirm
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Viewing Course Details */}
      <Modal show={showCourseModal} onHide={closeCourseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Course Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadingCourseDetails ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading course details...</p>
            </div>
          ) : selectedCourseDetails ? (
            <div>
              <h5 className="text-dark">
                {selectedCourseDetails.course_title}
              </h5>

              <h6 className="text-primary mt-4">Sections</h6>
              {selectedCourseDetails.section_response &&
              selectedCourseDetails.section_response.length > 0 ? (
                <div className="accordion" id="sectionsAccordion">
                  {selectedCourseDetails.section_response.map((section) => (
                    <div className="accordion-item" key={section.id}>
                      <h2
                        className="accordion-header d-flex justify-content-between align-items-center"
                        id={`heading-${section.id}`}
                      >
                        <button
                          className={`accordion-button ${
                            expandedSections[section.id] ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleSection(section.id)}
                        >
                          {section.section_name}
                        </button>
                        <button
                          className="btn btn-sm btn-danger mx-2"
                          onClick={() =>
                            openDeleteConfirmModal(
                              "section",
                              selectedCourseDetails.course_id,
                              section.id
                            )
                          }
                        >
                          <Trash size={16} />
                        </button>
                      </h2>
                      <div
                        id={`collapse-${section.id}`}
                        className={`accordion-collapse collapse ${
                          expandedSections[section.id] ? "show" : ""
                        }`}
                        data-bs-parent="#sectionsAccordion"
                      >
                        <div className="accordion-body">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: section.section_objective,
                            }}
                            className="text-muted"
                          ></p>
                          <h6 className="text-secondary">Lectures</h6>
                          <ul className="list-group">
                            {section.lectures.map((lecture) => (
                              <li
                                key={lecture.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <span>{lecture.lecture_name}</span>
                                <button
                                  className="btn btn-sm btn-outline-danger ms-2"
                                  onClick={() =>
                                    openDeleteConfirmModal(
                                      "lecture",
                                      selectedCourseDetails.course_id,
                                      section.id,
                                      lecture.id
                                    )
                                  }
                                >
                                  <Trash />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">
                  No sections available for this course.
                </p>
              )}
            </div>
          ) : (
            <p className="text-muted">No course details available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeCourseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Confirming Deletion */}
      <Modal
        show={showDeleteConfirmModal}
        onHide={() => setShowDeleteConfirmModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this{" "}
          {deleteTarget?.type === "section" ? "section" : "lecture"}?
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowDeleteConfirmModal(false)}
          >
            Cancel
          </button>
          <button className="btn btn-danger" onClick={handleDeleteConfirm}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Course Notes */}
      <Modal
        show={showCourseNotesModal}
        onHide={closeCourseNotesModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Trainer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadingCourseNotes ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading notes...</p>
            </div>
          ) : courseNotes ? (
            <div>
              {courseNotes.status === "success" &&
              courseNotes.data &&
              courseNotes.data.length > 0 ? (
                <div>
                  <h6 className="text-primary mb-3">Trainer Note Details</h6>

                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <th style={{ width: "30%" }}>Note Text</th>
                          <td>{courseNotes.data[0].text || "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Trainer Name</th>
                          <td>
                            {courseNotes.data[0].trainer_first_name}{" "}
                            {courseNotes.data[0].trainer_last_name}
                          </td>
                        </tr>
                        <tr>
                          <th>Trainer Email</th>
                          <td>{courseNotes.data[0].trainer_email || "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Trainer Phone</th>
                          <td>{courseNotes.data[0].trainer_phone || "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Created At</th>
                          <td>
                            {courseNotes.data[0].created_at
                              ? new Date(
                                  courseNotes.data[0].created_at
                                ).toLocaleString()
                              : "N/A"}
                          </td>
                        </tr>
                        <tr>
                          <th>Updated At</th>
                          <td>
                            {courseNotes.data[0].updated_at
                              ? new Date(
                                  courseNotes.data[0].updated_at
                                ).toLocaleString()
                              : "N/A"}
                          </td>
                        </tr>
                        <tr>
                          <th>Links</th>
                          <td>{courseNotes.data[0].links || "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Photos</th>
                          <td>{courseNotes.data[0].photos || "N/A"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <p className="text-muted">No Trainer notes available.</p>
              )}
            </div>
          ) : (
            <p className="text-muted">No Trainer notes available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeCourseNotesModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminCourseList;
