import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Inputs } from "../components/Inputs";
import { useAuth } from "../authentication/auth";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { setToken, storeToken } = useAuth();
  const navigate = useNavigate();
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

    axios
      .post("http://localhost:8081/api/login", loginData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        const { token, message } = res.data;
        setToken(token);
        storeToken(token);
        toast.success(message);
        navigate("/");
      })
      .catch((e) => {
        const message = e?.response.data.message;
        toast.error(message);
      });

    setLoginData({ email: "", password: "" });
  };
  return (
    <>
      <div className="container">
        <div className="signup-form">
          <form onSubmit={handleSubmit} className="login-form">
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
            <input
              className="btn"
              type="submit"
              value="login"
              style={{ marginTop: "1rem" }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export { Login };
