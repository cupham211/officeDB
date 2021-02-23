module.exports = function () {
    var express = require('express');
    var router = express.Router();

    const getEmployeesQuery = 'SELECT * FROM Employees';
    const getDepartmentsQuery = 'SELECT * FROM Departments';
    const getEmpDeptQuery = 'SELECT * FROM EmployeeDepartment';

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

    function getDepartments(res, mysql, formInputs, complete) {
        mysql.pool.query(getDepartmentsQuery, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.departments = rows;
            complete();
        });
    }

    function getEmpDept(res, mysql, formInputs, complete) {
        mysql.pool.query(getEmpDeptQuery, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.empDept = rows;
            complete();
        });
    }

    router.post('/', function (req, res) {
        var mysql = req.app.get('mysql');
        var addq = `INSERT INTO EmployeeDepartment (eID, dID) VALUES (?, ?);`;
        var values = [req.body.eID, req.body.dID];
        sql = mysql.pool.query(addq, values, function (err, rows, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getEmployees(res, mysql, formInputs, complete);
                getDepartments(res, mysql, formInputs, complete);
                getEmpDept(res, mysql, formInputs, complete);
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
        getDepartments(res, mysql, formInputs, complete);
        getEmpDept(res, mysql, formInputs, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 3) {
                res.json(formInputs);
            }

        }
    });

    return router;
}();