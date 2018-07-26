const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const aboutRepo = require('./repo')(db);
const aboutCtrl = require('./controller')(aboutRepo);

// place methods here
router.put('/', aboutCtrl.editAbout);
router.get('/', aboutCtrl.viewAbout);

module.exports = router;