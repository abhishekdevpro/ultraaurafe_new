import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InnerPage from './innerPage'; // Adjust the import path according to your file structure
import Footer from '../../../footer';
import CourseHeader from '../header';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [trainerOptions, setTrainerOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTrainers, setSelectedTrainers] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('trainerToken');

  // Fetch filter options (categories, trainers, levels)
  const fetchOptions = async () => {
    try {
      // Fetch categories
      const categoriesResponse = await axios.get('https://api.novajobs.us/api/trainers/course-categories', {
        headers: { Authorization: token }
      });
      setCategoryOptions(categoriesResponse.data.data.map(category => ({
        label: category.name,
        value: category.id,
      })));

      // Fetch trainers
      const trainersResponse = await axios.get('https://api.novajobs.us/api/trainers/getalltrainer', {
        headers: { Authorization: token },
      });
      setTrainerOptions(trainersResponse.data.data.map(trainer => ({
        label: `${trainer.trainer.first_name} ${trainer.trainer.last_name}`,
        value: trainer.trainer.id,
      })));

      // Fetch levels
      const levelsResponse = await fetch('https://api.novajobs.us/api/trainers/course-level');
      const levelsData = await levelsResponse.json();
      setLevelOptions(levelsData.data.map(level => ({
        label: level.name,
        value: level.id,
      })));
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  // Fetch filtered courses based on query parameters
  const fetchFilteredCourses = async () => {
    setLoading(true);
    try {
      const { title_keywords, course_category_id, trainer_id, course_level_id } = parseQueryParams();

      // Fetch courses based on query parameters
      const response = await axios.get('https://api.novajobs.us/api/trainers/all-courses', {
        params: {
          title_keywords,
          course_category_id: course_category_id.join('+'),
          trainer_id: trainer_id.join('+'),
          course_level_id: course_level_id.join('+'),
        },
        headers: { Authorization: token }
      });

      // Handle response data
      if (response.data && response.data.data) {
        setCourses(response.data.data);
      } else {
        setCourses([]); // Set to an empty array if no data is found
      }
    } catch (error) {
      console.error('Error fetching filtered courses:', error);
      setError('Failed to load courses.');
    } finally {
      setLoading(false);
    }
  };

  // Parse query parameters from URL
  const parseQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return {
      title_keywords: searchParams.get('title_keywords') || searchTerm,
      course_category_id: (searchParams.get('course_category_id') || '').split('+'),
      trainer_id: (searchParams.get('trainer_id') || '').split('+'),
      course_level_id: (searchParams.get('course_level_id') || '').split('+'),
    };
  };

  // Fetch options when component mounts
  useEffect(() => {
    fetchOptions();
  }, [token]);

  // Fetch courses when location.search or searchTerm changes
  useEffect(() => {
    fetchFilteredCourses();
  }, [location.search, token]);

  // Handle changes in the search input field
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (e, filterType) => {
    const value = e.target.value;
    let updatedFilters;

    if (filterType === 'course_category_id') {
      updatedFilters = e.target.checked
        ? [...selectedCategories, value]
        : selectedCategories.filter(id => id !== value);
      setSelectedCategories(updatedFilters);
    } else if (filterType === 'trainer_id') {
      updatedFilters = e.target.checked
        ? [...selectedTrainers, value]
        : selectedTrainers.filter(id => id !== value);
      setSelectedTrainers(updatedFilters);
    } else if (filterType === 'course_level_id') {
      updatedFilters = e.target.checked
        ? [...selectedLevels, value]
        : selectedLevels.filter(id => id !== value);
      setSelectedLevels(updatedFilters);
    }

    // Update URL with selected filters
    const newParams = new URLSearchParams(location.search);
    if (filterType === 'course_category_id') {
      newParams.set('course_category_id', updatedFilters.join('+'));
    } else if (filterType === 'trainer_id') {
      newParams.set('trainer_id', updatedFilters.join('+'));
    } else if (filterType === 'course_level_id') {
      newParams.set('course_level_id', updatedFilters.join('+'));
    }
    navigate(`?${newParams.toString()}`, { replace: true });
    fetchFilteredCourses();
  };

  const handleSearchClick = () => {
    const newParams = new URLSearchParams(location.search);
    newParams.set('title_keywords', searchTerm);
    navigate(`?${newParams.toString()}`, { replace: true });
    fetchFilteredCourses();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"CourseList"} />
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/home">Home</a>
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
                      <div className="show-result">
                        <h4>Showing 1-{courses.length} of {courses.length} results</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="show-filter add-course-info">
                      <form action="#">
                        <div className="row gx-2 align-items-center">
                          <div className="col-md-9 col-item">
                            <div className="search-group">
                              <i className="feather-search me-2">
                                <i className="feather-icon" />
                              </i>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search Courses"
                                value={searchTerm}
                                onChange={handleSearchChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-lg-3 col-item">
                            <button
                              className="btn sub-btn bg-warning text-white"
                              type="button"
                              onClick={handleSearchClick}
                            >
                              Search <i className="fas fa-arrow-right" />
                            </button>
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
                      <a className="page-link" href="#">
                        <i className="fas fa-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item next">
                      <a className="page-link" href="#">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="sidebar-filter">
                <div className="card search-filter">
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="card-title mb-0">Categories</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      {categoryOptions.map(option => (
                        <div key={option.value} className="filter-list">
                          <label className="custom_checkbox">
                            <input
                              type="checkbox"
                              value={option.value}
                              checked={selectedCategories.includes(option.value)}
                              onChange={e => handleCheckboxChange(e, 'course_category_id')}
                            />
                            <span className="checkmark"></span> {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card search-filter">
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="card-title mb-0">Trainers</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      {trainerOptions.map(option => (
                        <div key={option.value} className="filter-list">
                          <label className="custom_checkbox">
                            <input
                              type="checkbox"
                              value={option.value}
                              checked={selectedTrainers.includes(option.value)}
                              onChange={e => handleCheckboxChange(e, 'trainer_id')}
                            />
                            <span className="checkmark"></span> {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card search-filter">
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="card-title mb-0">Levels</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      {levelOptions.map(option => (
                        <div key={option.value} className="filter-list">
                          <label className="custom_checkbox">
                            <input
                              type="checkbox"
                              value={option.value}
                              checked={selectedLevels.includes(option.value)}
                              onChange={e => handleCheckboxChange(e, 'course_level_id')}
                            />
                            <span className="checkmark"></span> {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="card flex-fill bg-white">
                  <div className="card-body">
                    {/* Progress Bars */}
                    {/* The progress bars are kept as-is; adjust if necessary */}
                    {/* ... */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseList;
