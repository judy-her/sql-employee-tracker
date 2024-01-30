SELECT roles.id, roles.title, roles.salary, department.department_name 
FROM roles
JOIN department ON roles.department_id = department.id;

--NOTE this needs fixing
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

