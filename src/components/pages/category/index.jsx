import React, { useState } from "react";
import PageHeader from "../header";
import Footer from "../../footer";

import { Link } from "react-router-dom";
import {  Category02, Category03, Category04, Category05, Category06, Category07, Category08, Category09, Category10, Category11, Category12, Category13, Category14, Category15, Category16, Category17 } from "../../imagepath";

const JobCategory = () => {
  const [tab, setTab] = useState(1);

  const tabToggle = (id) => {
    setTab(id);
  };

  return (
    <>
      <div className="main-wrapper">
        <PageHeader activeMenu="Jobcategory" />

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
                      <li className="breadcrumb-item">Pages</li>
                      <li className="breadcrumb-item">Categories</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-sec">
                  <h2>Browse Job By Categories</h2>
                  <p>Browse Job By Categories</p>
                </div>
              </div>
              <div className="category-tab">
                <ul className="nav nav-justified">
                  <li className="nav-item">
                    <Link
                      to="#"
                      className={tab === 1 ? "nav-link active" : "nav-link"}
                      data-bs-toggle="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        tabToggle(1);
                      }}
                    >
                      Graphics &amp; Design
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className={tab === 2 ? "nav-link active" : "nav-link"}
                      data-bs-toggle="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        tabToggle(2);
                      }}
                    >
                      Programming &amp; Tech
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className={tab === 3 ? "nav-link active" : "nav-link"}
                      data-bs-toggle="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        tabToggle(3);
                      }}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#video"
                      className={tab === 4 ? "nav-link active" : "nav-link"}
                      data-bs-toggle="tab"
                      onClick={(e) => {
                        e.preventDefault();
                        tabToggle(4);
                      }}
                    >
                      Video &amp; Animation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <div
                  className={
                    tab === 1 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="graphics"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category02} alt="" />
                          </div>
                          <h5>Logo Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category02} alt="" />
                          </div>
                          <h5>Business Cards &amp; Stationery</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category03} alt="" />
                          </div>
                          <h5>Brochure Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category05} alt="" />
                          </div>
                          <h5>Social Media Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category05} alt="" />
                          </div>
                          <h5>Graphics for Streamers</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category06} alt="" />
                          </div>
                          <h5>Photoshop Editing</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category07} alt="" />
                          </div>
                          <h5>Brand Style Guides</h5>
                        </div>
                        <span className="cat-count">25</span>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category08} alt="" />
                          </div>
                          <h5>Illustration</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category09} alt="" />
                          </div>
                          <h5>Flyer Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category10} alt="" />
                          </div>
                          <h5>Icon Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category11} alt="" />
                          </div>
                          <h5>Packaging &amp; Label Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category12} alt="" />
                          </div>
                          <h5>Presentation Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category13} alt="" />
                          </div>
                          <h5>Game Art</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category14} alt="" />
                          </div>
                          <h5>Pattern Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category15} alt="" />
                          </div>
                          <h5>Book Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category16} alt="" />
                          </div>
                          <h5>Invitation Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category17} alt="" />
                          </div>
                          <h5>UX Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category06} alt="" />
                          </div>
                          <h5>Infographic Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    tab === 2 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="programming"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category03} alt="" />
                          </div>
                          <h5>Brochure Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category04} alt="" />
                          </div>
                          <h5>Social Media Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category05} alt="" />
                          </div>
                          <h5>Graphics for Streamers</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category06} alt="" />
                          </div>
                          <h5>Photoshop Editing</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category09} alt="" />
                          </div>
                          <h5>Flyer Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category10} alt="" />
                          </div>
                          <h5>Icon Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category11} alt="" />
                          </div>
                          <h5>Packaging &amp; Label Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category12} alt="" />
                          </div>
                          <h5>Presentation Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category15} alt="" />
                          </div>
                          <h5>Book Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category16} alt="" />
                          </div>
                          <h5>Invitation Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category17} alt="" />
                          </div>
                          <h5>UX Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category06} alt="" />
                          </div>
                          <h5>Infographic Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    tab === 3 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="marketing"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category04} alt="" />
                          </div>
                          <h5>Social Media Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category05} alt="" />
                          </div>
                          <h5>Graphics for Streamers</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category06} alt="" />
                          </div>
                          <h5>Photoshop Editing</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category10} alt="" />
                          </div>
                          <h5>Icon Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category11} alt="" />
                          </div>
                          <h5>Packaging &amp; Label Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category12} alt="" />
                          </div>
                          <h5>Presentation Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category16} alt="" />
                          </div>
                          <h5>Invitation Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category17} alt="" />
                          </div>
                          <h5>UX Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category06} alt="" />
                          </div>
                          <h5>Infographic Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    tab === 4 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="animation"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category05} alt="" />
                          </div>
                          <h5>Graphics for Streamers</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category04} alt="" />
                          </div>
                          <h5>Social Media Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category06} alt="" />
                          </div>
                          <h5>Photoshop Editing</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category11} alt="" />
                          </div>
                          <h5>Packaging &amp; Label Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category10} alt="" />
                          </div>
                          <h5>Icon Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category12} alt="" />
                          </div>
                          <h5>Presentation Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category17} alt="" />
                          </div>
                          <h5>UX Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category16} alt="" />
                          </div>
                          <h5>Invitation Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                      <div className="category-box">
                        <div className="category-title">
                          <div className="category-img">
                            <img src={Category06} alt="" />
                          </div>
                          <h5>Infographic Design</h5>
                        </div>
                        <div className="cat-count">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default JobCategory;
