INSERT INTO department(department_name)
VALUES ("Sales"),
       ("Marketing"),
       ("Finance"),
       ("Engineering");

INSERT INTO roles(title, salary, department_id)
VALUES ("Salesperson", 40025, 1),
    ("Sales Manager", 50025, 1),
    ("Market Assistant", 50025, 2),
    ("Market Manager", 70025, 2),
    ("Accountant", 70025, 3 ),
    ("Accountant Manager", 90156, 3),
    ("Software Engineer", 75025, 4 ),
    ("Lead Software Engineer", 90125, 4);

-- INSERT INTO employee(first_name, last_name, role_id, manager_id)
-- VALUES ("Alice", "Johnson", 1, 1),
--        ("Derrick", "Mitchell", 1, 2),
--        ("Sophie", "Reynolds", 1, 2),    

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

