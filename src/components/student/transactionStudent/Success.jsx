// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';

// function Success() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Parse the query parameter
//   const queryParams = new URLSearchParams(location.search);
//   const status = queryParams.get('s'); // Get the value of 's'
//   const backToHome = () => {
//     navigate("/student/student-courses")

//   }
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <button
//         onClick={backToHome}
//         style={{
//           borderRadius: '15px',
//           color: 'purple',
//           backgroundColor: 'white',
//           outline: 'none',
//           // border: 'none',
//           fontSize: '18px',
//           marginBottom:'20px',
//           padding:'5px',
          
//         }}
//       >Start the courses </button>
//       {status === 'success' ? (
//         <div style={{ color: 'green', fontSize: '24px' }}>
//           🎉 Payment Successful! Thank you for your purchase.
//         </div>
//       ) : status === 'failure' ? (
//         <div style={{ color: 'red', fontSize: '24px' }}>
//           ❌ Payment Failed. Please try again.
//         </div>
//       ) : (
//         <div style={{ fontSize: '20px' }}>🔄 Processing...</div>
//       )}
//     </div>
//   );
// }

// export default Success

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: 30px;
  font-family: 'Roboto', sans-serif;
`;

const Button = styled.button`
  background-color: white;
  color: purple;
  padding: 12px 24px;
  border-radius: 15px;
  border: 2px solid purple;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: purple;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(128, 0, 128, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
  }
`;

const StatusMessage = styled.div`
  font-size: 24px;
  padding: 20px;
  border-radius: 10px;
  animation: fadeIn 0.5s ease-in;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${props => {
    if (props.status === 'success') return 'rgba(220, 255, 220, 0.7)';
    if (props.status === 'failure') return 'rgba(255, 220, 220, 0.7)';
    return 'rgba(240, 240, 240, 0.7)';
  }};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const SuccessIcon = styled.span`
  font-size: 32px;
  margin-right: 10px;
`;

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Parse the query parameter
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get('s'); // Get the value of 's'
  
  const backToHome = () => {
    navigate("/student/student-courses");
  };
  
  const getStatusContent = () => {
    if (status === 'success') {
      return (
        <StatusMessage status="success">
          <SuccessIcon>🎉</SuccessIcon>
          Payment Successful! Thank you for your purchase.
        </StatusMessage>
      );
    } else if (status === 'failure') {
      return (
        <StatusMessage status="failure">
          <SuccessIcon>❌</SuccessIcon>
          Payment Failed. Please try again.
        </StatusMessage>
      );
    } else {
      return (
        <StatusMessage>
          <SuccessIcon>🔄</SuccessIcon>
          Processing...
        </StatusMessage>
      );
    }
  };
  
  return (
    <Container>
      <Button onClick={backToHome}>
        Start the courses
      </Button>
      {getStatusContent()}
    </Container>
  );
}

export default Success;