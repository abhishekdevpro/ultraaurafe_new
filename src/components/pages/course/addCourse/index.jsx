import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer";
import CourseHeader from "../header";
import Basic from "./basic";
import CourseMedia from "./courseMedia";
import Curriculum from "./curriculum";
import Settings from "./settings";
import Success from "./success";

const AddCourse = () => {
  const [TabChange, setTabChange] = useState(false);
  const [TabChange1, setTabChange1] = useState(false);
  const [TabChange2, setTabChange2] = useState(false);
  const [TabChange3, setTabChange3] = useState(false);
  const [PageChange, setPageChange] = useState("basic");

  const nextTab = () => {
    setTabChange(true);
    setPageChange("courseMedia");
  };

  const prevTab1 = () => {
    setTabChange(false);
    setPageChange("basic");
  };

  const nextTab2 = () => {
    setTabChange1(true);
    setTabChange(true);
    setPageChange("curriculum");
  };

  const prevTab2 = () => {
    setTabChange1(false);
    setPageChange("courseMedia");
  };

  const nextTab3 = () => {
    setTabChange2(true);
    setTabChange(true);
    setPageChange("settings");
  };

  const prevTab3 = () => {
    setTabChange2(false);
    setPageChange("curriculum");
  };

  const nextTab4 = () => {
    setTabChange3(true);
    setTabChange(true);
    setPageChange("success");
  };


  return (
    <>
      <div className="main-wrapper">
        <CourseHeader activeMenu={"AddCourse"} />

        <section className="page-content course-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="add-course-header">
                  <h2>Add New Course</h2>
                  <div className="add-course-btns">
                    <ul className="nav">
                      <li>
                        <Link
                          to="/instructor/instructor-dashboard"
                          className="btn btn-black"
                        >
                          Back to Course
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn btn-success-dark">
                          Save
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="widget-set">
                    <div className="widget-setcount">
                      <ul id="progressbar">
                        <li
                          className={
                            TabChange ? "progress-activated" : "progress-active"
                          }
                        >
                          <p>
                            <span></span> Basic Information
                          </p>
                        </li>
                        <li
                          className={
                            TabChange1
                              ? "progress-activated"
                              : "" || TabChange
                              ? "progress-active"
                              : ""
                          }
                        >
                          <p>
                            <span></span> Courses Media
                          </p>
                        </li>
                        <li
                          className={
                            TabChange2
                              ? "progress-activated"
                              : "" || TabChange1
                              ? "progress-active"
                              : ""
                          }
                        >
                          <p>
                            <span></span> Curriculum
                          </p>
                        </li>
                        <li
                          className={
                            TabChange3
                              ? "progress-activated"
                              : "" || TabChange2
                              ? "progress-active"
                              : ""
                          }
                        >
                          <p>
                            <span /> Settings
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="widget-content multistep-form">
                      {PageChange === "basic" ? (
                        <Basic nextTab={nextTab} />
                      ) : (
                        ""
                      )}
                      {PageChange === "courseMedia" ? (
                        <CourseMedia nextTab2={nextTab2} prevTab1={prevTab1} />
                      ) : (
                        ""
                      )}
                      {PageChange === "curriculum" ? (
                        <Curriculum nextTab3={nextTab3} prevTab2={prevTab2} />
                      ) : (
                        ""
                      )}
                      {PageChange === "settings" ? (
                        <Settings nextTab4={nextTab4} prevTab3={prevTab3}/>
                      ) : (
                        ""
                      )}
                      {PageChange === "success" ? (
                        <Success />
                      ) : (
                        ""
                      )}

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

export default AddCourse;
