const { Schema, model } = require("mongoose");

const sleepSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    sleepTime: {
      type: String,
      required: true,
    },
    wakeUpTime: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const SleepRecord = new model("sleep", sleepSchema);

module.exports = SleepRecord;
