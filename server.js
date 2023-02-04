const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const express = require('express');

const app = express();

const GOOGLE_CLIENT_ID =
  '611034003535-6drm0lika7ustglkbki5qc4c7ipss4eq.apps.googleusercontent.com';

// passport.use(
//   new GoogleStrategy({}, function verify(
//     accessToken,
//     refreshToken,
//     profile,
//     cb
//   ) {})
// );

app.listen(5000);
