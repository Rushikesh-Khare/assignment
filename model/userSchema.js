const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requried: true
    },
    lastName: {
        type: String,
        requried: true
    },
    mobile: {
        type: Number,
        requried: true
    },
    email: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        requried: true
    },
    gender: {
        type: String,
        requried: true
    },
    isDeleted: {
        type: Boolean,
        requried: true,
        default: false
    },
})

module.exports = mongoose.model('User', userSchema);