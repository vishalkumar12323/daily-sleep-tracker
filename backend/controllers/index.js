const User = require("../models/users");
const SleepRecord = require("../models/sleep");
const { createToken } = require("../services/auth");

const createNewUser = (req, res) => {
  res.json({ message: "user successfully created." });
};

const createNewEntry = (req, res) => {
  res.json({ message: "entry successfully created." });
};

module.exports = { createNewUser, createNewEntry };
