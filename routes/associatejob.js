const express = require("express");
const associatedjobs = require('../controllers/associatejob.controller')

const router = express.Router();

router.get('/', associatedjobs.getassociatedjob_data);
router.get('/:id',associatedjobs.getassociatedjob_data_by_id);



module.exports = router;