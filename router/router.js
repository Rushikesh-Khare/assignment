const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const userModel = require("../models/userSchema");
const middelware = require("../middelware/commonMiddleware");

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.post('/createUser', middelware.headerCheck, userController.createUser);
router.post('/createProduct', productController.createProduct);
router.post('/createOrder', middelware.idValidation, orderController.createOrder);
module.exports = router;
