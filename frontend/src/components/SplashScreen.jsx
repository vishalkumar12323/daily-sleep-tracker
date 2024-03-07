import React from "react";
import icon from "/assets/sleep.gif";
import { Loader } from "./Loader";
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
        <Loader />
      </div>
    </>
  );
};

export { SplashScreen };
