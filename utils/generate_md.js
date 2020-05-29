module.exports = 
function (answers, gitInfo) {
  const email = gitInfo.email || "No email";
  
  
  return `
  # ${answers.project}
  
  ## Description
  ${answers.description}
  \`\`\`
  ## Table of Contents
  *[Installation](#installation)
  
  *[Usage](#usage)
  
  *[Contributors](#contributing)
  
  *[Licenses](#lists)
  
  *[Tests](#tests)
  
  *[Questions](#questions)
  
  ## Install
  ${answers.install}
  
  ## Usage
  ${answers.usage}
  
  ## Contributors
  ${answers.contributing}
  
  ## Licenses
  
  The licenses of this project are ${answers.lists}
  
  <img src=“https://img.shields.io/badge/License-${answers.lists}-blueviolet”></img>
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  
  Any questions relating to this project may contact GitHub user ${email}
  GitHub Info ${gitInfo.login}
  
  `;
};