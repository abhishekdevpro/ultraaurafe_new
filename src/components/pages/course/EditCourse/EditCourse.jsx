// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Footer from "../../../footer";
// import CourseHeader from "../header";
// import Select from "react-select";
// import { useSelector } from "react-redux";


// const EditCourse = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu);
//   const [activeTab, setActiveTab] = useState("basic");
//   const [courseData, setCourseData] = useState({
//     course_title: "",
//     category: "",
//     level: "",
//     course_description: "",
//     course_banner_image: null,
//     course_intro_video: null,
//     requirements: "",
//     course_price: 0,
//     after_discount_price: 0,
//     coupon_code: "",
//     course_language: "",
//     discount_percent: 0,
//     learning_objectives: "",
//     target_audience: "",
//     time_spent_on_course: "",
//   });

//   useEffect(() => {
//     fetchCourseData();
//   }, [id]);

//   const fetchCourseData = async () => {
//     try {
//       const token = localStorage.getItem("trainerToken");
//       const response = await axios.get(`https://api.novajobs.us/api/trainers/course-details/${id}`, {
//         headers: { Authorization: `${token}` },
//       });
//       setCourseData(prev => ({
//         ...prev,
//         ...response.data.data,
//         course_description: response.data.data.course_description || ''
//       }));
//     } catch (error) {
//       console.error("Error fetching course data:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setCourseData({ ...courseData, [e.target.name]: e.target.value });
//   };

//   const handleSelectChange = (name) => (selectedOption) => {
//     setCourseData({ ...courseData, [name]: selectedOption.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setCourseData({ ...courseData, [e.target.name]: file });
//   };

//   const handleSave = async () => {
//     try {
//       const formData = new FormData();
//       for (const key in courseData) {
//         if (courseData[key] !== undefined && courseData[key] !== null) {
//           if (key === "course_banner_image" || key === "course_intro_video") {
//             if (courseData[key] instanceof File) {
//               formData.append(key, courseData[key], courseData[key].name);
//             }
//           } else {
//             formData.append(key, courseData[key]);
//           }
//         }
//       }
//       const token = localStorage.getItem("trainerToken");
//       const response = await axios.patch(`https://api.novajobs.us/api/trainers/update-course/${id}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `${token}`,
//         },
//       });
//       console.log("Course updated successfully:", response.data.data);
//       alert("Course updated successfully!");
//     } catch (error) {
//       console.error("Error updating course:", error);
//       alert("Error updating course. Please try again.");
//     }
//   };

//   const handleAddSection = () => {
//     navigate(`/add-section/${id}`);
//   };

//   const categoryOptions = [
//     { label: "Hardware", value: "Hardware" },
//     { label: "Category 02", value: "Category 02" },
//     { label: "Category 03", value: "Category 03" },
//     { label: "Category 04", value: "Category 04" },
//   ];

//   const levelOptions = [
//     { label: "Beginner", value: "Beginner" },
//     { label: "Level 02", value: "Level 02" },
//     { label: "Level 03", value: "Level 03" },
//     { label: "Level 04", value: "Level 04" },
//   ];

//   const languageOptions = [
//     { label: "English", value: "English" },
//     { label: "Spanish", value: "Spanish" },
//     { label: "French", value: "French" },
//     { label: "German", value: "German" },
//   ];

//   const selectStyle = {
//     menu: (base) => ({ ...base, marginTop: "0px" }),
//     menuList: (base) => ({ ...base, padding: "0" }),
//     option: (provided) => ({
//       ...provided,
//       backgroundColor: mobileSidebar === "disabled" ? "#fff" : "#000",
//       color: mobileSidebar === "disabled" ? "#000" : "#fff",
//       fontSize: "14px",
//       "&:hover": {
//         backgroundColor: mobileSidebar === "disabled" ? "#FFDEDA" : "#2b2838",
//       },
//     }),
//     indicatorSeparator: (base) => ({
//       ...base,
//       display: "none",
//     }),
//     dropdownIndicator: (base, state) => ({
//       ...base,
//       color: "black",
//       transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
//       transition: "250ms",
//       display: "none",
//     }),
//   };

//   return (
//     <div className="main-wrapper">
//       <CourseHeader activeMenu={"EditCourse"} />

//       <section className="page-content course-sec">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-12">
//               <div className="add-course-header">
//                 <h2>Edit Course</h2>
//                 <div className="add-course-btns">
//                   <ul className="nav">
//                     <li>
//                       <Link to="/instructor/instructor-dashboard" className="btn btn-black">
//                         Back to Course
//                       </Link>
//                     </li>
//                     <li>
//                       <button onClick={handleSave} className="btn btn-success-dark">
//                         Save Changes
//                       </button>
//                     </li>
//                     <li>
//                       <button onClick={handleAddSection} className="btn btn-info-dark">
//                         Add Section
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="widget-set">
//                   <div className="widget-setcount">
//                     <ul id="progressbar">
//                       <li className={activeTab === "basic" ? "progress-active" : "progress-activated"}>
//                         <p><span></span> Basic Information</p>
//                       </li>
//                       <li className={activeTab === "media" ? "progress-active" : activeTab === "settings" ? "progress-activated" : ""}>
//                         <p><span></span> Courses Media</p>
//                       </li>
//                       <li className={activeTab === "settings" ? "progress-active" : ""}>
//                         <p><span></span> Settings</p>
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="widget-content multistep-form">
//                     {activeTab === "basic" && (
//                       <div className="add-course-info">
//                         <div className="add-course-inner-header">
//                           <h4>Basic Information</h4>
//                         </div>
//                         <div className="add-course-form">
//                           <form action="#">
//                             <div className="input-block">
//                               <label className="add-course-label">Course Title</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Course Title"
//                                 name="course_title"
//                                 value={courseData.course_title}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Courses Category</label>
//                               <Select
//                                 options={categoryOptions}
//                                 onChange={handleSelectChange("category")}
//                                 value={categoryOptions.find(option => option.value === courseData.category)}
//                                 placeholder="Select Category"
//                                 styles={selectStyle}
//                               />
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Courses Level</label>
//                               <Select
//                                 options={levelOptions}
//                                 onChange={handleSelectChange("level")}
//                                 value={levelOptions.find(option => option.value === courseData.level)}
//                                 placeholder="Select Level"
//                                 styles={selectStyle}
//                               />
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Course Language</label>
//                               <Select
//                                 options={languageOptions}
//                                 onChange={handleSelectChange("course_language")}
//                                 value={languageOptions.find(option => option.value === courseData.course_language)}
//                                 placeholder="Select Language"
//                                 styles={selectStyle}
//                               />
//                             </div>
//                             <div className="input-block mb-0">
//                               <label className="add-course-label">Course Description</label>
//                               <textarea
//                                 className="form-control"
//                                 name="course_description"
//                                 value={courseData.course_description}
//                                 onChange={handleInputChange}
//                                 rows="4"
//                               ></textarea>
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Learning Objectives</label>
//                               <textarea
//                                 className="form-control"
//                                 name="learning_objectives"
//                                 value={courseData.learning_objectives}
//                                 onChange={handleInputChange}
//                               ></textarea>
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Target Audience</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="target_audience"
//                                 value={courseData.target_audience}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Time Spent on Course</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name="time_spent_on_course"
//                                 value={courseData.time_spent_on_course}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                           </form>
//                         </div>
//                         <div className="widget-btn">
//                           <Link to="#" className="btn btn-info-light next_btn" onClick={() => setActiveTab("media")}>
//                             Continue
//                           </Link>
//                         </div>
//                       </div>
//                     )}

//                     {activeTab === "media" && (
//                       <div className="add-course-info">
//                         <div className="add-course-inner-header">
//                           <h4>Courses Media</h4>
//                         </div>
//                         <div className="add-course-form">
//                           <form action="#">
//                             <div className="input-block">
//                               <label className="add-course-label">Course cover image</label>
//                               <div className="relative-form">
//                                 <span>{courseData.course_banner_image instanceof File ? courseData.course_banner_image.name : "Current image"}</span>
//                                 <label className="relative-file-upload">
//                                   Upload File <input type="file" name="course_banner_image" onChange={handleFileChange} />
//                                 </label>
//                               </div>
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Course Intro Video (MP4)</label>
//                               <div className="relative-form">
//                                 <span>{courseData.course_intro_video instanceof File ? courseData.course_intro_video.name : "Current video"}</span>
//                                 <label className="relative-file-upload">
//                                   Upload File <input type="file" name="course_intro_video" onChange={handleFileChange} accept=".mp4" />
//                                 </label>
//                               </div>
//                             </div>
//                           </form>
//                         </div>
//                         <div className="widget-btn">
//                           <Link className="btn btn-black prev_btn" onClick={() => setActiveTab("basic")}>Previous</Link>
//                           <Link className="btn btn-info-light next_btn" onClick={() => setActiveTab("settings")}>Continue</Link>
//                         </div>
//                       </div>
//                     )}

//                     {activeTab === "settings" && (
//                       <div className="add-course-info">
//                         <div className="add-course-inner-header">
//                           <h4>Course Settings</h4>
//                         </div>
//                         <div className="add-course-form">
//                           <form action="#">
//                             <div className="input-block">
//                               <label className="add-course-label">Requirements</label>
//                               <textarea
//                                 className="form-control"
//                                 name="requirements"
//                                 value={courseData.requirements}
//                                 onChange={handleInputChange}
//                               ></textarea>
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Course Price</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 placeholder="0"
//                                 name="course_price"
//                                 value={courseData.course_price}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Discount Percent</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 placeholder="0"
//                                 name="discount_percent"
//                                 value={courseData.discount_percent}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Price After Discount</label>
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 placeholder="0"
//                                 name="after_discount_price"
//                                 value={courseData.after_discount_price}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                             <div className="input-block">
//                               <label className="add-course-label">Coupon Code</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Enter coupon code"
//                                 name="coupon_code"
//                                 value={courseData.coupon_code}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                           </form>
//                         </div>
//                         <div className="widget-btn">
//                           <Link className="btn btn-black prev_btn" onClick={() => setActiveTab("media")}>
//                             Previous
//                           </Link>
//                           <Link className="btn btn-info-light next_btn" onClick={handleSave}>
//                             Save Changes
//                           </Link>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default EditCourse;

import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../../footer";
import CourseHeader from "../header";
import Select from "react-select";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

// Styled components
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const ButtonGroup = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    margin-left: 10px;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-bottom: 10px;

      &:nth-child(2) {
        display: none; /* Hide the Save Changes button on smaller screens */
      }
    }
  }

  & > li > a,
  & > li > button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;

    @media (max-width: 768px) {
      padding: 10px;
      justify-content: center;
      gap:2px;
      font-size: 14px;

      & > span {
        display: none; /* Hide the text on smaller screens */
      }
    }
  }

  & > li > a > svg,
  & > li > button > svg {
    margin-right: 8px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu);
  const [activeTab, setActiveTab] = useState("basic");
  const [courseData, setCourseData] = useState({
    course_title: "",
    category: "",
    level: "",
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

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const token = localStorage.getItem("trainerToken");
        const response = await axios.get(`https://api.novajobs.us/api/trainers/courses/${id}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const { data } = response.data;
        setCourseData({
          course_title: data.course_title,
          category: data.category,
          level: data.level,
          course_description: data.course_description,
          course_banner_image: data.course_banner_image,
          course_intro_video: data.course_intro_video_url,
          requirements: data.requirements,
          course_price: data.course_price,
          after_discount_price: data.after_discount_price,
          coupon_code: data.coupon_code,
          course_language: data.course_language,
          discount_percent: data.discount_percent,
          learning_objectives: data.learning_objectives,
          target_audience: data.target_audience,
          time_spent_on_course: data.time_spent_on_course,
        });
        console
      } catch (error) {
        console.error("Error fetching course data:", error);
        toast.error('Error fetching course data. Please try again.');
        navigate("/instructor/instructor-dashboard");
      }
    };

    fetchCourseData();
  }, [id, navigate]);
  
  const handleInputChange = ({ target: { name, value } }) => {
    setCourseData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (name) => (selectedOption) => {
    setCourseData({ ...courseData, [name]: selectedOption.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCourseData({ ...courseData, [e.target.name]: file });
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      for (const key in courseData) {
        if (courseData[key] !== undefined && courseData[key] !== null) {
          if (key === "course_banner_image" || key === "course_intro_video") {
            if (courseData[key] instanceof File) {
              formData.append(key, courseData[key], courseData[key].name);
            }
          } else {
            formData.append(key, courseData[key]);
          }
        }
      }
      const token = localStorage.getItem("trainerToken");
      const response = await axios.patch(`https://api.novajobs.us/api/trainers/update-course/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });
      console.log("Course updated successfully:", response.data.data);
      toast.success('Course updated successfully!');
      navigate("/instructor/instructor-dashboard");
    } catch (error) {
      console.error("Error updating course:", error);
      toast.error('Error updating course. Please try again.');
    }
  };

  const handleAddSection = () => {
    navigate(`/add-section/${id}`);
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
      <CourseHeader activeMenu={"EditCourse"} />

      <section className="page-content course-sec">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-md-12">
            <HeaderWrapper>
      <Title>Edit Course</Title>
      <ButtonGroup>
        <li>
          <button onClick={handleAddSection} className="btn btn-primary">
            <FeatherIcon icon="plus-circle" />
            <span>Add Section</span>
          </button>
        </li>
        <li>
          <button onClick={handleSave} className="btn btn-success-dark">
            <FeatherIcon icon="save" />
            <span>Save Changes</span>
          </button>
        </li>
        <li>
          <Link to="/instructor/instructor-dashboard" className="btn btn-black">
            <FeatherIcon icon="arrow-left" />
            <span>Back to Course</span>
          </Link>
        </li>
      </ButtonGroup>
    </HeaderWrapper>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="widget-set">
                  <div className="widget-setcount">
                    <ul id="progressbar">
                      <li className={activeTab === "basic" ? "progress-active" : "progress-activated"}>
                        <p><span></span> Basic Information</p>
                      </li>
                      <li className={activeTab === "media" ? "progress-active" : activeTab === "settings" ? "progress-activated" : ""}>
                        <p><span></span> Courses Media</p>
                      </li>
                      <li className={activeTab === "settings" ? "progress-active" : ""}>
                        <p><span></span> Settings</p>
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
                              <label className="add-course-label">Course Title</label>
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
                              <label className="add-course-label">Courses Category</label>
                              <Select
                                options={categoryOptions}
                                onChange={handleSelectChange("category")}
                                value={categoryOptions.find(option => option.value === courseData.category)}
                                placeholder="Select Category"
                                styles={selectStyle}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">Courses Level</label>
                              <Select
                                options={levelOptions}
                                onChange={handleSelectChange("level")}
                                value={levelOptions.find(option => option.value === courseData.level)}
                                placeholder="Select Level"
                                styles={selectStyle}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">Course Language</label>
                              <Select
                                options={languageOptions}
                                onChange={handleSelectChange("course_language")}
                                value={languageOptions.find(option => option.value === courseData.course_language)}
                                placeholder="Select Language"
                                styles={selectStyle}
                              />
                            </div>
                            <div className="input-block mb-0">
                              <label className="add-course-label">Course Description</label>
                              <textarea
                                className="form-control"
                                name="course_description"
                                value={courseData.course_description}
                                onChange={handleInputChange}
                                rows="4"
                              ></textarea>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">Learning Objectives</label>
                              <textarea
                                className="form-control"
                                name="learning_objectives"
                                value={courseData.learning_objectives}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">Target Audience</label>
                              <input
                                type="text"
                                className="form-control"
                                name="target_audience"
                                value={courseData.target_audience}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">Time Spent on Course</label>
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
                          <Link to="#" className="btn btn-info-light next_btn" onClick={() => setActiveTab("media")}>
                            Continue
                          </Link>
                        </div>
                      </div>
                    )}

                    {activeTab === "media" && (
                      <div className="add-course-info">
                        <div className="add-course-inner-header">
                          <h4>Courses Media</h4>
                        </div>
                        <div className="add-course-form">
                          <form action="#">
                            <div className="input-block">
                              <label className="add-course-label">Course cover image</label>
                              <div className="relative-form">
                                <span>{courseData.course_banner_image instanceof File ? courseData.course_banner_image.name : "Current image"}</span>
                                <label className="relative-file-upload">
                                  Upload File <input type="file" name="course_banner_image" onChange={handleFileChange} />
                                </label>
                              </div>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">Course Intro Video (MP4)</label>
                              <div className="relative-form">
                                <span>{courseData.course_intro_video instanceof File ? courseData.course_intro_video.name : "Current video"}</span>
                                <label className="relative-file-upload">
                                  Upload File <input type="file" name="course_intro_video" onChange={handleFileChange} accept=".mp4" />
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="widget-btn">
                          <Link className="btn btn-black prev_btn" onClick={() => setActiveTab("basic")}>Previous</Link>
                          <Link className="btn btn-info-light next_btn" onClick={() => setActiveTab("settings")}>Continue</Link>
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
                              <label className="add-course-label">Requirements</label>
                              <textarea
                                className="form-control"
                                name="requirements"
                                value={courseData.requirements}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                            <div className="input-block">
                              <label className="add-course-label">Course Price</label>
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
                              <label className="add-course-label">Discount Percent</label>
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
                              <label className="add-course-label">Price After Discount</label>
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
                              <label className="add-course-label">Coupon Code</label>
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
                          <Link className="btn btn-black prev_btn" onClick={() => setActiveTab("media")}>
                            Previous
                          </Link>
                          <Link className="btn btn-info-light next_btn" onClick={handleSave}>
                            Save Changes
                          </Link>
                        </div>
                      </div>
                       )}
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="add-course-btns">
                  <ul className="nav">
                  <li>
                      <button onClick={handleAddSection} className=" btn btn-primary">
                        Add Section
                      </button>
                    </li>
                    
                    {/* <li>
                      <button onClick={handleSave} className="btn btn-success-dark">
                        Save Changes
                      </button>
                    </li> */}

                    <li>
                      <Link to="/instructor/instructor-dashboard" className="btn btn-black">
                        Back to Course
                      </Link>
                    </li>

                  </ul>
                </div>
               </div>
             </div>
           </section>
     
           <Footer />
         </div>
       );
     };
     
     export default EditCourse;
     