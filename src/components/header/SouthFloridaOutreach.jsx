import React from "react";
import styled from "styled-components";

// Import the SCOPE logo image
import scopeLogo from "../../assets/img/scope.jpg";

const OutreachContainer = styled.div`
  padding: 40px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  font-family: "Poppins", sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScopeImage = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContentSection = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #09213c;
  margin-bottom: 15px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const CitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const CityItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: #09213c;
  font-weight: 500;

  &:before {
    content: "•";
    color: #09213c;
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 12px;
    line-height: 1;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    &:after {
      content: "→";
      color: #09213c;
      font-weight: bold;
      font-size: 1rem;
      transition: transform 0.2s ease;
    }

    &:hover:after {
      transform: translateX(3px);
    }
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 0;
`;

const SouthFloridaOutreach = () => {
  return (
    <OutreachContainer>
      <Container>
        <ContentWrapper>
          <ImageSection>
            <a
              href="https://scopeoutreach.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <ScopeImage
                src={scopeLogo}
                alt="SCOPE: A Sustainable Community Outreach Program"
              />
            </a>
          </ImageSection>

          <ContentSection>
            <Title>Now serving South Florida!</Title>
            <Subtitle>Connecting talent and opportunity across:</Subtitle>

            <CitiesList>
              <CityItem>
                <a
                  href="https://margatefl.novajobs.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  City of Margate
                </a>
              </CityItem>
              <CityItem>
                <a
                  href="https://hallandalebeach.novajobs.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  Hallandale Beach
                </a>
              </CityItem>
              <CityItem>
                <a
                  href="https://pompanobeach.novajobs.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  Pompano Beach
                </a>
              </CityItem>
            </CitiesList>

            <Description>
              Through our SCOPE Outreach Program, we &apos;re bringing
              AI-powered job tools, local dashboards, and direct employer
              connections to your community.
            </Description>
          </ContentSection>
        </ContentWrapper>
      </Container>
    </OutreachContainer>
  );
};

export default SouthFloridaOutreach;
