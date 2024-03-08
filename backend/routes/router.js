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

const router = express.Router();
const upload = multer({ storage: storage });

router.post(
  "/signup",
  validate(validateSchema),
  upload.single("profileImage"),
  createNewUser
);

router.post("/login", loginUser);

router.post("/new-entry", createNewEntry);
module.exports = router;
