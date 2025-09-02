import React from "react";
import styled from "styled-components";
import nova from "./novaLogo.png"

const Section = styled.section`
  background: white;
  padding: 16px;
  color: #122152;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 50px;
    width: auto;

    @media (min-width: 768px) {
      max-height: 60px;
    }
  }
`;

const Features = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 8px 0;

  @media (min-width: 768px) {
    overflow-x: visible;
    justify-content: center;
  }
`;

const FeatureBox = styled.div`
  background: #f3f6ff;
  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  min-width: 140px;
  text-align: center;
  transition: all 0.3s ease;
  color: #122152;

  strong {
    display: block;
    font-size: 1rem;
    margin-bottom: 6px;
    font-weight: 700;
  }

  small {
    font-size: 0.8rem;
    color: #555;
  }

  &:hover {
    background: #ed8936;
    color: #fff;
    border-color: #0064e4;
    transform: translateY(-5px);

    small {
      color: #fefefe;
    }
  }
`;

const CTAButton = styled.a`
  background: #0064e4;
  color: #fff !important;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 12px 28px;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.3s ease;

  &:hover {
    background: #ed8936;
    color: #fff !important;
  }
`;

const NovaJobsSection = () => {
  return (
    <Section className="container-fluid">
      <div className="row align-items-center gy-3">
        {/* Logo */}
        <div className="col-6 col-md-2 d-flex justify-content-center">
          <LogoContainer>
            <img
              src={nova}
              alt="NovaJobs Logo"
            />
          </LogoContainer>
        </div>

        {/* Features */}
        <div className="col-12 col-md-8">
          <Features>
            <FeatureBox>
              <strong>Get Jobs</strong>
              <small>10,000+ US vacancies</small>
            </FeatureBox>
            <FeatureBox>
              <strong>AI Resumes</strong>
              <small>ATS-ready profiles</small>
            </FeatureBox>
            <FeatureBox>
              <strong>Skill Tests</strong>
              <small>Assess your strengths</small>
            </FeatureBox>
            <FeatureBox>
              <strong>Mock Interviews</strong>
              <small>AI-driven practice</small>
            </FeatureBox>
          </Features>
        </div>

        {/* CTA */}
        <div className="col-6 col-md-2 d-flex justify-content-center">
          <CTAButton href="https://novajobs.us">Get Started Now</CTAButton>
        </div>
      </div>
    </Section>
  );
};

export default NovaJobsSection;
