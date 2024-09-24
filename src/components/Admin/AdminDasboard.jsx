
import React, { useState, useEffect } from "react";
import Footer from "../footer";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export const Dashboard = () => {
  const { id } = useParams();
  console.log(id, "trainer id");

  // Define the state variable to store courses
  const [allCourses, setAllCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/trainers/all-courses",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        // Update the state with the fetched courses
        setAllCourses(response.data);
      } catch (error) {
        console.error("Error fetching all courses:", error);
        setError("Error fetching all courses.");
      }
    };
    fetchAllCourses();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

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
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <AdminSidebar />
            {/* /Sidebar */}
            {/* Student Dashboard */}
            <div className="col-xl-9 col-lg-9">
              {/* Dashboard Grid */}
              <div className="row justify-content-center">
                {/* Render the courses */}
                {allCourses.length > 0 ? (
                  <div className="row">
                    {allCourses.map((course) => (
                      <div className="col-md-4" key={course.id}>
                        <div className="course-box flex-fill">
                          <h3>{course.title}</h3>
                          <p>{course.description}</p>
                          {/* Add more course details here */}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                  // <p>No courses available</p>
                )}
              </div>
              {/* /Dashboard Grid */}
              {/* <CourseTable /> */}
            </div>
            {/* /Student Dashboard */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};
export default Dashboard;