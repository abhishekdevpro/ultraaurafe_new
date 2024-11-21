
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon19, Icon20 } from "../imagepath";
import logo5 from '../../assets/Ultra_Aura.png';
import axios from "axios";
import { toast } from "react-toastify";

// Styled Components
const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  width: 100%;
`;

const FooterTop = styled.div`
  padding: 60px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyInfoColumn = styled.div`
  flex: 0 0 40%;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const LinksColumn = styled.div`
  flex: 0 0 55%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterWidget = styled.div`
  margin-bottom: 30px;
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;

  img {
    max-width: 150px;
  }
`;
const FooterLogo2 = styled.div`
  margin-bottom: 20px;

  img {
    max-width: 100px;
  }
`;

const FooterAboutContent = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.6;
`;

const FooterContactInfo = styled.div`
  .footer-address, p {
    margin-bottom: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

const FooterTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

const FooterMenuList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 10px;
    
    a {
      text-decoration: none;
      color: #555;
      font-size: 14px;
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

// const NewsletterForm = styled.form`
//   display: flex;
//   align-items: center;
//   border:2px solid red;

//   input {
//     flex: 1;
//     padding: 10px;
//     font-size: 14px;
//     border: 1px solid #ddd;
//     border-radius: 4px 0 0 4px;
//     margin-right: -1px;
//   }

//   button {
//     padding: 10px 15px;
//     font-size: 14px;
//     background-color: #007bff;
//     color: white;
//     border: 1px solid #007bff;
//     border-radius: 0 4px 4px 0;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #0056b3;
//     }
//   }
// `;
const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;

  input {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    margin-right: -1px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      padding: 8px;
    }
  }

  button {
    padding: 10px 15px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
    border: 1px solid #007bff;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    @media (max-width: 768px) {
      font-size: 13px;
      padding: 9px 12px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      padding: 8px 10px;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    input {
      border-radius: 4px;
      margin-right: 0;
      margin-bottom: 10px;
    }

    button {
      border-radius: 4px;
      width: 100%;
    }
  }
`;



const FooterBottom = styled.div`
  background-color: #e9ecef;
  padding: 15px 0;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrivacyPolicy = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    
    li {
      margin-right: 15px;
      
      a {
        text-decoration: none;
        color: #555;
        font-size: 14px;
        transition: color 0.3s ease;

        &:hover {
          color: #007bff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.novajobs.us/api/jobseeker/user-subscribe', { email });
      if (response.status === 200) {
        toast.success('Subscribed successfully!');
        setEmail('');
      }
    } catch (error) {
      toast.error('Subscription failed. Please try again.');
      console.error('Subscription error:', error);
    }
  };
  return (
    <FooterWrapper>
      <FooterTop>
        <Container>
          <FooterContent>
            <CompanyInfoColumn>
              <FooterWidget>
                <FooterLogo>
                  <Link to={"/home"}>
                  <img src={logo5} alt="logo" />
                  </Link>
                </FooterLogo>
                <FooterAboutContent>
                  <b>
                    An AI enabled Edtech Company
                    </b>
                </FooterAboutContent>
                <FooterContactInfo>
                  <div className="footer-address">
                    <img src={Icon20} alt="" />
                    <p>
                    P O Box 1084, Columbia, SC 29202
                    </p>
                  </div>
                  <p>
                    <img src={Icon19} alt="" />
                    info@ultraaura.education
                  </p>
                  <p>
                    <img src={Icon19} alt="" />
                    hr@ultraaura.education
                  </p>
                </FooterContactInfo>
                 <FooterLogo2>
                 <img src="https://abhishekdevpro-nova-home-care-fe.vercel.app/assets/logo2-06lVAt2c.png" alt="" />
                 </FooterLogo2>
              </FooterWidget>
              <FooterWidget>
                <FooterTitle>Newsletter</FooterTitle>
                <NewsletterForm onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <button type="submit">Subscribe</button>
                </NewsletterForm>
                {/* {subscriptionStatus && <p>{subscriptionStatus}</p>} */}
              </FooterWidget>
            </CompanyInfoColumn>
            <LinksColumn>
              <FooterWidget>
                <FooterTitle>About us</FooterTitle>
                <FooterMenuList>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                  <li><Link to="/trainers">Trainers</Link></li>
                </FooterMenuList>
              </FooterWidget>
              <FooterWidget>
                <FooterTitle>For Students</FooterTitle>
                <FooterMenuList>
                  <li><Link to="/studentspage">Students</Link></li>
                  <li><Link to="/refund">Refund Policy</Link></li>
                  <li><Link to="/skilltests">Skill Tests</Link></li>
                  <li><Link to="/certifications">Certifications</Link></li>
                  <li><Link to="/ai-resume">AI Resume Building</Link></li>
                </FooterMenuList>
              </FooterWidget>
              <FooterWidget>
                <FooterTitle>
                  <Link to={'/partners'}>Partner with UltraAura</Link>
                </FooterTitle>
                <FooterMenuList>
                  <li><Link to="https://ultraaura.education/login">Student Login</Link></li>
                  <li><Link to="https://trainers.ultraaura.education/">Trainer Login</Link></li>
                  <li><Link to="https://vendors.ultraaura.education/">Partner Signup</Link></li>
                </FooterMenuList>
              </FooterWidget>
            </LinksColumn>
          </FooterContent>
        </Container>
      </FooterTop>
      <FooterBottom>
        <Container>
          <Copyright>
            <PrivacyPolicy>
              <ul>
                <li><Link to="/term-condition">Terms</Link></li>
                <li><Link to="/privacy-policy">Privacy</Link></li>
              </ul>
            </PrivacyPolicy>
            <CopyrightText>© 2024 UltraAura. All rights reserved.</CopyrightText>
          </Copyright>
        </Container>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;