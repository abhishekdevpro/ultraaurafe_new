// import React, { useState, useEffect } from "react";
// import { InstructorHeader } from "../header";
// import InstructorSidebar from "../sidebar";
// import { User17 } from "../../imagepath";
// import Footer from "../../footer";
// import { Link } from "react-router-dom";
// import SettingsPageHeader from "./settingsPageHeader";
// import axios from "axios";

// const InstructorSettings = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     biography: "",
//     headline: "",
//     jobtitle: "",
//     website: "",
//     twitter: "",
//     facebook: "",
//     linkedin: "",
//     country_id: "",
//     state_id: "",
//     city_id: "",
//     photo: null,
//     phone: "", // This will be read-only
//   });

//   useEffect(() => {
//     // Fetch the current user's data and populate the form
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get("https://api.novajobs.us/api/trainers/profile", {
//         headers: {
//           Authorization: `${localStorage.getItem("trainerToken")}`,
//         },
//       });
//       setFormData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };
//  console.log(formData,"fddd");
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       photo: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
    
//     for (const key in formData) {
//       if (key !== "photo") {
//         formDataToSend.append(key, formData[key]);
//       }
//     }
    
//     if (formData.photo) {
//       formDataToSend.append("photo", formData.photo);
//     }
//     console.log(formDataToSend,"fdts");
//     try {
//       const response = await axios.patch(
//         "https://api.novajobs.us/api/trainers/update-trainer-profile",
//         formDataToSend,
//         {
//           headers: {
//             Authorization: `${localStorage.getItem("trainerToken")}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Profile updated successfully:", response);
//       // Handle success (e.g., show a success message)
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <InstructorHeader activeMenu={"Settings"} />
//       {/* Breadcrumb section */}
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         {/* ... (breadcrumb content) */}
//       </div>
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             <InstructorSidebar />
//             <div className="col-xl-9 col-lg-9">
//               <div className="settings-widget card-details">
//                 <div className="settings-menu p-0">
//                   <div className="profile-heading">
//                     <h3>Settings</h3>
//                     <p>You have full control to manage your own account settings</p>
//                   </div>
//                   <SettingsPageHeader />
//                   <form onSubmit={handleSubmit}>
//                     {/* Profile picture upload section */}
//                     <div className="course-group profile-upload-group mb-0 d-flex">
//                       {/* ... (profile picture upload content) */}
//                     </div>
//                     <div className="checkout-form settings-wrap">
//                       <div className="edit-profile-info">
//                         <h5>Personal Details</h5>
//                         <p>Edit your personal information</p>
//                       </div>
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">First Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="first_name"
//                               value={formData.first_name}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Last Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="last_name"
//                               value={formData.last_name}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Phone Number</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="phone"
//                               value={formData.phone}
//                               readOnly
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Headline</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="headline"
//                               value={formData.headline}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Job Title</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="jobtitle"
//                               value={formData.jobtitle}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Website</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="website"
//                               value={formData.website}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Twitter</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="twitter"
//                               value={formData.twitter}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Facebook</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="facebook"
//                               value={formData.facebook}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">LinkedIn</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="linkedin"
//                               value={formData.linkedin}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Country</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="country_id"
//                               value={formData.country_id}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">State</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="state_id"
//                               value={formData.state_id}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">City</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="city_id"
//                               value={formData.city_id}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <div className="input-block">
//                             <label className="form-label">Biography</label>
//                             <textarea
//                               rows={4}
//                               className="form-control"
//                               name="biography"
//                               value={formData.biography}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <div className="input-block">
//                             <label className="form-label">Photo</label>
//                             <input
//                               type="file"
//                               className="form-control"
//                               name="photo"
//                               onChange={handleFileChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <button className="btn btn-primary" type="submit">
//                             Update Profile
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

// export default InstructorSettings;

// import React, { useState, useEffect } from "react";
// import { InstructorHeader } from "../header";
// import InstructorSidebar from "../sidebar";
// import Footer from "../../footer";
// import SettingsPageHeader from "./settingsPageHeader";
// import axios from "axios";

// const InstructorSettings = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     biography: "",
//     headline: "",
//     jobtitle: "",
//     website: "",
//     twitter: "",
//     facebook: "",
//     linkedin: "",
//     country_id: "",
//     state_id: "",
//     city_id: "",
//     photo: null,
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("https://api.novajobs.us/api/trainers/profile", {
//         headers: {
//           Authorization: `${localStorage.getItem("trainerToken")}`,
//         },
//       });
//       setFormData(response.data.data);
//     } catch (error) {
//       setError("Error fetching user data.");
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       photo: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       if (key !== "photo") {
//         formDataToSend.append(key, formData[key]);
//       }
//     }
//     if (formData.photo) {
//       formDataToSend.append("photo", formData.photo);
//     }

//     try {
//       const response = await axios.patch(
//         "https://api.novajobs.us/api/trainers/update-trainer-profile",
//         formDataToSend,
//         {
//           headers: {
//             Authorization: `${localStorage.getItem("trainerToken")}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setSuccess("Profile updated successfully.");
//     } catch (error) {
//       setError("Error updating profile.");
//       console.error("Error updating profile:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="main-wrapper">
//       <InstructorHeader activeMenu={"Settings"} />
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         {/* ... (breadcrumb content) */}
//       </div>
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             <InstructorSidebar />
//             <div className="col-xl-9 col-lg-9">
//               <div className="settings-widget card-details">
//                 <div className="settings-menu p-0">
//                   <div className="profile-heading">
//                     <h3>Settings</h3>
//                     <p>You have full control to manage your own account settings</p>
//                   </div>
//                   <SettingsPageHeader />
//                   {loading && <p>Loading...</p>}
//                   {error && <p className="text-danger">{error}</p>}
//                   {success && <p className="text-success">{success}</p>}
//                   <form onSubmit={handleSubmit}>
//                     {/* Profile picture upload section */}
//                     <div className="course-group profile-upload-group mb-0 d-flex">
//                       {/* ... (profile picture upload content) */}
//                     </div>
//                     <div className="checkout-form settings-wrap">
//                       <div className="edit-profile-info">
//                         <h5>Personal Details</h5>
//                         <p>Edit your personal information</p>
//                       </div>
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">First Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="first_name"
//                               value={formData.first_name}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Last Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="last_name"
//                               value={formData.last_name}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Phone Number</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="phone"
//                               value={formData.phone}
//                               readOnly
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Headline</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="headline"
//                               value={formData.headline}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Job Title</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="jobtitle"
//                               value={formData.jobtitle}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Website</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="website"
//                               value={formData.website}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Twitter</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="twitter"
//                               value={formData.twitter}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Facebook</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="facebook"
//                               value={formData.facebook}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">LinkedIn</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="linkedin"
//                               value={formData.linkedin}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Country</label>
//                             <select
//                               className="form-select"
//                               name="country_id"
//                               value={formData.country_id}
//                               onChange={handleInputChange}
//                             >
//                               {/* Options for countries */}
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">State</label>
//                             <select
//                               className="form-select"
//                               name="state_id"
//                               value={formData.state_id}
//                               onChange={handleInputChange}
//                             >
//                               {/* Options for states */}
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">City</label>
//                             <select
//                               className="form-select"
//                               name="city_id"
//                               value={formData.city_id}
//                               onChange={handleInputChange}
//                             >
//                               {/* Options for cities */}
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <div className="input-block">
//                             <label className="form-label">Biography</label>
//                             <textarea
//                               className="form-control"
//                               name="biography"
//                               value={formData.biography}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <button type="submit" className="btn btn-primary">
//                             Update Profile
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

// export default InstructorSettings;
import React, { useState, useEffect } from "react";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import Footer from "../../footer";
import SettingsPageHeader from "./settingsPageHeader";
import axios from "axios";

const InstructorSettings = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    biography: "",
    headline: "",
    jobtitle: "",
    website: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    country_id: "",
    state_id: "",
    city_id: "",
    photo: null,
    phone: "",
  });

  const [initialFormData, setInitialFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.novajobs.us/api/trainers/profile", {
        headers: {
          Authorization: `${localStorage.getItem("trainerToken")}`,
        },
      });
      setFormData(response.data.data);
      setInitialFormData(response.data.data);
    } catch (error) {
      setError("Error fetching user data.");
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formDataToSend = new FormData();
    let hasChanges = false;

    for (const key in formData) {
      if (key !== "photo" && formData[key] !== initialFormData[key]) {
        formDataToSend.append(key, formData[key]);
        hasChanges = true;
      }
    }

    if (formData.photo && formData.photo !== initialFormData.photo) {
      formDataToSend.append("photo", formData.photo);
      hasChanges = true;
    }

    if (!hasChanges) {
      setLoading(false);
      setSuccess("No changes to update.");
      return;
    }
    console.log(formDataToSend,"fdts");
    try {
      await axios.patch(
        "https://api.novajobs.us/api/trainers/update-trainer-profile",
        formDataToSend,
        {
          headers: {
            Authorization: `${localStorage.getItem("trainerToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("Profile updated successfully.");
      setInitialFormData({...formData, photo: null});
    } catch (error) {
      setError("Error updating profile: " + (error.response?.data?.message || error.message));
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Settings"} />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Settings</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Settings</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <InstructorSidebar />
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Settings</h3>
                    <p>You have full control to manage your own account settings</p>
                  </div>
                  <SettingsPageHeader />
                  {loading && <p>Loading...</p>}
                  {error && <p className="text-danger">{error}</p>}
                  {success && <p className="text-success">{success}</p>}
                  <form onSubmit={handleSubmit}>
                    <div className="course-group profile-upload-group mb-0 d-flex">
                      <div className="course-group-img d-flex align-items-center">
                        <a href="instructor-profile.html">
                          <img src={formData.photo} alt="" className="img-fluid" />
                        </a>
                        <div className="course-name">
                          <h4><a href="instructor-profile.html">Your avatar</a></h4>
                          <p>PNG or JPG no bigger than 800px wide and tall.</p>
                        </div>
                      </div>
                      <div className="profile-share d-flex align-items-center justify-content-center">
                        <input type="file" name="photo" onChange={handleFileChange} accept="image/*" />
                      </div>
                    </div>
                    <div className="checkout-form settings-wrap">
                      <div className="edit-profile-info">
                        <h5>Personal Details</h5>
                        <p>Edit your personal information</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              value={formData.first_name}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="last_name"
                              value={formData.last_name}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              value={formData.phone}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Headline</label>
                            <input
                              type="text"
                              className="form-control"
                              name="headline"
                              value={formData.headline}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Job Title</label>
                            <input
                              type="text"
                              className="form-control"
                              name="jobtitle"
                              value={formData.jobtitle}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Website</label>
                            <input
                              type="text"
                              className="form-control"
                              name="website"
                              value={formData.website}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Twitter</label>
                            <input
                              type="text"
                              className="form-control"
                              name="twitter"
                              value={formData.twitter}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Facebook</label>
                            <input
                              type="text"
                              className="form-control"
                              name="facebook"
                              value={formData.facebook}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">LinkedIn</label>
                            <input
                              type="text"
                              className="form-control"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Country</label>
                            <select
                              className="form-select"
                              name="country_id"
                              value={formData.country_id}
                              onChange={handleInputChange}
                            >
                              <option value="">Select Country</option>
                              {/* Add country options here */}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">State</label>
                            <select
                              className="form-select"
                              name="state_id"
                              value={formData.state_id}
                              onChange={handleInputChange}
                            >
                              <option value="">Select State</option>
                              {/* Add state options here */}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">City</label>
                            <select
                              className="form-select"
                              name="city_id"
                              value={formData.city_id}
                              onChange={handleInputChange}
                            >
                              <option value="">Select City</option>
                              {/* Add city options here */}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block">
                            <label className="form-label">Biography</label>
                            <textarea
                              className="form-control"
                              name="biography"
                              value={formData.biography}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-primary">
                            Update Profile
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

export default InstructorSettings;