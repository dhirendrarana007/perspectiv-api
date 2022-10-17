const mongoose = require("mongoose");
const associatejobdatasSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.Object,
    roleId : String,
    usertype : mongoose.Schema.Types.Object,
    industryId : mongoose.Schema.Types.Object,
    educationLevelId : mongoose.Schema.Types.Object,
    skillLevelId : mongoose.Schema.Types.Object,
    locationId : mongoose.Schema.Types.Object,
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