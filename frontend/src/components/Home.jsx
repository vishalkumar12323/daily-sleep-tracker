import { useState } from "react";
import { Navbar } from "./Navbar";
import { NewEntry } from "./NewEntry";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { DataViewer } from "./DataViewer";

const Home = () => {
  const [showEntries, setShowEntries] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="main">
        <Navbar setShowEntries={setShowEntries} />
        {showEntries && <NewEntry setShowEntries={setShowEntries} />}

        <DataViewer />
        <div className="log-btn">
          {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </>
  );
};

export { Home };
