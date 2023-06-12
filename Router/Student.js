const express = require('express');
const StudentController = require('../Controller/Student');

const router = express.Router();
const studentController = new StudentController();

router.get('/insert', studentController.InsertBulk);

module.exports = router;