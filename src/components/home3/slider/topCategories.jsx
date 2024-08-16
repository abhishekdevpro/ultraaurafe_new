import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
} from "../../imagepath";
import { Link } from "react-router-dom";

export const TopCategories2 = () => {
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
        items: 3,
      },
    },
  };
  return (
    <OwlCarousel
      {...course}
      className="owl-carousel home-three-favourite-carousel owl-theme aos topCat"
    >
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category1}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Angular Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category2}
              alt="Pyhton Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Pyhton Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category3}
              alt="NODE JS Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>NODE JS Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category4}
              alt="NODE JS Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>NODE JS Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category5}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Laravel Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category6}
              alt="Docker Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Docker Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category2}
              alt="Pyhton Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Pyhton Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category3}
              alt="NODE JS Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>NODE JS Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category4}
              alt="NODE JS Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>NODE JS Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category5}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Laravel Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category6}
              alt="Docker Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Docker Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/home">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};
