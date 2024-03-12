import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { ChartView } from "./ChartView";
import { SleepState } from "./SleepState";
import { useAuth } from "../authentication/auth";

const Home = () => {
  const { isLoggedIn, getEntries } = useAuth();
  // useEffect(() => {
  //   getEntries()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

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
