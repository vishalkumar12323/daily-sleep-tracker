const Navbar = ({ setShowEntries }) => {
  return (
    <>
      <div className="heading">
        <h1>daily sleep tracker</h1>
      </div>
      <div className="new-entry-button">
        <button className="btn" onClick={() => setShowEntries(true)}>
          {" "}
          new entry
        </button>
      </div>
    </>
  );
};

export { Navbar };
