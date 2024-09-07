// import React from "react";
// import { Link } from "react-router-dom";
// import { Icon19, Icon20, Icon21 } from "../imagepath";
// import logo5 from './logo5.png'

// const Footer = () => {
//   return (
//     <footer className="footer">
//     {/* Footer Top */}
//     <div className="footer-top">
//       <div className="container">
//         <div className="row">
//           {/* Row 1 */}
//           <div className="col-12 d-flex flex-column flex-md-row mb-4">
//             <div className="col-md-3 mb-4 mb-md-0">
//               {/* Footer Widget */}
//               <div className="footer-widget footer-about">
//                 <div className="footer-logo">
//                   <img src={logo5} alt="logo" className="img-fluid" />
//                 </div>
//                 <div className="footer-about-content">
//                   <p>UltraAura.Education - An AI enabled Edtech Company</p>
//                 </div>
//                 <div className="footer-contact-info">
//                 <div className="footer-address d-flex align-items-center mb-2">
//                   <img src={Icon20} alt="" className="img-fluid me-2" />
//                   <p>1509 Lady St, Columbia, SC 29201,<br /> United States</p>
//                 </div>
//                 <p className="mb-2">
//                   <img src={Icon19} alt="" className="img-fluid me-2" />
//                   info@ultraaura.education
//                 </p>
//                 <p className="mb-0">
//                   <img src={Icon21} alt="" className="img-fluid me-2" />
//                   1803-967-7715
//                 </p>
//               </div>
//               </div>
//               {/* /Footer Widget */}
//             </div>
//             <div className="col-md-3 mb-4 mb-md-0">
//               {/* Footer Widget */}
//               <div className="footer-widget footer-menu">
//                 <h2 className="footer-title">About us</h2>
//                 <ul className="list-unstyled">
//                   <li><Link to="/about-us">Aboutus</Link></li>
//                   <li><Link to="/careers">Careers</Link></li>
//                   <li><Link to="/trainers">Trainers</Link></li>
                 
//                 </ul>
//               </div>
//               {/* /Footer Widget */}
//             </div>
//             <div className="col-md-3 mb-4 mb-md-0">
//               {/* Footer Widget */}
//               <div className="footer-widget footer-menu">
//                 <h2 className="footer-title">For Students</h2>
//                 <ul className="list-unstyled">
//                   <li><Link to="/studentspage">Students</Link></li>
//                   <li><Link to="/refund">Refund-policy</Link></li>
//                   <li><Link to="/skilltests">Skill-tests</Link></li>
//                   <li><Link to="certifications">Cetifications</Link></li>
//                   <li><Link to="/ai-resume">AI Resume building</Link></li>
//                 </ul>
//               </div>
//               {/* /Footer Widget */}
//             </div>
//             <div className="col-md-3">
//               {/* Footer Widget */}
//               <div className="footer-widget footer-menu">
//                 <h2 className="footer-title">
//                   <Link to={'/partners'}>
//                     Partner with UltraAura
//                   </Link>
//                 </h2>
//                 <ul className="list-unstyled">
//                   <li><Link to="/login">Student Login</Link></li>
//                   <li><Link to="/login">Trainer Login</Link></li>
//                   <li><Link to="/partner-signup">Partner Login</Link></li>
//                 </ul>
//               </div>
//               {/* /Footer Widget */}
//             </div>
//           </div>
//           {/* Row 2 */}
//           <div className="col-12">
//             <div className="footer-widget footer-contact">
//               <h2 className="footer-title">Newsletter</h2>
//               <div className="news-letter mb-3">
//                 <form>
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter your email address"
//                     name="email"
//                   />
//                 </form>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* /Footer Top */}
  
//     {/* Footer Bottom */}
//     <div className="footer-bottom bg-light py-3">
//       <div className="container">
//         {/* Copyright */}
//         <div className="copyright">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-2 mb-md-0">
//               <div className="privacy-policy">
//                 <ul className="list-inline mb-0">
//                   <li className="list-inline-item"><Link to="/term-condition">Terms</Link></li>
//                   <li className="list-inline-item"><Link to="/privacy-policy">Privacy</Link></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-6 text-md-end">
//               <div className="copyright-text">
//                 <p className="mb-0">© 2024 UltraAura. All rights reserved.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Copyright */}
//       </div>
//     </div>
//     {/* /Footer Bottom */}
//   </footer>
  
  
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon19, Icon20, Icon21 } from "../imagepath";
import logo5 from './logo5.png';

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

const NewsletterForm = styled.form`
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    margin-right: -1px;
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

// Footer Component
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <Container>
          <FooterContent>
            <CompanyInfoColumn>
              <FooterWidget>
                <FooterLogo>
                  <img src={logo5} alt="logo" />
                </FooterLogo>
                <FooterAboutContent>
                   An AI enabled Edtech Company
                </FooterAboutContent>
                <FooterContactInfo>
                  <div className="footer-address">
                    <img src={Icon20} alt="" />
                    <p>
                      1509 Lady St, Columbia, SC 29201,<br /> United States
                    </p>
                  </div>
                  <p>
                    <img src={Icon19} alt="" />
                    info@ultraaura.education
                  </p>
                 
                </FooterContactInfo>
              </FooterWidget>
              <FooterWidget>
                <FooterTitle>Newsletter</FooterTitle>
                <NewsletterForm>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                  />
                  <button type="submit">Subscribe</button>
                </NewsletterForm>
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
                  <li><Link to="/login">Student Login</Link></li>
                  <li><Link to="/login">Trainer Login</Link></li>
                  <li><Link to="/partner-signup">Partner Signup</Link></li>
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