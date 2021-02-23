module.exports = function () {
    var express = require('express');
    var router = express.Router();

    const getEmployeesQuery = 'SELECT * FROM Employees';
    const getPositionsQuery = 'SELECT * FROM Positions';
    const getEmpPosQuery = 'SELECT * FROM EmployeePosition';

    function getEmployees(res, mysql, formInputs, complete) {
        mysql.pool.query(getEmployeesQuery, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.employees = rows;
            complete();
        });
    }

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

    function getEmpPos(res, mysql, formInputs, complete) {
        mysql.pool.query(getEmpPosQuery, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.empPos = rows;
            complete();
        });
    }

    router.post('/', function (req, res) {
        var mysql = req.app.get('mysql');
        var addq = `INSERT INTO EmployeePosition (eID, pID) VALUES (?, ?);`;
        var values = [req.body.eID, req.body.pID];
        sql = mysql.pool.query(addq, values, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getEmployees(res, mysql, formInputs, complete);
                getPositions(res, mysql, formInputs, complete);
                getEmpPos(res, mysql, formInputs, complete);
                function complete() {
                    callbackCount++;
                    if (callbackCount >= 3) {
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
        getEmployees(res, mysql, formInputs, complete);
        getPositions(res, mysql, formInputs, complete);
        getEmpPos(res, mysql, formInputs, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 3) {
                res.json(formInputs);
            }

        }
    });

    return router;
}();