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
            if(!data){
                console.log('noid')
                data={
                    "status": 404,
                    "errors": [
                        'You have no data'
                    ]
                }
            }
        var count = await associatejobdatas.count();
        res.json({
            data,
            totalPages: Math.ceil(count / limit),
            currentPage: page
          });
        } catch (err) {
            data={
                "status": 500,
                "errors": [
                    'Something went worng'
                ]
            }
            res.json(data)
        }
    },
    'getassociatedjob_data_by_id' : async(req, res) => {
        var id = req.params.id;
        try {
        if(!id){
            console.log('noid')
            data={
                "status": 404,
                "errors": [
                    'No Id found'
                ]
            }
            return res.json(data)
        }
        var data = await associatejobdatas.findOne({_id : id})
        if(!data){
            console.log('noid')
            data={
                "status": 404,
                "errors": [
                    'No data found'
                ]
            }
        }
        res.json(data)
        } catch (error) {
            data={
                "status": 500,
                "errors": [
                    'Something went worng'
                ]
            }
            res.json(data)
        }

    }
}