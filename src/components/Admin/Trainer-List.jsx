
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Footer from "../footer";
// import { AdminHeader } from "./AdminHeader";
// import AdminSidebar from "./AdminSidebar";

// const Wrapper = styled.div`
//   padding: 1rem;
//   @media (min-width: 768px) {
//     padding: 1.5rem;
//   }
//   @media (min-width: 1024px) {
//     padding: 2rem;
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
//   background-color: ${props => props.active ? '#4CAF50' : '#f44336'};
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
// `;

// const TrainerList = () => {
//   const [trainers, setTrainers] = useState([]);
//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     const fetchTrainers = async () => {
//       try {
//         const response = await axios.get('https://api.novajobs.us/api/uaadmin/trainers', {
//           headers: {
//             Authorization: `${token}`
//           }
//         });
//         setTrainers(response.data.data);
//       } catch (error) {
//         console.error('Error fetching trainers:', error);
//       }
//     };

//     fetchTrainers();
//   }, []);

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
//                     <CardTitle>Trainer List</CardTitle>
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
//                             <Th>Actions</Th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {trainers.map(({ trainer }) => (
//                             <tr key={trainer.id}>
//                               <Td>{`${trainer.first_name} ${trainer.last_name}`}</Td>
//                               <Td>{trainer.email}</Td>
//                               <Td>{trainer.phone}</Td>
//                               <Td>{new Date(trainer.created_at).toLocaleDateString()}</Td>
//                               <Td>
//                         <Button
                         
//                         >
//                           Deactivate
//                         </Button>
//                       </Td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </Table>
//                     </TableWrapper>
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

// export default TrainerList;

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Footer from "../footer";
// import { AdminHeader } from "./AdminHeader";
// import AdminSidebar from "./AdminSidebar";
// import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? '#4CAF50' : '#f1f1f1'};
  color: ${props => props.active ? 'white' : 'black'};
  border: 1px solid #ddd;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.active ? '#45a049' : '#ddd'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// const TrainerList = () => {
//   const [allTrainers, setAllTrainers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const token = localStorage.getItem('adminToken');
//   const trainersPerPage = 10;

//   useEffect(() => {
//     const fetchTrainers = async () => {
//       try {
//         const response = await axios.get('https://api.novajobs.us/api/uaadmin/trainers', {
//           headers: {
//             Authorization: `${token}`
//           }
//         });
//         setAllTrainers(response.data.data);
//       } catch (error) {
//         console.error('Error fetching trainers:', error);
//       }
//     };

//     fetchTrainers();
//   }, [token]);

//   const indexOfLastTrainer = currentPage * trainersPerPage;
//   const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
//   const currentTrainers = allTrainers.slice(indexOfFirstTrainer, indexOfLastTrainer);
//   const totalPages = Math.ceil(allTrainers.length / trainersPerPage);

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
//                     <CardTitle>Trainer List</CardTitle>
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
//                             <Th>Actions</Th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {currentTrainers.map(({ trainer }) => (
//                             <tr key={trainer.id}>
                             
//                              <Td>
//                              <Link to={`/instructor/instructor-profile/${trainer.id}`}>
//                               {`${trainer.first_name} ${trainer.last_name}`}
//                              </Link>
                               
//                               </Td>
//                               <Td>{trainer.email}</Td>
//                               <Td>{trainer.phone}</Td>
//                               <Td>{new Date(trainer.created_at).toLocaleDateString()}</Td>
//                               <Td>
//                                 <Button>
//                                   Deactivate
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

// export default TrainerList;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from "../footer";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// ... (previous styled components remain unchanged)

const ActionButton = styled(Button)`
  background-color: ${props => props.isActive ? '#f44336' : '#4CAF50'};
  
  &:hover {
    background-color: ${props => props.isActive ? '#d32f2f' : '#45a049'};
  }
`;

const TrainerList = () => {
  const [allTrainers, setAllTrainers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem('adminToken');
  const trainersPerPage = 10;

  useEffect(() => {
    fetchTrainers();
  }, [token]);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('https://api.novajobs.us/api/uaadmin/trainers', {
        headers: {
          Authorization: `${token}`
        }
      });
      setAllTrainers(response.data.data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
    }
  };

  // const toggleTrainerStatus = async (trainerId, currentStatus) => {
  //   const url = currentStatus
  //     ? `https://api.novajobs.us/api/uaadmin/trainer-deactive/${trainerId}`
  //     : `https://api.novajobs.us/api/uaadmin/trainer-active/${trainerId}`;

  //   try {
  //     await axios.get(url, {
  //       headers: {
  //         Authorization: `${token}`
  //       }
  //     });
  //     // Refresh the trainer list after status change
  //     fetchTrainers();
  //   } catch (error) {
  //     console.error('Error toggling trainer status:', error);
  //   }
  // };
  const toggleTrainerStatus = async (trainerId, currentStatus) => {
    const url = currentStatus
      ? `https://api.novajobs.us/api/uaadmin/trainer-deactive/${trainerId}`
      : `https://api.novajobs.us/api/uaadmin/trainer-active/${trainerId}`;

    try {
      await axios.get(url, {
        headers: {
          Authorization: `${token}`
        }
      });
      
      toast.success(`Trainer ${currentStatus ? 'deactivated' : 'activated'} successfully!`);
      
      fetchTrainers();
    } catch (error) {
      console.error('Error toggling trainer status:', error);
      toast.error('Error toggling trainer status. Please try again.');
    }
};
  const indexOfLastTrainer = currentPage * trainersPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
  const currentTrainers = allTrainers.slice(indexOfFirstTrainer, indexOfLastTrainer);
  const totalPages = Math.ceil(allTrainers.length / trainersPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="main-wrapper">
      <AdminHeader />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        {/* ... (breadcrumb content remains unchanged) */}
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <AdminSidebar />
            <div className="col-xl-9 col-lg-9">
              <Wrapper>
                <Card>
                  <CardHeader>
                    <CardTitle>Trainer List</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TableWrapper>
                      <Table>
                        <thead>
                          <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Phone Number</Th>
                            <Th>Created At</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentTrainers.map(({ trainer }) => (
                            <tr key={trainer.id}>
                              <Td>
                                <Link to={`/instructor/instructor-profile/${trainer.id}`}>
                                  {`${trainer.first_name} ${trainer.last_name}`}
                                </Link>
                              </Td>
                              <Td>{trainer.email}</Td>
                              <Td>{trainer.phone}</Td>
                              <Td>{new Date(trainer.created_at).toLocaleDateString()}</Td>
                              <Td>{trainer.is_active===1 ? 'Active' : 'Inactive'}</Td>
                              <Td>
                                <ActionButton
                                  isActive={trainer.is_active}
                                  onClick={() => toggleTrainerStatus(trainer.id, trainer.is_active)}
                                >
                                  {trainer.is_active === 1 ? 'Deactivate' : 'Activate'}
                                </ActionButton>
                              </Td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </TableWrapper>
                    <PaginationWrapper>
                      <PageButton 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                      >
                        Previous
                      </PageButton>
                      {[...Array(totalPages).keys()].map((page) => (
                        <PageButton
                          key={page + 1}
                          onClick={() => handlePageChange(page + 1)}
                          active={currentPage === page + 1}
                        >
                          {page + 1}
                        </PageButton>
                      ))}
                      <PageButton 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </PageButton>
                    </PaginationWrapper>
                  </CardContent>
                </Card>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainerList;