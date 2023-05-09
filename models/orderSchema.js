

const { default: mongoose } = require("mongoose");

const order = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    isFreeAppUser: {
        type: String,
        default: false
    }, // Default false value.
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Order", order);