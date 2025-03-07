import React from "react";
import { Link } from "react-router-dom";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import { User16 } from "../../imagepath";
//import StudentSettingPageHeader from "./settingPageHeader";



import axios from "axios";
import { useState,useEffect } from "react";
// import StudentSettingPageHeader from "./settingPageHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StudentSetting = () => {
  const token = localStorage.getItem("token");

  const [profileData, setProfileData] = useState({
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
        setProfileData({
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          phone: data.phone,
         
          website: data.website,
          email: data.email,
         
          photo: data.photo ? `https://api.novajobs.us${data.photo}` : "", // Properly setting the photo URL
          headline: data.headline,
          twitter_profile: data.twitter_profile,
          facebook_profile: data.facebook_profile,
          linkedin_profile: data.linkedin_profile,
          youtube_profile: data.youtube_profile,
        });
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [token]); // Added token as a dependency to avoid potential issues

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileData((prevData) => ({
      ...prevData,
      photo: file, // Store the selected file
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   for (const key in profileData) {
  //     formData.append(key, profileData[key]);
  //   }

  //   axios
  //     .patch("https://api.novajobs.us/api/students/edit-profile", formData, {
  //       headers: {
  //         Authorization: token,
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       console.log("Profile updated successfully:", response.data);
  //       toast.success("Profile updated successfully")
  //     })
  //     .catch((error) => {
  //       console.error("Error updating profile:", error);
  //       toast.error("Error updating profile")
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in profileData) {
      formData.append(key, profileData[key]);
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
        toast.success("Profile updated successfully"); // Success toast
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast.error("Error updating profile"); // Failure toast
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
                  {/* <StudentSettingPageHeader /> */}
                  <div className="edit-profile-info px-4 p-3">
                    <h5>Personal Details</h5>
                    <p>Edit your personal information</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="course-group profile-upload-group mb-0 d-flex">
                      <div className="course-group-img profile-edit-field d-flex align-items-center">
                        <Link to="/student/student-profile" className="profile-pic">
                          <img
                            src={profileData.photo ? `${profileData.photo}` : User16}
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
                              {/* <div className="img-delete">
                                <Link to="#" className="delete-icon">
                                  <i className="bx bx-trash" />
                                </Link>
                              </div> */}
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
                              className="form-control"
                              name="first_name"
                              value={profileData.first_name}
                              onChange={handleChange}
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
                              value={profileData.last_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              value={profileData.address}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <                              label className="form-label">Phone</label>
                              <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleChange}
                                readOnly
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
                                value={profileData.website}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Twitter Profile</label>
                              <input
                                type="text"
                                className="form-control"
                                name="twitter_profile"
                                value={profileData.twitter_profile}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Facebook Profile</label>
                              <input
                                type="text"
                                className="form-control"
                                name="facebook_profile"
                                value={profileData.facebook_profile}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Linkedin Profile</label>
                              <input
                                type="text"
                                className="form-control"
                                name="linkedin_profile"
                                value={profileData.linkedin_profile}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Youtube Profile</label>
                              <input
                                type="text"
                                className="form-control"
                                name="youtube_profile"
                                value={profileData.youtube_profile}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={profileData.email}
                                onChange={handleChange}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Headline</label>
                              <textarea
                                className="form-control"
                                style={{ height: "150px" }}
                                name="headline"
                                value={profileData.headline}
                                onChange={handleChange}
                              />
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
              {/* /Vendor Settings */}
            </div>
          </div>
        </div>

      </div>
    );
  };

export default StudentSetting;
