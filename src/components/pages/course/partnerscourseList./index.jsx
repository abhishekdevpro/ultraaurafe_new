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
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("trainerToken");
  const [partnerCourses, setPartnerCourses] = useState([]);

  const fetchPartnerCourses = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/students/course-partner"
      );
      setPartnerCourses(response.data.data);
    } catch (error) {
      console.error("Failed to fetch partner courses", error);
    }
  };
  useEffect(() => {
    if (partnerCourses.length) {
      console.log("Fetched partner courses:", partnerCourses);
      // Set courses immediately when partner courses are loaded
      setCourses(partnerCourses);
    }
  }, [partnerCourses]);

  useEffect(() => {
    fetchPartnerCourses();
  }, [token]);

  const fetchFilteredCourses = async () => {
    setLoading(true);
    try {
      // Use partner courses data instead of fetching from all-courses
      if (partnerCourses.length > 0) {
        setCourses(partnerCourses);
      } else {
        // Fallback to original API if partner courses are not available
        const {
          title_keywords,
          course_category_id,
          trainer_id,
          course_level_id,
        } = parseQueryParams();
        console.log("Fetching courses with params:", {
          title_keywords,
          course_category_id,
          trainer_id,
          course_level_id,
        });

        const response = await axios.get(
          "https://api.novajobs.us/api/trainers/all-courses",
          {
            params: {
              title_keywords,
              course_category_id: course_category_id.join("+"),
              trainer_id: trainer_id.join("+"),
              course_level_id: course_level_id.join("+"),
            },
            headers: { Authorization: token },
          }
        );

        setCourses(response.data.data || []);
      }
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
    };
  };

  useEffect(() => {
    fetchFilteredCourses();
  }, [location.search, token, partnerCourses]);

  useEffect(() => {
    const { title_keywords } = parseQueryParams();
    setSearchTerm(title_keywords || "");
  }, [location.search]);

  const handleClearFilters = () => {
    setSearchTerm("");
    navigate("", { replace: true });

    // Reset to show all partner courses
    if (partnerCourses.length > 0) {
      setCourses(partnerCourses);
    } else {
      fetchFilteredCourses();
    }
  };

  const handleSearchClick = () => {
    const searchParams = new URLSearchParams(location.search);
    if (searchTerm) {
      searchParams.set("title_keywords", searchTerm);
    } else {
      searchParams.delete("title_keywords");
    }
    navigate(`?${searchParams.toString()}`, { replace: true });

    // Filter partner courses based on search term
    if (partnerCourses.length > 0) {
      const filtered = partnerCourses.filter(
        (course) =>
          course.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          course.level?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCourses(filtered);
    } else {
      fetchFilteredCourses();
    }
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
                          Showing 1-{courses.length} of {courses.length} results
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

              {loading ? <FullPageLoader /> : <InnerPage courses={courses} />}

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
