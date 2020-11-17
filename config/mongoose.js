//require the library
const mongoose = require('mongoose');

//connect to the db
mongoose.connect('mongodb://localhost/task_list_db');

//acquire the connection 
const db = mongoose.connection;


// check if db is running or 
db.on('error', console.error.bind('error connecting to the db'));

db.once('open', () => {
    console.log('succesfully connected to the library')
});