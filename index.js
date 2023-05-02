const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const route = require("./router/route");
app.use(express.json());
app.use('/', route);

mongoose.connect("mongodb://localhost:27017/mongoAssg",{
    useNewUrlParser: true, useUnifiedTopology: true
 }).then(() =>{
    console.log("connected")
 }).catch(err => console.log(err));
app.listen(port, function() {
    console.log(`localhost running on port${port}`);
})


