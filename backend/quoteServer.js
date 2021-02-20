module.exports = function(){
    var express = require('express');
    var router = express.Router();

    const getQuotesQuery = 'SELECT * FROM NoteworthyQuotes';

    function getQuotes(res, mysql, formInputs, complete){
        mysql.pool.query(getQuotesQuery, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.quotes = rows;
            complete();
        });
    }

    router.post('/', function(req, res) {
        var mysql = req.app.get('mysql');
        var addq = `INSERT INTO NoteworthyQuotes(catchPhrase, otherAuthor) VALUES (?, ?);`;
        var values = [req.body.catchPhrase, req.body.otherAuthor];
        sql = mysql.pool.query(addq, values, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getQuotes(res, mysql, formInputs, complete);
                function complete(){
                    callbackCount++;
                    if(callbackCount >= 1){
                        res.json(formInputs);
                    }
                }
            }
        });
    })

    router.get('/', function(req, res){
        var callbackCount = 0;
        var formInputs = {};
        var mysql = req.app.get('mysql');

        getQuotes(res, mysql, formInputs, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.json(formInputs);
            }

        }
    });

    return router;
}();