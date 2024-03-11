import { useState } from "react";
import { Inputs } from "../components/Inputs";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setLoginData((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <Inputs
                label="email"
                type="email"
                name="email"
                value={loginData.email}
                handlerFunction={handleDataChange}
                required={true}
                text="Your Email"
              />
            </div>
            <div className="input-box">
              <Inputs
                label="password"
                type="text"
                name="password"
                value={loginData.password}
                handlerFunction={handleDataChange}
                text="Password"
              />
            </div>
            <div className="group">
              <input className="btn" type="submit" value="create account" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { Login };
