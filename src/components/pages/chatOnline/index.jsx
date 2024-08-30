import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import PageHeader from "../header";

const chat = () => {
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
                      <li className="breadcrumb-item">Chat Online

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
                <h1 className="mb-0">Chat Online
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

                    <p>
                    At Ultra Aura Education, we are dedicated to providing you with prompt and effective support. Our Chat Online feature offers a convenient and immediate way to get assistance with any questions or issues you may have. Heres how you can make the most of our chat support:
                    </p>
                    <h4> Accessing Chat Online
                    </h4>
                    <ul>
                      <li><h4>How to Start:</h4> To initiate a chat, simply click on the chat icon located at the bottom-right corner of our website or platform. This will open a chat window where you can begin your conversation with our support team.
                      </li>
                      <li> <h4>Availability </h4> Our chat support is available insert hours of operation Monday through Friday from 9 AM to 6 PM EST. Outside of these hours, you can leave a message, and we will respond as soon as possible on the next business day.

                      </li>
                    </ul>
                    <h3> What to Expect</h3>
                    <p>
                      <h4 >Instant Assistance:</h4>Our team is here to provide real-time assistance, answer your questions, and resolve any issues you may encounter.

                      <h4>Knowledgeable Support:</h4>Speak with knowledgeable representatives who are equipped to assist with a wide range of topics, including course information, technical issues, account management, and more.
                      Confidentiality: All conversations through our chat support are private and secure. We are committed to protecting your personal information and ensuring a confidential support experience.
                    </p>
                    <h3>  How to Use Chat Effectively

                    </h3>
                    <p>
                      <h4> Provide Details:</h4> When starting a chat, provide as much detail as possible about your question or issue. This helps us to assist you more efficiently.
                      <h4>Be Specific:</h4>  If you have a specific concern, such as a problem with a particular course or technical issue, mention these details early in the conversation.
                      <p>Follow-Up: If your issue requires further action or follow-up, our support team will provide you with clear instructions or escalate the matter as needed.
                      </p>
                    </p>
                  </div>
                  <div className="terms-text">
                    <h3>  Additional Support
                    </h3>
                    <p>
                      <h4>Help Center: </h4> For detailed information, visit our Help Center where you can find articles, guides, and FAQs that may address your query.


                      <h4>Email and Phone:</h4>If you prefer, you can also reach out to us via email at <a href="info@ultraaura.education">info@ultraaura.education</a> or call us at 1803-967-7715 for assistance.

                    </p>
                    
                 
                 
                    <div>
                        <h3>We are here to ensure you have a seamless and productive experience with Ultra Aura Education. Use our Chat Online feature to get the support you need, anytime you need it.

                        </h3>
                    </div>
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

export default chat;
