import React, { useState } from "react";
import { AuthContext } from "../../Context/context";

export default function AuthProvider({ children }) {
  const getInitialAuthState = () => {
    const isAuthenticated = localStorage.getItem("isAuth");
    
    return isAuthenticated === "true";
  };

  const [isAuth, setIsAuth] = useState(getInitialAuthState);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
