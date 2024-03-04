import plusIcon from "/assets/plus-icon.svg";
const Navbar = () => {
  return (
    <>
      <div className="heading">
        <h1>daily sleep tracker</h1>
      </div>
      <div className="new-entry-button">
        <button className="">
          {" "}
          <img src={plusIcon} alt={plusIcon} /> new entry
        </button>
      </div>
    </>
  );
};

export { Navbar };
