const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./serves/passport');


mongoose.set('strictQuery', false);
mongoose.connect(keys.MONOGODB_CLIENT_ID, () => {
    console.log('Connected to MongoDB');
});

const app = express();
app.use(cookieSession({
    maxAge: 3600 * 24 * 60 * 1000,

    keys: [keys.COOKIE_KEY],
}));

app.use(passport.initialize());
app.use(passport.session());
require('./routes/RoutesAuth')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running at port http://localhost:5000');
});


