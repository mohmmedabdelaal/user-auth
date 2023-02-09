const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./serves/passport');
require('./routes/RoutesAuth');


const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(keys.MONOGODB_CLIENT_ID, () => {
    console.log('Connected to MongoDB');
});

require('./routes/RoutesAuth')(app);
// const GOOGLE_CLIENT_ID =process.env.GOOGLE_CLIENT_ID;
////0663686058

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running at port http://localhost:5000');
});


