const isCommand = async (inter) => {
	return inter.isCommand() ? inter.commandName : throw 'Err interaction'
}


module.exports = { isCommand }