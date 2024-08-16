import React, { useState } from "react";
import PageHeader from "../header";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { Minus, Plus } from "react-feather";

const Faq = () => {



    const [collapse, setCollapse] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [collapse3, setCollapse3] = useState(false);
    const [collapse4, setCollapse4] = useState(false);
    const [collapse5, setCollapse5] = useState(false);
    const [collapse6, setCollapse6] = useState(false);

    const toggleCollapse = ()=>setCollapse(!collapse);
    const toggleCollapse2 = ()=>setCollapse2(!collapse2);
    const toggleCollapse3 = ()=>setCollapse3(!collapse3);
    const toggleCollapse4 = ()=>setCollapse4(!collapse4);
    const toggleCollapse5 = ()=>setCollapse5(!collapse5);
    const toggleCollapse6 = ()=>setCollapse6(!collapse6);

  return (
    <>
      <div className="main-wrapper">
        <PageHeader activeMenu={"Faq"} />

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
                      <li className="breadcrumb-item">FAQ</li>
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
                <h1 className="mb-0">Most frequently asked questions</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="help-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="help-title">
                  <h1>Most frequently asked questions</h1>
                  <p>
                    Here are the most frequently asked questions you may check
                    before getting started
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/* Faq */}
                <div className="faq-card" onClick={toggleCollapse}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqone"
                      aria-expanded="true"
                    >
                      Is there a 14-days trial?
                    </Link>
                      {collapse?<Minus size={18} className="faqicon"/>:<Plus size={18} className="faqicon"/>}
                  </h6>
                  <div id="faqone" className={collapse?"collapse show":"collapse"}>
                    <div className="faq-detail">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                      <p>
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages. The new common language
                        will be more simple and regular than the existing
                        European languages.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-card" onClick={toggleCollapse2}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqtwo"
                    >
                      How much time I will need to learn this app?
                    </Link>
                    {collapse2?<Minus size={18} className="faqicon"/>:<Plus size={18} className="faqicon"/>}
                  </h6>
                  <div id="faqtwo" className={collapse2?"collapse show":"collapse"}>
                    <div className="faq-detail">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                      <p>
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages. The new common language
                        will be more simple and regular than the existing
                        European languages.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="faq-card" onClick={toggleCollapse3}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqthree"
                    >
                      Is there a month-to-month payment option?
                    </Link>
                    {collapse3?<Minus size={18} className="faqicon"/>:<Plus size={18} className="faqicon"/>}
                  </h6>
                  
                  <div id="faqthree" className={collapse3?"collapse show":"collapse"}>
                    <div className="faq-detail">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                      <p>
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages. The new common language
                        will be more simple and regular than the existing
                        European languages.
                      </p>
                    </div>
                  </div>
                  
                </div>
                {/* /Faq */}
              </div>
              <div className="col-lg-6">
                {/* Faq */}
                <div className="faq-card" onClick={toggleCollapse4}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqfour"
                    >
                      What’s the benefits of the Premium Membership?
                    </Link>
                    {collapse4?<Minus size={18} className="faqicon"/>:<Plus size={18} className="faqicon"/>}

                  </h6>
                  
                  <div id="faqfour" className={collapse4?"collapse show":"collapse"}>
                    <div className="faq-detail">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                      <p>
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages. The new common language
                        will be more simple and regular than the existing
                        European languages.
                      </p>
                    </div>
                  </div>
                  
                </div>
                <div className="faq-card" onClick={toggleCollapse5}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqfive"
                      >
                      Are there any free tutorials available?
                    </Link>
                    {collapse5?<Minus size={18} className="faqicon"/>:<Plus size={18} className="faqicon"/>}
                  </h6>
                  
                  <div id="faqfive" className={collapse5?"collapse show":"collapse"}>
                    <div className="faq-detail">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                      <p>
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages. The new common language
                        will be more simple and regular than the existing
                        European languages.
                      </p>
                    </div>
                  </div>
                  
                </div>
                <div className="faq-card" onClick={toggleCollapse6}>
                  <h6 className="faq-title faqFlex">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqsix"
                    >
                      How can I cancel my subscription plan?
                    </Link>
                    {collapse6?<Minus size={18} className="faqicon"/>:<Plus size={18} className="faqicon"/>}
                  </h6>
                  
                  <div id="faqsix" className={collapse6?"collapse show":"collapse"}>
                    <div className="faq-detail">
                      <p>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </p>
                      <p>
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages. The new common language
                        will be more simple and regular than the existing
                        European languages.
                      </p>
                    </div>
                  </div>
                  
                </div>
                {/* /Faq */}
              </div>
            </div>
          </div>
        </div>

        <Footer/>
        
      </div>
    </>
  );
};

export default Faq;
