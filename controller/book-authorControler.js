const BookModel = require("../modules/book.js");
const AuthorModel = require("../modules/author.js");

const createAuthor = async function (req, res) {
    try {
        const data = req.body;
        const createData = await AuthorModel.create(data);
        res.json({ msg: createData, status: true });

    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}

const getAuthorData = async function (req, res) {
    try {
        const findData = await AuthorModel.find();
        res.json({ msg: findData, status: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}

const createBook = async function (req, res) {
    try {
        const data = req.body;
        const createData = await BookModel.create(data);
        res.json({ msg: createData, status: true });

    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}

const getBookData = async function (req, res) {
    try {
        const findData = await BookModel.find();
        res.json({ msg: findData, status: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }

}

const listOfBooksByAuthor = async function (req, res) {
    try {
        const findData = await AuthorModel.findOne({ author_name: 'Chetan Bhagat' }).select({author_id: 1, _id: 0});
        console.log(findData);
        const findList = await BookModel.find({ author_id: findData.author_id }).select({name: 1, _id: 0});
        console.log(findList);
        res.status(200).json({msg: findList, success: true});

    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }

}


const updateOperation = async function (req, res) {
    try {
        const bookName = req.body.name
        const findAuthorId = await BookModel.findOneAndUpdate({ name: bookName }, {$set:{price: 200}})
        // console.log(findAuthorId);

        const findAuth = await AuthorModel.findOne({ author_id: findAuthorId.author_id });
        // console.log(findAuth);
        res.status(200).json({ msg1: findAuth.author_name});

    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
}

const getAuthorNameCost = async function (req, res) {
    try {
        const findAuthorId = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id:0 });
        console.log(findAuthorId);

        let datasets = await Promise.all(findAuthorId.map(async (data) => {
                let products = {};
                let last = await AuthorModel.findOne({
                  author_id: data.author_id
                });
                products.name   = last.author_name;
                
                console.log(last);
                return products;
            }));
            console.log(datasets)
       
        res.status(200).json({ msg: datasets, success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }

    // 


}

module.exports.createAuthor = createAuthor;
module.exports.getAuthorData = getAuthorData;
module.exports.createBook = createBook;
module.exports.getBookData = getBookData;
module.exports.listOfBooksByAuthor = listOfBooksByAuthor;
module.exports.updateOperation = updateOperation;
module.exports.getAuthorNameCost = getAuthorNameCost;



