
// import React, { useState } from "react";
// import axios from 'axios';
// import { toast } from "react-toastify";
// import { AdminHeader } from "./AdminHeader";
// import AdminSidebar from "./AdminSidebar";
// import Footer from "../footer";

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

// export const AddCouponForm = () => {
//   const [formData, setFormData] = useState({
//     code: "",
//     discount_percentage: "",
//     max_uses: "",
//     expires_at: "",
//     is_active: true
//   });

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: 
//         type === 'number' ? (value === "" ? "" : Number(value)) :
//         name === 'is_active' ? (value === 'true') :
//         value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Format expires_at before sending
//       const formattedExpiresAt = formatDate(formData.expires_at);

//       const response = await axios.post(
//         'https://api.novajobs.us/api/uaadmin/coupon',
//         {
//           ...formData,
//           discount_percentage: formData.discount_percentage === "" ? 0 : formData.discount_percentage,
//           max_uses: formData.max_uses === "" ? 0 : formData.max_uses,
//           expires_at: formattedExpiresAt,
//         },
//         {
//           headers: {
//             Authorization: localStorage.getItem('adminToken'),
//           },
//         }
//       );

//       console.log('Coupon added successfully:', response.data.message);
//       toast.success(response.data.message);

//       // Reset form after successful submission
//       setFormData({
//         code: "",
//         discount_percentage: "",
//         max_uses: "",
//         expires_at: "",
//         is_active: true
//       });
//     } catch (error) {
//       console.error('Error adding coupon:', error);
//       toast.error(error.response?.data?.message || "Error adding coupon");
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
//                     <h3>Add New Coupon</h3>
//                     <p>Enter the details of the new coupon</p>
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
//                             Add Coupon
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

// export default AddCouponForm;
import React, { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";

// Utility function to format datetime-local to the required format
const formatDate = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:00`;
};

export const AddCouponForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    discount_percentage: "",
    max_uses: "",
    expires_at: "",
    is_active: true,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: 
        type === 'number' ? (value === "" ? "" : Number(value)) :
        name === 'is_active' ? (value === 'true') : // Updated this line
        value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format expires_at before sending
      const formattedExpiresAt = formatDate(formData.expires_at);

      const response = await axios.post(
        'https://api.novajobs.us/api/uaadmin/coupon',
        {
          ...formData,
          discount_percentage: formData.discount_percentage === "" ? 0 : formData.discount_percentage,
          max_uses: formData.max_uses === "" ? 0 : formData.max_uses,
          expires_at: formattedExpiresAt,
        },
        {
          headers: {
            Authorization: localStorage.getItem('adminToken'),
          },
        }
      );

      console.log('Coupon added successfully:', response.data.message);
      toast.success(response.data.message);

      // Reset form after successful submission
      setFormData({
        code: "",
        discount_percentage: "",
        max_uses: "",
        expires_at: "",
        is_active: true,
      });
    } catch (error) {
      console.error('Error adding coupon:', error);
      toast.error(error.response?.data?.message || "Error adding coupon");
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
            <AdminSidebar />
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Add New Coupon</h3>
                    <p>Enter the details of the new coupon</p>
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
                            Add Coupon
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

export default AddCouponForm;
