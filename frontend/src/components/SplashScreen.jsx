import React from "react";
import icon from "/assets/sleep.gif";
import googleIcon from "/assets/google.svg";
import { useState } from "react";
const SplashScreen = ({ handleAppearance, setSplashScreen }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
        {isAuthenticated === true ? (
          <>
            <div className="loader">
              <h3>Loading</h3>
              <div className="sp sp-bars"></div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="buttons">
              <div className="google-login">
                <button className="btn">
                  <img src={googleIcon} alt={googleIcon} /> Continue with google
                </button>
              </div>
              <div className="menually-login">
                <button className="btn" onClick={handleAppearance}>
                  Signup menually
                </button>
              </div>
            </div>
            <div className="skip" onClick={() => setSplashScreen(false)}>
              <p>Continue or Skip</p>
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};

export { SplashScreen };
