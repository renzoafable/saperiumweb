const express = require('express');
const router = new express.Router();
const db = require('./database/index');

const homeRepo = require('./entities/home/repo')(db);
const homeController = require('./entities/home/controller')(homeRepo);
router.put('/home/edit',  homeController.editHome);

module.exports = router;