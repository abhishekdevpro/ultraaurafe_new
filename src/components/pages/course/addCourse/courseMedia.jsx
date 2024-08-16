import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CourseMedia = ({prevTab1,nextTab2}) => {
  return (
    <>
      <fieldset className="field-card" style={{display:"block"}}>
        <div className="add-course-info">
          <div className="add-course-inner-header">
            <h4>Courses Media</h4>
          </div>
          <div className="add-course-form">
            <form action="#">
              <div className="input-block">
                <label className="add-course-label">Course cover image</label>
                <div className="relative-form">
                  <span>No File Selected</span>
                  <label className="relative-file-upload">
                    Upload File <input type="file" />
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Video URL"
                />
              </div>
              <div className="input-block">
                <div className="add-image-box add-video-box">
                  <Link to="#">
                    <i className="fas fa-circle-play"/>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="widget-btn">
            <Link className="btn btn-black prev_btn" onClick={prevTab1}>Previous</Link>
            <Link className="btn btn-info-light next_btn" onClick={nextTab2}>Continue</Link>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default CourseMedia;
