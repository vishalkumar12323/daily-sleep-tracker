const express = require("express");
const { validate } = require("../services/validate");
const validateSchema = require("../models/validater");
const { createNewEntry, createNewUser } = require("../controllers/index");

const router = express.Router();

router.post("/signup", validate(validateSchema), createNewUser);

router.post("/new-entry", createNewEntry);
module.exports = router;
