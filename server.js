const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'brownie3',
    database: 'company_db',
  },
  console.log(`Connected to company_db database`)
);

//view all departments
const viewAll_Departments = async () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT id, department_name AS title FROM department`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.table(rows);
        resolve();
      }
    });
  });
};
//ADD view all roles
const viewall_roles = async () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT roles.id, roles.title, roles.salary, department.department_name 
    FROM roles
    JOIN department ON roles.department_id = department.id`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.table(rows);
        resolve();
      }
    });
  });
};

// ADD view all employees
const viewall_employees = async () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT 
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
LEFT JOIN employee m ON e.manager_id = m.id;`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.table(rows);
        resolve();
      }
    });
  });
};
//TODO add a Department
const add_department = async () => {
  const departmentQuestions = [
    {
      name: 'department_name',
      type: 'input',
      message: 'Enter the name of the new department:',
    },
  ];

  const answers = await inquirer.prompt(departmentQuestions);
  const { department_name } = answers;

  const sql = `INSERT INTO department (department_name) VALUES (?)`;
  const values = [department_name];

  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(`New department '${department_name}' added!`);
        resolve();
      }
    });
  });
};

//TODO add a role
const add_role = async () => {
  const roleQuestions = [
    {
      name: 'new_role',
      type: 'input',
      message: 'Enter the name of the new role:',
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Enter salary:',
    },
    {
      name: 'department',
      type: 'input',
      message: 'Which Department: ',
    },
  ];

  const answers = await inquirer.prompt(roleQuestions);
  const { new_role, salary, department } = answers;

  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
  const values = [new_role, salary, department];

  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(`New role '${new_role}' added!`);
        resolve();
      }
    });
  });
};

//main menu
const startQuestions = async () => {
  let exit = false;

  while (!exit) {
    const questions = [
      {
        name: 'option',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'view all departments',
          'view all roles',
          'view all employees',
          'add a department',
          'add a role',
          'add an employee',
          'update an employee role',
          'exit',
        ],
        pageSize: 10,
      },
    ];

    await inquirer.prompt(questions).then(async (answers) => {
      const { option } = answers;

      switch (option) {
        case 'view all departments':
          await viewAll_Departments();
          break;
        case 'view all roles':
          await viewall_roles();
          break;
        case 'view all employees':
          await viewall_employees();
          break;
        case 'add a department':
          await add_department();
          break;
        case 'add a role':
          await add_role();
          break;
        case 'exit':
          console.log('Goodbye!');
          exit = true;
          db.end();
          break;
      }
    });
  }
};

//start application
startQuestions();
