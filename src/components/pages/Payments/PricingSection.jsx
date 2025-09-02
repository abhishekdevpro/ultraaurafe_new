import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { plans } from "./Plan";
import styled from "styled-components";
import PricingCard from "../../common/PricingCard/PricingCard";
import { FaCheckCircle } from "react-icons/fa";

// Styled Components
const Section = styled.section`
  padding: 80px 0;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
`;

const Container = styled.div`
  // max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const SectionHead = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  color: #0064e4;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 15px;
`;

const TitleLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: #0064e4;
  border-radius: 2px;
`;

const Subtitle = styled.p`
  max-width: 800px;
  color: #0064e4;
  font-size: 18px;
  margin-bottom: 0;
  margin: auto;
  opacity: 0.8;
`;

const PricingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const PricingCol = styled.div`
  flex: 1 1 280px;
  min-width: 280px;
  max-width: 300px;
  display: flex;
`;

const PricingSection = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleClick = (plan) => {
    if (!token) {
      toast.error("Please Login First");
      navigate("/login");
    } else {
      window.location.href = `https://novajobs.us/user/plan-details?selectedPlan=${plan.id}`;
      // window.location.href  = (`https://airesume.novajobs.us/settings/subscription/?tokenbyurl=${token}`)
      // window.location.href = (`http://localhost:3001/settings/subscription/?tokenbyurl=${token}`)
    }
  };

  return (
    <Section>
      <Container>
        {/* Section Heading */}
        <SectionHead>
          <Title>
            Start Your 7-Day Free Trial with Nova Premium
            <TitleLine />
          </Title>
          <Subtitle>
            Try Nova’s exclusivetools free for 7 days — no upfront payment.
          </Subtitle>
          {/* <div className="row">
            <div className="col-md-6">
              <li>
                {" "}
                 Experience AI-powered pre-interviews that employers review
              </li>
            </div>
            <div className="col-md-6">
              <li>• Join our prescreened resume list for priority visibility</li>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <li> Explore skill tests, job listings, and more</li>
            </div>
            <div className="col-md-6">
              <li>
                {" "}
                Connect your education-to-career journey through Ultra Get
                started today.
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <li>
                Once you see the difference, keep going with a
                simple subscription.
              </li>
            </div>
          </div> */}
          <div className="container my-5"
          style={{margin:"auto"}}
          >
            <ul className="row list-unstyled g-4">
              <li className="col-md-6 d-flex align-items-start gap-2 p-3 ">
                <FaCheckCircle className="text-success mt-1" />
                <span>
                  Experience AI-powered pre-interviews that employers review
                </span>
              </li>

              <li className="col-md-6 d-flex align-items-start gap-2 p-3 ">
                <FaCheckCircle className="text-success mt-1" />
                <span>
                  Join our prescreened resume list for priority visibility
                </span>
              </li>

              <li className="col-md-6 d-flex align-items-start gap-2 p-3 ">
                <FaCheckCircle className="text-success mt-1" />
                <span>Explore skill tests, job listings, and more</span>
              </li>

              <li className="col-md-6 d-flex align-items-start gap-2 p-3 ">
                <FaCheckCircle className="text-success mt-1" />
                <span>
                  Connect your education-to-career journey through Ultra
                </span>
              </li>

              {/* <li className="col-12 d-flex align-items-start gap-2 p-3 ">
                <FaCheckCircle className="text-primary mt-1" />
                <span>
                  Once you see the difference, keep going with a simple
                  subscription.
                </span>
              </li> */}
            </ul>
          </div>
        </SectionHead>

        {/* Pricing Cards Row */}
        <PricingRow>
          {/* Map through plans array to create pricing cards */}
          {plans.map((plan) => (
            <PricingCol key={plan.id}>
              <PricingCard
                plan={plan}
                isDark={plan.isDark}
                isPopular={plan.isPopular}
                isUnlimited={plan.isUnlimited}
                onSubscribe={handleClick}
              />
            </PricingCol>
          ))}
        </PricingRow>
      </Container>
    </Section>
  );
};

export default PricingSection;
