import { useState } from "react";
import { Navbar } from "./Navbar";
import { NewEntry } from "./NewEntry";

const Home = () => {
  const [showEntries, setShowEntries] = useState(false);

  return (
    <>
      <div className="home">
        <div className="main">
          <Navbar setShowEntries={setShowEntries} />
          {showEntries && <NewEntry setShowEntries={setShowEntries} />}
        </div>
      </div>
    </>
  );
};

export { Home };
