const express = require("express");
const associatejobdatas = require('../models/associatejobdatas')
const associatedjobs = require('../controllers/associatejob.controller')
const { route } = require("express/lib/router");

const router = express.Router();

router.get('/', associatedjobs.getassociatedjob_data)

module.exports = router;