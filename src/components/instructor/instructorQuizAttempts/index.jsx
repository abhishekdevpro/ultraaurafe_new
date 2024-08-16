import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
const InstructorQuizAttampts = () => {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [setPrivacy] = useState(null);
  const [setDays] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
 
  const options1 = [
    { label: "All", value: "All" },
    { label: "Javascript Course", value: "Javascript Course" },
    { label: "UI/UX Design", value: "UI/UX Design" },
  ];
  const options2 = [
    { label: "Ascending", value: "Assending" },
    { label: "Descending", value: "Descending" },
   
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: mobileSidebar === 'disabled' ? "white":"#131022",
      border:"none",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided) => ({
      ...provided,
      backgroundColor:  mobileSidebar === 'disabled' ? "#fff" : "#000",
      color:mobileSidebar === 'disabled'? '#000':'#fff',
      fontSize: "14px",
      "&:hover": {
        backgroundColor:mobileSidebar === 'disabled'? "#FFDEDA":"#2b2838",
        // #dddddd
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
      display:"none"
    }),
    
  };
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"My Quiz Attempts"} />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar breadcrumb-bar-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">Quiz Attempts</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Quiz Attempts
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
      </>

      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}
            {/* Instructor Quiz */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Quiz Attempts</h3>
                  </div>
                  <div className="checkout-form">
                    <div className="announcement-filter-head">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="input-block customticket">
                            <label className="form-label">Courses</label>

                            <Select
                              className="form-select select country-select ticket-select"
                              name="sellist1"
                              options={options1}
                              defaultValue={options1[0]}
                              placeholder="All"
                              onChange={setDays}
                              styles={style}
                            ></Select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="input-block customticket ">
                            <label className="form-label">Sort By</label>
                            <Select
                          className="form-select select country-select  ticket-select"
                                name="sellist1"
                                options={options2}
                                defaultValue={options2[1]}
                                placeholder="Asecnding"
                                onChange={setPrivacy}
                                styles={style}
                              ></Select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="input-block customticket">
                            <label className="form-label">Created Date</label>
                            <div className="datepicker-icon">
                              {/* <span className="form-icon">
                                <i className="bx bx-calendar" />
                              </span> */}
                              {/* <input
                                type="text"
                                className="form-control datetimepicker"
                              /> */}
                                <DatePicker
                                          className="form-control"
                                          selected={selectedDate1}
                                          onChange={handleDateChange1}
                                          dateFormat="dd/MM/yyyy"
                                          showDayMonthYearPicker
                                        />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive custom-table">
                      {/* Referred Users*/}
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Quiz Info</th>
                            <th>Question</th>
                            <th>Total Marks</th>
                            <th>Correct Answers</th>
                            <th>Incorrect Answers</th>
                            <th>Earned Marks</th>
                            <th>Result</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>March 12, 2024 05:40 PM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>2</td>
                            <td>2</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1(50%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <Link
                                to="/student/student-quiz-details"
                                className="btn btn-light-danger quiz-view"
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>March 05, 2024 04:15 PM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>2(67%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="/instructor/instructor-quiz-attempts"
                                  className="btn btn-light-danger quiz-view"
                                >
                                  Details
                                </Link>
                                <span className="ms-3">
                                  <i className="bx bx-trash" />
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>February 27, 2024 03:20 PM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>5</td>
                            <td>5</td>
                            <td>2</td>
                            <td>3</td>
                            <td>2(40%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="/instructor/instructor-quiz-attempts"
                                  className="btn btn-light-danger quiz-view"
                                >
                                  Details
                                </Link>
                                <span className="ms-3">
                                  <i className="bx bx-trash" />
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>February 16, 2024 02:40 PM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3(100%)</td>
                            <td>
                              <span className="resut-badge badge-light-success">
                                Pass
                              </span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="/instructor/instructor-quiz-attempts"
                                  className="btn btn-light-danger quiz-view"
                                >
                                  Details
                                </Link>
                                <span className="ms-3">
                                  <i className="bx bx-trash" />
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>January 19, 2024 11:00 AM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                            <td>0(0%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="/instructor/instructor-quiz-attempts"
                                  className="btn btn-light-danger quiz-view"
                                >
                                  Details
                                </Link>
                                <span className="ms-3">
                                  <i className="bx bx-trash" />
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="quiz-table">
                                <p>January 08, 2024 09:30 AM</p>
                                <p>
                                  Quiz <i className="bx bx-info-circle" />
                                </p>
                                <p>
                                  <span>Student</span> : studentdemo{" "}
                                </p>
                              </div>
                            </td>
                            <td>3</td>
                            <td>3</td>
                            <td>1</td>
                            <td>2</td>
                            <td>1(33%)</td>
                            <td>
                              <span className="resut-badge badge-light-danger">
                                Fail
                              </span>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="/instructor/instructor-quiz-attempts"
                                  className="btn btn-light-danger quiz-view"
                                >
                                  Details
                                </Link>
                                <span className="ms-3">
                                  <i className="bx bx-trash" />
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dash-pagination">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Page 1 of 2</p>
                  </div>
                  <div className="col-6">
                    <ul className="pagination">
                      <li className="active">
                        <Link to="#">1</Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Instructor Quiz */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorQuizAttampts;
