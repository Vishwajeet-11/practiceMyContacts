const mysql = require("mysql2")

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password: "admin",
    database: "myContacts"
})

module.exports = pool.promise()