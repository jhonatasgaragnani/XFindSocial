const mysql = require('mysql');

const con = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: null
});

con.connect();

console.log('Conexão tá bele brodi')