const { Schema, model } = require("mongoose");

const sleepSchema = new Schema({}, { timestamps: true });

const Sleep = new model("sleep", sleepSchema);

module.exports = Sleep;
