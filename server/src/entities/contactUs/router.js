const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const contactUsRepo = require('./repo')(db);
const contactUsCtrl = require('./controller')(contactUsRepo);

// place methods here


module.exports = router;