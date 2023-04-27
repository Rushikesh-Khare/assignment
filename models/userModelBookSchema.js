const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName:{
        type: String,
        unique: true
    },
    authorName:{
        type: String,
        
    },
    category:{
        type: String,
        
    },
    year:Number

}, {timestamps: true});

module.exports = mongoose.model('User', bookSchema)