import React from "react";

const Success = () => {
  return (
    <>
      <fieldset className="field-card" style={{display:"block"}}>
        <div className="add-course-info">
          <div className="add-course-msg">
            <i className="fas fa-circle-check"></i>
            <h4>The Course Added Succesfully</h4>
            <p>Admin will be Approve soon.</p>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Success;
