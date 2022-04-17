const { listenInteraction, listenMessage, createLogin } = require('../command/command.js')
const chalk = require('chalk')

function StartApp () {

	this.start = (client) => {
		client.login(process.env.TOKEN)
			.then(start => console.log(chalk.blue(`App started: ${new Date().toISOString()}`)))
			.catch(err => console.error)
	}

	this.listenEvent = (client) => {
		client.on('interactionCreate', inter => { listenInteraction(inter) })

		client.on('messageCreate', message => { listenMessage(message) })

		client.on('ready', ev => { createLogin(ev) })
	}

}


module.exports = { StartApp }