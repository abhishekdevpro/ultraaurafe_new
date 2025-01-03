

import React from "react";

// import { Container, Row, Col } from "react-bootstrap";
// import Sidebar from "../../Sidebar";
// import CustomNavbar from "../../Navbar";

import Introductions from "./Introductions";
import ForJobseeker from "./ForJobseeker";
import ForEmployer from "./ForEmployer";
// import Novajobsus from "./Novajobsus";
import MoreServices from "./MoreServices";
import AdminSidebar from "../AdminSidebar";
import { AdminHeader } from "../AdminHeader";
import Novajobsus from "./Novajobsus";

function AboutusForm() {
  return (
    // <>
    //   {/* <CustomNavbar /> */}
    //   <AdminHeader />
    //   <Container fluid>
    //     <Row>
    //       <Col md={2} className="p-0">
    //         {/* <Sidebar /> */}
    //         <AdminSidebar/>        
    //           </Col>
    //       <Col md={10}>
    //         <Container
    //           fluid
    //           className="p-4"
    //           style={{ overflow: "auto", maxHeight: "100vh" }}
    //         >
    //           <div className="page-content bg-white">
    //             <div className="content-block">
    //               <div className="section-full bg-white p-t50 p-b20">
    //                 <div className="container">
    //                   <div className="m-b30">
    //                     <div className="job-bx">
    //                       <Introductions />
    //                       <ForJobseeker />
    //                       <ForEmployer />
    //                       <Novajobsus />
    //                       <MoreServices />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </Container>
    //       </Col>
    //     </Row>
    //   </Container>
    // </>




  //   <div className="main-wrapper">
  //   <AdminHeader />
  //   <div className="breadcrumb-bar breadcrumb-bar-info">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-12 col-12">
  //           <div className="breadcrumb-list">
  //             <h2 className="breadcrumb-title">Admin Dashboard</h2>
  //             <nav aria-label="breadcrumb" className="page-breadcrumb">
  //             </nav>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="page-content">
  //     <div className="container">
  //       <div className="row">
  //         <AdminSidebar />
  //         <div className="col-xl-9 col-lg-9">
  //           <div className="settings-widget card-details">
  //             <div className="settings-menu p-0">
  //               <div className="profile-heading">
  //                 <h3>AboutUs Page</h3>
                  
  //               </div>

  //               <div className="page-content bg-white">
  //               <div className="content-block">
  //                  <div className="section-full bg-white p-t50 p-b20">
  //                   <div className="container">
  //                    <div className="m-b30">
  //                       <div className="job-bx">
  //                         <Introductions />
  //                          <ForJobseeker />
  //                     <ForEmployer />
  //                          <Novajobsus />
  //                          <MoreServices />
  //                        </div>
  //                      </div>
  //                    </div>
  //                  </div>
  //                </div>
  //              </div>
                
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   {/* <Footer /> */}
  // </div>


  <div className="main-wrapper" style={{ overflowX: "hidden" }}>
  <AdminHeader />
  <div
    className="breadcrumb-bar breadcrumb-bar-info"
    style={{
      width: "100%",
      padding: "15px",
      boxSizing: "border-box",
    }}
  >
    <div className="container" style={{ maxWidth: "100%", margin: "0 auto" }}>
      <div className="row">
        <div className="col-md-12 col-12">
          <div className="breadcrumb-list">
            <h2 className="breadcrumb-title">Admin Dashboard</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="page-content"
    style={{ overflowX: "hidden", padding: "15px", boxSizing: "border-box" }}
  >
    <div className="container" style={{ maxWidth: "100%", margin: "0 auto" }}>
      <div className="row">
        <AdminSidebar />
        <div className="col-xl-9 col-lg-9">
          <div
            className="settings-widget card-details"
            style={{ overflowX: "hidden" }}
          >
            <div className="settings-menu p-0">
              <div className="profile-heading">
                <h3>AboutUs Page</h3>
              </div>
              <div
                className="page-content bg-white"
                style={{ background: "#fff", overflowX: "hidden" }}
              >
                <div className="content-block">
                  <div
                    className="section-full bg-white p-t50 p-b20"
                    style={{
                      background: "#fff",
                      padding: "50px 0 20px 0",
                      overflowX: "hidden",
                    }}
                  >
                    <div
                      className="container"
                      style={{
                        maxWidth: "100%",
                        margin: "0 auto",
                        padding: "15px",
                      }}
                    >
                      <div className="m-b30">
                        <div
                          className="job-bx"
                          style={{ maxWidth: "100%", overflowX: "hidden" }}
                        >
                          <Introductions />
                          <ForJobseeker />
                          <ForEmployer />
                          <Novajobsus />
                          <MoreServices />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <Footer /> */}
</div>


  );
}

export default AboutusForm;
