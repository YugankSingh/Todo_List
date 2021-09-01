const db = require('../config/mongoose');
const Contact = require('../models/task');

var categoryColor = {
    "personal":"blue",
    "school": "green",
    "home": "#D63031",
    "work": "#616C6F",
    "others": "purple",
    "": "transparent"
};



//create new task
module.exports.create = (req, res) => {
    if (req.body.date=='')
        req.body.date="NO DEADLINE"
    Contact.create({
        description: req.body.description,
        due_date: req.body.date,
        categoryName: req.body.category.toUpperCase(),
        categoryColor: categoryColor[req.body.category]
    },
     function(err,newTask){
        if(err){
            console.log("error in creating the contact", err);
            return;
        }
    })
    res.redirect('back');

};



module.exports.delete = (req, res) => {

    let idList = req.body.id
    if(idList==null)
        return res.redirect('back');
    if(typeof idList == "string")
        idList=[idList];
    console.log(req.body);
    for(let i of idList){
    Contact.findByIdAndDelete(i, function(err){
        console.log(i);
        if(err){
            console.log('error in deleting the object');
            return;
        }});
    }
    return res.redirect('back');
};