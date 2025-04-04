import React, { useEffect, useState } from "react";
import Footer from "../../footer";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const [profileData, setProfileData] = useState({});
  // const token = "your_token_here"; // Replace with actual token after login
  const token = localStorage.getItem("token");
const navigate = useNavigate()

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://api.novajobs.us/api/students/profile",
          {
            method: "GET",
            headers: { Authorization: token },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const result = await response.json();
        if (result.status === "success") {
          setProfileData(result.data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [token]);
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Header */}
        <StudentHeader activeMenu={"My Profile"} />
        {/* /Header */}
        {/* Breadcrumb */}
        <div className="breadcrumb-bar breadcrumb-bar-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">My Profile</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/home">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        My Profile
                      </li>
                    </ol>
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
              {/* sidebar */}
              <StudentSidebar />
              {/* /Sidebar */}
              {/* Student Profile */}
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
                            <p>{profileData.first_name}</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="contact-info">
                            <h6>Last Name</h6>
                            <p>{profileData.last_name}</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="contact-info">
                            <h6>Email</h6>
                            <p>{profileData.email}</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="contact-info">
                            <h6>Phone Number</h6>
                            <p>{profileData.phone}</p>
                          </div>
                        </div>
                        {/* Add other fields as needed */}
                      </div>
                    </div>
                    <button 
               onClick={()=>navigate("/student/student-setting")}
              className="btn btn-primary fw-bold px-4 py-2">
                Edit Profile
              </button>
                  </div>
                </div>
              </div>
              

              {/* Student Profile */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Footer */}
        <Footer />
        {/* /Footer */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default StudentProfile;
