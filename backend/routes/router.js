const express = require("express");
const validateSchema = require("../models/validater");
const { createNewEntry, createNewUser } = require("../controllers/index");

const router = express.Router();

router.post("/signup", validateSchema, createNewUser);

router.post("/new-entry", createNewEntry);
module.exports = router;
