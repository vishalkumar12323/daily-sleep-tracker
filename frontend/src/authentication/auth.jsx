import React, { useContext, createContext, useState } from "react";
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
  let isLoggedIn = !!token;

  function storeToken(token) {
    setToken(token);
    return localStorage.setItem("token", token);
  }

  function logOut() {
    setToken("");
    return localStorage.removeItem("token");
  }

  async function getEntries() {
    try {
      const { data } = await axios.get("http://localhost:8081/api/entries", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <authContext.Provider
      value={{
        token,
        setToken,
        isLoggedIn,
        storeToken,
        logOut,
        getEntries,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { useAuth, AuthProvider, authContext };
