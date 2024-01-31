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

//function to view all departments
const viewAll_Departments = () => {
  const sql = `SELECT id, department_name AS title FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      db.end();
      return;
    }
    console.table(rows);
    db.end();
  });
};

//main menu
const startQuestions = () => {
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
    },
  ];

  const askQuestions = () => {
    inquirer.prompt(questions).then((answers) => {
      const { option } = answers;

      switch (option) {
        case 'view all departments':
          viewAll_Departments();
          askQuestions();
          break;
        case 'exit':
          console.log('Goodbye!');
          db.end();
          break;
        // case  'view all roles':
      }
    });
  };
  askQuestions();
};

//start application
startQuestions();
