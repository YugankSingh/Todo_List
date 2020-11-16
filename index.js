const express = require('express');
const port = 8080;
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Listen to the port
app.listen(port, (err) => {
    if(err){
        console.log(`error in listening to the port $(port) : $(err)`);
        return;
    }
    console.log('Yup My server is listening to the port')
});


// response to the url '/'
app.get('/', (req, res) => {
    return res.render('home');
});