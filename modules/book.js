const mongoose = require("mongoose");
// const Author = require("./author");
const bookSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    author_id:{
        // type: mongoose.Schema.Types.ObjectId,
        required: true,
        // ref: "Author"
        type: Number
    },
    price: Number,
    rating: Number
}, { timestamps: true })
module.exports = mongoose.model("Book", bookSchema);