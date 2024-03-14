require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { connectDB } = require("./configs/db");
const router = require("./routes/router");
const { handleError } = require("./middlewares/handleError");
const User = require("./models/users");

const app = express();
const port = process.env.PORT || 8081;

app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8081/auth/google/home",
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate(
        {
          name: profile.displayName,
          email: profile.emails[0].value,
        },
        (err, user) => {
          return cb(err, user);
        }
      );
    }
  )
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "api for daily sleep tracker web app." });
});
app.use("/api", router);
app.use(handleError);

const init = async () => {
  await connectDB(process.env.MONGO_DB_URL);
  app.listen(port, () => {
    console.log(`api server running on: http://localhost:${port}`);
  });
};

init();
