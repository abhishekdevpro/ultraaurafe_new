import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Footer from "../footer";

const ConnectTrainer = () => {
  const [trainerConnectivity, setTrainerConnectivity] = useState([]);
  const token = localStorage.getItem("adminToken");

  const fetchTrainerConnectivity = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/uaadmin/trainer-connectivity",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setTrainerConnectivity(response.data.data || []);
    } catch (error) {
      console.error("Error fetching trainer connectivity:", error);
      toast.error("Error fetching trainer connectivity data. Please try again.");
    }
  };

  useEffect(() => {
    fetchTrainerConnectivity();
  }, [token]);

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
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <AdminSidebar />
            </div>
            <div className="col-xl-9 col-lg-9">
              {/* Trainer Connectivity Table */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Trainer Connectivity Requests</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Course Title</th>
                          <th>Preferred Days</th>
                          <th>Time Slot</th>
                          <th>Phone</th>
                          <th>Details</th>
                          <th>Allocate </th>
                        </tr>
                      </thead>
                      <tbody>
                        {trainerConnectivity.map((request) => (
                          <tr key={request.id}>
                            <td>{request.course_name}</td>
                            <td>{request.day}</td>
                            <td>{request.time}</td>
                            <td>{request.phone}</td>
                            <td>{request.details}</td>
                            <td>
                              <button className="btn btn-primary">locate to trainer</button>
                            </td>
                          </tr>
                        ))}
                        {trainerConnectivity.length === 0 && (
                          <tr>
                            <td colSpan="6" className="text-center">No connectivity requests found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
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

export default ConnectTrainer;
