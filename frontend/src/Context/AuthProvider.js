import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of the token in local storage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Convert token to boolean
  }, []);

  const login = (token) => {
    // Set the token in local storage
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
