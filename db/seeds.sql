INSERT INTO departments (name)
VALUES  ('Marketing'),
        ('Sales'),
        ('Finance'),
        ('Legal'),
        ('HR'),
        ('Accounting');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Marketing Manager', 120000, 1),
        ('Senior Marketer', 80000, 1),
        ('Junior Marketer', 50000, 1),
        ('Sales Manager', 110000, 2),
        ('Senior Sales Rep', 75000, 2),
        ('Junior Sales Rep', 45000, 2),
        ('Developer Manager', 130000, 3),
        ('Senior Developer', 90000, 3),
        ('Junior Developer', 60000, 3),
        ('Lawyer  Manager', 140000, 4),
        ('Senior Lawyer', 90000, 4),
        ('Junior Lawyer', 60000, 4),
        ('HR Manager', 125000, 5),
        ('Senior HR Specialist', 82000, 5),
        ('Junior HR Assistant', 52000, 5),
        ('Accouing Manager', 115000, 6),
        ('Senior Accountant', 78000, 6),
        ('Junior Accountant', 48000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('James', 'Smith', 1, 1),  -- Manager for Marketing
        ('Emily', 'Johnson', 2, 2),  -- Manager for Sales
        ('Michael', 'Williams', 3, 3),  -- Manager for Finance
        ('Sarah', 'Brown', 4, 4),  -- Manager for Legal
        ('William', 'Jones', 5, 5),  -- Manager for Human Resources
        ('Elizabeth', 'Garcia', 6, 6),  -- Manager for Accounting
        ('David', 'Miller', 1, NULL),
        ('Jennifer', 'Davis', 1, NULL),
        ('Charles', 'Rodriguez', 2, NULL),
        ('Linda', 'Martinez', 2, NULL),
        ('Joseph', 'Hernandez', 3, NULL),
        ('Patricia', 'Lopez', 3, NULL),
        ('Christopher', 'Gonzalez', 4, NULL),
        ('Barbara', 'Wilson', 4, NULL),
        ('Daniel', 'Anderson', 5, NULL),
        ('Paul', 'Thomas', 5, NULL),
        ('Margaret', 'Taylor', 6, NULL),
        ('Nancy', 'Moore', 6, NULL),
        ('Donald', 'Jackson', 1, NULL),
        ('Rebecca', 'White', 2, NULL);