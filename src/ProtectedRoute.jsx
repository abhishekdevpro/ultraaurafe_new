// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// // This checks if the user is authenticated
// const ProtectedRoute = () => {
//   const isAuthenticated = !!localStorage.getItem('token') || localStorage.getItem('adminToken') || localStorage.getItem('vendorToken') || localStorage.getItem('trainerToken'); // Check for token

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = () => {
  const navigate = useNavigate();

  // Function to check authentication and handle token validity
  const checkAuthentication = () => {
    const tokens = [
      'token',
      'adminToken',
      'vendorToken',
      'trainerToken'
    ];

    return tokens.some(tokenKey => !!localStorage.getItem(tokenKey));
  };

  // Interceptor to handle 401 errors globally
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          // Clear all authentication tokens
          ['token', 'adminToken', 'vendorToken', 'trainerToken'].forEach(tokenKey => {
            localStorage.removeItem(tokenKey);
          });

          // Redirect to login page
          navigate('/login', { 
            state: { 
              message: 'Your session has expired. Please log in again.',
              reason: error.response.data?.message || 'Unauthorized access'
            }
          });
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptor on component unmount
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [navigate]);

  // Check authentication status
  const isAuthenticated = checkAuthentication();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;