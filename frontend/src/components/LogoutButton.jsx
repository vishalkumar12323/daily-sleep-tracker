import { Navigate } from "react-router-dom";
import { useAuth } from "../authentication/auth";

const LogoutButton = () => {
  const { logOut } = useAuth();

  const Logout = () => {
    logOut();
    return <Navigate to="/signup" />;
  };
  return (
    <>
      <button className="logout" onClick={Logout}>
        <img src="/assets/logout.svg" alt="logout icon" />
      </button>
      <span>Logout</span>
    </>
  );
};
export default LogoutButton;
