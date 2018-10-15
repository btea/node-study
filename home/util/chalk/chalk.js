const chalk = require('chalk');
const log = console.log;
const color = require('../colors/color');


log(chalk.blue('Hello') + ' World' + chalk.red('!'));


log(chalk.blue.bgRed.bold('Hello world!'));


log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);


const miles = 18;
const calculateFeet = miles => miles * 5280;
 
console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);