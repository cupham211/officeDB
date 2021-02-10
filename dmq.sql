-- add a new noteworthy quote
INSERT INTO NoteworthyQuotes (catchPhrase, otherAuthor)
VALUES
    ('"That''s what she said"', "Wayne Garth"),
    ('"You will thank me when they spank thee"', NULL);

-- add a new affiliate
INSERT INTO Affiliates (entityName, Industry)
VALUES
    ('Dunder Mifflin', 'Specialty Retail'),
    ('The Finer Things Club', 'Education'),
    ('Here Comes Treble', 'Entertainment');

-- add a new department
INSERT INTO Departments (deptName, budget, staffCount)
VALUES
    ('Management', '150000', '2'),
    ('Sales', '300000', '6'),
    ('Product Oversight', '120000', '3'),
    ('Reception', '40000', '1');

-- add a new salary range
INSERT INTO SalaryRanges (salaryRange)
VALUES
    ('27,000-37,000'),
    ('30,210-41,500'),
    ('37,500-50,960');

-- add a new position
INSERT INTO Positions (title, salaryTier)
VALUES
    ('Customer Service', '2'),
    ('Receptionist', '3'),
    ('Sales Rep', '5'),
    ('Regional Manager', '8');