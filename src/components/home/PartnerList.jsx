// import React from 'react';
// import styled from 'styled-components';
import scope from '../../assets/img/scope.jpg'
import AGI from '../../assets/img/Agi.jpg'

// const PartnersContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const PartnerItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// const Logo = styled.img`
//   width: 100px;
//   height: auto;
//   margin-right: 20px;
  
//   @media (max-width: 768px) {
//     margin-right: 0;
//     margin-bottom: 10px;
//   }
// `;

// const PartnerInfo = styled.div`
//   flex: 1;
// `;

// const PartnerName = styled.h3`
//   margin: 0 0 10px 0;
//   font-size: 18px;
//   color: #333;
// `;

// const PartnerDescription = styled.p`
//   margin: 0;
//   font-size: 14px;
//   color: #666;
// `;

// const partnerData = [
//   {
//     name: 'SCOPE',
//     logo: {scope},
//     description: 'Empowering Citizens of South Florida... Innovative education and employment program for a stronger Hallandale Beach community.'
//   },
//   {
//     name: 'AGI Tax Experts',
//     logo: {AGI},
//     description: 'Launch your career with AGI Tax Experts! Comprehensive training and placement opportunities available through our portal.'
//   },
//   {
//     name: 'NOVA Home Care',
//     logo: '/api/placeholder/100/100',
//     description: 'Elevate your career with top-notch training and placement. Transform lives and secure your future with us.'
//   }
// ];

// const PartnerList = () => {
//   return (
//     <PartnersContainer>
//       {partnerData.map((partner, index) => (
//         <PartnerItem key={index}>
//           <Logo src={partner.logo} alt={`${partner.name} logo`} />
//           <PartnerInfo>
//             <PartnerName>{partner.name}</PartnerName>
//             <PartnerDescription>{partner.description}</PartnerDescription>
//           </PartnerInfo>
//         </PartnerItem>
//       ))}
//     </PartnersContainer>
//   );
// };

// export default PartnerList;
// import React from 'react';
// import styled from 'styled-components';

// const PartnersContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #4F46E5;
// `;

// const PartnersRow = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;

//   @media (min-width: 1024px) {
//     flex-direction: row;
//   }
// `;

// const PartnerCard = styled.div`
//   flex: 1;
//   background-color: white;
//   border-radius: 0.5rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const CardContent = styled.div`
//   padding: 1.5rem;
// `;

// const IconContainer = styled.div`
//   width: 4rem;
//   height: 4rem;
//   background-color: #EEF2FF;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 1rem;
// `;

// const PartnerName = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   text-align: center;
//   margin-bottom: 0.5rem;
//   color: #1F2937;
// `;

// const PartnerDescription = styled.p`
//   text-align: center;
//   color: #4B5563;
// `;

// const CardFooter = styled.div`
//   background-color: #EEF2FF;
//   padding: 1rem 1.5rem;
// `;

// const LearnMoreButton = styled.button`
//   width: 100%;
//   background-color: #4F46E5;
//   color: white;
//   padding: 0.5rem 1rem;
//   border: none;
//   border-radius: 0.25rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #4338CA;
//   }
// `;

// const partnerData = [
//   {
//     name: 'SCOPE',
//     icon:{scope},
//     description: 'Empowering Citizens of South Florida... Innovative education and employment program for a stronger Hallandale Beach community.'
//   },
//   {
//     name: 'AGI Tax Experts',
//     icon:{AGI},
//     description: 'Launch your career with AGI Tax Experts! Comprehensive training and placement opportunities available through our portal.'
//   },
//   {
//     name: 'NOVA Home Care',
//     icon:"https://idfy-eia3.vercel.app/assets/logo5-DddCxhI1.jpg",
//     description: 'Elevate your career with top-notch training and placement. Transform lives and secure your future with us.'
//   }
// ];

// const PartnerList = () => {
//   return (
//     <PartnersContainer>
//       <Title>Our Partners</Title>
//       <PartnersRow>
//         {partnerData.map((partner, index) => (
//           <PartnerCard key={index}>
//             <CardContent>
//               <IconContainer>
//                 {/* Replace with actual icon component */}
//                 <img src={partner.icon} alt="" />
//               </IconContainer>
//               <PartnerName>{partner.name}</PartnerName>
//               <PartnerDescription>{partner.description}</PartnerDescription>
//             </CardContent>
//             <CardFooter>
//               <LearnMoreButton>Learn More</LearnMoreButton>
//             </CardFooter>
//           </PartnerCard>
//         ))}
//       </PartnersRow>
//     </PartnersContainer>
//   );
// };

// export default PartnerList;

import React from 'react';
import styled from 'styled-components';

const PartnersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #4F46E5;
`;

const PartnersRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const PartnerCard = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #EEF2FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  overflow: hidden;
`;

const PartnerIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PartnerName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #1F2937;
`;

const PartnerDescription = styled.p`
  text-align: center;
  color: #4B5563;
`;

const CardFooter = styled.div`
  background-color: #EEF2FF;
  padding: 1rem 1.5rem;
`;

const LearnMoreButton = styled.button`
  width: 100%;
  background-color: #4F46E5;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4338CA;
  }
`;

const partnerData = [
  {
    name: 'SCOPE',
    icon: scope, // Replace with actual icon import or URL
    description: 'Empowering Citizens of South Florida... Innovative education and employment program for a stronger Hallandale Beach community.'
  },
  {
    name: 'AGI Tax Experts',
    icon: AGI, // Replace with actual icon import or URL
    description: 'Launch your career with AGI Tax Experts! Comprehensive training and placement opportunities available through our portal.'
  },
  {
    name: 'NOVA Home Care',
    icon: "https://idfy-eia3.vercel.app/assets/logo5-DddCxhI1.jpg", // Replace with actual icon import or URL
    description: 'Elevate your career with top-notch training and placement. Transform lives and secure your future with us.'
  }
];

const PartnerList = () => {
  return (
    <PartnersContainer>
      <Title>Our Partners</Title>
      <PartnersRow>
        {partnerData.map((partner, index) => (
          <PartnerCard key={index}>
            <CardContent>
              <IconContainer>
                <PartnerIcon src={partner.icon} alt={`${partner.name} icon`} />
              </IconContainer>
              <PartnerName>{partner.name}</PartnerName>
              <PartnerDescription>{partner.description}</PartnerDescription>
            </CardContent>
            <CardFooter>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </CardFooter>
          </PartnerCard>
        ))}
      </PartnersRow>
    </PartnersContainer>
  );
};

export default PartnerList;