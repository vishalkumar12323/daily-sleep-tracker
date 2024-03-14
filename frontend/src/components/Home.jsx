import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { ChartView } from "./ChartView";
import { SleepState } from "./SleepState";
import { useAuth } from "../authentication/auth";

const Home = () => {
  const { isLoggedIn, getEntries } = useAuth();
  const [sleepState, setSleepState] = useState([]);

  useEffect(() => {
    getEntries()
      .then((res) => {
        setSleepState(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="main">
        <Navbar />

        <div className="chart">
          {sleepState ? (
            <>
              {" "}
              <div className="chart-data">
                <ChartView sleepState={sleepState} />
              </div>
              <SleepState sleepState={sleepState} />{" "}
            </>
          ) : (
            <h1>No Any Entries</h1>
          )}
        </div>
        <div className="log-btn">
          {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </>
  );
};

export { Home };
