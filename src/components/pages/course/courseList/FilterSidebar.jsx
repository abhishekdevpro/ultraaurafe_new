import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const FilterSidebar = ({
  levelOptions,
  categoryOptions,
  selectedLevels,
  selectedCategories,
  handleCheckboxChange,
  handleClearFilters,
}) => {
  const [openLevel, setOpenLevel] = useState(true); // default expanded
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <div className="col-lg-3">
      <div className="filter-widget bg-white p-3 shadow-sm rounded">
        <h4 className="filter-title border-bottom pb-2 mb-3">Filter By</h4>
        <div className="py-2">
          <button className="w-100 btn btn-primary" onClick={handleClearFilters}>
            Clear All Filters
          </button>
        </div>

        {/* LEVEL FILTER */}
        <div className="filter-group mb-3">
          <h5
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenLevel(!openLevel)}
          >
            <span>Level</span>
            {openLevel ? <FaChevronUp /> : <FaChevronDown />}
          </h5>
          {openLevel && (
            <div
              className="mt-2"
              style={{
                maxHeight: "250px",
                overflowY: "auto",
                border: "1px solid #eee",
                borderRadius: "5px",
                padding: "8px",
              }}
            >
              {levelOptions.map((level) => (
                <div className="form-check mb-1" key={level.value}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`level-${level.value}`}
                    value={level.value}
                    checked={selectedLevels.includes(level.value)}
                    onChange={(e) => handleCheckboxChange(e, "course_level_id")}
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
          )}
        </div>

        {/* CATEGORY FILTER */}
        <div className="filter-group">
          <h5
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenCategory(!openCategory)}
          >
            <span>Category</span>
            {openCategory ? <FaChevronUp /> : <FaChevronDown />}
          </h5>
          {openCategory && (
            <div
              className="mt-2"
              style={{
                maxHeight: "250px",
                overflowY: "auto",
                border: "1px solid #eee",
                borderRadius: "5px",
                padding: "8px",
              }}
            >
              {categoryOptions.map((category) => (
                <div className="form-check mb-1" key={category.value}>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
FilterSidebar.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      course_title: PropTypes.string.isRequired,
      course_category_id: PropTypes.number.isRequired,
      course_level_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  levelOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  categoryOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedLevels: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  openFilter: PropTypes.string.isRequired,
  handleClearFilters: PropTypes.func.isRequired,
};
