import React from "react";
import { Link } from "react-router-dom";
import ReactTagsInput from "./tags";

// eslint-disable-next-line react/prop-types
const Settings = ({ nextTab4, prevTab3 }) => {
  return (
    <>
      <fieldset className="field-card" style={{ display: "block" }}>
        <div className="add-course-info">
          <div className="add-course-inner-header">
            <h4>Requirements</h4>
          </div>
          <div className="add-course-form">
            <form action="#">
              <div className="input-block input-block-tagsinput">
                <ReactTagsInput />
              </div>
              <div className="input-block mb-0">
                <label className="add-course-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={10.0}
                />
              </div>
            </form>
          </div>
          <div className="widget-btn">
            <Link className="btn btn-black prev_btn" to="#" onClick={prevTab3}>
              Previous
            </Link>
            <Link
              className="btn btn-info-light next_btn"
              to="#"
              onClick={nextTab4}
            >
              Continue
            </Link>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Settings;
