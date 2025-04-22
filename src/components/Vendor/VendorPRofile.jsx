
import React, { useEffect, useState } from "react";
import Footer from "../footer";

import VendorSidebar from "./VendorSidebar";
import VendorHeader from "./VendorHeader";
import axios from "axios";

export const VendorProfile = () => {

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProfileData = async () => {
        try {
          const token = localStorage.getItem('vendorToken'); // Replace with your actual token
          const response = await axios.get("https://api.novajobs.us/api/vendors/profile", {
            headers: {
              Authorization: `${token}`
            }
          });
          console.log(response)
          setProfile(response.data.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProfileData();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(profile,"venPRo");
  return (
    <div className="main-wrapper">
      
       <VendorHeader />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">My Profile</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <VendorSidebar />
            
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details mb-0">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>My Profile</h3>
                  </div>
                  <div className="checkout-form personal-address">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>First Name</h6>
                          <p>{profile.first_name}</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>Last Name</h6>
                          <p>{profile.last_name}</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>Registration Date</h6>
                          <p>{new Date(profile.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                      {/* <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>User Name</h6>
                          <p>{profile.username}</p>
                        </div>
                      </div> */}
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>Email</h6>
                          <p>{profile.email}</p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="contact-info">
                          <h6>Phone Number</h6>
                          <p>{profile.phone}</p>
                        </div>
                      </div>
                      {/* <div className="col-sm-12">
                        <div className="contact-info mb-0">
                          <h6>Bio</h6>
                          <p>{profile.bio}</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
              
            </div>
          </div>
        </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};
export default VendorProfile;