const { default: mongoose } = require("mongoose");

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 100
    }, // Default balance at user registration is 100
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },// Allowed values are - “male”, “female”, “other”
    isFreeAppUser: {
        type: String,
        required: true
        
    } // Default false value.
})
const User = mongoose.model("User", user);
module.exports = User