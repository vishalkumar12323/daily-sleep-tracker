import { useState } from "react";
import axios from "axios";
import googleIcon from "/assets/google.svg";
import { Inputs } from "../components/Inputs";
const Signup = () => {
  const [formData, setFormData] = useState({
    profileImage: "",
    name: "",
    lName: "",
    age: "",
    email: "",
    password: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((previouseValue) => {
      return {
        ...previouseValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/api/signup", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    setFormData({
      profileImage: "",
      name: "",
      lName: "",
      age: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="container">
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <Inputs
                label="profile image"
                type="file"
                name="profileImage"
                value={formData.profileImage}
                handlerFunction={handleDataChange}
              />
            </div>
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
            <div>
              <input className="btn" type="submit" value="create account" />
              <button className="btn">
                <img src={googleIcon} alt={googleIcon} /> Continue with google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { Signup };
