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


module.exports = router;