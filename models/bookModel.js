const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    tags: [String],

    prices: {
        indianPrice: String,
        europePrice: String
    },
    year: {
        type: String,
        default: "2021"
    },
    isPublished: Boolean,
    totalPages: Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)