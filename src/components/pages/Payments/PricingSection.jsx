// import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { plans } from "./Plan";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
  padding: 80px 0;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
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

const PricingCard = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 24px ${props => props.isDark ? 'rgba(0,0,0,0.2)' : 'rgba(9,33,60,0.12)'};
  transition: all 0.3s ease;
  transform: ${props => props.isPopular ? 'translateY(-10px)' : 'none'};
  border: ${props => {
    if (props.isPopular) return '2px solid #ED8936';
    return props.isDark ? 'none' : '1px solid rgba(9,33,60,0.08)';
  }};
  background-color: ${props => props.isDark ? '#0064e4' : '#fff'};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const CardHeader = styled.div`
  padding: 30px 25px 20px;
  text-align: center;
  border-bottom: 1px solid rgba(9,33,60,0.08);
`;

const CardTitle = styled.h3`
  color: ${props => props.isDark ? '#fff' : '#0064e4'};
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 15px;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${props => props.isDark ? '#fff' : '#0064e4'};
`;

const PriceAmount = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  color: ${props => props.isDark ? '#fff' : '#0064e4'};
`;

const PricePeriod = styled.div`
  font-size: 16px;
  opacity: 0.7;
  align-self: flex-end;
  padding-bottom: 8px;
  color: ${props => props.isDark ? '#fff' : '#0064e4'};
`;

const CardBody = styled.div`
  padding: 25px;
  flex: 1;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${props => props.isDark ? '#fff' : '#0064e4'};
`;

const FeatureItem = styled.li`
  padding: 12px 0;
  border-bottom: ${props => props.isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(9,33,60,0.06)'};
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const CheckIcon = styled.i`
  margin-right: 10px;
  color: ${props => props.isDark ? '#5dd3f8' : '#0064e4'};
  font-weight: bold;
`;

const CardFooter = styled.div`
  padding: 0 25px 30px 25px;
  text-align: center;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 14px 20px;
  border-radius: 8px;
  background-color: ${props => props.isDark ? '#ED8936' : props.isPopular ? '#ED8936' : '#ED8936'};
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.isDark ? '0 4px 15px rgba(10, 26, 54, 0.4)' : '0 4px 15px rgba(9, 33, 60, 0.15)'};
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #0064e4;
  color: #fff;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(9,33,60,0.2);
`;

const PricingSection = () => {
  const navigate = useNavigate();
 
  const token = localStorage.getItem("jobSeekerLoginToken");
  
  const handleClick = () => {
    if (!token) {
      toast.error("Please Login First");
      navigate('/user/login');
    } else {
      navigate('/user/subscription');
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
          <Subtitle>
            Select the plan that best fits your needs
          </Subtitle>
        </SectionHead>

        {/* Pricing Cards Row */}
        <PricingRow>
          {/* Map through plans array to create pricing cards */}
          {plans.map((plan) => (
            <PricingCol key={plan.id}>
              <PricingCard isDark={plan.isDark} isPopular={plan.isPopular}>
                {/* Popular Badge (if applicable) */}
                {plan.isPopular && (
                  <PopularBadge>Most Popular</PopularBadge>
                )}

                {/* Plan Header */}
                <CardHeader>
                  <CardTitle isDark={plan.isDark}>{plan.name}</CardTitle>
                  <PriceWrap isDark={plan.isDark}>
                    <PriceAmount isDark={plan.isDark}>
                      ${plan.price}
                    </PriceAmount>
                    <PricePeriod isDark={plan.isDark}>/mo</PricePeriod>
                  </PriceWrap>
                </CardHeader>

                {/* Plan Features */}
                <CardBody>
                  <FeatureList isDark={plan.isDark}>
                    {plan.features.map((feature, index) => (
                      <FeatureItem
                        key={index}
                        isDark={plan.isDark}
                      >
                        <CheckIcon 
                          className="fa fa-check"
                          isDark={plan.isDark}
                        />
                        <span>{feature}</span>
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </CardBody>

                {/* CTA Button */}
                <CardFooter>
                  <Button
                    onClick={handleClick}
                    isDark={plan.isDark}
                    isPopular={plan.isPopular}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </PricingCard>
            </PricingCol>
          ))}
        </PricingRow>
      </Container>
    </Section>
  );
};

export default PricingSection;