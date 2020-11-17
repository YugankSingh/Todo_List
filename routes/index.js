const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('router loaded');



router.get('/', homeController.home);
router.use('/task', require('./task'));
router.use('/task-category', require('./task_category'));

module.exports = router;