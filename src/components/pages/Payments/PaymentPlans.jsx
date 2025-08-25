import React, { useState } from "react";
import styled from "styled-components";
import { CheckCircle } from "lucide-react";
// import Navbar from "../components/Navbar";
// import { plans } from "./Plan.js";
import { plans } from "./Plan.js";
// import UserHeader2 from "../../Layout/Header2.js";
import { Link } from "react-router-dom";
import Header from "../../header/index.jsx";

// Styled Components
const Container = styled.div`
  padding: 1.5rem;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  font-family: sans-serif;
`;

const IntroBox = styled.div`
  background-color: #dbeafe;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
`;

const IntroTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const IntroText = styled.p`
  color: #4b5563;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PricingHeader = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const PricingTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const PricingSubtitle = styled.p`
  color: #4b5563;
  margin-top: 0.5rem;
`;

const PricingIntro = styled.p`
   max-width: 800px;
   margin:0 auto;
  color: #6b7280;
  margin-top: 0.25rem;
  background-color: #ED8936;
  padding : 2rem 3rem;
  color:white;
  border-radius : 0.5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

const PlanCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PlanCard = styled.div`
  border: 1px solid ${(props) => (props.selected ? "#3b82f6" : "#e5e7eb")};
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: ${(props) => (props.selected ? "#eff6ff" : "white")};
  cursor: pointer;

  @media (min-width: 768px) {
    width: 16rem;
  }
`;

const BestValueTag = styled.div`
  position: absolute;
  top: -0.75rem;
  right: 1rem;
  background-color: #fbbf24;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

const PlanHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const PlanTitle = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
`;

const Checkbox = styled.input`
  height: 1.25rem;
  width: 1.25rem;
  color: #3b82f6;
`;

const PlanPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const BillingCycle = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const FeaturesList = styled.ul`
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  space-y: 0.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
`;

const FeatureText = styled.span`
  font-size: 0.875rem;
`;

const FeaturesPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FeaturesCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  flex: 1;
`;

// const FeaturesTitle = styled.h3`
//   font-size: 1.125rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
//   text-align: center;

//   @media (min-width: 768px) {
//     text-align: left;
//   }
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1rem;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const FeatureBox = styled.div`
//   display: flex;
//   gap: 0.75rem;
//   align-items: flex-start;
// `;

// const FeatureContent = styled.div``;

// const FeatureTitle = styled.p`
//   font-weight: 600;
// `;

// const FeatureDescription = styled.p`
//   color: #4b5563;
//   font-size: 0.875rem;
// `;

const ActionButton = styled.button`
  width: 100%;
  background-color: #2563eb;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const SupportText = styled.p`
  color: #4b5563;
  text-align: center;
  margin-top: 1rem;
`;

const EmailLink = styled.a`
  color: #3b82f6;
  text-decoration: underline;
`;

// Feature Component
// const Feature = ({ icon, title, description }) => {
//   return (
//     <FeatureBox>
//       <IconWrapper>{icon}</IconWrapper>
//       <FeatureContent>
//         <FeatureTitle>{title}</FeatureTitle>
//         <FeatureDescription>{description}</FeatureDescription>
//       </FeatureContent>
//     </FeatureBox>
//   );
// };

export default function PaymentPlans() {
  const [selectedPlan, setSelectedPlan] = useState("freemium");
  // const navigate = useNavigate();

  const handlePlanSelection = (planId) => {
    setSelectedPlan(planId);
  };

  // const goToNextPage = () => {
  //   navigate("/");
  // };

  return (
    <>
      {/* <UserHeader2 /> */}
      <Header />
      <Container>
        {/* Intro Section */}
        <IntroBox>
          <IntroTitle>
            ✨ Cast a wider net – 10x your job applications
          </IntroTitle>
          <IntroText>
            Our AI-powered platform scours millions of jobs to continuously find
            and apply to relevant job openings until you are hired.
          </IntroText>
        </IntroBox>

        <Heading>Kudos! You are one step closer to success 🎉</Heading>

        {/* Pricing Section Title */}
        <PricingHeader>
          <PricingTitle>Choose Your Plan</PricingTitle>
          <PricingSubtitle>
            Find the perfect fit for your career journey
          </PricingSubtitle>
          <PricingIntro>
            Try Nova Premium Tools Free for 7 Days! Enjoy a limited free trial
            with a set number of credits to explore resumes, jobs, and skill
            tests before you decide on a plan.
          </PricingIntro>
        </PricingHeader>

        <FlexContainer>
          <div>
            {/* Pricing Plans */}
            {/* <PlanCardsContainer>
              {plans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  selected={selectedPlan === plan.id}
                  onClick={() => handlePlanSelection(plan.id)}
                  dark={plan.isDark}
                >
                  {plan.isPopular && (
                    <BestValueTag>
                      Most Popular
                    </BestValueTag>
                  )}
                  <PlanHeader>
                    <PlanTitle>{plan.name}</PlanTitle>
                    <Checkbox
                      type="checkbox"
                      checked={selectedPlan === plan.id}
                      onChange={() => {}}
                    />
                  </PlanHeader>

                  <PlanPrice>
                    {plan.price === "0"
                      ? "Free"
                      : `$${plan.price}/mo`}
                  </PlanPrice>

                  <BillingCycle>
                    {plan.price === "0" ? "Forever" : "Monthly billing"}
                  </BillingCycle>

                  <FeaturesList>
                    {plan.features.map((feature, idx) => (
                      <FeatureItem key={idx}>
                        <IconWrapper>
                          <CheckCircle size={16} color="#3b82f6" />
                        </IconWrapper>
                        <FeatureText>{feature}</FeatureText>
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                </PlanCard>
              ))}
            </PlanCardsContainer> */}
            <PlanCardsContainer>
              {plans.map((plan) => {
                // Skip freemium plan
                if (plan.price === "0") return null;

                return (
                  <PlanCard
                    key={plan.id}
                    selected={selectedPlan === plan.id}
                    onClick={() => handlePlanSelection(plan.id)}
                    dark={plan.isDark}
                  >
                    {plan.isPopular && (
                      <BestValueTag>Most Popular</BestValueTag>
                    )}
                    <PlanHeader>
                      <PlanTitle>{plan.name}</PlanTitle>
                      <Checkbox
                        type="checkbox"
                        checked={selectedPlan === plan.id}
                        onChange={() => {}}
                      />
                    </PlanHeader>

                    <PlanPrice>{`$${plan.price}/mo`}</PlanPrice>

                    <BillingCycle>Monthly billing</BillingCycle>

                    <FeaturesList>
                      {plan.features.map((feature, idx) => (
                        <FeatureItem key={idx}>
                          <IconWrapper>
                            <CheckCircle size={16} color="#3b82f6" />
                          </IconWrapper>
                          <FeatureText>{feature}</FeatureText>
                        </FeatureItem>
                      ))}
                    </FeaturesList>
                  </PlanCard>
                );
              })}
            </PlanCardsContainer>
          </div>

          {/* Features & Payment Section */}
          <FeaturesPaymentContainer>
            {/* Features List */}
            <FeaturesCard>
              {/* <FeaturesTitle>
                All subscription features
              </FeaturesTitle>
              <FeaturesGrid>
                <Feature
                  icon={<CheckCircle size={16} color="#1e3a8a" />}
                  title="AI-Powered Job Matching"
                  description="Get real-time job recommendations tailored to your skills and experience."
                />
                <Feature
                  icon={<RefreshCw size={16} color="#1e3a8a" />}
                  title="ATS-Optimized Resumes"
                  description="Professionally crafted resumes designed by experts to pass Applicant Tracking Systems (ATS)."
                />
                <Feature
                  icon={<Bell size={16} color="#1e3a8a" />}
                  title="Instant Job Alerts"
                  description="Stay ahead with real-time notifications about new job openings that match your profile."
                />
                <Feature
                  icon={<Clock size={16} color="#1e3a8a" />}
                  title="Expert Resume Assistance"
                  description="Get personalized resume reviews and improvements from industry professionals."
                />
                <Feature
                  icon={<DollarSign size={16} color="#1e3a8a" />}
                  title="Career Community & Networking"
                  description="Connect with industry peers, mentors, and recruiters to enhance your career opportunities."
                />
                <Feature
                  icon={<CheckCircle size={16} color="#1e3a8a" />}
                  title="One-Click Applications"
                  description="Apply faster and more efficiently with seamless, single-click job applications."
                />
              </FeaturesGrid> */}
              <div style={{ marginTop: "1.5rem" }}>
                <Link to={`/plan-details?selectedPlan=${selectedPlan}`}>
                  <ActionButton>Next</ActionButton>
                </Link>
                <SupportText>
                  <strong>Got questions?</strong> Contact our customer support.
                </SupportText>
                <SupportText>
                  You may cancel via email at{" "}
                  <EmailLink href="mailto:customersupport@novajobs.us">
                    customersupport@novajobs.us
                  </EmailLink>
                  .
                </SupportText>
              </div>
            </FeaturesCard>
          </FeaturesPaymentContainer>
        </FlexContainer>
      </Container>
    </>
  );
}
