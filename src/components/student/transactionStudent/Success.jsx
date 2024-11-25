import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse the query parameter
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get('s'); // Get the value of 's'
  const backToHome = () => {
    navigate("/home")

  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={backToHome}
        style={{
          borderRadius: '15px',
          color: 'purple',
          backgroundColor: 'white',
          outline: 'none',
          // border: 'none',
          fontSize: '18px',
          marginBottom:'20px',
          padding:'5px',
          
        }}
      >Back to home</button>
      {status === 'success' ? (
        <div style={{ color: 'green', fontSize: '24px' }}>
          🎉 Payment Successful! Thank you for your purchase.
        </div>
      ) : status === 'failure' ? (
        <div style={{ color: 'red', fontSize: '24px' }}>
          ❌ Payment Failed. Please try again.
        </div>
      ) : (
        <div style={{ fontSize: '20px' }}>🔄 Processing...</div>
      )}
    </div>
  );
}

export default Success