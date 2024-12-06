// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
 import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message:'Provide a short description the what, why, and how of your project:',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project?',
    },
   { type: 'input',
    name: 'usage',
    message: 'Provide usage instructions or example for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you run on your project?',
    },
    {    
       type: 'input',
       name: 'github',
       message: 'What is your Github username?',
    },
    {
       type: 'input',
       name: 'email',
       message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
err ? console.log(err) : console.log(`README file has been written to ${fileName}`);
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch((error) =>{
        console.error("Error during prompt:", error);
    });
}

// Function call to initialize app
init();
