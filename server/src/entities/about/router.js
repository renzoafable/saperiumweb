const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const aboutRepo = require('./repo')(db);
const aboutCtrl = require('./controller')(aboutRepo);

// place methods here


module.exports = router;