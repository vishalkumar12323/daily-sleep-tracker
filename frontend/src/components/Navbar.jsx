import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="heading">
        <h1>daily sleep tracker</h1>
      </div>
      <div className="new-entry-button">
        <Link to="/new-entry">
          <button className="btn"> new entry</button>
        </Link>
      </div>
    </>
  );
};

export { Navbar };
