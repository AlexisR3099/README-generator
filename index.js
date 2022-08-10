// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const makeReadme = require('./src/page-template');

// TODO: Create an array of questions for user input
const userQuestions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'GitHub name',
        message: 'What is your GitHub username? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter GitHub name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    }
])};

const projectQuestions = readmeData => {
    if(!readmeData.projects) {
        readmeData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Project title',
            message: 'What is the title of your project? (Required)',
            validate: projectTitle => {
                if(projectTitle) {
                    return true;
                } else {
                    console.log('Projects must have a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:',
            validate: descriptionProject => {
                if (descriptionProject) {
                    return true;
                }
            }
        },
        {
            type
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'List all contributors to your project'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Provide instructions on how to clone/install your project',
            validate: inStall => {
                if(inStall) {
                    return true;
                } else {
                    console.log('Must include directions on how to download your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose from one of the licenses below',
            choices: ['Apache_2.0', 'MIT', 'ISC']
        }
    ])
};

userQuestions().then(projectQuestions);
