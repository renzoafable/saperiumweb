const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const aboutRepo = require('./repo')(db);
const aboutCtrl = require('./controller')(aboutRepo);

// place methods here
router.get('/', aboutCtrl.viewAbout);
//admin
router.put('/', aboutCtrl.editAbout);
router.post('/testimonial', aboutCtrl.addTestimonial);
router.put('/testimonial', aboutCtrl.editTestimonial);
module.exports = router;