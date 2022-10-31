const mongoose = require("mongoose");
const paymentplansSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    baseprice: Number,
    offerprice: Number,
    description: String,
    title: String,
    credit: Number,
    type: Number,
    status: Boolean
});

module.exports = mongoose.model("paymentplans", paymentplansSchema);