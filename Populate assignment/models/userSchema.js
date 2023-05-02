const mongoose = require("mongoose");

const newAuthor = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    authorName: String,
    age: Number,
    Address: String,
    rating: Number
})

const newPublisher = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    headQuarter: String,

})

const newBook = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    price: Number,
    rating: Number,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publisher"
    }
});
 const Author = mongoose.model("Author", newAuthor);
 const Book = mongoose.model("Book", newBook);
 const Publisher = mongoose.model("Publisher", newPublisher);

module.exports = {Author, Book, Publisher};