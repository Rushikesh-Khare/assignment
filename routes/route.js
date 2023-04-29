const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBook", BookController.createBook  );
router.get("/getBooksData", BookController.getBooksData);
router.post("/getBooksInYear", BookController.getBooksInYear);
router.post("/getParticularBooks", BookController.getParticularBooks);
router.post("/getXINRBooks", BookController.getXINRBooks);
router.post("/getRandomBooks", BookController.getRandomBooks);
module.exports = router;