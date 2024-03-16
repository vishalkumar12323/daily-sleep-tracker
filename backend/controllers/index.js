const User = require("../models/users");
const SleepRecord = require("../models/sleep");
const { createToken } = require("../services/auth");

// Signin new user and store details in database.
const signInNewUser = async (req, res) => {
  const { name, lName, age, email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(404)
        .json({ message: "User already exists with this email." });
    }
    const newUser = await new User({
      name,
      lName,
      age,
      email,
      password,
    });
    const token = createToken({ id: newUser.id, email: newUser.email });

    await newUser.save();
    res.status(200).json({ token: token, message: "Successfully signin" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid email or password, try again." });
    }
    const check = await user.compare(password);
    if (check) {
      const token = createToken({ id: user.id, email: user.email });
      return res
        .status(200)
        .json({ token: token, message: "Successfully login" });
    } else {
      return res
        .status(404)
        .json({ message: "Invalid email or password, try again" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

// login user via google.
const logInUserWithGoogle = async (req, res) => {
  const user = req.user;
  try {
    const newUser = await new User({
      name: user.name,
      email: user.email,
    });

    const token = createToken({ id: newUser.id, email: newUser.email });
    await newUser.save();
    res.status(200).redirect(`http://localhost:5173/signup?token=${token}`);
  } catch (e) {
    const message = "Internal Server Error";
    res.status(500).redirect(`http://localhost:5173/signup?message=${message}`);
  }
};

// create new entry and store into database
const createNewEntry = async (req, res) => {
  const { date, sleepTime, wakeUpTime } = req.body;
  try {
    const newEntry = await new SleepRecord({
      date,
      sleepTime,
      wakeUpTime,
      createdBy: req.user.id,
    });
    await newEntry.save();
    res.status(201).json({ message: "New entry created" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all entries from database
const getEntries = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findOne({ _id: req.user.id }).select({
      name: true,
      lName: true,
      profileImage: true,
      email: true,
    });
    const entries = await SleepRecord.find({ createdBy: id }).select({
      date: true,
      sleepTime: true,
      wakeUpTime: true,
    });
    if (entries.length === 0 || !entries)
      return res.status(404).json({ message: "Not any record found" });
    res.status(200).json({ data: entries, user: user });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  signInNewUser,
  createNewEntry,
  loginUser,
  getEntries,
  logInUserWithGoogle,
};
