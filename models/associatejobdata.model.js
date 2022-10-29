const mongoose = require("mongoose");
const associatejobdatasSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    roleId : String,
    usertype : mongoose.Schema.Types.ObjectId,
    industryId : mongoose.Schema.Types.ObjectId,
    educationLevelId : mongoose.Schema.Types.ObjectId,
    skillLevelId : mongoose.Schema.Types.ObjectId,
    locationId :  mongoose.Schema.Types.ObjectId,
    campanySize : String,
    employmentType : String,
    employmentMode : String,
    hardSkill : [],
    softSkill : [],
    selfAssessmentData : [],
    selfAssessmentResult : String,
    feelsuits1 : [],
    feelsuits2 : [],
    feelsuits3 : [],
    feelsuits4 : [],
    startDate : Date,
    image : String,
    destination : String,
    companyDesc : String,
    jobDesc : String,
   
});

module.exports = mongoose.model("associatejobdatas", associatejobdatasSchema);;