import React from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, CreditCard } from "react-feather";

export default function StudentSubscription() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Subscription"} />
      {/* Student Database */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSideBar activeMenu={"Subscription"} />
            {/* sidebar */}

            {/* My Subscriptions */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading subscription-group d-flex align-items-center">
                    <div className="subscription-name">
                      <h3>My Subscriptions</h3>
                      <p>
                        Here is list of package/product that you have
                        subscribed.
                      </p>
                    </div>
                    <div className="upgrade-now grad-border hvr-sweep-to-right">
                      <Link to="pricing-plan" className="btn btn-primary">
                        Upgrade Now — Go Pro $50.00
                      </Link>
                    </div>
                  </div>
                  <div className="monthly-subscribtion comman-space border-line">
                    <div className="monthly-group d-flex align-items-center">
                      <div className="subscribtion-active">
                        <div className="active-btns">
                          <button type="button" className="btn btn-success">
                            Active
                          </button>
                        </div>
                        <h5>Monthly </h5>
                        <p>Subscription ID: #100010002</p>
                      </div>
                      <div className="active-change-plan grad-border hvr-sweep-to-right">
                        <Link
                          to="pricing-plan"
                          className="btn btn-primary"
                        >
                          Change Plan
                        </Link>
                      </div>
                    </div>
                    <div className="month-plan-detail">
                      <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex">
                          <div className="bill-widget d-flex align-items-center">
                            <div className="plan-icons">
                              <Calendar size={20} />
                            </div>
                            <div className="bill-name-group">
                              <h5>Started On</h5>
                              <p>Oct 1, 2024</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-md-6 d-flex">
                          <div className="bill-widget d-flex align-items-center">
                            <div className="plan-icons">
                              <CreditCard size={20} />
                            </div>
                            <div className="bill-name-group">
                              <h5>Price</h5>
                              <p>Monthly</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex">
                          <div className="bill-widget d-flex align-items-center">
                            <div className="plan-icons">
                              <BookOpen size={20} />
                            </div>
                            <div className="bill-name-group">
                              <h5>Access</h5>
                              <p>Access All Courses</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex">
                          <div className="bill-widget d-flex align-items-center">
                            <div className="plan-icons">
                              <Calendar size={20} />
                            </div>
                            <div className="bill-name-group">
                              <h5>Billing Date</h5>
                              <p>Next Billing on Nov 1, 2024</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="monthly-subscribtion comman-space">
                    <div className="monthly-group d-flex align-items-center">
                      <div className="subscribtion-active">
                        <div className="active-btns">
                          <button type="button" className="btn btn-danger">
                            Expired
                          </button>
                        </div>
                        <h5>Free Plan </h5>
                        <p>Subscription ID: #100010002</p>
                      </div>
                      <div className="active-change-plan grad-border">
                        <button type="button" className="btn btn-default">
                          Disabled
                        </button>
                      </div>
                    </div>
                    <div className="month-plan-detail">
                      <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex">
                          <div className="bill-widget d-flex align-items-center">
                            <div className="plan-icons">
                              <Calendar size={20} />
                            </div>
                            <div className="bill-name-group">
                              <h5>Started On</h5>
                              <p>Oct 1, 2024</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-md-6 d-flex">
                          <div className="bill-widget d-flex align-items-center">
                            <div className="plan-icons">
                              <CreditCard size={20} />
                            </div>
                            <div className="bill-name-group">
                              <h5>Price</h5>
                              <p>Monthly</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex">
                          <div className="bill-widget d-flex align-items-center">
                            <div className="plan-icons">
                              <BookOpen size={20} />
                            </div>
                            <div className="bill-name-group">
                              <h5>Access</h5>
                              <p>Access All Courses</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-md-6 d-flex">
                          <div className="bill-widget d-flex align-items-center">
                            <div className="plan-icons">
                              <Calendar size={20} />
                            </div>
                            <div className="bill-name-group">
                              <h5>Billing Date</h5>
                              <p>Next Billing on Nov 1, 2024</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* My Subscriptions */}
          </div>
        </div>
      </div>
      {/* Student Database */}
      <Footer />
    </div>
  );
}
