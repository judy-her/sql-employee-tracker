SELECT roles.id, roles.title, roles.salary, department.department_name 
FROM roles
JOIN department ON roles.department_id = department.id;

-- NOTE this needs fixing
-- SELECT employee.id, 
-- employee.first_name, 
-- employee.last_name, 
-- roles.title as role_title, 
-- department.department_name, 
-- roles.salary, 

-- employee.manager_id
-- FROM employee 
-- JOIN roles ON employee.role_id = roles.id
-- JOIN department ON roles.department_id = department.id
-- LEFT JOIN employee ON employee.manager_id = manager_id;

-- code from tutor salvarado in AskBCS
SELECT 
    e.first_name AS Employee_First_Name,
    e.last_name AS Employee_Last_Name,
    r.title AS Role,
    d.department_name AS Department,
    m.first_name AS Manager_First_Name,
    m.last_name AS Manager_Last_Name
FROM
    employee e
LEFT JOIN roles r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id;