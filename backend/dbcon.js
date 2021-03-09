var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_acuarioj',
  password        : '7170',
  database        : 'cs340_acuarioj'
});

module.exports.pool = pool;
