import { Navbar } from "./Navbar";
import { NewEntry } from "./NewEntry";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="main">
          {/* <Navbar /> */}

          <NewEntry />
        </div>
      </div>
    </>
  );
};

export { Home };
