import React, { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  const [showSignupPage, setShowSignupPage] = useState(false);

  const handleAppearance = () => {
    setShowSignupPage((previouseValue) => {
      return !previouseValue;
    });

    setSplashScreen((previouseValue) => {
      return !previouseValue;
    });
  };
  return (
    <>
      <div className="container ">
        {splashScreen && (
          <SplashScreen
            handleAppearance={handleAppearance}
            setSplashScreen={setSplashScreen}
          />
        )}
        {showSignupPage && (
          <Signup
            setShowSignupPage={setShowSignupPage}
            setSplashScreen={setSplashScreen}
          />
        )}
      </div>
    </>
  );
}

export default App;
