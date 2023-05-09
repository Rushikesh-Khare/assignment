const orderModel = require('../models/orderSchema');
const userModel = require('../models/userSchema');
const productModel = require('../models/productSchema');

const createOrder = async function (req, res) {
    try {
        const data = req.body;
        const id = data.user;
        const idd = data.product;
        const userId = await userModel.findById(id);
        // const isFreeAppUser = req.headers.isfreeappuser;

        console.log();
        if (req.headers.isfreeappuser === true) {
            data.isFreeAppUser = isFreeAppUser;
            data.amount = 0;
            const order = await orderModel.create(data)
            res.send(order)
        } else {
            const userObj = await userModel.findById(id);
            const productObj = await productModel.findById(idd);
            const productPrice = productObj.price;
            const userBalance = userObj.balance;
            console.log(userObj._id.toString());
            console.log(userBalance);
            if (userBalance >= productPrice) {
                const updateOpe = await userModel.updateOne({id: userObj._id.toString()}, {$set: {balance: userBalance - productPrice}});
                console.log(updateOpe);
                data.amount = productPrice;
                data.isFreeAppUser = req.headers.isfreeappuser;
                const order = await orderModel.create(data)
                res.send(order);
            } else {

            }
        }
    } catch (error) {
        res.status(500).send({ message: "bakwas", error: error });
    }
}
module.exports.createOrder = createOrder;





/*
const data = req.body;
        const user = req.body.user;
        const product = req.body.product;
        const userObj = await userModel.findById(user);
        const productObj = await productModel.findById(product);
        // console.log(isFreeAppUser);
        console.log(req.headers.isfreeappuser);
        if (userObj.isFreeAppUser === "true") {

            const createData = await orderModel.create(data);
            console.log(createData);
            res.status(201).send({ message: createData });
        } else {
            //     let balance = await userModel.findById(user);
            //     const price = await productModel.findById(product);
            //     // console.log(userBalance);
            //     // console.log(productBalance);
            //     let userBalance = balance.balance;
            //     // console.log(userBalance);
            //     const productPrice = price.price;
            //     console.log(productPrice);
            //     if (userBalance < productPrice) {
            //         res.status(400).send({ message: "insufficient balance" });
            //     } else {
            //         await userModel.updateOne({} , { $set: { balance: userBalance - productPrice } }, { new: true });
            //         data.amount = productPrice;
            //         data.isFreeAppUser = false;
            //         const createData = await orderModel.create(data);
            //         console.log(createData);
            //         res.status(201).send({ message: createData });

            //     }
            res.send({ message: "ok" });
        }
*/