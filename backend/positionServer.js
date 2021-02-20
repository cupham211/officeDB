module.exports = function () {
    var express = require('express');
    var router = express.Router();

    const getPositionsQuery = 'SELECT * FROM Positions';

    function getPositions(res, mysql, formInputs, complete) {
        mysql.pool.query(getPositionsQuery, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.quotes = rows;
            complete();
        });
    }

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
                function complete() {
                    callbackCount++;
                    if (callbackCount >= 1) {
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
        function complete() {
            callbackCount++;
            if (callbackCount >= 1) {
                res.json(formInputs);
            }

        }
    });

    return router;
}();