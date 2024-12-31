
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import PageHeader from '../header';
// import Footer from '../footer';
// import ReactPlayer from 'react-player'
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Quill editor styles

// const Container = styled.div`
//   padding: 20px;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const Banner = styled.div`
//   background-color: #f4f4f4;
//   // padding: 40px 0;
//   text-align: center;
//   margin-bottom: 20px;

//   h1 {
//     font-size: 2.5rem;
//     color: #333;
//   }
// `;

// // const Section = styled.section`
// //   margin-bottom: 40px;

// //   h2 {
// //     font-size: 1.8rem;
// //     margin-bottom: 20px;
// //     color: #333;
// //   }

// //   p {
// //     font-size: 1rem;
// //     line-height: 1.6;
// //     color: #555;
// //   }

// //   ul {
// //     list-style-type: disc;
// //     margin-left: 20px;
// //   }

// //   li {
// //     text-decoration:disc;
// //     margin-bottom: 10px;
// //   }
// // `;
// const Section = styled.section`
//   margin-bottom: 40px;

//   h2 {
//     font-size: 1.8rem;
//     margin-bottom: 20px;
//     color: #333;
//   }

//   p {
//     font-size: 1rem;
//     line-height: 1.6;
//     color: #555;
//   }

//   ul {
//     list-style-type: disc; /* Ensures bullets are shown */
//     padding-left: 20px; /* Adds some padding to align the list properly */
//     margin: 10px 0;
//   }

//   li {
//     font-size: 1rem;
//     line-height: 1.6;
//     color: #555;
//     list-style-type: disc;
//     margin-bottom: 8px; /* Adds some space between list items */
//   }
// `;










// const AboutUs = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   //   const videoRef = useRef(null);
//   //   const handlePlay = () => {
//   //     if (videoRef.current) {
//   //         videoRef.current.play();
//   //     }
//   // };



//   //AdminEditing:-

//   const [isEditing, setIsEditing] = useState(false);
//   const [isEditing2, setIsEditing2] = useState(false);
//   const [isEditing3, setIsEditing3] = useState(false);
//   const [isEditing4, setIsEditing4] = useState(false);
//   const [isEditing5, setIsEditing5] = useState(false);
//   const [isEditing6, setIsEditing6] = useState(false);
//   const [isEditing7, setIsEditing7] = useState(false);
//   const [isEditing8, setIsEditing8] = useState(false);
//   const [heading, setHeading] = useState("Welcome to UltraAura 🎓");
//   const [paragraph1Content, setParagraph1Content] = useState(`
//   <p>
//     <strong>Welcome to UltraAura, </strong>
//     your go-to platform for high-quality, comprehensive education across a variety of trades and professional skills. As a proud product of Hyper V Solutions—an AI-driven business incubator at the University of South Carolina—we are dedicated to providing accessible, cutting-edge online learning experiences for students at every stage of their careers.
//   </p>

// `);
//   const [videoUrl, setVideoUrl] = useState(
//     "https://youtu.be/FObrI1s9qIk?si=RKSVtL4H071Qu8vj"
//   );

//   const [paragraph2HeadingContent, setParagraph2HeadingContent] = useState(`
 
//   We cater to: 
    
// `);

//   const [paragraph2Content1, setParagraph2Content1] = useState(
//     " Graduates 🎓"
//   )
//   const [paragraph2Content2, setParagraph2Content2] = useState(
//     " Undergraduates 📚"
//   )
//   const [paragraph2Content3, setParagraph2Content3] = useState(
//     " Working professionals 💼"
//   )
//   const [paragraph2Content4, setParagraph2Content4] = useState(
//     " Individuals in the Department of Corrections, workforce development programs, and at-risk youth 🚀"
//   )
//   const [paragraph2Content5, setParagraph2Content5] = useState(
//     " With courses spanning IT, plumbing, electrical work, construction licensing, home care, tax services, and more, we are committed to empowering individuals with the skills and certifications they need to succeed."
//   )
//   const [paragraph2Content6, setParagraph2Content6] = useState(
//     " Additionally, we provide interview preparation and job placement opportunities through NovaJobs to further support our students’ career advancement."
//   )
//   const [paragraph3Heading, setParagraph3Heading] = useState(
//     "Our Mission 🌟"
//   )
//   const [paragraph3Content, setParagraph3Content] = useState(
//     " At UltraAura, our mission is to bridge the skills gap across various trades and industries by offering flexible, affordable, and accredited learning options. We strive to create a new standard of excellence in vocational and professional education, enabling students from diverse backgrounds to gain practical knowledge and earn industry-recognized certifications."
//   )
//   const [paragraph5Heading, setParagraph5Heading] = useState(
//     "Global Reach 🌍"
//   )
//   const [paragraph5Content, setParagraph5Content] = useState(
//     " Although based in South Carolina, UltraAura serves a global audience, knowing that learning knows no boundaries. Our courses are accessible online 24/7, allowing learners from different time zones and regions to study at their own pace, free from geographical limitations."
//   )
//   const [paragraph6Heading, setParagraph6Heading] = useState(
//     "Our Partnerships 🤝"
//   )
//   const [paragraph6Content, setParagraph6Content] = useState(
//     " UltraAura collaborates with top trainers and industry professionals to deliver an exceptional educational experience. Our trainers bring practical expertise and a deep understanding of industry demands, ensuring that our students receive the most up-to-date training available. We also work closely with certification bodies and other organizations to ensure that our programs meet and exceed industry standards."
//   )
//   const [paragraph8Heading, setParagraph8Heading] = useState(
//     "Contact Us ✉️"
//   )
//   const [paragraph8Content1, setParagraph8Content1] = useState(
//     `
//     <p>
//    <strong>For more information about our courses, partnerships, or any inquiries, please contact us at:
//             </strong>
//           </p>
//           <p>
//             <strong>📧 <a href="mailto:info@ultraaura.education">info@ultraaura.education</a></strong>
//           </p>
//           <p>
//             We look forward to being a part of your educational journey and helping you achieve your career goals.</p>
//         `
//   )

//   const [paragraph7Heading, setParagraph7Heading] = useState(
//     "Why Choose UltraAura? 🤔"
//   )
//   const [paragraph7Content1, setParagraph7Content1] = useState(
//     `
//     <ul>
//       <li><strong>Diverse Course Offerings:</strong> Courses designed for graduates, undergraduates, professionals, and unique individuals, including at-risk youth and those in corrections and workforce development.</li>
//       <li><strong>Flexibility:</strong> Learn anytime, anywhere with our on-demand courses.</li>
//       <li><strong>Expert Trainers:</strong> Gain insights from seasoned professionals in each field.</li>
//       <li><strong>Skill-Based Learning:</strong> Focus on practical skills that matter in real-world jobs.</li>
//       <li><strong>Certifications & Career Support:</strong> Earn credentials that help you stand out in a competitive job market, with interview preparation and job placement through NovaJobs.</li>
//       <li><strong>Global Access:</strong> Accessible from anywhere, with content designed for a diverse, international audience.</li>
//     </ul>
//     `
//   );  
//   const [paragraph4Heading, setParagraph4Heading] = useState(
//     "What We Offer 📚💼"
//   )
//   const [paragraph4Content1, setParagraph4Content1] = useState(
    
//      `
//   <p>UltraAura provides a comprehensive learning experience tailored to the needs of a wide range of students:</p>
  
//   <ul>
//     <li><strong>Online Courses 💻:</strong> We offer specialized online courses covering essential skills in:</li>
//     <ul>
//       <li>IT</li>
//       <li>Non-IT</li>
//       <li>Construction</li>
//       <li>Home care</li>
//       <li>And more</li>
//     </ul>
//     <li>
//       Courses are available at beginner, intermediate, and advanced levels, ensuring that students from all backgrounds can find relevant content. Developed by industry experts, our courses are engaging, flexible, and aligned with current industry practices.
//     </li>
//     <li><strong>Skill Tests 🧠:</strong> We provide skill-based assessments to help students gauge their proficiency and readiness for certification. These tests ensure learners are job-ready and possess the competencies required for success in their chosen fields.</li>
//     <li><strong>Certifications 🏆:</strong> Upon completing courses and assessments, students can earn industry-recognized certifications that boost their employability and career advancement opportunities.</li>
//   </ul>
//     `
//   );  


//   //Save Button:-
//   const handleSave = () => {
//     setIsEditing(false);
//     // Save changes to a backend server here if needed
//     console.log(
//       "Saved content:",
//       heading,
//       paragraph1Content,
//       "Video URL:",
//       videoUrl,
//     );
//   };


//   return (
//     <>
//       <PageHeader />
//       <Banner>
//         <div className="page-banner">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-12">
//                 <h1 className="mb-0 text-white">About Us</h1>
//                 {/* <button onClick={()=>setIsEditing(true)}>Edit</button> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Banner>
//       <Container>
//         <Section>

//           {isEditing ? (<><h2>Editable AboutUs</h2>
//             <label>
//               Heading:
//               <input
//                 type="text"
//                 value={heading}
//                 onChange={(e) =>
//                   setHeading(e.target.value)
//                 }
//                 className="form-control"
//               />
//             </label>
//             <ReactQuill
//               value={paragraph1Content}
//               onChange={setParagraph1Content}
//             />
//             <label className="mt-3">
//               Video URL:
//               <input
//                 type="text"
//                 value={videoUrl}
//                 onChange={(e) =>
//                   setVideoUrl(e.target.value)
//                 }
//                 className="form-control"
//               />
//             </label>

//             <button
//               style={{
//                 backgroundColor: '#4aa832'
//                 , color: 'white',
//                 margin: '2px',
//                 padding: '5px',
//                 borderRadius: '10px',
//                 width: '80px',
//               }}
//               onClick={() => handleSave()}>Save</button></>
//           )
//             :
//             (<> <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
//               <h2>{heading}</h2>
//               <button
//                 style={{
//                   backgroundColor: '#ed8936',
//                   color: 'white',
//                   margin: '2px',
//                   padding: '5px',
//                   position: 'relative',
//                   left: '50px',
//                   width: '80px',
//                   borderRadius: '10px'

//                 }}

//                 onClick={() => setIsEditing(true)}
//               >Edit</button>

//             </div>
//               <p>
//                 {/* Welcome to UltraAura, your go-to platform for high-quality, comprehensive education across a variety of trades and professional skills. As a proud product of Hyper V Solutions—an AI-driven business incubator at the University of South Carolina—we are dedicated to providing accessible, cutting-edge online learning experiences for students at every stage of their careers. */}
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph1Content,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>
//               {/* </>):(<><h2>Welcome to UltraAura 🎓</h2></>)} */}
//               <div style={{ display: 'flex', justifyContent: 'center' }}>

//                 <h2 style={{ marginTop: "20px" }}>Check our quick Product Video below:
//                 </h2>
//               </div>
//               <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 {/* <video ref={videoRef} 
//           src="https://api.novajobs.us/etc/nova_us_jobs/about_ultra_aura.mp4" 
//           controls 
//           onClick={handlePlay}
//           style={{
//             margin: '50px',
//             width: '700px',
//             height: '500px',
//             border: '2px solid #ccc',
//             borderRadius: '10px',
//             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
           
//         }}
//           ></video> */}
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>

//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                   {/* Using ReactPlayer for a better video player experience */}
//                   <ReactPlayer
//                     // url="https://youtu.be/FObrI1s9qIk?si=RKSVtL4H071Qu8vj"
//                     url={videoUrl}
//                     // Replace with your YouTube video URL
//                     width="700px"
//                     height="500px"
//                     controls={true} // Show player controls
//                     style={{
//                       margin: '50px',
//                       border: '2px solid #ccc',
//                       borderRadius: '10px',
//                       boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//                     }}
//                   />
//                 </div>

//                 {/* <button >Play Unmuted</button> */}
//                 {/* <video ref={videoRef} src={IntroVideo} controls></video>
//           <button onClick={handlePlay}>Play Unmuted</button> */}
//               </div></>)}


//           {/* <p>
//             <b>

//               We cater to:
//             </b>
//           </p> */}
//           {isEditing2 ? (<>
//             {/* <label>
//                                     Heading:
//                                     <input
//                                       type="text"
//                                       value={paragraph2HeadingContent}
//                                       onChange={(e) =>
//                                         setParagraph2HeadingContent(e.target.value)
//                                       }
//                                       className="form-control"
//                                     />
//                                   </label> */}
//             <ReactQuill
//               value={paragraph2HeadingContent}
//               onChange={setParagraph2HeadingContent}
//             />
//             <ReactQuill
//               value={paragraph2Content1}
//               onChange={setParagraph2Content1}
//             />
//             <ReactQuill
//               value={paragraph2Content2}
//               onChange={setParagraph2Content2}
//             />
//             <ReactQuill
//               value={paragraph2Content3}
//               onChange={setParagraph2Content3}
//             />
//             <ReactQuill
//               value={paragraph2Content4}
//               onChange={setParagraph2Content4}
//             />
//             <ReactQuill
//               value={paragraph2Content5}
//               onChange={setParagraph2Content5}
//             />
//             <ReactQuill
//               value={paragraph2Content6}
//               onChange={setParagraph2Content6}
//             />
//             <button
//               style={{
//                 backgroundColor: '#4aa832'
//                 , color: 'white',
//                 margin: '2px',
//                 padding: '5px',
//                 borderRadius: '10px',
//                 width: '80px'
//               }}
//               onClick={() => setIsEditing2(false)}>Save</button>
//           </>)
//             :
//             (<>
//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph2HeadingContent,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>

//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph2Content1,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>
//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph2Content2,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p> <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph2Content3,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p> <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph2Content4,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>
//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph2Content5,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>
//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph2Content6,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>

//               <button
//                 style={{
//                   backgroundColor: '#ed8936',
//                   color: 'white',
//                   margin: '2px',
//                   padding: '10px',
//                   position: 'relative',
//                   right: '-1150px',
//                   width: '80px',
//                   borderRadius: '10px'

//                 }}

//                 onClick={() => setIsEditing2(true)}
//               >Edit</button>
//             </>)}

//           {/* <ul>
//             <li>Graduates 🎓</li>
//             <li>Undergraduates 📚</li>
//             <li>Working professionals 💼</li>
//             <li>Individuals in the Department of Corrections, workforce development programs, and at-risk youth 🚀
//             </li>
//           </ul> */}
//           {/* <p>
//             With courses spanning IT, plumbing, electrical work, construction licensing, home care, tax services, and more, we are committed to empowering individuals with the skills and certifications they need to succeed.
//           </p>
//           <p>
//             Additionally, we provide interview preparation and job placement opportunities through NovaJobs to further support our students’ career advancement.

//           </p> */}
//         </Section>

//         <Section>
//           {/* <h2>Our Mission 🌟</h2> */}

//           {isEditing3 ? (<>

//             <label>
//               Heading:
//               <input
//                 type="text"
//                 value={paragraph3Heading}
//                 onChange={(e) =>
//                   setParagraph3Heading(e.target.value)
//                 }
//                 className="form-control"
//               />
//             </label>
//             <ReactQuill
//               value={paragraph3Content}
//               onChange={setParagraph3Content}
//             />
//             <button
//               style={{
//                 backgroundColor: '#4aa832'
//                 , color: 'white',
//                 margin: '2px',
//                 padding: '5px',
//                 borderRadius: '10px',
//                 width: '80px'
//               }}
//               onClick={() => setIsEditing3(false)}>Save</button>

//           </>) : (<>
//             <h2>

//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: paragraph3Heading,
//                 }}
//                 style={{
//                   //  fontSize: "clamp(14px, 3vw, 15px)",
//                   fontSize: '1.8rem'
//                 }}
//               ></div>
//             </h2>
//             <p>

//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: paragraph3Content,
//                 }}
//                 style={{
//                   fontSize: "clamp(14px, 3vw, 15px)",
//                 }}
//               ></div>
//             </p>

//             {/* <p>
//             At UltraAura, our mission is to bridge the skills gap across various trades and industries by offering flexible, affordable, and accredited learning options. We strive to create a new standard of excellence in vocational and professional education, enabling students from diverse backgrounds to gain practical knowledge and earn industry-recognized certifications.

//           </p> */}

//             <button
//               style={{
//                 backgroundColor: '#ed8936',
//                 color: 'white',
//                 margin: '2px',
//                 padding: '10px',
//                 position: 'relative',
//                 left: '1150px',
//                 width: '80px',
//                 borderRadius: '10px',


//               }}

//               onClick={() => setIsEditing3(true)}
//             >Edit</button>
//           </>)}
//         </Section>

//         <Section>
//           {/* <h2>What We Offer 📚💼</h2>
//           <p>
//             UltraAura provides a comprehensive learning experience tailored to the needs of a wide range of students:
//           </p>
//           <ul>
//             <li>
//               <strong>Online Courses 💻</strong>: We offer specialized online courses covering essential skills in:
//               <ul>
//                 <li>IT</li>
//                 <li>Non- IT
//                 </li>

//                 <li>Construction</li>
//                 <li>Home care, and more.</li>
//               </ul>
//               Courses are available at beginner, intermediate, and advanced levels, ensuring that students from all backgrounds can find relevant content. Developed by industry experts, our courses are engaging, flexible, and aligned with current industry practices.

//             </li>
//             <li>
//               <strong>Skill Tests 🧠</strong>: We provide skill-based assessments to help students gauge their proficiency and readiness for certification. These tests ensure learners are job-ready and possess the competencies required for success in their chosen fields.

//             </li>
//             <li>
//               <strong>Certifications 🏆</strong>:  Upon completing courses and assessments, students can earn industry-recognized certifications that boost their employability and career advancement opportunities.

//             </li>
//           </ul> */}


// {isEditing4 ? (<>
//             <label>
//               Heading:
//               <input
//                 type="text"
//                 value={paragraph4Heading}
//                 onChange={(e) =>
//                   setParagraph4Heading(e.target.value)
//                 }
//                 className="form-control"
//               />
//             </label>

//             <ReactQuill
//               value={paragraph4Content1}
//               onChange={setParagraph4Content1}
//             />

//             <button
//               style={{
//                 backgroundColor: '#4aa832'
//                 , color: 'white',
//                 margin: '2px',
//                 padding: '5px',
//                 borderRadius: '10px',
//                 width: '80px'
//               }}
//               onClick={() => setIsEditing4(false)}>Save</button>

//           </>)
//             :
//             (<>

//               <h2>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph4Heading,
//                   }}
//                   style={{
//                     //  fontSize: "clamp(14px, 3vw, 15px)",
//                     fontSize: '1.8rem'
//                   }}
//                 ></div>
//               </h2>

//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph4Content1,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>
//               <button
//                 style={{
//                   backgroundColor: '#ed8936',
//                   color: 'white',
//                   margin: '2px',
//                   padding: '10px',
//                   position: 'relative',
//                   left: '1150px',
//                   width: '80px',
//                   borderRadius: '10px',


//                 }}

//                 onClick={() => setIsEditing4(true)}
//               >Edit</button>
//             </>)}
//         </Section>

//         <Section>

//           {
//             isEditing5 ? (<>
//               <label>
//                 Heading:
//                 <input
//                   type="text"
//                   value={paragraph5Heading}
//                   onChange={(e) =>
//                     setParagraph5Heading(e.target.value)
//                   }
//                   className="form-control"
//                 />
//               </label>

//               <ReactQuill
//                 value={paragraph4Content}
//                 onChange={setParagraph4Content}
//               />

//               <button
//                 style={{
//                   backgroundColor: '#4aa832'
//                   , color: 'white',
//                   margin: '2px',
//                   padding: '5px',
//                   borderRadius: '10px',
//                   width: '80px'
//                 }}
//                 onClick={() => setIsEditing4(false)}>Save</button>

//             </>)
//               :
//               (<>

//                 <h2>

//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: paragraph4Heading,
//                     }}
//                     style={{
//                       //  fontSize: "clamp(14px, 3vw, 15px)",
//                       fontSize: '1.8rem'
//                     }}
//                   ></div>
//                 </h2>
//                 <p>

//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: paragraph5Content,
//                     }}
//                     style={{
//                       fontSize: "clamp(14px, 3vw, 15px)",
//                     }}
//                   ></div>
//                 </p>

//                 <button
//                   style={{
//                     backgroundColor: '#ed8936',
//                     color: 'white',
//                     margin: '2px',
//                     padding: '10px',
//                     position: 'relative',
//                     left: '1150px',
//                     width: '80px',
//                     borderRadius: '10px',


//                   }}

//                   onClick={() => setIsEditing5(true)}
//                 >Edit</button>

//               </>)

//           }

//           {/* <h2>Global Reach 🌍</h2> */}


//           {/* <p>
//             Although based in South Carolina, UltraAura serves a global audience, knowing that learning knows no boundaries. Our courses are accessible online 24/7, allowing learners from different time zones and regions to study at their own pace, free from geographical limitations.

//           </p> */}
//         </Section>

//         <Section>
//           {isEditing6 ? (<>
//             <label>
//               Heading:
//               <input
//                 type="text"
//                 value={paragraph6Heading}
//                 onChange={(e) =>
//                   setParagraph6Heading(e.target.value)
//                 }
//                 className="form-control"
//               />
//             </label>

//             <ReactQuill
//               value={paragraph6Content}
//               onChange={setParagraph6Content}
//             />

//             <button
//               style={{
//                 backgroundColor: '#4aa832'
//                 , color: 'white',
//                 margin: '2px',
//                 padding: '5px',
//                 borderRadius: '10px',
//                 width: '80px'
//               }}
//               onClick={() => setIsEditing6(false)}>Save</button>

//           </>)
//             :
//             (<>

//               <h2>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph6Heading,
//                   }}
//                   style={{
//                     //  fontSize: "clamp(14px, 3vw, 15px)",
//                     fontSize: '1.8rem'
//                   }}
//                 ></div>
//               </h2>

//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph6Content,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>
//               <button
//                 style={{
//                   backgroundColor: '#ed8936',
//                   color: 'white',
//                   margin: '2px',
//                   padding: '10px',
//                   position: 'relative',
//                   left: '1150px',
//                   width: '80px',
//                   borderRadius: '10px',


//                 }}

//                 onClick={() => setIsEditing6(true)}
//               >Edit</button>
//             </>)}

//           {/* <h2>Our Partnerships 🤝</h2>
//           <p>
//             UltraAura collaborates with top trainers and industry professionals to deliver an exceptional educational experience. Our trainers bring practical expertise and a deep understanding of industry demands, ensuring that our students receive the most up-to-date training available. We also work closely with certification bodies and other organizations to ensure that our programs meet and exceed industry standards.
//           </p> */}
//         </Section>

//         <Section>
//           {/* <h2><b>Why Choose UltraAura? 🤔</b></h2>
//           <ul>
//             <li><b>Diverse Course Offerings:</b> Courses designed for graduates, undergraduates, professionals, and unique individuals, including at-risk youth and those in corrections and workforce development.</li>
//             <li><b>Flexibility:</b> Learn anytime, anywhere with our on-demand courses.</li>
//             <li><b>Expert Trainers:</b> Gain insights from seasoned professionals in each field.</li>
//             <li><b>Skill-Based Learning:</b> Focus on practical skills that matter in real-world jobs.</li>
//             <li><b>Certifications & Career Support:</b> Earn credentials that help you stand out in a competitive job market, with interview preparation and job placement through NovaJobs.</li>
//             <li><b>Global Access:</b> Accessible from anywhere, with content designed for a diverse, international audience.</li>
//           </ul> */}

// {isEditing7 ? (<>
//             <label>
//               Heading:
//               <input
//                 type="text"
//                 value={paragraph7Heading}
//                 onChange={(e) =>
//                   setParagraph7Heading(e.target.value)
//                 }
//                 className="form-control"
//               />
//             </label>

//             <ReactQuill
//               value={paragraph7Content1}
//               onChange={setParagraph7Content1}
//             />

//             <button
//               style={{
//                 backgroundColor: '#4aa832'
//                 , color: 'white',
//                 margin: '2px',
//                 padding: '5px',
//                 borderRadius: '10px',
//                 width: '80px'
//               }}
//               onClick={() => setIsEditing7(false)}>Save</button>

//           </>)
//             :
//             (<>

//               <h2>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph7Heading,
//                   }}
//                   style={{
//                     //  fontSize: "clamp(14px, 3vw, 15px)",
//                     fontSize: '1.8rem'
//                   }}
//                 ></div>
//               </h2>

//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph7Content1,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>
//               <button
//                 style={{
//                   backgroundColor: '#ed8936',
//                   color: 'white',
//                   margin: '2px',
//                   padding: '10px',
//                   position: 'relative',
//                   left: '1150px',
//                   width: '80px',
//                   borderRadius: '10px',


//                 }}

//                 onClick={() => setIsEditing7(true)}
//               >Edit</button>
//             </>)}

//         </Section>

//         <Section>
//           {/* <h2><b>Contact Us ✉️</b></h2>
//           <p>
//             <b>
//               For more information about our courses, partnerships, or any inquiries, please contact us at:
//             </b>
//           </p>
//           <p>
//             <b>📧 <a href="mailto:info@ultraaura.education">info@ultraaura.education</a></b>
//           </p>
//           <p>
//             We look forward to being a part of your educational journey and helping you achieve your career goals.
//           </p> */}

// {isEditing8 ? (<>
//             <label>
//               Heading:
//               <input
//                 type="text"
//                 value={paragraph8Heading}
//                 onChange={(e) =>
//                   setParagraph8Heading(e.target.value)
//                 }
//                 className="form-control"
//               />
//             </label>

//             <ReactQuill
//               value={paragraph8Content1}
//               onChange={setParagraph8Content1}
//             />

//             <button
//               style={{
//                 backgroundColor: '#4aa832'
//                 , color: 'white',
//                 margin: '2px',
//                 padding: '5px',
//                 borderRadius: '10px',
//                 width: '80px'
//               }}
//               onClick={() => setIsEditing8(false)}>Save</button>

//           </>)
//             :
//             (<>

//               <h2>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph8Heading,
//                   }}
//                   style={{
//                     //  fontSize: "clamp(14px, 3vw, 15px)",
//                     fontSize: '1.8rem'
//                   }}
//                 ></div>
//               </h2>

//               <p>

//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph8Content1,
//                   }}
//                   style={{
//                     fontSize: "clamp(14px, 3vw, 15px)",
//                   }}
//                 ></div>
//               </p>
//               <button
//                 style={{
//                   backgroundColor: '#ed8936',
//                   color: 'white',
//                   margin: '2px',
//                   padding: '10px',
//                   position: 'relative',
//                   left: '1150px',
//                   width: '80px',
//                   borderRadius: '10px',


//                 }}

//                 onClick={() => setIsEditing8(true)}
//               >Edit</button>
//             </>)}
//         </Section>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default AboutUs;


import React from 'react'

function AdminAboutUs() {
  return (
    <div>AdminAboutUs</div>
  )
}

export default AdminAboutUs