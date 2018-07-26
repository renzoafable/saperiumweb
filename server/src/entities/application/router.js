const express = require('express');
const router = express.Router();

const db = require('../../database/index');
const applicationRepo = require('./repo')(db);
const applicationCtrl = require('./controller')(applicationRepo);

router.post('/',  applicationCtrl.addApplication);
router.get('/question-all',  applicationCtrl.viewQuestions);
router.post('/answer-add',  applicationCtrl.addAnswer);
router.get('/answers/:application_id',  applicationCtrl.viewAnswersByUser);
router.get('/all',  applicationCtrl.viewApplications);


module.exports = router;