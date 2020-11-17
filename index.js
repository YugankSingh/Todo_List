const express = require('express');
const port = 8080;
const path = require('path');


const db = require('./config/mongoose');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.urlencoded());
app.use(express.static("assets"));

app.use('/', require('./routes'));

// Listen to the port
app.listen(port, (err) => {
    if(err){
        console.log(`error in listening to the port $(port) : $(err)`);
        return;
    }
    console.log('Yup My server is listening to the port')
});

var taskList = [
    {
        description: "shut the fuck up"
    },
    {
        description: 'shut the fuck down'
    }
];


//create new task
app.post('/new-task', (req, res) => {
    console.log(req.body);
    taskList.push({
        description: req.body.task,
        category: req.body.category,
        due_date: req.body.date
     });
    res.redirect('back');
});

app.post('/remove-task', (req, res) => {
    console.log(req.body);
    res.redirect('back');
});