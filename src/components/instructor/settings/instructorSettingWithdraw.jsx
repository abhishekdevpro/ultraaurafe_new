import React from 'react'
import { InstructorHeader } from '../header'
import InstructorSidebar from '../sidebar'
import Footer from '../../footer'
import { Link } from 'react-router-dom'
import SettingsPageHeader from './settingsPageHeader'

const InstructorSettingWithdraw = () => {

    return (
        <div>
            <div className='main-wrapper'>
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
                                            <li className="breadcrumb-item">
                                                <Link to="/home">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Withdraw
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
                                        <form>
                                            <div className="checkout-form settings-wrap pb-0">
                                                <div className="edit-profile-info">
                                                    <h5>Select a withdraw method</h5>
                                                </div>
                                                <ul
                                                    className="nav nav-pills d-block"
                                                    id="pills-tab1"
                                                    role="tablist"
                                                >
                                                    <li
                                                        className="wallet-method withdraw-box"
                                                        role="presentation"
                                                    >
                                                        <label
                                                            className="custom_radio mb-0"
                                                            id="pills-public-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-public"
                                                            role="tab"
                                                            aria-controls="pills-public"
                                                            aria-selected="true"
                                                        >
                                                            <input type="radio" name="public" />
                                                            <span className="checkmark" /> Bank Transfer
                                                        </label>
                                                        <p className='mb-0'>Minimum withdraw $80</p>
                                                    </li>
                                                    <li
                                                        className="wallet-method withdraw-box"
                                                        role="presentation"
                                                    >
                                                        <label
                                                            className="custom_radio mb-0"
                                                            id="pills-private-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-private"
                                                            role="tab"
                                                            aria-controls="pills-private"
                                                            aria-selected="false"
                                                        >
                                                            <input type="radio" name="public" />
                                                            <span className="checkmark" /> E-Check
                                                        </label>
                                                        <p className='mb-0'>Minimum withdraw $80</p>
                                                    </li>
                                                    <li
                                                        className="wallet-method withdraw-box"
                                                        role="presentation"
                                                    >
                                                        <label
                                                            className="custom_radio mb-0 active"
                                                            id="pills-select-people-tab"
                                                            data-bs-toggle="pill"
                                                            data-bs-target="#pills-select-people"
                                                            role="tab"
                                                            aria-controls="pills-select-people"
                                                            aria-selected="false"
                                                        >
                                                            <input type="radio" name="public" defaultChecked="" />
                                                            <span className="checkmark" /> PayPal
                                                        </label>
                                                        <p className='mb-0'>Minimum withdraw $80</p>
                                                    </li>
                                                </ul>
                                                <div className="wrap-wallet">
                                                    <div className="tab-content" id="pills-tabContent">
                                                        <div
                                                            className="tab-pane fade"
                                                            id="pills-public"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-public-tab"
                                                        >
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="input-block">
                                                                        <label className="form-label">Account Name</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="input-block">
                                                                        <label className="form-label">
                                                                            Account Number
                                                                        </label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="input-block">
                                                                        <label className="form-label">Bank Name</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="input-block">
                                                                        <label className="form-label">IBAN</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="input-block">
                                                                        <label className="form-label">BIC / SWIFT</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button className="btn btn-primary" type="submit">
                                                                        Save Withdrawal Account
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="pills-private"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-private-tab"
                                                        >
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="input-block">
                                                                        <label className="form-label">
                                                                            Your Physical Address
                                                                        </label>
                                                                        <input type="text" className="form-control" />
                                                                        <p className="label-slug">
                                                                            We will send you an E-Check to this address
                                                                            directly
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button className="btn btn-primary" type="submit">
                                                                        Save Withdrawal Account
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="pills-select-people"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-select-people-tab"
                                                        >
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="input-block">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            defaultValue="te****t@example.com"
                                                                        />
                                                                        <p className="label-slug">
                                                                            We will use this email address to send the money
                                                                            to your Paypal account
                                                                        </p>
                                                                        <label className="form-label">
                                                                            PayPal Email Address
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <Link to="#" className="btn btn-primary" >
                                                                        Save Withdrawal Account
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* /Instructor Settings */}
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </div>
            <Footer />
        </div>
    )
}

export default InstructorSettingWithdraw
