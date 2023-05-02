const express = require("express");
const mongoose = require("mongoose");
const route = require("./router/route");

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', route);

mongoose.connect("mongodb://localhost:27017/demo_Populate_And_Ref",{
    useNewUrlParser: true, useUnifiedTopology: true
 }).then(() =>{
    console.log("connected")
 }).catch(err => console.log(err));
app.listen(port, function() {
    console.log(`localhost running on port${port}`);
})