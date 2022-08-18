const fs = require('fs');

const formatAnswers = object => {
    newAnswers = JSON.stringify(object);
    return object;
};

const getTag = (string) => {
    let x = string
    switch(x) {
        case "Apache_2.0":
            string = "[![License](https://img.shileds.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "MIT":
            string = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    object = [x, string];
    return object;
}

// write read.me
const makeReadme = answers => {

const { GitHubname, email, title, license, contributors, description, installation } = answers;

template = `
# ${title}

## ${license}

## Description
${description}

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Contributors](#contributors)

## Installation
${installation}

## Contributors
${contributors}

## Questions can be asked here:
${GitHubname}
${email}`

return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', template, err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'README created'
        });
    });
});
};

module.exports = { makeReadme, formatAnswers, getTag };