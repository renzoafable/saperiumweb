const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const servicesRepo = require('./repo')(db);
const servicesCtrl = require('./controller')(servicesRepo);

// place methods here


module.exports = router;