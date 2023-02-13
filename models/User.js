const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    age: Number,
});

mongoose.model('users', userSchema);

