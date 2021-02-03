const express = require('express');
const router = express.Router();
const app = express();
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');
const expressEjsLayout = require('express-ejs-layouts')

//mysql
const engine = new mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'subscription_management',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    Promise: bluebird
});


//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(3000);
console.log('server listening on port 3000'); 