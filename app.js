const express = require("express");
const mongoose = require('mongoose')
const app = express();
const associatejob_router = require("./routes/associatejob")
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/",associatejob_router);
const port = process.env.PORT || 80
var url = process.env.MONGOOSE_URL
mongoose.connect(url).then(res=>{
    app.listen(port, () => console.log('Server started'));
}).catch((e) => {console.log("Unable to connect with DB.")})
