// import React, { useEffect, useState } from "react";
// import Footer from "../../footer";
// import StudentHeader from "../header";
// import StudentSidebar from "../sidebar";
// import { plans } from "../../pages/Payments/Plan";
// import PricingCard from "../../common/PricingCard/PricingCard";

// const StudentPlan = () => {
//   const [profileData, setProfileData] = useState({});
//   // const token = "your_token_here"; // Replace with actual token after login
//   const token = localStorage.getItem("token");
//   //   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await fetch(
//           "https://api.novajobs.us/api/students/profile",
//           {
//             method: "GET",
//             headers: { Authorization: token },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch profile data");
//         }

//         const result = await response.json();
//         if (result.status === "success") {
//           setProfileData(result.data);
//         }
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     fetchProfileData();
//   }, [token]);

//   const currentPlan =
//     plans.find((plan) => plan.id === profileData.plan_id) || plans[0];

//   console.log("Current Plan:", currentPlan);

//   // console.log("Profile Data:", profileData.plan_id);
//   return (
//     <>
//       {/* Main Wrapper */}
//       <div className="main-wrapper">
//         {/* Header */}
//         <StudentHeader activeMenu={"My Profile"} />
//         {/* /Header */}
//         {/* Breadcrumb */}
//         <div className="breadcrumb-bar breadcrumb-bar-info">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-12">
//                 <div className="breadcrumb-list">
//                   <h2 className="breadcrumb-title">My Profile</h2>

//                   <nav aria-label="breadcrumb" className="page-breadcrumb">
//                     <ol className="breadcrumb">
//                       <li className="breadcrumb-item">
//                         <a href="/home">Home</a>
//                       </li>
//                       <li
//                         className="breadcrumb-item active"
//                         aria-current="page"
//                       >
//                         My Profile
//                       </li>
//                     </ol>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Breadcrumb */}
//         {/* Page Content */}
//         <div className="page-content">
//           <div className="container">
//             <div className="row">
//               {/* sidebar */}
//               <div className="col-xl-3 col-lg-3">
//                 <StudentSidebar />
//               </div>
//               {/* /Sidebar */}
//               {/* Student Profile */}
//               <div className="col-xl-9 col-lg-9">
//                 <div className="settings-widget card-details mb-0">
//                   <div className="settings-menu p-0">
//                     <div className="profile-heading d-flex justify-content-between align-items-center">
//                       <h3>My Plans</h3>
//                     </div>
//                     <div className="checkout-form personal-address">
//                       <div className="row">
//                         <h2>Your Current Plan </h2>
//                         <PricingCard
//                           plan={currentPlan}
//                           isDark={false}
//                           isPopular={false}
//                           onSubscribe={() => {}}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Student Profile */}
//             </div>
//           </div>
//         </div>
//         {/* /Page Content */}
//         {/* Footer */}
//         <Footer />
//         {/* /Footer */}
//       </div>
//       {/* /Main Wrapper */}
//     </>
//   );
// };

// export default StudentPlan;

import React, { useEffect, useState } from "react";
import Footer from "../../footer";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import { plans } from "../../pages/Payments/Plan";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PricingCard from "../../common/PricingCard/PricingCard";

const StudentPlan = () => {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [isActivePlan, setIsActivePlan] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchProfileData = async () => {
    try {
      const response = await fetch(
        "https://api.novajobs.us/api/students/profile",
        {
          method: "GET",
          headers: { Authorization: token },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }

      const result = await response.json();
      if (result.status === "success") {
        const userPlanId = result.data?.plan_id;
        setIsActivePlan(result.data?.is_active_plan);
        console.log(result.data?.plan_id, userPlanId, "userPlanId");
        // Match plan_id with static plans list
        // const matchedPlan = result.data?.is_active_plan
        //   ? plans.find((plan) => {
        //     // console.log(plan)
        //     plan.plan_id === stringify(userPlanId)})
        //   :  plans[userPlanId] // <-- direct index access
        const matchedPlan = result.data?.is_active_plan
          ? plans.find((plan) => plan.plan_id === String(userPlanId)) // convert number -> string
          : plans[userPlanId]; // <-- only works if API gives correct index (not recommended)

        // console.log
        if (matchedPlan) {
          setCurrentPlan(matchedPlan);
        } else {
          toast.error("Your current plan could not be identified.");
        }
      }
    } catch (error) {
      toast.error(error.message || "Error fetching profile data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [token]);
  //   console.log("Current Plan:", currentPlan);
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Header */}
        <StudentHeader activeMenu={"My Profile"} />
        {/* /Header */}

        {/* Breadcrumb */}
        <div className="breadcrumb-bar breadcrumb-bar-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">My Plan</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/home">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        My Plan
                      </li>
                    </ol>
                  </nav>
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
              {/* sidebar */}
              <div className="col-xl-3 col-lg-3">
                <StudentSidebar />
              </div>
              {/* /Sidebar */}

              {/* Student Profile */}
              <div className="col-xl-9 col-lg-9">
                <div className="settings-widget card-details mb-0">
                  <div className="settings-menu p-0">
                    <div className="profile-heading d-flex justify-content-between align-items-center">
                      <h3>My Plans</h3>
                    </div>

                    <div className="checkout-form personal-address">
                      <h2>Your Current Plan</h2>
                      <p className="text-danger small">
                        {isActivePlan
                          ? ""
                          : "You have no active plan. Upgrade it now"}
                      </p>

                      <h5 className="text-muted ">
                        {isActivePlan ? " " : "Recommended Plan for you"}
                      </h5>
                      <PricingContainer>
                        {loading ? (
                          <div>Loading...</div>
                        ) : currentPlan ? (
                          //   <PricingCard featured={currentPlan.isPopular}>
                          //     <CardHeader featured={currentPlan.isPopular}>
                          //       <h3 className="text-white">{currentPlan.name}</h3>
                          //       <Price>
                          //         <span>${currentPlan.price}</span>
                          //         <span className="text-white">/month</span>
                          //       </Price>
                          //     </CardHeader>
                          //     <CardBody>
                          //       <FeatureList>
                          //         {currentPlan?.features?.map((feature, index) => (
                          //           <li key={index}>✓ {feature}</li>
                          //         ))}
                          //       </FeatureList>

                          //       <Link to="/user/payment-plans">
                          //         <SelectButton>Upgrade your Plan</SelectButton>
                          //       </Link>
                          //     </CardBody>
                          //   </PricingCard>
                          <PricingCard
                            plan={currentPlan}
                            isPopular={false}
                            isDark={false}
                            isUpgrade={true}
                            onSubscribe={() =>
                              navigate(
                                `/payment-plans`
                              )
                            }
                          />
                        ) : (
                          <div>
                            <p className="mb-4">No plan data available.</p>
                            <Link to="/user/payment-plans">
                              <SelectButton>Upgrade your Plan</SelectButton>
                            </Link>
                          </div>
                        )}
                      </PricingContainer>
                    </div>
                  </div>
                </div>
              </div>
              {/* Student Profile */}
            </div>
          </div>
        </div>
        {/* /Page Content */}

        {/* Footer */}
        <Footer />
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default StudentPlan;

/* ---------- STYLED COMPONENTS ---------- */
const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

// const PricingCard = styled.div`
//   background: white;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   overflow: hidden;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const CardHeader = styled.div`
//   background: #1c2957;
//   color: white;
//   padding: 2rem;
//   text-align: center;

//   h3 {
//     margin: 0;
//     font-size: 1.5rem;
//     font-weight: 600;
//   }
// `;

// const Price = styled.div`
//   margin-top: 1rem;

//   span:first-child {
//     font-size: 2.5rem;
//     font-weight: 700;
//   }

//   span:last-child {
//     font-size: 1rem;
//     color: #eee;
//   }
// `;

// const CardBody = styled.div`
//   padding: 2rem;
// `;

// const FeatureList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0 0 2rem 0;

//   li {
//     padding: 0.5rem 0;
//     color: #666;
//     font-size: 0.9rem;
//   }
// `;

const SelectButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: #1c2957;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0f1830;
  }
`;
