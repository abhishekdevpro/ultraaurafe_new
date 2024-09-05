import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import StudentHeader from "../header";
import Footer from "../../footer";

const PageWrapper = styled.div`
  .breadcrumb-bar {
    background-color: #f8f9fa;
    padding: 15px 0;
    margin:auto;
  }

  .page-content {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 200px);
  }

  .card-details {
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    padding: 20px;
    width: 100%;
    max-width: 800px;
  }

  .profile-heading {
    margin-bottom: 20px;
  }

  .question-container {
    margin-bottom: 20px;
  }

  .option-button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f1f3f5;
    border: 2px solid #f1f3f5;
    border-radius: 4px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #e9ecef;
    }

    &.selected {
      background-color: #e7f5ff;
      border-color: #339af0;
      color: #1971c2;
      font-weight: bold;
    }
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .nav-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Toast = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 15px 20px;
  border-radius: 4px;
  z-index: 1000;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ResultItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${props => props.correct ? '#d4edda' : '#f8d7da'};
`;

const PercentageBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e9ecef;
  border-radius: 10px;
  margin-top: 10px;
`;

const PercentageFill = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #007bff;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
`;


const SkillTest = () => {
  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [testResults, setTestResults] = useState(null);


  const { courseid, coursetitle } = useParams();
   console.log(coursetitle,"ct")
  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `https://api.novajobs.us/api/students/skill-assessment?skill_id=${courseid}&skill_name=${encodeURIComponent(coursetitle)}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setSkillData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch skill data");
        setLoading(false);
      }
    };

    fetchSkillData();
  }, [courseid, coursetitle]);

//   useEffect(() => {
//     const fetchSkillData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           "https://api.novajobs.us/api/students/skill-assessment?skill_id=1&skill_name=intorduction of java",
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );
//         setSkillData(response.data.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch skill data");
//         setLoading(false);
//       }
//     };

//     fetchSkillData();
//   }, []);

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < skillData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const updatedQuestions = skillData.questions.map((question, index) => ({
        ...question,
        user_answer: selectedAnswers[index] || "",
      }));

      const submissionData = {
        ...skillData,
        questions: updatedQuestions,
      };

      const response = await axios.put(
        `https://api.novajobs.us/api/students/skill-assessment/${skillData.skill_assessment_id}`,
        submissionData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(response.data.data.results,"Test resuly")
      setTestResults(response.data.data.results);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setShowModal(true);
    } catch (err) {
      console.error("Error submitting test:", err);
      alert("Failed to submit test. Please try again.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <PageWrapper>
      <div className="main-wrapper">
        <StudentHeader activeMenu={"Skill Test"} />
        <div className="breadcrumb-bar breadcrumb-bar-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">Skill Test: {skillData?.skill_name || 'Loading...'}</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Skill Test
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="container">
            <div className="card-details">
              <div className="settings-menu p-0">
                <div className="profile-heading">
                  <h3>Skill Test: {skillData?.skill_name || 'Loading...'}</h3>
                </div>
                {loading ? (
                  <LoaderWrapper>
                    <div>Loading...</div>
                  </LoaderWrapper>
                ) : error ? (
                  <div>{error}</div>
                ) : skillData ? (
                  <form onSubmit={handleSubmit}>
                    <div className="question-container">
                      <h5>{`${currentQuestionIndex + 1}. ${skillData.questions[currentQuestionIndex].question}`}</h5>
                      {skillData.questions[currentQuestionIndex].options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          type="button"
                          className={`option-button ${selectedAnswers[currentQuestionIndex] === option ? 'selected' : ''}`}
                          onClick={() => handleOptionSelect(currentQuestionIndex, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <div className="navigation-buttons">
                      <button 
                        type="button" 
                        className="nav-button" 
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                      >
                        Previous
                      </button>
                      {currentQuestionIndex === skillData.questions.length - 1 ? (
                        <button type="submit" className="nav-button">
                          Submit Test
                        </button>
                      ) : (
                        <button 
                          type="button" 
                          className="nav-button" 
                          onClick={handleNext}
                          disabled={currentQuestionIndex === skillData.questions.length - 1}
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </form>
                ) : (
                  <div>No skill data available</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <Toast show={showToast}>
        Test submitted successfully!
      </Toast>

      {/* {showModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>Test Results</h3>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            {testResults && testResults.questions.map((question, index) => (
              <ResultItem key={index} correct={question.user_answer === question.correct_answer}>
                <h5>{`${index + 1}. ${question.total_question}`}</h5>
                <p>Your percentage: {question.Percentage}</p>
                <p>Correct answer: {question.right_answer}</p>
              </ResultItem>
            ))}
            <p>Total Score: {testResults ? testResults.questions.filter(q => q.user_answer === q.correct_answer).length : 0} / {testResults ? testResults.questions.length : 0}</p>
          </ModalContent>
        </ModalOverlay>
      )} */}
       {showModal && testResults && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>Test Results</h3>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            <ResultItem type="right">
              <h5>Correct Answers: {testResults.right_answer}</h5>
            </ResultItem>
            <ResultItem type="wrong">
              <h5>Incorrect Answers: {testResults.wrong_answer}</h5>
            </ResultItem>
            <p>Total Questions: {testResults.total_question}</p>
            <p>Percentage: {parseFloat(testResults.Percentage).toFixed(2)}%</p>
            <PercentageBar>
              <PercentageFill percentage={parseFloat(testResults.Percentage)} />
            </PercentageBar>
            {!skillData.is_verified && (
              <p style={{marginTop: '20px', color: '#dc3545'}}>
                Your skill is not yet verified. Please complete the verification process.
              </p>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default SkillTest;