// Require Normal
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');

// Seta o app.express, o bodyParser e return app()
module.exports = () => {
    const app = express();

    app.set('port', (process.env.PORT || 3001));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign({cwd: 'server'})
    .include('models')
    .include('controllers')
    .then('routes')
    //  Onde a mágica acontece
    .into(app);

    return app;
}