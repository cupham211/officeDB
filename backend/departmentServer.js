module.exports = function () {
    var express = require('express');
    var router = express.Router();

    const getDepartmentsQuery = 'SELECT * FROM Departments';

    function getDepartments(res, mysql, formInputs, complete) {
        mysql.pool.query(getDepartmentsQuery, function (err, rows, fields) {
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
        var addq = `INSERT INTO Departments (deptName, budget, staffCount) VALUES (?, ?, ?);`;
        var values = [req.body.deptName, req.body.budget, req.body.staffCount];
        sql = mysql.pool.query(addq, values, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getDepartments(res, mysql, formInputs, complete);
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

        getDepartments(res, mysql, formInputs, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1) {
                res.json(formInputs);
            }

        }
    });

    return router;
}();