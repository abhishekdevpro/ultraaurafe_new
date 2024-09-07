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

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #444;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  ul, ol {
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

const AIResumePage = () => {
  return (
    <>
      <PageHeader />
      <Banner>
        <div className="page-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <h1 className="mb-0">AI Resume Building</h1>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <Container>
        <Section>
          <p>
            At UltraAura, we understand that a well-crafted resume is critical to landing your dream job in the plumbing industry. That's why we offer an innovative AI Resume Building tool designed to help you create professional, polished resumes that highlight your skills, experience, and certifications. Leveraging cutting-edge AI technology, our resume builder simplifies the process, ensuring you stand out to potential employers.
          </p>
        </Section>

        <Section>
          <h2>Why Use AI for Resume Building?</h2>
          <p>Creating a resume can be a challenging task, especially when you're unsure of how to format it or what information to include. Our AI-powered resume builder takes the guesswork out of the process by offering:</p>
          <ol>
            <li>
              <strong>Smart Suggestions Based on Industry Standards</strong>
              <p>Our AI analyzes the latest trends in resume writing and formatting within the plumbing industry. It offers real-time suggestions, helping you include the most relevant skills, keywords, and certifications that employers are looking for.</p>
            </li>
            <li>
              <strong>Customization for Different Roles</strong>
              <p>Whether you're applying for an entry-level plumbing role or seeking a more advanced position, our AI tool tailors your resume to match the job. You can select different templates and formats to suit your experience level, ensuring your resume aligns with the role you're targeting.</p>
            </li>
            <li>
              <strong>Highlight Your UltraAura Certifications</strong>
              <p>If you've earned certifications through UltraAura, our AI resume builder automatically highlights them in a way that makes them stand out to employers. Certifications are often key differentiators, so the AI ensures they are prominently displayed, giving you an edge over other applicants.</p>
            </li>
            <li>
              <strong>Instant Feedback and Optimization</strong>
              <p>The AI reviews your resume in real-time, providing instant feedback on how you can improve it. This includes recommendations for:</p>
              <ul>
                <li>Improving Clarity: Ensuring your qualifications are clear and concise.</li>
                <li>Enhancing Action Verbs: Using impactful verbs that demonstrate your responsibilities and achievements.</li>
                <li>Keyword Optimization: Aligning your resume with common industry keywords that employers search for, increasing your chances of being noticed by Applicant Tracking Systems (ATS).</li>
              </ul>
            </li>
            <li>
              <strong>Time-Saving Automation</strong>
              <p>Building a resume from scratch can be time-consuming. With our AI tool, you simply input your details, and the system automatically generates a professional resume within minutes. You can edit and refine it as needed, but the bulk of the work is done for you.</p>
            </li>
          </ol>
        </Section>

        <Section>
          <h2>How It Works</h2>
          <ol>
            <li>
              <strong>Input Your Information</strong>
              <p>Begin by providing your personal details, including work history, skills, certifications, and education. The AI will guide you through each section, ensuring no critical information is missed.</p>
            </li>
            <li>
              <strong>Select a Template</strong>
              <p>Choose from a variety of professionally designed resume templates, all optimized for the plumbing industry. Each template is crafted to make your resume visually appealing while maintaining a professional tone.</p>
            </li>
            <li>
              <strong>Customize Your Resume</strong>
              <p>The AI will suggest content tailored to the job you're applying for. You can add or remove information, adjust the format, and make any other modifications to ensure your resume reflects your strengths and expertise.</p>
            </li>
            <li>
              <strong>Download and Share</strong>
              <p>Once you're satisfied with your resume, you can download it in multiple formats (PDF, Word, etc.) and start applying to jobs. The AI also ensures your resume is optimized for digital sharing and submission through job portals.</p>
            </li>
          </ol>
        </Section>

        <Section>
          <h2>Key Features of UltraAura's AI Resume Builder</h2>
          <ul>
            <li><strong>Tailored for Plumbing Professionals:</strong> Built specifically with the plumbing industry in mind, ensuring the right skills, certifications, and experiences are highlighted.</li>
            <li><strong>Easy to Use:</strong> No need for advanced technical skills. The tool is user-friendly and intuitive, guiding you step-by-step through the process.</li>
            <li><strong>Multiple Languages:</strong> Serving a global audience, the AI resume builder offers multi-language support to create resumes in your preferred language.</li>
            <li><strong>ATS Compatibility:</strong> Many employers use Applicant Tracking Systems (ATS) to scan resumes. Our AI ensures that your resume is optimized with keywords and formatting that increases the likelihood of passing these systems.</li>
          </ul>
        </Section>

        <Section>
          <h2>Resume Tips from the AI Tool</h2>
          <p>In addition to building a resume, UltraAura's AI tool offers useful tips and guidance, such as:</p>
          <ul>
            <li><strong>Tailor to the Job:</strong> It suggests specific adjustments to make your resume more relevant to the job description, such as adding relevant project experience or technical skills.</li>
            <li><strong>Emphasize Achievements:</strong> Rather than listing tasks, the AI encourages you to focus on achievements that demonstrate impact (e.g., "Installed plumbing systems for a 200-unit residential project").</li>
            <li><strong>Keep It Concise:</strong> The AI reviews the length of your resume and recommends removing unnecessary details to keep it clear and concise, ideally one page for entry-level roles or two pages for more experienced candidates.</li>
          </ul>
        </Section>

        <Section>
          <h2>Advantages for UltraAura Students</h2>
          <p>Students enrolled at UltraAura get special access to the AI resume builder as part of their learning package. This includes:</p>
          <ul>
            <li><strong>Integration of Certifications:</strong> Any certifications earned through UltraAura are automatically added to your resume.</li>
            <li><strong>Resume Templates for Plumbing Roles:</strong> Specific templates tailored for plumbing-related jobs, ensuring your resume looks professional and industry-specific.</li>
            <li><strong>Exclusive Tips:</strong> The AI tool offers tips and suggestions tailored to students transitioning from training to employment, helping you showcase your new skills and certifications.</li>
          </ul>
        </Section>

        <Section>
          <h2>Real-Life Impact</h2>
          <p>Our AI resume builder has already helped many UltraAura students land their first jobs or advance in their careers. By focusing on the skills and certifications employers want, students have been able to secure roles faster and with more confidence. Whether you're entering the industry or looking to move up, a strong, well-crafted resume is your key to success.</p>
        </Section>

        <Section>
          <h2>Get Started with UltraAura's AI Resume Builder</h2>
          <p>Ready to take the next step in your career? Try UltraAura's AI Resume Builder and create a professional resume in just a few minutes. Stand out in the competitive plumbing job market with a resume that showcases your skills, certifications, and experience.</p>
          <p>Visit <a href="http://www.ultraaura.education">www.ultraaura.education</a> to get started, or contact us at <a href="mailto:info@ultraaura.education">info@ultraaura.education</a> for more information.</p>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default AIResumePage;