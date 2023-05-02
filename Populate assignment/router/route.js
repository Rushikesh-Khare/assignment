const express = require("express");
const router = express.Router();
const controller = require("../controller/userController");
const userModel = require("../models/userSchema");

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.post('/createBook', controller.createBook);
router.get('/getBookData', controller.getBookData);
module.exports = router
