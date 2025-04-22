// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { toast } from "react-toastify";
// import { AdminHeader } from "./AdminHeader";
// import AdminSidebar from "./AdminSidebar";
// import Footer from "../footer";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// // Utility function to format datetime-local to the required format
// const formatDate = (dateTimeString) => {
//   const date = new Date(dateTimeString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   return `${year}-${month}-${day} ${hours}:${minutes}:00`;
// };

// const EditCouponForm = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     code: "",
//     discount_percentage: "",
//     max_uses: "",
//     expires_at: "",
//     is_active: true
//   });

//   useEffect(() => {
//     if (location.state && location.state.couponData) {
//       const couponData = location.state.couponData;
//       setFormData({
//         code: couponData.code,
//         discount_percentage: couponData.discount_percentage,
//         max_uses: couponData.max_uses,
//         expires_at: formatDate(couponData.expires_at),
//         is_active: couponData.is_active
//       });
//     } else {
//       // If no coupon data is provided, fetch it from the API
//       fetchCouponData();
//     }
//   }, [location, id]);

//   const fetchCouponData = async () => {
//     try {
//       const response = await axios.get(`https://api.novajobs.us/api/uaadmin/coupon/${id}`, {
//         headers: {
//           Authorization: localStorage.getItem('adminToken'),
//         },
//       });
//       const couponData = response.data.data;
//       setFormData({
//         code: couponData.code,
//         discount_percentage: couponData.discount_percentage,
//         max_uses: couponData.max_uses,
//         expires_at: formatDate(couponData.expires_at),
//         is_active: couponData.is_active
//       });
//     } catch (error) {
//       console.error('Error fetching coupon data:', error);
//       toast.error("Error fetching coupon data. Please try again.");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: 
//         type === 'number' ? (value === "" ? "" : Number(value)) :
//         name === 'is_active' ? value === 'true' :
//         value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `https://api.novajobs.us/api/uaadmin/coupon/${id}`,
//         {
//           ...formData,
//           discount_percentage: formData.discount_percentage === "" ? 0 : formData.discount_percentage,
//           max_uses: formData.max_uses === "" ? 0 : formData.max_uses,
//           expires_at: new Date(formData.expires_at).toISOString(),
//         },
//         {
//           headers: {
//             Authorization: localStorage.getItem('adminToken'),
//           },
//         }
//       );

//       console.log('Coupon updated successfully:', response.data.message);
//       toast.success(response.data.message);
//       navigate('/admin/coupon-list'); // Redirect to coupon list after successful update
//     } catch (error) {
//       console.error('Error updating coupon:', error);
//       toast.error(error.response?.data?.message || "Error updating coupon");
//     }
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
//               <div className="settings-widget card-details">
//                 <div className="settings-menu p-0">
//                   <div className="profile-heading">
//                     <h3>Edit Coupon</h3>
//                     <p>Modify the details of the coupon</p>
//                   </div>
//                   <form onSubmit={handleSubmit}>
//                     <div className="checkout-form settings-wrap">
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Coupon Code</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="code"
//                               value={formData.code}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Discount Percentage</label>
//                             <input
//                               type="number"
//                               className="form-control"
//                               name="discount_percentage"
//                               value={formData.discount_percentage}
//                               onChange={handleChange}
//                               min="0"
//                               max="100"
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Max Uses</label>
//                             <input
//                               type="number"
//                               className="form-control"
//                               name="max_uses"
//                               value={formData.max_uses}
//                               onChange={handleChange}
//                               min="0"
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Expiry Date</label>
//                             <input
//                               type="datetime-local"
//                               className="form-control"
//                               name="expires_at"
//                               value={formData.expires_at}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Is Active</label>
//                             <select
//                               className="form-select"
//                               name="is_active"
//                               value={formData.is_active.toString()}
//                               onChange={handleChange}
//                               required
//                             >
//                               <option value="true">True</option>
//                               <option value="false">False</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <button type="submit" className="btn btn-primary">
//                             Update Coupon
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EditCouponForm;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Utility function to format datetime-local to the required format
const formatDate = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:00`; // Format: YYYY-MM-DD HH:MM:SS
};

const EditCouponForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    code: "",
    discount_percentage: "",
    max_uses: "",
    expires_at: "",
    is_active: true
  });

  useEffect(() => {
    if (location.state && location.state.couponData) {
      const couponData = location.state.couponData;
      setFormData({
        code: couponData.code,
        discount_percentage: couponData.discount_percentage,
        max_uses: couponData.max_uses,
        expires_at: formatDate(couponData.expires_at),
        is_active: couponData.is_active
      });
    } else {
      // If no coupon data is provided, fetch it from the API
      fetchCouponData();
    }
  }, [location, id]);

  const fetchCouponData = async () => {
    try {
      const response = await axios.get(`https://api.novajobs.us/api/uaadmin/coupon/${id}`, {
        headers: {
          Authorization: localStorage.getItem('adminToken'),
        },
      });
      const couponData = response.data.data;
      setFormData({
        code: couponData.code,
        discount_percentage: couponData.discount_percentage,
        max_uses: couponData.max_uses,
        expires_at: formatDate(couponData.expires_at),
        is_active: couponData.is_active
      });
    } catch (error) {
      console.error('Error fetching coupon data:', error);
      toast.error("Error fetching coupon data. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: 
        type === 'number' ? (value === "" ? "" : Number(value)) :
        name === 'is_active' ? value === 'true' :
        value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://api.novajobs.us/api/uaadmin/coupon/${id}`,
        {
          ...formData,
          discount_percentage: formData.discount_percentage === "" ? 0 : formData.discount_percentage,
          max_uses: formData.max_uses === "" ? 0 : formData.max_uses,
          expires_at: formatDate(formData.expires_at), // Use the formatting function here
        },
        {
          headers: {
            Authorization: localStorage.getItem('adminToken'),
          },
        }
      );

      console.log('Coupon updated successfully:', response.data);
      toast.success(response.data.message);
      navigate('/admin/coupon-list'); // Redirect to coupon list after successful update
    } catch (error) {
      console.error('Error updating coupon:', error);
      toast.error(error.response?.data?.message || "Error updating coupon");
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
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                </nav>
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
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Edit Coupon</h3>
                    <p>Modify the details of the coupon</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="checkout-form settings-wrap">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Coupon Code</label>
                            <input
                              type="text"
                              className="form-control"
                              name="code"
                              value={formData.code}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Discount Percentage</label>
                            <input
                              type="number"
                              className="form-control"
                              name="discount_percentage"
                              value={formData.discount_percentage}
                              onChange={handleChange}
                              min="0"
                              max="100"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Max Uses</label>
                            <input
                              type="number"
                              className="form-control"
                              name="max_uses"
                              value={formData.max_uses}
                              onChange={handleChange}
                              min="0"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Expiry Date</label>
                            <input
                              type="datetime-local"
                              className="form-control"
                              name="expires_at"
                              value={formData.expires_at}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Is Active</label>
                            <select
                              className="form-select"
                              name="is_active"
                              value={formData.is_active.toString()}
                              onChange={handleChange}
                              required
                            >
                              <option value="true">True</option>
                              <option value="false">False</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-primary">
                            Update Coupon
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditCouponForm;
