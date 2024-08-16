import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { Course1, Course2, Course3, Icon1, Icon2 } from "../../imagepath";
import PageHeader from "../header";

const Wishlist = () => {
  return (
    <>
      <div className="main-wrapper">
        <PageHeader activeMenu={"WishList"}/>

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
                        Wishlists
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
            <div className="card wish-card">
              <div className="card-header">
                <h5>Your Wishlist (03 items)</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="wishlist-item">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <div className="wishlist-detail">
                            <div className="wishlist-img">
                              <Link to="/course-details">
                                <img
                                  alt=""
                                  src={Course1}
                                />
                              </Link>
                              <div className="price-amt">
                                <h4>$300</h4>
                              </div>
                            </div>
                            <div className="wishlist-info">
                              <h5>
                                <Link to="/course-details">
                                  Information About UI/UX Design Degree
                                </Link>
                              </h5>
                              <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt=""
                                  />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt=""
                                  />
                                  <p>9hr 30min</p>
                                </div>
                              </div>
                              <div className="rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                  <span> 4.0</span> (15)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wishlist-item">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <div className="wishlist-detail">
                            <div className="wishlist-img">
                              <Link to="/course-details">
                                <img
                                  alt=""
                                  src={Course2}
                                />
                              </Link>
                              <div className="price-amt">
                                <h4>$300</h4>
                              </div>
                            </div>
                            <div className="wishlist-info">
                              <h5>
                                <Link to="/course-details">
                                  Wordpress for Beginners - Master Wordpress
                                  Quickly
                                </Link>
                              </h5>
                              <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt=""
                                  />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt=""
                                  />
                                  <p>9hr 30min</p>
                                </div>
                              </div>
                              <div className="rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span> (15)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wishlist-item">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <div className="wishlist-detail">
                            <div className="wishlist-img">
                              <Link to="/course-details">
                                <img
                                  alt=""
                                  src={Course3}
                                />
                              </Link>
                              <div className="price-amt">
                                <h4>$300</h4>
                              </div>
                            </div>
                            <div className="wishlist-info">
                              <h5>
                                <Link to="/course-details">
                                  Sketch from A to Z (2024): Become an app
                                  designer
                                </Link>
                              </h5>
                              <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                                <div className="rating-img d-flex align-items-center">
                                  <img
                                    src={Icon1}
                                    alt=""
                                  />
                                  <p>12+ Lesson</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img
                                    src={Icon2}
                                    alt=""
                                  />
                                  <p>9hr 30min</p>
                                </div>
                              </div>
                              <div className="rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>4.0</span> (15)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="remove-btn">
                            <Link to="#" className="btn">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Plan Type */}
              </div>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default Wishlist;
