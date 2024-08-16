import React from "react";
import OwlCarousel from "react-owl-carousel";
import {
  Client01,
  Client02,
  Client03,
  Client04,
  Client05,
} from "../../imagepath";

export default function LeadingCompanies4() {
  const settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: false,
    nav: true,

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
      className="leading-slider-five owl-carousel owl-theme"
    >
      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Client01} />
        </div>
      </div>
      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Client02} />
        </div>
      </div>
      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Client03} />
        </div>
      </div>
      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Client04} />
        </div>
      </div>
      <div className="item">
        <div className="lead-img">
          <img className="img-fluid" alt="" src={Client05} />
        </div>
      </div>
    </OwlCarousel>
  );
}
