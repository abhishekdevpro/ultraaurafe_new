import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import InnerPage from "./innerPage";
import Footer from "../../../footer";
import Header from "../../../header";
import FullPageLoader from "../../../home/FullPageLoader";

const PartnersCourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageSize] = useState(9);
  const location = useLocation();
  const navigate = useNavigate();

  const fetchPartnerCourses = async (page = 1, searchKeywords = "") => {
    try {
      setLoading(true);
      console.log("Fetching partner courses:", { page, searchKeywords });

      const params = {
        page_no: page,
        page_size: pageSize,
      };

      if (searchKeywords) {
        params.title_keywords = searchKeywords;
      }

      const response = await axios.get(
        "https://api.novajobs.us/api/students/course-partner",
        { params }
      );

      console.log("API Response:", response.data);

      // Only update if we have data
      if (response.data.data && response.data.data.length > 0) {
        setCourses(response.data.data);
        setTotalRecords(response.data.total_records);
        setCurrentPage(page);
        console.log("Courses set:", response.data.data.length);
      } else {
        console.log("No data received from API");
      }
    } catch (error) {
      console.error("Failed to fetch partner courses", error);
      setError("Failed to load partner courses");
    } finally {
      setLoading(false);
    }
  };
  // Initial load
  useEffect(() => {
    fetchPartnerCourses(1, "");
  }, []);

  // Handle search and pagination changes
  useEffect(() => {
    if (currentPage > 1 || searchTerm) {
      fetchPartnerCourses(currentPage, searchTerm);
    }
  }, [currentPage, searchTerm]);

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
    };
  };

  useEffect(() => {
    const { title_keywords } = parseQueryParams();
    if (title_keywords !== searchTerm) {
      setSearchTerm(title_keywords || "");
    }
  }, [location.search]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setCurrentPage(1);
    navigate("", { replace: true });

    // Reset to show all partner courses
    fetchPartnerCourses(1, "");
  };

  const handleSearchClick = () => {
    const searchParams = new URLSearchParams(location.search);
    if (searchTerm) {
      searchParams.set("title_keywords", searchTerm);
    } else {
      searchParams.delete("title_keywords");
    }
    navigate(`?${searchParams.toString()}`, { replace: true });

    // Reset to first page when searching
    setCurrentPage(1);

    // Fetch courses with search term
    fetchPartnerCourses(1, searchTerm);
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
            <div className="col-lg-12">
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
                  totalRecords={totalRecords}
                  pageSize={pageSize}
                  onPageChange={setCurrentPage}
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersCourseList;
