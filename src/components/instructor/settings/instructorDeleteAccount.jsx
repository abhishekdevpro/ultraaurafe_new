import React from 'react'
import { InstructorHeader } from '../header'
import InstructorSidebar from '../sidebar'
import Footer from '../../footer'
import { Link } from 'react-router-dom'
import SettingsPageHeader from './settingsPageHeader'

const InstructorDeleteAccount = () => {
  return (
    <div className="main-wrapper">
    {/* Header */}
    <InstructorHeader activeMenu={"Settings"} />

    {/* /Header */}
    {/* Breadcrumb */}
    <div className="breadcrumb-bar breadcrumb-bar-info">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="breadcrumb-list">
              <h2 className="breadcrumb-title">Settings</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Delete Account
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
                  <div className="edit-profile-info">
                    <h5>Select a withdraw method</h5>
                  </div>
                  <div className="del-acc">
                    <h6>Warning</h6>
                    <p>
                      If you close your account, you will be unsubscribed from all
                      your 0 courses, and will lose access forever.
                    </p>
                  </div>
                  <Link to="/home" className="btn btn-primary">
                    Delete My Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Instructor Settings */}
        </div>
      </div>
    </div>
    {/* /Page Content */}
    <Footer />
  </div>
  
  )
}

export default InstructorDeleteAccount
