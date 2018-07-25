const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const applicationRepo = require('./repo')(db);
const applicationCtrl = require('./controller')(applicationRepo);

router.get('/',  applicationCtrl.addApplication);


module.exports = router;