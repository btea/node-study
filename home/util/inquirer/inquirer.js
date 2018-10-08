var inquirer = require('inquirer');

inquirer.prompt([
    {'name':'what is your name?'}
]).then(answer => {
    console.log(answer);
})