module.exports = function () {
    var express = require('express');
    var router = express.Router();

    const getPositionsQuery = 'SELECT * FROM Positions';
    const getSalaryRangesQuery = 'SELECT * FROM SalaryRanges';

    function getPositions(res, mysql, formInputs, complete) {
        mysql.pool.query(getPositionsQuery, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.positions = rows;
            complete();
        });
    }

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
        var addq = `UPDATE Positions SET title = ?, salaryTier = ? WHERE positionID = ?;`;
        var values = [req.body.title, req.body.salaryTier, req.body.positionID];
        sql = mysql.pool.query(addq, values, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getPositions(res, mysql, formInputs, complete);
                getSalaryRanges(res, mysql, formInputs, complete);
                function complete(){
                    callbackCount++;
                    if(callbackCount >= 2){
                        res.json(formInputs);
                    }
                }
            }
        });
    })

    router.post('/', function (req, res) {
        var mysql = req.app.get('mysql');
        var addq = `INSERT INTO Positions (title, salaryTier) VALUES (?, ?);`;
        var values = [req.body.title, req.body.salaryTier];
        sql = mysql.pool.query(addq, values, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getPositions(res, mysql, formInputs, complete);
                getSalaryRanges(res, mysql, formInputs, complete);
                function complete() {
                    callbackCount++;
                    if (callbackCount >= 2) {
                        res.json(formInputs);
                    }
                }
            }
        });
    })
    
    router.delete('/', function(req, res) {
        var mysql = req.app.get('mysql');
        var addq = `DELETE FROM Positions WHERE positionID = ?;`;
        var values = [req.body.positionID];
        sql = mysql.pool.query(addq, values, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getPositions(res, mysql, formInputs, complete);
                getSalaryRanges(res, mysql, formInputs, complete);
                function complete(){
                    callbackCount++;
                    if(callbackCount >= 2){
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

        getPositions(res, mysql, formInputs, complete);
        getSalaryRanges(res, mysql, formInputs, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 2) {
                res.json(formInputs);
            }

        }
    });

    return router;
}();