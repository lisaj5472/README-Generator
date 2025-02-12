
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";

function init() {
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of this project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license.",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines.",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions.",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
])
.then((userInput) => { 
    const readmeContent = generateMarkdown(userInput);
    writeToFile("ReadME.md", readmeContent);     
    });
}

function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
        err ? console.error(err) : console.log("Success! README.md has been generated.")
    );
}

init()
