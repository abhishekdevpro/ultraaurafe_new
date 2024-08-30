import {
  CategoryIcon,
  CategoryIcon1,
  CategoryIcon2,
  CategoryIcon3,
  CategoryIcon4,
  CategoryIcon5,
} from "../../imagepath";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import { Link } from "react-router-dom";

const TopCategory = () => {
  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    gap: 10,
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
        margin: 25,
      },
      768: {
        items: 3,
        margin: 25,
      },
      1170: {
        items: 4,
        margin: 25,
      },
    },
  };

  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            {/* <span>Favourite Course</span> */}
            <h2>Explore Levels as per your needs</h2>
          </div>
          {/* <div className="all-btn all-category d-flex align-items-center">
            <Link to="job-category" className="btn btn-primary">
              All Categories
            </Link>
          </div> */}
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p>
          Discover specialized learning paths tailored to every stage of your journey, from undergraduates to professionals. Ultra Aura also offers targeted programs in home care and special needs education, empowering you to achieve your unique goals.
          </p>
        </div>
        <OwlCarousel
          {...settings}
          className="owl-carousel mentoring-course owl-theme aos"
          data-aos="fade-up"
          loop
          margin={10}
          nav
        >
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Angular Development</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon1} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Docker Development</div>
                </div>
              </div>
              <p>45 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon2} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Node JS Frontend</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon3} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Swift Development</div>
                </div>
              </div>
              <p>23 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon4} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Python Development</div>
                </div>
              </div>
              <p>30 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon5} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">
                    React
                    <br /> Native
                  </div>
                </div>
              </div>
              <p>80 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon4} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Angular Development</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon1} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Docker Development</div>
                </div>
              </div>
              <p>45 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon2} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Node JS Frontend</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon3} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Swift Development</div>
                </div>
              </div>
              <p>23 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon4} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Python Development</div>
                </div>
              </div>
              <p>30 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon1} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Docker Development</div>
                </div>
              </div>
              <p>45 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon2} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Node JS Frontend</div>
                </div>
              </div>
              <p>40 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon3} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Swift Development</div>
                </div>
              </div>
              <p>23 Instructors</p>
            </div>
          </div>
          <div className="feature-box text-center ">
            <div className="feature-bg">
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={CategoryIcon4} alt="" />
                </div>
                <div className="feature-cont">
                  <div className="feature-text">Python Development</div>
                </div>
              </div>
              <p>30 Instructors</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default TopCategory;
