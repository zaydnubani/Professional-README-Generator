const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation info to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information on how to use project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please describe how to test this project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project.',
        choices: ['P3', 'MS', 'On-Premise', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Please pick a license for the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?', 
    },
  ]);
};

const generateReadme = ({ title, description, installation, usage, licensing, contribution, testing, github, email }) =>
`# ${title}
## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)
## Description:
${description}
## Installation:
${installation}
## Usage:
${usage}
## License:
${licensing}
## Contribution:
${contribution}
## Testing:
${testing}
## Additional Info:
- Github: [${github}](https://github.com/${github})
- Email: ${email} `;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();