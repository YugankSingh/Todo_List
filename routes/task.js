const express = require('express');

const router = express.Router();
const taskControler = require('../controllers/task_controller');


router.post('/delete', taskControler.delete);
router.post('/create', taskControler.create);

module.exports = router;