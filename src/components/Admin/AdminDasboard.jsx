import React from "react";
import Footer from "../footer";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import CourseTable from "../instructor/dashboard/CourseList";

export const Dashboard = () => {
  return (
    <div className="main-wrapper">
      <AdminHeader />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Admin Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
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
            <div className="col-xl-9 col-lg-9">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="card dash-info flex-fill">
                  <div className="card-body">
                    <h5>Total Courses</h5>
                    <h2> 100+</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="card dash-info flex-fill">
                  <div className="card-body">
                    <h5>Total Trainers</h5>
                    <h2>50+</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="card dash-info flex-fill">
                  <div className="card-body">
                    <h5>Total Students</h5>
                    <h2>80+</h2>
                  </div>
                </div>
              </div>
            </div>
            <CourseTable />
            </div>
            {/* /Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};
export default Dashboard;
