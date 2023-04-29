const { count } = require("console")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    let bookData = await BookModel.find();
    const result = bookData.map(function (current) {
        return ({ bookName: current.bookName, authorName: current.authorName })
    })
    res.send({ msg: result })
}
async function getBooksInYear(req, res) {
    const data = await BookModel.find({ year: req.body.year });
    const result = data.map(function (current) {
        return ({ bookName: current.bookName, authorName: current.authorName })
    })
    res.json({ data: result, status: true })
}

async function getParticularBooks(req, res) {
    const perticularBook = req.body;
    const data = await BookModel.find({ $or: [{ bookName: req.body.keyword }, { year: req.body.keyword }] }).select({ bookName: 1, authorName: 1, _id: 0 });
    res.json({ data: data, status: true })
    console.log(req.body.bookName)
}

async function getXINRBooks(req, res) {
    const data = await BookModel.find({ $or: [{ price: "100INR" }, { price: "200INR" }, {price: "500INR"}] }).select({ bookName: 1, authorName: 1, _id: 0 })
    res.json({ data: data, status: true })
}


async function getRandomBooks(req, res) {
    const data = await BookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gte: 500 } }] }).select({ bookName: 1, authorName: 1, _id: 0 });
    res.json({ data: data, status: true })
}
module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks

