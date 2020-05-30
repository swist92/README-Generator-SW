module.exports = 
function (answers, gitInfo) {
  const email = gitInfo.email || "No email";
  
  
  return `
  # ${answers.username}
  ![GitHub repo size](https://img.shields.io/github/repo-size/${answers.username}/${answers.project})
  
  ## Description
  ${answers.description}
  \`\`\`
  ## Table of Contents
  *[Installation](#installation)
  
  *[Usage](#usage)
  
  *[Contributors](#contributors)
  
  *[Licenses](#licenses)
  
  *[Tests](#tests)
  
  *[Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributors
  ${answers.contributing}
  
  ## Licenses
  
  The licenses of this project are ${answers.license}
  
  <img src=“https://img.shields.io/badge/License-${answers.license}-blueviolet”></img>
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  
  Any questions relating to this project may contact GitHub user ${email}
  GitHub Info ${gitInfo.login}
  
  `;
};