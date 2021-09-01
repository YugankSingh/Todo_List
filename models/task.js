const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {type: String, required: true},
    due_date: {type: String},
    categoryName: {type: String},
    categoryColor: {type: String}
});


const Task = mongoose.model('Task', taskSchema);

module.exports =Task;