const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const contactUsRepo = require('./repo')(db);
const contactUsCtrl = require('./controller')(contactUsRepo);

// place methods here
router.put('/', contactUsCtrl.editContactUs);
router.get('/', contactUsCtrl.getContactUs);
router.get('/phones', contactUsCtrl.getPhoneNums);
router.post('/phones', contactUsCtrl.addPhoneNums);

module.exports = router;
