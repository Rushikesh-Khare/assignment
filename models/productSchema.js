
const { default: mongoose } = require("mongoose");

const product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }, // Default false value.
    date: {
        type: Date,
        default: Date.now
    }
})
const Product = mongoose.model("Product", product);
module.exports = Product;
// name:"Catcher in the Rye",
// 	category:"book",
// 	price:70 //mandatory property