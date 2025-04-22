
import React, { useEffect, useState } from "react";
import Footer from "../footer";
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
// import CourseTable from "../instructor/dashboard/CourseList";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  padding: 2rem;
`;

const DashboardCard = styled.div`
  background: linear-gradient(135deg, #ffe6f0, #e6f0ff);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  color: #333;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    font-size: 1.3rem;
    margin: 1rem 0 0.5rem;
    color: #007bff;
  }

  p {
    font-size: 0.9rem;
    color: #444;
    margin-bottom: 1.2rem;
  }
`;

const CardButton = styled.button`
  background-color:rgb(83, 88, 143); /* Hot pink */
  color: rgb(255, 255, 255); /* Hot pink */;
  padding: 10px 20px;
  border:2px
  font-weight: bold;
  font-size: 0.9rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:rgb(171, 32, 32);
  }
`;

export const Dashboard = () => {
  const [courseStat, setCourseStat] = useState({}); // Initialize as an empty object
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
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
                  <div className="card dash-info flex-fill" style={{ background: "linear-gradient(135deg, #ffe6f0, #e6f0ff)",color: "#007bff"  }}>
                    <div className="card-body">
                      <h5 style={{color: "#007bff"  }}>Total Courses</h5>
                      <h2>{courseStat.course_count || 0}</h2> {/* Prevent undefined errors */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill" style={{ background: "linear-gradient(135deg, #ffe6f0, #e6f0ff)",color: "#007bff"  }}>
                    <div className="card-body">
                      <h5 style={{color: "#007bff"  }}>Total Trainers</h5>
                      <h2>{courseStat.trainers_count || 0}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill" style={{ background: "linear-gradient(135deg, #ffe6f0, #e6f0ff)",color: "#007bff"  }}>
                    <div className="card-body">
                      <h5 style={{color: "#007bff"  }}>Total Students</h5>
                      <h2>{courseStat.students_count || 0}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <DashboardGrid>
  <DashboardCard>
    <i className="bx bxs-dashboard fa-2x"></i>
    <h3>Dashboard</h3>
    <p>Admin overview panel</p>
    <CardButton onClick={() => navigate("/admin/admin-dashboard")}>
      Go to Dashboard
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-book fa-2x"></i>
    <h3>Course List</h3>
    <p>Manage all  courses</p>
    <CardButton onClick={() => navigate("/admin/course-list")}>
      View Courses
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-user-voice fa-2x"></i>
    <h3>Trainers</h3>
    <p>Manage trainers</p>
    <CardButton onClick={() => navigate("/admin/trainer-list")}>
      Trainers
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-user-plus fa-2x"></i>
    <h3>Add Trainer</h3>
    <p>Onboard a new trainer</p>
    <CardButton onClick={() => navigate("/admin/add-trainer")}>
      Add Trainer
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-group fa-2x"></i>
    <h3>Students</h3>
    <p>Manage enrolled students</p>
    <CardButton onClick={() => navigate("/admin/student-list")}>
      View Students
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-user-plus fa-2x"></i>
    <h3>Add Student</h3>
    <p>Manage Enroll a new student</p>
    <CardButton onClick={() => navigate("/admin/add-student")}>
      Add Student
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-group fa-2x"></i>
    <h3>Partners</h3>
    <p>Manage partner accounts</p>
    <CardButton onClick={() => navigate("/admin/partner-list")}>
      View Partners
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-group fa-2x"></i>
    <h3>Add Coupon</h3>
    <p>Create new discount coupons</p>
    <CardButton onClick={() => navigate("/admin/add-coupon")}>
      Add Coupon
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-group fa-2x"></i>
    <h3>Coupon Lists</h3>
    <p>View all  coupons</p>
    <CardButton onClick={() => navigate("/admin/coupon-list")}>
      View Coupons
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-video fa-2x"></i>
    <h3>Live Classes</h3>
    <p>Manage live sessions</p>
    <CardButton onClick={() => navigate("/admin/live-classes")}>
      Go  Classes
    </CardButton>
  </DashboardCard>

  <DashboardCard>
    <i className="bx bxs-group fa-2x"></i>
    <h3>About Us (CMS)</h3>
    <p>Edit CMS content</p>
    <CardButton onClick={() => navigate("/admin/about-us")}>
      Edit About Us
    </CardButton>
  </DashboardCard>
</DashboardGrid>

              {/* <CourseTable /> */}
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
