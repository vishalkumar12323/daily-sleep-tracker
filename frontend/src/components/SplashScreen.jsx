import React from "react";
import { Link } from "react-router-dom";
import icon from "/assets/sleep.gif";
import { useState } from "react";
const SplashScreen = () => {
  return (
    <>
      <div className="container">
        <div className="icon">
          <img src={icon} alt={icon} />
        </div>

        <div className="brand-heading">
          <p>Welcome To The</p>
          <p>Daily Sleep Tracker</p>
        </div>
        <div className="loader">
          <h3>Loading...</h3>
          <div className="sp sp-bars"></div>
        </div>
      </div>
    </>
  );
};

export { SplashScreen };
