import { useState } from "react";
import googleIcon from "/assets/google.svg";
import icon from "/assets/close-button.svg";
const Signup = ({ setShowSignupPage, setSplashScreen }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      profileImage: "",
      name: "",
      lName: "",
      age: "",
      email: "",
      password: "",
    });
    console.log(formData);
  };
  const disappear = () => {
    setShowSignupPage(false);
    setSplashScreen(true);
  };
  return (
    <>
      <div className="container">
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
              <input
                type="file"
                name="profileImage"
                id="profile-image"
                value={formData.profileImage}
                onChange={handleDataChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleDataChange}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="sirname">Last Name</label>
              <input
                type="text"
                name="lName"
                id="sirname"
                placeholder="Last Name"
                value={formData.lName}
                onChange={handleDataChange}
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
                value={formData.age}
                onChange={handleDataChange}
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
                value={formData.email}
                onChange={handleDataChange}
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
                value={formData.password}
                onChange={handleDataChange}
              />
            </div>
            <div className="input-box ">
              <button className="btn" onClick={handleSubmit}>
                create account
              </button>
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
