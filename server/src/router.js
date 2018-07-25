const express = require('express');
const router = new express.Router();
const db = require('./database/index');

const homeRepo = require('./entities/home/repo')(db);
const homeController = require('./entities/home/controller')(homeRepo);
router.put('/home/edit',  homeController.editHome);

const aboutRepo = require('./entities/about/repo')(db);
const aboutController = require('./entities/about/controller')(aboutRepo);
router.put('/about/edit',  aboutController.editAbout);

module.exports = router;