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

  async function createEntries(entries) {
    try {
      const { data } = await axios.post(
        "http://localhost:8081/api/new-entry",
        entries,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
        createEntries,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { useAuth, AuthProvider, authContext };
