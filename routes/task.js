const express = require('express');

const router = express.Router();
const taskControler = require('../controllers/task_controller');


router.get('/delete', taskControler.delete);
router.get('/update', taskControler.update);
router.get('/create', taskControler.create);

module.exports = router;