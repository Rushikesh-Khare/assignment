const productModel = require('../models/productSchema');


const createProduct = async function (req, res) {

    try {
        const data = req.body;
        const createData = await productModel.create(data);
        res.status(201).json({ msg: createData, success: true });
    } catch (error) {
        res.status(400).json({ success: false, error: error });

    }

}




module.exports.createProduct = createProduct;
