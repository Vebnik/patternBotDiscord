const {isCommand} = require('./commandLogic.js')

function listenInteraction (inter) {
	isCommand(inter).then(command => {

		console.log(command)
	})
}

function listenMessage (msg) {

	console.log(msg)

}

function createLogin (ev) {
	//console.log(ev)
}

module.exports = {listenInteraction, listenMessage, createLogin}