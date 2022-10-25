const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    imgpath: {type: String, required: true},
    date: {type: Date}
});

const User = new mongoose.model('user', userSchema);

module.exports = User;
