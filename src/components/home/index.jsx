// import React, { useState } from "react";
// import Header from "../header";
// import {
//   bannerimg,
//   Become1,
//   Become2,
//   CertificateIcon,
//   CourseIcon,
//   GratuateIcon,
//   Icon01,
//   Icon02,
//   Icon03,
//   Icon04,

//   Join,
//   PencilIcon,
//   Share,

// } from "../imagepath";
// import { useSelector } from "react-redux";
// import TopCategory from "./slider/topCategory";
// // import Loginbg from "../../assets/img/banner.png";
// // import TrendingCourse from "./slider/trendingCourse";
// import Companies from "./slider/companies";
// // import BgBanner1 from "../../assets/img/bg-banner-01.png";
// // import BgBanner2 from "../../assets/img/bg-banner-02.png";
// // import Loginbg from "../../assets/img/banner.png";
// // import UserLove from "../../assets/img/user-love.jpg";
// //import Blog from "./slider/blog";
// import Footer from "../footer";
// // import Testimonial from "./slider/testimonial";
// import Select from "react-select";
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// // import CountUp from "react-countup";
// import FeaturedCourses from "./FeaturedCourses";
// import { useNavigate } from "react-router-dom";
// // import { TypeAnimation } from "react-type-animation";
// import styled, { keyframes } from 'styled-components';

// // Styled components
// const Container = styled.div`
//   margin: 1rem 0;
// `;

// const BannerContent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Form = styled.form`
//   width: auto;
//   border:2px solid white;
//   background-color:white;
//    border-radius: 16px;
//   padding:4px;
// `;

// const FormInner = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
  
//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

// const InputGroup = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 1rem;
//   border:none;

//   @media (min-width: 768px) {
//     width: auto;
//     margin-bottom: 0;
//   }
// `;

// const SearchIcon = styled.i`
//   margin-right: 0.5rem;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   margin-right: 0.5rem;
//   border-radius: 16px;
//   border: 1px solid #ccc;

//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;

// const SelectWrapper = styled.span`
//   width: 100%;
//   margin-bottom: 1rem;

//   @media (min-width: 768px) {
//     width: auto;
//     margin-bottom: 0;
//     margin-right: 0.5rem;
//   }
// `;

// const SearchButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 24px;
//   border: none;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
// const fadeInOut = keyframes`
//   0%, 100% { opacity: 0; transform: translateY(-20px); }
//   50% { opacity: 1; transform: translateY(0); }
// `;

// // Create a styled span for the animated text
// const AnimatedText = styled.span`
//   display: inline-block;
//   animation: ${fadeInOut} 3s infinite;
// `;

// // Create a styled h2 for the heading
// const Heading = styled.h2`
//   font-weight: 700;
//   margin-bottom: 8px;
// `;


// // import { useNavigate } from "react-router-dom";

// // const options = [
// //   { label: "Category", value: "Category" },
// //   { label: "Angular", value: "Angular" },
// //   { label: "Node Js", value: "Node Js" },
// //   { label: "React", value: "React" },
// //   { label: "Python", value: "Python" },
// // ];
// // const levelOptions = [
// //   { value: 'undergraduates', label: 'Undergraduates' },
// //   { value: 'graduates', label: 'Graduates' },
// //   { value: 'professionals', label: 'Professionals' },
// //   { value: 'home-care', label: 'Home Care' },
// //   { value: 'special-kids', label: 'Special Kids' },
// // ];

// export const Home = () => {
//   // const [setValue] = useState(null);
//   const [searchKeyword, setSearchKeyword] = useState(""); // State for the search input
//   const [selectedLevel, setSelectedLevel] = useState(null);
//   const [categoryOptions, setCategoryOptions] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [levelOptions, setLevelOptions] = useState([]);
//   // const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const navigate = useNavigate(); // Initialize useNavigate
//   const mobileSidebar = useSelector(
//     (state) => state.sidebarSlice.expandMenu
//   );
//   const formatValue = (value) => `${Math.floor(value)}`;
//   // const navigate = useNavigate();
//   const animatedText = ["Career", "Development", "Growth", "Learning", "Certifications"]; // Array of texts for animation
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const style = {
//     control: (baseStyles, state) => ({
//       ...baseStyles,
//       backgroundColor: "#FFDEDA",
//       border: state.isFocused ? 0 : 0,
//       paddingLeft: "5px",
//       paddingTop: "5px",
//       paddingBottom: "5px",
//       // This line disable the blue border
//       boxShadow: state.isFocused ? 0 : 0,
//       borderRadius: state.isSelected ? "0" : "10px",
//       fontSize: "14px",
//       "&:hover": {
//         border: state.isFocused ? 0 : 0,
//         color: "black",
//       },
//       // eslint-disable-next-line no-dupe-keys
//       borderRadius: "50px",
//       outline: "none",
//     }),
//     menu: (base) => ({ ...base, marginTop: "2px" }),
//     option: (provided) => ({
//       ...provided,
//       backgroundColor: mobileSidebar === 'disabled' ? "#fff" : "#000",
//       color: mobileSidebar === 'disabled' ? '#000' : '#fff',
//       fontSize: "14px",
//       "&:hover": {
//         backgroundColor: mobileSidebar === 'disabled' ? "#FFDEDA" : "#2b2838",
//       },
//     }),
//     indicatorSeparator: (base) => ({
//       ...base,
//       display: "none",
//     }),
//     dropdownIndicator: (base, state) => ({
//       ...base,
//       color: "black",
//       transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
//       transition: "250ms",
//     }),
//   };

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//     const interval = setInterval(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % animatedText.length);
//     }, 5000); // Change text every 2 seconds

//     return () => clearInterval(interval);
//   }, []);
//   useEffect(() => {
//     console.log(mobileSidebar, 'gg');


//   }, [mobileSidebar]);

//   useEffect(() => {
//     // Fetch categories from API
//     fetch('https://api.novajobs.us/api/trainers/course-categories')
//       .then(response => response.json())
//       .then(data => {
//         const categories = data.data.map(category => ({
//           label: category.name,
//           value: category.id
//         }));
//         setCategoryOptions(categories);
//       })
//       .catch(error => {
//         console.error('Error fetching categories:', error);
//       });
//   }, []);
//   useEffect(() => {
//     // Fetch levels from API
//     fetch('https://api.novajobs.us/api/trainers/course-level')
//       .then(response => response.json())
//       .then(data => {
//         const levels = data.data.map(level => ({
//           label: level.name,
//           value: level.id
//         }));
//         setLevelOptions(levels);
//       })
//       .catch(error => {
//         console.error('Error fetching levels:', error);
//       });
//   }, []);

//   const handleSearch = () => {
//     const queryParams = new URLSearchParams();
//     if (searchKeyword) queryParams.append("title_keywords", searchKeyword);
//     if (selectedCategory) queryParams.append("course_category_id", selectedCategory.value);
//     if (selectedLevel) queryParams.append("course_level_id", selectedLevel.value);

//     navigate(`/course-list?${queryParams.toString()}`); // Use navigate for routing
//   };

//   return (
//     <>
//       <div className="main-wrapper">
//         <Header />
//         {/* banner */}
//         <section
//           className="home-slide d-flex align-items-center"
//         >
//           <div className="container">
//             <div className="row ">
//               <div className="col-md-7">
//                 <div className="home-slide-face aos" data-aos="fade-up">
//                   {console.log(currentTextIndex)}
//                {/* <div className="home-slide-text text-center">
//   <h5 className="d-none d-md-block">Empowering Futures: Anytime, Anywhere</h5>
//   <h2>
//     Take the next step towards your{" "}
//     <span className="animated-text">
//       {animatedText[currentTextIndex]}
//     </span>{" "}
//     at Ultra Aura with technology-enabled learning.
//   </h2>
//   <p className="d-none d-md-block">Own your future by learning new skills online</p>
// </div> */}
//  <div className="home-slide-text text-center">
  
//   {/* <h2 className="mb-2 " style={{fontWeight:"700"}}> Empowering Futures: Anytime, Anywhere</h2> */}
//   <Heading>
//       Empowering Futures: <AnimatedText>Anytime, Anywhere</AnimatedText>
//     </Heading>
//    {/* <h2>Take the next step towards your {" "}
//                  <TypeAnimation
//                    sequence={[
                     
//                      " at Ultra Aura with technology-enabled learning.",
//                      1000,
//                      " Own your future by learning new skills online",
//                      1000,
                    
//                    ]}
//                    wrapper="span"
//                    speed={10}
//                    repeat={Infinity}
//                  />
//                </h2> */}
  
//  </div>

//                   {/* <div className="container my-4">
//                     <div className="banner-content">
//                       <form className="form" action="/course-list">
//                         <div className="form-inner">
//                           <div className="input-group homeSearch">
//                             <i className="fa-solid fa-magnifying-glass search-icon" />
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Search Course"
//                               value={searchKeyword}
//                               onChange={(e) => setSearchKeyword(e.target.value)}
//                             />
//                             <span className="input-group-append mx-2">
//                               <Select
//                                 options={categoryOptions}
//                                 value={selectedCategory}
//                                 placeholder="Category"
//                                 onChange={setSelectedCategory}
//                                 styles={style}
//                               />
//                             </span>
//                             <span className="input-group-append mx-2">
//                               <Select
//                                 options={levelOptions}
//                                 value={selectedLevel}
//                                 placeholder="Levels"
//                                 onChange={setSelectedLevel}
//                                 styles={style}
//                               />
//                             </span>
//                             <button className="btn btn-primary rounded" type="button" onClick={handleSearch}>
//                               <i className="fas fa-arrow-right" />
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div> */}
//                    <Container>
//       <BannerContent>
//         <Form action="/course-list">
//           <FormInner>
//             <InputGroup className="homeSearch">
//               <SearchInput
//                 type="text"
//                 placeholder="Search Course"
//                 value={searchKeyword}
//                 onChange={(e) => setSearchKeyword(e.target.value)}
//               />

//             </InputGroup>
//             <SelectWrapper className="input-group-append">
//               <Select
//                 options={categoryOptions}
//                 value={selectedCategory}
//                 placeholder="Category"
//                 onChange={setSelectedCategory}
//                 styles={style}
//               />
//             </SelectWrapper>
//             <SelectWrapper className="input-group-append">
//               <Select
//                 options={levelOptions}
//                 value={selectedLevel}
//                 placeholder="Levels"
//                 onChange={setSelectedLevel}
//                 styles={style}
//               />
//             </SelectWrapper>
//             <SearchButton type="button" onClick={handleSearch}>
//             <SearchIcon className="fa-solid fa-magnifying-glass search-icon" />
//             </SearchButton>
//           </FormInner>
//         </Form>
//       </BannerContent>
//     </Container>

//                   <div className="trust-user">
//                     {/* <p>
//                       Trusted by Users <br />
//                       Now Live worldwide
//                     </p> */}
//                     <div className="trust-rating d-flex align-items-center">
//                       <div className="rate-head">
//                         {/* <h2>
//                           <span className="d-flex">
//                             <CountUp
//                               start={0}
//                               end={1000}
//                               delay={1}
//                               format={formatValue}
//                             />
//                             +
//                           </span>
//                         </h2> */}
//                       </div>
//                       {/* <div className="rating d-flex align-items-center">
//                         <h2 className="d-inline-block average-rating">4.4</h2>
//                         <i className="fas fa-star filled me-1" />
//                         <i className="fas fa-star filled me-1" />
//                         <i className="fas fa-star filled me-1" />
//                         <i className="fas fa-star filled me-1" />
//                         <i className="fas fa-star filled me-1" />
//                       </div> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-5 d-flex align-items-center">
//                 <div className="girl-slide-img aos" data-aos="fade-up">
//                   <img src={bannerimg} alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* /banner */}

//         {/* Home banner bottom */}
//         <section className="section student-course">
//           <div className="container">
//             <div className="course-widget">
//               <div className="row">
//                 <div className="col-lg-3 col-md-6">
//                   <div className="course-full-width">
//                     <div
//                       className="blur-border course-radius align-items-center aos"
//                       data-aos="fade-up"
//                     >
//                       <div className="online-course d-flex align-items-center">
//                         <div className="course-img">
//                           <img src={PencilIcon} alt="" />
//                         </div>
//                         <div className="course-inner-content">
//                           <h4>
//                             {/* <span>10</span>K */}
//                             <span className="d-flex">
//                               {/* <CountUp
//                                 start={0}
//                                 end={10}
//                                 delay={1}
//                                 duration={4}
//                               /> */}
//                               100+
//                             </span>
//                           </h4>
//                           <p>Online Courses</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6 d-flex">
//                   <div className="course-full-width">
//                     <div
//                       className="blur-border course-radius aos"
//                       data-aos="fade-up"
//                     >
//                       <div className="online-course d-flex align-items-center">
//                         <div className="course-img">
//                           <img src={CourseIcon} alt="" />
//                         </div>
//                         <div className="course-inner-content">
//                           <h4>
//                             <span className="d-flex">
//                               {/* <CountUp start={0} end={200} delay={1} />+ */}
//                               50+
//                             </span>
//                           </h4>
//                           <p>Expert Tutors</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6 d-flex">
//                   <div className="course-full-width">
//                     <div
//                       className="blur-border course-radius aos"
//                       data-aos="fade-up"
//                     >
//                       <div className="online-course d-flex align-items-center">
//                         <div className="course-img">
//                           <img src={CertificateIcon} alt="" />
//                         </div>
//                         <div className="course-inner-content">
//                           <h4>
//                             <span className="d-flex">
//                               {/* <CountUp
//                                 start={0}
//                                 end={6}
//                                 delay={1}
//                                 duration={5}
//                               />
//                               K+ */}
//                               100+
//                             </span>
//                           </h4>
//                           <p>Ceritified Courses</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6 d-flex">
//                   <div className="course-full-width">
//                     <div
//                       className="blur-border course-radius aos"
//                       data-aos="fade-up"
//                     >
//                       <div className="online-course d-flex align-items-center">
//                         <div className="course-img">
//                           <img src={GratuateIcon} alt="" />
//                         </div>
//                         <div className="course-inner-content">
//                           <h4>
//                             <span className="d-flex">
//                               {/* <CountUp
//                                 start={0}
//                                 end={60}
//                                 delay={1}
//                                 duration={2}
//                               />
//                               K + */}
//                               100+
//                             </span>
//                           </h4>
//                           <p>Online Students</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Home banner bottom */}

//         {/* Top Category with Owl Carousel */}
//         {/* <TopCategory /> */}
//         {/* Top Category with Owl Carousel */}

//         {/* What's new Featured Course */}
//         {/* <section className="section new-course">
         
//         </section> */}
//         {/* <FeaturedCourses /> */}
//         {/* What's new Featured Course */}

//         {/* Master Skills */}
//         <section className="section master-skill">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-7 col-md-12">
//                 <div className="section-header aos" data-aos="fade-up">
//                   <div className="section-sub-head">
//                     <span>What’s New</span>
//                     <h2>Master the skills to drive your career</h2>
//                   </div>
//                 </div>
//                 <div className="section-text aos" data-aos="fade-up">
//                   <p>
//                     Get certified, master modern tech skills, and level up your
//                     career — whether you’re starting out or a seasoned pro. 95%
//                     of eLearning learners report our hands-on content directly
//                     helped their careers.
//                   </p>
//                 </div>
//                 <div className="career-group aos" data-aos="fade-up">
//                   <div className="row">
//                     <div className="col-lg-6 col-md-6 d-flex">
//                       <div className="certified-group blur-border d-flex">
//                         <div className="get-certified d-flex align-items-center">
//                           <div className="blur-box">
//                             <div className="certified-img ">
//                               <img src={Icon01} alt="" className="img-fluid" />
//                             </div>
//                           </div>
//                           <p>Stay motivated with engaging instructors</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 d-flex">
//                       <div className="certified-group blur-border d-flex">
//                         <div className="get-certified d-flex align-items-center">
//                           <div className="blur-box">
//                             <div className="certified-img ">
//                               <img src={Icon02} alt="" className="img-fluid" />
//                             </div>
//                           </div>
//                           <p>Keep up with in the latest in cloud</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 d-flex">
//                       <div className="certified-group blur-border d-flex">
//                         <div className="get-certified d-flex align-items-center">
//                           <div className="blur-box">
//                             <div className="certified-img ">
//                               <img src={Icon03} alt="" className="img-fluid" />
//                             </div>
//                           </div>
//                           <p>Get certified with 100+ certification courses</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 d-flex">
//                       <div className="certified-group blur-border d-flex">
//                         <div className="get-certified d-flex align-items-center">
//                           <div className="blur-box">
//                             <div className="certified-img ">
//                               <img src={Icon04} alt="" className="img-fluid" />
//                             </div>
//                           </div>
//                           <p>Build skills your way, from labs to courses</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-5 col-md-12 d-flex align-items-end">
//                 <div className="career-img aos" data-aos="fade-up">
//                   <img src={Join} alt="" className="img-fluid" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* /Master Skills */}

//         {/* Trending Course */}
//         {/* <TrendingCourse /> */}
//         {/* Trending Course */}

//         {/* Companies */}
       
//         {/* Companies */}

//         {/* Share knowledge */}
//         <section
//           className="section share-knowledge"
//         >
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="knowledge-img aos" data-aos="fade-up">
//                   <img src={Share} alt="" className="img-fluid" />
//                 </div>
//               </div>
//               <div className="col-md-6 d-flex align-items-center">
//                 <div className="join-mentor aos" data-aos="fade-up">
//                   <h2>Want to share your knowledge? Join us a Trainer</h2>
//                   <p>
//                     Share your expertise and inspire the next generation
//                     by joining UltraAura as an instructor. Shape the future
//                     of education with flexible teaching opportunities and a global reach.

//                   </p>
//                   <ul className="course-list">
//                     <li>
//                       <i className="fa-solid fa-circle-check" />
//                       Quick Onboarding
//                     </li>
//                     <li>
//                       <i className="fa-solid fa-circle-check" />
//                       100% Online platform

//                     </li>
//                   </ul>
//                   <div className="all-btn all-category d-flex align-items-center">
//                     <Link to="/login" className="btn btn-primary">
//                       Join as Trainer Now
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section py-5" data-aos="fade-up">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 col-md-6 d-flex">
//                 <div className="student-mentor cube-instuctor ">
//                   <h4>Partner with US</h4>
//                   <div className="row">
//                     <div className="col-lg-7 col-md-12">
//                       <div className="top-instructors">
//                         <p>
//                           Collaborate with UltraAura to expand educational opportunities
//                           and make a lasting impact. Partner with us to drive innovation
//                           and empower learners worldwide.
//                         </p>
//                         <div className="all-btn all-category d-flex align-items-center">
//                           <Link to="/partner-signin" className="btn btn-primary">
//                             Partner with US
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-5 col-md-12">
//                       <div className="mentor-img">
//                         <img className="img-fluid" alt="" src={Become2} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 d-flex">
//                 <div className="student-mentor yellow-mentor">
//                   <h4>Transform Access To Education</h4>
//                   <div className="row">
//                     <div className="col-lg-8 col-md-12">
//                       <div className="top-instructors">
//                         <p>
//                           Create an account to receive our newsletter, course
//                           recommendations and promotions.
//                         </p>
//                         <div className="all-btn all-category d-flex align-items-center">
//                           <Link to="/register" className="btn btn-primary">
//                             Sign up
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-12">
//                       <div className="mentor-img">
//                         <img className="img-fluid" alt="" src={Become1} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* /Become a instructor */}

//         {/* B
//         <section
//           className="section latest-blog"
//         >
//           <div className="container">
//             <div className="section-header aos" data-aos="fade-up">
//               <div className="section-sub-head feature-head text-center mb-0">
//                 <h2>Latest Blogs</h2>
//                 <div className="section-text aos" data-aos="fade-up">
//                 </div>
//               </div>
//             </div>
//             <Blog />
//             <div className="enroll-group aos" data-aos="fade-up">
//               <div className="row ">
//                 <div className="col-lg-4 col-md-6">
//                   <div className="total-course d-flex align-items-center">
//                     <div className="blur-border">
//                       <div className="enroll-img ">
//                         <img src={Icon7} alt="" className="img-fluid" />
//                       </div>
//                     </div>
//                     <div className="course-count">
//                       <h3>
//                         <span className="counterUp">253,085</span>
//                       </h3>
//                       <p>STUDENTS ENROLLED</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="total-course d-flex align-items-center">
//                     <div className="blur-border">
//                       <div className="enroll-img ">
//                         <img src={Icon8} alt="" className="img-fluid" />
//                       </div>
//                     </div>
//                     <div className="course-count">
//                       <h3>
//                         <span className="counterUp">1,205</span>
//                       </h3>
//                       <p>TOTAL COURSES</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6">
//                   <div className="total-course d-flex align-items-center">
//                     <div className="blur-border">
//                       <div className="enroll-img ">
//                         <img src={Icon9} alt="" className="img-fluid" />
//                       </div>
//                     </div>
//                     <div className="course-count">
//                       <h3>
//                         <span className="counterUp">127</span>
//                       </h3>
//                       <p>COUNTRIES</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="lab-course">
//               <div className="section-header aos" data-aos="fade-up">
//                 <div className="section-sub-head feature-head text-center">
//                   <h2>
//                     Unlimited access to 360+ courses <br />
//                     and 1,600+ hands-on labs
//                   </h2>
//                 </div>
//               </div>
//               <div className="icon-group aos" data-aos="fade-up">
//                 <div className="offset-lg-1 col-lg-12">
//                   <div className="row">
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon9} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon10} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon16} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon12} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon13} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon14} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon15} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon16} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon17} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-1 col-3">
//                       <div className="total-course d-flex align-items-center">
//                         <div className="blur-border">
//                           <div className="enroll-img ">
//                             <img src={Icon18} alt="" className="img-fluid" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//          /Blog */}
//  <section className="section lead-companies">
//           <div className="container">
//             <div className="section-header aos" data-aos="fade-up">
//               <div className="section-sub-head feature-head text-center">
//                 <span>Trusted By</span>
//                 <h2>We Work with Some of the Best - Globally</h2>
//               </div>
//             </div>
//             <div className="lead-group aos" data-aos="fade-up">
//               <Companies />
//             </div>
//           </div>
//         </section>
//         {/* Footer */}
//         <Footer />
//         {/* /Footer */}
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState } from "react";
import Header from "../header";
import {
  bannerimg,
  Become1,
  Become2,
  CertificateIcon,
  CourseIcon,
  GratuateIcon,
  Icon01,
  Icon02,
  Icon03,
  Icon04,

  Join,
  PencilIcon,
  Share,

} from "../imagepath";
import { useSelector } from "react-redux";
// import Loginbg from "../../assets/img/banner.png";
// import TrendingCourse from "./slider/trendingCourse";
import Companies from "./slider/companies";
// import BgBanner1 from "../../assets/img/bg-banner-01.png";
// import BgBanner2 from "../../assets/img/bg-banner-02.png";
// import Loginbg from "../../assets/img/banner.png";
// import UserLove from "../../assets/img/user-love.jpg";
//import Blog from "./slider/blog";
import Footer from "../footer";
// import Testimonial from "./slider/testimonial";
import Select from "react-select";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FeaturedCourses from "./FeaturedCourses";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components"
// Container for the search bar
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

// Form inner styling
const FormInner = styled.div`
  padding: 12px;
  background-color: #fff;
  border-radius: 35px;
  width: 100%;
  border: 0;
  max-width: 740px;

  @media (max-width: 768px) {
    border-radius: 25px;
  }
`;

// Input group styling
const InputGroup = styled.div`
  background: #fff;
  border-radius: 130px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row; /* Ensure elements stay in one row */

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 50px;
    padding-left: 8px;
  }
`;

// Select component wrapper
const SelectWrapper = styled.span`
  display: flex;
  margin: 0 0.5rem;
  flex: 1; /* Allow elements to grow as needed */
  min-width: 150px;
   background: #fff;; /* Ensure this is applied correctly */

  @media (max-width: 768px) {
    flex: 0 0 100%;
    margin: 0.5rem 0;
  }
`;

// Button styling
const SearchButton = styled.button`
  background: #f66962;
  border-radius: 50px;
  font-weight: bold;
  border: 1px solid #f66962;
  font-size: 18px;
  padding: 10px 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  margin-left: 0.5rem;
  

  &:hover,
  &:focus {
    background: #fc7f50;
    border-color: #fc7f50;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

// Search icon styling (hidden on mobile)
const SearchIcon = styled.i`
  display: flex;
  align-items: center;
  color: #f66962;
  padding-right: 10px;

  @media (max-width: 768px) {
    display: none; /* Hide search icon on mobile */
  }
`;

// Arrow icon replaced with search icon on mobile


// Input field styling
const InputField = styled.input`
  background: #fff;
  border-radius: 40px;
  border: 0;
  height: 44px;
  color: #000;
  font-size: 16px;
  margin-right: 10px;
  flex-grow: 2;

  &::placeholder {
    color: #a2a2a2;
  }
`;

// Form container
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BannerContent = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const StyledButton = styled.button`
  background: ${props => props.primary ? "#f66962" : "#ffffff"};
  color: ${props => props.primary ? "#ffffff" : "#f66962"};
  border: 2px solid #f66962;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.primary ? "#fc7f50" : "#f66962"};
    color: #ffffff;
  }
`;



export const Home = () => {
  // const [setValue] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(""); // State for the search input
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [levelOptions, setLevelOptions] = useState([]);
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  // const formatValue = (value) => `${Math.floor(value)}`;
  // const navigate = useNavigate();
  const animatedText = ["Career", "Development", "Growth", "Learning", "Certifications"]; // Array of texts for animation
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % animatedText.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    console.log(mobileSidebar, 'gg');


  }, [mobileSidebar]);

  useEffect(() => {
    // Fetch categories from API
    fetch('https://api.novajobs.us/api/trainers/course-categories')
      .then(response => response.json())
      .then(data => {
        const categories = data.data.map(category => ({
          label: category.name,
          value: category.id
        }));
        setCategoryOptions(categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);
  useEffect(() => {
    // Fetch levels from API
    fetch('https://api.novajobs.us/api/trainers/course-level')
      .then(response => response.json())
      .then(data => {
        const levels = data.data.map(level => ({
          label: level.name,
          value: level.id
        }));
        setLevelOptions(levels);
      })
      .catch(error => {
        console.error('Error fetching levels:', error);
      });
  }, []);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (searchKeyword) queryParams.append("title_keywords", searchKeyword);
    if (selectedCategory) queryParams.append("course_category_id", selectedCategory.value);
    if (selectedLevel) queryParams.append("course_level_id", selectedLevel.value);

    navigate(`/course-list?${queryParams.toString()}`); // Use navigate for routing
  };
  useEffect(() => {
    // Load the Collect.chat script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w, d) { 
        w.CollectId = "659ff1c019aee0dd6428a0c5"; 
        var h = d.head || d.getElementsByTagName("head")[0]; 
        var s = d.createElement("script"); 
        s.setAttribute("type", "text/javascript"); 
        s.async=true; 
        s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
        h.appendChild(s); 
      })(window, document);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleAllCourses = () => {
    navigate('/course-list');
  };

  const handleAIAssist = () => {
    // Open the Collect.chat chatbot
    if (window.CollectChatLauncher) {
      window.CollectChatLauncher.open();
    } else {
      console.error("Collect.chat launcher not found");
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <Header />
        {/* banner */}
        <section
          className="home-slide d-flex align-items-center"
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
                <div className="home-slide-face aos" data-aos="fade-up">
                  {console.log(currentTextIndex)}
               {/* <div className="home-slide-text text-center">
  <h5 className="d-none d-md-block">Empowering Futures: Anytime, Anywhere</h5>
  <h2>
    Take the next step towards your{" "}
    <span className="animated-text">
      {animatedText[currentTextIndex]}
    </span>{" "}
    at Ultra Aura with technology-enabled learning.
  </h2>
  <p className="d-none d-md-block">Own your future by learning new skills online</p>
</div> */}
 <div className="home-slide-text text-center">
  
  {/* <h2 className="mb-2 " style={{fontWeight:"700"}}> Empowering Futures: Anytime, Anywhere</h2> */}
  <h2 className="mb-2" style={{ fontWeight: "700" }}>
  Empowering Futures: 
  <span>
    <TypeAnimation
      sequence={[
        "Anytime",        // Types "Anytime"
        1500,             // Pause for 1.5 seconds after typing "Anytime"
        "",               // Clears the text
        500,              // Short pause before typing the next word
        "Anywhere",       // Types "Anywhere"
        1500,             // Pause for 1.5 seconds after typing "Anywhere"
        "",               // Clears the text
        500,              // Short pause before repeating
      ]}
      // wrapper="span"
      speed={-15}          // Slower typing speed (adjust this value for slower typing)
      deletionSpeed={0}   // Slower deletion speed
      repeat={Infinity}    // Repeat the animation indefinitely
    />
  </span>
</h2>
   {/* <h2>Take the next step towards your {" "}
                 <TypeAnimation
                   sequence={[
                     
                     " at Ultra Aura with technology-enabled learning.",
                     1000,
                     " Own your future by learning new skills online",
                     1000,
                    
                   ]}
                   wrapper="span"
                   speed={50}
                   repeat={Infinity}
                 />
               </h2> */}
  
 </div>

                  {/* <div className="container my-4">
                    <div className="banner-content">
                      <form className="form" action="/course-list">
                        <div className="form-inner">
                          <div className="input-group homeSearch">
                            <i className="fa-solid fa-magnifying-glass search-icon" />
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search Course"
                              value={searchKeyword}
                              onChange={(e) => setSearchKeyword(e.target.value)}
                            />
                            <span className="input-group-append mx-2">
                              <Select
                                options={categoryOptions}
                                value={selectedCategory}
                                placeholder="Category"
                                onChange={setSelectedCategory}
                                styles={style}
                              />
                            </span>
                            <span className="input-group-append mx-2">
                              <Select
                                options={levelOptions}
                                value={selectedLevel}
                                placeholder="Levels"
                                onChange={setSelectedLevel}
                                styles={style}
                              />
                            </span>
                            <button className="btn btn-primary rounded" type="button" onClick={handleSearch}>
                              <i className="fas fa-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> */}
 <Container>
    <BannerContent>
      <FormContainer action="/course-list">
        <FormInner>
          <InputGroup>
            <SearchIcon className="fa-solid fa-magnifying-glass" />
            <InputField
              type="text"
              placeholder="Search Course"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <SelectWrapper>
              <Select
                options={categoryOptions}
                value={selectedCategory}
                placeholder="Category"
                onChange={setSelectedCategory}
                styles={{ container: (base) => ({ ...base, width: '100%',zIndex: 9999,
                }) }}
              />
            </SelectWrapper>
            <SelectWrapper>
              <Select
                options={levelOptions}
                value={selectedLevel}
                placeholder="Levels"
                onChange={setSelectedLevel}
                styles={{ container: (base) => ({ ...base, width: '100%' }) }}
              />
            </SelectWrapper>
            <SearchButton type="button" onClick={handleSearch}>
              <i className="fas fa-arrow-right" />
            </SearchButton>
          </InputGroup>
        </FormInner>
      </FormContainer>
    </BannerContent>
  </Container>
  <ButtonContainer>
                    <StyledButton onClick={handleAllCourses}>All Courses</StyledButton>
                    <StyledButton primary onClick={handleAIAssist}>AI Assist</StyledButton>
                  </ButtonContainer>
                  {/* <div className="trust-user">
                    <p>
                      Trusted by Users <br />
                      Now Live worldwide
                    </p>
                    <div className="trust-rating d-flex align-items-center">
                      <div className="rate-head">
                        <h2>
                          <span className="d-flex">
                            <CountUp
                              start={0}
                              end={1000}
                              delay={1}
                              format={formatValue}
                            />
                            +
                          </span>
                        </h2>
                      </div>
                      <div className="rating d-flex align-items-center">
                        <h2 className="d-inline-block average-rating">4.4</h2>
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                        <i className="fas fa-star filled me-1" />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <div className="girl-slide-img aos" data-aos="fade-up">
                  <img src={bannerimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /banner */}

        {/* Home banner bottom */}
        <section className="section student-course">
          <div className="container">
            <div className="course-widget">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius align-items-center aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={PencilIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            {/* <span>10</span>K */}
                            <span className="d-flex">
                              {/* <CountUp
                                start={0}
                                end={10}
                                delay={1}
                                duration={4}
                              /> */}
                              100+
                            </span>
                          </h4>
                          <p>Online Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={CourseIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              {/* <CountUp start={0} end={200} delay={1} />+ */}
                              50+
                            </span>
                          </h4>
                          <p>Expert Tutors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={CertificateIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              {/* <CountUp
                                start={0}
                                end={6}
                                delay={1}
                                duration={5}
                              />
                              K+ */}
                              100+
                            </span>
                          </h4>
                          <p>Ceritified Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={GratuateIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              {/* <CountUp
                                start={0}
                                end={60}
                                delay={1}
                                duration={2}
                              />
                              K + */}
                              100+
                            </span>
                          </h4>
                          <p>Online Students</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Home banner bottom */}

        {/* Top Category with Owl Carousel */}
        {/* <TopCategory /> */}
        {/* Top Category with Owl Carousel */}

        {/* What's new Featured Course */}
        {/* <section className="section new-course">
         
        </section> */}
        <FeaturedCourses />
        {/* What's new Featured Course */}

        {/* Master Skills */}
        <section className="section master-skill">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="section-header aos" data-aos="fade-up">
                  <div className="section-sub-head">
                    <span>What’s New</span>
                    <h2>Master the skills to drive your career</h2>
                  </div>
                </div>
                <div className="section-text aos" data-aos="fade-up">
                  <p>
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    of eLearning learners report our hands-on content directly
                    helped their careers.
                  </p>
                </div>
                <div className="career-group aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon01} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Stay motivated with engaging instructors</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon02} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Keep up with in the latest in cloud</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon03} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Get certified with 100+ certification courses</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon04} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Build skills your way, from labs to courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 d-flex align-items-end">
                <div className="career-img aos" data-aos="fade-up">
                  <img src={Join} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Master Skills */}

        {/* Trending Course */}
        {/* <TrendingCourse /> */}
        {/* Trending Course */}

       

        {/* Share knowledge */}
        <section
          className="section share-knowledge"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Share} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>Want to share your knowledge? Join us a Trainer</h2>
                  <p>
                    Share your expertise and inspire the next generation
                    by joining UltraAura as an instructor. Shape the future
                    of education with flexible teaching opportunities and a global reach.

                  </p>
                  <ul className="course-list">
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Quick Onboarding
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      100% Online platform

                    </li>
                  </ul>
                  <div className="all-btn all-category d-flex align-items-center">
                    <Link to="/login" className="btn btn-primary">
                      Join as Trainer Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section py-5" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="student-mentor cube-instuctor ">
                  <h4>Partner with US</h4>
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      <div className="top-instructors">
                        <p>
                          Collaborate with UltraAura to expand educational opportunities
                          and make a lasting impact. Partner with us to drive innovation
                          and empower learners worldwide.
                        </p>
                        <div className="all-btn all-category d-flex align-items-center">
                          <Link to="/partner-signin" className="btn btn-primary">
                            Partner with US
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                      <div className="mentor-img">
                        <img className="img-fluid" alt="" src={Become2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="student-mentor yellow-mentor">
                  <h4>Transform Access To Education</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <div className="top-instructors">
                        <p>
                          Create an account to receive our newsletter, course
                          recommendations and promotions.
                        </p>
                        <div className="all-btn all-category d-flex align-items-center">
                          <Link to="/register" className="btn btn-primary">
                            Sign up
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="mentor-img">
                        <img className="img-fluid" alt="" src={Become1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Become a instructor */}
 {/* Companies */}
 <section className="section lead-companies">
          <div className="container">
            <div className="section-header aos" data-aos="fade-up">
              <div className="section-sub-head feature-head text-center">
                <span>Trusted By</span>
                <h2>We Work with Some of the Best - Globally</h2>
              </div>
            </div>
            <div className="lead-group aos" data-aos="fade-up">
              <Companies />
            </div>
          </div>
        </section>
        {/* Companies */}

        {/* Footer */}
        <Footer />
        {/* /Footer */}
      </div>
    </>
  );
};

export default Home;