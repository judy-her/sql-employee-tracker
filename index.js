const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const questions = () => {
  return inquirer.prompt([
    {
      name: 'options',
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
      ],
    },
  ]);
};

// const init = () => {
//   questions();
//   // .then((answers) => writeFile('questions.txt', questions(answers)))
//   // .then(() => console.log('Text File succesfully written'))
//   // .catch((err) => console.log(err));
// };

// init();
