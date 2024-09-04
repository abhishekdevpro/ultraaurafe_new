import React, { useEffect, useState } from "react";
import axios from "axios";
// import { User17 } from "../imagepath"; // Uncomment this if you have a default placeholder image
import Footer from "../footer";
import { Link } from "react-router-dom";
import VendorSidebar from "./VendorSidebar";
import VendorHeader from "./VendorHeader";

const VendorSetting = () => {
  const token = localStorage.getItem("vendorToken");

  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    designation: "",
    phone: "",
    instituteName: "",
    website: "",
    email: "",
    location: "",
    photo: "",
    about: "",
  });

  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/vendors/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setProfileData({
          first_name: data.first_name,
          last_name: data.last_name,
          designation: data.designation,
          phone: data.phone,
          instituteName: data.institute_name,
          website: data.website,
          email: data.email,
          location: data.location,
          photo: data.photo ? `https://api.novajobs.us${data.photo}` : "", // Properly setting the photo URL
          about: data.about,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in profileData) {
      formData.append(key, profileData[key]);
    }

    axios
      .put("https://api.novajobs.us/api/vendors/profile", formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div className="main-wrapper">
      <VendorHeader activeMenu={"Settings"} />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
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
            <VendorSidebar />
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="edit-profile-info px-4 p-3">
                    <h5>Personal Details</h5>
                    <p>Edit your personal information</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="course-group profile-upload-group mb-0 d-flex">
                      <div className="course-group-img profile-edit-field d-flex align-items-center">
                        <Link to="/student/student-profile" className="profile-pic">
                          <img
                            src={profileData.photo ? (profileData.photo) : `https://api.novajobs.us/${profileData.photo}`}
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
                              <div className="img-delete">
                                <Link to="#" className="delete-icon">
                                  <i className="bx bx-trash" />
                                </Link>
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
                            <label className="form-label">Designation</label>
                            <input
                              type="text"
                              className="form-control"
                              name="designation"
                              value={profileData.designation}
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
                              <label className="form-label">Institute Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="instituteName"
                                value={profileData.instituteName}
                                onChange={handleChange}
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
                              <label className="form-label">About</label>
                              <textarea
                                className="form-control"
                                style={{ height: "150px" }}
                                name="about"
                                value={profileData.about}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Location</label>
                              <input
                                type="text"
                                className="form-control"
                                name="location"
                                value={profileData.location}
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
        <Footer />
      </div>
    );
  };

  export default VendorSetting;

