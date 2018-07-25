const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const careersRepo = require('./repo')(db);
const careersCtrl = require('./controller')(careersRepo);

// place methods here


module.exports = router;