import axios from "axios";
import { useState } from "react";
import googleIcon from "/assets/google.svg";
import { Inputs } from "../components/Inputs";
import { useAuth } from "../authentication/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const user = {
  name: "",
  lName: "",
  age: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [formData, setFormData] = useState(user);
  const navigate = useNavigate();
  const { setToken, storeToken } = useAuth();
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((previouseValue) => {
      return {
        ...previouseValue,
        [name]: value,
      };
    });
  };

  // console.log(setToken.toString());
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/api/signup", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        const { token, message } = res.data;
        setToken(token);
        storeToken(token);
        toast.success(message);
        navigate("/");
      })
      .catch((e) => {
        const message = e?.response?.data?.message;
        toast.error(message);
      });

    setFormData(user);
  };
  return (
    <>
      <div className="container">
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <Inputs
                label="name"
                type="text"
                name="name"
                value={formData.name}
                handlerFunction={handleDataChange}
                text="Enter Your Name"
                required={true}
              />
            </div>
            <div className="input-box">
              <Inputs
                label="LastName"
                type="text"
                name="lName"
                value={formData.lName}
                handlerFunction={handleDataChange}
                text="Enter Your LastName"
              />
            </div>
            <div className="input-box">
              <Inputs
                label="age"
                type="number"
                name="age"
                value={formData.age}
                handlerFunction={handleDataChange}
                text="Age"
                required={true}
              />
            </div>
            <div className="input-box">
              <Inputs
                label="email"
                type="email"
                name="email"
                value={formData.email}
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
                value={formData.password}
                handlerFunction={handleDataChange}
                text="Password"
              />
            </div>
            <div className="group">
              <div className="submit-btn">
                <input type="submit" value="create account" className="btn" />
              </div>
              <div className="line-through">
                <div className="line"></div>
                <div>or</div>
                <div className="line"></div>
              </div>
              <div className="other-btn">
                <div>
                  <Link to="/login">
                    <button className="btn">already account?</button>
                  </Link>
                </div>
                <div>
                  <button className="btn g-btn">
                    <img src={googleIcon} alt={googleIcon} />
                    login with google{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { Signup };
