import { useState } from "react";
import { Navbar } from "./Navbar";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { ChartView } from "./ChartView";
import { SleepState } from "./SleepState";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="main">
        <Navbar />

        <div className="chart">
          <div className="chart-data">
            <ChartView />
          </div>
          <SleepState />
        </div>
        <div className="log-btn">
          {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </>
  );
};

export { Home };
