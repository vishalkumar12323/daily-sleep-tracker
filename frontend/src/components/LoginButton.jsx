import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <>
      <Link to="/signup">
        <button className="login">
          <img src="/assets/login.svg" alt="login icon" />
        </button>
      </Link>
      <span>Sign in</span>
    </>
  );
};
export default LoginButton;
