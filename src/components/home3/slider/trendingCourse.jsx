import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  Avatar10,
  Avatar2,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
  StudentIconThree,
} from "../../imagepath";

export const Trending3 = () => {
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
  return (
    <OwlCarousel
      {...settings}
      className="owl-carousel home-three-trending-course owl-theme"
      data-aos="fade-up"
    >
      {/* Carousel Item */}
      <div className="trending-three-item">
        <div className="trending-content-top trending-bg-one">
          <div className="course-title-one">
            <Link to="/home">Personalized Learning</Link>
          </div>
          <div className="trending-three-text">
            <Link to="/home">
              <h3 className="title instructor-text">
                Build Responsive Websites with HTML and CSS
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                dolor
              </p>
            </Link>
          </div>

          <div className="trending-counts-info d-flex align-items-center justify-content-between">
            <div className="trending-three-counts d-flex align-items-center">
              <img src={StudentIconThree} alt="student-icon" />
              <p>400 Students</p>
            </div>
            <div className="price-three-time d-inline-flex align-items-center">
              <i className="fa-regular fa-clock me-2"></i>
              <span>6hr 30min</span>
            </div>
          </div>
        </div>
        <div className="trending-content-footer">
          <div className="trending-price-group d-flex align-items-center justify-content-between">
            <div className="trending-group-view">
              <div className="trending-price-three">
                <h3>$300</h3>
                <span>$99.00</span>
              </div>
            </div>
            <div className="trending-footer-img">
              <Link to="/home">
                <img src={Avatar4} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="trending-three-item">
        <div className="trending-content-top trending-bg-two">
          <div className="course-title-one">
            <Link to="/home">Pyhton Development</Link>
          </div>
          <div className="trending-three-text">
            <Link to="/home">
              <h3 className="title instructor-text">
                The Complete PHP Framework Course 2.0
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                dolor
              </p>
            </Link>
          </div>

          <div className="trending-counts-info d-flex align-items-center justify-content-between">
            <div className="trending-three-counts d-flex align-items-center">
              <img src={StudentIconThree} alt="" />
              <p>900 Students</p>
            </div>
            <div className="price-three-time d-inline-flex align-items-center">
              <i className="fa-regular fa-clock me-2"></i>
              <span>9hr 30min</span>
            </div>
          </div>
        </div>
        <div className="trending-content-footer">
          <div className="trending-price-group d-flex align-items-center justify-content-between">
            <div className="trending-group-view">
              <div className="trending-price-three">
                <h3>$800</h3>
                <span>$99.00</span>
              </div>
            </div>
            <div className="trending-footer-img">
              <Link to="/home">
                <img src={Avatar5} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="trending-three-item">
        <div className="trending-content-top trending-bg-three">
          <div className="course-title-one">
            <Link to="/home">Business Management</Link>
          </div>
          <div className="trending-three-text">
            <Link to="/home">
              <h3 className="title instructor-text">
                The Complete Business Management Course
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                dolor
              </p>
            </Link>
          </div>

          <div className="trending-counts-info d-flex align-items-center justify-content-between">
            <div className="trending-three-counts d-flex align-items-center">
              <img src={StudentIconThree} alt="" />
              <p>400 Students</p>
            </div>
            <div className="price-three-time d-inline-flex align-items-center">
              <i className="fa-regular fa-clock me-2"></i>
              <span>6hr 30min</span>
            </div>
          </div>
        </div>
        <div className="trending-content-footer">
          <div className="trending-price-group d-flex align-items-center justify-content-between">
            <div className="trending-group-view">
              <div className="trending-price-three">
                <h3>$300</h3>
                <span>$99.00</span>
              </div>
            </div>
            <div className="trending-footer-img">
              <Link to="/home">
                <img src={Avatar6} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}

      <div className="trending-three-item">
        <div className="trending-content-top trending-bg-four">
          <div className="course-title-one">
            <Link to="/home">Creative Arts & media</Link>
          </div>
          <div className="trending-three-text">
            <Link to="/home">
              <h3 className="title instructor-text">
                Build Creative Arts & Course Completed
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                dolor
              </p>
            </Link>
          </div>

          <div className="trending-counts-info d-flex align-items-center justify-content-between">
            <div className="trending-three-counts d-flex align-items-center">
              <img src={StudentIconThree} alt="" />
              <p>900 Students</p>
            </div>
            <div className="price-three-time d-inline-flex align-items-center">
              <i className="fa-regular fa-clock me-2"></i>
              <span>4hr 30min</span>
            </div>
          </div>
        </div>
        <div className="trending-content-footer">
          <div className="trending-price-group d-flex align-items-center justify-content-between">
            <div className="trending-group-view">
              <div className="trending-price-three">
                <h3>$200</h3>
                <span>$99.00</span>
              </div>
            </div>
            <div className="trending-footer-img">
              <Link to="/home">
                <img src={Avatar7} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="trending-three-item">
        <div className="trending-content-top trending-bg-one">
          <div className="course-title-one">
            <Link to="/home">Personalized Learning</Link>
          </div>
          <div className="trending-three-text">
            <Link to="/home">
              <h3 className="title instructor-text">
                Build Responsive Websites with HTML and CSS
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                dolor
              </p>
            </Link>
          </div>

          <div className="trending-counts-info d-flex align-items-center justify-content-between">
            <div className="trending-three-counts d-flex align-items-center">
              <img src={StudentIconThree} alt="" />
              <p>600 Students</p>
            </div>
            <div className="price-three-time d-inline-flex align-items-center">
              <i className="fa-regular fa-clock me-2"></i>
              <span>2hr 30min</span>
            </div>
          </div>
        </div>
        <div className="trending-content-footer">
          <div className="trending-price-group d-flex align-items-center justify-content-between">
            <div className="trending-group-view">
              <div className="trending-price-three">
                <h3>$200</h3>
                <span>$99.00</span>
              </div>
            </div>
            <div className="trending-footer-img">
              <Link to="/home">
                <img src={Avatar8} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="trending-three-item">
        <div className="trending-content-top trending-bg-two">
          <div className="course-title-one">
            <Link to="/home">Python Development</Link>
          </div>
          <div className="trending-three-text">
            <Link to="/home">
              <h3 className="title instructor-text">
                The Complete PHP Framework Course 2.0
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                dolor
              </p>
            </Link>
          </div>

          <div className="trending-counts-info d-flex align-items-center justify-content-between">
            <div className="trending-three-counts d-flex align-items-center">
              <img src={StudentIconThree} alt="" />
              <p>800 Students</p>
            </div>
            <div className="price-three-time d-inline-flex align-items-center">
              <i className="fa-regular fa-clock me-2"></i>
              <span>3hr 30min</span>
            </div>
          </div>
        </div>
        <div className="trending-content-footer">
          <div className="trending-price-group d-flex align-items-center justify-content-between">
            <div className="trending-group-view">
              <div className="trending-price-three">
                <h3>$350</h3>
                <span>$99.00</span>
              </div>
            </div>
            <div className="trending-footer-img">
              <Link to="/home">
                <img src={Avatar9} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="trending-three-item">
        <div className="trending-content-top trending-bg-three">
          <div className="course-title-one">
            <Link to="/home">Business Management</Link>
          </div>
          <div className="trending-three-text">
            <Link to="/home">
              <h3 className="title instructor-text">
                The Complete Business Management Course
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                dolor
              </p>
            </Link>
          </div>

          <div className="trending-counts-info d-flex align-items-center justify-content-between">
            <div className="trending-three-counts d-flex align-items-center">
              <img src={StudentIconThree} alt="" />
              <p>700 Students</p>
            </div>
            <div className="price-three-time d-inline-flex align-items-center">
              <i className="fa-regular fa-clock me-2"></i>
              <span>4hr 30min</span>
            </div>
          </div>
        </div>
        <div className="trending-content-footer">
          <div className="trending-price-group d-flex align-items-center justify-content-between">
            <div className="trending-group-view">
              <div className="trending-price-three">
                <h3>$400</h3>
                <span>$99.00</span>
              </div>
            </div>
            <div className="trending-footer-img">
              <Link to="/home">
                <img src={Avatar10} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="trending-three-item">
        <div className="trending-content-top trending-bg-four">
          <div className="course-title-one">
            <Link to="/home">Creative Arts & media</Link>
          </div>
          <div className="trending-three-text">
            <Link to="/home">
              <h3 className="title instructor-text">
                Build Creative Arts & Course Completed
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                dolor
              </p>
            </Link>
          </div>

          <div className="trending-counts-info d-flex align-items-center justify-content-between">
            <div className="trending-three-counts d-flex align-items-center">
              <img src={StudentIconThree} alt="" />
              <p>600 Students</p>
            </div>
            <div className="price-three-time d-inline-flex align-items-center">
              <i className="fa-regular fa-clock me-2"></i>
              <span>5hr 30min</span>
            </div>
          </div>
        </div>
        <div className="trending-content-footer">
          <div className="trending-price-group d-flex align-items-center justify-content-between">
            <div className="trending-group-view">
              <div className="trending-price-three">
                <h3>$400</h3>
                <span>$99.00</span>
              </div>
            </div>
            <div className="trending-footer-img">
              <Link to="/home">
                <img src={Avatar2} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
    </OwlCarousel>
  );
};
