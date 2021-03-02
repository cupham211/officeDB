module.exports = function () {
    var express = require('express');
    var router = express.Router();

    const getSalaryRangesQuery = 'SELECT * FROM SalaryRanges';

    function getSalaryRanges(res, mysql, formInputs, complete) {
        mysql.pool.query(getSalaryRangesQuery, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.salaryRanges = rows;
            complete();
        });
    }

    router.put('/', function(req, res) {
        var mysql = req.app.get('mysql');
        var addq = `UPDATE SalaryRanges SET salaryRange = ? WHERE salaryID = ?;`;
        var values = [req.body.salaryRange, req.body.salaryID];
        sql = mysql.pool.query(addq, values, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getSalaryRanges(res, mysql, formInputs, complete);
                function complete(){
                    callbackCount++;
                    if(callbackCount >= 1){
                        res.json(formInputs);
                    }
                }
            }
        });
    })

    router.post('/', function (req, res) {
        var mysql = req.app.get('mysql');
        var addq = `INSERT INTO SalaryRanges (salaryRange) VALUES (?);`;
        var values = [req.body.salaryRange];
        sql = mysql.pool.query(addq, values, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getSalaryRanges(res, mysql, formInputs, complete);
                function complete() {
                    callbackCount++;
                    if (callbackCount >= 1) {
                        res.json(formInputs);
                    }
                }
            }
        });
    })

    router.delete('/', function(req, res) {
        var mysql = req.app.get('mysql');
        var addq = `DELETE FROM SalaryRanges WHERE salaryID = ?;`;
        var values = [req.body.salaryID];
        sql = mysql.pool.query(addq, values, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getSalaryRanges(res, mysql, formInputs, complete);
                function complete(){
                    callbackCount++;
                    if(callbackCount >= 1){
                        res.json(formInputs);
                    }
                }
            }
        });
    })    

    router.get('/', function (req, res) {
        var callbackCount = 0;
        var formInputs = {};
        var mysql = req.app.get('mysql');

        getSalaryRanges(res, mysql, formInputs, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1) {
                res.json(formInputs);
            }

        }
    });

    return router;
}();