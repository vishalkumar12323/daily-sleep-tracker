const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { createToken } = require("../services/auth");

const GoogleAuthentication = () => {
  app.use(passport.initialize());

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8081/api/auth/google/home",
      },
      (accessToken, refreshToken, profile, cb) => {
        const token = createToken({
          id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        });
        return cb(null, token);
      }
    )
  );
};

module.exports = { GoogleAuthentication };
