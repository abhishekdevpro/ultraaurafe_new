// // import React, { useState, useEffect } from "react";
// // import { Link, useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import styled from 'styled-components';
// // import StudentHeader from "../header";
// // import Footer from "../../footer";
// // import StudentSidebar from "../sidebar";

// // const PageWrapper = styled.div`
// //   .breadcrumb-bar {
// //     background-color: #f8f9fa;
// //     padding: 15px 0;
// //     margin:auto;
// //   }

// //   .page-content {
// //     padding: 30px 0;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     min-height: calc(100vh - 200px);
// //   }

// //   .card-details {
// //     background: white;
// //     border-radius: 8px;
// //     box-shadow: 0 0 10px rgba(0,0,0,0.1);
// //     padding: 20px;
// //     width: 100%;
// //     max-width: 800px;
// //   }

// //   .profile-heading {
// //     margin-bottom: 20px;
// //   }

// //   .question-container {
// //     margin-bottom: 20px;
// //   }

// //   .option-button {
// //     display: block;
// //     width: 100%;
// //     padding: 10px;
// //     margin-bottom: 10px;
// //     background-color: #f1f3f5;
// //     border: 2px solid #f1f3f5;
// //     border-radius: 4px;
// //     text-align: left;
// //     cursor: pointer;
// //     transition: all 0.3s;

// //     &:hover {
// //       background-color: #e9ecef;
// //     }

// //     &.selected {
// //       background-color: #e7f5ff;
// //       border-color: #339af0;
// //       color: #1971c2;
// //       font-weight: bold;
// //     }
// //   }

// //   .navigation-buttons {
// //     display: flex;
// //     justify-content: space-between;
// //     margin-top: 20px;
// //   }

// //   .nav-button {
// //     padding: 10px 20px;
// //     background-color: #007bff;
// //     color: white;
// //     border: none;
// //     border-radius: 4px;
// //     cursor: pointer;
// //     transition: background-color 0.3s;

// //     &:hover {
// //       background-color: #0056b3;
// //     }

// //     &:disabled {
// //       background-color: #cccccc;
// //       cursor: not-allowed;
// //     }
// //   }
// // `;

// // const LoaderWrapper = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 200px;
// // `;

// // const Toast = styled.div`
// //   position: fixed;
// //   top: 20px;
// //   right: 20px;
// //   background-color: #28a745;
// //   color: white;
// //   padding: 15px 20px;
// //   border-radius: 4px;
// //   z-index: 1000;
// //   opacity: ${props => props.show ? 1 : 0};
// //   transition: opacity 0.3s ease-in-out;
// // `;

// // const ModalOverlay = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   background-color: rgba(0, 0, 0, 0.5);
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   z-index: 1000;
// // `;

// // const ModalContent = styled.div`
// //   background-color: white;
// //   padding: 20px;
// //   border-radius: 8px;
// //   max-width: 500px;
// //   width: 100%;
// //   max-height: 80vh;
// //   overflow-y: auto;
// // `;

// // const ModalHeader = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   margin-bottom: 20px;
// // `;

// // const CloseButton = styled.button`
// //   background: none;
// //   border: none;
// //   font-size: 1.5rem;
// //   cursor: pointer;
// // `;

// // const ResultItem = styled.div`
// //   margin-bottom: 15px;
// //   padding: 10px;
// //   border-radius: 4px;
// //   background-color: ${props => props.correct ? '#d4edda' : '#f8d7da'};
// // `;

// // const PercentageBar = styled.div`
// //   width: 100%;
// //   height: 20px;
// //   background-color: #e9ecef;
// //   border-radius: 10px;
// //   margin-top: 10px;
// // `;

// // const PercentageFill = styled.div`
// //   width: ${props => props.percentage}%;
// //   height: 100%;
// //   background-color: #007bff;
// //   border-radius: 10px;
// //   transition: width 0.5s ease-in-out;
// // `;
// // // ... (keep other styled components as they are)

// // const SkillTest = () => {
// //   const [skillData, setSkillData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedAnswers, setSelectedAnswers] = useState({});
// //   const [showToast, setShowToast] = useState(false);
// //   const [showModal, setShowModal] = useState(false);
// //   const [testResults, setTestResults] = useState(null);
// //   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
// //   const navigate = useNavigate();

// //   const { courseid, coursetitle } = useParams();

// //   useEffect(() => {
// //     const fetchSkillData = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axios.get(
// //           `https://api.novajobs.us/api/students/skill-assessment?skill_id=${courseid}&skill_name=${encodeURIComponent(coursetitle)}`,
// //           {
// //             headers: {
// //               Authorization: `${token}`,
// //             },
// //           }
// //         );
// //         setSkillData(response.data.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Failed to fetch skill data");
// //         setLoading(false);
// //       }
// //     };

// //     fetchSkillData();
// //   }, [courseid, coursetitle]);

// //   useEffect(() => {
// //     if (!loading && skillData) {
// //       const timer = setInterval(() => {
// //         setTimeLeft((prevTime) => {
// //           if (prevTime <= 1) {
// //             clearInterval(timer);
// //             handleSubmit();
// //             return 0;
// //           }
// //           return prevTime - 1;
// //         });
// //       }, 1000);

// //       return () => clearInterval(timer);
// //     }
// //   }, [loading, skillData]);

// //   const handleOptionSelect = (questionIndex, option) => {
// //     setSelectedAnswers({
// //       ...selectedAnswers,
// //       [questionIndex]: option,
// //     });
// //   };

// //   const handlePrevious = () => {
// //     if (currentQuestionIndex > 0) {
// //       setCurrentQuestionIndex(currentQuestionIndex - 1);
// //     }
// //   };

// //   const handleNext = () => {
// //     if (currentQuestionIndex < skillData.questions.length - 1) {
// //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// //     }
// //   };

// //   const handleSubmit = async (event) => {
// //     if (event) event.preventDefault();
// //     try {
// //       const token = localStorage.getItem('token');
// //       const updatedQuestions = skillData.questions.map((question, index) => ({
// //         ...question,
// //         user_answer: selectedAnswers[index] || "",
// //       }));

// //       const submissionData = {
// //         ...skillData,
// //         questions: updatedQuestions,
// //       };

// //       const response = await axios.put(
// //         `https://api.novajobs.us/api/students/skill-assessment/${skillData.skill_assessment_id}`,
// //         submissionData,
// //         {
// //           headers: {
// //             Authorization: `${token}`,
// //           },
// //         }
// //       );
// //       setTestResults(response.data.data.results);
// //       setShowToast(true);
// //       setTimeout(() => setShowToast(false), 3000);
// //       setShowModal(true);
// //     } catch (err) {
// //       console.error("Error submitting test:", err);
// //       alert("Failed to submit test. Please try again.");
// //     }
// //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //     navigate('/student-dashboard'); // Redirect to dashboard after closing modal
// //   };

// //   const formatTime = (seconds) => {
// //     const minutes = Math.floor(seconds / 60);
// //     const remainingSeconds = seconds % 60;
// //     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// //   };

// //   return (
// //     <PageWrapper timeLeft={timeLeft}>
// //       <div className="main-wrapper">
// //         <StudentHeader activeMenu={"Skill Test"} />
// //         <div className="breadcrumb-bar breadcrumb-bar-info">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-md-12 col-12">
// //                 <div className="breadcrumb-list">
// //                   <h2 className="breadcrumb-title">Skill Test: {skillData?.skill_name || 'Loading...'}</h2>
// //                   <nav aria-label="breadcrumb" className="page-breadcrumb">
// //                     <ol className="breadcrumb">
// //                       <li className="breadcrumb-item">
// //                         <Link to="/home">Home</Link>
// //                       </li>
// //                       <li className="breadcrumb-item active" aria-current="page">
// //                         Skill Test
// //                       </li>
// //                     </ol>
// //                   </nav>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="page-content">
// //           <div className="container">
// //             <div className="row">
// //             <StudentSidebar />
// //             <div className="card-details">
// //               <div className="settings-menu p-0">
// //                 <div className="profile-heading">
// //                   <h3>Skill Test: {skillData?.skill_name || 'Loading...'}</h3>
// //                   <div className="timer">Time Left: {formatTime(timeLeft)}</div>
// //                 </div>
// //                 {loading ? (
// //                   <LoaderWrapper>
// //                     <div>Loading...</div>
// //                   </LoaderWrapper>
// //                 ) : error ? (
// //                   <div>{error}</div>
// //                 ) : skillData ? (
// //                   <form onSubmit={handleSubmit}>
// //                     <div className="progress-bar">
// //                       <div
// //                         className="progress-fill"
// //                         style={{ width: `${((currentQuestionIndex + 1) / skillData.questions.length) * 100}%` }}
// //                       />
// //                     </div>
// //                     <div className="question-container">
// //                       <h5>{`${currentQuestionIndex + 1}. ${skillData.questions[currentQuestionIndex].question}`}</h5>
// //                       {skillData.questions[currentQuestionIndex].options.map((option, optionIndex) => (
// //                         <button
// //                           key={optionIndex}
// //                           type="button"
// //                           className={`option-button ${selectedAnswers[currentQuestionIndex] === option ? 'selected' : ''}`}
// //                           onClick={() => handleOptionSelect(currentQuestionIndex, option)}
// //                         >
// //                           {option}
// //                         </button>
// //                       ))}
// //                     </div>
// //                     <div className="navigation-buttons">
// //                       <button
// //                         type="button"
// //                         className="nav-button"
// //                         onClick={handlePrevious}
// //                         disabled={currentQuestionIndex === 0}
// //                       >
// //                         Previous
// //                       </button>
// //                       {currentQuestionIndex === skillData.questions.length - 1 ? (
// //                         <button type="submit" className="nav-button">
// //                           Submit Test
// //                         </button>
// //                       ) : (
// //                         <button
// //                           type="button"
// //                           className="nav-button"
// //                           onClick={handleNext}
// //                           disabled={currentQuestionIndex === skillData.questions.length - 1}
// //                         >
// //                           Next
// //                         </button>
// //                       )}
// //                     </div>
// //                   </form>
// //                 ) : (
// //                   <div>No skill data available</div>
// //                 )}
// //               </div>
// //             </div>
// //             </div>
// //           </div>
// //         </div>
// //         <Footer />
// //       </div>

// //       <Toast show={showToast}>
// //         Test submitted successfully!
// //       </Toast>

// //       {showModal && testResults && (
// //         <ModalOverlay>
// //           <ModalContent>
// //             <ModalHeader>
// //               <h3>Test Results</h3>
// //               <CloseButton onClick={closeModal}>&times;</CloseButton>
// //             </ModalHeader>
// //             <ResultItem type="right">
// //               <h5>Correct Answers: {testResults.right_answer}</h5>
// //             </ResultItem>
// //             <ResultItem type="wrong">
// //               <h5>Incorrect Answers: {testResults.wrong_answer}</h5>
// //             </ResultItem>
// //             <p>Total Questions: {testResults.total_question}</p>
// //             <p>Percentage: {parseFloat(testResults.Percentage).toFixed(2)}%</p>
// //             <PercentageBar>
// //               <PercentageFill percentage={parseFloat(testResults.Percentage)} />
// //             </PercentageBar>
// //             {!skillData.is_verified && (
// //               <p style={{marginTop: '20px', color: '#dc3545'}}>
// //                 Your skill is not yet verified. Please complete the verification process.
// //               </p>
// //             )}
// //           </ModalContent>
// //         </ModalOverlay>
// //       )}
// //     </PageWrapper>
// //   );
// // };

// // export default SkillTest;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Modal, Button } from 'react-bootstrap';
// import StudentHeader from '../header';
// import StudentSidebar from '../sidebar';
// import Footer from '../../footer';

// const PageWrapper = styled.div`
//   .timer {
//     font-size: 18px;
//     font-weight: bold;
//     color: ${props => props.timeLeft < 60 ? '#dc3545' : '#333'};
//   }
// `;

// const LoaderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
// `;

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalContent = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 5px;
//   max-width: 500px;
//   width: 90%;
// `;

// const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
// `;

// const ResultItem = styled.div`
//   margin: 10px 0;
//   padding: 10px;
//   border-radius: 5px;
//   background-color: ${props => props.type === 'right' ? '#d4edda' : '#f8d7da'};
//   color: ${props => props.type === 'right' ? '#155724' : '#721c24'};
// `;

// const PercentageBar = styled.div`
//   width: 100%;
//   height: 20px;
//   background-color: #e9ecef;
//   border-radius: 10px;
//   overflow: hidden;
//   margin-top: 10px;
// `;

// const PercentageFill = styled.div`
//   width: ${props => props.percentage}%;
//   height: 100%;
//   background-color: ${props =>
//     props.percentage >= 70 ? '#28a745' :
//     props.percentage >= 40 ? '#ffc107' :
//     '#dc3545'
//   };
//   transition: width 0.5s ease-in-out;
// `;

// const Toast = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   background-color: #28a745;
//   color: white;
//   padding: 15px 20px;
//   border-radius: 5px;
//   display: ${props => props.show ? 'block' : 'none'};
//   z-index: 1000;
// `;

// const InstructionModal = styled(Modal)`
//   .modal-content {
//     border-radius: 10px;

//     .modal-header {
//       border-bottom: 1px solid #e5e5e5;
//       padding: 20px;

//       h5 {
//         font-weight: 600;
//         margin-bottom: 0;
//       }
//     }

//     .modal-body {
//       padding: 20px;

//       ol {
//         margin-left: 20px;
//         li {
//           margin-bottom: 10px;
//         }
//       }
//     }

//     .modal-footer {
//       border-top: 1px solid #e5e5e5;
//       padding: 15px 20px;

//       button {
//         min-width: 100px;
//       }
//     }
//   }
// `;

// const SkillTest = () => {
//   const [showInstructions, setShowInstructions] = useState(true);
//   const [skillData, setSkillData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showToast, setShowToast] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [testResults, setTestResults] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
//   const navigate = useNavigate();

//   const { courseid, coursetitle } = useParams();

//   const handleStartTest = () => {
//     setShowInstructions(false);
//   };

//   useEffect(() => {
//     const fetchSkillData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `https://api.novajobs.us/api/students/skill-assessment?skill_id=${courseid}&skill_name=${encodeURIComponent(coursetitle)}`,
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
//   }, [courseid, coursetitle]);

//   useEffect(() => {
//     if (!loading && skillData && !showInstructions) {
//       const timer = setInterval(() => {
//         setTimeLeft((prevTime) => {
//           if (prevTime <= 1) {
//             clearInterval(timer);
//             handleSubmit();
//             return 0;
//           }
//           return prevTime - 1;
//         });
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [loading, skillData, showInstructions]);

//   const handleOptionSelect = (questionIndex, option) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [questionIndex]: option,
//     });
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < skillData.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handleSubmit = async (event) => {
//     if (event) event.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const updatedQuestions = skillData.questions.map((question, index) => ({
//         ...question,
//         user_answer: selectedAnswers[index] || "",
//       }));

//       const submissionData = {
//         ...skillData,
//         questions: updatedQuestions,
//       };

//       const response = await axios.put(
//         `https://api.novajobs.us/api/students/skill-assessment/${skillData.skill_assessment_id}`,
//         submissionData,
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//         }
//       );
//       setTestResults(response.data.data.results);
//       setShowToast(true);
//       setTimeout(() => setShowToast(false), 3000);
//       setShowModal(true);
//     } catch (err) {
//       console.error("Error submitting test:", err);
//       alert("Failed to submit test. Please try again.");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     navigate('/student/student-dashboard');
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <PageWrapper timeLeft={timeLeft}>
//       <InstructionModal
//         show={showInstructions}
//         backdrop="static"
//         keyboard={false}
//         centered
//       >
//         <Modal.Header>
//           <Modal.Title>Test Instructions for {skillData?.skill_name || 'Skill Assessment'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Following instructions are common for all job seekers.</p>
//           <ol>
//             <li>The duration of the test is 10 minutes*.</li>
//             <li>This test consists of 15* multiple-choice questions.</li>
//             <li>You may attempt the questions in any order.</li>
//             <li>Please select the correct answer for each question.</li>
//             <li>Please click skip if you wish to skip a question.</li>
//             <li>You may come back and answer skipped questions later.</li>
//             <li>Please click on the Submit Assessment button after answering all the questions.</li>
//             <li>Do not close the window before submitting the test.</li>
//             <li>Tests will be automatically submitted after the given time limit.</li>
//           </ol>
//           <p>*Your answer gets automatically submitted after 20 minutes.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => navigate('/student/student-dashboard')}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleStartTest}>
//             Take Test
//           </Button>
//         </Modal.Footer>
//       </InstructionModal>

//       <div className="main-wrapper">
//         <StudentHeader activeMenu={"Skill Test"} />
//         <div className="breadcrumb-bar breadcrumb-bar-info">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-12">
//                 <div className="breadcrumb-list">
//                   <h2 className="breadcrumb-title">Skill Test: {skillData?.skill_name || 'Loading...'}</h2>
//                   <nav aria-label="breadcrumb" className="page-breadcrumb">
//                     <ol className="breadcrumb">
//                       <li className="breadcrumb-item">
//                         <Link to="/home">Home</Link>
//                       </li>
//                       <li className="breadcrumb-item active" aria-current="page">
//                         Skill Test
//                       </li>
//                     </ol>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="page-content">
//           <div className="container">
//             <div className="row">
//               <StudentSidebar />
//               <div className="col-xl-9 col-md-8">
//                 <div className="settings-widget profile-details">
//                   <div className="settings-menu p-0">
//                     <div className="profile-heading d-flex justify-content-between align-items-center">
//                       <h3>Skill Test: {skillData?.skill_name || 'Loading...'}</h3>
//                       <div className="timer">Time Left: {formatTime(timeLeft)}</div>
//                     </div>
//                     {loading ? (
//                       <LoaderWrapper>
//                         <div>Loading...</div>
//                       </LoaderWrapper>
//                     ) : error ? (
//                       <div>{error}</div>
//                     ) : skillData ? (
//                       <form onSubmit={handleSubmit}>
//                         <div className="progress mb-4">
//                           <div
//                             className="progress-bar"
//                             role="progressbar"
//                             style={{ width: `${((currentQuestionIndex + 1) / skillData.questions.length) * 100}%` }}
//                             aria-valuenow={((currentQuestionIndex + 1) / skillData.questions.length) * 100}
//                             aria-valuemin="0"
//                             aria-valuemax="100"
//                           />
//                         </div>
//                         <div className="card">
//                           <div className="card-body">
//                             <h5>{`${currentQuestionIndex + 1}. ${skillData.questions[currentQuestionIndex].question}`}</h5>
//                             <div className="list-group mt-3">
//                               {skillData.questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                                 <button
//                                   key={optionIndex}
//                                   type="button"
//                                   className={`list-group-item list-group-item-action ${selectedAnswers[currentQuestionIndex] === option ? 'active' : ''}`}
//                                   onClick={() => handleOptionSelect(currentQuestionIndex, option)}
//                                 >
//                                   {option}
//                                 </button>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="d-flex justify-content-between mt-4">
//                           <button
//                             type="button"
//                             className="btn btn-secondary"
//                             onClick={handlePrevious}
//                             disabled={currentQuestionIndex === 0}
//                           >
//                             Previous
//                           </button>
//                           {currentQuestionIndex === skillData.questions.length - 1 ? (
//                             <button type="submit" className="btn btn-primary">
//                               Submit Test
//                             </button>
//                           ) : (
//                             <button
//                               type="button"
//                               className="btn btn-primary"
//                               onClick={handleNext}
//                             >
//                               Next
//                             </button>
//                           )}
//                         </div>
//                       </form>
//                     ) : (
//                       <div>No skill data available</div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>

//       <Toast show={showToast}>
//         Test submitted successfully!
//       </Toast>

//       {showModal && testResults && (
//         <ModalOverlay>
//           <ModalContent>
//             <ModalHeader>
//               <h3>Test Results</h3>
//               <CloseButton onClick={closeModal}>&times;</CloseButton>
//             </ModalHeader>
//             <ResultItem type="right">
//               <h5>Correct Answers: {testResults.right_answer}</h5>
//             </ResultItem>
//             <ResultItem type="wrong">
//               <h5>Incorrect Answers: {testResults.wrong_answer}</h5>
//             </ResultItem>
//             <p>Total Questions: {testResults.total_question}</p>
//             <p>Percentage: {parseFloat(testResults.Percentage).toFixed(2)}%</p>
//             <PercentageBar>
//               <PercentageFill percentage={parseFloat(testResults.Percentage)} />
//             </PercentageBar>
//             {!skillData.is_verified && (
//               <p style={{marginTop: '20px', color: '#dc3545'}}>
//                 Your skill is not yet verified. Please complete the verification process.
//               </p>
//             )}
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </PageWrapper>
//   );
// };

// export default SkillTest;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Modal, Button, ProgressBar } from "react-bootstrap";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Footer from "../../footer";

const PageWrapper = styled.div`
  .timer {
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => (props.timeLeft < 60 ? "#dc3545" : "#333")};
  }
`;

const StyledCard = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  background-color: #f8f9fa;
  padding: 15px 20px;
  border-bottom: 1px solid #e9ecef;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const OptionButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: ${(props) => (props.selected ? "#007bff" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#0056b3" : "#f8f9fa")};
  }
`;

const NavigationButton = styled(Button)`
  min-width: 100px;
`;

const ResultModal = styled(Modal)`
  .modal-content {
    border-radius: 8px;
  }
`;

const ResultItem = styled.div`
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.type === "right" ? "#d4edda" : "#f8d7da"};
  color: ${(props) => (props.type === "right" ? "#155724" : "#721c24")};
`;

const PercentageBar = styled(ProgressBar)`
  height: 20px;
  margin-top: 15px;
`;

const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 1000;
`;

const SkillTest = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const navigate = useNavigate();

  const { courseid, coursetitle } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // const section = queryParams.get("section");
  const section = parseInt(queryParams.get("section"), 10); // ✅ returns a number

  const handleStartTest = () => {
    setShowInstructions(false);
  };

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://api.novajobs.us/api/students/skill-assessment?skill_id=${courseid}&skill_name=${encodeURIComponent(
            coursetitle
          )}`,
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

  useEffect(() => {
    if (!loading && skillData && !showInstructions) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [loading, skillData, showInstructions]);

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

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const updatedQuestions = skillData.questions.map((question, index) => ({
        ...question,
        user_answer: selectedAnswers[index] || "",
      }));

      const submissionData = {
        ...skillData,
        questions: updatedQuestions,
      };

      const response = await axios.put(
        `https://api.novajobs.us/api/students/skill-assessment/${skillData.skill_assessment_id}?course_id=${courseid}`,
        {
          ...submissionData,
          section_id: section,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
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
    navigate("/student/student-dashboard");
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <PageWrapper timeLeft={timeLeft}>
      <Modal
        show={showInstructions}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>
            Test Instructions for {skillData?.skill_name || "Skill Assessment"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Following instructions are common for all job seekers.</p>
          <ol>
            <li>The duration of the test is 10 minutes*.</li>
            <li>This test consists of 15* multiple-choice questions.</li>
            <li>You may attempt the questions in any order.</li>
            <li>Please select the correct answer for each question.</li>
            <li>
              You may come back and change your answers before submitting.
            </li>
            <li>
              Please click on the Submit Test button after answering all the
              questions.
            </li>
            <li>Do not close the window before submitting the test.</li>
            <li>
              The test will be automatically submitted after the given time
              limit.
            </li>
          </ol>
          <p>*Your answers will be automatically submitted after 10 minutes.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => navigate("/student/student-dashboard")}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleStartTest}>
            Start Test
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="main-wrapper">
        <StudentHeader activeMenu={"Skill Test"} />
        <div className="breadcrumb-bar breadcrumb-bar-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <h2 className="breadcrumb-title">
                    Skill Test: {skillData?.skill_name || "Loading..."}
                  </h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
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
            <div className="row">
              <StudentSidebar />
              <div className="col-xl-9 col-md-8">
                <StyledCard>
                  <CardHeader className="d-flex justify-content-between align-items-center">
                    <h3 className="mb-0">
                      Skill Test: {skillData?.skill_name || "Loading..."}
                    </h3>
                    <div className="timer">
                      Time Left: {formatTime(timeLeft)}
                    </div>
                  </CardHeader>
                  <CardBody>
                    {loading ? (
                      <div className="text-center">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : error ? (
                      <div className="alert alert-danger">{error}</div>
                    ) : skillData ? (
                      <>
                        <ProgressBar
                          now={
                            ((currentQuestionIndex + 1) /
                              skillData.questions.length) *
                            100
                          }
                          className="mb-4"
                        />
                        <h5>{`${currentQuestionIndex + 1}. ${
                          skillData.questions[currentQuestionIndex].question
                        }`}</h5>
                        <div className="mt-3">
                          {skillData.questions[
                            currentQuestionIndex
                          ].options.map((option, optionIndex) => (
                            <OptionButton
                              key={optionIndex}
                              type="button"
                              selected={
                                selectedAnswers[currentQuestionIndex] === option
                              }
                              onClick={() =>
                                handleOptionSelect(currentQuestionIndex, option)
                              }
                            >
                              {option}
                            </OptionButton>
                          ))}
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                          <NavigationButton
                            variant="secondary"
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                          >
                            Previous
                          </NavigationButton>
                          {currentQuestionIndex ===
                          skillData.questions.length - 1 ? (
                            <NavigationButton
                              variant="primary"
                              onClick={handleSubmit}
                            >
                              Submit Test
                            </NavigationButton>
                          ) : (
                            <NavigationButton
                              variant="primary"
                              onClick={handleNext}
                            >
                              Next
                            </NavigationButton>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="alert alert-info">
                        No skill data available
                      </div>
                    )}
                  </CardBody>
                </StyledCard>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <Toast show={showToast}>Test submitted successfully!</Toast>

      <ResultModal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Test Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {testResults && (
            <>
              <ResultItem type="right">
                <h5>Correct Answers: {testResults.right_answer}</h5>
              </ResultItem>
              <ResultItem type="wrong">
                <h5>Incorrect Answers: {testResults.wrong_answer}</h5>
              </ResultItem>
              <p>Total Questions: {testResults.total_question}</p>
              <p>
                Percentage: {parseFloat(testResults.Percentage).toFixed(2)}%
              </p>
              <PercentageBar
                now={parseFloat(testResults.Percentage)}
                label={`${parseFloat(testResults.Percentage).toFixed(2)}%`}
                variant={
                  parseFloat(testResults.Percentage) >= 70
                    ? "success"
                    : parseFloat(testResults.Percentage) >= 40
                    ? "warning"
                    : "danger"
                }
              />
              {!skillData.is_verified && (
                <div className="alert alert-warning mt-3">
                  Your skill is not yet verified. Please complete the
                  verification process.
                </div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </ResultModal>
    </PageWrapper>
  );
};

export default SkillTest;
