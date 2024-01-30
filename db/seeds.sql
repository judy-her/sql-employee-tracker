INSERT INTO department
VALUES (1,"Sales"),
       (2,"Marketing"),
       (3,"Finance"),
       (4,"Engineering"),
       (5,"CEO");

INSERT INTO roles(id,title, salary, department_id)
VALUES (1,"Salesperson", 40025, 1),
    (2,"Sales Manager", 50025, 1),
    (3,"Market Assistant", 50025, 2),
    (4,"Market Manager", 70025, 2),
    (5,"Accountant", 70025, 3 ),
    (6,"Accountant Manager", 90156, 3),
    (7,"Software Engineer", 75025, 4 ),
    (8,"Lead Software Engineer", 90125, 4);
   

INSERT INTO employee(first_name, last_name, role_id)
VALUES ("Alice", "Turner", 1),
       ("Bob", "Smith", 1),
       ("Derreck", "Mitchell", 2),
       ("Sophie", "Reynolds", 3),
       ("Emma", "Johnson", 4),
       ("Benjamin", "Clark", 5),
       ("Olivia", "Martinez", 6),
       ("Liam", "Thompson", 7),
       ("Sophia", "Wright", 7),
       ("Ava", "Walker", 8);

UPDATE employee AS emp
JOIN employee AS manager ON manager.role_id = 2
SET emp.manager_id = manager.id
WHERE emp.role_id = 1;

UPDATE employee AS emp
JOIN employee AS manager ON manager.role_id = 8
SET emp.manager_id = manager.id
WHERE emp.role_id = 7;

UPDATE employee AS emp
JOIN employee AS manager ON manager.role_id = 6
SET emp.manager_id = manager.id
WHERE emp.role_id = 5;

UPDATE employee AS emp
JOIN employee AS manager ON manager.role_id = 4
SET emp.manager_id = manager.id
WHERE emp.role_id = 3;


SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

