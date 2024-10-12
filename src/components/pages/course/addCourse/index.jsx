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
import { debounce } from "lodash";

// import InstructorSidebar from "../../../instructor/sidebar";

const AddCourse = () => {
  const [errors, setErrors] = useState({
    courseBannerImage: "",
    courseIntroVideo: "",
  });
  const navigate = useNavigate();
  const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu);
  const [activeTab, setActiveTab] = useState("basic");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedLevels, setSelectedLevels] = useState([]);


  const [courseData, setCourseData] = useState({
    course_title: "",
    course_category_name: [],
    course_level_name: [],
    course_description: "",
    course_banner_image: null,
    course_intro_video: null,
    requirements: "",
    course_price: 0,
    after_discount_price: 0,
    coupon_code: "",
    course_language: "",
    discount_percent: 0,
    learning_objectives: "",
    target_audience: "",
    time_spent_on_course: "",
  });

  const handleInputChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  // const handleSelectChange = (name) => (selectedOption) => {
  //   if (selectedOption) {
  //     setCourseData((prevData) => ({
  //       ...prevData,
  //       [`${name}_name`]: selectedOption.label,
  //       [`${name}_id`]: selectedOption.value,
  //     }));
  //     console.log(`Updated ${name}:`, selectedOption); // Debugging log
  //   } else {
  //     console.warn(`No option selected for ${name}`);
  //   }
  // };
  const handleSelectChange = (name) => (selectedOptions) => {
    if (selectedOptions && selectedOptions.length > 0) {
      const selectedLabels = selectedOptions.map((option) => option.label);
      const selectedValues = selectedOptions.map((option) => option.value);
  
      setCourseData((prevData) => ({
        ...prevData,
        [`${name}_names`]: selectedLabels, // Store the array of selected labels
        [`${name}_ids`]: selectedValues, // Store the array of selected ids
      }));
  
      console.log(`Updated ${name}:`, selectedOptions); // Debugging log
    } else {
      console.warn(`No options selected for ${name}`);
      setCourseData((prevData) => ({
        ...prevData,
        [`${name}_names`]: [], // Reset to empty array if no selection
        [`${name}_ids`]: [], // Reset to empty array if no selection
      }));
    }
  };
  
  
  const handleEditorChange = (value) => {
    setCourseData({ ...courseData, course_description: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // Only validate the file if it exists (skip validation if no file is uploaded)
    if (name === "course_banner_image" && file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          courseBannerImage:
            "Invalid file type. Only JPEG and PNG are allowed.",
        }));
        toast.error("Invalid file type. Only JPEG and PNG are allowed.");
        return;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, courseBannerImage: "" }));
      }
    }

    if (name === "course_intro_video" && file) {
      if (file.type !== "video/mp4") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          courseIntroVideo: "Invalid file type. Only MP4 is allowed.",
        }));
        toast.error("Invalid file type. Only MP4 is allowed.");
        return;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, courseIntroVideo: "" }));
      }
    }

    // Update the course data even if the file is not present (for optional file fields)
    setCourseData((prevData) => ({
      ...prevData,
      [name]: file || "", // Set the file or empty string if not uploaded
    }));
  };

  useEffect(() => {
    if (courseData.course_price && courseData.discount_percent) {
      const price = parseFloat(courseData.course_price);
      const discount = parseFloat(courseData.discount_percent);
      const discountedPrice = price - price * (discount / 100);
      setCourseData((prevData) => ({
        ...prevData,
        after_discount_price: discountedPrice.toFixed(2),
      }));
    }
  }, [courseData.course_price, courseData.discount_percent]);

  const trainerToken = localStorage.getItem("trainerToken");
  const vendorToken = localStorage.getItem("vendorToken");
  const adminToken = localStorage.getItem("adminToken");

  let token;
  let role;

  if (trainerToken) {
    token = trainerToken;
    role = "instructor"; // Set role to 'trainer'
  } else if (vendorToken) {
    token = vendorToken;
    role = "vendor"; // Set role to 'vendor'
  } else if (adminToken) {
    token = adminToken;
    role = "admin"; // Set role to 'admin'
  } else {
    throw new Error("No valid token found for authentication");
  }

  console.log(token, role);
  const handleSave = debounce(async () => {
    console.log("check");
    await saveCourse();
  }, 3000); // Adjust the debounce delay as needed

  // const saveCourse = async () => {
  //   try {
  //     const formData = new FormData();
  //     console.log(courseData); // Log courseData to check its structure

  //     // Append courseData to formData
  //     for (const key in courseData) {
  //       if (key === "course_banner_image" || key === "course_intro_video") {
  //         // Ensure courseData[key] is a file object
  //         if (courseData[key] instanceof File) {
  //           formData.append(key, courseData[key], courseData[key]?.name);
  //         }
  //       } else {
  //         formData.append(key, courseData[key]);
  //       }
  //     }
  //     console.log(formData, "FormData contents");

  //     const response = await axios.post(
  //       "https://api.novajobs.us/api/trainers/create-course",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: token, // Set the appropriate token
  //         },
  //       }
  //     );

  //     console.log("Course saved successfully:", response.data);
  //     toast.success("Course created successfully!");
  //     setTimeout(() => {
  //       navigate(`/${role}/${role}-dashboard`);
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Error details:", error.response ? error.response.data : error.message);
  //     toast.error("Failed to create section. Please try again.");
  //   }
  // };
  const saveCourse = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      console.log(courseData); // Log courseData to check its structure

      // Append courseData to formData
      for (const key in courseData) {
        if (key === "course_banner_image" || key === "course_intro_video") {
          // Ensure courseData[key] is a file object
          if (courseData[key] instanceof File) {
            formData.append(key, courseData[key], courseData[key]?.name);
          }
        } else {
          formData.append(key, courseData[key]);
        }
      }
      console.log(formData, "FormData contents");

      const response = await axios.post(
        "https://api.novajobs.us/api/trainers/create-course",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token, // Set the appropriate token
          },
        }
      );

      console.log("Course saved successfully:", response.data);
      toast.success("Course created successfully!");
      setTimeout(() => {
        navigate(`/${role}/${role}-dashboard`);
      }, 2000);
    } catch (error) {
      console.error(
        "Error details:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to create section. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://api.novajobs.us/api/trainers/course-categories", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const categories = response.data.data.map((category) => ({
          label: category.name, // category name
          value: category.id, // category id
        }));
        setCategoryOptions(categories);
      })
      .catch((error) => {
        console.error("Error fetching the categories:", error);
      });
  }, []);

  const [levelOptions, setlevelOptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/trainers/course-level", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const level = response.data.data.map((category) => ({
          label: category.name, // category name
          value: category.id, // category id
        }));
        setlevelOptions(level);
      })
      .catch((error) => {
        console.error("Error fetching the categories:", error);
      });
  }, []);

  const languageOptions = [{ id: 1, label: "English", value: "English" }];

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
  // const validateForm = () => {
  //   let isValid = true;
  //   let newErrors = {};

  //   Object.keys(courseData).forEach((key) => {
  //     if (!courseData[key]) {
  //       newErrors[key] = "This field is required";
  //       isValid = false;
  //     }
  //   });

  //   setError(newErrors);
  //   return isValid;
  // };
  // const validateForm = () => {
  //   let isValid = true;
  //   let newErrors = {};

  //   Object.keys(courseData).forEach((key) => {
  //     if (!courseData[key]) {
  //       newErrors[key] = "This field is required";
  //       isValid = false;
  //     }
  //   });

  //   setError(newErrors);
  //   return isValid;
  // };

  const errorStyle = {
    color: "#dc3545",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
    fontWeight: "500",
    display: "block",
    animation: "fadeIn 0.3s",
  };

  // // const inputErrorStyle = {
  // //   borderColor: "#dc3545",
  // //   boxShadow: "0 0 0 0.2rem rgba(220, 53, 69, 0.25)",
  // // };
  // const handleContinue = () => {
  //   if (validateForm()) {
  //     console.log("called");
  //     // If all fields are valid, proceed to the next tab
  //     setActiveTab("media");
  //   }
  // };
  const validateForm = (tab) => {
    let isValid = true;
    let newErrors = {};

    // Define which fields to validate based on the active tab
    const basicFields = [
      "course_title",
      "course_category_name",
      "course_level_name",
      "course_description",
      "course_language_name", // Validate this instead of course_language
      "learning_objectives",
      "target_audience",
      "time_spent_on_course",
    ];

    // Depending on the active tab, validate the appropriate fields
    const fieldsToValidate = tab === "basic" ? basicFields : [];

    console.log("Fields to validate:", fieldsToValidate);
    console.log("Current courseData:", courseData);

    fieldsToValidate.forEach((field) => {
      if (!courseData[field]) {
        newErrors[field] = "This field is required";
        isValid = false;
        console.log(`Validation failed for field: ${field}`);
      }
    });

    setError(newErrors);
    console.log("Errors after validation:", newErrors);

    return isValid;
  };

  const handleContinue = () => {
    // Validate only for the current tab (e.g., "basic")
    if (validateForm("basic")) {
      console.log("Validation successful, moving to the next step");
      setActiveTab("media");
    }
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
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
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
                              <label
                                className="add-course-label"
                                style={{ fontWeight: "700" }}
                              >
                                Course Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Title of your Course"
                                name="course_title"
                                // value={courseData.course_title}
                                onChange={handleInputChange}
                              />
                              {error.course_title && (
                                <span style={errorStyle} className="error">
                                  <i
                                    className="fas fa-exclamation-circle"
                                    style={{ marginRight: "0.25rem" }}
                                  ></i>
                                  {error.course_title}
                                </span>
                              )}
                            </div>

                            <div className="input-block">
                              <label
                                className="add-course-label"
                                style={{ fontWeight: "700" }}
                              >
                                Courses Category / Discipline
                              </label>
                              <div className="w-full">
                                <Select
                                  options={categoryOptions}
                                  onChange={handleSelectChange(
                                    "course_category"
                                  )}
                                  placeholder="Select Category"
                                  styles={selectStyle}
                                  isMulti
                                />
                              </div>
                            </div>
                            {/* <div className="input-block">
                              <label
                                className="add-course-label"
                                style={{ fontWeight: "700" }}
                              >
                                Courses Level
                              </label>
                              <div className="">
                                <select className="w-100 p-2 rounded-2 border">
                                  {levelOptions.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                      className="w-full"
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div> */}
                            <div className="input-block">
                              <label
                                className="add-course-label"
                                style={{ fontWeight: "700" }}
                              >
                                Courses Level
                              </label>
                              <div className="">
                                <Select
                                  // options={levelOptions}
                                  // onChange={handleSelectChange("course_level")}
                                  // placeholder="Select Level"
                                  // styles={selectStyle}
                                  options={levelOptions}
                                  onChange={handleSelectChange("course_level")}
                                  // value={selectedLevels}
                                  placeholder="Select Level"
                                  styles={selectStyle}
                                  isMulti // Enable multiple selections
                                />
                              </div>
                            </div>
                            <div className="input-block">
                              <label
                                className="add-course-label"
                                style={{ fontWeight: "700" }}
                              >
                                Course Language
                              </label>
                              <div className="position-relative">
                                <Select
                                  options={languageOptions}
                                  onChange={handleSelectChange(
                                    "course_language"
                                  )}
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
                                ></i>{" "}
                              </div>
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
                              <label
                                className="add-course-label rounded-3"
                                style={{ fontWeight: "700" }}
                              >
                                Course Description
                              </label>
                              <ReactQuill
                                className="rounded-3 mb-4 pb-4 "
                                onChange={handleEditorChange}
                                placeholder="Enter course description..."
                                style={{ height: "100px" }}
                              />
                              {error.course_description && (
                                <span style={errorStyle} className="error">
                                  <i
                                    className="fas fa-exclamation-circle"
                                    style={{ marginRight: "0.25rem" }}
                                  ></i>
                                  {error.course_description}
                                </span>
                              )}
                            </div>

                            <div className="input-block">
                              <label
                                className="add-course-label"
                                style={{ fontWeight: "700" }}
                              >
                                What you will Learn
                              </label>
                              <textarea
                                className="form-control"
                                name="learning_objectives"
                                value={courseData.learning_objectives}
                                onChange={handleInputChange}
                              ></textarea>
                              {error.learning_objectives && (
                                <span style={errorStyle} className="error">
                                  <i
                                    className="fas fa-exclamation-circle"
                                    style={{ marginRight: "0.25rem" }}
                                  ></i>
                                  {error.learning_objectives}
                                </span>
                              )}
                            </div>
                            <div className="input-block">
                              <label
                                className="add-course-label"
                                style={{ fontWeight: "700" }}
                              >
                                Who is this Course for?
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="target_audience"
                                placeholder="Target Audience"
                                value={courseData.target_audience}
                                onChange={handleInputChange}
                              />
                              {error.target_audience && (
                                <span style={errorStyle} className="error">
                                  <i
                                    className="fas fa-exclamation-circle"
                                    style={{ marginRight: "0.25rem" }}
                                  ></i>
                                  {error.target_audience}
                                </span>
                              )}
                            </div>
                            <div className="input-block">
                              <label
                                className="add-course-label"
                                style={{ fontWeight: "700" }}
                              >
                                Time Spent on Course (in hour)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="time_spent_on_course"
                                placeholder="Time spent on courses"
                                value={courseData.time_spent_on_course}
                                onChange={handleInputChange}
                              />
                              {error.time_spent_on_course && (
                                <span style={errorStyle} className="error">
                                  <i
                                    className="fas fa-exclamation-circle"
                                    style={{ marginRight: "0.25rem" }}
                                  ></i>
                                  {error.time_spent_on_course}
                                </span>
                              )}
                            </div>
                          </form>
                        </div>
                        {/* <div className="widget-btn">
                          <Link
                            to="#"
                            className="btn btn-info-light next_btn"
                            onClick={() => setActiveTab("media")}
                          >
                            Continue
                          </Link>
                         
                        </div> */}
                        <div className="widget-btn">
                          <button
                            className="btn btn-info-light next_btn"
                            onClick={handleContinue}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}

                    {activeTab === "media" && (
                      <div className="add-course-info">
                        <div className="add-course-inner-header">
                          <h4>Courses Media</h4>
                        </div>
                        <div className="add-course-form">
                          <form>
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
                                  Upload File
                                  <input
                                    type="file"
                                    name="course_banner_image"
                                    onChange={handleFileChange}
                                    // required
                                  />
                                </label>
                                {errors.courseBannerImage && (
                                  <p className="error-text">
                                    {errors.courseBannerImage}
                                  </p>
                                )}
                              </div>
                            </div>
                            {/* <div className="input-block">
          <div className="add-image-box">
            <Link to="#">
              <i className="far fa-image" />
            </Link>
          </div>
        </div> */}
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
                                  Upload File
                                  <input
                                    type="file"
                                    name="course_intro_video"
                                    onChange={handleFileChange}
                                    accept=".mp4"
                                    readOnly
                                  />
                                </label>
                                {errors.courseIntroVideo && (
                                  <p className="error-text">
                                    {errors.courseIntroVideo}
                                  </p>
                                )}
                              </div>
                            </div>
                            {/* <div className="input-block">
          <div className="add-image-box add-video-box">
            <Link to="#">
              <i className="fas fa-circle-play" />
            </Link>
          </div>
        </div> */}
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
                          </form>
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
                            {/* <div className="input-block">
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
                            </div> */}
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
                                readOnly
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
                            to="#" // Use '#' to prevent navigation
                            className={`btn ${
                              isLoading ? "btn-secondary" : "btn-info-light"
                            } next_btn`}
                            onClick={handleSave}
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Saving...
                              </>
                            ) : (
                              "Save Course"
                            )}
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
