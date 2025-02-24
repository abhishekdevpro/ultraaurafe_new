import React, { useEffect } from "react";
import axios from "axios";

import Footer from "../../../footer";
import { AdminHeader } from "../../AdminHeader";
import AdminSidebar from "../../AdminSidebar";

import Introductions from "./Introductions";
import ForJobseeker from "./ForJobseeker";
import ForEmployer from "./ForEmployer";
import Novajobsus from "./Novajobsus";
import MoreServices from "./MoreServices";

function AboutusForm() {
  const [sections, setSections] = React.useState([]);

  // Fetch data from the GET API
  const fetchContent = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/uaadmin/get-aboutus-content"
      );
      const data = response.data;
      setSections(data.data || []);
      // Fallback content if fields are empty or null
    } catch (error) {
      console.error("Error fetching content:", error);
      // alert("An error occurred while fetching content.");
    }
  };
  useEffect(() => {
    fetchContent();
  }, []);

  const getSectionData = (id) => {
    console.log("sections", sections);
    return sections.find((section) => section.id === id);
  };
  return (
    <>
      <div className="main-wrapper">
        <AdminHeader />
        <div className="breadcrumb-bar breadcrumb-bar-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12 pt-4">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">Admin Dashboard</h2>
                  <nav
                    aria-label="breadcrumb"
                    className="page-breadcrumb"
                  ></nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="page-content">
          <div className="container">
            <div className="row">
              {/* Sidebar */}
              <AdminSidebar />
              <div className="col-xl-9 col-lg-9">
                <div className=" justify-content-center">
                  {sections.length ? (
                    <>
                      <Introductions introductionData={getSectionData(1)} />
                      <ForJobseeker forJobseekerData={getSectionData(2)} />
                      <ForEmployer forEmployerData={getSectionData(3)} />
                      <Novajobsus novaJobsusData={getSectionData(4)} />
                      <MoreServices moreServicesData={getSectionData(5)} />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AboutusForm;
