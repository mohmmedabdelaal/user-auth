const mongooose = require('mongoose');
const {Schema} = mongooose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    age: Number,
});

mongoose.model('users', userSchema);

