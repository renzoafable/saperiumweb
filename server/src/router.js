const express = require('express');
const router = express.Router();

const homeRouter = require('./entities/home/router');
const aboutRouter = require('./entities/about/router');
const applicationRouter = require('./entities/application/router');
const careersRouter = require('./entities/careers/router');
const contactUsRouter = require('./entities/contactUs/router');
const servicesRouter = require('./entities/services/router');

router.use('/home', homeRouter);
router.use('/about', aboutRouter);
router.use('/application', applicationRouter);
router.use('/careers', careersRouter);
router.use('/contactUs', contactUsRouter);
router.use('/services', servicesRouter);


// const db = require('./database/index');
// const aboutRepo = require('./entities/about/repo')(db);
// const aboutController= require('./entities/about/controller')(aboutRepo);
// router.put('/about/edit',  aboutController.editAbout);


// const about = require('./entities/home/repo')(db);
// const abb= require('./entities/home/controller')(about);
// router.put('/home/edit',  abb.editHome);

module.exports = router;