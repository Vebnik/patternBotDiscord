const { listenInteraction, listenMessage } = require('../command/command.js')

function StartApp () {

	this.start = (client) => {
		client.login(process.env.TOKEN)
			.then(start => console.log(`App started: ${Date.now()}`))
			.catch(err => throw err)
	}

	this.listenEvent = (client) => {
		client.on('interactionCreate', inter => { listenInteraction(inter) })

		client.on('messageCreate', message => { listenMessage(message) })
	}

}


module.exports = { StartApp }