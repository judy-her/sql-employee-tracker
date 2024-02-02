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
//TODO ADD view all roles
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

//TODO ADD view all employees

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
