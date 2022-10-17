const mongoose = require("mongoose");
const associatejobdatas = require('../models/associatejobdatas');

module.exports = {
    'getassociatedjob_data' : async(req, res) => {
        const { page = 1, limit = 5 } = req.query;
        try {
            const data = await associatejobdatas.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
            const count = await associatejobdatas.count();
            return res.json({
                data,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            });
        } catch (err) {
            data={
                "status": 404,
                "errors": [
                    'No data found'
                ]
            }
            return res.json(data)
        }
    },
    'getassociatedjob_data_by_id' : async(req, res) => {
        var id = req.params.id;
        try {
            const data = await associatejobdatas.findById(mongoose.Types.ObjectId(id));
            return res.json(data)
        } catch (error) {
            console.log(error);
            data={
                "status": 404,
                "errors": [
                    'No data found'
                ]
            }
            return res.json(data)
        }

    }
}