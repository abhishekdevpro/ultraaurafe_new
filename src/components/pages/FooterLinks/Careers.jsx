/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
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
  color:white;

  h1 {
    font-size: 2.5rem;
    // color: #333;
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

  ul {
    list-style-type: disc;
    padding-left: 20px;
    color: #555;

    li {
      margin-bottom: 10px;
    }
  }
`;

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader />
        <Banner>
        <div className="page-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <h1 className="mb-0">Careers</h1>
              </div>
            </div>
          </div>
        </div>
        </Banner>
      <Container>
      
        <Section>
          <h2>Join UltraAura</h2>
          <p>
            Are you passionate about education and making a difference in the trade industry? UltraAura, a leading edtech platform focused on plumbing education and certification, is looking for dynamic, talented individuals to join our growing team. As we continue to expand globally, we are committed to building a diverse workforce that shares our mission of empowering students and professionals in the plumbing industry through high-quality, accessible education.
          </p>
        </Section>

        <Section>
          <h2>Why Work at UltraAura?</h2>
          <p>
            At UltraAura, we believe that our team is the backbone of our success. Here’s why joining UltraAura is an exciting opportunity:
          </p>
          <ul>
            <li><strong>Impactful Work:</strong> Be part of an innovative company that is transforming vocational education, helping students worldwide gain skills and certifications that directly impact their careers.</li>
            <li><strong>Global Reach:</strong> Work in a company with a global presence. Our online platform connects learners, trainers, and industry partners from all over the world, offering you the opportunity to work on global projects.</li>
            <li><strong>Collaborative Environment:</strong> At UltraAura, we foster a collaborative and supportive work culture where everyone's ideas are valued, and cross-functional teamwork is encouraged.</li>
            <li><strong>Professional Growth:</strong> We are committed to the professional development of our employees. We offer training programs, opportunities for career advancement, and exposure to cutting-edge educational technologies.</li>
            <li><strong>Flexible Work Options:</strong> UltraAura supports remote work opportunities, allowing employees to achieve a healthy work-life balance. Whether you're based in the U.S. or anywhere in the world, we provide a flexible working environment.</li>
          </ul>
        </Section>

        <Section>
          <h2>Who We're Looking For</h2>
          <p>We are always on the lookout for talented professionals who are passionate about education, technology, and the trades industry. Some of the key roles we frequently hire for include:</p>
          <ul>
            <li><strong>Educational Content Developers:</strong> Do you have expertise in plumbing or related trades and a knack for creating engaging, educational content? We are looking for subject matter experts who can develop high-quality course materials, assessments, and certification programs.</li>
            <li><strong>Instructors and Trainers:</strong> Join our team of skilled trainers to deliver online courses, workshops, and skill assessments. If you have hands-on experience in the plumbing industry and enjoy teaching, we’d love to have you on board.</li>
            <li><strong>Instructional Designers:</strong> Work alongside our content developers to design and implement effective, learner-centered online courses. Instructional designers at UltraAura ensure that our courses meet educational standards and provide an engaging, practical learning experience for students.</li>
            <li><strong>Marketing and Communications Specialists:</strong> Help us grow UltraAura’s presence globally by developing and executing marketing campaigns, managing brand communications, and expanding our reach to students and partners across the globe.</li>
            <li><strong>Software Developers and UX/UI Designers:</strong> Be a part of our technology team that builds and maintains UltraAura’s online platform. We are seeking developers and designers with experience in creating user-friendly educational technologies to improve the learning experience for our students.</li>
            <li><strong>Customer Support Specialists:</strong> If you’re passionate about helping others and enjoy problem-solving, consider joining our customer support team. You will provide assistance to students, trainers, and partners, ensuring that they have the best possible experience on our platform.</li>
          </ul>
        </Section>

        <Section>
          <h2>How to Apply</h2>
          <p>
            Interested in joining UltraAura? We’d love to hear from you! Send your resume and cover letter to <a href="mailto:careers@ultraaura.education">careers@ultraaura.education</a> with the subject line "Career Application – [Position Name]". Be sure to include any relevant experience and explain why you’re excited about becoming part of the UltraAura team.
          </p>
        </Section>

        <Section>
          <p>
            Join us at UltraAura and be part of a forward-thinking company that is shaping the future of education in the trades industry. Whether you're an educator, a tech enthusiast, or a marketing expert, we have a place for you in our mission to transform vocational learning for a global audience.
          </p>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default Careers;
