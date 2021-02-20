module.exports = function(){
    var express = require('express');
    var router = express.Router();

    const getAffQuery = 'SELECT * FROM Affiliates';
    const getEmployeesQuery = 'Select employeeID, CONCAT(fName, \' \', lName) AS fullName FROM Employees';
    const getEmpAffQuery = `SELECT EmployeeAffiliate.eID, Employees.fName, Employees.lName, EmployeeAffiliate.aID, Affiliates.entityName
        FROM EmployeeAffiliate
        JOIN Employees ON Employees.employeeID = EmployeeAffiliate.eID
        JOIN Affiliates ON Affiliates.affID = EmployeeAffiliate.aID;`;

    function getAffiliates(res, mysql, formInputs, complete){
        mysql.pool.query(getAffQuery, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.affiliates = rows;
            complete();
        });
    }

    function getEmployees(res, mysql, formInputs, complete){
        mysql.pool.query(getEmployeesQuery, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.employees = rows;
            complete();
        });
    }

    function getEmpAffTable(res, mysql, formInputs, complete){
        mysql.pool.query(getEmpAffQuery, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.empAff = rows;
            complete();
        });
    }

    router.post('/', function(req, res) {
        var mysql = req.app.get('mysql');
        var addq = `INSERT INTO Affiliates (entityName, industry) VALUES (?, ?);`;
        var values = [req.body.entityName, req.body.industry];
        sql = mysql.pool.query(addq, values, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getAffiliates(res, mysql, formInputs, complete);
                function complete(){
                    callbackCount++;
                    if(callbackCount >= 1){
                        res.json(formInputs);
                    }
                }
            }
        });
    })

    router.post('/empAff', function(req, res) {
        var mysql = req.app.get('mysql');
        var addq = `INSERT INTO EmployeeAffiliate (eID, aID) VALUES (?, ?);`;
        var values = [req.body.eID, req.body.aID];
        sql = mysql.pool.query(addq, values, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getEmpAffTable(res, mysql, formInputs, complete);
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
        getAffiliates(res, mysql, formInputs, complete);
        getEmployees(res, mysql, formInputs, complete);
        getEmpAffTable(res, mysql, formInputs, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 3){
                res.json(formInputs);
            }

        }
    });

    return router;
}();