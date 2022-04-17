const {isCommand} = require('./commandLogic.js')
const { colorLog } = require('../system/logConsole.js')

function listenInteraction (inter) {
	isCommand(inter).then(command => {

		console.log(command)

	})
}

function listenMessage (msg) {

	console.log(msg)

}

function createLogin (ev) {
	const inviteLink = ev.generateInvite({
		scopes: ['applications.commands', 'bot'],
		permissions: "ADMINISTRATOR"
	})
	colorLog.blue(`Invite Bot: ${inviteLink}`)
}

module.exports = {listenInteraction, listenMessage, createLogin}