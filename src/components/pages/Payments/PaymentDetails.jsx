import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CheckCircle, Lock } from 'lucide-react';
import styled from 'styled-components';
import { plans } from './Plan';
import Header from '../../header';
// import UserHeader2 from '../../Layout/Header2';
// New plans array structure


// Styled components (assumed to exist in original code)
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CardContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentSection = styled.div`
  padding: 2rem;
`;

const OrderReviewSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #111827;
`;

const PlanName = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #4b5563;
`;

const FeaturesList = styled.div`
  margin: 1.5rem 0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const FeatureText = styled.span`
  margin-left: 0.5rem;
  color: #4b5563;
`;

const PriceBox = styled.div`
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #374151;
`;

const PriceAmount = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const TermsText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const TermsLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  margin: 0 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const SecureCheckoutLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: #6b7280;
`;

const SecureText = styled.span`
  margin-left: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
`;

// Map for billing periods (added this since your plans don't specify billing cycles)
const planBillingCycles = {
  freemium: "month",
  elevate: "month",
  promax: "month",
  ultraelite: "month"
};

export default function PaymentPage() {
  const BASE_URL = "https://api.novajobs.us";
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  // Convert plans array to object with id as key for easy lookup
  const plansObj = plans.reduce((acc, plan) => {
    acc[plan.id] = {
      ...plan,
      billingCycle: planBillingCycles[plan.id] || "month",
      title: plan.name
    };
    return acc;
  }, {});

  // Format price based on billing cycle
  const formatPrice = (plan) => {
    if (!plan) return "";

    if (plan.price === "0") {
      return "Free";
    }

    if (planBillingCycles[plan.id] === "single") {
      return `$${plan.price}`;
    } else if (planBillingCycles[plan.id] === "month") {
      return `$${plan.price}/mo`;
    } else if (planBillingCycles[plan.id] === "year") {
      return `$${plan.price}/yr`;
    }

    return `$${plan.price}`;
  };

  // Get renewal period text
  const getRenewalText = (plan) => {
    if (!plan) return "";

    if (planBillingCycles[plan.id] === "single") {
      return "one-time payment";
    } else if (planBillingCycles[plan.id] === "month") {
      return "every month";
    } else if (planBillingCycles[plan.id] === "year") {
      return "every year";
    }

    return "";
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planId = params.get("selectedPlan");

    if (planId && plansObj[planId]) {
      setSelectedPlanId(planId);
      setSelectedPlan(plansObj[planId]);
    } else {
      // Default to elevate plan instead of aiProYearly
      setSelectedPlanId("elevate");
      setSelectedPlan(plansObj.elevate);
    }
  }, []);

  const handleCheckout = async () => {
    if (!selectedPlanId) {
      toast.success("Please select a plan before proceeding.");
      return;
    }
    
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Authentication required. Please log in.");
      navigate("/login2"); // Redirect to login page if token is missing
      return;
    }
    
    // Map selectedPlan to the correct plan_id for API
    const planMapping = {
      freemium: 1,
      elevate: 2,
      promax: 3,
      ultraelite: 4,
    };

    const planId = planMapping[selectedPlanId];

    try {
      const response = await axios.post(
        `${BASE_URL}/api/students/payment/checkout`,
        {
          plan_id: planId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("API Response:", response.data);

      if (response.status === 200) {
        if (response.data?.url) {
          toast.success("Payment successful! Redirecting...");
          window.location.href = response.data.url;
        } else {
          console.error("No URL found in response:", response.data);
          toast.error("Unexpected response from the server. No URL returned.");
        }
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error(error.response?.data?.message || "Error processing payment.");
    }
  };

  return (
    <>
    {/* <UserHeader2 /> */}
    <Header />
      <PageContainer>
        <CardContainer>
          <ContentSection>
            <OrderReviewSection>
              <SectionTitle>Review your order</SectionTitle>
              <PlanName>
                <strong>Plan:</strong> {selectedPlan ? selectedPlan.name : ""}
              </PlanName>
              
              <FeaturesList>
                {selectedPlan &&
                  selectedPlan.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <CheckCircle color="#2563eb" size={18} />
                      <FeatureText>{feature}</FeatureText>
                    </FeatureItem>
                  ))}

                {selectedPlan && planBillingCycles[selectedPlan.id] !== "single" && (
                  <FeatureItem>
                    <CheckCircle color="#2563eb" size={18} />
                    <FeatureText>
                      Automatically renews {getRenewalText(selectedPlan)}.
                    </FeatureText>
                  </FeatureItem>
                )}
              </FeaturesList>

              <PriceBox>
                Total due today
                <PriceAmount>
                  {selectedPlan ? formatPrice(selectedPlan) : ""}
                </PriceAmount>
              </PriceBox>
            </OrderReviewSection>

            {/* Terms and Conditions */}
            <TermsText>
              By clicking <strong>Start applying</strong> below, you agree to our
              <TermsLink href="#">Terms of Use</TermsLink>
              and
              <TermsLink href="#">Privacy Policy</TermsLink>
              . You also understand that you will be billed
              <strong> {selectedPlan ? formatPrice(selectedPlan) : ""}</strong>,
              which will automatically renew
              {selectedPlan && selectedPlan.id !== "freemium" ? " " + getRenewalText(selectedPlan) : ""}.
              <strong> You can cancel at any time.</strong>
            </TermsText>

            {/* Start Applying Button */}
            <ActionButton 
              onClick={handleCheckout}
              disabled={selectedPlanId === "freemium"}
            >
              Start applying
            </ActionButton>

            {/* Secure Checkout */}
            <SecureCheckoutLabel>
              <Lock color="#2563eb" size={20} />
              <SecureText>SECURE CHECKOUT</SecureText>
            </SecureCheckoutLabel>
          </ContentSection>
        </CardContainer>
      </PageContainer>
    </>
  );
}