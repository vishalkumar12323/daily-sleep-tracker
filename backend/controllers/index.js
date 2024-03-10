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
    console.log(e);
    next(e);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "invalid email or password, try again." });
    }
    const check = await user.compare(password);
    if (check) {
      const token = createToken({ id: user.id, email: user.email });
      return res.status(200).json({ token: token });
    } else {
      return res
        .status(404)
        .json({ message: "invalid email or password, try again" });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const createNewEntry = async (req, res) => {
  const { date, sleepTime, wakeUpTime } = req.body;
  try {
    const user = await User.findOne({ _id: req.user.id }).select({
      name: true,
      lName: true,
      profileImage: true,
      email: true,
    });
    const newEntry = await SleepRecord({
      date,
      sleepTime,
      wakeUpTime,
    });
    await newEntry.save();
    res.status(201).json({ message: "new entry created", user: user });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createNewUser, createNewEntry, loginUser };
