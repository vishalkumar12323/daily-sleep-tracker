const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
  {
    profileImage: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: false,
    },
    age: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = new model("user", usersSchema);

module.exports = User;
