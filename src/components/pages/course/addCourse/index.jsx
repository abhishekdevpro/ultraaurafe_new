import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../../footer";
import CourseHeader from "../header";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCourse = () => {
  const navigate = useNavigate();
  const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu);
  const [activeTab, setActiveTab] = useState("basic");
  const [courseData, setCourseData] = useState(() => {
    const savedData = sessionStorage.getItem("courseData");
    return savedData
      ? JSON.parse(savedData)
      : {
          course_title: "Web development",
          category: "Hardware",
          level: "Level 02",
          course_description: "<p>Dummy course</p>",
          course_banner_image: null,
          course_intro_video: null,
          requirements: "laptop",
          course_price: 0,
          after_discount_price: 0,
          coupon_code: "summy",
          course_language: "English",
          discount_percent: 0,
          learning_objectives: "dummy",
          target_audience: "students",
          time_spent_on_course: "10 hours",
        };
  });

  useEffect(() => {
    sessionStorage.setItem("courseData", JSON.stringify(courseData));
  }, [courseData]);

  const handleInputChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name) => (selectedOption) => {
    setCourseData({ ...courseData, [name]: selectedOption.value });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setCourseData({ ...courseData, course_description: data });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCourseData({ ...courseData, [e.target.name]: file });
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      for (const key in courseData) {
        if (key === "course_banner_image" || key === "course_intro_video") {
          formData.append(key, courseData[key], courseData[key]?.name);
        } else {
          formData.append(key, courseData[key]);
        }
      }
      const token = localStorage.getItem("trainerToken");
      const response = await axios.post(
        "https://api.novajobs.us/api/trainers/create-course",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        }
      );
      console.log("Course saved successfully:", response.data);
      toast.success("Course created successfully!");
      // sessionStorage.removeItem('courseData'); // Clear the session storage after successful save
      setTimeout(() => {
        navigate(`/instructor/instructor-dashboard`);
      }, 2000);
    } catch (error) {
      console.error("Error saving course:", error);
      toast.error("Failed to create section. Please try again.");
    }
  };
  const categoryOptions = [
    { label: "Hardware", value: "Hardware" },
    { label: "Category 02", value: "Category 02" },
    { label: "Category 03", value: "Category 03" },
    { label: "Category 04", value: "Category 04" },
  ];

  const levelOptions = [
    { label: "Beginner", value: "Beginner" },
    { label: "Level 02", value: "Level 02" },
    { label: "Level 03", value: "Level 03" },
    { label: "Level 04", value: "Level 04" },
  ];

  const languageOptions = [
    { label: "English", value: "English" },
    { label: "Spanish", value: "Spanish" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
  ];

  const selectStyle = {
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided) => ({
      ...provided,
      backgroundColor: mobileSidebar === "disabled" ? "#fff" : "#000",
      color: mobileSidebar === "disabled" ? "#000" : "#fff",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: mobileSidebar === "disabled" ? "#FFDEDA" : "#2b2838",
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
      display: "none",
    }),
  };

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"AddCourse"} />

      <section className="page-content course-sec ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 border border-danger">
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
                      <button
                        onClick={handleSave}
                        className="btn btn-success-dark"
                      >
                        Save
                      </button>
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
                          activeTab === "basic"
                            ? "progress-active"
                            : "progress-activated"
                        }
                      >
                        <p>
                          <span></span> Basic Information
                        </p>
                      </li>
                      <li
                        className={
                          activeTab === "media"
                            ? "progress-active"
                            : activeTab === "settings"
                            ? "progress-activated"
                            : ""
                        }
                      >
                        <p>
                          <span></span> Courses Media
                        </p>
                      </li>
                      <li
                        className={
                          activeTab === "settings" ? "progress-active" : ""
                        }
                      >
                        <p>
                          <span></span> Settings
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="widget-content multistep-form">
                    {activeTab === "basic" && (
                      <div className="add-course-info">
                        <div className="add-course-inner-header">
                          <h4>Basic Information</h4>
                        </div>
                        <div className="add-course-form">
                          <form action="#">
                            <div className="input-block">
                              <label className="add-course-label">
                                Course Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Course Title"
                                name="course_title"
                                value={courseData.course_title}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Courses Category
                              </label>
                              <Select
                                options={categoryOptions}
                                onChange={handleSelectChange("category")}
                                placeholder="Select Category"
                                styles={selectStyle}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Courses Level
                              </label>
                              <Select
                                options={levelOptions}
                                onChange={handleSelectChange("level")}
                                placeholder="Select Level"
                                styles={selectStyle}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Course Language
                              </label>
                              <Select
                                options={languageOptions}
                                onChange={handleSelectChange("course_language")}
                                placeholder="Select Language"
                                styles={selectStyle}
                              />
                            </div>
                            {/* <div className="input-block mb-0">
                              <label className="add-course-label">Course Description</label>
                              <div id="editor">
                                <CKEditor
                                  editor={ClassicEditor}
                                  onChange={handleEditorChange}
                                />
                              </div>
                            </div> */}
                            <div className="input-block mb-0">
                              <label className="add-course-label">
                                Course Description
                              </label>
                              <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Enter course description..."
                                onChange={handleEditorChange} // Update the function to handle textarea changes
                              ></textarea>
                            </div>

                            <div className="input-block">
                              <label className="add-course-label">
                                Learning Objectives
                              </label>
                              <textarea
                                className="form-control"
                                name="learning_objectives"
                                value={courseData.learning_objectives}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Target Audience
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="target_audience"
                                value={courseData.target_audience}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Time Spent on Course
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="time_spent_on_course"
                                value={courseData.time_spent_on_course}
                                onChange={handleInputChange}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="widget-btn">
                          <Link
                            to="#"
                            className="btn btn-info-light next_btn"
                            onClick={() => setActiveTab("media")}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* {activeTab === "media" && (
                      <div className="add-course-info">
                        <div className="add-course-inner-header">
                          <h4>Courses Media</h4>
                        </div>
                        <div className="add-course-form">
                          <form action="#">
                            <div className="input-block">
                              <label className="add-course-label">Course cover image</label>
                              <div className="relative-form">
                                <span>{courseData.course_banner_image ? courseData.course_banner_image.name : "No File Selected"}</span>
                                <label className="relative-file-upload">
                                  Upload File <input type="file" onChange={handleFileChange} />
                                </label>
                              </div>
                            </div>
                            <div className="input-block">
                              <div className="add-image-box">
                                <Link to="#">
                                  <i className="far fa-image" />
                                </Link>
                              </div>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">Course Intro Video </label>
                              <div className="relative-form">
                                <span>{courseData.course_intro_video ? courseData.course_intro_video.name : "No File Selected"}</span>
                                <label className="relative-file-upload">
                                  Upload File <input type="file" name="course_intro_video" onChange={handleFileChange} accept=".mp4" />
                                </label>
                              </div>
                              </div>
                            <div className="input-block">
                              <div className="add-image-box add-video-box">
                                <Link to="#">
                                  <i className="fas fa-circle-play" />
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="widget-btn">
                          <Link className="btn btn-black prev_btn" onClick={() => setActiveTab("basic")}>Previous</Link>
                          <Link className="btn btn-info-light next_btn" onClick={() => setActiveTab("settings")}>Continue</Link>
                        </div>
                      </div>
                    )} */}
                    {activeTab === "media" && (
                      <div className="add-course-info">
                        <div className="add-course-inner-header">
                          <h4>Courses Media</h4>
                        </div>
                        <div className="add-course-form">
                          <form action="#">
                            <div className="input-block">
                              <label className="add-course-label">
                                Course cover image
                              </label>
                              <div className="relative-form">
                                <span>
                                  {courseData.course_banner_image
                                    ? courseData.course_banner_image.name
                                    : "No File Selected"}
                                </span>
                                <label className="relative-file-upload">
                                  Upload File{" "}
                                  <input
                                    type="file"
                                    name="course_banner_image"
                                    onChange={handleFileChange}
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="input-block">
                              <div className="add-image-box">
                                <Link to="#">
                                  <i className="far fa-image" />
                                </Link>
                              </div>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Course Intro Video (MP4)
                              </label>
                              <div className="relative-form">
                                <span>
                                  {courseData.course_intro_video
                                    ? courseData.course_intro_video.name
                                    : "No File Selected"}
                                </span>
                                <label className="relative-file-upload">
                                  Upload File{" "}
                                  <input
                                    type="file"
                                    name="course_intro_video"
                                    onChange={handleFileChange}
                                    accept=".mp4"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="input-block">
                              <div className="add-image-box add-video-box">
                                <Link to="#">
                                  <i className="fas fa-circle-play" />
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="widget-btn">
                          <Link
                            className="btn btn-black prev_btn"
                            onClick={() => setActiveTab("basic")}
                          >
                            Previous
                          </Link>
                          <Link
                            className="btn btn-info-light next_btn"
                            onClick={() => setActiveTab("settings")}
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    )}
                    {activeTab === "settings" && (
                      <div className="add-course-info">
                        <div className="add-course-inner-header">
                          <h4>Course Settings</h4>
                        </div>
                        <div className="add-course-form">
                          <form action="#">
                            <div className="input-block">
                              <label className="add-course-label">
                                Requirements
                              </label>
                              <textarea
                                className="form-control"
                                name="requirements"
                                value={courseData.requirements}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Course Price
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                name="course_price"
                                value={courseData.course_price}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Discount Percent
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                name="discount_percent"
                                value={courseData.discount_percent}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Price After Discount
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                name="after_discount_price"
                                value={courseData.after_discount_price}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">
                                Coupon Code
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter coupon code"
                                name="coupon_code"
                                value={courseData.coupon_code}
                                onChange={handleInputChange}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="widget-btn">
                          <Link
                            className="btn btn-black prev_btn"
                            onClick={() => setActiveTab("media")}
                          >
                            Previous
                          </Link>
                          <Link
                            className="btn btn-info-light next_btn"
                            onClick={handleSave}
                          >
                            Save Course
                          </Link>
                        </div>
                      </div>
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
  );
};

export default AddCourse;
