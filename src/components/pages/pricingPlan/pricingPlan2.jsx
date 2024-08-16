import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { CheckCircle, CloseCircle, Plan } from "../../imagepath";
import PageHeader from "../header";

const PricingPlan2 = () => {
  return (
    <>
      <div className="main-wrapper">
        <PageHeader activeMenu={"PricingPlan"} />

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
                        Pricing Plan
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 text-center mx-auto">
                <div className="title-sec">
                  <h5>We keep it simple</h5>
                  <h2>Choose The Right Plan</h2>
                  <p>
                    Improve the way your work, discover a brand new tool and
                    drop the hassle once and for all.
                  </p>
                </div>
                <div className="text-end">
                  <img src={Plan} alt="icon" />
                </div>
                <div className="enable-item">
                  <label className="mb-0 me-2">Monthly</label>
                  <div className="form-check form-switch check-on m-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      defaultChecked="true"
                    />
                  </div>
                  <label className="mb-0 ms-2">Annualy</label>
                </div>
              </div>
            </div>
            {/* Plan Type */}
            <div className="price-sec">
              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="price-box w-100">
                    <h4>Basic</h4>
                    <p>
                      For individuals who just need to start with the basic
                      features per user, per month when billed monthly
                    </p>
                    <h3>
                      <span>$</span>10
                    </h3>
                    <h5>Benefits</h5>
                    <ul>
                      <li>Access to slack community</li>
                      <li>Access to support team</li>
                      <li>Algorithmic bidding</li>
                      <li>Keyword and ASIN harvesting</li>
                    </ul>
                    <h5>Features</h5>
                    <ul>
                      <li>Search term isolation</li>
                      <li>Total sales analytics</li>
                      <li>Best seller rank</li>
                      <li>Placement optimization</li>
                    </ul>
                    <Link to="#" className="btn btn-free w-100">
                      Start For Free
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="price-box w-100">
                    <h4>
                      Team <span className="recom-badge">Recommended</span>
                    </h4>
                    <p>
                      For teams who just need to start with the basic features
                      per user, per month when billed monthly
                    </p>
                    <h3>
                      <span>$</span>50
                    </h3>
                    <h5>Benefits</h5>
                    <ul>
                      <li>Access to slack community</li>
                      <li>Access to support team</li>
                      <li>Algorithmic bidding</li>
                      <li>Keyword and ASIN harvesting</li>
                    </ul>
                    <h5>Features</h5>
                    <ul>
                      <li>Search term isolation</li>
                      <li>Total sales analytics</li>
                      <li>Best seller rank</li>
                      <li>Placement optimization</li>
                    </ul>
                    <Link to="#" className="btn btn-free w-100">
                      Start For Free
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="price-box w-100">
                    <h4>Pro</h4>
                    <p>
                      For medium businesses who need advanced features for their
                      activity per user, per month billed monthly
                    </p>
                    <h3>
                      <span>$</span>100
                    </h3>
                    <h5>Benefits</h5>
                    <ul>
                      <li>Access to slack community</li>
                      <li>Access to support team</li>
                      <li>Algorithmic bidding</li>
                      <li>Keyword and ASIN harvesting</li>
                    </ul>
                    <h5>Features</h5>
                    <ul>
                      <li>Search term isolation</li>
                      <li>Total sales analytics</li>
                      <li>Best seller rank</li>
                      <li>Placement optimization</li>
                    </ul>
                    <Link to="#" className="btn btn-free w-100">
                      Start For Free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Plan Type */}
            {/* Compare our plans */}
            <div className="row">
              <div className="col-lg-12">
                <h2 className="main-title text-center">Compare our plans</h2>
                <div className="table-responsive">
                  <table className="table table-bordered table-price">
                    <thead>
                      <tr>
                        <td />
                        <td className="text-center self-cell">
                          Self-Employed &amp; Freelance
                        </td>
                        <td colSpan={2} className="text-center business-cell">
                          Small businesses that need accounting, invoicing or
                          payroll
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="basic-cell">
                        <td />
                        <td className="text-center">Basic</td>
                        <td className="text-center">Team</td>
                        <td className="text-center">Pro</td>
                      </tr>
                      <tr>
                        <td>Separate business/personal</td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Estimate tax payments</td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Track deductible mileage</td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Download online banking</td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Multi-device</td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Create invoices &amp; estimates </td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Manage VAT </td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Manage bills &amp; payments </td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Multiple currencies </td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Create budgets</td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Track time</td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CloseCircle}
                            alt="icon"
                          />
                        </td>
                        <td className="text-center">
                          <img
                            src={CheckCircle}
                            alt="icon"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Compare our plans */}
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default PricingPlan2;
