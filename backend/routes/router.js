const express = require("express");
const multer = require("multer");
const { storage } = require("../services/handleImages");
const validateSchema = require("../models/validater");
const { validate } = require("../services/validate");
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

router.post("/login", loginUser);

router.post("/new-entry", authentication, createNewEntry);
module.exports = router;
