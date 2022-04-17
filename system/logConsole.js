const chalk = require('chalk')

const colorLog = {
	blue: (str) => console.log(chalk.blue(str)),
	red: (str) => console.log(chalk.red(str))
}


module.exports = {colorLog}