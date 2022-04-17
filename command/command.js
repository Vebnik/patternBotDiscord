const {isCommand} = require('./commandLogic.js')
const { colorLog } = require('../system/logConsole.js')

function listenInteraction (inter) {
	isCommand(inter).then(async commandName => {
		await inter.deferReply()

		// logic command
		console.log(commandName, inter)

	})
}

function listenMessage (msg) {

	// listen guild msg
	console.log(msg.content)

}

function createLogin (ev) {
	const inviteLink = ev.generateInvite({
		scopes: ['applications.commands', 'bot'],
		permissions: "ADMINISTRATOR"
	})
	colorLog.blue(`Invite Bot: ${inviteLink}`)
}

module.exports = {listenInteraction, listenMessage, createLogin}