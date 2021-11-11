var mysql = require('mysql');

// Setup for mysql connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "anirud2632002"
  });
   con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  }); 
  
module.exports = con;