require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "api for daily sleep tracker web app." });
});

app.listen(port, () => {
  console.log(`api server running on: http://localhost:${port}`);
});
