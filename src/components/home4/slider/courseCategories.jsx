import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import {
  CourseSvg1,
  CourseSvg2,
  CourseSvg3,
  CourseSvg4,
} from "../../imagepath";

export default function CourseCategories4() {
  const settings = {
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
        items: 1,
      },
      1170: {
        items: 2,
      },
    },
  };
  return (
    <ReactOwlCarousel
      {...settings}
      className="owl-carousel home-five-course owl-theme aos"
    >
      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="/job-category">
                  <img src={CourseSvg1} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="/job-category">
                <h3>Angular</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="/job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg2} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>React JS</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg3} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>Node JS</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg4} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>Docker</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg1} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>Angular</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}

      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg2} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>React JS</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}

      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg3} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>Node JS</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}

      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg4} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>Docker</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}

      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg1} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>Angular</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}

      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg2} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>React JS</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}

      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg3} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>Node JS</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}

      {/* Carousel Item */}
      <div className="carousel-five-item" data-aos="fade-down">
        <div className="course-five-item">
          <div className="course-five-grid">
            <div className="course-icon-five">
              <div className="icon-five-border">
                <Link to="job-category">
                  <img src={CourseSvg4} alt="" />
                </Link>
              </div>
            </div>
            <div className="course-info-five">
              <Link to="job-category">
                <h3>Docker</h3>
                <p>50 Instructors</p>
              </Link>
            </div>
            <div className="course-info-btn">
              <Link to="job-category" className="btn-five">
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Item */}
    </ReactOwlCarousel>
  );
}
