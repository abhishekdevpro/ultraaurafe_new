import React from "react";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Footer from "../../footer";
import { User16 } from "../../imagepath";
import { Link } from "react-router-dom";

const StudentReviews = () => {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Reviews"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Reviews</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Reviews
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSidebar />
            {/* /Sidebar */}
            {/* Student Profile */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Reviews</h3>
                  </div>
                  <div className="checkout-form">
                    {/* Review */}
                    <div className="review-wrap">
                      <div className="review-user-info">
                        <div className="reviewer">
                          <div className="review-img">
                            <Link to="#">
                              <img src={User16} alt="img" />
                            </Link>
                          </div>
                          <div className="reviewer-info">
                            <h6>
                              <Link to="#">Ronald Richard</Link>
                            </h6>
                            <p>6 months ago</p>
                          </div>
                        </div>
                        <div className="reviewer-rating">
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                        </div>
                      </div>
                      <div className="review-content">
                        <p>
                          This is the second Photoshop course I have completed
                          with Cristian. Worth every penny and recommend it
                          highly. To get the most out of this course, its best
                          to to take the Beginner to Advanced course first. The
                          sound and video quality is of a good standard. Thank
                          you Cristian.
                        </p>
                        <div className="review-action">
                          <Link to="#">Edit</Link>
                          <Link to="#">Delete</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Review */}
                    {/* Review */}
                    <div className="review-wrap">
                      <div className="review-user-info">
                        <div className="reviewer">
                          <div className="review-img">
                            <Link to="#">
                              <img src={User16} alt="img" />
                            </Link>
                          </div>
                          <div className="reviewer-info">
                            <h6>
                              <Link to="#">Ronald Richard</Link>
                            </h6>
                            <p>8 months ago</p>
                          </div>
                        </div>
                        <div className="reviewer-rating">
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                      <div className="review-content">
                        <p>
                          I&apos;ve been using this LMS for several months for my
                          online courses, and it&apos;s been a game-changer. The
                          interface is incredibly user-friendly, making it easy
                          for both instructors and students to navigate through
                          the courses. The variety of tools available for
                          creating interactive and engaging content has
                          significantly enhanced the learning experience.
                        </p>
                        <div className="review-action">
                          <Link to="#">Edit</Link>
                          <Link to="#">Delete</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Review */}
                    {/* Review */}
                    <div className="review-wrap">
                      <div className="review-user-info">
                        <div className="reviewer">
                          <div className="review-img">
                            <Link to="#">
                              <img src={User16} alt="img" />
                            </Link>
                          </div>
                          <div className="reviewer-info">
                            <h6>
                              <Link to="#">Ronald Richard</Link>
                            </h6>
                            <p>9 months ago</p>
                          </div>
                        </div>
                        <div className="reviewer-rating">
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                      <div className="review-content">
                        <p>
                          Any time I&apos;ve had a question or encountered a minor
                          issue, the customer support team has been quick to
                          respond and incredibly helpful. Moreover, the
                          reliability of this LMS has impressed me—downtime is
                          nearly non-existent, ensuring that students have
                          access to their courses 24/7.
                        </p>
                        <div className="review-action">
                          <Link to="#">Edit</Link>
                          <Link to="#">Delete</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Review */}
                    {/* Review */}
                    <div className="review-wrap">
                      <div className="review-user-info">
                        <div className="reviewer">
                          <div className="review-img">
                            <Link to="#">
                              <img src={User16} alt="img" />
                            </Link>
                          </div>
                          <div className="reviewer-info">
                            <h6>
                              <Link to="#">Ronald Richard</Link>
                            </h6>
                            <p>1 year ago</p>
                          </div>
                        </div>
                        <div className="reviewer-rating">
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                      <div className="review-content">
                        <p>
                          From the onset, my experience with this LMS Website
                          has been nothing short of extraordinary. As a learner
                          who has navigated through various online platforms,
                          the sophistication and user-centric design of this
                          website set a new benchmark for what digital education
                          should look like.
                        </p>
                        <div className="review-action">
                          <Link to="#">Edit</Link>
                          <Link to="#">Delete</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Review */}
                  </div>
                </div>
              </div>
              <div className="dash-pagination">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Page 1 of 2</p>
                  </div>
                  <div className="col-6">
                    <ul className="pagination">
                      <li className="active">
                        <Link to="#">1</Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Student Profile */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default StudentReviews;
