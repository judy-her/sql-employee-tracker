SELECT roles.id, roles.title, roles.salary, department.department_name 
FROM roles
JOIN department ON roles.department_id = department.id;

-- SELECT employee.id, employee.first_name, employee.last_name
-- FROM employee 
-- JOIN roles on employee.role_id = roles.id;