import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import PageHeader from "../header";

const PrivacyPolicy = () => {
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
                      <li className="breadcrumb-item">Privacy Policy</li>
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
                <h1 className="mb-0">Privacy Policy</h1>
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
                      Effective date: <span>23rd of March, 2024</span>
                    </h3>
                    <h4>This is a H1, Perfect&apos;s for titles.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Stress, for the United States element ante. Duis cursus,
                      mi quis viverra ornare, eros pain, sometimes none at all,
                      freedom of the living creature was as the profit and
                      financial security. Jasmine neck adapter and just running
                      it lorem makeup sad smile of the television set.
                    </p>
                    <h5>This is a H2&apos;s perfect for the titles.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Stress, for the United States element ante. Duis cursus,
                      mi quis viverra ornare, eros pain , sometimes none at all,
                      freedom of the living creature was as the profit and
                      financial security. Jasmine neck adapter and just running
                      it lorem makeup hairstyle. Now sad smile of the television
                      set.
                    </p>
                    <h5>This is a H2&apos;s perfect for the titles.</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Stress, for the United States element ante. Duis cursus,
                      mi quis viverra ornare, eros pain , sometimes none at all,
                      freedom of the living creature was as the profit and
                      financial security. Jasmine neck adapter and just running
                      it lorem makeup hairstyle. Now sad smile of the television
                      set.
                    </p>
                  </div>
                  <div className="terms-text">
                    <h4>This is a H2&apos;s perfect for the titles.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Stress, for the United States element ante. Duis cursus,
                      mi quis viverra ornare, eros pain , sometimes none at all,
                      freedom of the living creature was as the profit and
                      financial security. Jasmine neck adapter and just running
                      it lorem makeup hairstyle. Now sad smile of the television
                      set.
                    </p>
                    <ul>
                      <li>More than 60+ components</li>
                      <li>Five ready tests</li>
                      <li>Coming soon page </li>
                      <li>Check list with left icon</li>
                      <li>And much more ...</li>
                    </ul>
                  </div>
                  <div className="terms-text">
                    <h4>This is a H2&apos;s perfect for the titles.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Stress, for the United States element ante. Duis cursus,
                      mi quis viverra ornare, eros pain , sometimes none at all,
                      freedom of the living creature was as the profit and
                      financial security. Jasmine neck adapter and just running
                      it lorem makeup hairstyle. Now sad smile of the television
                      set.
                    </p>
                  </div>
                  <div className="terms-text">
                    <h4>Changes about terms</h4>
                    <p>
                      If we change our terms of use we will post those changes
                      on this page. Registered users will be sent an email that
                      outlines changes made to the terms of use.
                    </p>
                    <p>
                      Questions? Please email us at{" "}
                      <Link to="#">dreamslms@example.com</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default PrivacyPolicy;
