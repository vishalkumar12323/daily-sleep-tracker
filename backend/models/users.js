const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

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

usersSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified()) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (e) {
    return next(e);
  }
});

usersSchema.methods.compare = async function (password, next) {
  try {
    return bcrypt.compare(password, this.password);
  } catch (e) {
    console.log(e);
    return next(e);
  }
};

const User = new model("user", usersSchema);

module.exports = User;
