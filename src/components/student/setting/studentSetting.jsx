// import React from "react";
// import { Link } from "react-router-dom";
// import StudentHeader from "../header";
// import StudentSidebar from "../sidebar";
// import { User16 } from "../../imagepath";
// //import StudentSettingPageHeader from "./settingPageHeader";



// import axios from "axios";
// import { useState,useEffect } from "react";
// // import StudentSettingPageHeader from "./settingPageHeader";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const StudentSetting = () => {
//   const token = localStorage.getItem("token");

//   const [profileData, setProfileData] = useState({
//     first_name: "",
//     last_name: "",
//     address: "",
//     phone: "",
  
//     website: "",
//     email: "",
   
//     photo: "",
//     headline: "",
//     twitter_profile: "",
//     facebook_profile: "",
//     linkedin_profile: "",
//     youtube_profile: "",

//   });

//   useEffect(() => {
//     axios
//       .get("https://api.novajobs.us/api/students/profile", {
//         headers: {
//           Authorization: token,
//         },
//       })
//       .then((response) => {
//         const data = response.data.data;
//         setProfileData({
//           first_name: data.first_name,
//           last_name: data.last_name,
//           address: data.address,
//           phone: data.phone,
         
//           website: data.website,
//           email: data.email,
         
//           photo: data.photo ? `https://api.novajobs.us${data.photo}` : "", // Properly setting the photo URL
//           headline: data.headline,
//           twitter_profile: data.twitter_profile,
//           facebook_profile: data.facebook_profile,
//           linkedin_profile: data.linkedin_profile,
//           youtube_profile: data.youtube_profile,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching profile data:", error);
//       });
//   }, [token]); // Added token as a dependency to avoid potential issues

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setProfileData((prevData) => ({
//       ...prevData,
//       photo: file, // Store the selected file
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData();
//   //   for (const key in profileData) {
//   //     formData.append(key, profileData[key]);
//   //   }

//   //   axios
//   //     .patch("https://api.novajobs.us/api/students/edit-profile", formData, {
//   //       headers: {
//   //         Authorization: token,
//   //         "Content-Type": "multipart/form-data",
//   //       },
//   //     })
//   //     .then((response) => {
//   //       console.log("Profile updated successfully:", response.data);
//   //       toast.success("Profile updated successfully")
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error updating profile:", error);
//   //       toast.error("Error updating profile")
//   //     });
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     for (const key in profileData) {
//       formData.append(key, profileData[key]);
//     }
  
//     axios
//       .patch("https://api.novajobs.us/api/students/edit-profile", formData, {
//         headers: {
//           Authorization: token,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         console.log("Profile updated successfully:", response.data);
//         toast.success("Profile updated successfully"); // Success toast
//       })
//       .catch((error) => {
//         console.error("Error updating profile:", error);
//         toast.error("Error updating profile"); // Failure toast
//       });
//   };
  
//   return (
//     <div className="main-wrapper">
//       <StudentHeader activeMenu={"Settings"} />
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12 pt-4">
//               <div className="breadcrumb-list">
//                 <h2 className="breadcrumb-title">Settings</h2>
//                 <nav aria-label="breadcrumb" className="page-breadcrumb">
//                   <ol className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <Link to="/home">Home</Link>
//                     </li>
//                     <li className="breadcrumb-item active" aria-current="page">
//                       Edit Profile
//                     </li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             <StudentSidebar />
            
//             <div className="col-xl-9 col-lg-9">
//               <div className="settings-widget card-details">
//                 <div className="settings-menu p-0">
//                 <div className="profile-heading">
//                     <h3>Settings</h3>
//                     <p>You have full control to manage your own account settings</p>
//                   </div>
//                   {/* <StudentSettingPageHeader /> */}
//                   <div className="edit-profile-info px-4 p-3">
//                     <h5>Personal Details</h5>
//                     <p>Edit your personal information</p>
//                   </div>
//                   <form onSubmit={handleSubmit}>
//                     <div className="course-group profile-upload-group mb-0 d-flex">
//                       <div className="course-group-img profile-edit-field d-flex align-items-center">
//                         <Link to="/student/student-profile" className="profile-pic">
//                           <img
//                             src={profileData.photo ? `${profileData.photo}` : User16}
//                             alt="Profile"
//                             className="img-fluid"
//                           />
//                         </Link>
//                         <div className="profile-upload-head">
//                           <h4>Your avatar</h4>
//                           <div className="new-employee-field">
//                             <div className="d-flex align-items-center mt-2">
//                               <div className="image-upload mb-0">
//                                 <input type="file" onChange={handleFileChange} />
//                                 <div className="image-uploads">
//                                   <i className="bx bx-cloud-upload" />
//                                 </div>
//                               </div>
//                               {/* <div className="img-delete">
//                                 <Link to="#" className="delete-icon">
//                                   <i className="bx bx-trash" />
//                                 </Link>
//                               </div> */}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="checkout-form settings-wrap">
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">First Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="first_name"
//                               value={profileData.first_name}
//                               onChange={handleChange}
//                               required
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
//                               value={profileData.last_name}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <label className="form-label">Address</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="address"
//                               value={profileData.address}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="input-block">
//                             <                              label className="form-label">Phone</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="phone"
//                                 value={profileData.phone}
//                                 onChange={handleChange}
//                                 // readOnly
//                               />
//                             </div>
//                           </div>
                          
//                           <div className="col-md-6">
//                             <div className="input-block">
//                               <label className="form-label">Website</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="website"
//                                 value={profileData.website}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="input-block">
//                               <label className="form-label">Twitter Profile</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="twitter_profile"
//                                 value={profileData.twitter_profile}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="input-block">
//                               <label className="form-label">Facebook Profile</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="facebook_profile"
//                                 value={profileData.facebook_profile}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="input-block">
//                               <label className="form-label">Linkedin Profile</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="linkedin_profile"
//                                 value={profileData.linkedin_profile}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="input-block">
//                               <label className="form-label">Youtube Profile</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="youtube_profile"
//                                 value={profileData.youtube_profile}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-12">
//                             <div className="input-block">
//                               <label className="form-label">Email</label>
//                               <input
//                                 type="email"
//                                 className="form-control"
//                                 name="email"
//                                 value={profileData.email}
//                                 onChange={handleChange}
//                                 readOnly
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-12">
//                             <div className="input-block">
//                               <label className="form-label">Headline</label>
//                               <textarea
//                                 className="form-control"
//                                 style={{ height: "150px" }}
//                                 name="headline"
//                                 value={profileData.headline}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
                         
//                           <div className="col-md-12">
//                             <button className="btn btn-primary" type="submit">
//                               Update Profile
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               {/* /Vendor Settings */}
//             </div>
//           </div>
//         </div>

//       </div>
//     );
//   };

// export default StudentSetting;


import React from "react";
import { Link } from "react-router-dom";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import { User16 } from "../../imagepath";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const StudentSetting = () => {
  const token = localStorage.getItem("token");
  const [photoPreview, setPhotoPreview] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const { 
    register, 
    handleSubmit, 
    setValue, 
    formState: { errors } 
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      address: "",
      phone: "",
      website: "",
      email: "",
      photo: "",
      headline: "",
      twitter_profile: "",
      facebook_profile: "",
      linkedin_profile: "",
      youtube_profile: "",
    }
  });

  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/students/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data.data;
        
        // Set form values
        setValue("first_name", data.first_name);
        setValue("last_name", data.last_name);
        setValue("address", data.address);
        setValue("phone", data.phone);
        setValue("website", data.website);
        setValue("email", data.email);
        setValue("headline", data.headline);
        setValue("twitter_profile", data.twitter_profile);
        setValue("facebook_profile", data.facebook_profile);
        setValue("linkedin_profile", data.linkedin_profile);
        setValue("youtube_profile", data.youtube_profile);
        
        // Set photo preview
        if (data.photo) {
          setPhotoPreview(`https://api.novajobs.us${data.photo}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [token, setValue]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    
    // Append all form data
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    
    // Append photo file separately if it exists
    if (photoFile) {
      formData.append("photo", photoFile);
    }
  
    axios
      .patch("https://api.novajobs.us/api/students/edit-profile", formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Error updating profile");
      });
  };
  
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Settings"} />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 pt-4">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Settings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Edit Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <StudentSidebar />
            
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                <div className="profile-heading">
                    <h3>Settings</h3>
                    <p>You have full control to manage your own account settings</p>
                  </div>
                  <div className="edit-profile-info px-4 p-3">
                    <h5>Personal Details</h5>
                    <p>Edit your personal information</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="course-group profile-upload-group mb-0 d-flex">
                      <div className="course-group-img profile-edit-field d-flex align-items-center">
                        <Link to="/student/student-profile" className="profile-pic">
                          <img
                            src={photoPreview || User16}
                            alt="Profile"
                            className="img-fluid"
                          />
                        </Link>
                        <div className="profile-upload-head">
                          <h4>Your avatar</h4>
                          <div className="new-employee-field">
                            <div className="d-flex align-items-center mt-2">
                              <div className="image-upload mb-0">
                                <input type="file" onChange={handleFileChange} />
                                <div className="image-uploads">
                                  <i className="bx bx-cloud-upload" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-form settings-wrap">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                              {...register("first_name", { 
                                required: "First name is required",
                                minLength: {
                                  value: 2,
                                  message: "First name must be at least 2 characters"
                                }
                              })}
                            />
                            {errors.first_name && (
                              <div className="invalid-feedback">{errors.first_name.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                              {...register("last_name", { 
                                required: "Last name is required",
                                minLength: {
                                  value: 2,
                                  message: "Last name must be at least 2 characters"
                                }
                              })}
                            />
                            {errors.last_name && (
                              <div className="invalid-feedback">{errors.last_name.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              {...register("address")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Phone</label>
                            <input
                              type="text"
                              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                              {...register("phone", {
                                pattern: {
                                  value: /^[0-9+\-\s()]*$/,
                                  message: "Please enter a valid phone number"
                                }
                              })}
                            />
                            {errors.phone && (
                              <div className="invalid-feedback">{errors.phone.message}</div>
                            )}
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Website</label>
                            <input
                              type="text"
                              className={`form-control ${errors.website ? 'is-invalid' : ''}`}
                              {...register("website", {
                                pattern: {
                                  value: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?$/,
                                  message: "Please enter a valid URL"
                                }
                              })}
                            />
                            {errors.website && (
                              <div className="invalid-feedback">{errors.website.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Twitter Profile</label>
                            <input
                              type="text"
                              className={`form-control ${errors.twitter_profile ? 'is-invalid' : ''}`}
                              {...register("twitter_profile", {
                                pattern: {
                                  value: /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}\/?$/,
                                  message: "Please enter a valid Twitter profile URL"
                                }
                              })}
                            />
                            {errors.twitter_profile && (
                              <div className="invalid-feedback">{errors.twitter_profile.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Facebook Profile</label>
                            <input
                              type="text"
                              className={`form-control ${errors.facebook_profile ? 'is-invalid' : ''}`}
                              {...register("facebook_profile", {
                                pattern: {
                                  value: /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9.]{1,}$/,
                                  message: "Please enter a valid Facebook profile URL"
                                }
                              })}
                            />
                            {errors.facebook_profile && (
                              <div className="invalid-feedback">{errors.facebook_profile.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Linkedin Profile</label>
                            <input
                              type="text"
                              className={`form-control ${errors.linkedin_profile ? 'is-invalid' : ''}`}
                              {...register("linkedin_profile", {
                                pattern: {
                                  value: /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9\-_%]+/,
                                  message: "Please enter a valid LinkedIn profile URL"
                                }
                              })}
                            />
                            {errors.linkedin_profile && (
                              <div className="invalid-feedback">{errors.linkedin_profile.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Youtube Profile</label>
                            <input
                              type="text"
                              className={`form-control ${errors.youtube_profile ? 'is-invalid' : ''}`}
                              {...register("youtube_profile", {
                                pattern: {
                                  value: /^(https?:\/\/)?(www\.)?youtube\.com\/(channel|user|c)\/[a-zA-Z0-9\-_%]+/,
                                  message: "Please enter a valid YouTube profile URL"
                                }
                              })}
                            />
                            {errors.youtube_profile && (
                              <div className="invalid-feedback">{errors.youtube_profile.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address"
                                }
                              })}
                              readOnly
                            />
                            {errors.email && (
                              <div className="invalid-feedback">{errors.email.message}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block">
                            <label className="form-label">Headline</label>
                            <textarea
                              className={`form-control ${errors.headline ? 'is-invalid' : ''}`}
                              style={{ height: "150px" }}
                              {...register("headline", {
                                maxLength: {
                                  value: 500,
                                  message: "Headline cannot exceed 500 characters"
                                }
                              })}
                            />
                            {errors.headline && (
                              <div className="invalid-feedback">{errors.headline.message}</div>
                            )}
                          </div>
                        </div>
                       
                        <div className="col-md-12">
                          <button className="btn btn-primary" type="submit">
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
    </div>
  );
};

export default StudentSetting;