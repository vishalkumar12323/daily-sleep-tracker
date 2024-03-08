const User = require("../models/users");
const SleepRecord = require("../models/sleep");
const { createToken } = require("../services/auth");
const { uploadImage } = require("../services/handleImages");

const createNewUser = async (req, res, next) => {
  const { name, lName, age, email, password } = req.body;
  const profileImage = req.file?.filename;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(404)
        .json({ message: "user already exists with this email." });
    }
    const image_url = await uploadImage(profileImage);
    const newUser = await new User({
      profileImage: image_url,
      name,
      lName,
      age,
      email,
      password,
    });
    const token = createToken({ id: newUser.id, email: newUser.email });

    await newUser.save();
    res.status(200).json({ token: token });
  } catch (e) {
    console.log("error ", e);
    next(e);
  }
};

const loginUser = async (req, res) => {
  res.status(200).json({ message: "login successfully" });
};

const createNewEntry = (req, res) => {
  res.json({ message: "entry successfully created." });
};

module.exports = { createNewUser, createNewEntry, loginUser };
