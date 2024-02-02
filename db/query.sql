SELECT roles.id, roles.title, roles.salary, department.department_name 
FROM roles
JOIN department ON roles.department_id = department.id;

-- code from tutor salvarado in AskBCS
SELECT 
    e.id AS employee_id,
    e.first_name AS First_Name,
    e.last_name AS Last_Name,
    r.title AS Role,
    r.salary AS Salary,
    d.department_name AS Department,
    CONCAT(m.first_name, " ", m.last_name) AS Manager
FROM
    employee e
LEFT JOIN roles r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id;