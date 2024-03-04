import icon from "/assets/close-button.svg";
const Signup = ({ setShowSignupPage, setSplashScreen }) => {
  const disappear = () => {
    setShowSignupPage(false);
    setSplashScreen(true);
  };
  return (
    <>
      <div className="fluid-container">
        <div className="signup-form">
          <div className="close-button">
            <button onClick={disappear}>
              {" "}
              <img src={icon} alt={icon} />{" "}
            </button>
          </div>
          <form>
            <div className="input-box">
              <label htmlFor="profile-image">Profile Image</label>
              <input type="file" name="profile" id="profile-image" />
            </div>
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="sirname">Last Name</label>
              <input
                type="text"
                name="sirname"
                id="sirname"
                placeholder="Last Name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                id="age"
                required
                placeholder="Age"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                required
                placeholder="Password"
              />
            </div>
            <div className="input-box ">
              <button className="btn">create account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { Signup };
