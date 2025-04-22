// import React, { useEffect } from "react";
// import axios from "axios";

// import Introductions from "./Introductions";
// import ForJobseeker from "./ForJobseeker";
// import ForEmployer from "./ForEmployer";
// import Novajobsus from "./Novajobsus";
// import MoreServices from "./MoreServices";

// function AdminAboutus() {
//   const [sections, setSections] = React.useState([]);

//   // Fetch data from the GET API
//   const fetchContent = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/uaadmin/get-aboutus-content"
//       );
//       const data = response.data;
//       setSections(data.data || []);
//       // Fallback content if fields are empty or null
//     } catch (error) {
//       console.error("Error fetching content:", error);
//       // alert("An error occurred while fetching content.");
//     }
//   };
//   useEffect(() => {
//     fetchContent();
//   }, []);

//   const getSectionData = (id) => {
//     console.log("sections", sections);
//     return sections.find((section) => section.id === id);
//   };
//   return (
//     <>
//       <div className="justify-content-center">
//         {sections.length ? (
//           <>
//             <div className="section-intro">
//               <Introductions introductionData={getSectionData(1)} />
//             </div>
//             <div className="section-jobseeker">
//               {" "}
//               <ForJobseeker forJobseekerData={getSectionData(2)} />
//             </div>
//             <div className="section-employer">
//               <ForEmployer forEmployerData={getSectionData(3)} />
//             </div>
//             <div className="section-novajobs">
//               <Novajobsus novaJobsusData={getSectionData(4)} />
//             </div>
//             <div className="section-moresection">
//               {" "}
//               <MoreServices moreServicesData={getSectionData(5)} />
//             </div>
//           </>
//         ) : null}
//       </div>
//     </>
//   );
// }

// export default AdminAboutus;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Introductions from "./Introductions";
import ForJobseeker from "./ForJobseeker";
import ForEmployer from "./ForEmployer";
import Novajobsus from "./Novajobsus";
import MoreServices from "./MoreServices";

function AdminAboutus() {
  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  // Fetch data from the GET API
  const fetchContent = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/uaadmin/get-aboutus-content"
      );
      const data = response.data;
      setSections(data.data || []);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const getSectionData = (id) => {
    return sections.find((section) => section.id === id);
  };

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };
console.log(sections,"llll");
  return (
    <>
      <div className="accordion-container">
        {sections.length ? (
          <>
            <div className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => toggleSection(1)}
              >
                Introduction
              </button>
              {activeSection === 1 && (
                <div className="accordion-content">
                  <Introductions introductionData={getSectionData(1)} />
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => toggleSection(2)}
              >
                For Jobseeker
              </button>
              {activeSection === 2 && (
                <div className="accordion-content">
                  <ForJobseeker forJobseekerData={getSectionData(2)} />
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => toggleSection(3)}
              >
                For Employer
              </button>
              {activeSection === 3 && (
                <div className="accordion-content">
                  <ForEmployer forEmployerData={getSectionData(3)} />
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => toggleSection(4)}
              >
                NovaJobs Us
              </button>
              {activeSection === 4 && (
                <div className="accordion-content">
                  <Novajobsus novaJobsusData={getSectionData(4)} />
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => toggleSection(5)}
              >
                More Services
              </button>
              {activeSection === 5 && (
                <div className="accordion-content">
                  <MoreServices moreServicesData={getSectionData(5)} />
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default AdminAboutus;
