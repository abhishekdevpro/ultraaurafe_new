import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer';
import { Blog1, Blog2, Blog3, BlogBanner, Icon22, Icon23, User } from '../imagepath';
import BlogHeader from './header';

const BlogDetails = () => {

  // activeMenu={"Details"}
  return (
    <>
        <div className='main-wrapper'>
          <BlogHeader activeMenu={"Details"} />
            <div className="breadcrumb-bar">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="breadcrumb-list">
                      <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link  to="/home">Home</Link> </li>
                          <li className="breadcrumb-item" aria-current="page">Pages</li>
                          <li className="breadcrumb-item" aria-current="page">Blog Details</li>
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
                  <div className="col-lg-9 col-md-12">
                    {/* Blog Post */}
                    <div className="blog">
                      <div className="blog-image">
                        <Link  to="/blog-details">
                          <img
                            className="img-fluid"
                            src={BlogBanner}
                            alt="Post Image"
                          />
                        </Link> 
                      </div>
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <div className="post-author">
                                <Link  to="/instructor/instructor-profile">
                                  <img src={User} alt="Post Author" /> 
                                  <span>Ruby Perrin</span>
                                </Link> 
                              </div>
                            </li>
                            <li>
                              <img
                                className="img-fluid"
                                src={Icon22}
                                alt=""
                              />
                              April 20, 2024
                            </li>
                            <li>
                              <img
                                className="img-fluid"
                                src={Icon23}
                                alt=""
                              />
                              Programming, Web Design
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h3 className="blog-title">
                        <Link  to=" /blog-details">
                          Learn Webs Applications Development from Experts
                        </Link> 
                      </h3>
                      <div className="blog-content">
                        <p>
                          When working on a new piece of software, it’s essential to craft a
                          software design document to create a clear and precise vision of
                          the client’s problem and your proposed solution. Software design
                          documents are important for detailing expectations between the
                          software engineer and the client. They help to streamline the
                          coding process before any code is written.
                        </p>
                        <p>
                          Read on to learn how to write great software design documents that
                          improve communication between you and your client, ensuring that
                          everyone is on the same page when working on a project together.
                        </p>
                        <h4>What Is a Software Design Document?</h4>
                        <p>
                          Before starting a new project with the client, the planning stage
                          involves having a clear vision and agreeing upon design goals.
                          These goals should be laid out in a technical specification
                          document called a software design document.
                        </p>
                        <p>
                          A software developer is usually responsible for creating the
                          software design document. The developer will gather information
                          from a client who wants a new piece of software built and then
                          they will make a document that details the proposed solutions to
                          the clients problems.
                        </p>
                        <h4>What to Include in Your Software Design Document</h4>
                        <p>
                          Problems within the coding world tend to vary, and engineering
                          teams and developers often write design documents differently.
                          However, there is a certain software design document template that
                          you can follow to help you include all of the essential pieces of
                          information.
                        </p>
                        <p>Here are some factors you should include:</p>
                        <p>
                          <strong>Key information:</strong> The title of the document, who’s
                          working on the project, and the date the document was last
                          updated.
                        </p>
                        <p>
                          <strong>Overview:</strong> A complete high-level summary of the
                          project that helps the company decide if they should continue
                          reading the rest of the document.
                        </p>
                        <p>
                          <strong>Pain points:</strong> A complete description of the
                          problems and challenges, alongside why this project is important.
                          Furthermore, it’s essential to include how it fits in with product
                          and technical strategies.
                        </p>
                        <p>
                          <strong>Goals:</strong> Accurately describe the users of the
                          project and their impact. In certain cases, the users may be
                          another engineering team. It’s also important to be clear on how
                          to measure the success of metrics in conjunction with goals and
                          which KPIs will be used to track success. Lastly, it’s essential
                          to state which problems you won’t be fixing so that everyone who
                          has read the document understands what you will and will not be
                          working on.
                        </p>
                        <p>
                          <strong>Project milestones:</strong> Milestones in any project
                          serve as a list of measurable checkpoints, helping to break the
                          entire project down into small parts. A timeline and milestones
                          can be used internally to help keep engineers on track and show
                          the client how the project will progress towards completion.
                        </p>
                        <p>
                          <strong>Prioritization:</strong> After breaking the project down
                          into smaller features, it’s good to rank them in order of
                          priority. The simplest way to do this is to plot each feature in
                          the project onto a prioritization matrix based on urgency and
                          impact.
                        </p>
                        <p>
                          <strong>Solutions:</strong> Detail the current and proposed
                          solutions to the client’s problem. In this section, you’ll want to
                          include what the existing solution is (if any) and how users
                          interact with that solution. The second part of this section is to
                          outline your proposed solution in as much detail as possible. It
                          must be easy to understand—another engineer should be able to read
                          and build your proposed solution without any prior knowledge of
                          the project.
                        </p>
                        <h4>How to Create a Software Design Document</h4>
                        <p>
                          Keeping the above criteria in mind when creating your software
                          design document is a great start. To really maximize efficiency
                          and communication, there are a few best practices to implement.
                        </p>
                        <p>
                          Firstly, keep your language as simple as possible. The key is
                          clarity — especially when it comes to detailing technical points.
                          Include visuals into your document, helping readers accurately
                          understand the points and data you’re trying to convey. Diagrams,
                          charts, and other timelines are a great way to communicate
                          information.
                        </p>
                        <p>
                          Send a draft of your document to the client, so they can catch
                          parts you may have missed or areas that are unclear and need
                          fleshing out. Lastly, it’s important to update your document as
                          the project progresses, as you and other team members should be
                          consistently referencing the document.
                        </p>
                        <p>
                          When working on a new piece of software, it’s essential to craft a
                          software design document to create a clear and precise vision of
                          the client’s problem and your proposed solution. Software design
                          documents are important for detailing expectations between the
                          software engineer and the client. They help to streamline the
                          coding process before any code is written.
                        </p>
                        <p className="mb-0">
                          Read on to learn how to write great software design documents that
                          improve communication between you and your client, ensuring that
                          everyone is on the same page when working on a project together.
                        </p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  {/* Blog Sidebar */}
                  <div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
                    {/* Search */}
                    <div className='stickysidebar'>
                    <div className="card search-widget blog-search blog-widget">
                      <div className="card-body">
                        <form className="search-form">
                          <div className="input-group">
                            <input
                              type="text"
                              placeholder="Search..."
                              className="form-control"
                            />
                            <button type="submit" className="btn btn-primary">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* /Search */}
                    {/* Latest Posts */}
                    <div className="card post-widget blog-widget">
                      <div className="card-header">
                        <h4 className="card-title">Recent Posts</h4>
                      </div>
                      <div className="card-body">
                        <ul className="latest-posts">
                          <li>
                            <div className="post-thumb">
                              <Link  to=" /blog-details">
                                <img
                                  className="img-fluid"
                                  src={Blog1}
                                  alt=""
                                />
                              </Link> 
                            </div>
                            <div className="post-info">
                              <h4>
                                <Link  to=" /blog-details">
                                  Learn Webs Applications Development from Experts
                                </Link> 
                              </h4>
                              <p>
                                <img
                                  className="img-fluid"
                                  src={Icon22}
                                  alt=""
                                />
                                Jun 14, 2024
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="post-thumb">
                              <Link  to=" /blog-details">
                                <img
                                  className="img-fluid"
                                  src={Blog2}
                                  alt=""
                                />
                              </Link> 
                            </div>
                            <div className="post-info">
                              <h4>
                                <Link  to=" /blog-details">
                                  Expand Your Career Opportunities With Python
                                </Link> 
                              </h4>
                              <p>
                                <img
                                  className="img-fluid"
                                  src={Icon22}
                                  alt=""
                                /> 
                                3 Dec 2019
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="post-thumb">
                              <Link  to=" /blog-details">
                                <img
                                  className="img-fluid"
                                  src={Blog3}
                                  alt=""
                                />
                              </Link> 
                            </div>
                            <div className="post-info">
                              <h4>
                                <Link  to=" /blog-details">
                                  Complete PHP Programming Career Guideline
                                </Link> 
                              </h4>
                              <p>
                                <img
                                  className="img-fluid"
                                  src={Icon22}
                                  alt=""
                                /> 
                                3 Dec 2019
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Latest Posts */}
                    {/* Categories */}
                    <div className="card category-widget blog-widget">
                      <div className="card-header">
                        <h4 className="card-title">Categories</h4>
                      </div>
                      <div className="card-body">
                        <ul className="categories">
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> Business 
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> Courses 
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> Education 
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> Graphics Design 
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> Programming 
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> Web Design 
                            </Link> 
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Categories */}
                    {/* Archives Categories */}
                    <div className="card category-widget blog-widget">
                      <div className="card-header">
                        <h4 className="card-title">Archives</h4>
                      </div>
                      <div className="card-body">
                        <ul className="categories">
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> January 2024 
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> February 2024 
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #">
                              <i className="fas fa-angle-right" /> April 2024 
                            </Link> 
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Archives Categories */}
                    {/* Tags */}
                    <div className="card tags-widget blog-widget tags-card">
                      <div className="card-header">
                        <h4 className="card-title">Latest Tags</h4>
                      </div>
                      <div className="card-body">
                        <ul className="tags">
                          <li>
                            <Link  to=" #" className="tag">
                              HTML
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #" className="tag">
                              Java Script
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #" className="tag">
                              Css
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #" className="tag">
                              Jquery
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #" className="tag">
                              Java
                            </Link> 
                          </li>
                          <li>
                            <Link  to=" #" className="tag">
                              React
                            </Link> 
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Tags */}
                    </div>
                  </div>
                  {/* /Blog Sidebar */}
                </div>
              </div>
            </section>

            <Footer/>

        </div>
    </>
  )
}

export default BlogDetails;