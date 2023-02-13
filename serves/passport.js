const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
const googleCallback = 'http://localhost:5000/auth/google/callback';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_SECRET_KEY,
            callbackURL: googleCallback,
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id}).then(((existingUser) => {
                if (existingUser) {
                    /// We already have the user
                    done(null, existingUser);
                } else {
                    new User({googleId: profile.id}).save().then(user => {
                        done(null, user);
                    });

                }
            }));
            
        }
    )
);
