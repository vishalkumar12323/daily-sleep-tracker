import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Signup } from "./pages/Signup";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  return (
    <>
      <div className="container ">
        {/* {splashScreen && <SplashScreen />} */}
        {/* <Signup /> */}
      </div>
    </>
  );
}

export default App;
