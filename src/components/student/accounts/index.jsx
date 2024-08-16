import React from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { NetIcon01, NetIcon02, NetIcon03, NetIcon04 } from "../../imagepath";
import { Link } from "react-router-dom";

export default function StudentAccounts() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Accounts"} />
      {/* Dashboard Student */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSideBar activeMenu={"Accounts"} />
            {/* sidebar */}

            {/* Linked Accounts */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Linked Accounts</h3>
                    <p>Delete or Close your account permanently.</p>
                  </div>
                  <div className="link-accounts personal-form">
                    <div className="row">
                      <div className="col-auto">
                        <div className="world-img">
                          <img
                            src={NetIcon02}
                            className="img-fluid"
                            alt="Logo"
                          />
                        </div>
                      </div>
                      <div className="col-lg-11">
                        <div className="google-account">
                          <div className="account-list">
                            <h4>Facebook</h4>
                            <p className="mb-0">
                              Enable one-click login and receive more
                              personalized course recommendations.
                            </p>
                          </div>
                          <div className="account-link">
                            <Link to="#" className="btn btn-primary">
                              Remove your facebook Account
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="world-img">
                          <img
                            src={NetIcon01}
                            className="img-fluid"
                            alt="Logo"
                          />
                        </div>
                      </div>
                      <div className="col-lg-11">
                        <div className="google-account">
                          <div className="account-list">
                            <h4>Sign In using Google</h4>
                            <p className="mb-0">
                              Enable one-click login and receive more
                              personalized course recommendations.
                            </p>
                          </div>
                          <div className="google-link">
                            <Link to="#" className="btn btn-primary">
                              Link my google Account
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="world-img">
                          <img
                            src={NetIcon03}
                            className="img-fluid"
                            alt="Logo"
                          />
                        </div>
                      </div>
                      <div className="col-lg-11">
                        <div className="google-account">
                          <div className="account-list">
                            <h4>Github</h4>
                            <p className="mb-0">
                              Enable one-click login and receive more
                              personalized course recommendations.
                            </p>
                          </div>
                          <div className="google-link">
                            <Link to="#" className="btn btn-primary">
                              Link my google Account
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="world-img">
                          <img
                            src={NetIcon04}
                            className="img-fluid"
                            alt="Logo"
                          />
                        </div>
                      </div>
                      <div className="col-lg-11">
                        <div className="google-account mb-0">
                          <div className="account-list">
                            <h4>Twitter</h4>
                            <p className="mb-0">
                              Enable one-click login and receive more
                              personalized course recommendations.
                            </p>
                          </div>
                          <div className="google-link">
                            <Link to="#" className="btn btn-primary">
                              Link my google Account
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Linked Accounts */}
          </div>
        </div>
      </div>
      {/* Dashboard Student */}
      <Footer />
    </div>
  );
}
