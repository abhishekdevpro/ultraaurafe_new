import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";
import FullPageLoader from "../home/FullPageLoader";

const AdminCourseList = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc"); // Default sort order
  const token = localStorage.getItem("adminToken");
  const coursesPerPage = 15;
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses(sortOrder);
  }, [token, sortOrder]);

  const fetchCourses = async (order) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/trainers/courses-info?order_by=${order}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setAllCourses(response.data.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Error fetching courses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
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

  const handleDelete = async (courseId) =>{
    try {
      const response = await axios.delete(`https://api.novajobs.us/api/uaadmin/delete-course/${courseId}`,{
        headers:{
          Authorization:token
        }
      })
      if(response.data.code === 200){
        toast.success(response.data.message || "Course Deleted Succesfully!")
        fetchCourses(sortOrder)
      }
      else{
        toast.error(response.data.message || "course Deletion unsuccessfull!")
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-wrapper">
      <AdminHeader  />
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
                  <div className="sort-filter">
                    <div className="form-group mb-0 d-flex align-items-center">
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
                    <div className="table-responsive" style={{ position: 'relative', overflowX: 'auto' }}>
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th style={{ position: 'sticky', left: 0, background: '#fff', zIndex: 100 }}>Course Title</th>
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
                              <td className="border" style={{ position: 'sticky', left: 0, background: '#fff', zIndex: 99 }}>
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
                              <td>${course.course_price}</td>
                              <td>
                                {new Date(course.created_at).toLocaleDateString()}
                              </td>
                              <td>{course.is_active ? "Active" : "Inactive"}</td>
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
                                    {course.is_active ? "Deactivate" : "Activate"}
                                  </button>
                                  <button
                                    className="btn btn-sm btn-secondary"
                                    style={{ minWidth: "60px" }}
                                    onClick={() => handleEditClick(course.id)}
                                  >
                                    Edit
                                  </button>
                                  <button 
                                    disabled={course.is_active}
                                    className="btn btn-sm btn-danger"
                                    style={{ minWidth: "70px" }}
                                    onClick={()=>handleDelete(course.id)}
                                  >
                                    Delete
                                  </button>
                                  <button
                                    onClick={() => handleDuplicate(course.id)}
                                    className="btn btn-sm btn-dark"
                                    style={{ minWidth: "85px" }}
                                  >
                                    Duplicate
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
    </div>
  );
};

export default AdminCourseList;
