import React, { useState } from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";

import InstructorSidebar from "../sidebar";
import Select from "react-select";
import { useSelector } from "react-redux";
export default function InstructorProfilePrivacy() {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [setPrivacy] = useState(null);
  const options = [
    { label: "Choose", value: "choose" },
    { label: "Privacy level 1", value: "level1" },
    { label: "Privacy level 2", value: "level2" },
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: mobileSidebar === 'disabled' ? "white":"#131022",
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
    }),
  };
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar activeMenu={"ProfilePrivacy"} />
            {/* Sidebar */}

            {/* Profile Privacy */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Profile Privacy Settings</h3>
                    <p>
                      Making your profile public allow other users to see what
                      you have been learning on Geeks.
                    </p>
                  </div>
                  <div className="checkout-form personal-address add-course-info border-line">
                    <div className="personal-info-head">
                      <h4>Privacy levels</h4>
                      <p>Show your profile public and private.</p>
                    </div>
                    <form action="#">
                      <div className="new-address">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-block mb-0">
                              <label className="form-label">
                                Privacy levels
                              </label>
                              <Select
                                className=" select"
                                name="sellist1"
                                options={options}
                                defaultValue={options[0]}
                                placeholder="Choose"
                                onChange={setPrivacy}
                                styles={style}
                              ></Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="checkout-form personal-address secure-alert">
                    <div className="personal-info-head">
                      <h4>Profile settings</h4>
                      <p>
                        These controls give you the ability to customize what
                        areas of your profile others are able to see.
                      </p>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Updates from Classes You&apos;re Taking
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Updates from Teacher Discussions
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Personalized Class Recommendations
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Featured content
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Product updates
                      </label>
                    </div>
                    <div className="form-check form-switch check-on mb-0">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Events and offers
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Privacy */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
