const express = require('express');
const app = express();
const router = express.Router();
const UserModel= require("../models/userModelBookSchema.js")
const UserController= require("../controllers/bookSchemaControler.js")
app.use(express.json());
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;