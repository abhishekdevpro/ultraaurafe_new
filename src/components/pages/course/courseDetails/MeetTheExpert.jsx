// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import logo from '../../../../assets/Ultra_Aura.png'
// const MeetTheExpert = () => {
//   return (
//     <div className="container my-4">
//       <h2 className="mb-3" style={{ color: "#4a4a4a" }}>
//         Meet the Expert
//       </h2>

//       <div
//         className="card"
//         style={{ backgroundColor: "#f5f5f5", border: "none" }}
//       >
//         <div className="card-body p-4">
//           <div className="row">
//             <div className="col-md-2 col-sm-3 mb-3">
//               <div
//                 className="d-flex justify-content-center align-items-center"
//                 style={{
//                   backgroundColor: "#9EB77E",
//                   width: "100px",
//                   height: "100px",
//                   borderRadius: "4px",
//                 }}
//               >
//                 {/* <h3 className="text-white m-0">
//                   <span style={{ fontSize: "22px", fontWeight: "bold" }}>
//                     wiki
//                   </span>
//                   <br />
//                   <span style={{ fontSize: "28px", fontWeight: "bold" }}>
//                     How
//                   </span>
//                 </h3> */}
//               </div>
//             </div>

//             <div className="col-md-10 col-sm-9">
//               {/* <img src={logo} alt="" /> */}
//               <p className="text-muted mb-3">
//                 The most trusted how-to site on the internet.
//               </p>

//               <p style={{ color: "#4a4a4a" }}>
//                 About Our Editorial Team: At UltraAura, our courses are
//                 meticulously reviewed by industry experts to ensure the highest
//                 quality. We prioritize clarity, skill enhancement, and an
//                 easy-to-understand learning experience, providing learners with
//                 valuable, industry-relevant knowledge.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeetTheExpert;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import logo from '../../../../assets/Ultra_Aura.png'

// const MeetTheExpert = () => {
//   // Default data if no props are passed
//   const expert =  {
//     id: "1",
//     name: "UltraAura",
//     title: "The most trusted how-to site on the internet.",
//     bio: "At UltraAura, our courses are meticulously reviewed by industry experts to ensure the highest quality. We prioritize clarity, skill enhancement, and an easy-to-understand learning experience, providing learners with valuable, industry-relevant knowledge.",
//     logo: logo // Replace with your actual logo path
//   };

//   return (
//     <div className="card instructor-sec mt-4">
//       <div className="card-body">
//         {/* <h5 className="subs-title" style={{ color: '#1E3A8A', marginBottom: '20px' }}>Reviewed and Verified by our Experts</h5> */}
//         <div className="verified-header" style={{ marginBottom: '25px', position: 'relative' }}>
//           <div className="verification-badge" style={{
//             // backgroundColor: '#4CAF50',
//             color: '#4CAF50',
//             // padding: '5px 15px',
//             borderRadius: '4px',
//             display: 'inline-block',
//             marginRight: '10px',
//             boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//             animation: 'pulse 2s infinite'
//           }}>
//             <i className="fas fa-check-circle"></i>
//           </div>
//           <h5 className="subs-title d-inline" style={{ color: '#1E3A8A' }}>
//             Reviewed and Verified by our Experts
//           </h5>
//           <style>{`
//             @keyframes pulse {
//               0% { transform: scale(1); }
//               50% { transform: scale(1.05); }
//               100% { transform: scale(1); }
//             }
//           `}</style>
//         </div>
//         <div className="instructor-wrap">
//           <div className="about-instructor">
//             <div className="abt-instructor-img">
//               <div>
//                 <img 
//                   src={expert.logo} 
//                   alt={expert.name} 
//                   className="" 
//                   style={{ 
//                     width: '200px', 
//                     height: '100px', 
//                     objectFit: 'contain',
//                     borderRadius: '4px',
//                     // backgroundColor: '#f5f5f5'
//                   }} 
//                 />
//               </div>
//             </div>
//             <div className="instructor-detail">
//               <h5>
//                 <Link to={`/expert-profile/${expert.id}`} style={{ color: '#1E3A8A', textDecoration: 'none' }}>
//                   {expert.name}
//                 </Link>
//               </h5>
//               <p style={{ color: '#6c757d' }}>{expert.title}</p>
//             </div>
//           </div>
//         </div>
        
//         <p style={{ 
//           color: '#4a4a4a', 
//           marginTop: '20px', 
//           fontSize: '14px', 
//           lineHeight: '1.6' 
//         }}>
//           {expert.bio}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MeetTheExpert;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/Ultra_Aura.png';

const MeetTheExpert = () => {
  // Default data if no props are passed
  const expert = {
    id: "1",
    name: "UltraAura Editorial Team",
    title: "Empowered AI Education.",
    bio: "At UltraAura, our courses are meticulously reviewed by industry experts to ensure the highest quality. We prioritize clarity, skill enhancement, and an easy-to-understand learning experience, providing learners with valuable, industry-relevant knowledge.",
    logo: logo // Replace with your actual logo path
  };

  return (
    <div className="card instructor-sec mt-4 shadow-sm border-0 rounded-lg">
      <div className="card-body p-4">
        <div className="verified-header d-flex align-items-center mb-4">
          <div className="verification-badge me-3">
            <i className="fas fa-check-circle fs-4 text-success"></i>
          </div>
          <h5 className="subs-title m-0 fw-bold" style={{ color: '#1E3A8A' }}>
            Reviewed and Verified by our Experts
          </h5>
          <style>{`
            .verification-badge i {
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
          `}</style>
        </div>
        
        <div className="instructor-wrap bg-light p-3 rounded-3 mb-3">
          <div className="d-flex align-items-center flex-wrap">
            <div className="abt-instructor-img me-4 mb-3 mb-md-0">
              <img
                src={expert.logo}
                alt={expert.name}
                className="shadow-sm"
                style={{
                  width: '180px',
                  height: '90px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  padding: '10px'
                }}
              />
            </div>
            <div className="instructor-detail">
              <h5 className="fw-bold mb-2">
                <Link to={`/expert-profile/${expert.id}`} className="text-decoration-none" style={{ color: '#1E3A8A' }}>
                  {expert.name}
                </Link>
              </h5>
              <p className="text-secondary mb-0 fst-italic">{expert.title}</p>
            </div>
          </div>
        </div>
        
        <div className="expert-bio p-3 border-start border-4 rounded" style={{ borderColor: '#1E3A8A' }}>
            <h4 className='text-bold '>About Our Editorial Team:</h4>
          <p className="mb-0 lh-base" style={{ color: '#4a4a4a', fontSize: '15px' }}>
            {expert.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheExpert;