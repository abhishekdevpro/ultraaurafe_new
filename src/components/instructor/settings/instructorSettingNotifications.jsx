import React from 'react'
import { InstructorHeader } from '../header'
import Footer from '../../footer'
import InstructorSidebar from '../sidebar'
import SettingsPageHeader from './settingsPageHeader'
import { Link } from "react-router-dom";

const InstructorSettingNotifications = () => {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Settings"} />
        {/* Breadcrumb */}
        <div className="breadcrumb-bar breadcrumb-bar-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">Settings</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Notifications</li>
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
              {/* Instructor Settings */}
              <div className="col-xl-9 col-lg-9">	
                <div className="settings-widget card-details">
                  <div className="settings-menu p-0">
                    <div className="profile-heading">
                      <h3>Settings</h3>
                      <p>You have full control to manage your own account settings</p>
                    </div>
                    <SettingsPageHeader/>
                    <div className="checkout-form settings-wrap">
                      <h5>Choose when and how to be notified</h5>
                      <ul className="settings-noti-lists">
                        <li>
                          <div className="notification-title">
                            <h6>Student Questions</h6>
                            <p>Notify me when a student asks a question in the Q&amp;A section</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input type="checkbox" id="user1" className="check" defaultChecked />
                            <label htmlFor="user1" className="checktoggle">	</label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Feedback Received</h6>
                            <p>Notify me when receive feedback from students</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input type="checkbox" id="user2" className="check" defaultChecked />
                            <label htmlFor="user2" className="checktoggle">	</label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Quiz/Exam Results Submission</h6>
                            <p>Notify me when quiz or exam results are submitted</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input type="checkbox" id="user3" className="check" defaultChecked />
                            <label htmlFor="user3" className="checktoggle">	</label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Forum Activity</h6>
                            <p>Notify me about new posts or replies in course discussion forums.</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input type="checkbox" id="user4" className="check" />
                            <label htmlFor="user4" className="checktoggle">	</label>
                          </div>
                        </li>
                      </ul>
                      <h5>Email Notifications</h5>
                      <ul className="settings-noti-lists email-noti-lists">
                        <li>
                          <div className="notification-title">
                            <h6>Course Enrollment</h6>
                            <p>Send me emails when a new student enrolls the course</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input type="checkbox" id="user5" className="check" defaultChecked />
                            <label htmlFor="user5" className="checktoggle">	</label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>Assignment Submission</h6>
                            <p>Send me email whenever an assignment is submitted by a student</p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input type="checkbox" id="user6" className="check" defaultChecked />
                            <label htmlFor="user6" className="checktoggle">	</label>
                          </div>
                        </li>
                        <li>
                          <div className="notification-title">
                            <h6>System Updates</h6>
                            <p>Send me emails about updates to the LMS platform </p>
                          </div>
                          <div className="status-toggle modal-status">
                            <input type="checkbox" id="user7" className="check" defaultChecked />
                            <label htmlFor="user7" className="checktoggle">	</label>
                          </div>
                        </li>
                      </ul>
                      <Link to="#" className="btn btn-primary">Save Changes</Link>
                    </div>							
                  </div>
                </div>
              </div>	
              {/* /Instructor Settings */}
            </div>
          </div>
        </div>	
        <Footer />
        {/* /Page Content */}
      </div>
  )
}

export default InstructorSettingNotifications