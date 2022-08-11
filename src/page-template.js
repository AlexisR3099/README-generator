const fs = require('fs');

const formatAnswers = object => {
    newAnswers = JSON.stringify(object);
    return object;
};

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

module.exports = { makeReadme, formatAnswers };