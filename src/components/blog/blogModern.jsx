import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer';
// import Header from '../header';
import { Blog14, Blog15, Blog16, Blog17, Blog18, Blog19, Icon22, Icon24 } from '../imagepath';
import BlogHeader from './header';

const BlogModern = () => {
  return (
    <>
        <div className='main-wrapper'>
            <BlogHeader activeMenu={"Modern"}/>
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
                                Blog Modern
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
                    <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="row">
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog14}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    Learn Webs Applications Development from Experts
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        Jan 20, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, Angular
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog15}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    Expand Your Career Opportunities With Python
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        Jun 10, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, Web Design
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog16}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    Learn Mobile Applications Development from Experts
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        March 14, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, React
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog17}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    Complete PHP Programming Career Guideline
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        Jun 19, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, Web Design
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog18}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    Programming Content Guideline For Beginners
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        Nov 05, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, Php
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog19}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    The Complete JavaScript Course for Beginners
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        Dec 11, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, Web Design
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog14}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    Learn Webs Applications Development from Experts
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        Jun 14, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, Course
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog15}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    Expand Your Career Opportunities With Python
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        May 18, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, Web Design
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {/* Blog Post */}
                            <div className="blog grid-modern">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                <img
                                    className="img-fluid"
                                    src={Blog16}
                                    alt=""
                                />
                                </Link> 
                            </div>
                            <div className="blog-modern-box">
                                <h3 className="blog-title">
                                <Link to="/blog-details">
                                    Learn Mobile Applications Development from Experts
                                </Link> 
                                </h3>
                                <div className="blog-info clearfix mb-0">
                                <div className="post-left">
                                    <ul>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon22}
                                        alt=""
                                        />
                                        Sep 23, 2024
                                    </li>
                                    <li>
                                        <img
                                        className="img-fluid"
                                        src={Icon24}
                                        alt=""
                                        />
                                        Programming, Course
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Blog Post */}
                        </div>
                        </div>
                        {/* Blog pagination */}
                        <div className="row">
                        <div className="col-md-12">
                            <ul className="pagination lms-page">
                            <li className="page-item prev">
                                <Link
                                className="page-link"
                                to=" #"
                              
                                >
                                <i className="fas fa-angle-left" />
                                </Link> 
                            </li>
                            <li className="page-item first-page active">
                                <Link className="page-link" to=" #">
                                1
                                </Link> 
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to=" #">
                                2
                                </Link> 
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to=" #">
                                3
                                </Link> 
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to=" #">
                                4
                                </Link> 
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to=" #">
                                5
                                </Link> 
                            </li>
                            <li className="page-item next">
                                <Link className="page-link" to=" #">
                                <i className="fas fa-angle-right" />
                                </Link> 
                            </li>
                            </ul>
                        </div>
                        </div>
                        {/* /Blog pagination */}
                    </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    </>
  )
}

export default BlogModern;