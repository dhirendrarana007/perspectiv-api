const associatejobdatas = require('../models/associatejobdatas')

module.exports = {
    'getassociatedjob_data' :async(req, res) => {
        var data= await associatejobdatas.find();
        return res.send(data);
    }
}