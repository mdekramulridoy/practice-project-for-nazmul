import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [authInfo, setAuthInfo] = useState(null);
  const [loading, setLoading] = useState(true);   


  useEffect(() => {
    setTimeout(() => {
      setAuthInfo(null); 
      setLoading(false); 
    }, 100); 
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner">Loading...</div>
        </div>
      ) : (
        children 
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
