import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export const AdminRoute = ({ children }) => {
    const auth = useAuth();
  return (
    auth.user ? children : <Navigate to='/' replace />
  )
}
