var mysql = require('mysql');
 
console.log('Get connection ...');

/*
var conn = mysql.createConnection({
  database: 'thuvien',
  host: "localhost",
  user: "root",
  password: ""
});
*/

var connString = 'mysql://root:@localhost/mdb?charset=utf8_general_ci&timezone=-0700';
 
var conn = mysql.createConnection(connString);
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});