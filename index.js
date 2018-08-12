const app = require('./config/express')();

require('./config/express')

const express = require('express')

require('./config/database'); 

const path = require('path')

// Gerencia as rotas
//app.get('/', function(req, res){

    //res.sendfile(path.join(__dirname + '/public/login.html'))

    //app.use(express.static(path.join(__dirname, 'public')));
//});

// Porta q renderiza o login.html
app.listen(app.get('port'), () => {
    console.log ('Servidor rodando na porta 3001... ')
});