import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import {
  Course1,
  Course5,
  Course7,
  Course8,
  Course9,
  Icon1,
  Icon2,
  User,
  User1,
  User10,
  User2,
  User3,
  User4,
  User5,
  User7,
  User8,
  User9,
} from "../../imagepath";
import { Link } from "react-router-dom";

const TrendingCourse = () => {
  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  var course = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };

  return (
    <section
      className="section trend-course"
    >
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>What’s New</span>
            <h2>TRENDING COURSES</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <Link to="course-list" className="btn btn-primary">
              All Courses
            </Link>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
        <OwlCarousel
          {...settings}
          className="owl-carousel trending-course owl-theme aos"
          data-aos="fade-up"
        >
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <Link to="course-details">
                  <img className="img-fluid" alt="" src={Course7} />
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
                      <img src={User} alt="" className="img-fluid" />
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
                  <Link to="course-details">
                    Learn JavaScript and Express to become a professional
                    JavaScript
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" className="img-fluid" />
                    <p>13+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" className="img-fluid" />
                    <p>10hr 30min</p>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
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
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <Link to="course-details">
                  <img className="img-fluid" alt="" src={Course8} />
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
                      <img src={User2} alt="" className="img-fluid" />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">John Smith</Link>
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
                  <Link to="course-details">
                    Responsive Web Design Essentials HTML5 CSS3 and Bootstrap
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" className="img-fluid" />
                    <p>10+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" className="img-fluid" />
                    <p>11hr 30min</p>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
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

          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <Link to="course-details">
                  <img className="img-fluid" alt="" src={Course5} />
                </Link>
                <div className="price">
                  <h3>
                    $100 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img src={User5} alt="" className="img-fluid" />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Lavern M.</Link>
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
                  <Link to="course-details">
                    The Complete App Design Course - UX, UI and Design Thinking
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" className="img-fluid" />
                    <p>13+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" className="img-fluid" />
                    <p>10hr 30min</p>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
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
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <Link to="course-details">
                  <img className="img-fluid" alt="" src={Course8} />
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
                      <img src={User5} alt="" className="img-fluid" />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">John Smith</Link>
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
                  <Link to="course-details">
                    Build Responsive Real World Websites with HTML5 and CSS3
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" className="img-fluid" />
                    <p>13+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" className="img-fluid" />
                    <p>10hr 30min</p>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
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
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <Link to="course-details">
                  <img className="img-fluid" alt="" src={Course7} />
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
                      <img src={User2} alt="" className="img-fluid" />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">John Smith</Link>
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
                  <Link to="course-details">
                    Responsive Web Design Essentials HTML5 CSS3 and Bootstrap
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" className="img-fluid" />
                    <p>10+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" className="img-fluid" />
                    <p>11hr 30min</p>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
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
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <Link to="course-details">
                  <img className="img-fluid" alt="" src={Course1} />
                </Link>
                <div className="price">
                  <h3>
                    $100 <span>$99.00</span>
                  </h3>
                </div>
              </div>
              <div className="product-content">
                <div className="course-group d-flex">
                  <div className="course-group-img d-flex">
                    <Link to="/instructor/instructor-profile">
                      <img src={User4} alt="" className="img-fluid" />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">Lavern M.</Link>
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
                  <Link to="course-details">
                    The Complete App Design Course - UX, UI and Design Thinking
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" className="img-fluid" />
                    <p>13+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" className="img-fluid" />
                    <p>10hr 30min</p>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
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
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <Link to="course-details">
                  <img className="img-fluid" alt="" src={Course8} />
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
                      <img src={User1} alt="" className="img-fluid" />
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
                  <Link to="course-details">
                    Learn JavaScript and Express to become a professional
                    JavaScript
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" className="img-fluid" />
                    <p>13+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" className="img-fluid" />
                    <p>10hr 30min</p>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
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
          <div className="course-box trend-box">
            <div className="product trend-product">
              <div className="product-img">
                <Link to="course-details">
                  <img className="img-fluid" alt="" src={Course9} />
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
                      <img src={User3} alt="" className="img-fluid" />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor/instructor-profile">John Smith</Link>
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
                  <Link to="course-details">
                    Responsive Web Design Essentials HTML5 CSS3 and Bootstrap
                  </Link>
                </h3>
                <div className="course-info d-flex align-items-center">
                  <div className="rating-img d-flex align-items-center">
                    <img src={Icon1} alt="" className="img-fluid" />
                    <p>10+ Lesson</p>
                  </div>
                  <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" className="img-fluid" />
                    <p>11hr 30min</p>
                  </div>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
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
        </OwlCarousel>
        {/* Feature Instructors */}
        <div className="feature-instructors">
          <div className="section-header aos" data-aos="fade-up">
            <div className="section-sub-head feature-head text-center">
              <h2>Featured Instructor</h2>
              <div className="section-text aos" data-aos="fade-up">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
          </div>
          <OwlCarousel
            {...course}
            className="owl-carousel instructors-course owl-theme aos"
            data-aos="fade-up"
          >
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User7} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">David Lee</Link>
                </h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User8} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">Daziy Millar</Link>
                </h5>
                <p>PHP Expert</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group yellow" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User9} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">Patricia Mendoza</Link>
                </h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group violet" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User10} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">Skyler Whites</Link>
                </h5>
                <p>UI Designer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group orange" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User7} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">Patricia Mendoza</Link>
                </h5>
                <p>Java Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User8} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">David Lee</Link>
                </h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User9} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">Daziy Millar</Link>
                </h5>
                <p>PHP Expert</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User10} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">Patricia Mendoza</Link>
                </h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>20 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User7} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">Skyler Whites</Link>
                </h5>
                <p>UI Designer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>30 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User8} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor/instructor-profile">Patricia Mendoza</Link>
                </h5>
                <p>Java Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        {/* /Feature Instructors */}
      </div>
    </section>
  );
};

export default TrendingCourse;
