import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 24px
    ${(props) => (props.isDark ? "rgba(0,0,0,0.2)" : "rgba(9,33,60,0.12)")};
  transition: all 0.3s ease;
  transform: ${(props) => (props.isPopular ? "translateY(-10px)" : "none")};
  border: ${(props) => {
    if (props.isPopular) return "2px solid #ED8936";
    return props.isDark ? "none" : "1px solid rgba(9,33,60,0.08)";
  }};
  background-color: ${(props) => (props.isDark ? "#0064e4" : "#fff")};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const CardHeader = styled.div`
  padding: 30px 25px 20px;
  text-align: center;
  border-bottom: 1px solid rgba(9, 33, 60, 0.08);
`;

const CardTitle = styled.h3`
  color: ${(props) => (props.isDark ? "#fff" : "#0064e4")};
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 15px;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${(props) => (props.isDark ? "#fff" : "#0064e4")};
`;

const PriceAmount = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  color: ${(props) => (props.isDark ? "#fff" : "#0064e4")};
`;

const PricePeriod = styled.div`
  font-size: 16px;
  opacity: 0.7;
  align-self: flex-end;
  padding-bottom: 8px;
  color: ${(props) => (props.isDark ? "#fff" : "#0064e4")};
`;

const CardBody = styled.div`
  padding: 25px;
  flex: 1;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${(props) => (props.isDark ? "#fff" : "#0064e4")};
`;

const FeatureItem = styled.li`
  padding: 12px 0;
  border-bottom: ${(props) =>
    props.isDark
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid rgba(9,33,60,0.06)"};
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const CheckIcon = styled.i`
  margin-right: 10px;
  color: ${(props) => (props.isDark ? "#5dd3f8" : "#0064e4")};
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
  background-color: ${(props) =>
    props.isDark ? "#ED8936" : props.isPopular ? "#ED8936" : "#ED8936"};
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.isDark
      ? "0 4px 15px rgba(10, 26, 54, 0.4)"
      : "0 4px 15px rgba(9, 33, 60, 0.15)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(9, 33, 60, 0.2);
  }
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
  box-shadow: 0 2px 8px rgba(9, 33, 60, 0.2);
`;

const PricingCard = ({ 
  plan, 
  isDark = false, 
  isPopular = false,
  isUpgrade =false,
  isUnlimited = false,
  onSubscribe 
}) => {
    console.log(plan,"plan")
  return (
    <Card isDark={isDark} isPopular={isPopular} isUnlimited={isUnlimited}>
      {isPopular && <PopularBadge>Most Popular</PopularBadge>}
      {isUnlimited && (
        <PopularBadge
          style={{
            backgroundColor: "#ED8936",
            color: "#ffffff",
          }}
        >
          Unlimited
        </PopularBadge>
      )}
      <CardHeader>
        <CardTitle isDark={isDark}>{plan.name}</CardTitle>
        <PriceWrap isDark={isDark}>
          <PriceAmount isDark={isDark}>${plan.price}</PriceAmount>
          <PricePeriod isDark={isDark}>/month</PricePeriod>
        </PriceWrap>
      </CardHeader>
      <CardBody>
        <FeatureList isDark={isDark}>
          {plan.features.map((feature, index) => (
            <FeatureItem key={index} isDark={isDark}>
              <CheckIcon isDark={isDark} className="fas fa-check" />
              {feature}
            </FeatureItem>
          ))}
        </FeatureList>
      </CardBody>
      <CardFooter>
        <Button 
          isDark={isDark} 
          isPopular={isPopular}
          // isUnlimited={isUnlimited}
          onClick={() => onSubscribe(plan)}
        >
          {isUpgrade ? "Upgrade Your Plan" : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    buttonText: PropTypes.string,
  }).isRequired,
  isDark: PropTypes.bool,
  isPopular: PropTypes.bool,
  isUnlimited: PropTypes.bool,
    isUpgrade: PropTypes.bool,
  onSubscribe: PropTypes.func.isRequired,
};

export default PricingCard;
