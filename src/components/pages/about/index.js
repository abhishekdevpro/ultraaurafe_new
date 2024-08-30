
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import PageHeader from "../header";

const aboutUs = () => {
    return (
        <>
            <div className="main-wrapper">
                <PageHeader />

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
                                            <li className="breadcrumb-item">Pages</li>
                                            <li className="breadcrumb-item">About

                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <h1 className="mb-0">About
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="terms-content">
                                    <div className="terms-text">
                                        <h3>
                                            Ultra Aura Education
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default aboutUs;
