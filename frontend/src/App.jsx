import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "./components/SplashScreen";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";
import { Error } from "./components/Error";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);
  return (
    <>
      <SplashScreen />
      {/* {isLoading ? (
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/splash" element={<SplashScreen />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      )} */}
    </>
  );
}

export default App;
