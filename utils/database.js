const mysql = require("mysql2");

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "1234567",
    database : "blog"
});

module.exports = pool.promise();