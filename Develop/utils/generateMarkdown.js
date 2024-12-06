// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''; 
}

return `
![License badge] (https://img.shields.io/badge/license-${license}-blue.svg)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
}

 const links = {
  MIT: 'https://opensource.org/licenses/MIT',
  Apache: 'https://opensource.org/licenses/Apache-2.0', 
 GPL: 'https://opensource.org/licenses/GPL-3.0',
  BSD: 'https://opensource.org/licenses/BSD-3-Clause',
 
};
 return `[License] (${links[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return'';
  }
  return  `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  

   ${renderLicenseSection(data.license)}

   ${renderLicenseBadge(data.license)}
   

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please contact me at: [${data.email}].
  You can also find me on Github: [${data.github}] (https://github.com/${data.github}).
`;
};
// module.exports = generateMarkdown;
export default generateMarkdown;
