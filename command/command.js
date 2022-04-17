const {isCommand} = require('commandLogic.js')

function listenInteraction (inter) {
	isCommand(inter).then(command => {

		console.log(command)
	})
}

function listenMessage (msg) {

	console.log(msg)

}

module.exports = {listenInteraction, listenMessage}