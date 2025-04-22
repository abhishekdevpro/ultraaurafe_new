// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// // import { Link } from "react-router-dom";
// import { Modal } from "react-bootstrap";
// import AdminSidebar from "./AdminSidebar";
// import Footer from "../footer";
// import { AdminHeader } from "./AdminHeader";
// import { useNavigate } from "react-router-dom";

// const CouponList = () => {
//   const [coupons, setCoupons] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [selectedCoupon, setSelectedCoupon] = useState(null);
//   const token = localStorage.getItem("adminToken");
//   const couponsPerPage = 15;
//   useEffect(() => {
//     fetchCoupons();
//   }, [token]);

//   const fetchCoupons = async () => {
//     try {
//       const response = await axios.get("https://api.novajobs.us/api/uaadmin/coupon", {
//         headers: {
//           Authorization: `${token}`,
//         },
//       });
//       setCoupons(response.data.data);
//     } catch (error) {
//       console.error("Error fetching coupons:", error);
//       toast.error("Error fetching coupons. Please try again.");
//     }
//   };

//   const handleEditCoupon = (coupon) => {
//     setSelectedCoupon(coupon);
//     setShowConfirmModal(true);
//   };
// const navigate = useNavigate()
//   const confirmEditCoupon = async () => {
//     setShowConfirmModal(false);
//     navigate(`/admin/edit-coupon/${selectedCoupon.id}`, { state: { couponData: selectedCoupon } });
//   };

//   const indexOfLastCoupon = currentPage * couponsPerPage;
//   const indexOfFirstCoupon = indexOfLastCoupon - couponsPerPage;
//   const paginatedCoupons = coupons.slice(indexOfFirstCoupon, indexOfLastCoupon);
//   const totalPages = Math.ceil(coupons.length / couponsPerPage);

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
//                 <h2 className="breadcrumb-title">Coupon List</h2>
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
//                   <h5 className="card-title">Coupon List</h5>
//                 </div>
//                 <div className="card-body">
//                   <div className="table-responsive">
//                     <table className="table table-hover table-center mb-0">
//                       <thead>
//                         <tr>
//                           <th>Coupon Code</th>
//                           <th>Discount %</th>
//                           <th>Expiration Date</th>
//                           <th>Status</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {paginatedCoupons.map((coupon) => (
//                           <tr key={coupon.id}>
//                             <td>{coupon.code}</td>
//                             <td>{coupon.discount_percentage}</td>
//                             <td>{new Date(coupon.expires_at).toLocaleDateString()}</td>
//                             <td>{coupon.is_active ? "Active" : "Inactive"}</td>
//                             <td>
//                               <div className="actions">
//                                 <button
//                                   className="btn btn-sm btn-primary"
//                                   onClick={() => handleEditCoupon(coupon)}
//                                 >
//                                   Edit
//                                 </button>
//                                 <button
//                                   className="btn btn-sm btn-primary"
//                                   onClick={() => handleDeleteCoupon(coupon)}
//                                 >
//                                   Delete
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//                 <div className="card-footer">
//                   <nav aria-label="Page navigation">
//                     <ul className="pagination justify-content-center">
//                       <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//                         <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
//                           Previous
//                         </button>
//                       </li>
//                       {[...Array(totalPages).keys()].map((page) => (
//                         <li key={page + 1} className={`page-item ${currentPage === page + 1 ? "active" : ""}`}>
//                           <button className="page-link" onClick={() => handlePageChange(page + 1)}>
//                             {page + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
//                         <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
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

//       <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Coupon</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to edit this coupon?
//         </Modal.Body>
//         <Modal.Footer>
//           <button className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>
//             Cancel
//           </button>
//           <button className="btn btn-primary" onClick={confirmEditCoupon}>
//             Confirm
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default CouponList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons for edit and delete
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";
import { AdminHeader } from "./AdminHeader";
import { useNavigate } from "react-router-dom";

const CouponList = () => {
  const [coupons, setCoupons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // For delete confirmation
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  const couponsPerPage = 15;
  useEffect(() => {
    fetchCoupons();
  }, [token]);

  const fetchCoupons = async () => {
    try {
      const response = await axios.get("https://api.novajobs.us/api/uaadmin/coupon", {
        headers: {
          Authorization: `${token}`,
        },
      });
      setCoupons(response.data.data);
    } catch (error) {
      console.error("Error fetching coupons:", error);
      toast.error("Error fetching coupons. Please try again.");
    }
  };

  const handleEditCoupon = (coupon) => {
    setSelectedCoupon(coupon);
    setShowConfirmModal(true);
  };

  const confirmEditCoupon = async () => {
    setShowConfirmModal(false);
    navigate(`/admin/edit-coupon/${selectedCoupon.id}`, { state: { couponData: selectedCoupon } });
  };

  const handleDeleteCoupon = (coupon) => {
    setSelectedCoupon(coupon);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteCoupon = async () => {
    try {
      await axios.delete(`https://api.novajobs.us/api/uaadmin/coupon/${selectedCoupon.id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      toast.success("Coupon deleted successfully!");
      fetchCoupons(); // Refresh the coupon list
    } catch (error) {
      console.error("Error deleting coupon:", error);
      toast.error("Error deleting coupon. Please try again.");
    }
    setShowDeleteConfirm(false);
  };

  const indexOfLastCoupon = currentPage * couponsPerPage;
  const indexOfFirstCoupon = indexOfLastCoupon - couponsPerPage;
  const paginatedCoupons = coupons.slice(indexOfFirstCoupon, indexOfLastCoupon);
  const totalPages = Math.ceil(coupons.length / couponsPerPage);

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
                <h2 className="breadcrumb-title">Coupon List</h2>
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
                  <h5 className="card-title">Coupon List</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Coupon Code</th>
                          <th>Discount %</th>
                          <th>Expiration Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedCoupons.map((coupon) => (
                          <tr key={coupon.id}>
                            <td>{coupon.code}</td>
                            <td>{coupon.discount_percentage}</td>
                            <td>{new Date(coupon.expires_at).toLocaleDateString()}</td>
                            <td>{coupon.is_active ? "Active" : "Inactive"}</td>
                            <td>
                              <div className="actions">
                                <button
                                  className="btn btn-sm btn-primary me-2" // Added margin for spacing
                                  onClick={() => handleEditCoupon(coupon)}
                                >
                                  <FaEdit /> Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleDeleteCoupon(coupon)}
                                >
                                  <FaTrash /> Delete
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
                      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                          Previous
                        </button>
                      </li>
                      {[...Array(totalPages).keys()].map((page) => (
                        <li key={page + 1} className={`page-item ${currentPage === page + 1 ? "active" : ""}`}>
                          <button className="page-link" onClick={() => handlePageChange(page + 1)}>
                            {page + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
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

      {/* Edit Confirmation Modal */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to edit this coupon?
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={confirmEditCoupon}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this coupon?
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowDeleteConfirm(false)}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={confirmDeleteCoupon}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CouponList;
