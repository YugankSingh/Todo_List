const db = require('../config/mongoose');
const Contact = require('../models/task');


module.exports.home = (req,res) => {
    Contact.find({}, function(err, taskList){
        if(err){
            console.log("error in fetching task");
            return;
        }
        return res.render('home', {
            tasks_list: taskList
        })
    })
};


// get button from DOM
