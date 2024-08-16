import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar1, Avatar2, Avatar5, Quote } from "../../imagepath";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// install Swiper modules
// import { ArrowLeft, ArrowRight } from "react-feather";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel";
// SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

// export const Testimonial3 = () => {
//   return (
//     <div className="coverFlow">
//       <div className="swiper-slide coverItem  coverActive">
//         <div className="testimonial-item-five">
//           <div className="testimonial-quote">
//             <img className="quote img-fluid" alt="" src={Quote} />
//           </div>
//           <div className="testimonial-content">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
//               pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
//               dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
//               porttitor risus tellus eget vitae sagittis id in. In in tempor ac
//               dignissim at. Scelerisque sociis consequat{" "}
//             </p>
//           </div>
//           <div className="testimonial-ratings">
//             <div className="rating">
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star"></i>
//               <p className="d-inline-block">
//                 4.5<span>ratings</span>
//               </p>
//             </div>
//           </div>
//           <div className="testimonial-users">
//             <div className="imgbx">
//               <img className="img-fluid" alt="" src={Avatar2} />
//             </div>
//             <div className="d-block">
//               <h6>Jeff J. Sparrow</h6>
//               <p>Designer</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="swiper-slide coverItem coverLeft">
//         <div className="testimonial-item-five">
//           <div className="testimonial-quote">
//             <img className="quote img-fluid" alt="" src={Quote} />
//           </div>
//           <div className="testimonial-content">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
//               pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
//               dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
//               porttitor risus tellus eget vitae sagittis id in. In in tempor ac
//               dignissim at. Scelerisque sociis consequat{" "}
//             </p>
//           </div>
//           <div className="testimonial-ratings">
//             <div className="rating">
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star"></i>
//               <p className="d-inline-block">
//                 4.5<span>ratings</span>
//               </p>
//             </div>
//           </div>
//           <div className="testimonial-users">
//             <div className="imgbx">
//               <img className="" alt="" src={Avatar1} />
//             </div>
//             <div className="d-block">
//               <h6>Martin Harn</h6>
//               <p>Docker Development</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="swiper-slide coverItem coverRight">
//         <div className="testimonial-item-five">
//           <div className="testimonial-quote">
//             <img className="quote img-fluid" alt="" src={Quote} />
//           </div>
//           <div className="testimonial-content">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
//               pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
//               dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
//               porttitor risus tellus eget vitae sagittis id in. In in tempor ac
//               dignissim at. Scelerisque sociis consequat{" "}
//             </p>
//           </div>
//           <div className="testimonial-ratings">
//             <div className="rating">
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star filled"></i>
//               <i className="fas fa-star"></i>
//               <p className="d-inline-block">
//                 4.8<span>ratings</span>
//               </p>
//             </div>
//           </div>
//           <div className="testimonial-users">
//             <div className="imgbx">
//               <img className="" alt="" src={Avatar5} />
//             </div>
//             <div className="d-block">
//               <h6>Noah Aarons</h6>
//               <p>Business Man</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Swiper

// export const Testimonial3 = () => {
//   return (
//     <Swiper
//       effect={"coverFlow"}
//       spaceBetween={10}
//       navigation={true}
//       pagination={true}
//       grabCursor={true}
//       slidesPerView={"1"}
//       initialSlide={"1"}
//       centeredSlides={true}
//       coverflowEffect={{
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: false,
//       }}
//       zoom={true}
//       modules={[Navigation, EffectCoverflow, Pagination, Zoom]}
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <Slide1 />
//       </SwiperSlide>
//       <SwiperSlide>
//         <Slide2 />
//       </SwiperSlide>
//       <SwiperSlide>
//         <Slide3 />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// Slick

// export const Testimonial3 = () => {
//   let inputFile = "";
//   const slides = [
//     { element: <Slide1 />, width: "", height: "" },
//     { element: <Slide2 />, width: "", height: "" },
//     { element: <Slide3 />, width: "", height: "" },
//   ];
  // const nextClick = (e) => {
  //   e.prereventDefault();
  //   inputFile.click();
  //   return false;
  // };
//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="arrow next" onClick={onClick}>
//         <ArrowRight
//           ref={(input) => {
//             // assigns a reference so we can trigger it later
//             inputFile = input;
//           }}
//           size={16}
//           color={"white"}
//         />
//       </div>
//     );
//   };
//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="arrow prev" onClick={onClick}>
//         <ArrowLeft size={16} color={"white"} />
//       </div>
//     );
//   };

//   const [divIndex, setDivIndex] = useState(0);
//   const settings = {
//     className: "slideTest varWidth",
//     infinite: false,
//     lazyLoad: true,
//     grabCursor: true,
//     navigation: true,
//     rotate: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // initialSlide: "2",
//     variableWidth: true,
//     variableHeight: true,
//     cssEase: "linear",
//     centerMode: true,
//     // centerPadding: "-80%",
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     // beforeChange: (current, next) => setDivIndex(next),
//   };
//   return (
//     <>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div
//             style={{ width: slide.width, height: slide.height }}
//             key={index}
//             className={
//               index === divIndex ? "swipeSlide swipeActive" : "swipeSlide"
//             }
//           >
//             {slide.element}
//           </div>
//         ))}
//       </Slider>
//       <div className="testimonial-bottom-nav">
//         <div className="slide-next-btn testimonial-next-pre">
//           <i className="fas fa-arrow-left "></i>
//         </div>
//         <div className="slide-prev-btn testimonial-next-pre">
//           <i onClick={nextClick} className="fas fa-arrow-right"></i>
//         </div>
//       </div>
//     </>
//   );
// };

// export const Testimonial3 = () => {
//   var settings = {
//     //autoWidth: true,
//     items: 1,
//     margin: 25,
//     dots: false,
//     nav: true,
//     navText: [
//       '<i className="fa-sharp fa-solid fa-arrow-left-long slideIcon"></i>',
//       '<i className="fa-solid fa-arrow-right-long slideIcon"></i>',
//     ],

//     loop: true,
//     responsiveClass: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 1,
//       },
//       1170: {
//         items: 3,
//       },
//     },
//   };
//   return (
//     <OwlCarousel {...settings}>
//       <Slide1 />
//       <Slide2 />
//       <Slide3 />
//     </OwlCarousel>
//   );
// };
const Slide1 = () => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item-five">
        <div className="testimonial-quote">
          <img className="quote img-fluid home3Slide" alt="" src={Quote} />
        </div>
        <div className="testimonial-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
            porttitor risus tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat{" "}
          </p>
        </div>
        <div className="testimonial-ratings">
          <div className="rating">
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star"></i>
            <p className="d-inline-block">
              4.5<span>ratings</span>
            </p>
          </div>
        </div>
        <div className="testimonial-users">
          <div className="imgbx">
            <img className="img-fluid" alt="" src={Avatar2} />
          </div>
          <div className="d-block">
            <h6>Jeff J. Sparrow</h6>
            <p>Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item-five">
        <div className="testimonial-quote">
          <img className="quote img-fluid home3Slide" alt="" src={Quote} />
        </div>
        <div className="testimonial-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
            porttitor risus tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat{" "}
          </p>
        </div>
        <div className="testimonial-ratings">
          <div className="rating">
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star"></i>
            <p className="d-inline-block">
              4.5<span>ratings</span>
            </p>
          </div>
        </div>
        <div className="testimonial-users">
          <div className="imgbx">
            <img className="" alt="" src={Avatar1} />
          </div>
          <div className="d-block">
            <h6>Martin Harn</h6>
            <p>Docker Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide3 = () => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item-five">
        <div className="testimonial-quote">
          <img className="quote img-fluid home3Slide" alt="" src={Quote} />
        </div>
        <div className="testimonial-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
            porttitor risus tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat{" "}
          </p>
        </div>
        <div className="testimonial-ratings">
          <div className="rating">
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star"></i>
            <p className="d-inline-block">
              4.8<span>ratings</span>
            </p>
          </div>
        </div>
        <div className="testimonial-users">
          <div className="imgbx">
            <img className="" alt="" src={Avatar5} />
          </div>
          <div className="d-block">
            <h6>Noah Aarons</h6>
            <p>Business Man</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testimonial3 = () => {
  // var settings = {
  //   //autoWidth: true,
  //   items: 1,
  //   margin: 25,
  //   dots: false,
  //   nav: true,
  //   navText: [
  //     // eslint-disable-next-line react/jsx-key
  //     <ArrowLeft className="slideIcon"/>,
  //     // eslint-disable-next-line react/jsx-key
  //     <ArrowRight className="slideIcon"/>,
  //   ],

  //   loop: true,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 1,
  //     },
  //     1170: {
  //       items: 1,
  //     },
  //   },
  // };
  return (
    <>
      {/* <OwlCarousel {...settings} className="owl-carousel real-reviews owl-theme">
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </OwlCarousel> */}
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        direction="horizontal"
        loop={false}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={2}
        speed={400}
        navigation={{
          prevEl: ".slide-prev-btn",
          nextEl: ".slide-next-btn",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 10,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
      </Swiper>
      <div className="testimonial-bottom-nav">
        <div className="slide-next-btn testimonial-next-pre">
           <i className="fas fa-arrow-left "></i>
         </div>
        <div className="slide-prev-btn testimonial-next-pre">
           <i  className="fas fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
};
