require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./configs/db");
const router = require("./routes/router");
const { handleError } = require("./middlewares/handleError");

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  })
);

app.use("/api", router);
app.use(handleError);

app.get("/", (req, res) => {
  res.status(200).json({ message: "api for daily sleep tracker web app." });
});

const init = async () => {
  await connectDB(process.env.MONGO_DB_URL);
  app.listen(port, () => {
    console.log(`api server running on: http://localhost:${port}`);
  });
};

init();
