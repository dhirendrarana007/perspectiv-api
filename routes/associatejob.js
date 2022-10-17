const express = require("express");
const associatejobdatas = require('../models/associatejobdatas')
const associatedjobs = require('../controllers/associatejob.controller')
const { route } = require("express/lib/router");

const router = express.Router();

router.get('/', associatedjobs.getassociatedjob_data)
router.get('/:id',associatedjobs.getassociatedjob_data_by_id)

module.exports = router;