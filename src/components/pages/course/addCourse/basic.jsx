import React from "react";
import { Link } from "react-router-dom";
import TextEditor from "./editor";
import Select from "react-select";
import { useState } from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line react/prop-types
const Basic = ({ nextTab }) => {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [input, setInput] = useState(null);

  const option = [
    { label: "Category 01", value: "" },
    { label: "Category 02", value: "Category 02" },
    { label: "Category 03", value: "Category 03" },
    { label: "Category 04", value: "Category 04" },
  ];

  const options = [
    { label: "Level 01", value: "" },
    { label: "Level 02", value: "Level 02" },
    { label: "Level 03", value: "Level 03" },
    { label: "Level 04", value: "Level 04" },
  ];

  const style = {
  
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
      display: "none"
    }),
    }


  return (
    <>
      <fieldset id="first">
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
                />
              </div>
              <div className="input-block">
                <label className="add-course-label">Courses Category</label>
                <Select
                  options={option}
                  defaultValue={input}
                  onChange={setInput}
                  placeholder="Category 01"
                  styles={style}
                ></Select>
              </div>
              <div className="input-block">
                <label className="add-course-label">Courses Level</label>
                <Select
                  options={options}
                  defaultValue={input}
                  onChange={setInput}
                  placeholder="Level 01"
                  styles={style}
                ></Select>
              </div>
              <div className="input-block mb-0">
                <label className="add-course-label">Course Description</label>
                <div id="editor">
                  <TextEditor />
                </div>
              </div>
            </form>
          </div>
          <div className="widget-btn">
            <Link to="#" className="btn btn-black">
              Back
            </Link>
            <Link
              to="#"
              className="btn btn-info-light next_btn"
              onClick={nextTab}
            >
              Continue
            </Link>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Basic;
