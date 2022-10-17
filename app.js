const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 80;
const url = process.env.MONGOOSE_URL;

const associatejob_router = require("./routes/associatejob");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",associatejob_router);

mongoose.connect(url).then(res=>{
    app.listen(port, () => console.log('Server started'));
})
.catch((e) => {console.log("Unable to connect with DB.")});
