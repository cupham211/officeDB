module.exports = function(){
    var express = require('express');
    var router = express.Router();

    const getQuotesQuery = 'SELECT * FROM NoteworthyQuotes';
    const getPositionsQuery = 'SELECT * FROM Positions';
    const getDeptQuery = 'Select * FROM Departments';
    const getEmpTableQuery = `SELECT Employees.*, Positions.title, Departments.deptName, NoteworthyQuotes.catchPhrase,
        CASE WHEN deptHead = 1 THEN 'Yes' ELSE 'No' END AS bool 
        FROM Employees LEFT JOIN Positions ON Employees.positionID = Positions.positionID
        LEFT JOIN Departments ON Employees.departmentID = Departments.deptID
        LEFT JOIN NoteworthyQuotes ON Employees.quoteID = NoteworthyQuotes.quoteID;`;

    function getPositions(res, mysql, formInputs, complete){
        mysql.pool.query(getPositionsQuery, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.positions = rows;
            complete();
        });
    }

    function getDepts(res, mysql, formInputs, complete){
        mysql.pool.query(getDeptQuery, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.depts = rows;
            complete();
        });
    }

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

    function getEmpTable(res, mysql, formInputs, complete){
        mysql.pool.query(getEmpTableQuery, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }
            formInputs.employeeTable = rows;
            complete();
        });
    }

    router.post('/', function(req, res) {
        var mysql = req.app.get('mysql');
        var addq = `INSERT INTO Employees (fName, lName, alias, positionID, departmentID, employStatus, deptHead, quoteID)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
        var values = [req.body.fName, req.body.lName, req.body.alias, req.body.positionID, req.body.deptID, req.body.employStatus, 
            req.body.deptHead, req.body.quoteID];
        sql = mysql.pool.query(addq, values, function(err, rows, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            } else {
                var callbackCount = 0;
                var formInputs = {};
                getEmpTable(res, mysql, formInputs, complete);
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
        getPositions(res, mysql, formInputs, complete);
        getDepts(res, mysql, formInputs, complete);
        getQuotes(res, mysql, formInputs, complete);
        getEmpTable(res, mysql, formInputs, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 4){
                res.json(formInputs);
            }

        }
    });

    return router;
}();
