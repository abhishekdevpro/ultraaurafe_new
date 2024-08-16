import React from 'react'
import Footer from '../../footer'
import StudentHeader from '../header'
import StudentSidebar from '../sidebar'

const StudentProfile = () => {
    return (
        <>
            {/* Main Wrapper */}
            <div className="main-wrapper">
                {/* Header */}
                <StudentHeader activeMenu={"My Profile"} />
                {/* /Header */}
                {/* Breadcrumb */}
                <div className="breadcrumb-bar breadcrumb-bar-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <div className="breadcrumb-list">
                                    <h2 className="breadcrumb-title">My Profile</h2>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a to="/home">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                My Profile
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
                           <StudentSidebar/>
                            {/* /Sidebar */}
                            {/* Student Profile */}
                            <div className="col-xl-9 col-lg-9">
                                <div className="settings-widget card-details mb-0">
                                    <div className="settings-menu p-0">
                                        <div className="profile-heading">
                                            <h3>My Profile</h3>
                                        </div>
                                        <div className="checkout-form personal-address">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="contact-info">
                                                        <h6>First Name</h6>
                                                        <p>Ronald</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="contact-info">
                                                        <h6>Last Name</h6>
                                                        <p>Richard</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="contact-info">
                                                        <h6>User Name</h6>
                                                        <p>studentdemo</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="contact-info">
                                                        <h6>Email</h6>
                                                        <p>studentdemo@example.com</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="contact-info">
                                                        <h6>Phone Number</h6>
                                                        <p>90154-91036</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="contact-info mb-0">
                                                        <h6>Bio</h6>
                                                        <p>
                                                            Hello! I&apos;m Ronald Richard. I&apos;m passionate about
                                                            developing innovative software solutions, analyzing
                                                            classic literature. I aspire to become a software
                                                            developer, work as an editor. In my free time, I enjoy
                                                            coding, reading, hiking etc.
                                                        </p>
                                                    </div>
                                                </div>
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
                {/* Footer */}
               <Footer/>
                {/* /Footer */}
            </div>
            {/* /Main Wrapper */}
        </>

    )
}

export default StudentProfile
