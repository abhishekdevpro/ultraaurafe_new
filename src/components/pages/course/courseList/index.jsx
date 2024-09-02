import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import CourseHeader from "../header";
import InnerPage from "./innerPage";
import Footer from "../../../footer";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [trainerOptions, setTrainerOptions] = useState([]);
  const [selectedTrainers, setSelectedTrainers] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const token = localStorage.getItem("trainerToken");
  const location = useLocation();

  // Fetch categories
  useEffect(() => {
    axios.get('https://api.novajobs.us/api/trainers/course-categories', {
      headers: { Authorization: token }
    })
    .then(response => {
      const categories = response.data.data.map(category => ({
        label: category.name, 
        value: category.id,
      }));
      setCategoryOptions(categories);
    })
    .catch(error => console.error('Error fetching categories:', error));
  }, [token]);

  // Fetch trainers
  useEffect(() => {
    axios.get('https://api.novajobs.us/api/trainers/getalltrainer', {
      headers: { Authorization: token },
    })
    .then(response => {
      const trainers = response.data.data.map(trainer => ({
        label: `${trainer.trainer.first_name} ${trainer.trainer.last_name}`,
        value: trainer.trainer.id,
      }));
      setTrainerOptions(trainers);
    })
    .catch(error => console.error('Error fetching trainers:', error));
  }, [token]);

  // Fetch levels
  useEffect(() => {
    fetch('https://api.novajobs.us/api/trainers/course-level')
      .then(response => response.json())
      .then(data => {
        const levels = data.data.map(level => ({
          label: level.name,
          value: level.id
        }));
        setLevelOptions(levels);
      })
      .catch(error => console.error('Error fetching levels:', error));
  }, []);

  // Handle category change
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategories(prev =>
      prev.includes(value)
        ? prev.filter(id => id !== value)
        : [...prev, value]
    );
  };

  // Handle trainer change
  const handleTrainerChange = (event) => {
    const value = event.target.value;
    setSelectedTrainers(prevSelected =>
      prevSelected.includes(value)
        ? prevSelected.filter(id => id !== value)
        : [...prevSelected, value]
    );
  };

  // Handle level change
  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  // Fetch courses based on filters and URL parameters
  const fetchCourses = async () => {
    const queryParams = new URLSearchParams();

    if (searchKeyword) queryParams.append("title_keywords", searchKeyword);

    if (selectedCategories.length > 0) {
      queryParams.append("course_category_id", selectedCategories.join('+'));
    }

    if (selectedTrainers.length > 0) {
      queryParams.append("trainer_id", selectedTrainers.join('+'));
    }

    if (selectedLevel) {
      queryParams.append("course_level_id", selectedLevel);
    }

    const apiUrl = queryParams.toString()
      ? `https://api.novajobs.us/api/trainers/all-courses?${queryParams.toString()}`
      : 'https://api.novajobs.us/api/trainers/all-courses';

    try {
      const response = await axios.get(apiUrl, { headers: { Authorization: token } });
      if (response.data && Array.isArray(response.data.data)) {
        setCourses(response.data.data);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const titleKeywords = queryParams.get("title_keywords") || "";
    const courseCategoryIds = queryParams.getAll("course_category_id");
    const trainerIds = queryParams.getAll("trainer_id");
    const courseLevelId = queryParams.get("course_level_id") || "";

    setSearchKeyword(titleKeywords);
    setSelectedCategories(courseCategoryIds);
    setSelectedTrainers(trainerIds);
    setSelectedLevel(courseLevelId);

    fetchCourses();
  }, [location.search]);

  return (
    <>
      <div className="main-wrapper">
        <CourseHeader activeMenu={"CourseList"}/>
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Courses
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        All Courses
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="showing-list">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <div className="view-icons">
                          <Link to="/course-grid" className="grid-view">
                            <FeatherIcon icon="grid" />
                          </Link>
                          <Link to="/course-list" className="list-view active">
                            <FeatherIcon icon="list" />
                          </Link>
                        </div>
                        <div className="show-result">
                          <h4>Showing 1-9 of {courses.length} results</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mt-2">
                      <div className="show-filter add-course-info">
                        <form action="#">
                          <div className="row gx-2 align-items-center">
                            <div className="col-md-6 col-item">
                              <div className="search-group">
                                <i className="feather-search me-2">
                                  <FeatherIcon icon="search" />
                                </i>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search School, Online educational centers, etc"
                                  value={searchKeyword}
                                  onChange={(e) => setSearchKeyword(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-item">
                              {/* Placeholder for additional filters */}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <InnerPage courses={courses} />

                <div className="row">
                  <div className="col-md-12">
                    <ul className="pagination lms-page">
                      <li className="page-item prev">
                        <Link className="page-link" to="#">
                          <i className="fas fa-angle-left" />
                        </Link>
                      </li>
                      {/* Pagination items */}
                      <li className="page-item next">
                        <Link className="page-link" to="#">
                          <i className="fas fa-angle-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 theiaStickySidebar">
                <div className="stickysidebar">
                  <div className="filter-clear">
                    <div className="clear-filter d-flex align-items-center">
                      <h4>
                        <button className="btn sub-btn bg-warning text-white" type="button" onClick={fetchCourses}>
                          Search <i className="fas fa-arrow-right" />
                        </button>
                      </h4>
                      <div className="clear-text">
                        <p>CLEAR</p>
                      </div>
                    </div>

                    <div className="card search-filter categories-filter-blk">
                      <div className="card-body">
                        <div className="filter-widget mb-0">
                          <div className="categories-head d-flex align-items-center">
                            <h4>Course categories</h4>
                            <i className="fas fa-angle-down" />
                          </div>
                          <div className="row px-3">
                            {categoryOptions.map(option => (
                              <label key={option.value} className="custom_check">
                                <input
                                  type="checkbox"
                                  name="select_specialist"
                                  value={option.value}
                                  checked={selectedCategories.includes(option.value)}
                                  onChange={handleCategoryChange}
                                />
                                <span className="checkmark" /> {option.label}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card search-filter">
                      <div className="card-body">
                        <div className="filter-widget mb-0">
                          <div className="categories-head d-flex align-items-center">
                            <h4>Instructors</h4>
                            <i className="fas fa-angle-down" />
                          </div>
                          <div className="row px-3">
                            {trainerOptions.map(option => (
                              <label key={option.value} className="custom_check">
                                <input
                                  type="checkbox"
                                  name="select_trainer"
                                  value={option.value}
                                  checked={selectedTrainers.includes(option.value)}
                                  onChange={handleTrainerChange}
                                />
                                <span className="checkmark" /> {option.label}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card search-filter">
                      <div className="card-body">
                        <div className="filter-widget mb-0">
                          <div className="categories-head d-flex align-items-center">
                            <h4>Level</h4>
                            <i className="fas fa-angle-down" />
                          </div>
                          <div className="row px-3">
                            {levelOptions.map(option => (
                              <label key={option.value} className="custom_check">
                                <input
                                  type="checkbox"
                                  name="select_level"
                                  value={option.value}
                                  checked={selectedLevel === option.value}
                                  onChange={handleLevelChange}
                                />
                                <span className="checkmark" /> {option.label}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CourseList;
