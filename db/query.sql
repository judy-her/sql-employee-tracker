SELECT roles.id, roles.title, roles.salary, department.department_name 
FROM roles
JOIN department ON roles.department_id = department.id;



SELECT employee.id, employee.first_name, employee.last_name, roles.title as role_title, department.department_name, roles.salary
FROM employee 
JOIN roles ON employee.role_id = roles.id
JOIN department ON roles.department_id = department.id;