import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial01, Testimonial02, Testimonial03 } from "../../imagepath";

export default function Testimonial4() {
  const settings = {
    infinite: true,
    speed: 3000,
  };

  return (
    <div className="testimonial-five lazy slider">
      <Slider {...settings}>
        <div className="testimonial-carousel">
          <div className="testimonial-item">
            <div className="testimonial-content-five">
              <div className="testimonial-text">
                <p>
                  Thank you very much for your help. This is exactly what I was
                  looking for. You will not regret it. It really saves me time
                  and effort. Skill is what our business lacked. Thank you very
                  much for your help. This is exactly what I was looking for.
                  You will not regret it. It really saves me time and effort.
                  Skill is what our business lacked.
                </p>
              </div>
              <div className="testimonial-users-group d-flex align-items-center justify-content-between">
                <div className="testimonial-users">
                  <h5>Nikolas Brooten</h5>
                  <p>Sales Manager</p>
                </div>
                <div className="testimonial-ratings-five d-inline-flex align-items-center">
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-image">
              <img src={Testimonial01} alt="" />
            </div>
          </div>
        </div>
        <div className="testimonial-carousel">
          <div className="testimonial-item">
            <div className="testimonial-content-five">
              <div className="testimonial-text">
                <p>
                  Thank you very much for your help. This is exactly what I was
                  looking for. You will not regret it. It really saves me time
                  and effort. Skill is what our business lacked. Thank you very
                  much for your help. This is exactly what I was looking for.
                  You will not regret it. It really saves me time and effort.
                  Skill is what our business lacked.
                </p>
              </div>
              <div className="testimonial-users-group d-flex align-items-center justify-content-between">
                <div className="testimonial-users">
                  <h5>Nikolas Brooten</h5>
                  <p>Sales Manager</p>
                </div>
                <div className="testimonial-ratings-five d-inline-flex align-items-center">
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-image">
              <img src={Testimonial02} alt="" />
            </div>
          </div>
        </div>
        <div className="testimonial-carousel">
          <div className="testimonial-item">
            <div className="testimonial-content-five">
              <div className="testimonial-text">
                <p>
                  Thank you very much for your help. This is exactly what I was
                  looking for. You will not regret it. It really saves me time
                  and effort. Skill is what our business lacked. Thank you very
                  much for your help. This is exactly what I was looking for.
                  You will not regret it. It really saves me time and effort.
                  Skill is what our business lacked.
                </p>
              </div>
              <div className="testimonial-users-group d-flex align-items-center justify-content-between">
                <div className="testimonial-users">
                  <h5>Nikolas Brooten</h5>
                  <p>Sales Manager</p>
                </div>
                <div className="testimonial-ratings-five d-inline-flex align-items-center">
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-image">
              <img src={Testimonial03} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
