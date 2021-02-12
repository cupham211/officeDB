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

INSERT INTO NoteworthyQuotes(catchPhrase, otherAuthor)
VALUES
    ('"That''s what she said"', "Wayne Garth"),
    ('"You will thank me when they spank thee"', NULL);

INSERT INTO Affiliates (entityName, Industry) 
VALUES ('Dunder Mifflin', 'Specialty Retail');

INSERT INTO Employees (fName, lName, alias, positionID, departmentID, employStatus, deptHead, quoteID)
VALUES
    ('Pamela', 'Beesley', 'Big Boobz', 6, 4, 'FTE', 1, NULL),
    ('Andrew', 'Bernard', 'The Nard Dog', 7, 2, 'FTE', 0, 2),
    ('Kelly', 'Kapoor', NULL, 5, 5, 'FTE', 1, NULL);

INSERT INTO EmployeeAffiliate (eID, aID)
VALUES
    (5, 5),
    (6, 6),
    (7, 1);