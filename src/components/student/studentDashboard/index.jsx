import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import StudentHeader from '../header';
import StudentSidebar from '../sidebar';
import { Icon1, Icon2, User6 } from '../../imagepath';

const StudentDashboard = () => {
    const [student, setStudent] = useState({});
    const [allCourses, setAllCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isClassAdded, setIsClassAdded] = useState([false]);

    const toggleClass = (index) => {
        const updatedClasses = [...isClassAdded];
        updatedClasses[index] = !updatedClasses[index];
        setIsClassAdded(updatedClasses);
    };

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) throw new Error("No token found");

                const response = await axios.get(
                    "https://api.novajobs.us/api/students/profile",
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                setStudent(response.data.data);
            } catch (error) {
                console.error("Error fetching student data:", error);
                setError("Error fetching student data.");
            }
        };

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
                setAllCourses(response.data.data);
            } catch (error) {
                console.error("Error fetching all courses:", error);
                setError("Error fetching all courses.");
            }
        };

        const fetchEnrolledCourses = async () => {
            try {
                const response = await axios.get(
                    "https://api.novajobs.us/api/students/mycourse-lists",
                    {
                        headers: {
                            Authorization: localStorage.getItem("token"),
                        },
                    }
                );
                setEnrolledCourses(response.data.data);
            } catch (error) {
                console.error("Error fetching enrolled courses:", error);
                setError("Error fetching enrolled courses.");
            }
        };

        fetchStudentData();
        fetchAllCourses();
        fetchEnrolledCourses();
    }, []);

    const fetchCourseDetails = async (courseId) => {
        try {
            const response = await axios.get(
                `https://api.novajobs.us/api/trainers/course-details/${courseId}`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );
            console.log(response.data);
            navigate(`/course-details/${courseId}`, { state: { courseData: response.data.data } });
        } catch (error) {
            console.error("Error fetching course details:", error);
        }
    };

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <>
            <div className="main-wrapper">
                <StudentHeader activeMenu={"Dashboard"} />
                <div className="breadcrumb-bar breadcrumb-bar-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12">
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
                            <StudentSidebar />
                            <div className="col-xl-9 col-lg-9">
                                <div className="welcome-message">
                                    <img
                                        src={`https://api.novajobs.us${student.photo}` || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"}
                                        alt={student.name}
                                        className="student-image"
                                    />
                                    <h2>Welcome back, {student.first_name} {student.last_name}</h2>
                                </div>
                                <div className="section">
                                    <h3 className="mb-4">Enrolled Courses</h3>
                                    {enrolledCourses.length > 0 ? (
                                        <div className="row">
                                            {enrolledCourses.map((course) => (
                                                <div className="col-md-4" key={course.id}>
                                                    <div className="card course-card" onClick={() => fetchCourseDetails(course.id)}>
                                                        <img
                                                            className="card-img-top"
                                                            src={`https://api.novajobs.us${course.course_banner_image}`}
                                                            alt={course.course_title}
                                                        />
                                                        <div className="card-body">
                                                            <h5 className="card-title">
                                                                {course.course_title}
                                                            </h5>
                                                            <p className="card-text">
                                                                {course.course_description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No enrolled courses available</p>
                                    )}
                                </div>
                                <div className="section">
                                    <h3 className="mb-4">All Courses</h3>
                                    {allCourses.length > 0 ? (
                                        <div className="row">
                                            {allCourses.map((course) => (
                                                <div className="col-md-4" key={course.id}>
                                                    <div className="course-box flex-fill">
                                                        <div className="product">
                                                            <div className="product-img">
                                                                <Link to={`/course-details/${course.id}`} >
                                                                    <img
                                                                        className="img-fluid"
                                                                        src={`https://api.novajobs.us${course.course_banner_image}`}
                                                                        alt={course.course_title}
                                                                    />
                                                                </Link>
                                                                <div className="price">
                                                                    <h3>
                                                                        $0 <span>$0.00</span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <div className="course-group d-flex">
                                                                    <div className="course-group-img d-flex">
                                                                        <Link to="/instructor/instructor-profile">
                                                                            <img
                                                                                src={User6}
                                                                                alt="Img"
                                                                                className="img-fluid"
                                                                            />
                                                                        </Link>
                                                                        <div className="course-name">
                                                                            {/* Instructor details */}
                                                                        </div>
                                                                    </div>
                                                                    <div className="course-share d-flex align-items-center justify-content-center">
                                                                        <Link to="#" onClick={() => toggleClass(5)}>
                                                                            <i className={`fa-regular fa-heart ${isClassAdded[5] ? 'color-active' : ''}`} />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <h3 className="title instructor-text">
                                                                    <Link to="#" onClick={() => fetchCourseDetails(course.id)}>
                                                                        {course.course_title}
                                                                    </Link>
                                                                </h3>
                                                                <div className="course-info d-flex align-items-center">
                                                                    <div className="rating-img d-flex align-items-center">
                                                                        <img src={Icon1} alt="Img" />
                                                                        <p>15+ Lesson</p>
                                                                    </div>
                                                                    <div className="course-view d-flex align-items-center">
                                                                        <img src={Icon2} alt="Img" />
                                                                        <p>70hr 30min</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rating mb-0">
                                                                    <i className="fas fa-star filled me-1" />
                                                                    <i className="fas fa-star filled me-1" />
                                                                    <i className="fas fa-star filled me-1" />
                                                                    <i className="fas fa-star filled me-1" />
                                                                    <i className="fas fa-star me-1" />
                                                                    <span className="d-inline-block average-rating">
                                                                        <span>4.6</span> (15)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No courses available</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;
