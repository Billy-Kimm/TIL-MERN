const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: {         // 105576733546588344559
        type: String,
        required: true
    }
});

const User = mongoose.model('user', userSchema);

exports.User = User;

const user = new User({
    googleID: ' '
});
user.save();