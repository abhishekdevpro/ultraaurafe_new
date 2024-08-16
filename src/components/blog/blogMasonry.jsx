import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
// import Header from "../header";
import {
  Blog10,
  Blog11,
  Blog13,
  Blog8,
  Blog9,
  Icon22,
  Icon23,
} from "../imagepath";
import BlogHeader from "./header";

const BlogMasonry = () => {
  return (
    <>
      <div className="main-wrapper">
        <BlogHeader activeMenu={"Masonry"}/>
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Pages
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Blog Masonry
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content">
          <div className="container">
            <div className="row masonry-blog-blk">
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img className="img-fluid" src={Blog8} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-grid-box masonry-box">
                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <img className="img-fluid" src={Icon22} alt="" />
                            Jun 14, 2024
                          </li>
                          <li>
                            <img className="img-fluid" src={Icon23} alt="" />
                            Programming, Web Design
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Learn Webs Applications Development from Experts
                      </Link>
                    </h3>
                    <div className="blog-content blog-read">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Phasellus hendrerit. Sed egestas, ante et
                        vulputate volutpat, eros pede […]
                      </p>
                      <Link
                        to="/blog-details"
                        className="read-more btn btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog11}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-grid-box masonry-box">
                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <img className="img-fluid" src={Icon22} alt="" />
                            Sep 18, 2024
                          </li>
                          <li>
                            <img className="img-fluid" src={Icon23} alt="" />
                            Programming, Courses
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Programming Content Guideline For Beginners
                      </Link>
                    </h3>
                    <div className="blog-content blog-read">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Phasellus hendrerit. Sed egestas, ante et
                        vulputate volutpat, eros pede […]
                      </p>
                      <Link
                        to="/blog-details"
                        className="read-more btn btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img className="img-fluid" src={Blog9} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-grid-box masonry-box">
                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <img className="img-fluid" src={Icon22} alt="" />
                            May 24, 2024
                          </li>
                          <li>
                            <img className="img-fluid" src={Icon23} alt="" />
                            Programming, Courses
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Expand Your Career Opportunities With Python
                      </Link>
                    </h3>
                    <div className="blog-content blog-read">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
                        urna. In nisi neque, aliquet vel, dapibus id, mattis
                        vel, nisi. Sed pretium, ligula sollicitudin laoreet
                        viverra, tortor libero sodales leo, eget blandit nunc
                        tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
                        potenti. Sed egestas, ante et vulputate volutpat, eros
                        pede […]
                      </p>
                      <Link
                        to="/blog-details"
                        className="read-more btn btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img className="img-fluid" src={Blog9} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-grid-box masonry-box">
                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <img className="img-fluid" src={Icon22} alt="" />
                            May 24, 2024
                          </li>
                          <li>
                            <img className="img-fluid" src={Icon23} alt="" />
                            Programming, Courses
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Expand Your Career Opportunities With Python
                      </Link>
                    </h3>
                    <div className="blog-content blog-read">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Phasellus hendrerit. Sed egestas, ante et
                        vulputate volutpat, eros pede […]
                      </p>
                      <Link
                        to="/blog-details"
                        className="read-more btn btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog10}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-grid-box masonry-box">
                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <img className="img-fluid" src={Icon22} alt="" />
                            Jun 14, 2024
                          </li>
                          <li>
                            <img className="img-fluid" src={Icon23} alt="" />
                            Programming, Web Design
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Complete PHP Programming Career Guideline
                      </Link>
                    </h3>
                    <div className="blog-content blog-read">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Phasellus hendrerit. Sed egestas, ante et
                        vulputate volutpat, eros pede […]
                      </p>
                      <Link
                        to="/blog-details"
                        className="read-more btn btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog13}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-grid-box masonry-box">
                    <div className="blog-info clearfix">
                      <div className="post-left">
                        <ul>
                          <li>
                            <img className="img-fluid" src={Icon22} alt="" />
                            Feb 14, 2024
                          </li>
                          <li>
                            <img className="img-fluid" src={Icon23} alt="" />
                            Programming, Courses
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Learn Mobile Applications Development from Experts
                      </Link>
                    </h3>
                    <div className="blog-content blog-read">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Phasellus hendrerit. Sed egestas, ante et
                        vulputate volutpat, eros pede […]
                      </p>
                      <Link
                        to="/blog-details"
                        className="read-more btn btn-primary"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
            </div>
            {/* Load button */}
            <div className="load-more text-center">
              <Link to="#" className="btn btn-primary">
                Load More
              </Link>
            </div>
            {/* /Load button */}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default BlogMasonry;
