
import React, { useEffect, useState } from "react";
import Footer from "../footer";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import CourseTable from "../instructor/dashboard/CourseList";
import axios from "axios";

export const Dashboard = () => {
  const [courseStat, setCourseStat] = useState({}); // Initialize as an empty object
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchDashboardInfo = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/uaadmin/dashboard-info",
          {
            headers: {
              Authorization: token , // Proper token handling
            },
          }
        );
        if (response.data.code === 200) {
          setCourseStat(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard info:", error);
      }
    };

    fetchDashboardInfo();
  }, []);

  return (
    <div className="main-wrapper">
      <AdminHeader  />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 pt-4">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Admin Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <AdminSidebar />
            <div className="col-xl-9 col-lg-9">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Courses</h5>
                      <h2>{courseStat.course_count || 0}</h2> {/* Prevent undefined errors */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Trainers</h5>
                      <h2>{courseStat.trainers_count || 0}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Students</h5>
                      <h2>{courseStat.students_count || 0}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <CourseTable />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default Dashboard;
