import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  // Define supported token keys and their login routes
  const tokens = ['token', 'adminToken', 'vendorToken', 'trainerToken'];
  const loginRoutesMap = {
    token: '/login',
    adminToken: '/admin/login',
    vendorToken: '/partner-signin',
    trainerToken: '/trainer/login',
  };
  // Determine which token is currently present
  const tokenKey = tokens.find(key => !!localStorage.getItem(key));

  // Interceptor to handle 401 errors globally
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          // Capture which token expired
          const expiredKey = tokens.find(k => !!localStorage.getItem(k)) || 'token';
          // Clear all authentication tokens
          tokens.forEach(k => localStorage.removeItem(k));
          // Redirect to the appropriate login route
          navigate(loginRoutesMap[expiredKey] || '/login', {
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

  // Check authentication status based on existing token
  const isAuthenticated = Boolean(tokenKey);

  // Redirect unauthenticated users to their custom login route
  const loginRoute = loginRoutesMap[tokenKey] || '/login';
  return isAuthenticated ? <Outlet /> : <Navigate to={loginRoute} replace />;
};

export default ProtectedRoute;