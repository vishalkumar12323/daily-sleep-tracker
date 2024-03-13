const express = require("express");
const { validate } = require("../services/validate");
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
} = require("../controllers/index");
const { authentication } = require("../middlewares/authentication");

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
module.exports = router;
