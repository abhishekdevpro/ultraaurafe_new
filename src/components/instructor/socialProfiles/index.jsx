import React from "react";
import Footer from "../../footer";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";

export default function InstructorSocialProfiles() {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"SocialProfile"} />
      {/* Page Wrapper */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar activeMenu={"SocialProfile"} />
            {/* Sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Social Profiles</h3>
                    <p>
                      Add your social profile links in below social accounts.
                    </p>
                  </div>
                  <div className="checkout-form personal-address">
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label className="form-control-label">
                              Twitter
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Twitter Profile Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label className="form-control-label">
                              Facebook
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Facebook Profile Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label className="form-control-label">
                              Instagram
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Instagram Profile Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label className="form-control-label">
                              LinkedIn Profile URL
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="LinkedIn Profile URL"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label className="form-control-label">
                              YouTube
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="YouTube"
                            />
                          </div>
                        </div>
                        <div className="update-profile save-social">
                          <button type="button" className="btn btn-primary">
                            Save Social Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
      {/* Page Wrapper */}
      <Footer />
    </div>
  );
}
