// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { makeReadme, formatAnswers } = require('./src/page-template');

// TODO: Create an array of questions for user input
const userQuestions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'GitHubname',
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
        name: 'email',
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
    {
        type: 'input',
        name: 'title',
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
        type: 'input',
        name: 'contributors',
        message: 'List all contributors to your project'
    },
    {
        type: 'input',
        name: 'installation',
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
    },
    {
        type: 'confirm',
        name: 'confirmProject',
        message: 'Create README?',
        default: false,
        validate: yesorNo => {
            if(yesorNo) {
                return userQuestions;
            } else {
                console.log(err);
            }
        }
    }
])
};

userQuestions()
.then(userQuestions => {
    userQuestions.GitHubname = formatAnswers(userQuestions.GitHubname);
    userQuestions.email = formatAnswers(userQuestions.email);
    userQuestions.title = formatAnswers(userQuestions.title);
    userQuestions.description = formatAnswers(userQuestions.description);
    userQuestions.contributors = formatAnswers(userQuestions.contributors);
    userQuestions.installation = formatAnswers(userQuestions.installation);
    makeReadme(userQuestions);
});
