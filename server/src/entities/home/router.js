const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const homeRepo = require('./repo')(db);
const homeCtrl = require('./controller')(homeRepo);

router.get('/',  homeCtrl.viewHome);
router.put('/',  homeCtrl.editHome);

module.exports = router;