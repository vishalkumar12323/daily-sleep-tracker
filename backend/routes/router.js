const express = require("express");
const multer = require("multer");
const { storage } = require("../services/handleImages");
const { validate } = require("../services/validate");
const {
  validateSchema,
  entriesValidateSchema,
  loginSchemaValidate,
} = require("../models/validater");
const {
  createNewEntry,
  createNewUser,
  loginUser,
} = require("../controllers/index");
const { authentication } = require("../middlewares/authentication");

const router = express.Router();
const upload = multer({ storage: storage });

router.post(
  "/signup",
  validate(validateSchema),
  upload.single("profileImage"),
  createNewUser
);

router.post("/login", validate(loginSchemaValidate), loginUser);

router.post(
  "/new-entry",
  authentication,
  validate(entriesValidateSchema),
  createNewEntry
);
module.exports = router;
