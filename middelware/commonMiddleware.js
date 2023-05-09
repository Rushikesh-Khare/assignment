const productModel = require('../models/productSchema');
const userModel = require('../models/userSchema');
const objectModel = require('../models/orderSchema');
const ObjectId = require('mongoose').Types.ObjectId
const headerCheck = function (req, res, next) {
    const isFreeAppUser = req.headers.isfreeappuser;
    // console.log(req.headers);
    if (isFreeAppUser === undefined) {
        res.status(400).json({ message: "isFreeAppUser this property is required" });
    } else {
        next();
    }
}

const idValidation = async function (req, res, next) {
    const data = req.body;
    const userId = req.body.user;
    console.log(data);
    const productId = req.body.product
    if (!data.user) {
        res.status(400).send({ message: 'please enter valid user field' });
    } else if (!data.product) {
        res.status(400).send({ message: 'please enter valid product field' });
    } else if (!(ObjectId.isValid(userId))) {
        res.status(400).send({ message: 'please enter valid user id' });
    } else if (!(ObjectId.isValid(userId))) {
        res.status(400).send({ message: 'please enter valid product id' });
    } else if (await userModel.findById(userId) === null) {
        res.status(400).send({ message: 'pproduct is missing in db' });
    } else if (await productModel.findById(productId) === null) {
        res.status(400).send({ message: 'user is missing in db' });
    } else {
        next();
    }
}
module.exports.headerCheck = headerCheck;
module.exports.idValidation = idValidation;