CREATE TABLE NoteworthyQuotes (
    quoteID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    catchPhrase varchar(255) NOT NULL,
    otherAuthor varchar(255)
);

CREATE TABLE Affiliates (
    affID INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    entityName varchar(255) NOT NULL UNIQUE,
    industry varchar(255)
);

CREATE TABLE Departments (
    deptID INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    deptName varchar(255) UNIQUE,
    budget INT,
    staffCount INT
);

CREATE TABLE SalaryRanges(
    salaryID INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    salaryRange varchar(255)
);

CREATE TABLE Positions (
    positionID INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title varchar(255),
    salaryTier INT, 
    FOREIGN KEY (salaryTier)
        REFERENCES SalaryRanges(salaryID)
);

CREATE TABLE Employees (
    employeeID INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fName varchar(255) NOT NULL,
    lName varchar(255) NOT NULL,
    alias varchar(255),
    positionID INT,
    FOREIGN KEY (positionID)
        REFERENCES Positions(positionID),
    departmentID INT,
    FOREIGN KEY (departmentID)
        REFERENCES Departments(deptID),
    employStatus varchar(255),
    deptHead TINYINT(1),
    quoteID INT,
    FOREIGN KEY (quoteID)
        REFERENCES NoteworthyQuotes(quoteID),
    CONSTRAINT fullName UNIQUE (fName, lName)
);

CREATE TABLE EmployeeAffiliate (
    eID INT(11),
    aID INT(11),
    FOREIGN KEY (eID)
        REFERENCES Employees(employeeID),
    FOREIGN KEY (aID)
        REFERENCES Affiliates(affID),
    PRIMARY KEY (eID, aID)
);
