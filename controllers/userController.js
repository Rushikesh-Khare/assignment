
const userModel = require('../models/userSchema');
const createUser = async function (req, res) {
    try {
        const data = req.body;
        data.isFreeAppUser = req.headers.isfreeappuser;
        const createData = await userModel.create(data);
        console.log(createData);
        res.status(201).json({ msg: createData, success: true });
    } catch (error) {
        res.status(400).json({ success: false, error: error });

    }

}
module.exports.createUser = createUser;
