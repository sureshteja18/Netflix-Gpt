import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const user = useSelector((store) => store.user);
  const location = useLocation()
  if(!user){
    return <Navigate to='/' state={{from: location}}/>
  }
  return element
};

export default ProtectedRoute;