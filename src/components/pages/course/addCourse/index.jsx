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
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
// import InstructorSidebar from "../../../instructor/sidebar";


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

  const handleEditorChange = (value) => {
    setCourseData({ ...courseData, course_description: value });
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
            Authorization: token,
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

  const token = localStorage.getItem("trainerToken");

  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://api.novajobs.us/api/trainers/course-categories', {
      headers: {
        Authorization: token,
      }
    })
      .then(response => {
        const categories = response.data.data.map(category => ({
          label: category.name, // category name
          value: category.id,   // category id
        }));
        setCategoryOptions(categories);
      })
      .catch(error => {
        console.error('Error fetching the categories:', error);
      });
  }, []);

  const [levelOptions, setlevelOptions] = useState([])

  useEffect(() => {
    axios.get('https://api.novajobs.us/api/trainers/course-level', {
      headers: {
        Authorization: token,
      }
    })
      .then(response => {
        const level = response.data.data.map(category => ({
          label: category.name, // category name
          value: category.id,   // category id
        }));
        setlevelOptions(level);
      })
      .catch(error => {
        console.error('Error fetching the categories:', error);
      });
  }, []);


  const languageOptions = [
    { id: 1, label: "English", value: "English" },

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

      <section className="">
        <div className="container">
          {/* <div className="row align-items-center">
            <div className="col-md-12">
              <div className="add-course-header">
                <h2>Add New Course</h2>
                <div className="add-course-btns">
                  <ul className="nav">
                    <li>
                     {/* <Link
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
          </div> */}
           <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Add New Course</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add New Course
                    </li>
                  </ol>
                </nav>
              </div>
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
                              <label className="add-course-label" style={{ fontWeight: "700" }}>
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
                            <div className="input-block w-full">
                              <label className="add-course-label" style={{ fontWeight: "700" }}>
                                Courses Category / Discipline
                              </label>
                              <div className="w-full">
                                <select className="w-100 p-2 rounded-2 border">
                                  <label>Slect</label>
                                  {categoryOptions.map(option => (
                                    <option key={option.value} value={option.value} className="w-full">
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="input-block">
                              <label className="add-course-label" style={{ fontWeight: "700" }}>
                                Courses Level
                              </label>
                              <div className="">
                                <select className="w-100 p-2 rounded-2 border">
                                  {levelOptions.map(option => (
                                    <option key={option.value} value={option.value} className="w-full">
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label" style={{ fontWeight: "700" }}>
                                Course Language
                              </label>
                              <div className="position-relative">
                                <Select
                                  options={languageOptions}
                                  onChange={handleSelectChange("course_language")}
                                  placeholder="Select Language"
                                  styles={selectStyle}
                                />
                                <i
                                  className="fas fa-chevron-down position-absolute"
                                  style={{
                                    right: "10px", // Adjust the positioning as needed
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    pointerEvents: "none", // Ensures the icon doesn't interfere with the select
                                    zIndex: 2,
                                  }}
                                ></i> </div>
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
                              <label className="add-course-label rounded-3" style={{ fontWeight: "700" }}>
                                Course Description
                              </label>
                              <ReactQuill
                                className="rounded-3 h-75 "
                                onChange={handleEditorChange}
                                placeholder="Enter course description..."

                              />
                            </div>

                            <div className="input-block">
                              <label className="add-course-label" style={{ fontWeight: "700" }}>
                                What you will Learn
                              </label>
                              <textarea
                                className="form-control"
                                name="learning_objectives"
                                value={courseData.learning_objectives}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label" style={{ fontWeight: "700" }}>
                                Who is this Course for?
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
                              <label className="add-course-label" style={{ fontWeight: "700" }}>
                                Time Spent on Course (in hour)
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
                                    required
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
                                    readOnly
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
                                Note by Trainer
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