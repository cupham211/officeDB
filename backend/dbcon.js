var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : '_____',
  password        : '_____',
  database        : '_____'
});

module.exports.pool = pool;
