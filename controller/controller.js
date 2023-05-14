const UserModel = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const createUser = async function (req, res) {
    try {
        const createData = await UserModel.create(req.body);
        console.log(createData);
        res.status(200).json({ message: createData });
    } catch (error) {
        res.status(500).json({ error: error });

    }

}

const userLogin = async function (req, res) {
    try {
        const verifyData = await UserModel.findOne({ email: req.body.email, password: req.body.password });
        console.log(verifyData);
        if (verifyData === null) {
            return res.status(500).send({ error: error });
        } else {
            const secret = 'your-secret-key'
            const token = jwt.sign({ userName: req.body.email }, secret,);
            res.setHeader('x-Auth-token', token);
            // req.setHeader('x-Auth-token', token);
            res.status(200).send({ message: token });
            console.log(req.headers);

        }
    } catch (error) {
        res.status(500).json({ error: error });
    }


}
const getUserData = async function (req, res) {
    try {
        let id = req.params.userId;
        console.log(id);
        const getData = await UserModel.findById(id);
        res.status(500).send({ message: getData });
    } catch (error) {
        res.status(500).json({ error: error });
    }

};

const updateUser = async function (req, res) {

    let userId = req.params.userId;
    let user = await UserModel.findOne({ _id: userId });

    if (!user) {
        return res.send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
};
const deleteUser = async function (req, res) {
    let id = req.params.userid
    console.log(id)
    let user = await UserModel.findById(id)
    if (!user) { return res.send({ msg: "user not found" }) }

    let userdata = req.body
    console.log(userdata)
    let saveData = await UserModel.findOneAndUpdate({ _id: id }, userdata, { new: true });
    res.send({ status: true, data: saveData });
}



module.exports.createUser = createUser;
module.exports.userLogin = userLogin;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;