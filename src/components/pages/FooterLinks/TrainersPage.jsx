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
  color: white;

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

const TrainersPage = () => {
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
                <h1 className="mb-0">Online Trainer</h1>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <Container>
        <Section>
          <h2>Why Join UltraAura as an Online Trainer?</h2>
          <p>
            At UltraAura, we are dedicated to providing top-notch plumbing education to students around the world. As an online trainer with us, you will have the opportunity to make a significant impact on the lives and careers of aspiring plumbers while enjoying a flexible and rewarding work experience. Here are some compelling reasons to join us as an online trainer:
          </p>
          <ul>
            <li><strong>Make a Difference in the Trade Industry:</strong> By sharing your expertise, you will help shape the next generation of skilled plumbers. Your guidance and knowledge will equip students with the hands-on skills and certifications they need to succeed in a rapidly evolving industry. Your work directly contributes to closing the skills gap in the trade sector and increasing the availability of well-trained professionals in the field.</li>
            <li><strong>Flexibility and Convenience:</strong> As an online trainer, you’ll have the freedom to work from anywhere in the world, on your own schedule. UltraAura’s platform is designed for on-demand learning, meaning you can deliver pre-recorded lectures, live sessions, and assessments at times that suit your lifestyle. This level of flexibility allows you to balance your professional career with your personal commitments while earning additional income.</li>
            <li><strong>Expand Your Professional Reach Globally:</strong> UltraAura serves students from all around the globe, giving you the unique opportunity to connect with and teach a diverse group of learners. By joining our platform, you’ll be able to share your skills and insights with students from different cultures and backgrounds, broadening your influence and professional reach beyond geographical boundaries.</li>
            <li><strong>Teach What You Know Best:</strong> At UltraAura, we value your expertise. Whether you specialize in plumbing installation, maintenance, advanced techniques, or specific certifications, we encourage you to teach what you’re most passionate about. Our platform allows trainers to focus on specialized topics, ensuring that your knowledge is effectively passed on to students eager to learn.</li>
            <li><strong>Professional Development Opportunities:</strong> As an online trainer with UltraAura, you’ll be part of a growing community of experts. We provide opportunities for ongoing professional development through access to our latest educational tools and resources. You’ll also have the chance to collaborate with other trainers and industry leaders, helping you stay current with the latest trends, technologies, and techniques in the trade.</li>
            <li><strong>Competitive Compensation:</strong> We believe in rewarding expertise. At UltraAura, we offer competitive compensation for our trainers based on the quality of content delivered and the impact it has on learners. As you grow with us, you’ll also have opportunities to increase your earnings through additional teaching engagements, course expansions, and certifications.</li>
            <li><strong>Simplified Course Delivery with Full Support:</strong> UltraAura takes care of all the administrative and technical aspects of course delivery, allowing you to focus on what you do best: teaching. Our user-friendly platform makes it easy to upload materials, create quizzes, and interact with students. Our dedicated support team is always available to assist you with any technical issues or questions, ensuring that your teaching experience is smooth and stress-free.</li>
            <li><strong>Be Part of an Innovative Edtech Platform:</strong> By joining UltraAura, you become part of a cutting-edge educational platform that leverages technology to improve learning outcomes. Our platform is designed to provide an engaging, interactive experience for both trainers and students. You’ll be at the forefront of educational innovation, contributing to a platform that is revolutionizing vocational training in the plumbing industry.</li>
          </ul>
        </Section>

        <Section>
          <h2>How to Get Started</h2>
          <p>
            Ready to share your expertise with the world? Joining UltraAura as an online trainer is simple:
          </p>
          <ul>
            <li><strong>Apply:</strong> Send your resume and course proposal to <a href="mailto:info@ultraaura.education">info@ultraaura.education</a>.</li>
            <li><strong>Create:</strong> Work with our team to develop and refine your course content.</li>
            <li><strong>Teach:</strong> Start delivering your courses to students globally and make a lasting impact.</li>
          </ul>
          <p>
            Join UltraAura today and become an essential part of a global movement to provide top-quality vocational education in plumbing. Empower learners worldwide, advance your career, and enjoy the flexibility of teaching online!
          </p>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default TrainersPage;
