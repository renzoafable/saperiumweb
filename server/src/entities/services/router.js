const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const servicesRepo = require('./repo')(db);
const servicesCtrl = require('./controller')(servicesRepo);

// place methods here
router.get('/getServices', servicesCtrl.getServices);
router.put('/editServices', servicesCtrl.editServices);


module.exports = router;