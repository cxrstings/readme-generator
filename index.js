// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can users use this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which licenses did you use?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Can you provide examples of this project being tested?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>{
        generateMarkdown(data);
        writeToFile("README.md", data);
    });
};

// Function call to initialize app
init();
