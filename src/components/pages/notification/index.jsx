import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../footer';
import { User1, User11, User2, User3, User7 } from '../../imagepath';
import PageHeader from '../header';

const Notification = () => {
  return (
    <>
    <div className='main-wrapper'>
    
        <PageHeader activeMenu={"PageNotification"} />

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
                            Notifications
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
                <div className="title-sec">
                <div className="row">
                    <div className="col-sm-6 col-lg-5">
                    <h2>Notifications</h2>
                    <p>
                        Improve the way your work, discover a brand new tool and drop the
                        hassle once and for all.
                    </p>
                    </div>
                    <div className="col-sm-6 col-lg-7">
                    <div className="text-end">
                        <Link to="#" className="btn-mark">
                        Mark All as Read
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                {/* Notifications List */}
                <div className="notify-sec">
                <div className="row">
                    <div className="col-md-12">
                    <h5>Today</h5>
                    <div className="notify-item">
                        <div className="row align-items-center">
                        <div className="col-md-9">
                            <div className="notify-content">
                            <Link to="/instructor/instructor-profile">
                                <img
                                className="avatar-img semirounded-circle"
                                src={User2}
                                alt="User Image"
                                />
                            </Link>
                            <div className="notify-detail">
                                <h6>
                                <Link to="/instructor/instructor-profile">Rolands R </Link>
                                <span>Today at 9:42 AM</span>
                                </h6>
                                <p>
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it
                                has a more-or-less normal distribution of letters, as
                                opposed to using Content here,
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-md-end">
                            <Link to="#" className="btn">
                                Mark as Read
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="notify-item">
                        <div className="row align-items-center">
                        <div className="col-md-9">
                            <div className="notify-content">
                            <Link to="/instructor/instructor-profile">
                                <img
                                className="avatar-img semirounded-circle"
                                src={User1}
                                alt="User Image"
                                />
                            </Link>
                            <div className="notify-detail">
                                <h6>
                                <Link to="/instructor/instructor-profile">Jenis R. </Link>
                                <span>Today at 10:08 AM</span>
                                </h6>
                                <p>
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it
                                has a more-or-less normal distribution of letters, as
                                opposed to using Content here,
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-md-end">
                            <Link to="#" className="btn">
                                Mark as Read
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <h5>Yesterday</h5>
                    <div className="notify-item">
                        <div className="row align-items-center">
                        <div className="col-md-9">
                            <div className="notify-content">
                            <Link to="/instructor/instructor-profile">
                                <img
                                className="avatar-img semirounded-circle"
                                src={User3}
                                alt="User Image"
                                />
                            </Link>
                            <div className="notify-detail">
                                <h6>
                                <Link to="/instructor/instructor-profile">Jesse Stevens</Link>{" "}
                                <span>Yesterday at 9:42 AM</span>
                                </h6>
                                <p>
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it
                                has a more-or-less normal distribution of letters, as
                                opposed to using Content here,
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-md-end">
                            <Link to="#" className="btn">
                                Mark as Read
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="notify-item">
                        <div className="row align-items-center">
                        <div className="col-md-9">
                            <div className="notify-content">
                            <Link to="/instructor/instructor-profile">
                                <img
                                className="avatar-img semirounded-circle"
                                src={User7}
                                alt="User Image"
                                />
                            </Link>
                            <div className="notify-detail">
                                <h6>
                                <Link to="/instructor/instructor-profile">Rolands R</Link>{" "}
                                <span>Yesterday at 5:40 AM</span>
                                </h6>
                                <p>
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it
                                has a more-or-less normal distribution of letters, as
                                opposed to using Content here,
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-md-end">
                            <Link to="#" className="btn">
                                Mark as Read
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="notify-item">
                        <div className="row align-items-center">
                        <div className="col-md-9">
                            <div className="notify-content">
                            <Link to="/instructor/instructor-profile">
                                <img
                                className="avatar-img semirounded-circle"
                                src={User11}
                                alt="User Image"
                                />
                            </Link>
                            <div className="notify-detail">
                                <h6>
                                <Link to="/instructor/instructor-profile">John Michael</Link>{" "}
                                <span>Yesterday at 7:40 AM</span>
                                </h6>
                                <p>
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it
                                has a more-or-less normal distribution of letters, as
                                opposed to using Content here,
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-md-end">
                            <Link to="#" className="btn">
                                Mark as Read
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* /Notifications List */}
            </div>
        </section>

        <Footer/>
    </div>


    </>
  )
}

export default Notification;