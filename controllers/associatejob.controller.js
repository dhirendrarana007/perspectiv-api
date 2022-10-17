const { json } = require('express');
const associatejobdatas = require('../models/associatejobdatas')

module.exports = {
    'getassociatedjob_data' : async(req, res) => {
        
        const { page = 1, limit = 5 } = req.query;
        try {
            console.log('withoutid')
            const data = await associatejobdatas.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        
        var count = await associatejobdatas.count();
        res.json({
            data,
            totalPages: Math.ceil(count / limit),
            currentPage: page
          });
        //return res.send(data);
        } catch (err) {
            console.error(err.message);
        }
    },
    'getassociatedjob_data_by_id' : async(req, res) => {
        
        var id = req.params.id;
        console.log('id',id);
        var data = await associatejobdatas.findOne({id : id})
        console.log("data: ",JSON.parse(JSON.stringify(data)))
        res.json(data)
    }
}