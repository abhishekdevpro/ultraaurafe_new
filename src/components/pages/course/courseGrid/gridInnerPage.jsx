import React from "react";
import { Link } from "react-router-dom";
import { Course10, Course11, Course12, Course13, Course14, Course15, Course16, Course17, Icon1, Icon2, User, User1, User2, User3, User4, User5, User6 } from "../../../imagepath";

const GridInnerPage = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
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
                  <h3>
                    $300 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User1}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Rolands R</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    Information About UI/UX Design Degree
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
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
                    $200 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User2}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Jenis R.</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    Wordpress for Beginners - Master Wordpress Quickly
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
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
                  <h3 className="free-color">FREE</h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User3}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Jesse Stevens</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    Sketch from A to Z (2024): Become an app designer
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
            <div className="product">
              <div className="product-img">
                <Link to="/course-details">
                  <img
                    className="img-fluid"
                    alt=""
                    src={Course13}
                  />
                </Link>
                <div className="price">
                  <h3 className="free-color">FREE</h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User4}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Nicole Brown</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#" className="active-heart">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    Learn Angular Fundamentals From ...
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
            <div className="product">
              <div className="product-img">
                <Link to="/course-details">
                  <img
                    className="img-fluid"
                    alt=""
                    src={Course14}
                  />
                </Link>
                <div className="price">
                  <h3>$29.99</h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User5}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">John Smith</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#" className="active-heart">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    Build Responsive Real World Websites with ...
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
            <div className="product">
              <div className="product-img">
                <Link to="/course-details">
                  <img
                    className="img-fluid"
                    alt=""
                    src={Course15}
                  />
                </Link>
                <div className="price">
                  <h3>
                    $300 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User6}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Stella Johnson</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#" className="active-heart">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    C# Developers Double Your Coding Speed with ...
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
            <div className="product">
              <div className="product-img">
                <Link to="/course-details">
                  <img
                    className="img-fluid"
                    alt=""
                    src={Course16}
                  />
                </Link>
                <div className="price">
                  <h3>
                    $200 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">John Michael</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    Learn JavaScript and Express to become a...
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
            <div className="product">
              <div className="product-img">
                <Link to="/course-details">
                  <img
                    className="img-fluid"
                    alt=""
                    src={Course13}
                  />
                </Link>
                <div className="price">
                  <h3>
                    $300 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User4}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Jesse Stevens</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    Learn and Understand AngularJS to become a ...
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex">
          <div className="course-box course-design d-flex ">
            <div className="product">
              <div className="product-img">
                <Link to="/course-details">
                  <img
                    className="img-fluid"
                    alt=""
                    src={Course17}
                  />
                </Link>
                <div className="price">
                  <h3 className="free-color">FREE</h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img
                        src={User6}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Monroe Parker</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div>
                  <div className="course-share d-flex align-items-center justify-content-center">
                    <Link to="#">
                      <i className="fa-regular fa-heart" />
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link to="/course-details">
                    Responsive Web Design Essentials HTML5 CSS3 ...
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" />
                    <p>12+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
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
                <div className="all-btn all-category d-flex align-items-center">
                  <Link to="/checkout" className="btn btn-primary">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridInnerPage;
