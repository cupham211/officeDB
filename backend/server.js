var express = require('express');
var mysql = require('./dbcon.js');
var CORS = require('cors');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// ex: node server.js 3450 --will run on port 3450
app.set('port', process.argv[2]);
app.use(CORS());
app.set('mysql', mysql);
app.use('/employee', require('./employeeServer.js'));
app.use('/affiliate', require('./affiliateServer.js'));
app.use('/quotes', require('./quoteServer.js'));

const getSalariesQuery = 'Select * FROM SalaryRanges';

app.get('/salaries',function(req,res,next){
  mysql.pool.query(getSalariesQuery, function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
      res.json({rows});
  });
});

app.get('/',function(req,res,next){
  var context = {};
  var createString = "CREATE TABLE diagnostic(" +
  "id INT PRIMARY KEY AUTO_INCREMENT," +
  "text VARCHAR(255) NOT NULL)";
  mysql.pool.query('DROP TABLE IF EXISTS diagnostic', function(err){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query(createString, function(err){
      if(err){
        next(err);
		return;
      }
	  mysql.pool.query('INSERT INTO diagnostic (`text`) VALUES ("MySQL is Working!")',function(err){
	    mysql.pool.query('SELECT * FROM diagnostic', function(err, rows, fields){
		  context.results = JSON.stringify(rows);
		  res.render('home',context);
		});
	  });
    });
  });
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
//flip2 port 3450
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
