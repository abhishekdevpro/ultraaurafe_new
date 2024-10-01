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
  color: white;

  h1 {
    font-size: 2.5rem;
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

const Students = () => {
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
                        <h1 className="mb-0">For Students</h1>
                    </div>
                </div>
            </div>
        </div>
    </Banner>
    <Container>
        <Section>
            <h2>Why Join UltraAura as a Student?</h2>
            <p>
                At UltraAura, we are dedicated to providing a flexible, accessible, and comprehensive learning experience for students seeking to advance their skills in the plumbing industry. Whether youre starting your career, looking to upgrade your skills, or aiming to get certified, UltraAura offers an exceptional educational platform tailored to meet your needs. Heres why you should join us as a student:
            </p>
        </Section>

        <Section>
            <h2>Key Benefits</h2>
            <ul>
                <li><strong>Learn from Industry Experts:</strong> Our instructors are seasoned professionals with extensive hands-on experience in the plumbing industry.</li>
                <li><strong>Flexible, On-Demand Learning:</strong> Access courses anytime, anywhere, and study at your own pace.</li>
                <li><strong>Comprehensive Courses for All Levels:</strong> From basic plumbing skills to advanced techniques, we have courses for everyone.</li>
                <li><strong>Skill-Based Learning and Testing:</strong> Focus on practical, job-ready skills with skill-based assessments.</li>
                <li><strong>Earn Recognized Certifications:</strong> Enhance your employment prospects with industry-recognized certifications.</li>
                <li><strong>Global Learning Community:</strong> Connect with learners from different parts of the world.</li>
                <li><strong>Personalized Support:</strong> Get assistance from our dedicated support team and participate in student forums and live Q&A sessions.</li>
                <li><strong>Affordable Learning Options:</strong> Access quality education with competitive pricing and flexible payment options.</li>
                <li><strong>Stay Ahead with the Latest Industry Trends:</strong> Keep up-to-date with the most recent practices and technologies in the plumbing industry.</li>
                <li><strong>Job-Ready Skills for Career Advancement:</strong> Gain practical skills needed to excel in your career and prepare for the demands of the modern plumbing industry.</li>
            </ul>
        </Section>

        <Section>
            <h2>Join UltraAura Today!</h2>
            <p>
                Becoming an UltraAura student is the first step toward a rewarding career in the plumbing industry. Whether you are just starting out or looking to expand your expertise, our platform offers the tools and resources to help you achieve your goals.
            </p>
            <p>
                Ready to take the next step? Sign up today at <a href="http://www.ultraaura.education">www.ultraaura.education</a> and start your learning journey!
            </p>
        </Section>

        <Section>
            <p>
                At UltraAura, we are committed to providing an exceptional education that prepares you for success in the industry. Join our global community of learners and unlock new career opportunities with practical skills and recognized certifications.
            </p>
        </Section>
    </Container>
    <Footer/>
</>
   );

};

export default Students;