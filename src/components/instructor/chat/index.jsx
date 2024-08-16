import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import {
  ProfileAvatar,
  SendIcon,
  User1,
  User2,
  User3,
  User4,
  User5,
  User6,
  User7,
} from "../../imagepath";
import { Link } from "react-router-dom";

export default function InstructorChat() {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Messages"}/>
      {/* Course Header */}
      <div className="page-banner instructor-bg-blk">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="instructor-profile d-flex align-items-center mb-0">
                <div className="instructor-profile-pic">
                  <Link to="instructor-profile">
                    <img src={ProfileAvatar} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="instructor-profile-content">
                  <h4>
                    <Link to="instructor-profile">
                      Jenny Wilson <span>Beginner</span>
                    </Link>
                  </h4>
                  <p>Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Course Header */}

      {/* Course Lesson */}
      <section className="page-content course-sec course-message">
        <div className="container">
          <div className="student-widget message-student-widget">
            <div className="student-widget-group">
              <div className="col-md-12">
                <div className="add-compose">
                  <Link to="#" className="btn btn-primary">
                    <i className="fa-solid fa-plus"></i> Compose
                  </Link>
                </div>
              </div>
              <div className="col-md-12">
                <div className="chat-window">
                  {/* Chat Left */}
                  <div className="chat-cont-left">
                    <div className="chat-users-list">
                      <div className="chat-scroll">
                        <Link to="#" className="media d-flex">
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-away">
                              <img
                                src={User1}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">Rolands R</div>
                              <div className="user-last-chat">how are you?</div>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="media read-chat active d-flex"
                        >
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-online">
                              <img
                                src={User2}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">Jenis R. </div>
                              <div className="user-last-chat">
                                i am very well
                              </div>
                            </div>
                            <div className="badge-active">
                              <div className="badge bgg-yellow badge-pill">
                                1
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="media read-chat active d-flex"
                        >
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-online">
                              <img
                                src={User3}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">Jesse Stevens </div>
                              <div className="user-last-chat">Hai</div>
                            </div>
                            <div className="badge-active">
                              <div className="badge bgg-yellow badge-pill">
                                1
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="#"
                          className="media read-chat active d-flex"
                        >
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-online">
                              <img
                                src={User4}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">Jesse Stevens</div>
                              <div className="user-last-chat">Good morning</div>
                            </div>
                            <div className="badge-active">
                              <div className="badge bgg-yellow badge-pill">
                                5
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="media d-flex">
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-away">
                              <img
                                src={User5}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">John Smith</div>
                              <div className="user-last-chat">how are you?</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="media d-flex">
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-away">
                              <img
                                src={User6}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">Stella Johnson</div>
                              <div className="user-last-chat">
                                Good morning{" "}
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="media d-flex">
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-away">
                              <img
                                src={User7}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">John Michael</div>
                              <div className="user-last-chat">
                                i am very well
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="media d-flex">
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-away">
                              <img
                                src={User5}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">John Smith</div>
                              <div className="user-last-chat">how are you?</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="media d-flex">
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-away">
                              <img
                                src={User1}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">Rolands R</div>
                              <div className="user-last-chat">how are you?</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="#" className="media d-flex">
                          <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-away">
                              <img
                                src={User5}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="media-body flex-grow-1">
                            <div>
                              <div className="user-name">John Smith</div>
                              <div className="user-last-chat">how are you?</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Chat Left */}

                  {/* Chat Right */}
                  <div className="chat-cont-right">
                    <div className="chat-header">
                      <Link
                        id="back_user_list"
                        to="#"
                        className="back-user-list"
                      >
                        <i className="material-icons">chevron_left</i>
                      </Link>
                      <div className="media d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <img
                              src={User2}
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div className="user-name">Doris Brown </div>
                          <div className="user-status">online</div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-body">
                      <div className="chat-scroll">
                        <ul className="list-unstyled">
                          <li className="media received d-flex">
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div className="msg-bg">
                                  <p>Hey There!</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="media received d-flex">
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div className="msg-bg">
                                  <p>How are you?</p>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>Today, 8.30pm</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="media sent d-flex">
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div className="msg-bg">
                                  <p>Hello!</p>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>Today, 8.33pm</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="media sent d-flex">
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div className="msg-bg">
                                  <p>I am fine and how are you?</p>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>Today, 8.34pm</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="media received d-flex">
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div>
                                  <p className="msg-bg">
                                    I am doing well, Can we meet tomorrow?
                                  </p>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>Today, 8.36pm</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="media sent d-flex">
                            <div className="media-body flex-grow-1">
                              <div className="msg-box">
                                <div className="msg-bg">
                                  <p>Yes Sure!</p>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>Today, 8.58pm</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chat-footer">
                      <div className="input-group">
                        <div className="btn-file btn">
                          <i className="fa fa-paperclip"></i>
                          <input type="file" />
                        </div>
                        <input
                          type="text"
                          className="input-msg-send form-control"
                          placeholder="Type your message here..."
                        />
                        <button
                          type="button"
                          className="btn btn-primary msg-send-btn rounded-pill hover0"
                        >
                          <img src={SendIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Chat Right */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Lesson */}
      <Footer />
    </div>
  );
}
