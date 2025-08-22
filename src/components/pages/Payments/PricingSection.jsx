import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { plans } from "./Plan";
import styled from "styled-components";
import PricingCard from "../../common/PricingCard/PricingCard";



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
  color: #0064e4;
  font-size: 18px;
  margin-bottom: 0;
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
      navigate(`/plan-details?selectedPlan=${plan.id}`);
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
            Choose Your Perfect Plan
            <TitleLine />
          </Title>
          <Subtitle>Select the plan that best fits your needs</Subtitle>
        </SectionHead>

        {/* Pricing Cards Row */}
        <PricingRow>
          {/* Map through plans array to create pricing cards */}
          {plans.map((plan) => (
            <PricingCol key={plan.id}>
              {/* <PricingCard isDark={plan.isDark} isPopular={plan.isPopular}>
                {/* Popular Badge (if applicable) 
                {plan.isPopular && <PopularBadge>Most Popular</PopularBadge>}

                {/* Plan Header
                <CardHeader>
                  <CardTitle isDark={plan.isDark}>{plan.name}</CardTitle>
                  <PriceWrap isDark={plan.isDark}>
                    <PriceAmount isDark={plan.isDark}>
                      ${plan.price}
                    </PriceAmount>
                    <PricePeriod isDark={plan.isDark}>/mo</PricePeriod>
                  </PriceWrap>
                </CardHeader>

                {/* Plan Features
                <CardBody>
                  <FeatureList isDark={plan.isDark}>
                    {plan.features.map((feature, index) => (
                      <FeatureItem key={index} isDark={plan.isDark}>
                        <CheckIcon
                          className="fa fa-check"
                          isDark={plan.isDark}
                        />
                        <span>{feature}</span>
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </CardBody>

                {/* CTA Button 
                <CardFooter>
                  <Button
                    onClick={()=>handleClick(plan)}
                    isDark={plan.isDark}
                    isPopular={plan.isPopular}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </PricingCard> */}
              <PricingCard 
                plan={plan}
                isDark={plan.isDark}
                isPopular={plan.isPopular}
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
