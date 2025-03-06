// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import { Modal } from "react-bootstrap";
// import { AdminHeader } from "./AdminHeader";
// import AdminSidebar from "./AdminSidebar";
// import Footer from "../footer";
// import FullPageLoader from "../home/FullPageLoader";

// const PartnerList = () => {
//   const [allTrainers, setAllTrainers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedTrainer, setSelectedTrainer] = useState(null);
//   const [loading,setLoading] = useState(false)
//   const [editDetails, seteditDetails] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     country_id: "",
//     state_id: "",
//     city_id: "",
//     display_name: "",
//   });
//   const token = localStorage.getItem("adminToken");
//   const trainersPerPage = 15;

//   useEffect(() => {
//     fetchTrainers();
//   }, [token]);

//   const fetchTrainers = async () => {
//     setLoading(true)
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/uaadmin/vendors",
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//         }
//       );
//       setAllTrainers(response.data.data);
//     } catch (error) {
//       console.error("Error fetching trainers:", error);
//       toast.error("Error fetching trainers. Please try again.");
//     }finally{
//       setLoading(false)
//     }
//   };

//   const handleActivateDeactivate = (trainer) => {
//     setSelectedTrainer(trainer);
//     setShowConfirmModal(true);
//   };

//   const confirmActivateDeactivate = async () => {
//     if (!selectedTrainer) return;

//     const url = selectedTrainer.trainer.is_active
//       ? `https://api.novajobs.us/api/uaadmin/trainer-deactive/${selectedTrainer.trainer.id}`
//       : `https://api.novajobs.us/api/uaadmin/trainer-active/${selectedTrainer.trainer.id}`;

//     try {
//       await axios.get(url, {
//         headers: {
//           Authorization: `${token}`,
//         },
//       });
//       toast.success(
//         `Trainer ${
//           selectedTrainer.trainer.is_active ? "deactivated" : "activated"
//         } successfully!`
//       );

//       setAllTrainers((prevTrainers) =>
//         prevTrainers.map((trainer) =>
//           trainer.trainer.id === selectedTrainer.trainer.id
//             ? {
//                 ...trainer,
//                 trainer: {
//                   ...trainer.trainer,
//                   is_active: !trainer.trainer.is_active,
//                 },
//               }
//             : trainer
//         )
//       );
//     } catch (error) {
//       console.error("Error activating/deactivating Trainer:", error);
//       toast.error("Error activating/deactivating Trainer. Please try again.");
//     }
//     setShowConfirmModal(false);
//   };

//   const handleeditDetails = (trainer) => {
//     setSelectedTrainer(trainer);
//     seteditDetails({
//       firstName: trainer.trainer.first_name,
//       lastName: trainer.trainer.last_name,
//       email: trainer.trainer.email,
//       phone: trainer.trainer.phone,
//       country_id: trainer.trainer.country_id || "",
//       state_id: trainer.trainer.state_id || "",
//       city_id: trainer.trainer.city_id || "",
//       display_name: trainer.trainer.display_name || "",
//     });
//     setShowEditModal(true);
//   };

//   const saveeditDetails = async () => {
//     if (!selectedTrainer) return;

//     try {
//       const url = `https://api.novajobs.us/api/uaadmin/trainer/${selectedTrainer.trainer.id}`;
//       await axios.patch(
//         url,
//         {
//           first_name: editDetails.firstName,
//           last_name: editDetails.lastName,
//           email: editDetails.email,
//           phone: editDetails.phone,
//           country_id: editDetails.country_id || "",
//           state_id: editDetails.state_id || "",
//           city_id: editDetails.city_id || "",
//           display_name: editDetails.display_name || "",
//         },
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//         }
//       );

//       toast.success("Trainer name updated successfully!");

//       setAllTrainers((prevTrainers) =>
//         prevTrainers.map((trainer) =>
//           trainer.trainer.id === selectedTrainer.trainer.id
//             ? {
//                 ...trainer,
//                 trainer: {
//                   ...trainer.trainer,
//                   first_name: editDetails.firstName,
//                   last_name: editDetails.lastName,
//                   email: editDetails.email,
//                   phone: editDetails.phone,
//                   country_id: editDetails.country_id || "",
//                   state_id: editDetails.state_id || "",
//                   city_id: editDetails.city_id || "",
//                   display_name: editDetails.display_name || "",
//                 },
//               }
//             : trainer
//         )
//       );
//       setShowEditModal(false);
//     } catch (error) {
//       console.error("Error updating Trainer name:", error);
//       toast.error("Error updating Trainer name. Please try again.");
//     }
//   };

//   const indexOfLastTrainer = currentPage * trainersPerPage;
//   const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
//   const currentTrainers = allTrainers.slice(
//     indexOfFirstTrainer,
//     indexOfLastTrainer
//   );
//   const totalPages = Math.ceil(allTrainers.length / trainersPerPage);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };
// console.log(currentTrainers[0],"currentTrainers");
//   return (
//     <div className="main-wrapper">
//       <AdminHeader />
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12">
//               <div className="breadcrumb-list">
//                 <h2 className="breadcrumb-title">Admin Dashboard</h2>
//                 <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
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
//               <div className="card">
//                 <div className="card-header">
//                   <h5 className="card-title">Trainer List</h5>
//                 </div>
//                 {loading? <FullPageLoader /> :<div className="card-body">
//                   <div className="table-responsive">
//                     <table className="table table-hover table-center mb-0">
//                       <thead>
//                         <tr>
//                           <th>Name</th>
//                           <th>Display Name </th>
//                           <th>Email</th>
//                           <th>Phone number</th>
//                           <th>Created At</th>
//                           <th>Status</th>
//                           <th>Action</th>
//                           {/* <th>Edit Name</th> */}
//                         </tr>
//                       </thead>
//                       <tbody>
                        
//                         {currentTrainers.map((trainerData) => (
                            
//                           <tr key={trainerData.trainer.id}>
//                             <td>
//                               <Link
//                                 to={`/instructor/instructor-profile/${trainerData.trainer.id}`}
//                               >
//                                 {`${trainerData.trainer.first_name} ${trainerData.trainer.last_name}`}
//                               </Link>
//                             </td>
//                             <td>
//                               {" "}
//                               {trainerData.trainer.display_name
//                                 ? trainerData.trainer.display_name
//                                 : "-"}
//                             </td>
//                             <td>{trainerData.trainer.email}</td>
//                             <td>{trainerData.trainer.phone}</td>
//                             <td>
//                               {new Date(
//                                 trainerData.trainer.created_at
//                               ).toLocaleDateString()}
//                             </td>
//                             <td>
//                               {trainerData.trainer.is_active
//                                 ? "Active"
//                                 : "Inactive"}
//                             </td>
//                             <td>
//                               <div className="actions d-flex gap-2">
//                                 <button
//                                   className={`btn btn-sm ${
//                                     trainerData.trainer.is_active
//                                       ? "btn-danger"
//                                       : "btn-success"
//                                   }`}
//                                   onClick={() =>
//                                     handleActivateDeactivate(trainerData)
//                                   }
//                                 >
//                                   {trainerData.trainer.is_active
//                                     ? "Deactivate"
//                                     : "Activate"}
//                                 </button>
//                                 <button
//                                   className="btn btn-sm btn-primary"
//                                   onClick={() => handleeditDetails(trainerData)}
//                                 >
//                                   Edit
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>}
//                 <div className="card-footer">
//                   <nav aria-label="Page navigation">
//                     <ul className="pagination justify-content-center">
//                       <li
//                         className={`page-item ${
//                           currentPage === 1 ? "disabled" : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => handlePageChange(currentPage - 1)}
//                         >
//                           Previous
//                         </button>
//                       </li>
//                       {[...Array(totalPages).keys()].map((page) => (
//                         <li
//                           key={page + 1}
//                           className={`page-item ${
//                             currentPage === page + 1 ? "active" : ""
//                           }`}
//                         >
//                           <button
//                             className="page-link"
//                             onClick={() => handlePageChange(page + 1)}
//                           >
//                             {page + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li
//                         className={`page-item ${
//                           currentPage === totalPages ? "disabled" : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => handlePageChange(currentPage + 1)}
//                         >
//                           Next
//                         </button>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />

//       {/* Confirm Activate/Deactivate Modal */}
//       <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Action</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to{" "}
//           {selectedTrainer?.trainer.is_active ? "deactivate" : "activate"} this
//           Trainer?
//         </Modal.Body>
//         <Modal.Footer>
//           <button
//             className="btn btn-secondary"
//             onClick={() => setShowConfirmModal(false)}
//           >
//             Cancel
//           </button>
//           <button
//             className="btn btn-primary"
//             onClick={confirmActivateDeactivate}
//           >
//             Confirm
//           </button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Name Modal */}
//       <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Trainer Name</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="form-group">
//             <label>Display Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={editDetails.display_name}
//               onChange={(e) =>
//                 seteditDetails((prev) => ({
//                   ...prev,
//                   display_name: e.target.value,
//                 }))
//               }
//             />
//           </div>
//           <div className="form-group">
//             <label>First Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={editDetails.firstName}
//               onChange={(e) =>
//                 seteditDetails((prev) => ({
//                   ...prev,
//                   firstName: e.target.value,
//                 }))
//               }
//               disabled
//             />
//           </div>
//           <div className="form-group">
//             <label>Last Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={editDetails.lastName}
//               onChange={(e) =>
//                 seteditDetails((prev) => ({
//                   ...prev,
//                   lastName: e.target.value,
//                 }))
//               }
//               disabled
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={editDetails.email}
//               onChange={(e) =>
//                 seteditDetails((prev) => ({ ...prev, email: e.target.value }))
//               }
//               disabled
//             />
//           </div>
//           <div className="form-group">
//             <label>Phone</label>
//             <input
//               type="text"
//               className="form-control"
//               value={editDetails.phone}
//               onChange={(e) =>
//                 seteditDetails((prev) => ({ ...prev, phone: e.target.value }))
//               }
//               disabled
//             />
//           </div>
//           {/* <div className="form-group">
//             <label>Country ID</label>
//             <input
//               type="text"
//               className="form-control"
//               value={editDetails.country_id}
//               onChange={(e) =>
//                 seteditDetails((prev) => ({
//                   ...prev,
//                   country_id: e.target.value,
//                 }))
//               }
//               disabled
//             />
//           </div> */}
//           {/* <div className="form-group">
//             <label>State ID</label>
//             <input
//               type="text"
//               className="form-control"
//               value={editDetails.state_id}
//               onChange={(e) =>
//                 seteditDetails((prev) => ({
//                   ...prev,
//                   state_id: e.target.value,
//                 }))
//               }
//               disabled
//             />
//           </div> */}
//           {/* <div className="form-group"> */}
//           {/* <label>City ID</label>
//             <input
//               type="text"
//               className="form-control"
//               value={editDetails.city_id}
//               onChange={(e) =>
//                 seteditDetails((prev) => ({ ...prev, city_id: e.target.value }))
//               }
//               disabled
//             />
//           </div> */}
//         </Modal.Body>
//         <Modal.Footer>
//           <button
//             className="btn btn-secondary"
//             onClick={() => setShowEditModal(false)}
//           >
//             Cancel
//           </button>
//           <button className="btn btn-primary" onClick={saveeditDetails}>
//             Save Changes
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default PartnerList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";
import FullPageLoader from "../home/FullPageLoader";

const PartnerList = () => {
  const [allPartners, setAllPartners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editDetails, setEditDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country_id: "",
    state_id: "",
    city_id: "",
    display_name: "",
    designation: "",
    institute_name: "",
    website: "",
    about: "",
    location: ""
  });
  const token = localStorage.getItem("adminToken");
  const partnersPerPage = 15;

  useEffect(() => {
    fetchPartners();
  }, [token]);

  const fetchPartners = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/uaadmin/vendors",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setAllPartners(response.data.data);
    } catch (error) {
      console.error("Error fetching partners:", error);
      toast.error("Error fetching partners. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleActivateDeactivate = (partner) => {
    setSelectedPartner(partner);
    setShowConfirmModal(true);
  };

  const confirmActivateDeactivate = async () => {
    if (!selectedPartner) return;

    // Using just the partner object directly since the structure has changed
    const url = selectedPartner.is_active
      ? `https://api.novajobs.us/api/uaadmin/trainer-deactive/${selectedPartner.id}`
      : `https://api.novajobs.us/api/uaadmin/trainer-active/${selectedPartner.id}`;

    try {
      await axios.get(url, {
        headers: {
          Authorization: `${token}`,
        },
      });
      toast.success(
        `Partner ${
          selectedPartner.is_active ? "deactivated" : "activated"
        } successfully!`
      );

      setAllPartners((prevPartners) =>
        prevPartners.map((partner) =>
          partner.id === selectedPartner.id
            ? {
                ...partner,
                is_active: !partner.is_active,
              }
            : partner
        )
      );
    } catch (error) {
      console.error("Error activating/deactivating Partner:", error);
      toast.error("Error activating/deactivating Partner. Please try again.");
    }
    setShowConfirmModal(false);
  };

  const handleEditDetails = (partner) => {
    setSelectedPartner(partner);
    setEditDetails({
      firstName: partner.first_name,
      lastName: partner.last_name,
      email: partner.email,
      phone: partner.phone,
      country_id: partner.country_id || "",
      state_id: partner.state_id || "",
      city_id: partner.city_id || "",
      display_name: partner.display_name || "",
      designation: partner.designation || "",
      institute_name: partner.institute_name || "",
      website: partner.website || "",
      about: partner.about || "",
      location: partner.location || ""
    });
    setShowEditModal(true);
  };

  const saveEditDetails = async () => {
    if (!selectedPartner) return;

    try {
      const url = `https://api.novajobs.us/api/uaadmin/trainer/${selectedPartner.id}`;
      await axios.patch(
        url,
        {
          first_name: editDetails.firstName,
          last_name: editDetails.lastName,
          email: editDetails.email,
          phone: editDetails.phone,
          country_id: editDetails.country_id || "",
          state_id: editDetails.state_id || "",
          city_id: editDetails.city_id || "",
          display_name: editDetails.display_name || "",
          designation: editDetails.designation || "",
          institute_name: editDetails.institute_name || "",
          website: editDetails.website || "",
          about: editDetails.about || "",
          location: editDetails.location || ""
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      toast.success("Partner details updated successfully!");

      setAllPartners((prevPartners) =>
        prevPartners.map((partner) =>
          partner.id === selectedPartner.id
            ? {
                ...partner,
                first_name: editDetails.firstName,
                last_name: editDetails.lastName,
                email: editDetails.email,
                phone: editDetails.phone,
                country_id: editDetails.country_id || "",
                state_id: editDetails.state_id || "",
                city_id: editDetails.city_id || "",
                display_name: editDetails.display_name || "",
                designation: editDetails.designation || "",
                institute_name: editDetails.institute_name || "",
                website: editDetails.website || "",
                about: editDetails.about || "",
                location: editDetails.location || ""
              }
            : partner
        )
      );
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating Partner details:", error);
      toast.error("Error updating Partner details. Please try again.");
    }
  };

  const indexOfLastPartner = currentPage * partnersPerPage;
  const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
  const currentPartners = allPartners.slice(
    indexOfFirstPartner,
    indexOfLastPartner
  );
  const totalPages = Math.ceil(allPartners.length / partnersPerPage);

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
            <AdminSidebar />
            <div className="col-xl-9 col-lg-9">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Partner List</h5>
                </div>
                {loading ? (
                  <FullPageLoader />
                ) : (
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Name</th>
                            {/* <th>Display Name</th> */}
                            <th>Designation</th>
                            <th>Institute</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Created At</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPartners.map((partner) => (
                            <tr key={partner.id}>
                              <td>
                                <Link to={`/instructor/instructor-profile/${partner.id}`}>
                                  {`${partner.first_name} ${partner.last_name}`}
                                </Link>
                              </td>
                              {/* <td>
                                {partner.display_name ? partner.display_name : "-"}
                              </td> */}
                              <td>
                                {partner.designation ? partner.designation : "-"}
                              </td>
                              <td>
                                {partner.institute_name ? partner.institute_name : "-"}
                              </td>
                              <td>{partner.email}</td>
                              <td>{partner.phone}</td>
                              <td>
                                {new Date(partner.created_at).toLocaleDateString()}
                              </td>
                              <td>{partner.is_active ? "Active" : "Inactive"}</td>
                              <td>
                                <div className="actions d-flex gap-2">
                                  <button
                                    className={`btn btn-sm ${
                                      partner.is_active
                                        ? "btn-danger"
                                        : "btn-success"
                                    }`}
                                    onClick={() => handleActivateDeactivate(partner)}
                                  >
                                    {partner.is_active ? "Deactivate" : "Activate"}
                                  </button>
                                  <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => handleEditDetails(partner)}
                                  >
                                    Edit
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

      {/* Confirm Activate/Deactivate Modal */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to{" "}
          {selectedPartner?.is_active ? "deactivate" : "activate"} this
          Partner?
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

      {/* Edit Details Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Partner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label>Display Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editDetails.display_name}
                  onChange={(e) =>
                    setEditDetails((prev) => ({
                      ...prev,
                      display_name: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editDetails.firstName}
                  onChange={(e) =>
                    setEditDetails((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editDetails.lastName}
                  onChange={(e) =>
                    setEditDetails((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={editDetails.email}
                  onChange={(e) =>
                    setEditDetails((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={editDetails.phone}
                  onChange={(e) =>
                    setEditDetails((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label>Designation</label>
                <input
                  type="text"
                  className="form-control"
                  value={editDetails.designation}
                  onChange={(e) =>
                    setEditDetails((prev) => ({
                      ...prev,
                      designation: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label>Institute Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editDetails.institute_name}
                  onChange={(e) =>
                    setEditDetails((prev) => ({
                      ...prev,
                      institute_name: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label>Website</label>
                <input
                  type="text"
                  className="form-control"
                  value={editDetails.website}
                  onChange={(e) =>
                    setEditDetails((prev) => ({
                      ...prev,
                      website: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12">
              <div className="form-group mb-3">
                <label>Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={editDetails.location}
                  onChange={(e) =>
                    setEditDetails((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12">
              <div className="form-group mb-3">
                <label>About</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={editDetails.about}
                  onChange={(e) =>
                    setEditDetails((prev) => ({
                      ...prev,
                      about: e.target.value,
                    }))
                  }
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="form-group mb-3" style={{ display: 'none' }}>
            <label>Country ID</label>
            <input
              type="text"
              className="form-control"
              value={editDetails.country_id}
              onChange={(e) =>
                setEditDetails((prev) => ({
                  ...prev,
                  country_id: e.target.value,
                }))
              }
            />
          </div>
          
          <div className="form-group mb-3" style={{ display: 'none' }}>
            <label>State ID</label>
            <input
              type="text"
              className="form-control"
              value={editDetails.state_id}
              onChange={(e) =>
                setEditDetails((prev) => ({
                  ...prev,
                  state_id: e.target.value,
                }))
              }
            />
          </div>
          
          <div className="form-group mb-3" style={{ display: 'none' }}>
            <label>City ID</label>
            <input
              type="text"
              className="form-control"
              value={editDetails.city_id}
              onChange={(e) =>
                setEditDetails((prev) => ({ ...prev, city_id: e.target.value }))
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={saveEditDetails}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PartnerList;