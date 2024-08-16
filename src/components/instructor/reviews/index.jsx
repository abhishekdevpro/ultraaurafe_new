import React from "react";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import Footer from "../../footer";
import { User12, User13, User14, User16, User17 } from "../../imagepath";
import { Link } from "react-router-dom";

const InstructorReviews = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Reviews"} />
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
            <InstructorSidebar />
            {/* /Sidebar */}
            {/* Instructor Reviews */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Reviews</h3>
                  </div>
                  <div className="checkout-form">
                    <div className="wishlist-tab">
                      <ul className="nav">
                        <li className="nav-item">
                          <Link
                            to="#"
                            className="active"
                            data-bs-toggle="tab"
                            data-bs-target="#received-_review"
                          >
                            Received
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            data-bs-toggle="tab"
                            data-bs-target="#given_review"
                          >
                            Given
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="received-_review"
                      >
                        {/* Review */}
                        <div className="review-wrap">
                          <div className="review-user-info">
                            <div className="reviewer">
                              <div className="review-img">
                                <Link to="#">
                                  <img
                                    src={User16}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">
                                    Ronald Richard
                                  </Link>
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
                              The instructor demonstrated unparalleled expertise
                              and a deep understanding of the subject, making
                              even the most complex topics approachable. Their
                              passion for teaching was evident in every lecture,
                              captivating students and fostering a love for
                              learning. The course was well-structured, with a
                              clear progression that built on previous knowledge
                              seamlessly.
                            </p>
                            <div className="review-action">
                              <Link to="#">Reply </Link>
                              <Link to="#">View(0)</Link>
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
                                  <img
                                    src={User14}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">
                                    Dwayne Stevens
                                  </Link>
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
                              This course was a masterclass in effective online
                              learning, blending interactive elements with
                              comprehensive lectures that made each topic
                              engaging. The instructor&apos;s ability to connect
                              with students, even through a screen, created a
                              supportive and motivating learning environment.
                            </p>
                            <div className="review-action">
                              <Link to="#">Reply </Link>
                              <Link to="#">View(1)</Link>
                            </div>
                          </div>
                        </div>
                        {/* /Review */}
                        {/* Review */}
                        <div className="review-wrap reply-review">
                          <div className="review-user-info">
                            <div className="reviewer">
                              <div className="review-img">
                                <Link to="#">
                                  <img
                                    src={User17}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">Eugene Andre</Link>
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
                              I&apos;m thrilled to hear that the course exceeded
                              your expectations and that you found the
                              interactive elements and lectures engaging.
                              Creating an effective online learning environment
                              is a top priority for me, and your feedback
                              validates these efforts. Thank you for your active
                              participation and for being such a motivated
                              learner.
                            </p>
                            <div className="review-action">
                              <Link to="#">Reply </Link>
                              <Link to="#">View(0)</Link>
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
                                  <img
                                    src={User13}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">John Truman</Link>
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
                              George, you&apos;ve made commendable progress in
                              understanding the basics of data science. Your
                              project showcased a good grasp of data
                              manipulation techniques. However, I&apos;ve
                              observed challenges in your approach to
                              statistical modeling, where a clearer
                              understanding of concepts is needed.
                            </p>
                            <div className="review-action">
                              <Link to="#">Reply </Link>
                              <Link to="#">View(0)</Link>
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
                                  <img
                                    src={User12}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">
                                    William Maddox
                                  </Link>
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
                              The instructor managed to create an online course
                              that was as engaging and informative as any
                              in-person class. Their expertise was evident in
                              every lesson, but it was their approachability and
                              dedication to student learning that really made a
                              difference. The course content was rich and
                              varied, offering a deep dive into the subject
                              matter
                            </p>
                            <div className="review-action">
                              <Link to="#">Reply </Link>
                              <Link to="#">View(0)</Link>
                            </div>
                          </div>
                        </div>
                        {/* /Review */}
                      </div>
                      <div className="tab-pane fade" id="given_review">
                        {/* Review */}
                        <div className="review-wrap">
                          <div className="review-user-info">
                            <div className="reviewer">
                              <div className="review-img">
                                <Link to="#">
                                  <img
                                    src={User17}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">Eugene Andre</Link>
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
                              Stephen has shown exceptional understanding and
                              engagement in the &quot;Introduction to
                              Economics&quot; course. Your analytical skills and
                              ability to apply economic theories to real-world
                              scenarios have been impressive. Your active
                              participation in class discussions have also
                              contributed positively to the learning
                              environment. Keep up the great work!
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
                                  <img
                                    src={User17}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">Eugene Andre</Link>
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
                              Lashawn&nbsp;, I&apos;ve noticed your keen
                              interest in &quot;Modern Art History&quot; and
                              appreciate your efforts to understand complex
                              concepts. However, I encourage you to delve deeper
                              into the assigned readings and improve your
                              citation skills in your essays. Engaging more
                              critically with the material will enhance your
                              analyses and academic writing.
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
                                  <img
                                    src={User17}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">Eugene Andre</Link>
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
                              George, you&apos;ve made commendable progress in
                              understanding the basics of data science. Your
                              project showcased a good grasp of data
                              manipulation techniques. However, I&apos;ve
                              observed challenges in your approach to
                              statistical modeling, where a clearer
                              understanding of concepts is needed.
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
                                  <img
                                    src={User17}
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="reviewer-info">
                                <h6>
                                  <Link to="#">Eugene Andre</Link>
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
                              Lisa, while your assignments for
                              &quot;Introduction to Philosophy&quot; show basic
                              understanding, I encourage you to engage more
                              deeply with the course materials and participate
                              in forum discussions. Sharing your thoughts and
                              questions can greatly enhance your comprehension
                              and contribute to our class community.
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
            {/* Instructor Reviews */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default InstructorReviews;
