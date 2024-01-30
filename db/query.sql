SELECT roles.id, roles.title, roles.salary, department.department_name 
FROM roles
JOIN department ON roles.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, roles.title as role_title, department.department_name, roles.salary, employee.manager_id 
FROM employee 
JOIN roles ON employee.role_id = roles.id
JOIN department ON roles.department_id = department.id;

-- SELECT e1.id, e1.first_name, e1.last_name, e1.role_id, e2.first_name AS manager_first_name, e2.last_name AS manager_last_name
-- FROM employee AS e1
-- LEFT JOIN employee AS e2 ON e1.manager_id = e2.id;

SELECT e1.id, e1.first_name, e1.last_name, roles.title AS role_title, department.department_name, roles.salary, e2.first_name AS manager_first_name, e2.last_name AS manager_last_name
FROM employee AS e1
JOIN roles ON e1.role_id = roles.id
JOIN department ON roles.department_id = department.id
LEFT JOIN (
    SELECT id, first_name, last_name
    FROM employee
) AS e2 ON e1.manager_id = e2.id;