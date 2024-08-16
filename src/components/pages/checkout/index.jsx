import React from "react";
import PageHeader from "../header";
import Select from "react-select";
import { useState } from "react";
import Footer from "../../footer";
import { Link } from "react-router-dom";

const Checkout = () => {

    const [value] = useState(null);
    const [value2] = useState(null);
    const [value3] = useState(null);
    const [value4] = useState(null);

    const options = [
        { label: "Select State", value: "" },
        { label: "French", value: "French" },
        { label: "English", value: "English" },
      ];

      const options2 = [
        { label: "Select Country", value2: "" },
        { label: "India", value2: "India" },
        { label: "America", value2: "America" },
        { label: "Londan", value2: "Londan" },
      ];

      const options3 = [
        { label: "Month", value3: "" },
        { label: "Jun", value3: "Jun" },
        { label: "Feb", value3: "Feb" },
        { label: "March", value3: "March" }
      ];

      const options4 = [
        { label: "Year", value4: "" },
        { label: "2024", value4: "2024" },
        { label: "2021", value4: "2021" },
        { label: "2020", value4: "2020" },
      ];

      
  return (
    <>
      <div className="main-wrapper">
        <PageHeader activeMenu="Checkout"/>

        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Pages
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Checkout
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content checkout-widget">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {/* Billing Address */}
                <div className="student-widget">
                  <div className="student-widget-group add-course-info">
                    <div className="cart-head">
                      <h4>Billing Address</h4>
                    </div>
                    <div className="checkout-form">
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-block">
                              <label className="form-control-label">
                                First Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your first Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-block">
                              <label className="form-control-label">
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your last Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-block">
                              <label className="form-control-label">
                                Phone Number (Optional)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-block">
                              <label className="form-control-label">
                                Address Line 1
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-block">
                              <label className="form-control-label">
                                Address Line 2 (Optional)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-block">
                              <label className="form-label">State</label>
                              <Select
                              options={options}
                              defaultValue={value}
                              placeholder="Select State"
                            ></Select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-block">
                              <label className="form-label">Country</label>
                              <Select
                              options={options2}
                              defaultValue={value2}
                              placeholder="Select Country"
                            ></Select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-block">
                              <label className="form-control-label">
                                Zip/Postal Code
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-10">
                            <div className="input-block ship-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                              />{" "}
                              Shipping address is the same as my billing address
                            </div>
                            <div className="input-block ship-check mb-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                              />{" "}
                              Save this information for next time
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Billing Address */}
                {/* /Payment Method */}
                <div className="student-widget pay-method">
                  <div className="student-widget-group add-course-info">
                    <div className="cart-head">
                      <h4>Payment Method</h4>
                    </div>
                    <div className="checkout-form">
                      <form action="cart">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="wallet-method">
                              <label className="radio-inline custom_radio me-4">
                                <input
                                  type="radio"
                                  name="optradio"
                                  defaultChecked="true"
                                />
                                <span className="checkmark" /> Credit or Debit
                                card
                              </label>
                              <label className="radio-inline custom_radio">
                                <input type="radio" name="optradio" />
                                <span className="checkmark" /> PayPal
                              </label>
                            </div>
                            <div className="input-block">
                              <label className="form-control-label">
                                Card Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="XXXX XXXX XXXX XXXX"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-block">
                              <label className="form-label">Month</label>
                              <Select
                              options={options3}
                              defaultValue={value3}
                              placeholder="Month"
                            ></Select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-block">
                              <label className="form-label">Year</label>
                              <Select
                              options={options4}
                              defaultValue={value4}
                              placeholder="Year"
                            ></Select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="input-block">
                              <label className="form-control-label">
                                CVV Code{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="XXXX"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-block">
                              <label className="form-control-label">
                                Name on Card
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-10">
                            <div className="input-block ship-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                              />{" "}
                              Remember this card
                            </div>
                          </div>
                          <div className="payment-btn">
                            <button className="btn btn-primary" type="submit">
                              Make a Payment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Payment Method */}
              </div>
              <div className="col-lg-4 theiaStickySidebar">
              <div className="stickysidebar">
                <div className="student-widget select-plan-group">
                  <div className="student-widget-group">
                    <div className="plan-header">
                      <h4>Selected Plan</h4>
                    </div>
                    <div className="basic-plan">
                      <h3>Basic</h3>
                      <p>
                        For individuals who just need to start with the basic
                        features
                      </p>
                      <p>per user, per month when billed monthly</p>
                      <h2>
                        <span>$</span>10
                      </h2>
                    </div>
                    <div className="benifits-feature">
                      <h3>Benefits</h3>
                      <ul>
                        <li>
                          <i className="fas fa-circle" /> Access to slack
                          community
                        </li>
                        <li>
                          <i className="fas fa-circle" /> Access to support team
                        </li>
                        <li>
                          <i className="fas fa-circle" /> Algorithmic bidding
                        </li>
                        <li>
                          <i className="fas fa-circle" /> Keyword and ASIN
                          harvesting
                        </li>
                      </ul>
                    </div>
                    <div className="benifits-feature">
                      <h3>Features</h3>
                      <ul>
                        <li>
                          <i className="fas fa-circle" /> Search term isolation
                        </li>
                        <li>
                          <i className="fas fa-circle" /> Total sales analytics
                        </li>
                        <li>
                          <i className="fas fa-circle" /> Best seller rank
                        </li>
                        <li>
                          <i className="fas fa-circle" /> Placement optimization
                        </li>
                      </ul>
                    </div>
                    <div className="plan-change">
                      <Link to="/pricing-plan" className="btn btn-primary">
                        Change the Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default Checkout;
