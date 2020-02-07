const {createPool} = require('mysql');

//const db = require('mysql');
const pool = createPool({
    port: 3306,
    host:'localhost',
    user:'root',
    password:'12345',
    database:'firstdatabase',
    connectionLimit:20
});

module.exports = pool;
