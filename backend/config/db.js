const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"Lotto",
multipleStatements: true 
})

module.exports = db;