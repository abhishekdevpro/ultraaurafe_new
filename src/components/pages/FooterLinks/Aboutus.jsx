import React from 'react';
import styled from 'styled-components';
import PageHeader from '../header';
import Footer from '../../footer';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-color: #f4f4f4;
  padding: 40px 0;
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }
`;

const AboutUs = () => {
  return (
    <>
    <PageHeader />
      <Banner>
      <div className="page-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <h1 className="mb-0">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <Container>
        <Section>
          <h2>Welcome to UltraAura</h2>
          <p>
            Welcome to UltraAura, your go-to platform for high-quality, comprehensive education in the plumbing industry. We are a U.S.-based edtech company dedicated to providing accessible, cutting-edge online learning experiences that help individuals develop essential plumbing skills, earn certifications, and advance in their careers. Our platform is designed to serve students globally, ensuring that learners from any location can benefit from our expert-led courses and industry-relevant training.
          </p>
        </Section>

        <Section>
          <h2>Our Mission</h2>
          <p>
            At UltraAura, our mission is to empower individuals with practical knowledge and professional certifications in the plumbing field. We aim to bridge the skills gap in the trade industry by offering flexible, affordable, and accredited learning options for students of all backgrounds. Through our innovative courses and skill-based assessments, we strive to create a new standard of excellence in vocational education.
          </p>
        </Section>

        <Section>
          <h2>What We Offer</h2>
          <p>
            UltraAura offers a wide range of services to ensure a holistic and enriching learning experience:
          </p>
          <ul>
            <li>Online Courses: Our online courses cover essential plumbing skills, from beginner to advanced levels, with content developed by industry experts. The courses are designed to be engaging, flexible, and up-to-date with current industry practices.</li>
            <li>Skill Tests: We provide skill-based tests that help students assess their proficiency and readiness for industry certifications. These assessments ensure that learners are job-ready and possess the competencies required for professional success.</li>
            <li>Certifications: Upon successful completion of our courses and skill tests, students can earn industry-recognized certifications, enhancing their employment prospects and career advancement opportunities.</li>
          </ul>
        </Section>

        <Section>
          <h2>Global Reach</h2>
          <p>
            Though we are based in the United States, UltraAura serves a diverse, global audience. We understand the importance of having a platform that meets the educational needs of students around the world. Our courses are accessible online 24/7, allowing learners from different time zones and regions to study at their own pace, without geographical limitations.
          </p>
        </Section>

        <Section>
          <h2>Our Partnerships</h2>
          <p>
            UltraAura collaborates with top trainers and industry professionals to provide a high-quality educational experience. Our trainers bring a wealth of knowledge and practical expertise to our courses, ensuring that students receive the most relevant and up-to-date training. We also partner with certification bodies and other organizations to ensure that our courses meet industry standards.
          </p>
        </Section>

        <Section>
          <h2>Why Choose UltraAura?</h2>
          <p>
            Flexibility: Learn anytime, anywhere with our on-demand courses.<br />
            Expert Trainers: Gain insights from experienced industry professionals.<br />
            Skill-Based Learning: Focus on practical skills that matter in real-world plumbing jobs.<br />
            Certifications: Earn credentials that help you stand out in a competitive job market.<br />
            Global Access: Accessible from anywhere in the world, with content designed for a diverse audience.
          </p>
        </Section>

        <Section>
          <h2>Contact Us</h2>
          <p>
            For more information about our courses, partnerships, or any inquiries, please contact us at <a href="mailto:info@ultraaura.education">info@ultraaura.education</a>. We look forward to being part of your educational journey and helping you achieve your career goals.
          </p>
        </Section>

        <Section>
          <p>
            At UltraAura, we believe in the power of education to transform lives and industries. Join us today and take the first step towards a rewarding career.
          </p>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
