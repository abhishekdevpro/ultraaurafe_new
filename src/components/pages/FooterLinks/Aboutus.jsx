
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PageHeader from '../header';
import Footer from '../../footer';
import IntroVideo from "../../../assets/introvideo.mp4"

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-color: #f4f4f4;
  // padding: 40px 0;
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`;

// const Section = styled.section`
//   margin-bottom: 40px;

//   h2 {
//     font-size: 1.8rem;
//     margin-bottom: 20px;
//     color: #333;
//   }

//   p {
//     font-size: 1rem;
//     line-height: 1.6;
//     color: #555;
//   }

//   ul {
//     list-style-type: disc;
//     margin-left: 20px;
//   }

//   li {
//     text-decoration:disc;
//     margin-bottom: 10px;
//   }
// `;
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
    list-style-type: disc; /* Ensures bullets are shown */
    padding-left: 20px; /* Adds some padding to align the list properly */
    margin: 10px 0;
  }

  li {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    list-style-type: disc;
    margin-bottom: 8px; /* Adds some space between list items */
  }
`;

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current) {
        videoRef.current.play();
    }
};
  return (
    <>
      <PageHeader />
      <Banner>
        <div className="page-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <h1 className="mb-0 text-white">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <Container>
        <Section>
          <h2>Welcome to UltraAura 🎓</h2>
          <p>
          Welcome to UltraAura, your go-to platform for high-quality, comprehensive education across a variety of trades and professional skills. As a proud product of Hyper V Solutions—an AI-driven business incubator at the University of South Carolina—we are dedicated to providing accessible, cutting-edge online learning experiences for students at every stage of their careers.

          </p>
          <div style={{display:'flex',justifyContent:'center'}}>

          <h2 style={{marginTop:"20px"}}>Check our quick Product Video below :
          </h2>
          </div>
          <div style={{ display:'flex',justifyContent:'center'}}>
          <video ref={videoRef} 
          src={IntroVideo} 
          controls 
          onClick={handlePlay}
          style={{
            margin: '50px',
            width: '700px',
            height: '500px',
            border: '2px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
           
        }}
          ></video>
          {/* <button >Play Unmuted</button> */}
          {/* <video ref={videoRef} src={IntroVideo} controls></video>
          <button onClick={handlePlay}>Play Unmuted</button> */}
          </div>
          <p>
            <b>

            We cater to:
            </b>
          </p>
          <ul>
            <li>Graduates 🎓</li>
            <li>Undergraduates 📚</li>
            <li>Working professionals 💼</li>
            <li>Individuals in the Department of Corrections, workforce development programs, and at-risk youth 🚀
            </li>
          </ul>
          <p>
          With courses spanning IT, plumbing, electrical work, construction licensing, home care, tax services, and more, we are committed to empowering individuals with the skills and certifications they need to succeed.
          </p>
          <p>
          Additionally, we provide interview preparation and job placement opportunities through NovaJobs to further support our students’ career advancement.

          </p>
        </Section>

        <Section>
          <h2>Our Mission 🌟</h2>
          <p>
          At UltraAura, our mission is to bridge the skills gap across various trades and industries by offering flexible, affordable, and accredited learning options. We strive to create a new standard of excellence in vocational and professional education, enabling students from diverse backgrounds to gain practical knowledge and earn industry-recognized certifications.

          </p>
        </Section>

        <Section>
          <h2>What We Offer 📚💼</h2>
          <p>
          UltraAura provides a comprehensive learning experience tailored to the needs of a wide range of students:
          </p>
          <ul>
            <li>
              <strong>Online Courses 💻</strong>: We offer specialized online courses covering essential skills in:
              <ul>
                <li>IT</li>
                <li>Non- IT
                </li>
                
                <li>Construction</li>
                <li>Home care, and more.</li>
              </ul>
              Courses are available at beginner, intermediate, and advanced levels, ensuring that students from all backgrounds can find relevant content. Developed by industry experts, our courses are engaging, flexible, and aligned with current industry practices.

            </li>
            <li>
              <strong>Skill Tests 🧠</strong>: We provide skill-based assessments to help students gauge their proficiency and readiness for certification. These tests ensure learners are job-ready and possess the competencies required for success in their chosen fields.

            </li>
            <li>
              <strong>Certifications 🏆</strong>:  Upon completing courses and assessments, students can earn industry-recognized certifications that boost their employability and career advancement opportunities.

            </li>
          </ul>
        </Section>

        <Section>
          <h2>Global Reach 🌍</h2>
          <p>
          Although based in South Carolina, UltraAura serves a global audience, knowing that learning knows no boundaries. Our courses are accessible online 24/7, allowing learners from different time zones and regions to study at their own pace, free from geographical limitations.

          </p>
        </Section>

        <Section>
          <h2>Our Partnerships 🤝</h2>
          <p>
          UltraAura collaborates with top trainers and industry professionals to deliver an exceptional educational experience. Our trainers bring practical expertise and a deep understanding of industry demands, ensuring that our students receive the most up-to-date training available. We also work closely with certification bodies and other organizations to ensure that our programs meet and exceed industry standards.
          </p>
        </Section>

        <Section>
          <h2><b>Why Choose UltraAura? 🤔</b></h2>
          <ul>
            <li><b>Diverse Course Offerings:</b> Courses designed for graduates, undergraduates, professionals, and unique individuals, including at-risk youth and those in corrections and workforce development.</li>
            <li><b>Flexibility:</b> Learn anytime, anywhere with our on-demand courses.</li>
            <li><b>Expert Trainers:</b> Gain insights from seasoned professionals in each field.</li>
            <li><b>Skill-Based Learning:</b> Focus on practical skills that matter in real-world jobs.</li>
            <li><b>Certifications & Career Support:</b> Earn credentials that help you stand out in a competitive job market, with interview preparation and job placement through NovaJobs.</li>
            <li><b>Global Access:</b> Accessible from anywhere, with content designed for a diverse, international audience.</li>
          </ul>
        </Section>

        <Section>
          <h2><b>Contact Us ✉️</b></h2>
          <p>
           <b>
            For more information about our courses, partnerships, or any inquiries, please contact us at:
            </b> 
          </p>
          <p>
            <b>📧 <a href="mailto:info@ultraaura.education">info@ultraaura.education</a></b>
          </p>
          <p>
            We look forward to being a part of your educational journey and helping you achieve your career goals.
          </p>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
