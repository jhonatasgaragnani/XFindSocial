const express = require('express'); 
const app = express();
const path = require('path');

const db = require('./connection.js')

app.get('/', function(req, res){

    res.sendfile(path.join(__dirname + '/public/login.html'))

    app.use(express.static(path.join(__dirname, 'public')));
});

app.listen(8080);