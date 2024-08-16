import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { Course10, Course11, Course12, Icon1, Icon2 } from "../../imagepath";
import PageHeader from "../header";

const Cart = () => {
  return (
    <>
      <div className="main-wrapper">
        <PageHeader activeMenu="Cart"/>

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
                        Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content cart-widget">
          <div className="container">
            <div className="student-widget">
              <div className="student-widget-group">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-head">
                      <h4>Your cart (03 items)</h4>
                    </div>
                    <div className="cart-group">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 d-flex">
                          <div className="course-box course-design list-course d-flex">
                            <div className="product">
                              <div className="product-img">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={Course10}
                                  />
                                </Link>
                                <div className="price">
                                  <h3 className="free-color">FREE</h3>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="head-course-title">
                                  <h3 className="title">
                                    <Link to="/course-details">
                                      Information About UI/UX Design Degree
                                    </Link>
                                  </h3>
                                </div>
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
                              <div className="cart-remove">
                                <Link
                                  to="#"
                                  className="btn btn-primary"
                                >
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 d-flex">
                          <div className="course-box course-design list-course d-flex ">
                            <div className="product">
                              <div className="product-img">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={Course11}
                                  />
                                </Link>
                                <div className="price">
                                  <h3>
                                    $300 <span>$99.00</span>
                                  </h3>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="head-course-title">
                                  <h3 className="title">
                                    <Link to="/course-details">
                                      Wordpress for Beginners - Master Wordpress
                                      Quickly
                                    </Link>
                                  </h3>
                                </div>
                                <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                                  <div className="rating-img d-flex align-items-center">
                                    <img
                                      src={Icon1}
                                      alt=""
                                    />
                                    <p>10+ Lesson</p>
                                  </div>
                                  <div className="course-view d-flex align-items-center">
                                    <img
                                      src={Icon2}
                                      alt=""
                                    />
                                    <p>7hr 20min</p>
                                  </div>
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled me-1" />
                                  <i className="fas fa-star filled me-1" />
                                  <i className="fas fa-star filled me-1" />
                                  <i className="fas fa-star filled me-1" />
                                  <i className="fas fa-star me-1" />
                                  <span className="d-inline-block average-rating">
                                    <span>4.2</span> (15)
                                  </span>
                                </div>
                              </div>
                              <div className="cart-remove">
                                <Link
                                  to="#"
                                  className="btn btn-primary"
                                >
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 d-flex">
                          <div className="course-box course-design list-course d-flex mb-0">
                            <div className="product">
                              <div className="product-img">
                                <Link to="/course-details">
                                  <img
                                    className="img-fluid"
                                    alt=""
                                    src={Course12}
                                  />
                                </Link>
                                <div className="price">
                                  <h3>
                                    $300 <span>$99.00</span>
                                  </h3>
                                </div>
                              </div>
                              <div className="product-content">
                                <div className="head-course-title">
                                  <h3 className="title">
                                    <Link to="/course-details">
                                      Sketch from A to Z (2024): Become an app
                                      designer
                                    </Link>
                                  </h3>
                                </div>
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
                              <div className="cart-remove">
                                <Link
                                  to="#"
                                  className="btn btn-primary"
                                >
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-total">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="cart-subtotal">
                            <p>
                              Subtotal <span>$600.00</span>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="check-outs">
                            <Link to="/checkout" className="btn btn-primary">
                              Checkout
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="condinue-shop">
                            <Link
                              to="/course-list"
                              className="btn btn-primary"
                            >
                              Continue Shopping
                            </Link>
                          </div>
                        </div>
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

export default Cart;
