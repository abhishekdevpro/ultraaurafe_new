import React from "react";
import { Link } from "react-router-dom";
import { Qute, Qute01, User1, User2, User3 } from "../../imagepath";
// import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  return (
    <section className="testimonial-four">
      <div className="review">
        <div className="container">
          <div className="testi-quotes">
            <img src={Qute} alt="" />
          </div>
          <div
            className="mentor-testimonial lazy slider aos"
            data-aos="fade-up"
            data-sizes="50vw"
          >
            <Slider>
              <Card />
              <Card2 />
              <Card3 />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
const Card = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="testimonial-all d-flex justify-content-center">
        <div className="testimonial-two-head text-center align-items-center d-flex">
          <div className="testimonial-four-saying ">
            <div className="testi-right">
              <img src={Qute01} alt="" />
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="four-testimonial-founder">
              <div className="fount-about-img">
                <Link to="instructor-profile">
                  <img src={User1} alt="" className="img-fluid" />
                </Link>
              </div>

              <h3>
                <Link to="instructor-profile">Daziy Millar</Link>
              </h3>
              <span>Founder of Awesomeux Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="testimonial-all d-flex justify-content-center">
        <div className="testimonial-two-head text-center align-items-center d-flex">
          <div className="testimonial-four-saying ">
            <div className="testi-right">
              <img src={Qute01} alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="four-testimonial-founder">
              <div className="fount-about-img">
                <Link to="instructor-profile">
                  <img src={User3} alt="" className="img-fluid" />
                </Link>
              </div>
              <h3>
                <Link to="instructor-profile">john smith</Link>
              </h3>
              <span>Founder of Awesomeux Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="testimonial-all d-flex justify-content-center">
        <div className="testimonial-two-head text-center align-items-center d-flex">
          <div className="testimonial-four-saying ">
            <div className="testi-right">
              <img src={Qute01} alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="four-testimonial-founder">
              <div className="fount-about-img">
                <Link to="instructor-profile">
                  <img src={User2} alt="" className="img-fluid" />
                </Link>
              </div>
              <h3>
                <Link to="instructor-profile">David Lee</Link>
              </h3>
              <span>Founder of Awesomeux Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// {
//   <section className="testimonial-four">
//       <div className="review">
//         <div className="container">
//           <div className="testi-quotes">
//             <img src={Qute} alt="" />
//           </div>
//           <div
//             className="mentor-testimonial lazy slider aos"
//             data-aos="fade-up"
//             data-sizes="50vw"
//           >
//             <div className="d-flex justify-content-center">
//               <div className="testimonial-all d-flex justify-content-center">
//                 <div className="testimonial-two-head text-center align-items-center d-flex">
//                   <div className="testimonial-four-saying ">
//                     <div className="testi-right">
//                       <img src={Qute01} alt="" />
//                     </div>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s, when an unknown
//                       printer took a galley of type and scrambled it to make a
//                       type specimen book.
//                     </p>
//                     <div className="four-testimonial-founder">
//                       <div className="fount-about-img">
//                         <Link to="instructor-profile">
//                           <img src={User1} alt="" className="img-fluid" />
//                         </Link>
//                       </div>
//                       <h3>
//                         <Link to="instructor-profile">Daziy Millar</Link>
//                       </h3>
//                       <span>Founder of Awesomeux Technology</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-center">
//               <div className="testimonial-all d-flex justify-content-center">
//                 <div className="testimonial-two-head text-center align-items-center d-flex">
//                   <div className="testimonial-four-saying ">
//                     <div className="testi-right">
//                       <img src={Qute01} alt="" />
//                     </div>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s, when an unknown
//                       printer took a galley of type and scrambled it to make a
//                       type specimen book.
//                     </p>
//                     <div className="four-testimonial-founder">
//                       <div className="fount-about-img">
//                         <Link to="instructor-profile">
//                           <img src={User3} alt="" className="img-fluid" />
//                         </Link>
//                       </div>
//                       <h3>
//                         <Link to="instructor-profile">john smith</Link>
//                       </h3>
//                       <span>Founder of Awesomeux Technology</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-center">
//               <div className="testimonial-all d-flex justify-content-center">
//                 <div className="testimonial-two-head text-center align-items-center d-flex">
//                   <div className="testimonial-four-saying ">
//                     <div className="testi-right">
//                       <img src={Qute01} alt="" />
//                     </div>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s, when an unknown
//                       printer took a galley of type and scrambled it to make a
//                       type specimen book.
//                     </p>
//                     <div className="four-testimonial-founder">
//                       <div className="fount-about-img">
//                         <Link to="instructor-profile">
//                           <img src={User2} alt="" className="img-fluid" />
//                         </Link>
//                       </div>
//                       <h3>
//                         <Link to="instructor-profile">David Lee</Link>
//                       </h3>
//                       <span>Founder of Awesomeux Technology</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// }

export default Testimonial;
