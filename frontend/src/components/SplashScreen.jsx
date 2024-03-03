import icon from "/assets/sleep.gif";
import googleIcon from "/assets/google.svg";
import { useState } from "react";
const SplashScreen = () => {
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
        {isAuthenticated === true ? (
          <>
            {" "}
            <div className="buttons">
              <div className="google-login">
                <button className="btn">
                  <img src={googleIcon} alt={googleIcon} /> Continue with google
                </button>
              </div>
              <div className="menually-login">
                <button className="btn">Signup menually</button>
              </div>
            </div>
            <div className="skip">
              <p>Continue or Skip</p>
            </div>{" "}
          </>
        ) : (
          <>
            <div className="loader">
              <h3>Loading</h3>
              <div className="sp sp-bars"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { SplashScreen };
