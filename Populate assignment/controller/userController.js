const {Author, Book, Publisher} = require("../models/userSchema");
const mongoose = require("mongoose");

const createBook = async function (req, res) {
    try {
        const data = req.body;
        console.log(data);
        const createData = await Book.create(data);
        res.json({ msg: createData, status: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}

const getBookData = async function(req, res) {
    try {
        const getData = await Book.find().populate('author').populate('publisher');
        console.log(getData);
        res.status(200).json({msg: getData, success: true})
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}
module.exports.createBook = createBook;
module.exports.getBookData = getBookData;