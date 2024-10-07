import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// This checks if the user is authenticated
const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem('token') || localStorage.getItem('adminToken') || localStorage.getItem('vendorToken') || localStorage.getItem('trainerToken'); // Check for token

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
