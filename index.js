const express = require('express');
const port = 8080;
const path = require('path');


const db = require('./config/mongoose');
const Task = require('./models/task');

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
    console.log('Yup My server is listening to the port : ', port)
});


