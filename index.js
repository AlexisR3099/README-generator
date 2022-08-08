// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
    },
])};

const projectQuestions = readmeData => {
    if(!readmeData.data) {
        readmeData.data = [];
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
        }
    ])
}

//questions();
