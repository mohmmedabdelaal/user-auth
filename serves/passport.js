const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
        {
            clientID:
            keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_SECRET_KEY,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(`accessToken: ${accessToken}`);
            console.log(`refreshToken: ${refreshToken}`);
            console.log(`profile: ${profile}`);
        }
    )
);