const express = require('express');
const router = express.Router();
const { getAllSubjects } = require('./subjectController');

router.get('/', getAllSubjects);

module.exports = router;
