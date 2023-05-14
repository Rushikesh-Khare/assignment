const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");
const Middleware = require("../middleware/commMiddleware");
router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.post('/createUser', Controller.createUser);
router.post('/userLogin', Controller.userLogin);
router.get('/getUserData/:id', Middleware.middleware, Controller.getUserData);
router.put('/updateUser/:id', Middleware.middleware, Controller.updateUser);
router.put('/deleteUser/:id', Middleware.middleware, Controller.deleteUser);
module.exports = router;
