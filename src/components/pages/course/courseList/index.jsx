import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import InnerPage from "./innerPage";
import Footer from "../../../footer";
import Header from "../../../header";
import FullPageLoader from "../../../home/FullPageLoader";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [trainerOptions, setTrainerOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTrainers, setSelectedTrainers] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageSize] = useState(8);
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("trainerToken");

  const fetchOptions = async () => {
    try {
      const [categoriesResponse, levelsResponse] = await Promise.all([
        axios.get("https://api.novajobs.us/api/trainers/course-categories", {
          headers: { Authorization: token },
        }),
        fetch("https://api.novajobs.us/api/trainers/course-level"),
      ]);

      setCategoryOptions(
        categoriesResponse.data.data.map((category) => ({
          label: category.name,
          value: category.id.toString(),
        }))
      );

      // setTrainerOptions(trainersResponse.data.data.map(trainer => ({
      //   label: `${trainer.trainer.first_name} ${trainer.trainer.last_name}`,
      //   value: trainer.trainer.id.toString()
      // })));

      const levelsData = await levelsResponse.json();
      setLevelOptions(
        levelsData.data.map((level) => ({
          label: level.name,
          value: level.id.toString(),
        }))
      );
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  const fetchFilteredCourses = async () => {
    setLoading(true);
    try {
      const {
        title_keywords,
        course_category_id,
        trainer_id,
        course_level_id,
        page_no,
        page_size,
      } = parseQueryParams();
      console.log("Fetching courses with params:", {
        title_keywords,
        course_category_id,
        trainer_id,
        course_level_id,
        page_no,
        page_size,
      });

      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/all-courses",
        {
          params: {
            title_keywords,
            course_category_id: course_category_id.join("+"),
            trainer_id: trainer_id.join("+"),
            course_level_id: course_level_id.join("+"),
            page_no: page_no,
            page_size: page_size,
          },
          headers: { Authorization: token },
        }
      );

      setCourses(response.data.data || []);

      // Update total records from API response
      if (response.data.total_records) {
        setTotalRecords(response.data.total_records);
      }

      // Update current page from URL
      setCurrentPage(page_no);

      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching filtered courses:", error);
      setError("Failed to load courses.");
    } finally {
      setLoading(false);
    }
  };

  const parseQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return {
      title_keywords: searchParams.get("title_keywords") || searchTerm,
      course_category_id: (searchParams.get("course_category_id") || "")
        .split("+")
        .filter(Boolean),
      trainer_id: (searchParams.get("trainer_id") || "")
        .split("+")
        .filter(Boolean),
      course_level_id: (searchParams.get("course_level_id") || "")
        .split("+")
        .filter(Boolean),
      page_no: parseInt(searchParams.get("page_no")) || 1,
      page_size: parseInt(searchParams.get("page_size")) || pageSize,
    };
  };

  useEffect(() => {
    fetchOptions();
  }, [token]);

  useEffect(() => {
    fetchFilteredCourses();
  }, [location.search, token]);

  useEffect(() => {
    const { course_category_id, trainer_id, course_level_id, title_keywords } =
      parseQueryParams();
    setSelectedCategories(course_category_id);
    setSelectedTrainers(trainer_id);
    setSelectedLevels(course_level_id);
    setSearchTerm(title_keywords || "");
  }, [location.search]);

  const handleCheckboxChange = (e, filterType) => {
    const value = e.target.value;
    let updatedFilters;

    if (filterType === "course_category_id") {
      updatedFilters = e.target.checked
        ? [...selectedCategories, value]
        : selectedCategories.filter((id) => id !== value);
      setSelectedCategories(updatedFilters);
    } else if (filterType === "trainer_id") {
      updatedFilters = e.target.checked
        ? [...selectedTrainers, value]
        : selectedTrainers.filter((id) => id !== value);
      setSelectedTrainers(updatedFilters);
    } else if (filterType === "course_level_id") {
      updatedFilters = e.target.checked
        ? [...selectedLevels, value]
        : selectedLevels.filter((id) => id !== value);
      setSelectedLevels(updatedFilters);
    }

    updateURL(filterType, updatedFilters);
  };

  const updateURL = (filterType, filters) => {
    const searchParams = new URLSearchParams(location.search);
    if (filters.length > 0) {
      searchParams.set(filterType, filters.join("+"));
    } else {
      searchParams.delete(filterType);
    }
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedTrainers([]);
    setSelectedLevels([]);
    setSearchTerm("");
    navigate("", { replace: true });
    fetchFilteredCourses();
  };

  const handleSearchClick = () => {
    const searchParams = new URLSearchParams(location.search);
    if (searchTerm) {
      searchParams.set("title_keywords", searchTerm);
    } else {
      searchParams.delete("title_keywords");
    }
    // Reset to page 1 when searching
    searchParams.set("page_no", "1");
    navigate(`?${searchParams.toString()}`, { replace: true });
    fetchFilteredCourses();
  };

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page_no", pageNumber.toString());
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="main-wrapper">
      <Header activeMenu={"CourseList"} />
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                {/* Add breadcrumb content here if needed */}
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
                        <h4>
                          Showing {(currentPage - 1) * pageSize + 1}-
                          {Math.min(currentPage * pageSize, totalRecords)} of{" "}
                          {totalRecords} results
                        </h4>
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
                                onChange={(e) => setSearchTerm(e.target.value)}
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

              {loading ? (
                <FullPageLoader />
              ) : (
                <InnerPage
                  courses={courses}
                  currentPage={currentPage}
                  totalPages={Math.ceil(totalRecords / pageSize)}
                  onPageChange={handlePageChange}
                />
              )}

              <div className="text-center pt-4">
                <button
                  className="btn btn-primary"
                  onClick={handleClearFilters}
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="filter-widget">
                <h4 className="filter-title">Filter By</h4>

                <div className="filter-group">
                  <h5>Category</h5>
                  {categoryOptions.map((category) => (
                    <div className="form-check" key={category.value}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`category-${category.value}`}
                        value={category.value}
                        checked={selectedCategories.includes(category.value)}
                        onChange={(e) =>
                          handleCheckboxChange(e, "course_category_id")
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`category-${category.value}`}
                      >
                        {category.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* <div className="filter-group">
                  <h5>Trainer</h5>
                  {trainerOptions.map((trainer) => (
                    <div className="form-check" key={trainer.value}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`trainer-${trainer.value}`}
                        value={trainer.value}
                        checked={selectedTrainers.includes(trainer.value)}
                        onChange={(e) => handleCheckboxChange(e, 'trainer_id')}
                      />
                      <label className="form-check-label" htmlFor={`trainer-${trainer.value}`}>
                        {trainer.label}
                      </label>
                    </div>
                  ))}
                </div> */}

                <div className="filter-group">
                  <h5>Level</h5>
                  {levelOptions.map((level) => (
                    <div className="form-check" key={level.value}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`level-${level.value}`}
                        value={level.value}
                        checked={selectedLevels.includes(level.value)}
                        onChange={(e) =>
                          handleCheckboxChange(e, "course_level_id")
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`level-${level.value}`}
                      >
                        {level.label}
                      </label>
                    </div>
                  ))}
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
