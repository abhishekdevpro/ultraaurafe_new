import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
// import { Icon1, Icon2 } from "../../imagepath";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import FullPageLoader from "../../home/FullPageLoader";
import CourseCard from "../../common/CourseCard/CourseCard";

// Styled components
const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 2rem;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AlertText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #856404;
  margin-bottom: 1rem;
`;

const ExploreButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

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

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 2rem;
  // max-height: 600px;
  overflow-y: auto;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #f8f9fa;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`;
const StudentDashboard = () => {
  const [isClassAdded, setIsClassAdded] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true); // Set loading to true before making the request

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://api.novajobs.us/api/students/mycourse-lists",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.data.data && response.data.data.length > 0) {
          setCourses(response.data.data);
          setIsClassAdded(new Array(response.data.data.length).fill(false));
        } else {
          setError("You have not enrolled in any courses yet.");
        }
      } catch (error) {
        // Handle specific error responses
        if (error.response) {
          if (error.response.status === 401) {
            window.location.href = "/login"; // Redirect if token is expired or invalid
          } else {
            setError(
              "Failed to fetch courses. Please check your connection or try again later."
            );
          }
        } else {
          setError(
            "Failed to fetch courses. Please check your connection or try again later."
          ); // Handle other errors
        }
      } finally {
        setLoading(false); // Ensure loading is set to false in all cases
      }
    };

    fetchCourses();
  }, []);

  const toggleClass = async (index, courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please log in to add courses to favorites.");
        navigate("/login");
        return;
      }
      await axios.post(
        "https://api.novajobs.us/api/students/course-favorite",
        { course_id: courseId },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // Show success toast
      toast.success("Course added to favorites!");
    } catch (error) {
      console.error("Failed to add course to favorites:", error);
      // Show error toast
      toast.error("Failed to add course to favorites. Please try again.");
    }
  };

  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Dashboard"} />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 pt-5">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
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
            <div className="col-xl-3 col-lg-3">
              <StudentSidebar />
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex">
                  <div
                    className="card dash-info flex-fill"
                    style={{
                      background: "linear-gradient(135deg, #ffe6f0, #e6f0ff)",
                      color: "#007bff",
                    }}
                  >
                    <div className="card-body">
                      <h5 style={{ color: "#007bff" }}>Enrolled Courses</h5>
                      <h2>{courses.length}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div
                    className="card dash-info flex-fill"
                    style={{
                      background: "linear-gradient(135deg, #ffe6f0, #e6f0ff)",
                    }}
                  >
                    <div className="card-body">
                      <h5 style={{ color: "#007bff" }}>Active Courses</h5>
                      <h2>
                        {
                          courses.filter((course) => course.status === "active")
                            .length
                        }
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div
                    className="card dash-info flex-fill"
                    style={{
                      background: "linear-gradient(135deg, #ffe6f0, #e6f0ff)",
                    }}
                  >
                    <div className="card-body">
                      <h5 style={{ color: "#007bff" }}>Completed Courses</h5>
                      <h2>
                        {
                          courses.filter(
                            (course) => course.status === "completed"
                          ).length
                        }
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <DashboardGrid>
                  <DashboardCard>
                    <i className="fas fa-tachometer-alt fa-2x"></i>
                    <h3>Dashboard</h3>
                    <p>Overview of your activity</p>
                    <CardButton
                      onClick={() => navigate("/student/student-dashboard")}
                    >
                      Go to Dashboard
                    </CardButton>
                  </DashboardCard>

                  <DashboardCard>
                    <i className="fas fa-user fa-2x"></i>
                    <h3>My Profile</h3>
                    <p>View and update your profile</p>
                    <CardButton
                      onClick={() => navigate("/student/student-profile")}
                    >
                      Go to Profile
                    </CardButton>
                  </DashboardCard>

                  <DashboardCard>
                    <i className="fas fa-file-alt fa-2x"></i>
                    <h3>AI Resume Builder</h3>
                    <p>Create smart resumes </p>
                    <CardButton
                      onClick={() =>
                        window.open(
                          "https://novajobs.us/novajobs#tab2",
                          "_blank"
                        )
                      }
                    >
                      Build Resume
                    </CardButton>
                  </DashboardCard>

                  <DashboardCard>
                    <i className="fas fa-briefcase fa-2x"></i>
                    <h3>Novajobs</h3>
                    <p>Explore job opportunities</p>
                    <CardButton
                      onClick={() =>
                        window.open("https://novajobs.us/user/jobs", "_blank")
                      }
                    >
                      Visit NovaJobs
                    </CardButton>
                  </DashboardCard>

                  <DashboardCard>
                    <i className="fas fa-book fa-2x"></i>
                    <h3>My Courses</h3>
                    <p>Access all your enrolled courses</p>
                    <CardButton
                      onClick={() => navigate("/student/student-courses")}
                    >
                      View Courses
                    </CardButton>
                  </DashboardCard>

                  <DashboardCard>
                    <i className="fas fa-heart fa-2x"></i>
                    <h3>Wishlist</h3>
                    <p>Your favorite saved courses</p>
                    <CardButton
                      onClick={() => navigate("/student/student-wishlist")}
                    >
                      Go to Wishlist
                    </CardButton>
                  </DashboardCard>

                  <DashboardCard>
                    <i className="fas fa-cog fa-2x"></i>
                    <h3>Settings</h3>
                    <p>Customize your account settings</p>
                    <CardButton
                      onClick={() => navigate("/student/student-setting")}
                    >
                      Update Settings
                    </CardButton>
                  </DashboardCard>

                  <DashboardCard>
                    <i className="fas fa-headset fa-2x"></i>
                    <h3>Support</h3>
                    <p>Need help? Contact our team</p>
                    <CardButton onClick={() => navigate("/support")}>
                      Get Support
                    </CardButton>
                  </DashboardCard>
                </DashboardGrid>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">Recently Enrolled Courses</h4>
                <ExploreButton
                  className="btn btn-primary "
                  style={{
                    background: "linear-gradient(135deg, #ffe6f0, #e6f0ff)",
                    color: "#007bff",
                  }}
                  onClick={() => navigate("/course-list")}
                >
                  Explore Courses
                </ExploreButton>
              </div>

              {loading ? (
                <FullPageLoader />
              ) : (
                <div className="row">
                  {error ? (
                    <AlertWrapper>
                      <AlertText>
                        You have not enrolled in any courses yet.
                      </AlertText>
                      <Link to="/course-list">
                        <ExploreButton
                          style={{
                            background:
                              "linear-gradient(135deg, #ffe6f0, #e6f0ff)",
                            color: "#007bff",
                          }}
                        >
                          Explore Courses
                        </ExploreButton>
                      </Link>
                    </AlertWrapper>
                  ) : (
                    <CourseGrid>
                      {courses && courses.length > 0 ? (
                        courses.map((course, index) => (
                          <CourseCard
                            key={course.id || index} // ✅ fallback key if id missing
                            course={course}
                            onFavoriteToggle={() =>
                              toggleClass(index, course.id)
                            }
                            isFavorite={isClassAdded[index]}
                            token={localStorage.getItem("token")}
                            isStartButton={true}
                          />
                        ))
                      ) : (
                        <div className="col-12 text-center">
                          <div className="alert alert-info">
                            You have not enrolled in any courses yet.
                          </div>
                        </div>
                      )}
                    </CourseGrid>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
