import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const authContext = createContext(null);

function useAuth() {
  const authContextValue = useContext(authContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of provider");
  }
  return authContextValue;
}

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [entries, setEntries] = useState(null);
  let isLoggedIn = !!token;

  function storeToken(token) {
    setToken(token);
    return localStorage.setItem("token", token);
  }

  function logOut() {
    setToken("");
    return localStorage.removeItem("token");
  }

  return (
    <authContext.Provider value={{ setToken, isLoggedIn, storeToken, logOut }}>
      {children}
    </authContext.Provider>
  );
}

export { useAuth, AuthProvider, authContext };
