import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Select from 'react-select';
import axios from 'axios';
import { Icon1, Icon2 } from '../../imagepath';
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Footer from "../../footer";
import { ToastContainer, toast } from 'react-toastify';  // Import Toast components
import 'react-toastify/dist/ReactToastify.css';  // Import Toast styles

const DynamicCourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState({ value: 'all', label: 'All' });
  const [isClassAdded, setIsClassAdded] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://api.novajobs.us/api/students/mycourse-lists', {
          headers: {
            'Authorization': `${token}`
          }
        });
        setCourses(response.data.data);
        setIsClassAdded(new Array(response.data.data.length).fill(false));
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || 'An error occurred while fetching courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const options = [
    { value: 'all', label: 'All' },
    { value: 'inprogress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' }
  ];

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
    }),
  };

  const filteredCourses = courses.filter(course => 
    course.course_title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterOption.value === 'all' || 
     (filterOption.value === 'inprogress' && course.progress < 100) ||
     (filterOption.value === 'completed' && course.progress === 100))
  );

  const toggleClass = async (index, courseId) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://api.novajobs.us/api/students/course-favorite',
        { course_id: courseId },
        {
          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      // Show success toast
      toast.success('Course added to favorites!');
    } catch (error) {
      console.error('Failed to add course to favorites:', error);
      // Show error toast
      toast.error('Failed to add course to favorites. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger" role="alert">Error: {error}</div>;
  }

  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Enrolled Courses"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Enrolled Courses</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Enrolled Courses
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
            {/* Student Courses */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-info">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Enrolled Courses</h3>
                  </div>
                  <div className="checkout-form pb-0">
                    <div className="wishlist-tab">
                      <ul className="nav">
                        <li className="nav-item">
                          <Link
                            to="#"
                            className="active"
                            data-bs-toggle="tab"
                            data-bs-target="#enroll-courses"
                          >
                            Enrolled Courses ({filteredCourses.length})
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="enroll-courses"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="show-filter choose-search-blk">
                              <form action="#">
                                <div className="mycourse-student align-items-center">
                                  <div className="student-search">
                                    <div className="search-group">
                                      <Search className="searchFeather" size={16} />
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search our courses"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                  <div className="student-filter">
                                    <div className="input-block select-form mb-0">
                                      <Select
                                        className="select country-select"
                                        name="sellist1"
                                        options={options}
                                        value={filterOption}
                                        onChange={setFilterOption}
                                        placeholder="Choose"
                                        styles={style}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                              <div key={course.id} className="col-xl-4 col-md-6 d-flex">
                                <div className="course-box flex-fill">
                                  <div className="product">
                                    <div className="product-img">
                                      <Link to={`/course-info/${course.id}`}>
                                        <img
                                          className="img-fluid"
                                          alt={course.course_title}
                                          src={`https://api.novajobs.us${course.course_banner_image}`}
                                        />
                                      </Link>
                                      <div className="price">
                                        <h3>
                                          ${course.price} <span>${course.original_price}</span>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="product-content">
                                      <div className="course-group d-flex">
                                        <div className="course-group-img d-flex">
                                          <div className="course-name">
                                            <h4>
                                              <Link to={`/instructor/instructor-profile/${course.trainer_id}`}>
                                                {course.trainer_first_name}
                                              </Link>
                                            </h4>
                                            <p>Instructor</p>
                                          </div>
                                        </div>
                                        <div className="course-share d-flex align-items-center justify-content-center">
                                          <Link to="#" onClick={() => toggleClass(index, course.id)}>
                                            <i className={`fa-regular fa-heart ${isClassAdded[index] ? 'color-active' : ''}`} />
                                          </Link>
                                        </div>
                                      </div>
                                      <h3 className="title instructor-text">
                                        <Link to={`/course-info/${course.id}`}>
                                          {course.course_title}
                                        </Link>
                                      </h3>
                                      <div className="course-info d-flex align-items-center">
                                        <div className="rating-img d-flex align-items-center">
                                          <img src={Icon1} alt="Icon" />
                                          <p>{course.total_lectures} Lesson</p>
                                        </div>
                                        <div className="course-view d-flex align-items-center">
                                          <img src={Icon2} alt="Icon" />
                                          <p>{course.course_level_name}</p>
                                        </div>
                                  
                                      </div>
                                      <div className="rating mb-0">
                                        {[...Array(5)].map((star, index) => (
                                          <i
                                            key={index}
                                            className={`fas fa-star ${index < course.rating ? 'filled' : ''}`}
                                          />
                                        ))}
                                        <span className="d-inline-block average-rating">
                                          {course.rating}
                                        </span>

                                      </div>
                                      <div>
                                        <Link to={`/course-info/${course.id}`}>
                                        <button>
                                          Start the Lesson
                                        </button>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div>No courses found.</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Student Courses */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
      {/* Add ToastContainer for toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default DynamicCourseList;
