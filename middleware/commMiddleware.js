const jwt = require('jsonwebtoken');
const middleware = function (req, res, next) {
    try {
        const token = req.headers['x-auth-token'];
        if (!token) {
            res.status(500).send({ message: "token is not present" });
        }
        const decodedToken = jwt.verify(token, 'your-secret-key');
        if (!decodedToken) {
            res.status(500).send({ message: "invalid token" })
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }

}

module.exports.middleware = middleware