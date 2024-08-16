import React, { useEffect, useState } from "react";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import {
  User1,
  User11,
  User12,
  User13,
  User2,
  User3,
  User4,
  User5,
  User6,
  chatImg,
  heart,
  like,
  play01,
  voice,
} from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const StudentMessages = () => {
  const [visible, setVisible] = useState(false);
  const [searchChat, setSearchChat] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 992);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    margin: 12,
    speed: 500,
    nav: false,
    arrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="main-wrapper chat-wrapper chat-page main-chat-blk">
      <StudentHeader activeMenu={"Messages"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Messages</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Messages
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
      <div className="page-content chat-page-wrapper">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSidebar />

            {/* /Sidebar */}
            {/* Student Profile */}
            <div className="col-xl-9 col-lg-9 theiaStickySidebar">
              <div className="settings-widget card-details mb-0">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Message</h3>
                  </div>
                  <div className="checkout-form">
                    {/* sidebar group */}
                    <div className="content">
                      <div className="sidebar-group left-sidebar chat_sidebar">
                        {/* Chats sidebar */}
                        <div
                          id="chats"
                          className="left-sidebar-wrap sidebar active slimscroll"
                        >
                          <Scrollbars className={isSmallScreen ? "mob-scrn" : ""}>
                            <div className="slimscroll">
                              {/* Left Chat Title */}
                              <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
                                <div className="select-group-chat">
                                  <div className="dropdown">
                                    <Link to="#">
                                      All Chats
                                    </Link>
                                  </div>
                                </div>
                                <div className="add-section">
                                  <ul>
                                    <li>
                                      <Link
                                        onClick={() => setVisible(!visible)}
                                        to="#"
                                        className="user-chat-search-btn"
                                      >
                                        <i className="feather icon-search" />
                                      </Link>
                                    </li>
                                  </ul>
                                  {/* Chat Search */}
                                  <div
                                    className={
                                      visible
                                        ? "user-chat-search visible-chat"
                                        : "user-chat-search"
                                    }
                                  >
                                    <form>
                                      <span className="form-control-feedback">
                                        <i className="feather icon-search" />
                                      </span>
                                      <input
                                        type="text"
                                        name="chat-search"
                                        placeholder="Search"
                                        className="form-control"
                                      />
                                      <div
                                        className="user-close-btn-chat"
                                        onClick={() => setVisible(!visible)}
                                      >
                                        <i className="feather icon-x" />
                                      </div>
                                    </form>
                                  </div>
                                  {/* /Chat Search */}
                                </div>
                              </div>
                              {/* /Left Chat Title */}
                              {/* Top Online Contacts */}
                              <div className="top-online-contacts">
                                <div className="fav-title">
                                  <h6>Online Now</h6>
                                  <Link
                                    to="#"
                                    className="view-all-chat-profiles"
                                  >
                                    View All
                                  </Link>
                                </div>
                                <div className="swiper-container">
                                  <div className="swiper-wrapper">
                                    <Slider
                                      {...settings}
                                      className="swiper-wrapper "
                                    >
                                      <div className="swiper-slide">
                                        <div className="top-contacts-box">
                                          <div className="profile-img online">
                                            <Link to="#">
                                              <img src={User12} alt="Image" />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="top-contacts-box">
                                          <div className="profile-img online">
                                            <Link to="#">
                                              <img src={User2} alt="Image" />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="top-contacts-box">
                                          <div className="profile-img online">
                                            <Link to="#">
                                              <img src={User3} alt="Image" />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="top-contacts-box">
                                          <div className="profile-img online">
                                            <Link to="#">
                                              <img src={User3} alt="Image" />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="top-contacts-box">
                                          <div className="profile-img online">
                                            <Link to="#">
                                              <img src={User5} alt="Image" />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="swiper-slide">
                                        <div className="top-contacts-box">
                                          <div className="profile-img online">
                                            <Link to="#">
                                              <img src={User6} alt="Image" />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </Slider>
                                  </div>
                                </div>
                              </div>
                              {/* /Top Online Contacts */}
                              <div
                                className="sidebar-body chat-body"
                                id="chatsidebar"
                              >
                                {/* Left Chat Title */}
                                <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                                  <div className="fav-title pin-chat">
                                    <h6>Pinned Chat</h6>
                                  </div>
                                </div>
                                {/* /Left Chat Title */}
                                <ul className="user-list space-chat">
                                  <li className="user-list-item chat-user-list">
                                    <Link
                                      to="#"
                                      className="status-active"
                                    >
                                      <div className="avatar avatar-online">
                                        <img
                                          src={User12}
                                          className="rounded-circle"
                                          alt="image"
                                        />
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>Mark Villiams</h5>
                                          <p>Have you called them?</p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            10:20 PM
                                          </small>
                                          <div className="chat-pin">
                                            <i className="fa-solid fa-thumbtack me-2" />
                                            <i className="fa-solid fa-check-double" />
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover ms-1">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-log-out" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Unpin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Unread
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="user-list-item chat-user-list">
                                    <Link to="#">
                                      <div>
                                        <div className="avatar ">
                                          <img
                                            src={User5}
                                            className="rounded-circle"
                                            alt="image"
                                          />
                                        </div>
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>Elizabeth Sosa</h5>
                                          <p>
                                            <span className="animate-typing-col">
                                              Typing
                                              <span className="dot" />
                                              <span className="dot" />
                                              <span className="dot" />
                                            </span>
                                          </p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            Yesterday
                                          </small>
                                          <div className="chat-pin">
                                            <i className="fa-solid fa-thumbtack" />
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-log-out" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Unpin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Unread
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="user-list-item chat-user-list">
                                    <Link to="#">
                                      <div className="avatar avatar-online">
                                        <img
                                          src={User3}
                                          className="rounded-circle"
                                          alt="image"
                                        />
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>Michael Howard</h5>
                                          <p>Thank you</p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            10:20 PM
                                          </small>
                                          <div className="chat-pin">
                                            <i className="fa-solid fa-thumbtack me-2" />
                                            <i className="fa-solid fa-check-double check" />
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover ms-1">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-log-out" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Unpin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Unread
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                {/* Left Chat Title */}
                                <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                                  <div className="fav-title pin-chat">
                                    <h6>Recent Chat</h6>
                                  </div>
                                </div>
                                {/* /Left Chat Title */}
                                <ul className="user-list">
                                  <li className="user-list-item chat-user-list">
                                    <Link to="#">
                                      <div className="avatar avatar-online">
                                        <img
                                          src={User11}
                                          className="rounded-circle"
                                          alt="image"
                                        />
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>Horace Keene</h5>
                                          <p>Have you called them?</p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            Just Now
                                          </small>
                                          <div className="chat-pin">
                                            <span className="count-message">
                                              5
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover ms-1">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Pin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Read
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#block-user"
                                          >
                                            <span>
                                              <i className="bx bx-block" />
                                            </span>
                                            Block
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="user-list-item chat-user-list">
                                    <Link to="#">
                                      <div>
                                        <div className="avatar avatar-online">
                                          <img
                                            src={User4}
                                            className="rounded-circle"
                                            alt="image"
                                          />
                                        </div>
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>Hollis Tran</h5>
                                          <p>
                                            <i className="bx bx-video me-1" />
                                            Video
                                          </p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            Yesterday
                                          </small>
                                          <div className="chat-pin">
                                            <i className="fa-solid fa-check" />
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover ms-1">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Pin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Unread
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#block-user"
                                          >
                                            <span>
                                              <i className="bx bx-block" />
                                            </span>
                                            Block
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="user-list-item chat-user-list">
                                    <Link to="#">
                                      <div className="avatar">
                                        <img
                                          src={User1}
                                          className="rounded-circle"
                                          alt="image"
                                        />
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>James Albert</h5>
                                          <p>
                                            <i className="bx bx-file me-1" />
                                            Project Tools.doc
                                          </p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            10:20 PM
                                          </small>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover ms-1">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Pin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Unread
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#block-user"
                                          >
                                            <span>
                                              <i className="bx bx-block" />
                                            </span>
                                            Block
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="user-list-item chat-user-list">
                                    <Link to="#">
                                      <div>
                                        <div className="avatar avatar-online">
                                          <img
                                            src={User6}
                                            className="rounded-circle"
                                            alt="image"
                                          />
                                        </div>
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>Debra Jones</h5>
                                          <p>
                                            <i className="bx bx-microphone me-1" />
                                            Audio
                                          </p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            12:30 PM
                                          </small>
                                          <div className="chat-pin">
                                            <i className="fa-solid fa-check-double check" />
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover ms-1">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Pin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Unread
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#block-user"
                                          >
                                            <span>
                                              <i className="bx bx-block" />
                                            </span>
                                            Block
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="user-list-item chat-user-list">
                                    <Link to="#">
                                      <div>
                                        <div className="avatar ">
                                          <img
                                            src={User1}
                                            className="rounded-circle"
                                            alt="image"
                                          />
                                        </div>
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>Dina Brown</h5>
                                          <p>Have you called them?</p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            Yesterday
                                          </small>
                                          <div className="chat-pin">
                                            <i className="fa-solid fa-microphone-slash" />
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover ms-1">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Pin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Unread
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#block-user"
                                          >
                                            <span>
                                              <i className="bx bx-block" />
                                            </span>
                                            Block
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="user-list-item chat-user-list">
                                    <Link to="#">
                                      <div>
                                        <div className="avatar avatar-online">
                                          <img
                                            src={User13}
                                            className="rounded-circle"
                                            alt="image"
                                          />
                                        </div>
                                      </div>
                                      <div className="users-list-body">
                                        <div>
                                          <h5>Judy Mercer</h5>
                                          <p className="missed-call-col">
                                            <i className="bx bx-phone-incoming me-1" />
                                            Missed Call
                                          </p>
                                        </div>
                                        <div className="last-chat-time">
                                          <small className="text-muted">
                                            25/July/23
                                          </small>
                                        </div>
                                      </div>
                                    </Link>
                                    <div className="chat-hover ms-1">
                                      <div className="chat-action-col">
                                        <span
                                          className="d-flex"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis-vertical" />
                                        </span>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <span className="dropdown-item ">
                                            <span>
                                              <i className="bx bx-archive-in" />
                                            </span>
                                            Archive Chat{" "}
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mute-notification"
                                          >
                                            <span>
                                              <i className="bx bx-volume-mute" />
                                            </span>
                                            Mute Notification
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#change-chat"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-pin" />
                                            </span>
                                            Pin Chat
                                          </span>
                                          <span className="dropdown-item">
                                            <span>
                                              <i className="bx bx-check-square" />
                                            </span>
                                            Mark as Unread
                                          </span>
                                          <span
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#block-user"
                                          >
                                            <span>
                                              <i className="bx bx-block" />
                                            </span>
                                            Block
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Scrollbars>
                        </div>
                        {/* / Chats sidebar */}
                      </div>
                      {/* /Sidebar group */}
                      {/* Chat */}
                      <div className="chat chat-messages" id="middle">
                        <div className="h-100">
                          <div className="chat-header">
                            <div className="user-details mb-0">
                              <div className="d-lg-none">
                                <ul className="list-inline mt-2 me-2">
                                  <li className="list-inline-item">
                                    <Link
                                      className="text-muted px-0 left_sides"
                                      to="#"
                                      data-chat="open"
                                    >
                                      <i className="fas fa-arrow-left" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <figure className="avatar mb-0">
                                <img
                                  src={User12}
                                  className="rounded-circle"
                                  alt="image"
                                />
                              </figure>
                              <div className="mt-1">
                                <h5>Mark Villiams</h5>
                                <small className="last-seen">
                                  Last Seen at 07:15 PM
                                </small>
                              </div>
                            </div>
                            <div className="chat-options ">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                      <Tooltip>
                                        Search
                                      </Tooltip>
                                    }
                                  >
                                    <Link
                                      onClick={() => setSearchChat(!searchChat)}
                                      to="#"
                                      className="btn btn-outline-light chat-search-btn"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Search"
                                    >
                                      <i className="feather icon-search" />
                                    </Link>
                                  </OverlayTrigger>
                                </li>
                                <li className="list-inline-item">
                                  <Link
                                    className="btn btn-outline-light no-bg"
                                    to="#"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="fa-solid fa-ellipsis-vertical" />
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <Link
                                      to="/home"
                                      className="dropdown-item "
                                    >
                                      <span>
                                        <i className="bx bx-x" />
                                      </span>
                                      Close Chat{" "}
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#mute-notification"
                                    >
                                      <span>
                                        <i className="bx bx-volume-mute" />
                                      </span>
                                      Mute Notification
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#disappearing-messages"
                                    >
                                      <span>
                                        <i className="bx bx-time-five" />
                                      </span>
                                      Disappearing Message
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#clear-chat"
                                    >
                                      <span>
                                        <i className="bx bx-brush-alt" />
                                      </span>
                                      Clear Message
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#change-chat"
                                    >
                                      <span>
                                        <i className="bx bx-trash" />
                                      </span>
                                      Delete Chat
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#report-user"
                                    >
                                      <span>
                                        <i className="bx bx-dislike" />
                                      </span>
                                      Report
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#block-user"
                                    >
                                      <span>
                                        <i className="bx bx-block" />
                                      </span>
                                      Block
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            {/* Chat Search */}
                            <div
                              className={
                                searchChat
                                  ? "chat-search visible-chat"
                                  : "chat-search"
                              }
                            >
                              <form>
                                <span className="form-control-feedback">
                                  <i className="bx bx-search" />
                                </span>
                                <input
                                  type="text"
                                  name="chat-search"
                                  placeholder="Search Chats"
                                  className="form-control"
                                />
                                <div
                                  className="close-btn-chat"
                                  onClick={() => setSearchChat(!searchChat)}
                                >
                                  <i className="feather icon-x" />
                                </div>
                              </form>
                            </div>
                            {/* /Chat Search */}
                          </div>
                          <div className="chat-body chat-page-group slimscroll">
                            <div className="messages">
                              <div className="chats">
                                <div className="chat-avatar">
                                  <img
                                    src={User12}
                                    className="rounded-circle dreams_chat"
                                    alt="image"
                                  />
                                </div>
                                <div className="chat-content">
                                  <div className="chat-profile-name">
                                    <h6>
                                      Mark Villiams<span>8:16 PM</span>
                                      <span className="check-star msg-star d-none">
                                        <i className="bx bxs-star" />
                                      </span>
                                    </h6>
                                    <div className="chat-action-btns ms-2">
                                      <div className="chat-action-col">
                                        <Link
                                          className="#"
                                          to="#"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis" />
                                        </Link>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <Link
                                            to="#"
                                            className="dropdown-item message-info-left"
                                          >
                                            <span>
                                              <i className="bx bx-info-circle" />
                                            </span>
                                            Message Info{" "}
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item reply-button"
                                          >
                                            <span>
                                              <i className="bx bx-share" />
                                            </span>
                                            Reply
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <span>
                                              <i className="bx bx-smile" />
                                            </span>
                                            React
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#forward-message"
                                          >
                                            <span>
                                              <i className="bx bx-reply" />
                                            </span>
                                            Forward
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item click-star"
                                          >
                                            <span>
                                              <i className="bx bx-star" />
                                            </span>
                                            <span className="star-msg">
                                              Star Message
                                            </span>
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#report-user"
                                          >
                                            <span>
                                              <i className="bx bx-dislike" />
                                            </span>
                                            Report
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-message"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message-content">
                                    Hello{" "}
                                    <Link to="#">
                                      @Alex
                                    </Link>{" "}
                                    Thank you for the beautiful web design ahead
                                    schedule.
                                  </div>
                                </div>
                              </div>
                              <div className="chat-line">
                                <span className="chat-date">
                                  Today, July 24
                                </span>
                              </div>
                              <div className="chats chats-right">
                                <div className="chat-content">
                                  <div className="chat-profile-name text-end">
                                    <h6>
                                      Alex Smith<span>8:16 PM</span>
                                      <span className="check-star msg-star-one d-none">
                                        <i className="bx bxs-star" />
                                      </span>
                                    </h6>
                                    <div className="chat-action-btns ms-2">
                                      <div className="chat-action-col">
                                        <Link
                                          className="#"
                                          to="#"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis" />
                                        </Link>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <Link
                                            to="#"
                                            className="dropdown-item message-info-left"
                                          >
                                            <span>
                                              <i className="bx bx-info-circle" />
                                            </span>
                                            Message Info{" "}
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item reply-button"
                                          >
                                            <span>
                                              <i className="bx bx-share" />
                                            </span>
                                            Reply
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <span>
                                              <i className="bx bx-smile" />
                                            </span>
                                            React
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#forward-message"
                                          >
                                            <span>
                                              <i className="bx bx-reply" />
                                            </span>
                                            Forward
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item click-star-one"
                                          >
                                            <span>
                                              <i className="bx bx-star" />
                                            </span>
                                            <span className="star-msg-one">
                                              Star Message
                                            </span>
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-message"
                                          >
                                            <span>
                                              <i className="bx bx-edit-alt" />
                                            </span>
                                            Edit
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-message"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message-content ">
                                    <div className="chat-voice-group">
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <span>
                                              <img src={play01} alt="image" />
                                            </span>
                                          </Link>
                                        </li>
                                        <li>
                                          <img
                                            src={voice}
                                            className="img-fluid"
                                            alt="image"
                                          />
                                        </li>
                                        <li>0:05</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-avatar">
                                  <img
                                    src={User2}
                                    className="rounded-circle dreams_chat"
                                    alt="image"
                                  />
                                </div>
                              </div>
                              <div className="chats">
                                <div className="chat-avatar">
                                  <img
                                    src={User12}
                                    className="rounded-circle dreams_chat"
                                    alt="image"
                                  />
                                </div>
                                <div className="chat-content">
                                  <div className="chat-profile-name">
                                    <h6>
                                      Mark Villiams<span>8:16 PM</span>
                                      <span className="check-star msg-star-three d-none">
                                        <i className="bx bxs-star" />
                                      </span>
                                    </h6>
                                    <div className="chat-action-btns ms-2">
                                      <div className="chat-action-col">
                                        <Link
                                          className="#"
                                          to="#"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis" />
                                        </Link>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <Link
                                            to="#"
                                            className="dropdown-item message-info-left"
                                          >
                                            <span>
                                              <i className="bx bx-info-circle" />
                                            </span>
                                            Message Info{" "}
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item reply-button"
                                          >
                                            <span>
                                              <i className="bx bx-share" />
                                            </span>
                                            Reply
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <span>
                                              <i className="bx bx-smile" />
                                            </span>
                                            React
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#forward-message"
                                          >
                                            <span>
                                              <i className="bx bx-reply" />
                                            </span>
                                            Forward
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item click-star-three"
                                          >
                                            <span>
                                              <i className="bx bx-star" />
                                            </span>
                                            <span className="star-msg-three">
                                              Star Message
                                            </span>
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#report-user"
                                          >
                                            <span>
                                              <i className="bx bx-dislike" />
                                            </span>
                                            Report
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-message"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message-content award-link chat-award-link">
                                    <Link to="#">
                                      https://www.youtube.com/watch?v=GCmL3mS0Psk
                                    </Link>
                                    <img
                                      src={chatImg}
                                      className="img-fluid"
                                      alt="img"
                                    />{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="chats chats-right">
                                <div className="chat-content">
                                  <div className="chat-profile-name text-end">
                                    <h6>
                                      Alex Smith<span>8:16 PM</span>
                                      <span className="check-star msg-star-one d-none">
                                        <i className="bx bxs-star" />
                                      </span>
                                    </h6>
                                    <div className="chat-action-btns ms-2">
                                      <div className="chat-action-col">
                                        <Link
                                          className="#"
                                          to="#"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis" />
                                        </Link>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <Link
                                            to="#"
                                            className="dropdown-item message-info-left"
                                          >
                                            <span>
                                              <i className="bx bx-info-circle" />
                                            </span>
                                            Message Info{" "}
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item reply-button"
                                          >
                                            <span>
                                              <i className="bx bx-share" />
                                            </span>
                                            Reply
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <span>
                                              <i className="bx bx-smile" />
                                            </span>
                                            React
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#forward-message"
                                          >
                                            <span>
                                              <i className="bx bx-reply" />
                                            </span>
                                            Forward
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item click-star-one"
                                          >
                                            <span>
                                              <i className="bx bx-star" />
                                            </span>
                                            <span className="star-msg-one">
                                              Star Message
                                            </span>
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-message"
                                          >
                                            <span>
                                              <i className="bx bx-edit-alt" />
                                            </span>
                                            Edit
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-message"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message-content ">
                                    Thankyou for the notes sir. Will you send me
                                    the location where I could bought?
                                  </div>
                                </div>
                                <div className="chat-avatar">
                                  <img
                                    src={User2}
                                    className="rounded-circle dreams_chat"
                                    alt="image"
                                  />
                                </div>
                              </div>
                              <div className="chats">
                                <div className="chat-avatar">
                                  <img
                                    src={User12}
                                    className="rounded-circle dreams_chat"
                                    alt="image"
                                  />
                                </div>
                                <div className="chat-content">
                                  <div className="chat-profile-name">
                                    <h6>
                                      Mark Villiams<span>8:16 PM</span>
                                      <span className="check-star msg-star-five d-none">
                                        <i className="bx bxs-star" />
                                      </span>
                                    </h6>
                                    <div className="chat-action-btns ms-2">
                                      <div className="chat-action-col">
                                        <Link
                                          className="#"
                                          to="#"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis" />
                                        </Link>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <Link
                                            to="#"
                                            className="dropdown-item message-info-left"
                                          >
                                            <span>
                                              <i className="bx bx-info-circle" />
                                            </span>
                                            Message Info{" "}
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item reply-button"
                                          >
                                            <span>
                                              <i className="bx bx-share" />
                                            </span>
                                            Reply
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <span>
                                              <i className="bx bx-smile" />
                                            </span>
                                            React
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#forward-message"
                                          >
                                            <span>
                                              <i className="bx bx-reply" />
                                            </span>
                                            Forward
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item click-star-five"
                                          >
                                            <span>
                                              <i className="bx bx-star" />
                                            </span>
                                            <span className="star-msg-five">
                                              Star Message
                                            </span>
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#report-user"
                                          >
                                            <span>
                                              <i className="bx bx-dislike" />
                                            </span>
                                            Report
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-message"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message-content">
                                    <div className="location-sharing">
                                      <div className="sharing-location-icon">
                                        <i className="fa-solid fa-location-dot" />
                                      </div>
                                      <h6>
                                        My Location{" "}
                                        <Link to="#">Download</Link>
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="like-chat-grp">
                                    <ul>
                                      <li className="like-chat">
                                        <Link to="#">
                                          2
                                          <img src={like} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li className="comment-chat">
                                        <Link to="#">
                                          2
                                          <img src={heart} alt="Icon" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="chats">
                                <div className="chat-avatar">
                                  <img
                                    src={User12}
                                    className="rounded-circle dreams_chat"
                                    alt="image"
                                  />
                                </div>
                                <div className="chat-content">
                                  <div className="chat-profile-name">
                                    <h6>
                                      Mark Villiams<span>8:16 PM</span>
                                      <span className="check-star msg-star d-none">
                                        <i className="bx bxs-star" />
                                      </span>
                                    </h6>
                                    <div className="chat-action-btns ms-2">
                                      <div className="chat-action-col">
                                        <Link
                                          className="#"
                                          to="#"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis" />
                                        </Link>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <Link
                                            to="#"
                                            className="dropdown-item message-info-left"
                                          >
                                            <span>
                                              <i className="bx bx-info-circle" />
                                            </span>
                                            Message Info{" "}
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item reply-button"
                                          >
                                            <span>
                                              <i className="bx bx-share" />
                                            </span>
                                            Reply
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <span>
                                              <i className="bx bx-smile" />
                                            </span>
                                            React
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#forward-message"
                                          >
                                            <span>
                                              <i className="bx bx-reply" />
                                            </span>
                                            Forward
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item click-star"
                                          >
                                            <span>
                                              <i className="bx bx-star" />
                                            </span>
                                            <span className="star-msg">
                                              Star Message
                                            </span>
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#report-user"
                                          >
                                            <span>
                                              <i className="bx bx-edit-alt" />
                                            </span>
                                            Report
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-message"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message-content reply-getcontent">
                                    Thank you for your support
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-footer">
                          <form>
                            <div className="smile-foot">
                              <div className="chat-action-btns">
                                <div className="chat-action-col">
                                  <Link
                                    className="action-circle"
                                    to="#"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="fa-solid fa-ellipsis-vertical" />
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <Link
                                      to="#"
                                      className="dropdown-item "
                                    >
                                      <span>
                                        <i className="bx bx-file" />
                                      </span>
                                      Document
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                    >
                                      <span>
                                        <i className="bx bx-camera" />
                                      </span>
                                      Camera
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                    >
                                      <span>
                                        <i className="bx bx-image" />
                                      </span>
                                      Gallery
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                    >
                                      <span>
                                        <i className="bx bx-volume-full" />
                                      </span>
                                      Audio
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                    >
                                      <span>
                                        <i className="bx bx-map" />
                                      </span>
                                      Location
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                    >
                                      <span>
                                        <i className="bx bx-user-pin" />
                                      </span>
                                      Contact
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="smile-foot emoj-action-foot">
                              <Link
                                to="#"
                                className="action-circle"
                              >
                                <i className="bx bx-smile" />
                              </Link>
                            </div>
                            <div className="smile-foot">
                              <Link
                                to="#"
                                className="action-circle"
                              >
                                <i className="bx bx-microphone-off" />
                              </Link>
                            </div>
                            <div className="replay-forms">
                              <div className="chats forward-chat-msg reply-div d-none">
                                <div className="contact-close_call text-end">
                                  <Link
                                    to="#"
                                    className="close-replay"
                                  >
                                    <i className="bx bx-x" />
                                  </Link>
                                </div>
                                <div className="chat-avatar">
                                  <img
                                    src={User3}
                                    className="rounded-circle dreams_chat"
                                    alt="image"
                                  />
                                </div>
                                <div className="chat-content">
                                  <div className="chat-profile-name">
                                    <h6>
                                      Mark Villiams<span>8:16 PM</span>
                                    </h6>
                                    <div className="chat-action-btns ms-2">
                                      <div className="chat-action-col">
                                        <Link
                                          className="#"
                                          to="#"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-ellipsis" />
                                        </Link>
                                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                          <Link
                                            to="#"
                                            className="dropdown-item message-info-left"
                                          >
                                            <span>
                                              <i className="bx bx-info-circle" />
                                            </span>
                                            Message Info{" "}
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item reply-button"
                                          >
                                            <span>
                                              <i className="bx bx-share" />
                                            </span>
                                            Reply
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <span>
                                              <i className="bx bx-smile" />
                                            </span>
                                            React
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#forward-message"
                                          >
                                            <span>
                                              <i className="bx bx-reply" />
                                            </span>
                                            Forward
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            <span>
                                              <i className="bx bx-star" />
                                            </span>
                                            Star Message
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#report-user"
                                          >
                                            <span>
                                              <i className="bx bx-dislike" />
                                            </span>
                                            Report
                                          </Link>
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-message"
                                          >
                                            <span>
                                              <i className="bx bx-trash" />
                                            </span>
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="message-content reply-content"></div>
                                </div>
                              </div>
                              <input
                                type="text"
                                className="form-control chat_form"
                                placeholder="Type your message here..."
                              />
                            </div>
                            <div className="form-buttons">
                              <button className="btn send-btn" type="submit">
                                <i className="bx bx-paper-plane" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* /Chat */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Student Profile */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default StudentMessages;
