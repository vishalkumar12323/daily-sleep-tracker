import React from "react";
import { Link } from "react-router-dom";
import icon from "/assets/sleep.gif";
import { useState } from "react";
const SplashScreen = ({ setSplashScreen }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className="fluid-container">
        <div className="icon">
          <img src={icon} alt={icon} />
        </div>

        <div className="brand-heading">
          <p>Welcome To The</p>
          <p>
            <span style={{ color: "green" }}>Daily</span>{" "}
            <span style={{ color: "gold" }}>Sleep</span>{" "}
            <span style={{ color: "#575fcf" }}>Tracker</span>{" "}
          </p>
        </div>
        <div className="loader">
          <h3>Loading</h3>
          <div className="sp sp-bars"></div>
        </div>
      </div>
    </>
  );
};

export { SplashScreen };
