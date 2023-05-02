const express = require('express');
const router = express.Router();
const controller = require('../controller/book-authorControler.js');
const BookModel = require("../modules/book");
const AuthorModel = require("../modules/author");
router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});


router.post("/createAuthor", controller.createAuthor);
router.get("/getAuthorData", controller.getAuthorData);
router.post("/createBook", controller.createBook);
router.get("/getBookData", controller.getBookData);
router.get("/listOfBooksByAuthor", controller.listOfBooksByAuthor);
router.get("/updateOperation", controller.updateOperation);
// router.get("/getBookData", controller.getBookData);
router.get("/getAuthorNameCost", controller.getAuthorNameCost);

console.log(controller.createAuthor);
module.exports = router