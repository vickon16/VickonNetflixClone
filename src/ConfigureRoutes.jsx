import React from 'react'
import { Navigate } from 'react-router-dom';
 
export const ProtectedRoutes = ({user, children, path}) => {
  if (user) {
    return children
  } else {
    return (
      <Navigate to={path} />
    )
  }
}