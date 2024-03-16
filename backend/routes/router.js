const express = require("express");
const { validate } = require("../services/validate");
const { authentication } = require("../middlewares/authentication");
const passport = require("passport");
const {
  validateSchema,
  entriesValidateSchema,
  loginSchemaValidate,
} = require("../models/validater");
const {
  createNewEntry,
  signInNewUser,
  loginUser,
  getEntries,
  logInUserWithGoogle,
} = require("../controllers/index");

const router = express.Router();

router.get("/entries", authentication, getEntries);

router.post("/signup", validate(validateSchema), signInNewUser);

router.post("/login", validate(loginSchemaValidate), loginUser);

router.post(
  "/new-entry",
  authentication,
  validate(entriesValidateSchema),
  createNewEntry
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/home",
  passport.authenticate("google", { session: false }),
  logInUserWithGoogle
);
module.exports = router;
