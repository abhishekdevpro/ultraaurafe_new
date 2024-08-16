import React from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { Link } from "react-router-dom";
import { Edit } from "react-feather";

export default function StudentBilling() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Billing"} />
      {/* Student Dashboard */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <StudentSideBar activeMenu={"Billing"} />
            {/* Sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Billing Address</h3>
                    <p>
                      Changes to your billing infomration will take effect
                      starting with scheduled payment and will be refelected on
                      your next invoice.
                    </p>
                  </div>
                  <div className="address-check-widget comman-space">
                    <div className="check-bill-address">
                      <div className="add-new-address grad-border hvr-sweep-to-right">
                        <Link
                          to="#"
                          className="btn btn-primary addBg"
                        >
                          Add New Address
                        </Link>
                      </div>
                      <div className="edit-new-address wallet-method wallet-radio-blk d-flex align-items-center">
                        <label className="radio-inline custom_radio me-4">
                          <input type="radio" name="optradio" />
                          <span className="checkmark"></span> 1901 Thornridge
                          Cir. Shiloh, Hawaii 81063
                        </label>
                        <div className="address-edits">
                          <Link to="#" className="edit-btn-blk df">
                            <Edit size={16} />
                          </Link>
                        </div>
                      </div>
                      <div className="edit-new-address wallet-method wallet-radio-blk d-flex align-items-center mb-0">
                        <label className="radio-inline custom_radio me-4">
                          <input type="radio" name="optradio" />
                          <span className="checkmark"></span> 1800 Thomas Cir.
                          France 61063
                        </label>
                        <div className="address-edits">
                          <Link to="#" className="edit-btn-blk">
                            <Edit size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
      {/* Student Dashboard */}
      <Footer />
    </div>
  );
}
