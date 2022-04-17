const isCommand = async (inter) => {
	return inter.isCommand() ? inter.commandName : console.log('Err interaction')
}


module.exports = { isCommand }