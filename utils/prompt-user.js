const inquirer = require("inquirer");
module.exports = function () {
  return inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "What is GitHub username?",
    },
    {
      name: "project",
      type: "input",
      message: "What is your project title?",
    },
    {
      name: "description",
      type: "input",
      message: "Give a description of your project.",
    },
    {
      name: "installation",
      type: "input",
      message: "What are you installing?",
    },
    {
      name: "usage",
      type: "input",
      message: "How do you use the repo?",
    },
    {
      name: "contributors",
      type: "input",
      message: "Who else contributed on the repo?",
    },
    {
      name: "license",
      type: "list",
      message: "Does the project have a license?",
      choices: ["PostgreSQL", "Eclipse", "IBM"],
    }, 
    {
      name: "tests",
      type: "input",
      message: "What are the run commands for tests?",
    },
  ]);
};
