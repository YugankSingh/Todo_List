const express = require('express');

const router = express.Router();
const taskCategoryController = require('../controllers/task_category_controller');


router.get('/delete', taskCategoryController.delete);
router.get('/update', taskCategoryController.update);
router.get('/create', taskCategoryController.create);

module.exports = router;