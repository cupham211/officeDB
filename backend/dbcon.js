var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_phamchri',
  password        : '0259',
  database        : 'cs340_phamchri'
});

module.exports.pool = pool;
