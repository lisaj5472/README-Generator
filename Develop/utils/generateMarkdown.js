// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {    
  const licenseMap = {
  "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
  "GNU GPLv3": "https://img.shields.io/badge/License-GPLv3-blue.svg",
  "Apache 2.0": "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  "ISC": "https://img.shields.io/badge/License-ISC-blue.svg",
  "None": ""
};

return licenseMap[license] 
  ? `<img src="${licenseMap[license]}" alt="${license} License Badge">`
  : "";}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    "MIT": "https://opensource.org/licenses/MIT",
    "GNU GPLv3": "https://www.gnu.org/licenses/gpl-3.0",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "ISC": "https://opensource.org/licenses/ISC",
    "None": ""
  };

  return licenseLink[license] 
    ? `[${license}](${licenseLink[license]})`
    : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "None" 
    ? `This project is licensed under the ${license} license.`
    : "";
}

function renderQuestionsSection(data) {
  return data.github || data.email
    ? `For any questions, please contact me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}`
    : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
${renderQuestionsSection(data)}
`.trim();
}

export default generateMarkdown;
