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

  strong {
    font-weight: bold;
  }
`;

const RefundPolicy = () => {
  return (
    <>
      <PageHeader />
      <Banner>
        <div className="page-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <h1 className="mb-0">Refund Policy</h1>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <Container>
        <Section>
          <p>
            At <strong>UltraAura</strong>, we are committed to providing high-quality education and training programs that help our students succeed in their careers. Before enrolling in any of our courses or certification programs, we encourage you to carefully review the course descriptions, requirements, and policies to ensure that it meets your needs and expectations.
          </p>
        </Section>

        <Section>
          <h2>No Refunds Once Enrolled</h2>
          <p>
            Due to the nature of our digital educational content and services, <strong>UltraAura does not offer refunds once you have enrolled in a course, skill test, or certification program</strong>. By enrolling, you gain immediate access to our course materials, resources, and content, which are considered delivered services upon purchase.
          </p>
        </Section>

        <Section>
          <h2>Key Points:</h2>
          <ul>
            <li><strong>No Refunds</strong>: Once a student has completed the enrollment process and gained access to course materials, no refunds will be issued.</li>
            <li><strong>Digital Content</strong>: As our courses are digital and delivered online, enrollment fees are non-refundable under any circumstances, including but not limited to a change in your schedule, inability to complete the course, or dissatisfaction with the course content.</li>
            <li><strong>Careful Consideration</strong>: We encourage you to fully review the course details, prerequisites, and learning outcomes before making a purchase decision.</li>
          </ul>
        </Section>

        <Section>
          <h2>Support and Guidance</h2>
          <p>
            While we do not offer refunds, we are dedicated to supporting you throughout your learning journey. If you encounter any difficulties or have questions during your course, our support team is available to assist you. Please reach out to us at <strong>info@ultraaura.education</strong> for help with course access, content-related queries, or technical issues.
          </p>
        </Section>

        <Section>
          <h2>Course Flexibility</h2>
          <p>
            UltraAura courses are designed to be flexible, allowing students to learn at their own pace. If life events prevent you from completing a course, you can access the materials whenever it is convenient for you, as all of our courses remain available after enrollment.
          </p>
        </Section>

        <Section>
          <p>
            By enrolling in UltraAura, you acknowledge and agree to this refund policy. We are confident that our comprehensive courses, expert instructors, and practical training will help you achieve your learning goals and advance in your plumbing career.
          </p>
          <p>
            For any further questions or concerns, feel free to contact us at <strong>info@ultraaura.education</strong>.
          </p>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default RefundPolicy;