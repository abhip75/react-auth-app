import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    useEffect(() => {
      if (!isAuthenticated && !isLoading) {
        loginWithRedirect();
      }
    }, [isAuthenticated, isLoading, loginWithRedirect]);

   if(isAuthenticated){
    return <Navigate to="/home"/>;
   }

   return null;
}

export default Login;