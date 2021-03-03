var express = require('express');
var mysql = require('./dbcon.js');
var CORS = require('cors');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// ex: node server.js 8880 --will run on port 8880
app.set('port', process.argv[2]);
app.use(CORS());
app.set('mysql', mysql);
app.use('/employee', require('./employeeServer.js'));
app.use('/affiliate', require('./affiliateServer.js'));
app.use('/quotes', require('./quoteServer.js'));
app.use('/departments', require('./departmentServer.js'));
app.use('/positions', require('./positionServer.js'));
app.use('/salaryRanges', require('./salaryRangeServer.js'));
app.use('/employee-departments', require('./employee-departmentServer.js'));
app.use('/employee-positions', require('./employee-positionServer.js'));


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
//flip2 port 8880
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
