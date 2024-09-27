
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../footer';
import {
  Icon1,
  Icon2,
} from "../../imagepath";
import Header from '../../header';

const InstructorProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const { id } = useParams(); // Assuming you're using react-router and have a route parameter for the trainer ID

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`https://api.novajobs.us/api/trainers/trainer-profile/${id}`);
        console.log(response,"ghjk");
        setProfileData(response.data.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [id]);

  if (!profileData) return <div>Loading...</div>;

  const { trainer, courses } = profileData;

  return (
    <div className="main-wrapper">
      {/* Header component would go here */}
      <Header/>
      {/* Breadcrumb */}
      {/* <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
              
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Instructor Banner */}
      <div className="page-banner instructor-bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="profile-info-blk">
                <Link to="#" className="profile-info-img">
                  <img src={`https://api.novajobs.us${trainer.photo}`} alt={`${trainer.first_name} ${trainer.last_name}`} className="img-fluid" />
                </Link>
                <h4>
                  <Link to="#">{trainer.first_name} {trainer.last_name}</Link>
                  <span>{trainer.jobtitle}</span>
                </h4>
                <p>Instructor</p>
                <ul className="list-unstyled inline-inline profile-info-social">
                  {trainer.facebook && (
                    <li className="list-inline-item">
                      <Link to={trainer.facebook}><i className="fa-brands fa-facebook"></i></Link>
                    </li>
                  )}
                  {trainer.twitter && (
                    <li className="list-inline-item">
                      <Link to={trainer.twitter}><i className="fa-brands fa-twitter"></i></Link>
                    </li>
                  )}
                  {trainer.linkedin && (
                    <li className="list-inline-item">
                      <Link to={trainer.linkedin}><i className="fa-brands fa-linkedin"></i></Link>
                    </li>
                  )}
                  {trainer.youtube && (
                    <li className="list-inline-item">
                      <Link to={trainer.youtube}><i className="fa-brands fa-youtube"></i></Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Content */}
      <section className="page-content course-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* About Me */}
              <div className="card overview-sec">
                <div className="card-body">
                  <h5 className="subs-title">About Me</h5>
                  <p>{trainer.biography}</p>
                </div>
              </div>

              {/* Courses */}
              <div className="card education-sec">
                <div className="card-body pb-0">
                  <h5 className="subs-title">Courses</h5>
                  <div className="row">
                    {profileData.courses.map((course) => (
                      <div key={course.id} className="col-lg-6 col-md-6 d-flex">
                        <div className="course-box course-design d-flex">
                          <div className="product">
                            <div className="product-img">
                              <Link to={`/course-info/${course.id}`}>
                                <img className="img-fluid" alt={course.course_title} src={`https://api.novajobs.us${course.course_banner_image}`} />
                              </Link>
                              <div className="price">
                                <h3>${course.after_discount_price} <span>${course.course_price}</span></h3>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="course-group d-flex">
                                <div className="course-group-img d-flex">
                                  <Link to={`/instructor-profile/${trainer.id}`}>
                                    <img src={`https://api.novajobs.us${trainer.photo}`} alt={`${trainer.first_name} ${trainer.last_name}`} className="img-fluid" />
                                  </Link>
                                  <div className="course-name">
                                    <h4><Link to={`/instructor-profile/${trainer.id}`}>{trainer.first_name} {trainer.last_name}</Link></h4>
                                    <p>Instructor</p>
                                  </div>
                                </div>
                                <div className="course-share d-flex align-items-center justify-content-center">
                                  <Link to="#"><i className="fa-regular fa-heart"></i></Link>
                                </div>
                              </div>
                              <h3 className="title instructor-text">
                                <Link to={`/course-info/${course.id}`}>{course.course_title}</Link>
                              </h3>
                              <div className="course-info d-flex align-items-center border-0 m-0">
                                <div className="rating-img d-flex align-items-center">
                                  <img src={Icon1} alt="Course Duration" />
                                  <p>{course.time_spent_on_course}</p>
                                </div>
                                <div className="course-view d-flex align-items-center">
                                  <img src={Icon2} alt="Total Lectures" />
                                  <p>{course.total_lectures} Lectures</p>
                                </div>
                              </div>
                              <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                  <i key={index} className={`fas fa-star ${index < Math.floor(course.rating) ? 'filled' : ''}`}></i>
                                ))}
                                <span className="d-inline-block average-rating">
                                  <span>{course.rating.toFixed(1)}</span> ({course.enrolled_student_count})
                                </span>
                              </div>
                              <div className="all-btn all-category d-flex align-items-center">
                                <Link to={`/checkout/${course.id}`} className="btn btn-primary">BUY NOW</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>

            <div className="col-lg-4">
              {/* Profile Overview */}
              <div className="card overview-sec">
                <div className="card-body">
                  <h5 className="subs-title">Profile Overview</h5>
                  <div className="rating-grp">
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <i key={index} className={`fas fa-star ${index < Math.floor(trainer.rating || 0) ? 'filled' : ''}`}></i>
                      ))}
                      <span className="d-inline-block average-rating">
                        <span>{(trainer.rating || 0).toFixed(1)}</span> ({courses.reduce((total, course) => total + course.enrolled_student_count, 0)})
                      </span>
                    </div>
                  </div>
                  <div className="profile-overview-list">
                    <div className="list-grp-blk d-flex">
                      <div className="flex-shrink-0">
                        <img src={Icon1} alt="Courses" />
                      </div>
                      <div className="list-content-blk flex-grow-1 ms-3">
                        <h5>{courses.length}</h5>
                        <p>Courses</p>
                      </div>
                    </div>
                    <div className="list-grp-blk d-flex">
                      <div className="flex-shrink-0">
                        <img src={Icon1} alt="Total Students" />
                      </div>
                      <div className="list-content-blk flex-grow-1 ms-3">
                        <h5>{courses.reduce((total, course) => total + course.enrolled_student_count, 0)}</h5>
                        <p>Total Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              {/* <div className="card overview-sec">
                <div className="card-body">
                  <h5 className="subs-title">Contact Details</h5>
                  <div className="contact-info-list">
                    <div className="edu-wrap">
                      <div className="edu-name">
                        <span><img src={EmailIcon} alt="Email" /></span>
                      </div>
                      <div className="edu-detail">
                        <h6>Email</h6>
                        <p><Link to={`mailto:${trainer.email}`}>{trainer.email}</Link></p>
                      </div>
                    </div>
                    <div className="edu-wrap">
                      <div className="edu-name">
                        <span><img src={PhoneIcon} alt="Phone" /></span>
                      </div>
                      <div className="edu-detail">
                        <h6>Phone</h6>
                        <p><Link to={`tel:${trainer.phone}`}>{trainer.phone}</Link></p>
                      </div>
                    </div>
                    {trainer.website && (
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span><img src={Icon12} alt="Website" /></span>
                        </div>
                        <div className="edu-detail">
                          <h6>Website</h6>
                          <p><Link to={trainer.website} target="_blank" rel="noopener noreferrer">{trainer.website}</Link></p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Footer component would go here */}
      <Footer />
    </div>
  );
};

export default InstructorProfile;