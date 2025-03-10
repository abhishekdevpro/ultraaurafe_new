// "use client"
// import Select from "react-select"
// import ReactQuill from "react-quill"
// import "react-quill/dist/quill.snow.css"
// import PropTypes from 'prop-types'

// const BasicInfoForm = ({
//   courseData,
//   errors,
//   categoryOptions,
//   levelOptions,
//   languageOptions,
//   handleInputChange,
//   handleSelectChange,
//   handleQuillChange,
//   selectStyle,
//   errorStyle,
//   onContinue,
// }) => {
//   return (
//     <div className="add-course-info">
//       <div className="add-course-inner-header">
//         <h4>Basic Information</h4>
//       </div>
//       <div className="add-course-form">
//         <form action="#">
//           <div className="input-block">
//             <label className="add-course-label" style={{ fontWeight: "700" }}>
//               Course Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Title of your Course"
//               name="course_title"
//               value={courseData.course_title || ""}
//               onChange={handleInputChange}
//             />
//             {errors.course_title && (
//               <span style={errorStyle} className="error">
//                 <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
//                 {errors.course_title}
//               </span>
//             )}
//           </div>

//           <div className="input-block">
//             <label className="add-course-label" style={{ fontWeight: "700" }}>
//               Courses Category / Discipline
//             </label>
//             <div className="w-full">
//               <Select
//                 options={categoryOptions}
//                 onChange={handleSelectChange("course_category")}
//                 placeholder="Select Category"
//                 styles={selectStyle}
//                 isMulti
//                 value={categoryOptions.filter((option) => 
//                   courseData.course_category_ids?.includes(option.value)
//                 )}
//               />
//             </div>
//             {errors.course_category_name && (
//               <span style={errorStyle} className="error">
//                 <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
//                 {errors.course_category_name}
//               </span>
//             )}
//           </div>

//           <div className="input-block">
//             <label className="add-course-label" style={{ fontWeight: "700" }}>
//               Courses Level
//             </label>
//             <div className="">
//               <Select
//                 options={levelOptions}
//                 onChange={handleSelectChange("course_level")}
//                 placeholder="Select Level"
//                 styles={selectStyle}
//                 isMulti
//                 value={levelOptions.filter((option) => 
//                   courseData.course_level_ids?.includes(option.value)
//                 )}
//               />
//             </div>
//             {errors.course_level_name && (
//               <span style={errorStyle} className="error">
//                 <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
//                 {errors.course_level_name}
//               </span>
//             )}
//           </div>

//           <div className="input-block">
//             <label className="add-course-label" style={{ fontWeight: "700" }}>
//               Course Language
//             </label>
//             <div className="position-relative">
//               <Select
//                 options={languageOptions}
//                 onChange={handleSelectChange("course_language_name")}
//                 placeholder="Select Language"
//                 styles={selectStyle}
//                 value={languageOptions.find((option) => 
//                   option.value === courseData.course_language_name
//                 ) || null}
//               />
//               <i
//                 className="fas fa-chevron-down position-absolute"
//                 style={{
//                   right: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   pointerEvents: "none",
//                   zIndex: 2,
//                 }}
//               ></i>
//             </div>
//             {errors.course_language_name && (
//               <span style={errorStyle} className="error">
//                 <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
//                 {errors.course_language_name}
//               </span>
//             )}
//           </div>

//           <div className="input-block mb-0">
//             <label className="add-course-label rounded-3" style={{ fontWeight: "700" }}>
//               Course Description
//             </label>
//             <ReactQuill
//               className="rounded-3 mb-4 pb-4"
//               onChange={handleQuillChange}
//               placeholder="Enter course description..."
//               style={{ height: "100px" }}
//               value={courseData.course_description || ""}
//             />
//             {errors.course_description && (
//               <span style={errorStyle} className="error">
//                 <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
//                 {errors.course_description}
//               </span>
//             )}
//           </div>

//           <div className="input-block">
//             <label className="add-course-label" style={{ fontWeight: "700" }}>
//               What you will Learn
//             </label>
//             <textarea
//               className="form-control"
//               name="learning_objectives"
//               value={courseData.learning_objectives || ""}
//               onChange={handleInputChange}
//             ></textarea>
//             {errors.learning_objectives && (
//               <span style={errorStyle} className="error">
//                 <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
//                 {errors.learning_objectives}
//               </span>
//             )}
//           </div>

//           <div className="input-block">
//             <label className="add-course-label" style={{ fontWeight: "700" }}>
//               Who is this Course for?
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="target_audience"
//               placeholder="Target Audience"
//               value={courseData.target_audience || ""}
//               onChange={handleInputChange}
//             />
//             {errors.target_audience && (
//               <span style={errorStyle} className="error">
//                 <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
//                 {errors.target_audience}
//               </span>
//             )}
//           </div>

//           <div className="input-block">
//             <label className="add-course-label" style={{ fontWeight: "700" }}>
//               Time Spent on Course (in hour)
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="time_spent_on_course"
//               placeholder="Time spent on courses"
//               value={courseData.time_spent_on_course || ""}
//               onChange={handleInputChange}
//             />
//             {errors.time_spent_on_course && (
//               <span style={errorStyle} className="error">
//                 <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
//                 {errors.time_spent_on_course}
//               </span>
//             )}
//           </div>
//         </form>
//       </div>
//       <div className="widget-btn">
//         <button className="btn btn-info-light next_btn" onClick={onContinue}>
//           Continue
//         </button>
//       </div>
//     </div>
//   )
// }

// // Add PropTypes for validation
// BasicInfoForm.propTypes = {
//   courseData: PropTypes.shape({
//     course_title: PropTypes.string,
//     course_category_ids: PropTypes.array,
//     course_level_ids: PropTypes.array,
//     course_language_name: PropTypes.string,
//     course_description: PropTypes.string,
//     learning_objectives: PropTypes.string,
//     target_audience: PropTypes.string,
//     time_spent_on_course: PropTypes.string
//   }),
//   errors: PropTypes.object,
//   categoryOptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       label: PropTypes.string
//     })
//   ),
//   levelOptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       label: PropTypes.string
//     })
//   ),
//   languageOptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       label: PropTypes.string
//     })
//   ),
//   handleInputChange: PropTypes.func.isRequired,
//   handleSelectChange: PropTypes.func.isRequired,
//   handleQuillChange: PropTypes.func.isRequired,
//   selectStyle: PropTypes.object,
//   errorStyle: PropTypes.object,
//   onContinue: PropTypes.func.isRequired
// }

// // Add default props
// BasicInfoForm.defaultProps = {
//   courseData: {},
//   errors: {},
//   categoryOptions: [],
//   levelOptions: [],
//   languageOptions: [],
//   selectStyle: {},
//   errorStyle: { color: 'red' }
// }

// export default BasicInfoForm

"use client"
import { Link } from "react-router-dom"
import Select, { components } from "react-select"
import FeatherIcon from "feather-icons-react"
import ReactQuill from "react-quill"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledSelect = styled(Select)`
  .select__control {
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    min-height: 44px;
    box-shadow: none;

    &:hover {
      border-color: #b3b3b3;
    }
  }

  .select__indicator-separator {
    display: none;
  }

  .select__dropdown-indicator {
    color: #333;
  }

  .select__menu {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e5e5;
  }

  .select__option {
    background-color: ${(props) => (props.mobileSidebar === "disabled" ? "#fff" : "#000")};
    color: ${(props) => (props.mobileSidebar === "disabled" ? "#000" : "#fff")};
    font-size: 14px;

    &:hover {
      background-color: ${(props) => (props.mobileSidebar === "disabled" ? "#FFDEDA" : "#2b2838")};
    }
  }
`

const DropdownIcon = styled(FeatherIcon)`
  width: 18px;
  height: 18px;
`

const BasicInfoTab = ({
  courseData,
  categoryOptions,
  levelOptions,
  mobileSidebar,
  handleInputChange,
  handleSelectChange,
  handleQuillChange,
  onContinue,
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "44px",
    }),
  }

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <DropdownIcon icon="chevron-down" />
      </components.DropdownIndicator>
    )
  }

  const languageOptions = [
    { label: "English", value: "English" },
    { label: "Spanish", value: "Spanish" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
  ]

  return (
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
            <StyledSelect
              options={categoryOptions}
              onChange={handleSelectChange("course_category_id")}
              value={categoryOptions.find((option) => option.value === courseData.course_category_id)}
              placeholder="Select Category"
              styles={customStyles}
              components={{ DropdownIndicator }}
              mobileSidebar={mobileSidebar}
            />
          </div>
          <div className="input-block">
            <label className="add-course-label">Courses Level</label>
            <StyledSelect
              options={levelOptions}
              onChange={handleSelectChange("course_level_id")}
              value={levelOptions.find((option) => option.value === courseData.course_level_id)}
              placeholder="Select Level"
              styles={customStyles}
              components={{ DropdownIndicator }}
              mobileSidebar={mobileSidebar}
            />
          </div>
          <div className="input-block">
            <label className="add-course-label">Course Language</label>
            <StyledSelect
              options={languageOptions}
              onChange={handleSelectChange("course_language")}
              value={languageOptions.find((option) => option.value === courseData.course_language)}
              placeholder="Select Language"
              styles={customStyles}
              components={{ DropdownIndicator }}
              mobileSidebar={mobileSidebar}
            />
          </div>
          <div className="input-block mb-0">
            <label className="add-course-label">Course Description</label>
            <ReactQuill
              value={courseData.course_description}
              onChange={handleQuillChange("course_description")}
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
          </div>
          <div className="input-block">
            <label className="add-course-label">Learning Objectives</label>
            <ReactQuill
              value={courseData.learning_objectives}
              onChange={handleQuillChange("learning_objectives")}
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
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
        <Link to="#" className="btn btn-info-light next_btn" onClick={onContinue}>
          Continue
        </Link>
      </div>
    </div>
  )
}
BasicInfoTab.propTypes = {
  courseData: PropTypes.shape({
    course_title: PropTypes.string,
    course_category_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    course_level_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    course_language: PropTypes.string,
    course_description: PropTypes.string,
    learning_objectives: PropTypes.string,
    target_audience: PropTypes.string,
    time_spent_on_course: PropTypes.string,
  }).isRequired,
  categoryOptions: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })
  ).isRequired,
  levelOptions: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })
  ).isRequired,
  mobileSidebar: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleQuillChange: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};
export default BasicInfoTab

