import icon from "/assets/sleep.gif";
import googleIcon from "/assets/google.svg";
const SplashScreen = () => {
  return (
    <>
      <div className="fluid-container">
        <div className="icon">
          <img src={icon} alt={icon} />
        </div>

        <div className="brand-heading">
          <p>Welcome To The</p>
          <p>
            <span style={{ color: "green" }}>Daily</span>{" "}
            <span style={{ color: "gold" }}>Sleep</span>{" "}
            <span style={{ color: "#575fcf" }}>Tracker</span>{" "}
          </p>
        </div>

        <div className="buttons">
          <div className="google-login">
            <button className="btn">
              <img src={googleIcon} alt={googleIcon} /> Continue with google
            </button>
          </div>
          <div className="menually-login">
            <button className="btn">Signup menually</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { SplashScreen };
