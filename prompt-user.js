const inquirer = require("inquirer");
module.exports = function () {
  return inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "what is username?",
    },
    {
        name: "project",
        type: "input",
        message: "what is your project name?",
      },
  ]);
};
