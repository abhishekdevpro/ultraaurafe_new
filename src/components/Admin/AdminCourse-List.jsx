// // const Wrapper = styled.div`
// //   padding: 1rem;
// //   @media (min-width: 768px) {
// //     padding: 1.5rem;
// //   }
// //   @media (min-width: 1024px) {
// //     padding: 0 2rem;
// //   }
// // `;

// // const Card = styled.div`
// //   background: white;
// //   border-radius: 8px;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   overflow: hidden;
// // `;

// // const CardHeader = styled.div`
// //   padding: 1rem;
// //   border-bottom: 1px solid #e0e0e0;
// // `;

// // const CardTitle = styled.h3`
// //   font-size: 1.5rem;
// //   font-weight: bold;
// //   margin: 0;
// // `;

// // const CardContent = styled.div`
// //   padding: 1rem;
// // `;

// // const TableWrapper = styled.div`
// //   overflow-x: auto;
// // `;

// // const Table = styled.table`
// //   width: 100%;
// //   border-collapse: collapse;
// // `;

// // const Th = styled.th`
// //   background-color: #f2f2f2;
// //   padding: 12px;
// //   text-align: left;
// //   border-bottom: 2px solid #ddd;
// // `;

// // const Td = styled.td`
// //   padding: 12px;
// //   border-bottom: 1px solid #ddd;
// // `;

// // const PaginationWrapper = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   margin-top: 1rem;
// // `;

// // const PageButton = styled.button`
// //   background-color: ${(props) => (props.active ? "#4CAF50" : "#f1f1f1")};
// //   color: ${(props) => (props.active ? "white" : "black")};
// //   border: 1px solid #ddd;
// //   padding: 8px 16px;
// //   text-align: center;
// //   text-decoration: none;
// //   display: inline-block;
// //   font-size: 14px;
// //   margin: 0 4px;
// //   cursor: pointer;
// //   border-radius: 4px;

// //   &:hover {
// //     background-color: ${(props) => (props.active ? "#45a049" : "#ddd")};
// //   }

// //   &:disabled {
// //     cursor: not-allowed;
// //     opacity: 0.5;
// //   }
// // `;

// // import React, { useState, useEffect } from "react";
// // import styled from "styled-components";
// // import axios from "axios";
// // import Footer from "../footer";
// // import { AdminHeader } from "./AdminHeader";
// // import AdminSidebar from "./AdminSidebar";
// // import { Link, useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";

// // // ... (previous styled components remain the same)
// // const EditButton = styled.button`
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   padding: 10px 16px;
// //   font-size: 14px;
// //   font-weight: bold;
// //   border: none;
// //   border-radius: 5px;
// //   background-color: #3182ce; /* Blue */
// //   color: #fff;
// //   cursor: pointer;
// //   transition: background-color 0.3s ease, transform 0.2s ease;

// //   &:hover {
// //     background-color: #2b6cb0; /* Darker Blue */
// //     transform: scale(1.05); /* Slightly enlarge on hover */
// //   }

// //   i {
// //     margin-right: 8px; /* Space between icon and text */
// //   }
// // `;
// // const ActionButton = styled.button`
// //   padding: 6px 12px;
// //   border: none;
// //   border-radius: 4px;
// //   cursor: pointer;
// //   font-size: 14px;
// //   transition: background-color 0.3s;

// //   &.activate {
// //     background-color: #4caf50;
// //     color: white;

// //     &:hover {
// //       background-color: #45a049;
// //     }
// //   }

// //   &.deactivate {
// //     background-color: #f44336;
// //     color: white;

// //     &:hover {
// //       background-color: #da190b;
// //     }
// //   }
// // `;
// // const Buttons = styled.div`
// //   display: flex;
// //   gap: 1rem;
// // `;

// // const AdminCourseList = () => {
// //   const [allCourses, setAllCourses] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const token = localStorage.getItem("adminToken");
// //   const coursesPerPage = 15;

// //   useEffect(() => {
// //     fetchCourses();
// //   }, [token]);

// //   const fetchCourses = async () => {
// //     try {
// //       const response = await axios.get(
// //         "https://api.novajobs.us/api/trainers/all-courses",
// //         {
// //           headers: {
// //             Authorization: `${token}`,
// //           },
// //         }
// //       );
// //       setAllCourses(response.data.data);
// //       console.log(response.data.data, "ressssss");
// //     } catch (error) {
// //       console.error("Error fetching courses:", error);
// //     }
// //   };

// //   const handleActivateDeactivate = async (courseId, currentStatus) => {
// //     console.log(currentStatus, "Sccc");
// //     const url = currentStatus
// //       ? `https://api.novajobs.us/api/uaadmin/course-deactive/${courseId}`
// //       : `https://api.novajobs.us/api/uaadmin/course-active/${courseId}`;
// //     console.log(url, "FFFfff");
// //     try {
// //       await axios.get(url, {
// //         headers: {
// //           Authorization: `${token}`,
// //         },
// //       });
// //       // Refresh the course list after activation/deactivation
// //       toast.success(
// //         `Course ${
// //           currentStatus === "active" ? "deactivated" : "activated"
// //         } successfully!`
// //       );
// //       fetchCourses();
// //     } catch (error) {
// //       console.error("Error activating/deactivating course:", error);
// //       toast.error("Error activating/deactivating course. Please try again.");
// //     }
// //   };

// //   const indexOfLastCourse = currentPage * coursesPerPage;
// //   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
// //   const currentCourses = allCourses.slice(
// //     indexOfFirstCourse,
// //     indexOfLastCourse
// //   );
// //   const totalPages = Math.ceil(allCourses.length / coursesPerPage);

// //   const handlePageChange = (newPage) => {
// //     setCurrentPage(newPage);
// //   };
// //   const navigate = useNavigate();
// //   const handleClick = (courseId) => {
// //     navigate(`/edit-course/${courseId}`);
// //   };
// //   return (
// //     <div className="main-wrapper">
// //       <AdminHeader />
// //       <div className="breadcrumb-bar breadcrumb-bar-info">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-md-12 col-12">
// //               <div className="breadcrumb-list">
// //                 <h2 className="breadcrumb-title">Admin Dashboard</h2>
// //                 <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="page-content">
// //         <div className="container">
// //           <div className="row">
// //             <AdminSidebar />
// //             <div className="col-xl-9 col-lg-9">
// //               <Wrapper>
// //                 <Card>
// //                   <CardHeader>
// //                     <CardTitle>Course List</CardTitle>
// //                   </CardHeader>
// //                   <CardContent>
// //                     <TableWrapper>
// //                       <Table>
// //                         <thead>
// //                           <tr>
// //                             <Th>Course Title</Th>
// //                             <Th>Trainer Name</Th>
// //                             <Th>Price</Th>
// //                             <Th>Enrolled Students</Th>
// //                             <Th>Created At</Th>
// //                             <Th>Status</Th>
// //                             <Th>Action</Th>
// //                           </tr>
// //                         </thead>
// //                         <tbody>
// //                           {currentCourses.map((course) => (
// //                             <tr key={course.id}>
// //                               <Td>
// //                                 <Link to={`/course-info/${course.id}`}>
// //                                   {course.course_title}
// //                                 </Link>
// //                               </Td>
// //                               <Td>
// //                                 <Link
// //                                   to={`/instructor/instructor-profile/${course.trainer_id}`}
// //                                 >
// //                                   {`${course.trainer_first_name} ${course.trainer_last_name}`}
// //                                 </Link>
// //                               </Td>
// //                               <Td>${course.course_price}</Td>
// //                               <Td>{course.enrolled_student_count}</Td>
// //                               <Td>
// //                                 {new Date(
// //                                   course.created_at
// //                                 ).toLocaleDateString()}
// //                               </Td>
// //                               <Td>
// //                                 {course.is_active === 1 ? "Active" : "InActive"}
// //                               </Td>
// //                               <Td>
// //                                 {console.log(course.is_active, "jhcbjh")}
// //                                 <Buttons>
// //                                   <ActionButton
// //                                     className={
// //                                       course.is_active === 1
// //                                         ? "deactivate"
// //                                         : "activate"
// //                                     }
// //                                     onClick={() =>
// //                                       handleActivateDeactivate(
// //                                         course.id,
// //                                         course.is_active
// //                                       )
// //                                     }
// //                                   >
// //                                     {course.is_active === 1
// //                                       ? "Deactivate"
// //                                       : "Activate"}
// //                                   </ActionButton>
// //                                   <EditButton
// //                                     onClick={() => handleClick(course.id)}
// //                                   >
// //                                     Edit
// //                                   </EditButton>
// //                                 </Buttons>
// //                               </Td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </Table>
// //                     </TableWrapper>
// //                     <PaginationWrapper>
// //                       <PageButton
// //                         onClick={() => handlePageChange(currentPage - 1)}
// //                         disabled={currentPage === 1}
// //                       >
// //                         Previous
// //                       </PageButton>
// //                       {[...Array(totalPages).keys()].map((page) => (
// //                         <PageButton
// //                           key={page + 1}
// //                           onClick={() => handlePageChange(page + 1)}
// //                           active={currentPage === page + 1}
// //                         >
// //                           {page + 1}
// //                         </PageButton>
// //                       ))}
// //                       <PageButton
// //                         onClick={() => handlePageChange(currentPage + 1)}
// //                         disabled={currentPage === totalPages}
// //                       >
// //                         Next
// //                       </PageButton>
// //                     </PaginationWrapper>
// //                   </CardContent>
// //                 </Card>
// //               </Wrapper>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default AdminCourseList;
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Modal } from 'react-bootstrap';

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

// const ModalButton = styled.button`
//   padding: 8px 16px;
//   margin: 0 8px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// const ConfirmButton = styled(ModalButton)`
//   background-color: #4CAF50;
//   color: white;
//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const CancelButton = styled(ModalButton)`
//   background-color: #f44336;
//   color: white;
//   &:hover {
//     background-color: #d32f2f;
//   }
// `;

// const CourseList = () => {
//   const [allCourses, setAllCourses] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const token = localStorage.getItem('adminToken');
//   const coursesPerPage = 10;

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get('https://api.novajobs.us/api/trainers/all-courses', {
//         headers: {
//           Authorization: `${token}`
//         }
//       });
//       setAllCourses(response.data.data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//       toast.error('Error fetching courses. Please try again.');
//     }
//   };

//   const handleActivateDeactivate = (course) => {
//     setSelectedCourse(course);
//     setShowConfirmModal(true);
//   };

//   const confirmActivateDeactivate = async () => {
//     if (!selectedCourse) return;

//     const url = selectedCourse.is_active
//       ? `https://api.novajobs.us/api/uaadmin/course-deactive/${selectedCourse.id}`
//       : `https://api.novajobs.us/api/uaadmin/course-active/${selectedCourse.id}`;

//     try {
//       await axios.get(url, {
//         headers: {
//           Authorization: `${token}`
//         }
//       });
//       toast.success(`Course ${selectedCourse.is_active ? 'deactivated' : 'activated'} successfully!`);

//       // Update the course status in the local state
//       setAllCourses(prevCourses =>
//         prevCourses.map(course =>
//           course.id === selectedCourse.id
//             ? { ...course, is_active: !course.is_active }
//             : course
//         )
//       );
//     } catch (error) {
//       console.error('Error activating/deactivating course:', error);
//       toast.error('Error activating/deactivating course. Please try again.');
//     }
//     setShowConfirmModal(false);
//   };

//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);
//   const totalPages = Math.ceil(allCourses.length / coursesPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <Wrapper>
//       <Card>
//         <CardHeader>
//           <CardTitle>Course List</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <TableWrapper>
//             <Table>
//               <thead>
//                 <tr>
//                   <Th>Title</Th>
//                   <Th>Trainers</Th>
//                   <Th>Created At</Th>
//                   <Th>Status</Th>
//                   <Th>Actions</Th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentCourses.map((course) => (
//                   <tr key={course.id}>
//                     <Td>{course.course_title}</Td>
//                     <Td>{course.trainer_first_name} {course.trainer_last_name}</Td>
//                     <Td>{new Date(course.created_at).toLocaleDateString()}</Td>
//                     <Td>{course.is_active ? "Active" : "Inactive"}</Td>
//                     <Td>
//                       <Button
//                         active={course.is_active}
//                         onClick={() => handleActivateDeactivate(course)}
//                       >
//                         {course.is_active ? 'Deactivate' : 'Activate'}
//                       </Button>
//                     </Td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </TableWrapper>
//           <PaginationWrapper>
//             <PageButton
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </PageButton>
//             {[...Array(totalPages).keys()].map((page) => (
//               <PageButton
//                 key={page + 1}
//                 onClick={() => handlePageChange(page + 1)}
//                 active={currentPage === page + 1}
//               >
//                 {page + 1}
//               </PageButton>
//             ))}
//             <PageButton
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </PageButton>
//           </PaginationWrapper>
//         </CardContent>
//       </Card>

//       <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Action</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to {selectedCourse?.is_active ? 'deactivate' : 'activate'} this course?
//         </Modal.Body>
//         <Modal.Footer>
//           <CancelButton onClick={() => setShowConfirmModal(false)}>
//             Cancel
//           </CancelButton>
//           <ConfirmButton onClick={confirmActivateDeactivate}>
//             Confirm
//           </ConfirmButton>
//         </Modal.Footer>
//       </Modal>
//     </Wrapper>
//   );
// };

// export default CourseList;
  
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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     fetchCourses(sortOrder);
  //   }, 300); // 300ms delay

  //   return () => clearTimeout(timer);
  // }, [token, sortOrder]);

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

  const handleDelete = async (courseId) => {
    // if(courseId){
    //   return
    // }

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
  // console.log(currentCourses,"currentCourses");

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
                                    {course.is_active
                                      ? "Deactivate"
                                      : "Activate"}
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
                                    onClick={() => handleDelete(course.id)}
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
                                  <button
                                    className="btn btn-sm btn-secondary"
                                    style={{ minWidth: "60px" }}
                                    onClick={() => openModal(course.id)}
                                  >
                                    Allot
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
                                                className="btn btn-sm btn-danger"
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
    </div>
  );
};

export default AdminCourseList;
