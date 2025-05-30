// import Companies from "./slider/companies";

// import ultraaura from "../../assests/ultraaura-logo.png";
// import novajobs from "../../assests/novajobs-logo.png";
// import homecare from "../../assests/novahomecare-logo.png";
// import paradigmshift from "../../assests/paradigmshift-logo.png";

// export const TrustedLogo = () => {
//   return (
//     <>
//       <section className="section lead-companies">
//         <div className="container">
//           <div className="section-header aos" data-aos="fade-up">
//             <div className="section-sub-head feature-head text-center">
//               <span>Trusted By</span>
//               <h2>&quot;We work with some of the best brands, Globally</h2>
//             </div>
//           </div>

//           <div className="container">
//             <div className="row justify-content-center align-items-center text-center">
//               <div className="col-6 col-sm-4 col-md-3 mb-4">
//                 <img
//                   src={ultraaura}
//                   alt="Ultraaura"
//                   className="img-fluid"
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//               <div className="col-6 col-sm-4 col-md-3 mb-4">
//                 <img
//                   src={novajobs}
//                   alt="Novajobs"
//                   className="img-fluid"
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//               <div className="col-6 col-sm-4 col-md-3 mb-4">
//                 <img
//                   src={homecare}
//                   alt="Homecare"
//                   className="img-fluid"
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//               <div className="col-6 col-sm-4 col-md-3 mb-4">
//                 <img
//                   src={paradigmshift}
//                   alt="Paradigmshift"
//                   className="img-fluid"
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="lead-group aos" data-aos="fade-up">
//             <Companies />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TrustedLogo;
import React from "react";
import logo1 from "../../assets/logo1.png";
import newlogo2 from "../../assets/new (2).jpg";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";
import logo10 from "../../assets/logo10.png";
import logo11 from "../../assets/image.png";

const companies = [
  { name: "Sony", logo: logo1 },
  { name: "Sony", logo: newlogo2 },
  { name: "Sony", logo: logo2 },
  { name: "Sony", logo: logo3 },
  { name: "Sony", logo: logo4 },
  { name: "Sony", logo: logo5 },
  { name: "Sony", logo: logo6 },
  { name: "Sony", logo: logo7 },
  { name: "Sony", logo: logo8 },
  { name: "Sony", logo: logo9 },
  { name: "Sony", logo: logo10 },
  { name: "Sony", logo: logo11 },
];

export default function TrustedLogo() {
  return (
    <section
      className="section lead-companies "
      //   style={{
      //     background: "linear-gradient(to right, #2563eb, #f472b6, #d946ef)",
      //   }}
    >
      <div className="container">
        {/* <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-black">
            Trusted by Industry Leaders
          </h2>
          <p className="lead text-black mx-auto" style={{ maxWidth: "700px" }}>
            Trusted by industry leaders to streamline operations, drive
            innovation, and scale impact through AI.
          </p>
        </div> */}
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head feature-head text-center">
            <span>Trusted by Industry Leaders</span>
            <h2>
              Trusted by industry leaders to streamline operations, drive
              innovation, and scale impact through AI.
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {companies.map((company, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              key={`${company.name}-${index}`}
            >
              <div className="bg-white border rounded-3 d-flex align-items-center justify-content-center p-3 h-100">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="img-fluid"
                  style={{ maxHeight: "80px", objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
