// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Footer from "../footer";
// import { AdminHeader } from "./AdminHeader";
// import AdminSidebar from "./AdminSidebar";
// import { toast } from 'react-toastify';

// const Wrapper = styled.div`
//   padding: 1rem;
//   @media (min-width: 768px) {
//     padding: 1.5rem;
//   }
//   @media (min-width: 1024px) {
//     padding: 0 2rem;
//   }
// `;

// const Card = styled.div`
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
// `;

// const CardHeader = styled.div`
//   padding: 1rem;
//   border-bottom: 1px solid #e0e0e0;
// `;

// const CardTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin: 0;
// `;

// const CardContent = styled.div`
//   padding: 1rem;
// `;

// const TableWrapper = styled.div`
//   overflow-x: auto;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const Th = styled.th`
//   background-color: #f2f2f2;
//   padding: 12px;
//   text-align: left;
//   border-bottom: 2px solid #ddd;
// `;

// const Td = styled.td`
//   padding: 12px;
//   border-bottom: 1px solid #ddd;
// `;

// const Button = styled.button`
//   background-color: ${props => props.active ? '#f44336' : '#4CAF50'};
//   color: white;
//   border: none;
//   padding: 8px 16px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 14px;
//   margin: 4px 2px;
//   cursor: pointer;
//   border-radius: 4px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: ${props => props.active ? '#d32f2f' : '#45a049'};
//   }
// `;

// const PaginationWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const PageButton = styled.button`
//   background-color: ${props => props.active ? '#4CAF50' : '#f1f1f1'};
//   color: ${props => props.active ? 'white' : 'black'};
//   border: 1px solid #ddd;
//   padding: 8px 16px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 14px;
//   margin: 0 4px;
//   cursor: pointer;
//   border-radius: 4px;

//   &:hover {
//     background-color: ${props => props.active ? '#45a049' : '#ddd'};
//   }

//   &:disabled {
//     cursor: not-allowed;
//     opacity: 0.5;
//   }
// `;

// const StudentList = () => {
//   const [allStudents, setAllStudents] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const token = localStorage.getItem('adminToken');
//   const studentsPerPage = 10;

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get('https://api.novajobs.us/api/uaadmin/students', {
//         headers: {
//           Authorization: `${token}`
//         }
//       });
//       setAllStudents(response.data.data);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   const handleActivateDeactivate = async (studentId, isActive) => {
//     console.log(isActive);
//     const url = isActive
//       ? `https://api.novajobs.us/api/uaadmin/student-deactive/${studentId}`
//       : `https://api.novajobs.us/api/uaadmin/student-active/${studentId}`;

//     try {
//       await axios.get(url, {
//         headers: {
//           Authorization: `${token}`
//         }
//       });
//       // Refresh the student list after activation/deactivation
//       toast.success(`Student ${isActive ? 'deactivated' : 'activated'} successfully!`);
//       fetchStudents();
//     } catch (error) {
//       console.error('Error activating/deactivating student:', error);
//       toast.error('Error activating/deactivating student. Please try again.');

//     }
//   };

//   const indexOfLastStudent = currentPage * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
//   const currentStudents = allStudents.slice(indexOfFirstStudent, indexOfLastStudent);
//   const totalPages = Math.ceil(allStudents.length / studentsPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div className="main-wrapper">
//       <AdminHeader />
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12">
//               <div className="breadcrumb-list">
//                 <h2 className="breadcrumb-title">Admin Dashboard</h2>
//                 <nav aria-label="breadcrumb" className="page-breadcrumb">
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             <AdminSidebar />
//             <div className="col-xl-9 col-lg-9">
//               <Wrapper>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Student List</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <TableWrapper>
//                       <Table>
//                         <thead>
//                           <tr>
//                             <Th>Name</Th>
//                             <Th>Email</Th>
//                             <Th>Phone Number</Th>
//                             <Th>Created At</Th>
//                             <Th>Status</Th>
//                             <Th>Actions</Th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {currentStudents.map((student) => (
//                             <tr key={student.id}>
//                               <Td>{`${student.first_name} ${student.last_name}`}</Td>
//                               <Td>{student.email}</Td>
//                               <Td>{student.phone}</Td>
//                               <Td>{new Date(student.created_at).toLocaleDateString()}</Td>
//                               <Td>{student.is_active === 1?"Active":"InActive"}</Td>
//                               <Td>
//                                 <Button
//                                   active={student.is_active}
//                                   onClick={() => handleActivateDeactivate(student.id, student.is_active)}
//                                 >
//                                   {student.is_active ? 'Deactivate' : 'Activate'}
//                                 </Button>
//                               </Td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </Table>
//                     </TableWrapper>
//                     <PaginationWrapper>
//                       <PageButton
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                       >
//                         Previous
//                       </PageButton>
//                       {[...Array(totalPages).keys()].map((page) => (
//                         <PageButton
//                           key={page + 1}
//                           onClick={() => handlePageChange(page + 1)}
//                           active={currentPage === page + 1}
//                         >
//                           {page + 1}
//                         </PageButton>
//                       ))}
//                       <PageButton
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                       >
//                         Next
//                       </PageButton>
//                     </PaginationWrapper>
//                   </CardContent>
//                 </Card>
//               </Wrapper>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default StudentList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";

const StudentList = () => {
  const [allStudent, setAllStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const token = localStorage.getItem("adminToken");
  const coursesPerPage = 15;

  useEffect(() => {
    fetchCourses();
  }, [token]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/uaadmin/students",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setAllStudents(response.data.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Error fetching courses. Please try again.");
    }
  };

  const handleActivateDeactivate = (student) => {
    setSelectedStudent(student);
    setShowConfirmModal(true);
  };

  const confirmActivateDeactivate = async () => {
    if (!selectedStudent) return;

    const url = selectedStudent.is_active
      ? `https://api.novajobs.us/api/uaadmin/student-deactive/${selectedStudent.id}`
      : `https://api.novajobs.us/api/uaadmin/student-active/${selectedStudent.id}`;

    try {
      await axios.get(url, {
        headers: {
          Authorization: `${token}`,
        },
      });
      toast.success(
        `Student ${
          selectedStudent.is_active ? "deactivated" : "activated"
        } successfully!`
      );

      setAllStudents((prevCourses) =>
        prevCourses.map((course) =>
          course.id === selectedStudent.id
            ? { ...course, is_active: !course.is_active }
            : course
        )
      );
    } catch (error) {
      console.error("Error activating/deactivating student:", error);
      toast.error("Error activating/deactivating student. Please try again.");
    }
    setShowConfirmModal(false);
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const AllStudents = allStudent.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(allStudent.length / coursesPerPage);

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
                <div className="card-header">
                  <h5 className="card-title">Student List</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Student Name</th>
                          <th>Email</th>
                          <th>Phone no.</th>
                          <th>Created At</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AllStudents.map((student) => (
                          <tr key={student.id}>
                            <td>
                              <Link>
                                {student.first_name} {student.last_name}
                              </Link>
                            </td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>
                              {new Date(
                                student.created_at
                              ).toLocaleDateString()}
                            </td>
                            <td>{student.is_active ? "Active" : "Inactive"}</td>
                            <td>
                              <div className="actions">
                                <button
                                  className={`btn btn-sm ${
                                    student.is_active
                                      ? "btn-danger"
                                      : "btn-success"
                                  }`}
                                  onClick={() =>
                                    handleActivateDeactivate(student)
                                  }
                                >
                                  {student.is_active
                                    ? "Deactivate"
                                    : "Activate"}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
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
                      {[...Array(totalPages).keys()].map((page) => (
                        <li
                          key={page + 1}
                          className={`page-item ${
                            currentPage === page + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(page + 1)}
                          >
                            {page + 1}
                          </button>
                        </li>
                      ))}
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
          {selectedStudent?.is_active ? "deactivate" : "activate"} this course?
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

export default StudentList;
