const { Schema, model } = require("mongoose");

const sleepSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    sleepingTime: {
      type: String,
      required: true,
    },
    wakeUpTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SleepRecord = new model("sleep", sleepSchema);

module.exports = SleepRecord;
