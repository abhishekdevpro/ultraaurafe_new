import React from "react";
import Collapse from 'react-bootstrap/Collapse';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "../../../imagepath";

const Overview = () => {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);


  return (
    <>
      <div className="card overview-sec" id="Overview">
        <div className="card-body">
          <h5 className="subs-title">Overview</h5>
          <h6>Course Description</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <h6>What you&apos;ll learn</h6>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Become a UX designer.</li>
                <li>You will be able to add UX designer to your CV</li>
                <li>Become a UI designer.</li>
                <li>Build &amp; test a full website design.</li>
                <li>Build &amp; test a full mobile app.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Learn to design websites &amp; mobile phone apps.</li>
                <li>You&apos;ll learn how to choose colors.</li>
                <li>Prototype your designs with interactions.</li>
                <li>Export production ready assets.</li>
                <li>All the techniques used by UX professionals</li>
              </ul>
            </div>
          </div>
          <h6>Requirements</h6>
          <ul className="mb-0">
            <li>
              You will need a copy of Adobe XD 2019 or above. A free trial can
              be downloaded from Adobe.
            </li>
            <li>No previous design experience is needed.</li>
            <li className="mb-0">No previous Adobe XD skills are needed.</li>
          </ul>
        </div>
      </div>

      <div className="card content-sec" id="Course_Content">
      <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="subs-title">Course Content</h5>
                    </div>
                    <div className="col-sm-6 text-sm-end">
                      <h6>92 Lectures 10:56:11</h6>
                    </div>
                  </div>
                  <div className="course-card">
                    <h6 className="cou-title">
                      <Link className="collapsed" data-bs-toggle="collapse" to="#collapseOne" aria-expanded={open} onClick={()=> setOpen(!open)} aria-controls="example-collapse-text">
                        In which areas do you operate?
                      </Link>
                    </h6>
                    <Collapse in={open}>
                    <div id="collapseOne" className="card-collapse collapse" style={{}} >
                      <ul>
                        <li>
                          <p>
                            <img src={Play} alt="" className="me-2"/>
                            Lecture1.1 Introduction to the User ExperienceCourse
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img src={Play} alt="" className="me-2"/>
                            Lecture1.2 Exercise: Your first design challenge
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img src={Play} alt="" className="me-2"/>
                            Lecture1.3 How to solve the previous exercise
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img src={Play} alt="" className="me-2"/>
                            Lecture1.3 How to solve the previous exercise
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img src={Play} alt="" className="me-2"/>
                            Lecture1.5 How to use text layers effectively
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                       </ul>
                    </div>
                    </Collapse>
                  </div>
                  <div className="course-card">
                    <h6 className="cou-title">
                      <Link className="collapsed" data-bs-toggle="collapse" to="#course2" aria-expanded={open2} onClick={()=> setOpen2(!open2)} aria-controls="example-collapse-text">
                        The Brief
                      </Link>
                    </h6>
                    <Collapse in={open2}>
                    <div id="course2" className="card-collapse collapse" style={{}}>
                      <ul>
                        <li>
                          <p>
                            <img src={Play} alt="" className="me-2"/>
                            Lecture1.1 Introduction to the User Experience Course
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img src={Play} alt="" className="me-2"/>
                            Lecture1.2 Exercise: Your first design challenge
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture1.3 How to solve the previous exercise
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture1.3 How to solve the previous exercise
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture1.5 How to use text layers effectively
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    </Collapse>
                  </div>
                  <div className="course-card">
                    <h6 className="cou-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#course3"
                        aria-expanded={open3} onClick={()=> setOpen3(!open3)} aria-controls="example-collapse-text"
                      >
                        Wireframing Low Fidelity
                      </Link>
                    </h6>
                    <Collapse in={open3}>
                    <div
                      id="course3"
                      className="card-collapse collapse"
                      style={{}}
                    >
                      <ul>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture1.1 Introduction to the User Experience
                            Course
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture1.2 Exercise: Your first design challenge
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture1.3 How to solve the previous exercise
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture1.3 How to solve the previous exercise
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture1.5 How to use text layers effectively
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    </Collapse>
                  </div>
                  <div className="course-card">
                    <h6 className="cou-title mb-0">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#coursefour"
                        aria-expanded={open4} onClick={()=> setOpen4(!open4)} aria-controls="example-collapse-text"
                      >
                        Type, Color &amp; Icon Introduction
                      </Link>
                    </h6>
                    <Collapse in={open4}>
                    <div
                      id="coursefour"
                      className="card-collapse collapse"
                      style={{}}
                    >
                      <ul>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture4.1 Introduction to the User Experience
                            Course
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture4.2 Exercise: Your first design challenge
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture4.3 How to solve the previous exercise
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture4.4 How to solve the previous exercise
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                        <li>
                          <p>
                            <img
                              src={Play}
                              alt=""
                              className="me-2"
                            />
                            Lecture4.5 How to use text layers effectively
                          </p>
                          <div>
                            <Link to="#">Preview</Link>
                            <span>02:53</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    </Collapse>
                  </div>
                </div>
      </div>
    </>
  );
};

export default Overview;
