import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";
import FullPageLoader from "../home/FullPageLoader";

import { Eye, Copy, X } from "react-feather";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
  rel="stylesheet"
/>;

const NotesList = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc"); // Default sort order
  const [statusFilter, setStatusFilter] = useState("all"); // Add this line for status filter
  // Stores the target (section or lecture) to delete
  const [showCourseNotesModal, setShowCourseNotesModal] = useState(false);
  const [courseNotes, setCourseNotes] = useState(null);
  const [loadingCourseNotes, setLoadingCourseNotes] = useState(false);
  const [notesType, setNotesType] = useState(""); // "trainer" or "student"
  const [showNoteTextModal, setShowNoteTextModal] = useState(false);
  const [selectedNoteText, setSelectedNoteText] = useState("");
  const token = localStorage.getItem("adminToken");
  const coursesPerPage = 15;

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

  const fetchCourseNotes = async (courseId, type) => {
    setLoadingCourseNotes(true);
    setNotesType(type);
    try {
      let url = `https://api.novajobs.us/api/uaadmin/course-note/${courseId}`;

      // Add query parameter for student notes
      if (type === "student") {
        url += "?for=students";
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setCourseNotes(response.data);
      setShowCourseNotesModal(true);
    } catch (error) {
      console.error("Error fetching course notes:", error);
      toast.error("Error fetching course notes. Please try again.");
    } finally {
      setLoadingCourseNotes(false);
    }
  };

  const closeCourseNotesModal = () => {
    setShowCourseNotesModal(false);
    setCourseNotes(null);
    setNotesType("");
  };

  const openNoteTextModal = (noteText) => {
    setSelectedNoteText(noteText);
    setShowNoteTextModal(true);
  };

  const closeNoteTextModal = () => {
    setShowNoteTextModal(false);
    setSelectedNoteText("");
  };

  const copyToClipboard = async (htmlText) => {
    try {
      // Create a temporary div to extract text content from HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlText;
      const plainText = tempDiv.textContent || tempDiv.innerText || "";

      await navigator.clipboard.writeText(plainText);
      toast.success("Note text copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy text:", error);
      toast.error("Failed to copy text to clipboard");
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
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
                  <h5 className="card-title mb-0">Notes List</h5>
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
                      <table
                        className="table table-hover table-center mb-0"
                        style={{ minWidth: "1000px" }}
                      >
                        <thead>
                          <tr>
                            <th>Course Title</th>
                            <th>Trainer Name</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentCourses.map((course) => (
                            <tr key={course.id}>
                              <td>
                                <Link to={`/course-info/${course.id}`}>
                                  {course.course_title}
                                </Link>
                              </td>
                              <td>
                                <Link
                                  to={`/instructor/instructor-profile/${course.trainer_id}`}
                                >
                                  {`${course.trainer_first_name} ${course.trainer_last_name}`}
                                </Link>
                              </td>
                              <td>
                                {new Date(
                                  course.created_at
                                ).toLocaleDateString()}
                              </td>
                              <td>
                                {new Date(
                                  course.updated_at
                                ).toLocaleDateString()}
                              </td>
                              <td>
                                <div className="d-flex gap-2">
                                  <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() =>
                                      fetchCourseNotes(course.id, "trainer")
                                    }
                                    title="View Trainer Notes"
                                  >
                                    <Eye size={16} /> Trainer Notes
                                  </button>
                                  <button
                                    className="btn btn-sm btn-success"
                                    onClick={() =>
                                      fetchCourseNotes(course.id, "student")
                                    }
                                    title="View Students Notes"
                                  >
                                    <Eye size={16} /> Student Notes
                                  </button>
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

      {/* Modal for Course Notes */}
      <Modal
        show={showCourseNotesModal}
        onHide={closeCourseNotesModal}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">
            {notesType === "trainer"
              ? "Trainer Notes List"
              : "Student Notes List"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadingCourseNotes ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading notes...</p>
            </div>
          ) : courseNotes &&
            courseNotes.status === "success" &&
            Array.isArray(courseNotes.data) &&
            courseNotes.data.length > 0 ? (
            <div>
              <h6 className="text-primary mb-3">
                {notesType === "trainer" ? "Trainer Notes" : "Student Notes"}
              </h6>
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Note Text</th>
                      <th>Name </th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Created At</th>
                      <th>Updated At</th>
                      <th>Links</th>
                      <th>Photos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseNotes.data.map((note, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            {/* <div
                              dangerouslySetInnerHTML={{
                                __html: note.text || "N/A",
                              }}
                              style={{
                                maxWidth: "200px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            /> */}
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => openNoteTextModal(note.text || "")}
                              title="View Description"
                            >
                              <Eye size={16} />
                            </button>
                            {/* <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => copyToClipboard(note.text || "")}
                              title="Copy Text"
                            >
                              <Copy size={16} />
                            </button> */}
                          </div>
                        </td>
                        <td>
                          {note.trainer_first_name} {note.trainer_last_name}
                          {note.student_first_name} {note.student_last_name}
                        </td>
                        <td>
                          {note.trainer_email || note.student_email || "N/A"}
                        </td>
                        <td>
                          {note.trainer_phone || note.student_phone || "N/A"}
                        </td>
                        <td>
                          {note.created_at
                            ? new Date(note.created_at).toLocaleString()
                            : "N/A"}
                        </td>
                        <td>
                          {note.updated_at
                            ? new Date(note.updated_at).toLocaleString()
                            : "N/A"}
                        </td>
                        <td>{note.links || "N/A"}</td>
                        <td>
                          {note.photos && note.photos.length > 0 ? (
                            <div className="d-flex flex-wrap gap-2">
                              {note.photos.map((photo, idx) => (
                                <img
                                  key={idx}
                                  src={`https://api.novajobs.us${photo}`}
                                  alt={`Note ${index + 1} Photo ${idx + 1}`}
                                  style={{
                                    maxWidth: "80px",
                                    maxHeight: "60px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                  }}
                                />
                              ))}
                            </div>
                          ) : (
                            "N/A"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-muted">
              No {notesType === "trainer" ? "Trainer" : "Student"} notes
              available.
            </p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeCourseNotesModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Full Note Text */}
      <Modal
        show={showNoteTextModal}
        onHide={closeNoteTextModal}
        centered
        size="lg"
      >
        <Modal.Header>
          <Modal.Title className="text-primary">Note Description</Modal.Title>
          <button
            type="button"
            className="btn-close"
            onClick={closeNoteTextModal}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => copyToClipboard(selectedNoteText)}
              title="Copy Text"
            >
              <Copy size={16} className="me-2" />
              Copy Text
            </button>
          </div>
          <div
            className="border rounded p-3 bg-light"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: selectedNoteText || "No text available",
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeNoteTextModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotesList;
