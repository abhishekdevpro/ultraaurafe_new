import React from "react";
import { Category01, Category02, Category03, Category05, Category06, Category07,
   Category08, Category09, Category10, Category11, Category12, Category13, Category14, 
   Category15, Category16, Category17 } from "../../imagepath";

const Graphics = () => {

  return (
    <>
      <div className="tab-pane fade show active" id="graphics">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category01} alt="" />
                </div>
                <h5>Logo Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category02} alt="" />
                </div>
                <h5>Business Cards &amp; Stationery</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category03} alt="" />
                </div>
                <h5>Brochure Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category05} alt="" />
                </div>
                <h5>Social Media Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category05} alt="" />
                </div>
                <h5>Graphics for Streamers</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category06} alt="" />
                </div>
                <h5>Photoshop Editing</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category07} alt="" />
                </div>
                <h5>Brand Style Guides</h5>
              </div>
              <span className="cat-count">25</span>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category08} alt="" />
                </div>
                <h5>Illustration</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category09} alt="" />
                </div>
                <h5>Flyer Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category10} alt="" />
                </div>
                <h5>Icon Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category11} alt="" />
                </div>
                <h5>Packaging &amp; Label Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category12} alt="" />
                </div>
                <h5>Presentation Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category13} alt="" />
                </div>
                <h5>Game Art</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category14} alt="" />
                </div>
                <h5>Pattern Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category15} alt="" />
                </div>
                <h5>Book Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category16} alt="" />
                </div>
                <h5>Invitation Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category17} alt="" />
                </div>
                <h5>UX Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
            <div className="category-box">
              <div className="category-title">
                <div className="category-img">
                  <img src={Category06} alt="" />
                </div>
                <h5>Infographic Design</h5>
              </div>
              <div className="cat-count">
                <span>25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphics;
