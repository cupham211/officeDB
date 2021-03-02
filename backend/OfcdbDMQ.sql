--There are some DMQ used to manipulate The Office DB website


--SELECT QUERIES
--Query used to populate noteworthy quotes form line-item and table
SELECT * FROM NoteworthyQuotes;

--Query used to populate affiliates form line-item and table
SELECT * FROM Affiliates;

--Query used to populate positions form line-item and table
SELECT * FROM Positions;

--Query used to populate departments form line-item and table
SELECT * FROM Departments;

--Query used to populate employees form line-item
SELECT employeeID, CONCAT(fName, ' ',lName) AS fullName
FROM Employees;

--Query used to populate salary range form line-item and table
SELECT * FROM SalaryRanges;

--Query used to populate employees table
SELECT Employees.*, Positions.title, Departments.deptName, NoteworthyQuotes.catchPhrase,
CASE WHEN deptHead = 1 THEN 'Yes' ELSE 'No' END AS bool
FROM Employees
LEFT JOIN Positions ON Employees.positionID = Positions.positionID
LEFT JOIN Departments ON Employees.departmentID = Departments.deptID
LEFT JOIN NoteworthyQuotes ON Employees.quoteID = NoteworthyQuotes.quoteID;

--Query used to populate EmployeeAffiliate join table
SELECT EmployeeAffiliate.eID, Employees.fName, Employees.lName, EmployeeAffiliate.aID, Affiliates.entityName
FROM EmployeeAffiliate
JOIN Employees ON Employees.employeeID = EmployeeAffiliate.eID
JOIN Affiliates ON Affiliates.affID = EmployeeAffiliate.aID;



--INSERT QUERIES
--add a new Noteworthy Quote
INSERT INTO NoteworthyQuotes(catchPhrase, otherAuthor) VALUES (:catchPhraseInput, :otherAuthorInput);

--add a new affiliate
INSERT INTO Affiliates (entityName, Industry) VALUES (:entityNameInput, :IndustryInput);

--add a new position
INSERT INTO Positions (title, salaryTier) VALUES (:titleInput, :salaryTierInput);

--add a new department
INSERT INTO Departments (deptName, budget, staffCount) VALUES (:deptNameInput, :budgetInput, :staffCountInput);

--add a new employee
INSERT INTO Employees (fName, lName, alias, positionID, departmentID, employStatus, deptHead, quoteID)
VALUES (:fNameInput, :lNameInput, :aliasInput, :positionIDInput, :departmentIDInput, :employStatusInput, :deptHeadInput, :quoteIDInput);

--add a new salary tier
INSERT INTO SalaryRanges (salaryRange) VALUES (:salaryRangeInput);

--add a new M:M relationship to Employee-Affiliates
INSERT INTO EmployeeAffiliate (eID, aID) VALUES (:eIDInput, :aIDInput);

--UPDATE QUERIES
--update an employee
UPDATE Employees
SET
    positionID = :positionIDInput, 
    departmentID = :departmentIDInput,
    quoteID = :quoteIDInput
WHERE employeeID = :employeeIDInput;

--update an affiliate
UPDATE Affiliates
SET
    entityName = :entityNameInput,
    industry = :IndustryInput
WHERE affID = :affIDInput;

--update a department
UPDATE Departments
SET
    deptName = :deptNameInput,
    budget = :budgetInput,
    staffCount = :staffCountInput
WHERE deptID = :deptIDInput;

--update a position
UPDATE Positions
SET
    title = :titleInput,
    salaryTier = :salaryTierInput
WHERE positionID = :positionIDInput;

--update a salary range
UPDATE SalaryRanges 
SET 
    salaryRange = salaryRangeInput 
WHERE salaryID = :salaryIDInput;

--update a quote
UPDATE NoteworthyQuotes
SET
    catchPhrase = :catchPhraseInput,
    otherAuthor = :otherAuthorInput
WHERE quoteID = :quoteIDInput;

--DELETE QUERIES
--delete M:M relationship from Employee-Affiliates
DELETE EmployeeAffiliate
FROM EmployeeAffiliate
INNER JOIN Employees ON Employees.employeeID = EmployeeAffiliate.eID
WHERE Employees.employeeID = :employeeIDInput AND EmployeeAffiliate.aID = :aIDInput;

--delete an affiliate
DELETE FROM Affiliates 
WHERE affID = :affIDInput;

--delete an employee
DELETE FROM Employees
WHERE employeeID = :employeeIDInput;

------
--delete a department
DELETE FROM Departments
WHERE deptID = :deptIDInput;

--delete a position
DELETE FROM Positions
WHERE positionID = :positionIDInput;

--delete a salary range
DELETE FROM SalaryRanges 
WHERE salaryID = :salaryIDInput;

--delete a quote
DELETE FROM NoteworthyQuotes
WHERE quoteID = :quoteIDInput;