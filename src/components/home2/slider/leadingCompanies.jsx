import React from "react";
import {
  ReviewsImgTwo,
} from "../../imagepath";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import Companies from "../../home/slider/companies";

export const LeadingCompanies = () => {
  var settings = {
    //autoWidth: true,
    items: 1,
    margin: 25,
    dots: false,
    nav: false,
    navText: [
      '<i className="fa-sharp fa-solid fa-arrow-left-long slideIcon"></i>',
      '<i className="fa-solid fa-arrow-right-long slideIcon"></i>',
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
        items: 1,
      },
    },
  };
  return (
    <section className="real-reviews-sec">
      <div className="container">
        <div className="header-two-title text-center" data-aos="fade-up">
          <p className="tagline">Check out these real reviews</p>
          <h2>Users-love-us Dont take it from us</h2>
          <div className="header-two-text text-center m-auto">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
        </div>
        <div className="real-reviews-group">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up">
              <div className="reviews-img">
                <img src={ReviewsImgTwo} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-md-12" data-aos="fade-up">
              <OwlCarousel
                {...settings}
                className="owl-carousel real-reviews owl-theme"
              >
                <div className="item">
                  <div className="real-reviews-grid">
                    <div className="review-content">
                      <h3>Helps us to improve our productivity</h3>
                      <p>
                        High-definition video is video of higher resolution and
                        quality than standard-definition. While there is no
                        standardized meaning for high-definition, generally any
                        video.High-definition video is video of higher
                        resolution and quality than standard-definition. While
                        there is no standardized meaning for high-definition,
                        generally any video.High-definition video is video of
                        higher resolution and quality than standard-definition.
                        While there is no standardized meaning for
                        high-definition, generally any video.High-definition
                        video is video of higher resolution and quality than
                        standard-definition. While there is no standardized
                        meaning for high-definition, generally any video.
                      </p>
                    </div>
                    <div className="review-top">
                      <div className="review-info">
                        <h3 data-aos="fade-up">William George</h3>
                        <h5 data-aos="fade-up">CEO & Chairman</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="real-reviews-grid">
                    <div className="review-content">
                      <h3>Helps us to improve our productivity</h3>
                      <p>
                        High-definition video is video of higher resolution and
                        quality than standard-definition. While there is no
                        standardized meaning for high-definition, generally any
                        video.High-definition video is video of higher
                        resolution and quality than standard-definition. While
                        there is no standardized meaning for high-definition,
                        generally any video.High-definition video is video of
                        higher resolution and quality than standard-definition.
                        While there is no standardized meaning for
                        high-definition, generally any video.High-definition
                        video is video of higher resolution and quality than
                        standard-definition. While there is no standardized
                        meaning for high-definition, generally any video.
                      </p>
                    </div>
                    <div className="review-top">
                      <div className="review-info">
                        <h3 data-aos="fade-up">Julian Adrose</h3>
                        <h5 data-aos="fade-up">Manager</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="real-reviews-grid">
                    <div className="review-content">
                      <h3>Helps us to improve our productivity</h3>
                      <p>
                        High-definition video is video of higher resolution and
                        quality than standard-definition. While there is no
                        standardized meaning for high-definition, generally any
                        video.High-definition video is video of higher
                        resolution and quality than standard-definition. While
                        there is no standardized meaning for high-definition,
                        generally any video.High-definition video is video of
                        higher resolution and quality than standard-definition.
                        While there is no standardized meaning for
                        high-definition, generally any video.High-definition
                        video is video of higher resolution and quality than
                        standard-definition. While there is no standardized
                        meaning for high-definition, generally any video.
                      </p>
                    </div>
                    <div className="review-top">
                      <div className="review-info">
                        <h3>Gallegos</h3>
                        <h5>CEO & MD</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="real-reviews-grid">
                    <div className="review-content">
                      <h3>Helps us to improve our productivity</h3>
                      <p>
                        High-definition video is video of higher resolution and
                        quality than standard-definition. While there is no
                        standardized meaning for high-definition, generally any
                        video.High-definition video is video of higher
                        resolution and quality than standard-definition. While
                        there is no standardized meaning for high-definition,
                        generally any video.High-definition video is video of
                        higher resolution and quality than standard-definition.
                        While there is no standardized meaning for
                        high-definition, generally any video.High-definition
                        video is video of higher resolution and quality than
                        standard-definition. While there is no standardized
                        meaning for high-definition, generally any video.
                      </p>
                    </div>
                    <div className="review-top">
                      <div className="review-info">
                        <h3>William George</h3>
                        <h5>CEO & Chairman</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <div className="owl-nav slide-nav-8 nav-control">
                          <button
                            type="button"
                            role="presentation"
                            className="owl-prev"
                          >
                            <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
                          </button>
                          <button
                            type="button"
                            role="presentation"
                            className="owl-next"
                          >
                            <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>

        <Companies />
      </div>
    </section>
  );
};
