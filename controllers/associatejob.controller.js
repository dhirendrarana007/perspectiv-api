const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const associatejobdatas = require('../models/associatejobdata.model');
const paymentplans = require('../models/paymentplan.model');

module.exports = {
    'getassociatedjob_data' : async(req, res) => {
        try {
            associatejobdatas.aggregate( [
                {
                    $lookup: {
                        from: "locationdatas",
                        localField: "locationId",
                        foreignField: "_id",
                        as: "locationId",
                    }
                },
                {
                    $lookup: {
                        from: "jobroleanswers",
                        localField: "jobTitleId",
                        foreignField: "_id",
                        as: "jobTitleId",
                    }
                },
                {
                    $lookup: {
                        from: "jobroleanswers",
                        localField: "roleId",
                        foreignField: "_id",
                        as: "roleId",
                    }
                },
                    {
                        $project: {
                            _id: 1,
                            userId: 1,
                            roleId:1,
                            jobTitleId:1,
                            industryId: 1,
                            educationLevelId: 1,
                            skillLevelId: 1,
                            locationId: 1,
                            campanySize:1,
                            employmentType: 1,
                            employmentMode: 1,
                            hardSkill: 1,
                            softSkill: 1,
                            selfAssessmentData: 1,
                            selfAssessmentResult: 1,
                            feelsuits1: 1,
                            feelsuits2: 1,
                            feelsuits3: 1,
                            feelsuits4: 1,
                            startDate: 1,
                            image: 1,
                            destination: 1,
                            companyDesc: 1,
                            jobDesc: 1,
                            createdAt: 1,
                            updatedAt: 1
                        }
                    }
                
            ]).exec((err, result)=>{
                    if(err){
                        res.send({error:err});
                    }
                    if(result){
                        res.send({
                            error: false,
                            data: result
                        })
                    }
                })
        } catch (err) {
           // console.log(err);
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
        const id = req.params.id;
        try {
            associatejobdatas.aggregate( [
                {
                    $lookup: {
                        from: "locationdatas",
                        localField: "locationId",
                        foreignField: "_id",
                        as: "locationId",
                    }
                },
                {
                    $lookup: {
                        from: "jobroleanswers",
                        localField: "jobTitleId",
                        foreignField: "_id",
                        as: "jobTitleId",
                    }
                },
                
                    {
                        $project: {
                            _id: 1,
                            userId: 1,
                            roleId: 1,
                            roleId:1,
                            jobTitleId:1,
                            industryId: 1,
                            educationLevelId: 1,
                            skillLevelId: 1,
                            locationId: 1,
                            campanySize:1,
                            employmentType: 1,
                            employmentMode: 1,
                            hardSkill: 1,
                            softSkill: 1,
                            selfAssessmentData: 1,
                            selfAssessmentResult: 1,
                            feelsuits1: 1,
                            feelsuits2: 1,
                            feelsuits3: 1,
                            feelsuits4: 1,
                            startDate: 1,
                            image: 1,
                            destination: 1,
                            companyDesc: 1,
                            jobDesc: 1,
                            createdAt: 1,
                            updatedAt: 1
                        }
                    },
                    {
                        $match : { _id : ObjectId(id)} 
                    },
                
            ]).exec((err, result)=>{
                    if(err){
                        res.send({error:err});
                    }
                    if(result){
                        res.send({
                            error: false,
                            data: result,
                        })
                    }
                })
        } catch (error) {
            console.log(error)
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